import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import CampusBlogContent from '../../campus/[slug]/CampusBlogContent';
import { processContent, calcReadMeta, toRenderableHtml } from '@/lib/blog-render';

// Never cached, never indexed — this route can expose unpublished content.
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Draft Preview',
  robots: { index: false, follow: false, nocache: true },
};

type Params = Promise<{ id: string }>;
type Search = Promise<{ token?: string }>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BlogRow = Record<string, any>;

export default async function BlogPreviewPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: Search;
}) {
  const { id } = await params;
  const { token } = await searchParams;

  const supabase = await createClient();

  let post: BlogRow | null = null;
  let viaToken = false;

  // 1. Shared preview link — works for anyone holding the secret token.
  if (token) {
    const { data } = await supabase.rpc('get_blog_preview', {
      p_id: id,
      p_token: token,
    });
    const row = Array.isArray(data) ? data[0] : data;
    if (row) {
      post = row as BlogRow;
      viaToken = true;
    }
  }

  // 2. Logged-in staff — RLS already restricts this to their own college.
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const isAdmin = !!session;

  if (!post && isAdmin) {
    const { data } = await supabase.from('blogs').select('*').eq('id', id).single();
    if (data) post = data as BlogRow;
  }

  if (!post) notFound();

  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const [{ data: popularPosts }, { data: relatedPosts }, { data: initialComments }] =
    await Promise.all([
      supabase
        .from('blogs')
        .select('id, title, slug, category, published_at, created_at')
        .eq('college_id', collegeId)
        .eq('is_published', true)
        .neq('id', post.id)
        .order('created_at', { ascending: false })
        .limit(3),
      supabase
        .from('blogs')
        .select(
          'id, title, slug, category, excerpt, cover_image_url, published_at, created_at'
        )
        .eq('college_id', collegeId)
        .eq('is_published', true)
        .eq('category', post.category ?? 'General')
        .neq('id', post.id)
        .order('created_at', { ascending: false })
        .limit(3),
      supabase
        .from('blog_comments')
        .select('id, author_name, content, created_at')
        .eq('blog_id', post.id)
        .eq('status', 'approved')
        .order('created_at', { ascending: true }),
    ]);

  // Mirror the live campus page: structured posts (sections JSONB) skip HTML processing.
  const isStructured = !!post.sections;
  const rawHtml = isStructured ? '' : toRenderableHtml(post.content);
  const { processedHtml, tocItems } = isStructured
    ? { processedHtml: '', tocItems: [] }
    : processContent(rawHtml);
  const { words, readTime } = calcReadMeta(rawHtml);

  const isPublished = !!post.is_published;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Preview banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
          <span className="inline-flex items-center gap-1.5 font-semibold text-amber-800">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {isPublished ? 'Preview' : 'Draft Preview'}
          </span>
          <span className="text-amber-700">
            {isPublished
              ? 'This post is live. You are viewing the preview URL.'
              : 'This post is not published — it is not visible on the website or to Google.'}
          </span>
          {isAdmin && !viaToken && (
            <Link
              href={`/admin/blogs/${post.id}`}
              className="ml-auto font-semibold text-amber-900 underline underline-offset-2 hover:text-amber-950"
            >
              Edit this post →
            </Link>
          )}
        </div>
      </div>

      <CampusBlogContent
        post={post as never}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts ?? []}
        relatedPosts={relatedPosts ?? []}
        initialComments={initialComments ?? []}
      />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
