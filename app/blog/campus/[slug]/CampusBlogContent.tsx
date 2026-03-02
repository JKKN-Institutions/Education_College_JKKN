'use client';

import { useState } from 'react';
import { Clock, Calendar, Tag, MessageSquare, Send, Check, Loader2, ChevronUp, ChevronDown } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

// ── Types ──────────────────────────────────────────────────────────────────
interface Post {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  author_name: string | null;
  cover_image_url: string | null;
  excerpt: string | null;
  published_at: string | null;
  created_at: string;
  tags?: string | null;
  read_time?: string | null;
}

interface SidePost {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  cover_image_url?: string | null;
  excerpt?: string | null;
  published_at: string | null;
  created_at: string;
}

interface CommentItem {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

interface TocItem {
  id: string;
  label: string;
}

interface Props {
  post: Post;
  processedContent: string;
  tocItems: TocItem[];
  readTime: number;
  wordCount: number;
  popularPosts: SidePost[];
  relatedPosts: SidePost[];
  initialComments: CommentItem[];
}

// ── Helpers ────────────────────────────────────────────────────────────────
function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function parseTags(tags: string | null | undefined): string[] {
  if (!tags) return [];
  return tags.split(',').map((t) => t.trim()).filter(Boolean);
}

function getInitials(name: string | null): string {
  if (!name) return 'JE';
  return name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function CampusBlogContent({
  post,
  processedContent,
  relatedPosts,
  initialComments,
}: Props) {
  const supabase = createClient();
  const [comments] = useState<CommentItem[]>(initialComments);
  const [commentsOpen, setCommentsOpen] = useState(true);
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const tags = parseTags(post.tags);
  const date = formatDate(post.published_at ?? post.created_at);
  const readMins = post.read_time
    ? post.read_time.replace(/[^0-9]/g, '') || '5'
    : '5';

  async function handleCommentSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!authorName.trim() || !commentText.trim()) return;
    setSubmitting(true);
    await supabase.from('blog_comments').insert({
      blog_id: post.id,
      author_name: authorName.trim(),
      author_email: authorEmail.trim(),
      content: commentText.trim(),
      status: 'pending',
      college_id: process.env.NEXT_PUBLIC_COLLEGE_ID!,
    });
    setSubmitting(false);
    setSubmitted(true);
    setAuthorName('');
    setAuthorEmail('');
    setCommentText('');
  }

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 lg:py-14">

        {/* Category badge */}
        {post.category && (
          <span className="inline-block text-xs font-semibold text-[#006837] bg-green-50 border border-green-100 px-3 py-1 rounded-full mb-5">
            {post.category}
          </span>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d1e8da] flex items-center justify-center flex-shrink-0">
              <span className="text-[11px] font-bold text-[#006837]">
                {getInitials(post.author_name)}
              </span>
            </div>
            <span className="font-medium text-gray-700">{post.author_name ?? 'JKKN Team'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{readMins} min read</span>
          </div>
        </div>

        {/* Cover image */}
        {post.cover_image_url && (
          <div className="mb-10 rounded-2xl overflow-hidden shadow-sm w-[600px] h-[420px] max-w-full mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.cover_image_url}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Excerpt / Quick Answer */}
        {post.excerpt && (
          <div className="bg-white border-l-4 border-[#006837] rounded-r-xl p-5 mb-10 shadow-sm">
            <p className="text-[#006837] text-xs font-bold uppercase tracking-wider mb-2">Quick Answer</p>
            <p className="text-gray-700 text-sm leading-relaxed">{post.excerpt}</p>
          </div>
        )}

        {/* Blog content from rich text editor */}
        {processedContent && (
          <div
            className="blog-content mb-12"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-12 pt-6 border-t border-gray-200">
            <Tag className="w-4 h-4 text-gray-400 flex-shrink-0" />
            {tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* ── Comments ──────────────────────────────────────────────────── */}
        <div className="mb-6">
          {/* Collapsible header card */}
          <button
            type="button"
            onClick={() => setCommentsOpen((o) => !o)}
            className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-4 flex items-center gap-3 hover:bg-gray-50 transition mb-3"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-[#006837]" />
            </div>
            <span className="font-bold text-[#002309] text-base flex-1 text-left">Comments</span>
            <span className="text-xs font-bold bg-green-100 text-[#006837] px-2.5 py-1 rounded-full mr-1">
              {comments.length}
            </span>
            {commentsOpen
              ? <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
              : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
            }
          </button>

          {/* Comment list / empty state */}
          {commentsOpen && (
            <>
              {comments.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-8 text-center mb-3">
                  <p className="text-[#006837] text-sm">No comments yet. Be the first to share your thoughts!</p>
                </div>
              ) : (
                <div className="space-y-3 mb-3">
                  {comments.map((c) => (
                    <div key={c.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-4 flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-gray-500">
                          {c.author_name.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-gray-800">{c.author_name}</span>
                          <span className="text-xs text-gray-400">{formatDate(c.created_at)}</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{c.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* ── Leave a Comment ───────────────────────────────────────────── */}
        {submitted ? (
          <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-2xl px-5 py-4 text-sm text-[#006837] font-medium mb-14">
            <Check className="w-4 h-4 flex-shrink-0" />
            Your comment is awaiting moderation. Thank you!
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-14">
            {/* Card header with gradient */}
            <div className="bg-gradient-to-r from-green-50 via-[#f0f7f2] to-white px-6 py-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-[#006837]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#002309]">Leave a Comment</h3>
                <p className="text-sm text-[#006837]">Share your thoughts on this post</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleCommentSubmit} className="px-6 py-6 bg-gray-50 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#002309] mb-1.5">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#002309] mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={authorEmail}
                  onChange={(e) => setAuthorEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] bg-white"
                />
                <p className="text-xs text-[#006837] mt-1.5">Your email will not be published.</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#002309] mb-1.5">
                  Comment <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write your comment here..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] bg-white resize-y"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-2 bg-[#006837] hover:bg-[#005a2e] text-white text-sm font-bold px-6 py-3 rounded-xl transition disabled:opacity-50"
                >
                  {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  Post Comment
                </button>
                <p className="text-xs text-[#006837] mt-2.5">All comments are moderated and will appear after approval.</p>
              </div>
            </form>
          </div>
        )}

        {/* ── Related Posts ─────────────────────────────────────────────── */}
        {relatedPosts.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-[#002309] mb-5 pl-4 border-l-4 border-[#006837]">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map((rp) => (
                <a
                  key={rp.id}
                  href={`/blog/campus/${rp.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {rp.cover_image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={rp.cover_image_url}
                      alt={rp.title}
                      className="w-full h-44 object-cover"
                    />
                  ) : (
                    <div className="w-full h-44 bg-gradient-to-br from-[#c8d9a0] via-[#8fa87a] to-[#3d5a30]" />
                  )}
                  <div className="p-4">
                    {rp.category && (
                      <span className="text-xs font-semibold text-[#006837] mb-1.5 block">{rp.category}</span>
                    )}
                    <p className="text-sm font-bold text-gray-800 leading-snug line-clamp-2">{rp.title}</p>
                    <span className="text-xs text-gray-400 mt-2 block">
                      {formatDate(rp.published_at ?? rp.created_at)}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>

      <style>{`
        .blog-content h1 { font-size: 1.75rem; font-weight: 700; margin: 1.5rem 0 0.75rem; color: #111827; line-height: 1.3; }
        .blog-content h2 { font-size: 1.4rem; font-weight: 700; margin: 1.75rem 0 0.6rem; color: #1f2937; line-height: 1.35; }
        .blog-content h3 { font-size: 1.15rem; font-weight: 600; margin: 1.25rem 0 0.5rem; color: #374151; }
        .blog-content p { margin: 0.75rem 0; line-height: 1.8; color: #374151; font-size: 1rem; }
        .blog-content ul { list-style-type: disc; padding-left: 1.6rem; margin: 0.75rem 0; }
        .blog-content ol { list-style-type: decimal; padding-left: 1.6rem; margin: 0.75rem 0; }
        .blog-content li { margin: 0.35rem 0; line-height: 1.75; color: #374151; }
        .blog-content blockquote { border-left: 3px solid #006837; padding: 0.5rem 0 0.5rem 1rem; color: #6b7280; margin: 1.25rem 0; font-style: italic; background: #f9fafb; border-radius: 0 8px 8px 0; }
        .blog-content code { background: #f3f4f6; border-radius: 4px; padding: 0.1em 0.4em; font-size: 0.875em; font-family: monospace; color: #1f2937; }
        .blog-content pre { background: #1f2937; color: #f9fafb; border-radius: 10px; padding: 1.25rem; overflow-x: auto; margin: 1.25rem 0; }
        .blog-content pre code { background: none; color: inherit; padding: 0; }
        .blog-content hr { border: none; border-top: 1px solid #e5e7eb; margin: 2rem 0; }
        .blog-content mark { background: #fef08a; border-radius: 2px; padding: 0 2px; }
        .blog-content a { color: #2563eb; text-decoration: underline; }
        .blog-content a:hover { color: #1d4ed8; }
        .blog-content img { max-width: 100%; height: auto; border-radius: 0.75rem; margin: 1.25rem 0; }
        .blog-content strong { font-weight: 700; color: #111827; }
        .blog-content em { font-style: italic; }
        .blog-content table { width: 100%; border-collapse: collapse; margin: 1.25rem 0; font-size: 0.9rem; }
        .blog-content th { background: #f3f4f6; text-align: left; padding: 0.6rem 0.9rem; font-weight: 600; border: 1px solid #e5e7eb; color: #374151; }
        .blog-content td { padding: 0.6rem 0.9rem; border: 1px solid #e5e7eb; color: #374151; }
        .blog-content tr:nth-child(even) td { background: #f9fafb; }
      `}</style>
    </div>
  );
}
