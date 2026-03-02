'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import toast from 'react-hot-toast';
import { Plus, Pencil, Trash2, Loader2, X, Search } from 'lucide-react';
import ConfirmModal from '../../ConfirmModal';
import { useAdminCollege } from '../../AdminCollegeContext';

interface BlogTag {
  id: string;
  name: string;
  slug: string;
  color: string | null;
}

interface Props {
  tags: BlogTag[];
  postCounts: Record<string, number>;
}

const COLOR_OPTIONS = [
  '#3B82F6', '#6366F1', '#8B5CF6', '#EC4899', '#EF4444',
  '#F97316', '#EAB308', '#22C55E', '#14B8A6', '#6B7280',
];

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
}

function TagModal({
  tag,
  onClose,
  onSave,
}: {
  tag?: BlogTag;
  onClose: () => void;
  onSave: () => void;
}) {
  const [name, setName] = useState(tag?.name ?? '');
  const [slug, setSlug] = useState(tag?.slug ?? '');
  const [color, setColor] = useState(tag?.color ?? '#6B7280');
  const [loading, setLoading] = useState(false);
  const supabase = createClient();
  const collegeId = useAdminCollege();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);

    const payload = {
      name: name.trim(),
      slug: slug.trim() || slugify(name),
      color,
      college_id: collegeId,
    };

    let error;
    if (tag) {
      ({ error } = await supabase.from('blog_tags').update(payload).eq('id', tag.id));
    } else {
      ({ error } = await supabase.from('blog_tags').insert(payload));
    }

    if (error) {
      toast.error(error.message || 'Failed to save tag.');
    } else {
      toast.success(tag ? 'Tag updated.' : 'Tag created.');
      onSave();
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-gray-900">{tag ? 'Edit Tag' : 'New Tag'}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100">
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (!tag) setSlug(slugify(e.target.value));
              }}
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837]"
              placeholder="e.g. JKKN Dental"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] font-mono"
              placeholder="e.g. jkkn-dental"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
            <div className="flex gap-2 flex-wrap">
              {COLOR_OPTIONS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  className={`w-7 h-7 rounded-full border-2 transition ${
                    color === c ? 'border-gray-800 scale-110' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2.5 text-sm font-semibold text-white bg-[#006837] rounded-xl hover:bg-[#005a2e] transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {tag ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function NewTagButton() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#005a2e] transition"
      >
        <Plus className="w-4 h-4" />
        New Tag
      </button>
      {open && (
        <TagModal
          onClose={() => setOpen(false)}
          onSave={() => {
            setOpen(false);
            router.refresh();
          }}
        />
      )}
    </>
  );
}

export default function TagsClient({ tags, postCounts }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [editTag, setEditTag] = useState<BlogTag | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [pendingDelete, setPendingDelete] = useState<BlogTag | null>(null);
  const supabase = createClient();

  const filtered = useMemo(
    () => tags.filter((t) => !search || t.name.toLowerCase().includes(search.toLowerCase())),
    [tags, search]
  );

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function toggleAll() {
    if (selected.size === filtered.length) setSelected(new Set());
    else setSelected(new Set(filtered.map((t) => t.id)));
  }

  async function doDelete() {
    if (!pendingDelete) return;
    const tag = pendingDelete;
    setPendingDelete(null);
    setDeletingId(tag.id);
    const { error } = await supabase.from('blog_tags').delete().eq('id', tag.id);
    if (error) toast.error('Failed to delete tag.');
    else {
      toast.success('Tag deleted.');
      router.refresh();
    }
    setDeletingId(null);
  }

  return (
    <>
      {/* Search */}
      <div className="mb-4">
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837]"
          />
        </div>
      </div>

      {/* Select all */}
      <div className="bg-white rounded-t-2xl border border-b-0 border-gray-100 px-5 py-3 flex items-center gap-3">
        <input
          type="checkbox"
          checked={selected.size === filtered.length && filtered.length > 0}
          onChange={toggleAll}
          className="rounded border-gray-300 text-[#006837] focus:ring-[#006837]"
        />
        <span className="text-sm text-gray-600">
          Select all ({filtered.length} tag{filtered.length !== 1 ? 's' : ''})
        </span>
      </div>

      {filtered.length > 0 ? (
        <div className="bg-white rounded-b-2xl border border-gray-100 shadow-sm p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filtered.map((tag) => (
            <div
              key={tag.id}
              className={`border rounded-2xl p-4 transition hover:shadow-sm ${
                selected.has(tag.id) ? 'border-[#006837]/30 bg-green-50/30' : 'border-gray-100'
              }`}
            >
              <div className="flex items-start gap-2 mb-3">
                <input
                  type="checkbox"
                  checked={selected.has(tag.id)}
                  onChange={() => toggleSelect(tag.id)}
                  className="mt-0.5 rounded border-gray-300 text-[#006837] focus:ring-[#006837]"
                />
                <span
                  className="w-3 h-3 rounded-full mt-0.5 flex-shrink-0"
                  style={{ backgroundColor: tag.color ?? '#6B7280' }}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm leading-tight">{tag.name}</p>
                </div>
                <button
                  onClick={() => setEditTag(tag)}
                  className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 flex-shrink-0"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setPendingDelete(tag)}
                  disabled={deletingId === tag.id}
                  className="p-1 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 flex-shrink-0 disabled:opacity-50"
                >
                  {deletingId === tag.id ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Trash2 className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-400 font-mono mb-1">/{tag.slug}</p>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {postCounts[tag.name] ?? 0} posts
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-b-2xl border border-gray-100 shadow-sm py-12 flex flex-col items-center text-center">
          <p className="font-semibold text-gray-700 mb-1">
            {search ? 'No tags match your search' : 'No tags yet'}
          </p>
          <p className="text-sm text-gray-400">
            {search ? 'Try a different search term.' : 'Create tags to organize your posts.'}
          </p>
        </div>
      )}

      <ConfirmModal
        open={!!pendingDelete}
        message={pendingDelete ? `Delete tag "${pendingDelete.name}"? This cannot be undone.` : ''}
        onConfirm={doDelete}
        onCancel={() => setPendingDelete(null)}
      />
      {editTag && (
        <TagModal
          tag={editTag}
          onClose={() => setEditTag(null)}
          onSave={() => {
            setEditTag(null);
            router.refresh();
          }}
        />
      )}
    </>
  );
}

export { NewTagButton };
