import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Only super_admins may switch colleges
  const { data: profile } = await supabase
    .from('staff_profiles')
    .select('role')
    .eq('id', session.user.id)
    .single();

  if (!['super_admin', 'seo'].includes(profile?.role ?? '')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const body = await request.json();
  const collegeId: string = body.college_id ?? '';
  if (!collegeId) {
    return NextResponse.json({ error: 'college_id is required' }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true, college_id: collegeId });
  response.cookies.set('admin_college_id', collegeId, {
    httpOnly: false,       // readable by client so context can re-seed on hydration if needed
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/admin',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  return response;
}
