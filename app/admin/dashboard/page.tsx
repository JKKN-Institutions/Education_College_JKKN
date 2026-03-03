import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import { FileText, Image as ImageIcon, Bell, ExternalLink, Plus, CalendarDays, Users } from 'lucide-react';
import Link from 'next/link';

export default async function AdminDashboard() {
  const supabase = await createClient();

  const collegeId = await getAdminCollegeId();
  const results = await Promise.allSettled([
    supabase.from('events').select('*', { count: 'exact', head: true }).eq('college_id', collegeId),
    supabase.from('events').select('*', { count: 'exact', head: true }).eq('college_id', collegeId).eq('is_published', true),
    supabase.from('blogs').select('*', { count: 'exact', head: true }).eq('college_id', collegeId),
    supabase.from('blogs').select('*', { count: 'exact', head: true }).eq('college_id', collegeId).eq('is_published', true),
    supabase.from('gallery_albums').select('*', { count: 'exact', head: true }).eq('college_id', collegeId),
    supabase.from('gallery_images').select('*', { count: 'exact', head: true }).eq('college_id', collegeId),
    supabase.from('notices').select('*', { count: 'exact', head: true }).eq('college_id', collegeId),
    supabase.from('notices').select('*', { count: 'exact', head: true }).eq('college_id', collegeId).eq('is_active', true),
    supabase.from('faculty').select('*', { count: 'exact', head: true }).eq('college_id', collegeId).eq('is_active', true),
    supabase.from('blogs').select('id, title, category, created_at, is_published').eq('college_id', collegeId).order('created_at', { ascending: false }).limit(3),
    supabase.from('notices').select('id, title, notice_type, created_at, is_active').eq('college_id', collegeId).order('created_at', { ascending: false }).limit(3),
  ]);

  function getCount(r: typeof results[number]) {
    return r.status === 'fulfilled' ? (r.value.count ?? 0) : 0;
  }
  function getData<T>(r: typeof results[number]): T[] {
    return r.status === 'fulfilled' ? ((r.value as { data: T[] }).data ?? []) : [];
  }

  const [eventsCount, publishedEvents, blogsCount, publishedBlogs, albumsCount, photosCount, noticesCount, activeNotices, facultyCount] = results.slice(0, 9).map(getCount);
  const recentBlogs = getData<{ id: string; title: string; category: string; created_at: string; is_published: boolean }>(results[9]);
  const recentNotices = getData<{ id: string; title: string; notice_type: string; created_at: string; is_active: boolean }>(results[10]);

  const stats = [
    {
      label: 'Events',
      total: eventsCount ?? 0,
      sub: `${publishedEvents ?? 0} published`,
      icon: CalendarDays,
      color: 'bg-green-50 text-green-600',
      href: '/admin/events',
    },
    {
      label: 'Blog Posts',
      total: blogsCount ?? 0,
      sub: `${publishedBlogs ?? 0} published`,
      icon: FileText,
      color: 'bg-blue-50 text-blue-600',
      href: '/admin/blogs',
    },
    {
      label: 'Gallery Albums',
      total: albumsCount ?? 0,
      sub: `${photosCount ?? 0} photos total`,
      icon: ImageIcon,
      color: 'bg-purple-50 text-purple-600',
      href: '/admin/gallery',
    },
    {
      label: 'Notices',
      total: noticesCount ?? 0,
      sub: `${activeNotices ?? 0} active`,
      icon: Bell,
      color: 'bg-amber-50 text-amber-600',
      href: '/admin/notices',
    },
    {
      label: 'Faculty',
      total: facultyCount ?? 0,
      sub: 'active members',
      icon: Users,
      color: 'bg-rose-50 text-rose-600',
      href: '/admin/faculty',
    },
  ];

  function timeAgo(dateStr: string) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return `${mins}m ago`;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back — here&apos;s what&apos;s happening on your site.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {stats.map(({ label, total, sub, icon: Icon, color, href }) => (
          <Link
            key={label}
            href={href}
            className="bg-white rounded-2xl p-3 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-gray-300" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">{total}</p>
            <p className="text-sm font-medium text-gray-600 mt-0.5">{label}</p>
            <p className="text-xs text-gray-400 mt-1">{sub}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 mb-6">
        <h2 className="font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/events/new"
            className="flex items-center gap-2 bg-[#006837] text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-[#005a2e] transition"
          >
            <Plus className="w-4 h-4" />
            New Event
          </Link>
          <Link
            href="/admin/blogs/new"
            className="flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-blue-700 transition"
          >
            <Plus className="w-4 h-4" />
            New Blog Post
          </Link>
          <Link
            href="/admin/gallery/new"
            className="flex items-center gap-2 bg-purple-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-purple-700 transition"
          >
            <Plus className="w-4 h-4" />
            New Album
          </Link>
          <Link
            href="/admin/notices/new"
            className="flex items-center gap-2 bg-amber-500 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-amber-600 transition"
          >
            <Plus className="w-4 h-4" />
            New Notice
          </Link>
          <Link
            href="/admin/faculty/new"
            className="flex items-center gap-2 bg-rose-500 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-rose-600 transition"
          >
            <Plus className="w-4 h-4" />
            Add Faculty
          </Link>
        </div>
      </div>

      {/* Recent content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Blogs */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Recent Blog Posts</h2>
            <Link href="/admin/blogs" className="text-xs text-[#006837] font-medium hover:underline">
              View all
            </Link>
          </div>
          {recentBlogs && recentBlogs.length > 0 ? (
            <div className="space-y-3">
              {recentBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/admin/blogs/${blog.id}`}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{blog.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-gray-400">{timeAgo(blog.created_at)}</span>
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded-full ${
                          blog.is_published
                            ? 'bg-green-50 text-green-600'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {blog.is_published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 text-center py-6">No blog posts yet.</p>
          )}
        </div>

        {/* Recent Notices */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Recent Notices</h2>
            <Link href="/admin/notices" className="text-xs text-[#006837] font-medium hover:underline">
              View all
            </Link>
          </div>
          {recentNotices && recentNotices.length > 0 ? (
            <div className="space-y-3">
              {recentNotices.map((notice) => (
                <Link
                  key={notice.id}
                  href={`/admin/notices/${notice.id}`}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{notice.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-gray-400">{timeAgo(notice.created_at)}</span>
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded-full capitalize ${
                          notice.is_active
                            ? 'bg-green-50 text-green-600'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {notice.notice_type}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 text-center py-6">No notices yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
