import { NextResponse, type NextRequest } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const projectRef = supabaseUrl.match(/https?:\/\/([^.]+)\.supabase\.co/)?.[1] ?? '';

// Decode a base64url string (used by @supabase/ssr v0.5+ cookie encoding).
// Middleware runs in the Edge runtime, so we use atob after converting to standard base64.
function decodeBase64URL(str: string): string {
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(base64.length + (4 - (base64.length % 4)) % 4, '=');
  return atob(padded);
}

// Check session by reading the Supabase auth cookie directly — no network calls.
function hasSession(request: NextRequest): boolean {
  if (!projectRef) return false;

  const cookieName = `sb-${projectRef}-auth-token`;

  // Try single (unchunked) cookie first
  const single = request.cookies.get(cookieName);
  let raw = single?.value ?? '';

  // If not found as single, combine all chunks (.0, .1, .2, ...)
  if (!raw) {
    const chunks: string[] = [];
    for (let i = 0; i <= 5; i++) {
      const chunk = request.cookies.get(`${cookieName}.${i}`);
      if (!chunk) break;
      chunks.push(chunk.value);
    }
    raw = chunks.join('');
  }

  if (!raw) return false;

  try {
    // @supabase/ssr v0.5+ stores the session as "base64-{base64url}" encoded JSON
    let json = raw;
    if (raw.startsWith('base64-')) {
      json = decodeBase64URL(raw.slice(7));
    }

    let parsed: { expires_at?: number; access_token?: string };
    try {
      parsed = JSON.parse(atob(json));
    } catch {
      parsed = JSON.parse(json);
    }
    if (!parsed?.access_token) return false;
    // If expires_at is present, check it; allow a small clock-skew buffer
    if (parsed.expires_at && Date.now() / 1000 > parsed.expires_at + 10) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

// Delete all Supabase auth cookies from a response to prevent the browser
// client from trying to refresh a stale/expired session on the login page.
function clearAuthCookies(response: NextResponse) {
  if (!projectRef) return;
  const base = `sb-${projectRef}-auth-token`;
  for (const name of [base, `${base}.0`, `${base}.1`]) {
    response.cookies.delete(name);
  }
}

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isLoginPage = request.nextUrl.pathname === '/admin/login';

  const loggedIn = hasSession(request);

  if (isAdminRoute && !isLoginPage && !loggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    const response = NextResponse.redirect(url);
    // Clear stale tokens so createBrowserClient on the login page won't
    // find an expired session and fire a background refresh network call.
    clearAuthCookies(response);
    return response;
  }

  if (isLoginPage && loggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/dashboard';
    return NextResponse.redirect(url);
  }

  return NextResponse.next({ request });
}

export const config = {
  matcher: ['/admin/:path*'],
};
