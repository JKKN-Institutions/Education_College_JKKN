import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import Link from 'next/link';
import { FolderOpen } from 'lucide-react';
import CategoriesClient, { NewCategoryButton } from './CategoriesClient';

export default async function BlogCategoriesPage() {
  const supabase = await createClient();

  const collegeId = await getAdminCollegeId();
  const { data: categories } = await supabase
    .from('blog_categories')
    .select('*')
    .eq('college_id', collegeId)
    .order('name');

  // Get post counts per category
  const { data: blogs } = await supabase
    .from('blogs')
    .select('category')
    .eq('college_id', collegeId);

  const postCounts: Record<string, number> = {};
  (blogs ?? []).forEach((b) => {
    if (b.category) {
      postCounts[b.category] = (postCounts[b.category] ?? 0) + 1;
    }
  });

  return (
    <div className="p-6 lg:p-8">
      {/* Page Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <FolderOpen className="w-5 h-5 text-[#006837]" />
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl font-bold text-gray-900">Blog Categories</h1>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#006837] bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006837]" />
                Blog
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-0.5">Organize your blog posts into categories</p>
          </div>
        </div>

        <div className="flex items-center gap-2 justify-end">
          <Link
            href="/admin/blogs"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50 transition"
          >
            ← Back to Posts
          </Link>
          <NewCategoryButton />
        </div>
      </div>

      <CategoriesClient categories={categories ?? []} postCounts={postCounts} />
    </div>
  );
}
