import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import CommentsClient, { RefreshButton } from './CommentsClient';

export default async function BlogCommentsPage() {
  const supabase = await createClient();

  const { data: comments } = await supabase
    .from('blog_comments')
    .select('*, blogs(title, slug)')
    .eq('college_id', await getAdminCollegeId())
    .order('created_at', { ascending: false });

  const all = comments ?? [];
  const stats = {
    total: all.length,
    pending: all.filter((c) => c.status === 'pending').length,
    approved: all.filter((c) => c.status === 'approved').length,
    rejected: all.filter((c) => c.status === 'rejected').length,
    spam: all.filter((c) => c.status === 'spam').length,
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Page Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-5 h-5 text-[#006837]" />
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl font-bold text-gray-900">Comment Moderation</h1>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#006837] bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006837]" />
                Blog
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-0.5">Review and moderate blog comments</p>
          </div>
        </div>

        <div className="flex items-center gap-2 justify-end">
          <Link
            href="/admin/blogs"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50 transition"
          >
            ← Back to Posts
          </Link>
          <RefreshButton />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
        <div className="bg-white rounded-2xl border-2 border-[#006837] shadow-sm p-4">
          <p className="text-sm text-gray-500 mb-1">Total</p>
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <p className="text-sm text-amber-500 font-medium mb-1">Pending</p>
          <p className="text-2xl font-bold text-amber-500">{stats.pending}</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <p className="text-sm text-green-600 font-medium mb-1">Approved</p>
          <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <p className="text-sm text-red-500 font-medium mb-1">Rejected</p>
          <p className="text-2xl font-bold text-red-500">{stats.rejected}</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <p className="text-sm text-gray-500 mb-1">Spam</p>
          <p className="text-2xl font-bold text-gray-700">{stats.spam}</p>
        </div>
      </div>

      <CommentsClient comments={all} />
    </div>
  );
}
