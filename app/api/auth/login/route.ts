import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import https from 'node:https';
import http from 'node:http';
import tls from 'node:tls';
import { execSync } from 'node:child_process';

// ---------------------------------------------------------------------------
// Proxy detection — env vars first, then Windows Internet Settings registry.
// Chrome/Edge on Windows use the system proxy automatically; Node.js does not.
// ---------------------------------------------------------------------------
function getProxy(): string | null {
  const fromEnv =
    process.env.HTTPS_PROXY ||
    process.env.https_proxy ||
    process.env.HTTP_PROXY ||
    process.env.http_proxy;
  if (fromEnv) return fromEnv;

  if (process.platform !== 'win32') return null;

  try {
    const enabled = execSync(
      'reg query "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /v ProxyEnable',
      { encoding: 'utf-8', timeout: 1500 }
    );
    if (!enabled.includes('0x1')) return null;

    const server = execSync(
      'reg query "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /v ProxyServer',
      { encoding: 'utf-8', timeout: 1500 }
    );
    const m = server.match(/ProxyServer\s+REG_SZ\s+(\S+)/);
    if (!m) return null;
    const p = m[1].trim();
    return p.includes('://') ? p : `http://${p}`;
  } catch {
    return null;
  }
}

const PROXY = getProxy(); // resolved once at module load

// ---------------------------------------------------------------------------
// HTTPS request helper — uses proxy CONNECT tunnel when a proxy is detected,
// otherwise uses a direct IPv4 connection (bypasses undici/native-fetch).
// ---------------------------------------------------------------------------
function httpsRequest(
  targetUrl: URL,
  method: string,
  reqHeaders: Record<string, string>,
  body?: Buffer
): Promise<Response> {
  return new Promise((resolve, reject) => {
    function onResponse(res: http.IncomingMessage) {
      const chunks: Buffer[] = [];
      res.on('data', (c: Buffer) => chunks.push(c));
      res.on('end', () => {
        const h = new Headers();
        for (const [k, v] of Object.entries(res.headers)) {
          if (v) h.set(k, Array.isArray(v) ? v.join(', ') : v);
        }
        resolve(new Response(Buffer.concat(chunks), { status: res.statusCode ?? 200, headers: h }));
      });
      res.on('error', reject);
    }

    const commonOpts: https.RequestOptions = {
      hostname: targetUrl.hostname,
      port: targetUrl.port ? parseInt(targetUrl.port, 10) : 443,
      path: targetUrl.pathname + targetUrl.search,
      method: method.toUpperCase(),
      headers: reqHeaders,
    };

    if (PROXY) {
      // Route through HTTP proxy using CONNECT tunnel
      const proxy = new URL(PROXY);
      const tunnel = http.request({
        hostname: proxy.hostname,
        port: parseInt(proxy.port || '8080', 10),
        method: 'CONNECT',
        path: `${targetUrl.hostname}:443`,
        headers: { Host: `${targetUrl.hostname}:443` },
      });

      tunnel.on('connect', (_res, socket) => {
        const tlsSocket = tls.connect({ socket, servername: targetUrl.hostname });
        tlsSocket.on('secureConnect', () => {
          const req = https.request(
            {
              ...commonOpts,
              // supply the already-established TLS socket
              createConnection: () => tlsSocket as unknown as ReturnType<typeof https.request['prototype']['socket']['constructor']>,
            },
            onResponse
          );
          req.on('error', reject);
          if (body) req.write(body);
          req.end();
        });
        tlsSocket.on('error', reject);
      });

      tunnel.on('error', reject);
      tunnel.end();
    } else {
      // Direct connection, force IPv4 to bypass Windows IPv6 preference
      const req = https.request({ ...commonOpts, family: 4 }, onResponse);
      req.on('error', reject);
      if (body) req.write(body);
      req.end();
    }
  });
}

// Custom fetch passed to Supabase client — uses httpsRequest instead of undici
const customFetch = (url: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  const targetUrl = new URL(url instanceof URL ? url.href : url.toString());

  let body: Buffer | undefined;
  if (init?.body) {
    body = Buffer.from(typeof init.body === 'string' ? init.body : String(init.body));
  }

  const headers: Record<string, string> = {};
  if (init?.headers) {
    const h = init.headers;
    if (h instanceof Headers) {
      h.forEach((v, k) => { headers[k] = v; });
    } else if (Array.isArray(h)) {
      (h as string[][]).forEach(([k, v]) => { headers[k] = v; });
    } else {
      Object.assign(headers, h);
    }
  }
  if (body) headers['content-length'] = String(body.byteLength);

  return httpsRequest(targetUrl, init?.method ?? 'GET', headers, body);
};

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const pendingCookies: Array<{
      name: string;
      value: string;
      options: Record<string, unknown>;
    }> = [];

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return request.cookies.getAll(); },
          setAll(cookies) {
            cookies.forEach(({ name, value, options }) => {
              pendingCookies.push({ name, value, options: options ?? {} });
            });
          },
        },
        global: { fetch: customFetch },
      }
    );

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const response = NextResponse.json({ success: true });
    pendingCookies.forEach(({ name, value, options }) => {
      response.cookies.set(
        name,
        value,
        options as Parameters<typeof response.cookies.set>[2]
      );
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: 'Network error — please check your connection and try again.' },
      { status: 500 }
    );
  }
}
