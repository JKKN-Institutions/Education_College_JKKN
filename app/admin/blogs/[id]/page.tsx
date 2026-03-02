import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import { notFound } from 'next/navigation';
import EditPostForm from './EditPostForm';

export default async function EditBlog({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const collegeId = await getAdminCollegeId();

  const [
    { data: blog },
    { data: { session } },
    { data: categories },
    { data: tags },
  ] = await Promise.all([
    supabase.from('blogs').select('*').eq('id', id).eq('college_id', collegeId).single(),
    supabase.auth.getSession(),
    supabase.from('blog_categories').select('id, name, slug, color').eq('college_id', collegeId).eq('is_active', true).order('name'),
    supabase.from('blog_tags').select('id, name, slug, color').eq('college_id', collegeId).order('name'),
  ]);

  if (!blog) notFound();

  const user = session?.user ?? null;

  return (
    <EditPostForm
      blog={blog}
      userEmail={user?.email ?? ''}
      userName={user?.user_metadata?.full_name ?? user?.email?.split('@')[0] ?? 'Admin'}
      userAvatar={user?.user_metadata?.avatar_url ?? ''}
      categories={categories ?? []}
      tags={tags ?? []}
    />
  );
}
