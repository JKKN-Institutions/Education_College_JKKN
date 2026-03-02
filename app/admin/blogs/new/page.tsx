import { createClient } from '@/lib/supabase/server';
import NewPostForm from './NewPostForm';

export default async function NewBlogPostPage() {
  const supabase = await createClient();

  const [
    { data: { session } },
    { data: categories },
    { data: tags },
  ] = await Promise.all([
    supabase.auth.getSession(),
    supabase.from('blog_categories').select('id, name, slug, color').eq('is_active', true).order('name'),
    supabase.from('blog_tags').select('id, name, slug, color').order('name'),
  ]);

  const user = session?.user ?? null;

  return (
    <NewPostForm
      userEmail={user?.email ?? ''}
      userName={user?.user_metadata?.full_name ?? user?.email?.split('@')[0] ?? 'Admin'}
      userAvatar={user?.user_metadata?.avatar_url ?? ''}
      categories={categories ?? []}
      tags={tags ?? []}
    />
  );
}
