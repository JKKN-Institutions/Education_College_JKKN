import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import AdminSidebar from './AdminSidebar';
import ToastProvider from './ToastProvider';
import { AdminCollegeProvider } from './AdminCollegeContext';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  let user = null;
  let isSuperAdmin = false;
  let colleges: { id: string; name: string }[] = [];
  let currentCollegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  try {
    // getSession reads from the cookie — no network round-trip to Supabase auth server.
    const { data: { session } } = await supabase.auth.getSession();
    user = session?.user ?? null;

    if (user) {
      const { data: profile } = await supabase
        .from('staff_profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      isSuperAdmin = profile?.role === 'super_admin';
      const canSwitchCollege = isSuperAdmin || profile?.role === 'seo';

      if (canSwitchCollege) {
        const { data } = await supabase
          .from('colleges')
          .select('id, name')
          .eq('is_active', true)
          .order('name');
        colleges = data ?? [];
        currentCollegeId = await getAdminCollegeId();
      }
    }
  } catch {
    // Cookie parse error — render layout without sidebar
  }

  return (
    <AdminCollegeProvider collegeId={currentCollegeId}>
      <div className="min-h-screen bg-gray-50 flex">
        <ToastProvider />
        {user && (
          <AdminSidebar
            userEmail={user.email ?? ''}
            isSuperAdmin={isSuperAdmin}
            colleges={colleges}
            currentCollegeId={currentCollegeId}
            canSwitchCollege={isSuperAdmin || colleges.length > 0}
          />
        )}
        <main className={`flex-1 ${user ? 'lg:ml-64' : ''} min-h-screen`}>{children}</main>
      </div>
    </AdminCollegeProvider>
  );
}
