import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import Link from 'next/link';
import { Plus, Bell, Pencil } from 'lucide-react';
import DeleteNoticeButton from './DeleteNoticeButton';

const typeColors: Record<string, string> = {
  exam: 'bg-red-50 text-red-600',
  academic: 'bg-blue-50 text-blue-600',
  holiday: 'bg-green-50 text-green-600',
  general: 'bg-gray-100 text-gray-600',
};

export default async function AdminNotices() {
  const supabase = await createClient();
  const collegeId = await getAdminCollegeId();
  const { data: notices } = await supabase
    .from('notices')
    .select('id, title, notice_type, is_active, expires_at, created_at')
    .eq('college_id', collegeId)
    .order('created_at', { ascending: false });

  function formatDate(d: string | null) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notices</h1>
          <p className="text-gray-500 text-sm mt-0.5">{notices?.length ?? 0} total notices</p>
        </div>
        <Link
          href="/admin/notices/new"
          className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#004d28] transition"
        >
          <Plus className="w-4 h-4" />
          New Notice
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {notices && notices.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-600">Title</th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 hidden sm:table-cell">
                    Type
                  </th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600">Status</th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 hidden md:table-cell">
                    Expires
                  </th>
                  <th className="text-right px-5 py-3.5 font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {notices.map((notice) => (
                  <tr key={notice.id} className="hover:bg-gray-50/50 transition">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#006837]/10 flex items-center justify-center flex-shrink-0">
                          <Bell className="w-4 h-4 text-[#006837]" />
                        </div>
                        <p className="font-medium text-gray-800 line-clamp-1">{notice.title}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden sm:table-cell">
                      <span
                        className={`text-xs capitalize px-2.5 py-1 rounded-full font-medium ${
                          typeColors[notice.notice_type] ?? typeColors.general
                        }`}
                      >
                        {notice.notice_type}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          notice.is_active
                            ? 'bg-green-50 text-green-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {notice.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-400 hidden md:table-cell">
                      {formatDate(notice.expires_at)}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/notices/${notice.id}`}
                          className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-[#006837] px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                          Edit
                        </Link>
                        <DeleteNoticeButton id={notice.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-16 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#006837]/10 rounded-2xl flex items-center justify-center mb-4">
              <Bell className="w-7 h-7 text-[#006837]" />
            </div>
            <p className="font-semibold text-gray-700 mb-1">No notices yet</p>
            <p className="text-sm text-gray-400 mb-5">
              Create your first notice to display on the site.
            </p>
            <Link
              href="/admin/notices/new"
              className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#004d28] transition"
            >
              <Plus className="w-4 h-4" />
              New Notice
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
