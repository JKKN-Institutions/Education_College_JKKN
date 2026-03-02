'use client';

import { useState, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useAdminCollege } from '../AdminCollegeContext';
import {
  Loader2,
  X,
  ImageIcon,
  Upload,
  Download,
  Plus,
  Trash2,
  ChevronRight,
  ChevronLeft,
  FileText,
} from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────
interface BlogSections {
  what_is_bed: string;
  what_is_bed_title: string;
  eligibility: string;
  eligibility_title: string;
  curriculum: string;
  curriculum_title: string;
  tnteu_counseling: string;
  tnteu_counseling_title: string;
  fee_structure: string;
  fee_structure_title: string;
  career_scope: string;
  career_scope_title: string;
  mid_cta_heading: string;
  mid_cta_description: string;
  mid_cta_button1: string;
  mid_cta_button2: string;
  why_jkkn: string;
  why_jkkn_title: string;
  admission_process: string;
  admission_process_title: string;
  faq_title: string;
  author_bio: string;
  sidebar_status: string;
  sidebar_heading: string;
  sidebar_description: string;
  sidebar_phone: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const DEFAULT_SECTIONS: BlogSections = {
  what_is_bed: '',
  what_is_bed_title: 'What is B.Ed? Course Overview',
  eligibility: '',
  eligibility_title: 'B.Ed Eligibility Criteria',
  curriculum: '',
  curriculum_title: 'B.Ed Course Curriculum',
  tnteu_counseling: '',
  tnteu_counseling_title: 'TNTEU Counseling 2026',
  fee_structure: '',
  fee_structure_title: 'B.Ed Fee Structure',
  career_scope: '',
  career_scope_title: 'Career Scope After B.Ed',
  mid_cta_heading: 'Ready to Start Your Teaching Career?',
  mid_cta_description:
    'Apply for B.Ed 2026 at JKKN College of Education — 100 seats, NCTE approved, TNTEU affiliated, and 98% placement rate.',
  mid_cta_button1: 'Apply Now →',
  mid_cta_button2: 'Contact Admissions',
  why_jkkn: '',
  why_jkkn_title: 'Why Choose JKKN College of Education?',
  admission_process: '',
  admission_process_title: 'Admission Process 2026',
  faq_title: 'Frequently Asked Questions',
  author_bio:
    'The content team at JKKN College of Education creates evidence-based educational content about teacher education, career guidance, and academic pathways. Our faculty includes experienced teacher-educators and researchers affiliated to Tamil Nadu Teachers Education University (TNTEU).',
  sidebar_status: 'OPEN',
  sidebar_heading: 'B.Ed Admission 2026',
  sidebar_description: '100 Seats Available at JKKN College of Education, Komarapalayam',
  sidebar_phone: '+91 9345855001',
};

const CATEGORIES = [
  'Academic',
  'Achievement',
  'News',
  'Campus Life',
  'Events',
  'B.Ed Admissions',
  'Teaching Careers',
  'General',
  'Other',
];

interface BlogFormProps {
  blog?: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author_name: string;
    category: string;
    cover_image_url: string;
    is_published: boolean;
    tags?: string | null;
    read_time?: string | null;
    sections?: (BlogSections & { faqs?: FaqItem[] }) | null;
  };
}

// ── Helpers ────────────────────────────────────────────────────────────────
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function extractKV(text: string, key: string): string {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escaped + ':\\s*(.+?)(?=\\s+[A-Z][\\w\\s]*:|$)', 'i');
  return text.match(regex)?.[1]?.trim() || '';
}

function parseFaqs(text: string): FaqItem[] {
  const faqs: FaqItem[] = [];
  const cleaned = text.replace(/\s+/g, ' ').trim();
  const regex = /Q:\s*(.+?)\s+A:\s*(.+?)(?=\s+Q:|$)/g;
  let m;
  while ((m = regex.exec(cleaned)) !== null) {
    if (m[1] && m[2]) faqs.push({ q: m[1].trim(), a: m[2].trim() });
  }
  return faqs;
}

function parseSectionsFromHtml(
  html: string
): { sections: Partial<BlogSections>; faqs: FaqItem[] } {
  const parsed: Partial<BlogSections> = {};
  let faqs: FaqItem[] = [];

  // Collect all h2 positions
  const h2Re = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  const headings: { index: number; heading: string }[] = [];
  let m;
  while ((m = h2Re.exec(html)) !== null) {
    headings.push({
      index: m.index,
      heading: m[1].replace(/<[^>]+>/g, '').trim().toLowerCase(),
    });
  }

  for (let i = 0; i < headings.length; i++) {
    const startOfContent = html.indexOf('</h2>', headings[i].index) + 5;
    const endOfContent =
      i + 1 < headings.length ? headings[i + 1].index : html.length;
    const content = html.slice(startOfContent, endOfContent).trim();
    const text = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const h = headings[i].heading;

    if (h.includes('what is b') || h.includes('course overview')) {
      parsed.what_is_bed = content;
    } else if (h.includes('eligibility')) {
      parsed.eligibility = content;
    } else if (h.includes('curriculum')) {
      parsed.curriculum = content;
    } else if (h.includes('tnteu') || h.includes('counseling')) {
      parsed.tnteu_counseling = content;
    } else if (h.includes('fee structure')) {
      parsed.fee_structure = content;
    } else if (h.includes('career scope')) {
      parsed.career_scope = content;
    } else if (h.includes('cta banner') || h.includes('mid-content')) {
      parsed.mid_cta_heading =
        extractKV(text, 'Heading') || 'Ready to Start Your Teaching Career?';
      parsed.mid_cta_description = extractKV(text, 'Description') || '';
      parsed.mid_cta_button1 =
        extractKV(text, 'Button 1 Text') || 'Apply Now →';
      parsed.mid_cta_button2 =
        extractKV(text, 'Button 2 Text') || 'Contact Admissions';
    } else if (h.includes('why choose') || h.includes('why jkkn')) {
      parsed.why_jkkn = content;
    } else if (h.includes('admission process')) {
      parsed.admission_process = content;
    } else if (h.includes('frequently asked') || h === 'faq') {
      faqs = parseFaqs(text);
    } else if (h.includes('author')) {
      parsed.author_bio =
        extractKV(text, 'Author Bio') ||
        extractKV(text, 'Bio') ||
        text;
    } else if (h.includes('sidebar')) {
      parsed.sidebar_status = extractKV(text, 'Status') || 'OPEN';
      parsed.sidebar_heading = extractKV(text, 'Heading') || '';
      parsed.sidebar_description = extractKV(text, 'Description') || '';
      parsed.sidebar_phone = extractKV(text, 'Phone') || '';
    }
  }

  return { sections: parsed, faqs };
}

// ── Sub-components ─────────────────────────────────────────────────────────
function SectionTextarea({
  number,
  titleValue,
  onTitleChange,
  value,
  onChange,
  rows = 6,
  hint,
}: {
  number: string;
  titleValue: string;
  onTitleChange: (v: string) => void;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  hint?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-sm font-bold text-gray-500 flex-shrink-0">{number}.</span>
        <input
          type="text"
          value={titleValue}
          onChange={(e) => onTitleChange(e.target.value)}
          className="flex-1 text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
          placeholder="Section heading..."
        />
      </div>
      {hint && <p className="text-xs text-gray-400 mb-2">{hint}</p>}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition resize-y font-mono"
        placeholder="Enter content..."
      />
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
      />
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function BlogForm({ blog }: BlogFormProps) {
  const isEdit = !!blog;
  const isOldPost = isEdit && !blog?.sections;

  const router = useRouter();
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const docxInputRef = useRef<HTMLInputElement>(null);
  const collegeId = useAdminCollege();

  // Step state (only for new posts)
  const [step, setStep] = useState<1 | 2>(isEdit ? 2 : 1);

  // Card detail fields
  const [title, setTitle] = useState(blog?.title ?? '');
  const [slug, setSlug] = useState(blog?.slug ?? '');
  const [excerpt, setExcerpt] = useState(blog?.excerpt ?? '');
  const [content, setContent] = useState(blog?.content ?? ''); // for old posts
  const [authorName, setAuthorName] = useState(
    blog?.author_name ?? 'JKKN Education Team'
  );
  const [category, setCategory] = useState(blog?.category ?? 'General');
  const [tags, setTags] = useState(blog?.tags ?? '');
  const [readTime, setReadTime] = useState(blog?.read_time ?? '');
  const [coverImageUrl, setCoverImageUrl] = useState(
    blog?.cover_image_url ?? ''
  );
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(
    blog?.cover_image_url ?? ''
  );

  // Structured section fields
  const [sections, setSections] = useState<BlogSections>(() => ({
    ...DEFAULT_SECTIONS,
    ...(blog?.sections ? blog.sections : {}),
  }));
  const [faqs, setFaqs] = useState<FaqItem[]>(
    blog?.sections?.faqs ?? []
  );

  // Loading states
  const [parsing, setParsing] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  // ── Handlers ──────────────────────────────────────────────────────────
  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setTitle(val);
    if (!isEdit) setSlug(slugify(val));
  }

  function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  async function handleDocxUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.name.endsWith('.docx')) {
      toast.error('Please upload a .docx Word file only.');
      return;
    }
    setParsing(true);
    try {
      const mammoth = await import('mammoth');
      const buffer = await file.arrayBuffer();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = await (mammoth as any).convertToHtml({ arrayBuffer: buffer });
      const { sections: parsed, faqs: parsedFaqs } = parseSectionsFromHtml(
        result.value
      );
      setSections((prev) => ({ ...prev, ...parsed }));
      if (parsedFaqs.length > 0) setFaqs(parsedFaqs);
      toast.success(
        `Word file parsed! ${Object.keys(parsed).length} sections filled.`
      );
    } catch {
      toast.error('Failed to parse Word file. Please try again.');
    }
    setParsing(false);
  }

  async function uploadImage(): Promise<string | null> {
    if (!imageFile) return coverImageUrl || null;
    setUploading(true);
    const ext = imageFile.name.split('.').pop();
    const fileName = `${Date.now()}-${slugify(title || 'blog')}.${ext}`;
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(fileName, imageFile, { upsert: true });
    setUploading(false);
    if (error) {
      toast.error('Image upload failed: ' + error.message);
      return null;
    }
    const {
      data: { publicUrl },
    } = supabase.storage.from('blog-images').getPublicUrl(data.path);
    return publicUrl;
  }

  async function handleSubmit(e: React.FormEvent, publish: boolean) {
    e.preventDefault();
    if (!title.trim()) return toast.error('Title is required.');
    if (!slug.trim()) return toast.error('Slug is required.');
    setSaving(true);

    const uploadedUrl = await uploadImage();
    if (imageFile && !uploadedUrl) {
      setSaving(false);
      return;
    }

    // Build the sections payload (include faqs inside sections)
    const sectionsPayload = isOldPost
      ? undefined
      : { ...sections, faqs };

    const payload = {
      college_id: collegeId,
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      content: isOldPost ? content.trim() : '',
      author_name: authorName.trim(),
      category,
      cover_image_url: uploadedUrl ?? '',
      is_published: publish,
      tags: tags.trim(),
      read_time: readTime.trim(),
      sections: sectionsPayload ?? null,
      ...(publish && !isEdit ? { published_at: new Date().toISOString() } : {}),
      updated_at: new Date().toISOString(),
    };

    let error;
    if (isEdit) {
      ({ error } = await supabase
        .from('blogs')
        .update(payload)
        .eq('id', blog.id));
    } else {
      ({ error } = await supabase.from('blogs').insert({
        ...payload,
        created_at: new Date().toISOString(),
      }));
    }

    setSaving(false);
    if (error) {
      toast.error('Save failed: ' + error.message);
    } else {
      toast.success(
        isEdit ? 'Post updated!' : publish ? 'Post published!' : 'Draft saved!'
      );
      router.push('/admin/blogs');
      router.refresh();
    }
  }

  // ── Old-post edit form (backward compat) ──────────────────────────────
  if (isOldPost) {
    return (
      <form className="space-y-6 max-w-3xl">
        <CardDetailsFields
          title={title}
          slug={slug}
          excerpt={excerpt}
          authorName={authorName}
          category={category}
          tags={tags}
          readTime={readTime}
          imagePreview={imagePreview}
          isEdit={isEdit}
          fileInputRef={fileInputRef}
          onTitleChange={handleTitleChange}
          onSlugChange={(v) => setSlug(slugify(v))}
          onExcerptChange={setExcerpt}
          onAuthorChange={setAuthorName}
          onCategoryChange={setCategory}
          onTagsChange={setTags}
          onReadTimeChange={setReadTime}
          onImageSelect={handleImageSelect}
          onImageClear={() => {
            setImagePreview('');
            setImageFile(null);
            setCoverImageUrl('');
          }}
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Content *
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={14}
            placeholder="Write your blog content here (HTML supported)..."
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition resize-y font-mono"
          />
          <p className="text-xs text-gray-400 mt-1">
            You can use HTML tags for formatting.
          </p>
        </div>
        <ActionButtons
          isEdit={isEdit}
          saving={saving}
          uploading={uploading}
          onSaveDraft={(e) => handleSubmit(e, false)}
          onPublish={(e) => handleSubmit(e, true)}
        />
      </form>
    );
  }

  // ── New / structured edit form ─────────────────────────────────────────
  return (
    <form className="space-y-8 max-w-3xl">
      {/* Step indicator (only for new posts) */}
      {!isEdit && (
        <div className="flex items-center gap-3 mb-2">
          {[
            { n: 1, label: 'Card Details' },
            { n: 2, label: 'Blog Content' },
          ].map(({ n, label }) => (
            <div key={n} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  step >= n
                    ? 'bg-[#006837] text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {n}
              </div>
              <span
                className={`text-sm font-medium ${
                  step >= n ? 'text-gray-800' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
              {n < 2 && (
                <ChevronRight className="w-4 h-4 text-gray-300 mx-1" />
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── Step 1: Card Details ── */}
      {(step === 1 || isEdit) && (
        <div className="space-y-6">
          {isEdit && (
            <h2 className="text-base font-bold text-gray-700 border-b pb-2">
              Card Details
            </h2>
          )}
          <CardDetailsFields
            title={title}
            slug={slug}
            excerpt={excerpt}
            authorName={authorName}
            category={category}
            tags={tags}
            readTime={readTime}
            imagePreview={imagePreview}
            isEdit={isEdit}
            fileInputRef={fileInputRef}
            onTitleChange={handleTitleChange}
            onSlugChange={(v) => setSlug(slugify(v))}
            onExcerptChange={setExcerpt}
            onAuthorChange={setAuthorName}
            onCategoryChange={setCategory}
            onTagsChange={setTags}
            onReadTimeChange={setReadTime}
            onImageSelect={handleImageSelect}
            onImageClear={() => {
              setImagePreview('');
              setImageFile(null);
              setCoverImageUrl('');
            }}
          />
          {!isEdit && (
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => {
                  if (!title.trim())
                    return toast.error('Please enter a blog title first.');
                  setStep(2);
                }}
                className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#005a2e] transition"
              >
                Next: Add Content
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── Step 2: Blog Content ── */}
      {(step === 2 || isEdit) && (
        <div className="space-y-8">
          {isEdit && (
            <h2 className="text-base font-bold text-gray-700 border-b pb-2 mt-4">
              Blog Content
            </h2>
          )}

          {/* Download & Upload Word File */}
          <div className="bg-[#FBFBEE] border border-[#7cb983]/40 rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">
                Word Template — Upload to Auto-Fill Sections
              </h3>
              <p className="text-xs text-gray-500">
                Download the template, edit your content in Word, then upload
                the .docx file to automatically populate all sections below.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/api/blog-template"
                download="JKKN-Blog-Template.docx"
                className="flex items-center gap-2 border-2 border-[#006837] text-[#006837] text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#006837] hover:text-white transition"
              >
                <Download className="w-4 h-4" />
                Download Template (.docx)
              </a>
              <button
                type="button"
                onClick={() => docxInputRef.current?.click()}
                disabled={parsing}
                className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#005a2e] transition disabled:opacity-60"
              >
                {parsing ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Upload className="w-4 h-4" />
                )}
                {parsing ? 'Parsing...' : 'Upload Word File (.docx)'}
              </button>
              <input
                ref={docxInputRef}
                type="file"
                accept=".docx"
                onChange={handleDocxUpload}
                className="hidden"
              />
            </div>
            <p className="text-xs text-amber-700 bg-amber-50 px-3 py-2 rounded-lg">
              Only .docx files are accepted. Edit the sections below manually
              if needed after upload.
            </p>
          </div>

          {/* ── Section Editors ── */}
          <div className="space-y-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Blog Sections — Edit Content Below
            </p>

            {/* HTML hint */}
            <p className="text-xs text-gray-400 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              Content is stored as HTML (auto-filled from Word upload). You can
              edit directly — basic HTML tags are supported.
            </p>

            <SectionTextarea
              number="1"
              titleValue={sections.what_is_bed_title}
              onTitleChange={(v) => setSections((s) => ({ ...s, what_is_bed_title: v }))}
              value={sections.what_is_bed}
              onChange={(v) => setSections((s) => ({ ...s, what_is_bed: v }))}
              rows={6}
            />
            <SectionTextarea
              number="2"
              titleValue={sections.eligibility_title}
              onTitleChange={(v) => setSections((s) => ({ ...s, eligibility_title: v }))}
              value={sections.eligibility}
              onChange={(v) => setSections((s) => ({ ...s, eligibility: v }))}
              rows={8}
              hint="Includes the eligibility table and important note."
            />
            <SectionTextarea
              number="3"
              titleValue={sections.curriculum_title}
              onTitleChange={(v) => setSections((s) => ({ ...s, curriculum_title: v }))}
              value={sections.curriculum}
              onChange={(v) => setSections((s) => ({ ...s, curriculum: v }))}
              rows={8}
              hint="Includes the semester-wise curriculum table."
            />
            <SectionTextarea
              number="4"
              titleValue={sections.tnteu_counseling_title}
              onTitleChange={(v) => setSections((s) => ({ ...s, tnteu_counseling_title: v }))}
              value={sections.tnteu_counseling}
              onChange={(v) =>
                setSections((s) => ({ ...s, tnteu_counseling: v }))
              }
              rows={8}
              hint="Includes the counseling schedule table and note."
            />
            <SectionTextarea
              number="5"
              titleValue={sections.fee_structure_title}
              onTitleChange={(v) => setSections((s) => ({ ...s, fee_structure_title: v }))}
              value={sections.fee_structure}
              onChange={(v) =>
                setSections((s) => ({ ...s, fee_structure: v }))
              }
              rows={7}
              hint="Includes the fee comparison table."
            />
            <SectionTextarea
              number="6"
              titleValue={sections.career_scope_title}
              onTitleChange={(v) => setSections((s) => ({ ...s, career_scope_title: v }))}
              value={sections.career_scope}
              onChange={(v) =>
                setSections((s) => ({ ...s, career_scope: v }))
              }
              rows={8}
            />

            {/* ── Mid-CTA Banner ── */}
            <div className="border border-gray-200 rounded-2xl p-5 space-y-4">
              <p className="text-sm font-bold text-gray-700">
                Mid-Content CTA Banner
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  label="Heading"
                  value={sections.mid_cta_heading}
                  onChange={(v) =>
                    setSections((s) => ({ ...s, mid_cta_heading: v }))
                  }
                  placeholder="Ready to Start Your Teaching Career?"
                />
                <TextInput
                  label="Button 1 Text"
                  value={sections.mid_cta_button1}
                  onChange={(v) =>
                    setSections((s) => ({ ...s, mid_cta_button1: v }))
                  }
                  placeholder="Apply Now →"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Description
                  </label>
                  <textarea
                    value={sections.mid_cta_description}
                    onChange={(e) =>
                      setSections((s) => ({
                        ...s,
                        mid_cta_description: e.target.value,
                      }))
                    }
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition resize-none"
                  />
                </div>
                <TextInput
                  label="Button 2 Text"
                  value={sections.mid_cta_button2}
                  onChange={(v) =>
                    setSections((s) => ({ ...s, mid_cta_button2: v }))
                  }
                  placeholder="Contact Admissions"
                />
              </div>
            </div>

            <SectionTextarea
              number="7"
              titleValue={sections.why_jkkn_title}
              onTitleChange={(v) => setSections((s) => ({ ...s, why_jkkn_title: v }))}
              value={sections.why_jkkn}
              onChange={(v) => setSections((s) => ({ ...s, why_jkkn: v }))}
              rows={8}
            />
            <SectionTextarea
              number="8"
              titleValue={sections.admission_process_title}
              onTitleChange={(v) => setSections((s) => ({ ...s, admission_process_title: v }))}
              value={sections.admission_process}
              onChange={(v) =>
                setSections((s) => ({ ...s, admission_process: v }))
              }
              rows={8}
            />

            {/* ── FAQ Editor ── */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-sm font-bold text-gray-500 flex-shrink-0">9.</span>
                  <input
                    type="text"
                    value={sections.faq_title}
                    onChange={(e) => setSections((s) => ({ ...s, faq_title: e.target.value }))}
                    className="flex-1 text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
                    placeholder="Section heading..."
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setFaqs((f) => [...f, { q: '', a: '' }])}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#006837] hover:text-[#005a2e] border border-[#006837] px-3 py-1.5 rounded-lg transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add FAQ
                </button>
              </div>
              {faqs.length === 0 && (
                <p className="text-xs text-gray-400 italic">
                  No FAQs yet. Upload a Word file or click &quot;Add FAQ&quot; to add
                  manually.
                </p>
              )}
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-gray-500">
                      FAQ #{i + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setFaqs((f) => f.filter((_, idx) => idx !== i))
                      }
                      className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-red-500 hover:bg-red-100 transition"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">
                      Question
                    </label>
                    <input
                      type="text"
                      value={faq.q}
                      onChange={(e) =>
                        setFaqs((f) =>
                          f.map((item, idx) =>
                            idx === i ? { ...item, q: e.target.value } : item
                          )
                        )
                      }
                      placeholder="Enter the question..."
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">
                      Answer
                    </label>
                    <textarea
                      value={faq.a}
                      onChange={(e) =>
                        setFaqs((f) =>
                          f.map((item, idx) =>
                            idx === i ? { ...item, a: e.target.value } : item
                          )
                        )
                      }
                      rows={3}
                      placeholder="Enter the answer..."
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition resize-none bg-white"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* ── Author Box ── */}
            <div className="border border-gray-200 rounded-2xl p-5 space-y-3">
              <p className="text-sm font-bold text-gray-700">
                Author Box (Written By)
              </p>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Author Bio
                </label>
                <textarea
                  value={sections.author_bio}
                  onChange={(e) =>
                    setSections((s) => ({ ...s, author_bio: e.target.value }))
                  }
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition resize-none"
                />
              </div>
            </div>

            {/* ── Sidebar CTA Card ── */}
            <div className="border border-gray-200 rounded-2xl p-5 space-y-4">
              <p className="text-sm font-bold text-gray-700">
                Sidebar CTA Card
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  label="Status Label"
                  value={sections.sidebar_status}
                  onChange={(v) =>
                    setSections((s) => ({ ...s, sidebar_status: v }))
                  }
                  placeholder="OPEN"
                />
                <TextInput
                  label="Heading"
                  value={sections.sidebar_heading}
                  onChange={(v) =>
                    setSections((s) => ({ ...s, sidebar_heading: v }))
                  }
                  placeholder="B.Ed Admission 2026"
                />
                <TextInput
                  label="Description"
                  value={sections.sidebar_description}
                  onChange={(v) =>
                    setSections((s) => ({ ...s, sidebar_description: v }))
                  }
                  placeholder="100 Seats Available..."
                />
                <TextInput
                  label="Phone Number"
                  value={sections.sidebar_phone}
                  onChange={(v) =>
                    setSections((s) => ({ ...s, sidebar_phone: v }))
                  }
                  placeholder="+91 9345855001"
                />
              </div>
            </div>
          </div>

          {/* ── Back button (new post only) ── */}
          {!isEdit && (
            <div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Card Details
              </button>
            </div>
          )}

          <ActionButtons
            isEdit={isEdit}
            saving={saving}
            uploading={uploading}
            onSaveDraft={(e) => handleSubmit(e, false)}
            onPublish={(e) => handleSubmit(e, true)}
          />
        </div>
      )}
    </form>
  );
}

// ── Shared sub-components ──────────────────────────────────────────────────
function CardDetailsFields({
  title,
  slug,
  excerpt,
  authorName,
  category,
  tags,
  readTime,
  imagePreview,
  isEdit,
  fileInputRef,
  onTitleChange,
  onSlugChange,
  onExcerptChange,
  onAuthorChange,
  onCategoryChange,
  onTagsChange,
  onReadTimeChange,
  onImageSelect,
  onImageClear,
}: {
  title: string;
  slug: string;
  excerpt: string;
  authorName: string;
  category: string;
  tags: string;
  readTime: string;
  imagePreview: string;
  isEdit: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSlugChange: (v: string) => void;
  onExcerptChange: (v: string) => void;
  onAuthorChange: (v: string) => void;
  onCategoryChange: (v: string) => void;
  onTagsChange: (v: string) => void;
  onReadTimeChange: (v: string) => void;
  onImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onImageClear: () => void;
}) {
  const [isOther, setIsOther] = useState(
    () => !!category && !CATEGORIES.slice(0, -1).includes(category)
  );
  return (
    <>
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Blog Title *
        </label>
        <input
          type="text"
          value={title}
          onChange={onTitleChange}
          required
          placeholder="Enter blog title..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          URL Slug *
        </label>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400 bg-gray-50 border border-gray-200 rounded-l-xl px-3 py-3 whitespace-nowrap">
            /blog/campus/
          </span>
          <input
            type="text"
            value={slug}
            onChange={(e) => onSlugChange(e.target.value)}
            required
            placeholder="url-slug-here"
            className="flex-1 px-4 py-3 border border-gray-200 rounded-r-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
          />
        </div>
      </div>

      {/* Category & Author */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Category
          </label>
          <select
            value={isOther ? 'Other' : category}
            onChange={(e) => {
              if (e.target.value === 'Other') {
                setIsOther(true);
                onCategoryChange('');
              } else {
                setIsOther(false);
                onCategoryChange(e.target.value);
              }
            }}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition bg-white"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {isOther && (
            <input
              type="text"
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              placeholder="Enter custom category..."
              autoFocus
              className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
            />
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Author Name
          </label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => onAuthorChange(e.target.value)}
            placeholder="JKKN Education Team"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
          />
        </div>
      </div>

      {/* Tags & Read Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Tags{' '}
            <span className="text-gray-400 font-normal">
              (comma-separated)
            </span>
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => onTagsChange(e.target.value)}
            placeholder="B.Ed, Tamil Nadu, TNTEU"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Read Time
          </label>
          <input
            type="text"
            value={readTime}
            onChange={(e) => onReadTimeChange(e.target.value)}
            placeholder="12 min read"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
          />
        </div>
      </div>

      {/* Quick Answer / Excerpt */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Quick Answer{' '}
          <span className="text-gray-400 font-normal">
            (shown at top of the article as a summary box)
          </span>
        </label>
        <textarea
          value={excerpt}
          onChange={(e) => onExcerptChange(e.target.value)}
          rows={3}
          placeholder="One or two sentences summarising this blog post..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition resize-none"
        />
      </div>

      {/* Cover Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Cover Image
        </label>
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-[#006837] hover:bg-green-50/30 transition"
        >
          {imagePreview ? (
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagePreview}
                alt="Preview"
                className="h-40 mx-auto rounded-lg object-cover"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onImageClear();
                }}
                className="absolute top-1 right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <ImageIcon className="w-8 h-8" />
              <p className="text-sm">Click to upload cover image</p>
              <p className="text-xs">JPG, PNG, WebP up to 5MB</p>
            </div>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={onImageSelect}
          className="hidden"
        />
      </div>
    </>
  );
}

function ActionButtons({
  isEdit,
  saving,
  uploading,
  onSaveDraft,
  onPublish,
}: {
  isEdit: boolean;
  saving: boolean;
  uploading: boolean;
  onSaveDraft: (e: React.FormEvent) => void;
  onPublish: (e: React.FormEvent) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      <button
        type="button"
        onClick={onSaveDraft}
        disabled={saving || uploading}
        className="flex items-center gap-2 border-2 border-gray-200 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-50 transition disabled:opacity-50"
      >
        {saving || uploading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : null}
        Save as Draft
      </button>
      <button
        type="button"
        onClick={onPublish}
        disabled={saving || uploading}
        className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#005a2e] transition disabled:opacity-50"
      >
        {saving || uploading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : null}
        {isEdit ? 'Update & Publish' : 'Publish Post'}
      </button>
    </div>
  );
}
