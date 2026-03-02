import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Building2, Globe, CheckCircle2, XCircle } from 'lucide-react';
import CollegeSwitchButton from './CollegeSwitchButton';

export default async function AdminCollegesPage() {
  const supabase = await createClient();

  // Guard: only super_admin can access this page
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) redirect('/admin/login');

  const { data: profile } = await supabase
    .from('staff_profiles')
    .select('role')
    .eq('id', session.user.id)
    .single();

  if (profile?.role !== 'super_admin') redirect('/admin/dashboard');

  // Fetch all colleges with content counts
  const { data: colleges } = await supabase
    .from('colleges')
    .select('id, name, domain, is_active')
    .order('name');

  // Fetch counts per college for key tables
  const collegeIds = (colleges ?? []).map((c) => c.id);

  const [blogsRes, eventsRes, noticesRes, facultyRes] = await Promise.all([
    supabase.from('blogs').select('college_id').in('college_id', collegeIds),
    supabase.from('events').select('college_id').in('college_id', collegeIds),
    supabase.from('notices').select('college_id').in('college_id', collegeIds),
    supabase.from('faculty').select('college_id').in('college_id', collegeIds),
  ]);

  function countFor(rows: { college_id: string }[] | null, cid: string) {
    return (rows ?? []).filter((r) => r.college_id === cid).length;
  }

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Building2 className="w-5 h-5 text-[#006837]" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Colleges</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              All {colleges?.length ?? 0} JKKN institutions — select one to manage its content
            </p>
          </div>
        </div>
      </div>

      {/* Colleges grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(colleges ?? []).map((college) => {
          const blogs = countFor(blogsRes.data, college.id);
          const events = countFor(eventsRes.data, college.id);
          const notices = countFor(noticesRes.data, college.id);
          const faculty = countFor(facultyRes.data, college.id);

          return (
            <div
              key={college.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4"
            >
              {/* College name + status */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-gray-900 text-sm leading-tight">{college.name}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Globe className="w-3.5 h-3.5 text-gray-400" />
                    <p className="text-xs text-gray-400">{college.domain}</p>
                  </div>
                </div>
                {college.is_active ? (
                  <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                    Active
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full flex-shrink-0">
                    <XCircle className="w-3 h-3" />
                    Inactive
                  </span>
                )}
              </div>

              {/* Content stats */}
              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  { label: 'Blogs', value: blogs },
                  { label: 'Events', value: events },
                  { label: 'Notices', value: notices },
                  { label: 'Faculty', value: faculty },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-gray-50 rounded-xl py-2">
                    <p className="text-base font-bold text-gray-800">{value}</p>
                    <p className="text-[10px] text-gray-400">{label}</p>
                  </div>
                ))}
              </div>

              {/* Switch button */}
              <CollegeSwitchButton collegeId={college.id} collegeName={college.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
