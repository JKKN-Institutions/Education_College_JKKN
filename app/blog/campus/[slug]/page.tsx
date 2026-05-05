import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { createClient as createStaticClient } from '@/lib/supabase/client';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import CampusBlogContent from './CampusBlogContent';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const revalidate = 300;

export async function generateStaticParams() {
  const supabase = createStaticClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'education';
  const { data } = await supabase
    .from('blogs')
    .select('slug')
    .eq('college_id', collegeId)
    .eq('is_published', true);
  return (data ?? []).map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: post } = await supabase
    .from('blogs')
    .select('title, excerpt, cover_image_url')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!post) return {};

  const description = post.excerpt
    ? post.excerpt.slice(0, 155)
    : `${post.title} — JKKN College of Education blog.`;

  return {
    title: post.title,
    description,
    alternates: { canonical: `https://edu.jkkn.ac.in/blog/campus/${slug}` },
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      url: `https://edu.jkkn.ac.in/blog/campus/${slug}`,
      ...(post.cover_image_url && {
        images: [{ url: post.cover_image_url, alt: post.title }],
      }),
    },
  };
}

/** Extract h2/h3 headings from HTML and inject id attributes for TOC */
function processContent(
  html: string
): { processedHtml: string; tocItems: { id: string; label: string }[] } {
  if (!html) return { processedHtml: '', tocItems: [] };

  const tocItems: { id: string; label: string }[] = [];
  const seen = new Map<string, number>();

  const processedHtml = html.replace(
    /<h([23])([^>]*)>(.*?)<\/h\1>/gi,
    (_, level: string, attrs: string, inner: string) => {
      const label = inner.replace(/<[^>]+>/g, '').trim();
      const base = label
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      const count = seen.get(base) ?? 0;
      const id = count > 0 ? `${base}-${count}` : base;
      seen.set(base, count + 1);

      tocItems.push({ id, label });

      if (!attrs.includes('id=')) {
        return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
      }
      return `<h${level}${attrs}>${inner}</h${level}>`;
    }
  );

  return { processedHtml, tocItems };
}

/** Estimate reading time from HTML content */
function calcReadMeta(content: string): { words: number; readTime: number } {
  const text = content.replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return { words, readTime: Math.max(1, Math.ceil(words / 200)) };
}

export default async function CampusBlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const { data: post } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!post) notFound();

  const [{ data: popularPosts }, { data: relatedPosts }, { data: initialComments }] = await Promise.all([
    // Popular: other recent published blogs
    supabase
      .from('blogs')
      .select('id, title, slug, category, published_at, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
    // Related: same category, exclude current
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
    // Approved comments for this post
    supabase
      .from('blog_comments')
      .select('id, author_name, content, created_at')
      .eq('blog_id', post.id)
      .eq('status', 'approved')
      .order('created_at', { ascending: true }),
  ]);

  // Structured posts (new format with sections JSONB) skip HTML processing
  const isStructured = !!post.sections;

  const contentHtml = post.content ?? '';
  const isHtml = contentHtml.includes('<');

  const rawHtml = isStructured
    ? ''
    : isHtml
    ? contentHtml
    : contentHtml
        .split(/\n\n+/)
        .map((p: string) => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
        .join('');

  const { processedHtml, tocItems } = isStructured
    ? { processedHtml: '', tocItems: [] }
    : processContent(rawHtml);

  const { words, readTime } = calcReadMeta(rawHtml);

  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          ...(post.excerpt && { description: post.excerpt }),
          ...(post.cover_image_url && {
            image: {
              '@type': 'ImageObject',
              url: post.cover_image_url,
              width: 1200,
              height: 630,
            },
          }),
          datePublished: post.published_at ?? post.created_at,
          ...(post.updated_at && { dateModified: post.updated_at }),
          author: {
            '@type': 'Person',
            name: post.author_name ?? 'JKKN College of Education',
          },
          publisher: {
            '@type': 'Organization',
            '@id': 'https://edu.jkkn.ac.in/#organization',
            name: 'JKKN College of Education',
            logo: {
              '@type': 'ImageObject',
              url: 'https://edu.jkkn.ac.in/images/logo.png',
              width: 250,
              height: 60,
            },
          },
          mainEntityOfPage: `https://edu.jkkn.ac.in/blog/campus/${slug}`,
        }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: post.title, href: `/blog/campus/${slug}` },
      ]} />
      <Header />
      <CampusBlogContent
        post={post}
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
