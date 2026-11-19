import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import CampusBlogContent from './CampusBlogContent';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { inlineCtaFor } from '@/lib/blog-inline-cta';
import { blogFromMyJkkn, blogSiteKey, getPost, listPosts } from '@/lib/blog/myjkkn';
import { MYJKKN_URL } from '@/lib/blog/config';

export const revalidate = 300;

/**
 * DEP-38, 2026-08-08. generateStaticParams was REMOVED from this route, and that is what stops
 * an invented slug returning HTTP 500.
 *
 * Having it marked the route as statically generated (the build printed it as ● SSG). But
 * generateMetadata and the page body below both call createClient() from @/lib/supabase/server,
 * which reads cookies - a dynamic API. Prerendering a route that reads cookies is a contradiction,
 * and Next resolves it by throwing: DYNAMIC_SERVER_USAGE, served as a 500. Measured on a local
 * production build (Next 15.5.10) - /blog/campus/<invented-slug> returned 500 with that exact
 * digest in the server log, and returned a clean 404 once this export was gone.
 *
 * The three sites that have always answered 404 correctly - dental, pharmacy and nursing - carry
 * no generateStaticParams on this route at all. This change makes education match them rather
 * than inventing a fourth arrangement. revalidate = 300 still gives the ISR caching this route
 * was after, and a newly published CMS post stays reachable without a redeploy.
 */

type PageProps = {
  params: Promise<{ slug: string }>;
  /** ?preview=<token>: the Preview link in MyJKKN opens a draft (BLOG_SOURCE=myjkkn only). */
  searchParams: Promise<{ preview?: string }>;
};

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (blogFromMyJkkn()) {
    const { preview } = await searchParams;
    const detail = await getPost(slug, preview);
    if (!detail) return {};
    const { post } = detail;
    // The SEO fields are filled in MyJKKN; where the writer left one empty, MyJKKN has
    // already fallen back to the title, excerpt, featured image and the post's own address.
    const description =
      post.seo.description ?? `${post.title} — JKKN College of Education blog.`;
    return {
      // absolute: a written SEO title is the whole title, so the layout's suffix is not added to it.
      title: post.seo.title === post.title ? post.title : { absolute: post.seo.title },
      description,
      ...(post.seo.keywords.length > 0 && { keywords: post.seo.keywords }),
      alternates: { canonical: post.seo.canonical_url },
      openGraph: {
        title: post.seo.title,
        description,
        type: 'article',
        url: `https://edu.jkkn.ac.in/blog/campus/${slug}`,
        ...(post.seo.og_image && {
          images: [{ url: post.seo.og_image, alt: post.title }],
        }),
      },
      ...((detail.preview || post.seo.noindex) && {
        robots: { index: false, follow: !detail.preview },
      }),
    };
  }

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

/** The post page when posts come from MyJKKN (BLOG_SOURCE=myjkkn). Same markup as below. */
async function MyJkknBlogPost({ slug, previewToken }: { slug: string; previewToken?: string }) {
  const detail = await getPost(slug, previewToken);
  if (!detail) notFound();
  const { post, related, comments, preview } = detail;

  const popularPosts = (await listPosts(4)).posts.filter((p) => p.slug !== slug).slice(0, 3);
  const { processedHtml, tocItems } = processContent(post.content);
  const { words, readTime } = calcReadMeta(post.content);

  return (
    <div className="min-h-screen bg-white">
      {preview ? (
        <div className="bg-amber-50 border-b border-amber-200">
          <p className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 text-sm font-semibold text-amber-900">
            Draft Preview — this post is not published yet and is hidden from search engines.
          </p>
        </div>
      ) : (
        <>
          <JsonLd
            data={{
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: post.title,
              ...((post.seo.description ?? post.excerpt) && {
                description: post.seo.description ?? post.excerpt,
              }),
              ...(post.cover_image_url && {
                image: {
                  '@type': 'ImageObject',
                  url: post.cover_image_url,
                  width: 1200,
                  height: 630,
                },
              }),
              datePublished: post.published_at ?? post.created_at,
              dateModified: post.updated_at,
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
        </>
      )}
      <Header />
      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts}
        relatedPosts={related}
        initialComments={comments}
        commentsVia={{ api: `${MYJKKN_URL}/api/public/blog/comments`, site: blogSiteKey() }}
        commentFormOpen={post.allow_comments && !preview}
        inlineCta={preview ? null : inlineCtaFor(slug, processedHtml)}
      />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default async function CampusBlogPost({ params, searchParams }: PageProps) {
  const { slug } = await params;

  if (blogFromMyJkkn()) {
    const { preview } = await searchParams;
    return <MyJkknBlogPost slug={slug} previewToken={preview} />;
  }

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
  // Enquiry box inside every post (lead option 2, 2026-11-05) - place from lib/blog-inline-cta.ts.
  const inlineCta = inlineCtaFor(slug, processedHtml);

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
        inlineCta={inlineCta}
      />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
