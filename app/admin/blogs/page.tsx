import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import Link from 'next/link';
import { Plus, FileText } from 'lucide-react';
import BlogsTableClient from './BlogsTableClient';

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

  return (
    <div className="p-4 sm:p-6 lg:p-8">
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
      <BlogsTableClient blogs={blogs ?? []} categories={categories ?? []} />
    </div>
  );
}
