import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import Link from 'next/link';
import { Plus, FileText } from 'lucide-react';
import BlogsTableClient from './BlogsTableClient';
import { blogFromMyJkkn } from '@/lib/blog/myjkkn';
import { MYJKKN_URL } from '@/lib/blog/config';

export default async function AdminBlogsPage() {
  const supabase = await createClient();

  const collegeId = await getAdminCollegeId();
  const [{ data: blogs }, { data: categories }] = await Promise.all([
    supabase
      .from('blogs')
      .select('id, title, slug, category, author_name, is_published, created_at, published_at, view_count, read_time')
      .eq('college_id', collegeId)
      .order('created_at', { ascending: false }),
    supabase
      .from('blog_categories')
      .select('id, name, slug')
      .eq('college_id', collegeId)
      .eq('is_active', true)
      .order('name'),
  ]);

  // Preview tokens live in a separate query so the list still renders if the
  // preview_token column has not been added to the database yet.
  const { data: tokenRows } = await supabase
    .from('blogs')
    .select('id, preview_token')
    .eq('college_id', collegeId);

  const tokenById = new Map((tokenRows ?? []).map((r) => [r.id, r.preview_token]));
  const blogsWithTokens = (blogs ?? []).map((b) => ({
    ...b,
    preview_token: tokenById.get(b.id) ?? null,
  }));

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* BLOG_SOURCE=myjkkn: the website reads posts from MyJKKN, so anything saved here no longer shows. */}
      {blogFromMyJkkn() && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 mb-6">
          <p className="text-sm font-semibold text-amber-900">Blog posts are now written in MyJKKN</p>
          <p className="text-sm text-amber-800 mt-1">
            The website shows the posts published in MyJKKN (Website Blog). A post added or changed on
            this page will not appear on the website.{' '}
            <a href={`${MYJKKN_URL}/website/blog`} className="underline font-semibold" target="_blank" rel="noreferrer">
              Open Website Blog in MyJKKN
            </a>
          </p>
        </div>
      )}
      {/* Page Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 mb-6">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-[#006837]" />
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl font-bold text-gray-900">Blog Posts</h1>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#006837] bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006837]" />
                Blog
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-0.5">Create and manage blog posts with rich content editor</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <Link
            href="/admin/blogs/new"
            className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#005a2e] transition"
          >
            <Plus className="w-4 h-4" />
            New Post
          </Link>
        </div>
      </div>

      {/* Table Section */}
      <BlogsTableClient blogs={blogsWithTokens} categories={categories ?? []} />
    </div>
  );
}
