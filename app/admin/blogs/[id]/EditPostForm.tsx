'use client';

import { useState, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import toast from 'react-hot-toast';
import dynamic from 'next/dynamic';
import {
  FileText,
  Settings,
  ImageIcon,
  FolderOpen,
  Tag as TagIcon,
  User,
  Star,
  Pin,
  MessageSquare,
  ChevronDown,
  Loader2,
  X,
  Search,
  Clock,
  Globe,
  Eye,
} from 'lucide-react';

const RichTextEditor = dynamic(() => import('../new/RichTextEditor'), {
  ssr: false,
  loading: () => (
    <div className="border border-gray-200 rounded-xl h-64 bg-gray-50 animate-pulse flex items-center justify-center">
      <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
    </div>
  ),
});

interface Category {
  id: string;
  name: string;
  slug: string;
  color: string | null;
}

interface BlogTag {
  id: string;
  name: string;
  slug: string;
  color: string | null;
}

interface BlogData {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  author_name: string | null;
  category: string | null;
  cover_image_url: string | null;
  is_published: boolean;
  post_status: string | null;
  tags: string | null;
  read_time: string | null;
  is_featured: boolean | null;
  is_pinned: boolean | null;
  allow_comments: boolean | null;
  seo_title: string | null;
  seo_description: string | null;
  og_image_url: string | null;
  canonical_url: string | null;
}

interface Props {
  blog: BlogData;
  userEmail: string;
  userName: string;
  userAvatar: string;
  categories: Category[];
  tags: BlogTag[];
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
}

function estimateReadTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text.split(' ').filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function getContentSizeMB(html: string): string {
  const bytes = new TextEncoder().encode(html).length;
  return (bytes / (1024 * 1024)).toFixed(2);
}

function parseReadTimeMinutes(readTime: string | null): number {
  if (!readTime) return 5;
  const match = readTime.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 5;
}

const STATUS_OPTIONS = [
  { value: 'draft', label: 'Draft' },
  { value: 'published', label: 'Published' },
  { value: 'scheduled', label: 'Scheduled' },
  { value: 'archived', label: 'Archived' },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function Toggle({ checked, onChange, label, icon }: { checked: boolean; onChange: (v: boolean) => void; label: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-sm text-gray-600">
        {icon}
        {label}
      </span>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative w-10 h-5 rounded-full transition-colors flex-shrink-0 ${checked ? 'bg-[#006837]' : 'bg-gray-200'}`}
      >
        <span className={`absolute left-0 top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
      </button>
    </div>
  );
}

function StatusDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const current = STATUS_OPTIONS.find((o) => o.value === value) ?? STATUS_OPTIONS[0];
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition w-full justify-between"
      >
        <span>{current.label}</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute top-full mt-1 left-0 z-20 w-full bg-white rounded-xl border border-gray-100 shadow-lg py-1 overflow-hidden">
            {STATUS_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => { onChange(opt.value); setOpen(false); }}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-50 ${value === opt.value ? 'text-[#006837] font-medium' : 'text-gray-700'}`}
              >
                {opt.label}
                {value === opt.value && <span className="text-[#006837]">✓</span>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function TagSelector({
  allTags,
  selectedTags,
  onChange,
}: {
  allTags: BlogTag[];
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () => allTags.filter((t) => t.name.toLowerCase().includes(query.toLowerCase())),
    [allTags, query]
  );
  const showDropdown = query.length > 0 && filtered.length > 0;

  function addTag(name: string) {
    if (!selectedTags.includes(name)) onChange([...selectedTags, name]);
    setQuery('');
  }

  function removeTag(name: string) {
    onChange(selectedTags.filter((t) => t !== name));
  }

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {selectedTags.map((tag) => (
          <span key={tag} className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
            {tag}
            <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-500">
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (query.trim()) addTag(query.trim());
            }
          }}
          placeholder="Search or create tags..."
          className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837]"
        />
        {showDropdown && (
          <div className="absolute top-full mt-1 left-0 right-0 z-10 bg-white border border-gray-100 rounded-xl shadow-lg py-1 max-h-40 overflow-y-auto">
            {filtered.map((t) => (
              <button
                key={t.id}
                type="button"
                onMouseDown={(e) => { e.preventDefault(); addTag(t.name); }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 text-left"
              >
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: t.color ?? '#6B7280' }} />
                {t.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Form ───────────────────────────────────────────────────────────────

export default function EditPostForm({ blog, userEmail, userName, userAvatar, categories, tags }: Props) {
  const router = useRouter();
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  // Post details — pre-populated from existing blog
  const [title, setTitle] = useState(blog.title ?? '');
  const [slug, setSlug] = useState(blog.slug ?? '');
  const [excerpt, setExcerpt] = useState(blog.excerpt ?? '');
  const [content, setContent] = useState(blog.content ?? '');

  // Sidebar fields — pre-populated
  const [postStatus, setPostStatus] = useState(blog.post_status ?? (blog.is_published ? 'published' : 'draft'));
  const [readTimeMinutes, setReadTimeMinutes] = useState(parseReadTimeMinutes(blog.read_time));
  const [isFeatured, setIsFeatured] = useState(blog.is_featured ?? false);
  const [isPinned, setIsPinned] = useState(blog.is_pinned ?? false);
  const [allowComments, setAllowComments] = useState(blog.allow_comments ?? true);
  const [selectedCategory, setSelectedCategory] = useState(blog.category ?? '');
  const [selectedTags, setSelectedTags] = useState<string[]>(
    blog.tags ? blog.tags.split(',').map((t) => t.trim()).filter(Boolean) : []
  );

  // Featured image — start with existing URL as preview
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState(blog.cover_image_url ?? '');

  // SEO
  const [seoTitle, setSeoTitle] = useState(blog.seo_title ?? '');
  const [seoDescription, setSeoDescription] = useState(blog.seo_description ?? '');
  const [ogImageUrl, setOgImageUrl] = useState(blog.og_image_url ?? '');
  const [canonicalUrl, setCanonicalUrl] = useState(blog.canonical_url ?? '');

  // Loading
  const [saving, setSaving] = useState(false);

  const contentSizeMB = useMemo(() => getContentSizeMB(content), [content]);

  function handleTitleChange(val: string) {
    setTitle(val);
    setSlug(slugify(val));
  }

  function handleCoverSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverImageFile(file);
    setCoverImagePreview(URL.createObjectURL(file));
  }

  async function uploadCoverImage(): Promise<string> {
    if (!coverImageFile) return coverImagePreview; // keep existing URL if no new file
    const ext = coverImageFile.name.split('.').pop();
    const fileName = `${Date.now()}-${slugify(title || 'cover')}.${ext}`;
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(fileName, coverImageFile, { upsert: true });
    if (error) { toast.error('Cover image upload failed: ' + error.message); return coverImagePreview; }
    return supabase.storage.from('blog-images').getPublicUrl(data.path).data.publicUrl;
  }

  async function handleEditorImageUpload(file: File): Promise<string> {
    const ext = file.name.split('.').pop();
    const fileName = `content-${Date.now()}.${ext}`;
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(fileName, file, { upsert: true });
    if (error) { toast.error('Image upload failed.'); return URL.createObjectURL(file); }
    return supabase.storage.from('blog-images').getPublicUrl(data.path).data.publicUrl;
  }

  function handleCalculateReadTime() {
    const mins = estimateReadTime(content);
    setReadTimeMinutes(mins);
    toast.success(`Estimated read time: ${mins} min`);
  }

  async function handleSubmit(publish: boolean) {
    if (!title.trim()) return toast.error('Title is required.');
    if (!slug.trim()) return toast.error('Slug is required.');

    setSaving(true);
    const coverUrl = await uploadCoverImage();

    const status = publish ? 'published' : postStatus;

    const payload: Record<string, unknown> = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      content: content,
      author_name: userName,
      category: selectedCategory || null,
      cover_image_url: coverUrl || '',
      is_published: status === 'published',
      post_status: status,
      tags: selectedTags.join(', '),
      read_time: `${readTimeMinutes} min read`,
      is_featured: isFeatured,
      is_pinned: isPinned,
      allow_comments: allowComments,
      seo_title: seoTitle.trim(),
      seo_description: seoDescription.trim(),
      og_image_url: ogImageUrl.trim(),
      canonical_url: canonicalUrl.trim(),
      updated_at: new Date().toISOString(),
      ...(status === 'published' && !blog.is_published ? { published_at: new Date().toISOString() } : {}),
    };

    const { error } = await supabase.from('blogs').update(payload).eq('id', blog.id);
    setSaving(false);

    if (error) {
      toast.error('Failed to update: ' + error.message);
    } else {
      toast.success(status === 'published' ? 'Post published!' : 'Post updated!');
      router.push('/admin/blogs');
      router.refresh();
    }
  }

  const initials = userName ? userName.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2) : 'AU';

  return (
    <div className="p-6 lg:p-8">
      {/* Page Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-[#006837]" />
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl font-bold text-gray-900">Edit Blog Post</h1>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#006837] bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006837]" />
                Blog
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-0.5">Update your blog post content and settings</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link href="/admin/blogs" className="flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50 transition">
            ← Back to Posts
          </Link>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5">
        {/* ── Left column ── */}
        <div className="space-y-5">
          {/* Post Details */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-5">
              <FileText className="w-4 h-4 text-gray-500" />
              Post Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Title *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter post title"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Slug *</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(slugify(e.target.value))}
                  placeholder="post-url-slug"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] font-mono"
                />
                {slug && (
                  <p className="text-xs text-gray-400 mt-1">URL: /blog/{slug}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Excerpt</label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value.slice(0, 500))}
                  rows={3}
                  placeholder="Brief summary of the post (shown in listings)"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] resize-none"
                />
                <p className="text-xs text-gray-400 mt-1">{excerpt.length}/500 characters</p>
              </div>
            </div>
          </div>

          {/* Content editor */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-semibold text-gray-800 mb-1">Content</h3>
            <p className="text-sm text-gray-400 mb-4">Write your blog post content using the rich text editor below.</p>
            <RichTextEditor
              value={content}
              onChange={setContent}
              onImageUpload={handleEditorImageUpload}
              placeholder="Start writing your blog post..."
            />
            <div className="flex items-center gap-3 mt-3">
              <button
                type="button"
                onClick={handleCalculateReadTime}
                className="flex items-center gap-2 text-xs font-medium text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition"
              >
                <Clock className="w-3.5 h-3.5" />
                Calculate Reading Time
              </button>
              <span className="text-xs text-gray-400">Current: {readTimeMinutes} min</span>
            </div>
          </div>

          {/* SEO Settings */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-5">
              <Globe className="w-4 h-4 text-gray-500" />
              SEO Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">SEO Title</label>
                <input
                  type="text"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value.slice(0, 200))}
                  placeholder="Custom SEO title (defaults to post title)"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837]"
                />
                <p className="text-xs text-gray-400 mt-1">{seoTitle.length}/200 characters</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">SEO Description</label>
                <textarea
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value.slice(0, 500))}
                  rows={3}
                  placeholder="Meta description for search engines"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] resize-none"
                />
                <p className="text-xs text-gray-400 mt-1">{seoDescription.length}/500 characters</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Open Graph Image</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={ogImageUrl}
                    onChange={(e) => setOgImageUrl(e.target.value)}
                    placeholder="Social share image URL"
                    className="flex-1 px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837]"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition flex-shrink-0"
                    title="Upload image"
                  >
                    <ImageIcon className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Canonical URL</label>
                <input
                  type="text"
                  value={canonicalUrl}
                  onChange={(e) => setCanonicalUrl(e.target.value)}
                  placeholder="https://example.com/original-post"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Right column (sidebar) ── */}
        <div className="space-y-4">
          {/* Publish card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-4">
              <Settings className="w-4 h-4 text-gray-500" />
              Publish
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Status</label>
                <StatusDropdown value={postStatus} onChange={setPostStatus} />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Reading Time (minutes)</label>
                <input
                  type="number"
                  min={1}
                  max={120}
                  value={readTimeMinutes}
                  onChange={(e) => setReadTimeMinutes(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837]"
                />
              </div>

              <div className="space-y-3 pt-1">
                <Toggle
                  checked={isFeatured}
                  onChange={setIsFeatured}
                  label="Featured"
                  icon={<Star className="w-3.5 h-3.5 text-amber-400" />}
                />
                <Toggle
                  checked={isPinned}
                  onChange={setIsPinned}
                  label="Pinned"
                  icon={<Pin className="w-3.5 h-3.5 text-indigo-400" />}
                />
                <Toggle
                  checked={allowComments}
                  onChange={setAllowComments}
                  label="Allow Comments"
                  icon={<MessageSquare className="w-3.5 h-3.5 text-green-500" />}
                />
              </div>

              <p className="text-xs text-gray-400 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                Content: {contentSizeMB}MB / 2.5MB
              </p>

              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleSubmit(true)}
                  disabled={saving}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#006837] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#005a2e] transition disabled:opacity-50"
                >
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                  <FileText className="w-3.5 h-3.5" />
                  Update Post
                </button>
                <button
                  type="button"
                  onClick={() => handleSubmit(false)}
                  disabled={saving}
                  className="flex items-center justify-center gap-1.5 border border-gray-200 text-sm font-medium text-gray-600 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition disabled:opacity-50"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-4">
              <ImageIcon className="w-4 h-4 text-gray-500" />
              Featured Image
            </h3>
            <input ref={coverInputRef} type="file" accept="image/*" className="hidden" onChange={handleCoverSelect} />
            {coverImagePreview ? (
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={coverImagePreview} alt="Cover" className="w-full h-40 object-cover rounded-xl" />
                <button
                  type="button"
                  onClick={() => { setCoverImagePreview(''); setCoverImageFile(null); }}
                  className="absolute top-2 right-2 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center shadow hover:bg-red-50 transition"
                >
                  <X className="w-3.5 h-3.5 text-gray-600" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => coverInputRef.current?.click()}
                className="w-full h-36 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-[#006837] hover:bg-green-50/30 transition text-gray-400"
              >
                <ImageIcon className="w-7 h-7" />
                <span className="text-sm">Click to select image</span>
              </button>
            )}
          </div>

          {/* Category */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-4">
              <FolderOpen className="w-4 h-4 text-gray-500" />
              Category
            </h3>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] bg-white cursor-pointer pr-8"
              >
                <option value="">No Category</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-4">
              <TagIcon className="w-4 h-4 text-gray-500" />
              Tags
            </h3>
            <TagSelector allTags={tags} selectedTags={selectedTags} onChange={setSelectedTags} />
          </div>

          {/* Author */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-4">
              <User className="w-4 h-4 text-gray-500" />
              Author
            </h3>
            <div className="flex items-center gap-3">
              {userAvatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={userAvatar} alt={userName} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{initials}</span>
                </div>
              )}
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{userName}</p>
                <p className="text-xs text-gray-400 truncate">{userEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden OG image upload input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const url = await handleEditorImageUpload(file);
          if (url) setOgImageUrl(url);
          e.target.value = '';
        }}
      />
    </div>
  );
}
