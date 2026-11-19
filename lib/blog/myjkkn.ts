import { cache } from 'react';
import { MYJKKN_URL } from '@/lib/blog/config';

/**
 * Blog posts read from MyJKKN (Website Blog) instead of this site's own
 * `blogs` table. On only when BLOG_SOURCE=myjkkn, so the switch-over is one
 * setting and can be undone the same way.
 *
 * Server only: import this from server components and route handlers, never
 * from a client component.
 *
 * The API is keyless and returns only what is published on this website:
 *   GET {MYJKKN}/api/public/blog/posts?site=education
 *   GET {MYJKKN}/api/public/blog/posts/<slug>?site=education[&preview=<token>]
 * Rows are mapped to the shape the existing blog pages already use, so the
 * page markup does not change.
 */

export const BLOG_TAG = 'myjkkn-blog';
const BLOG_API = `${MYJKKN_URL}/api/public/blog`;
const REVALIDATE_SECONDS = 300;
const TIMEOUT_MS = 8000;

export function blogFromMyJkkn(): boolean {
  return process.env.BLOG_SOURCE === 'myjkkn';
}

/** This website's key in MyJKKN (website_sites.site_key). */
export function blogSiteKey(): string {
  return process.env.BLOG_SITE_KEY?.trim() || 'education';
}

interface ApiPost {
  id: string;
  slug: string;
  url: string;
  title: string;
  excerpt: string | null;
  cover_image: { url: string; alt: string } | null;
  author_name: string | null;
  read_time_minutes: number | null;
  tags: string[];
  category: { name: string; slug: string; color: string | null } | null;
  published_at: string | null;
  updated_at: string;
  allow_comments: boolean;
  seo: {
    title: string;
    description: string | null;
    keywords: string[];
    og_image: string | null;
    canonical_url: string;
    noindex: boolean;
  };
  content_html?: string;
}

/** A post in the shape the blog pages were written for (the old `blogs` row). */
export interface SitePost {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  author_name: string | null;
  cover_image_url: string | null;
  excerpt: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  tags: string | null;
  read_time: string | null;
  content: string;
  sections: null;
  allow_comments: boolean;
  seo: ApiPost['seo'];
}

export interface SiteComment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

function toSitePost(p: ApiPost): SitePost {
  const when = p.published_at ?? p.updated_at;
  return {
    id: p.id,
    title: p.title,
    slug: p.slug,
    category: p.category?.name ?? null,
    author_name: p.author_name,
    cover_image_url: p.cover_image?.url ?? null,
    excerpt: p.excerpt,
    published_at: p.published_at,
    created_at: when,
    updated_at: p.updated_at,
    tags: p.tags.length ? p.tags.join(', ') : null,
    read_time: p.read_time_minutes ? `${p.read_time_minutes} min read` : null,
    content: p.content_html ?? '',
    sections: null,
    allow_comments: p.allow_comments,
    seo: p.seo,
  };
}

const cached = { next: { revalidate: REVALIDATE_SECONDS, tags: [BLOG_TAG] } };

/**
 * Published posts, newest first (pinned first). Never throws: a MyJKKN outage
 * shows an empty blog list instead of an error page, and keeps the build and
 * the sitemap working.
 */
export async function listPosts(limit = 9, page = 1): Promise<{ posts: SitePost[]; total: number }> {
  try {
    const res = await fetch(`${BLOG_API}/posts?site=${blogSiteKey()}&limit=${limit}&page=${page}`, {
      ...cached,
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const body = (await res.json()) as { posts: ApiPost[]; total: number };
    return { posts: body.posts.map(toSitePost), total: body.total };
  } catch (error) {
    console.error('[blog] failed to load posts from MyJKKN:', error);
    return { posts: [], total: 0 };
  }
}

/** Every published post (for the sitemap). Never throws. */
export async function listAllPosts(): Promise<SitePost[]> {
  const all: SitePost[] = [];
  for (let page = 1; page <= 40; page++) {
    const { posts, total } = await listPosts(50, page);
    all.push(...posts);
    if (posts.length === 0 || all.length >= total) break;
  }
  return all;
}

export interface PostDetail {
  post: SitePost;
  related: SitePost[];
  comments: SiteComment[];
  /** true when this is a draft opened with its preview link. */
  preview: boolean;
}

/**
 * One post, or null when it is not published on this website. A preview token
 * (from the Preview link in MyJKKN) opens a draft and is never cached.
 * Throws on a server or network error so the cached page stays up.
 */
export const getPost = cache(async (slug: string, previewToken?: string): Promise<PostDetail | null> => {
  const url =
    `${BLOG_API}/posts/${encodeURIComponent(slug)}?site=${blogSiteKey()}` +
    (previewToken ? `&preview=${encodeURIComponent(previewToken)}` : '');
  const res = await fetch(url, {
    ...(previewToken ? { cache: 'no-store' as const } : cached),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (res.status === 404 || res.status === 400) return null;
  if (!res.ok) throw new Error(`[blog] post ${slug}: HTTP ${res.status}`);
  const body = (await res.json()) as {
    post: ApiPost;
    related: ApiPost[];
    comments: SiteComment[];
    preview: boolean;
  };
  return {
    post: toSitePost(body.post),
    related: body.related.map(toSitePost),
    comments: body.comments ?? [],
    preview: body.preview === true,
  };
});
