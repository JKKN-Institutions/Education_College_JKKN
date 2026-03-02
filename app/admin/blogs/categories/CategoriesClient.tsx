'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import toast from 'react-hot-toast';
import { Plus, Pencil, Trash2, Loader2, X } from 'lucide-react';
import ConfirmModal from '../../ConfirmModal';
import { useAdminCollege } from '../../AdminCollegeContext';

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  color: string | null;
  is_active: boolean | null;
}

interface Props {
  categories: Category[];
  postCounts: Record<string, number>;
}

const COLOR_OPTIONS = [
  '#3B82F6', // blue
  '#6366F1', // indigo
  '#8B5CF6', // violet
  '#EC4899', // pink
  '#EF4444', // red
  '#F97316', // orange
  '#EAB308', // yellow
  '#22C55E', // green
  '#14B8A6', // teal
  '#006837', // dark green
];

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function CategoryModal({
  category,
  onClose,
  onSave,
}: {
  category?: Category;
  onClose: () => void;
  onSave: () => void;
}) {
  const [name, setName] = useState(category?.name ?? '');
  const [slug, setSlug] = useState(category?.slug ?? '');
  const [description, setDescription] = useState(category?.description ?? '');
  const [color, setColor] = useState(category?.color ?? '#3B82F6');
  const [isActive, setIsActive] = useState(category?.is_active ?? true);
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
      description: description.trim(),
      color,
      is_active: isActive,
      college_id: collegeId,
    };

    let error;
    if (category) {
      ({ error } = await supabase.from('blog_categories').update(payload).eq('id', category.id));
    } else {
      ({ error } = await supabase.from('blog_categories').insert(payload));
    }

    if (error) {
      toast.error(error.message || 'Failed to save category.');
    } else {
      toast.success(category ? 'Category updated.' : 'Category created.');
      onSave();
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-gray-900">
            {category ? 'Edit Category' : 'New Category'}
          </h2>
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
                if (!category) setSlug(slugify(e.target.value));
              }}
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837]"
              placeholder="e.g. Dental Education"
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
              placeholder="e.g. dental-education"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] resize-none"
              placeholder="Optional description..."
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
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                isActive ? 'bg-[#006837]' : 'bg-gray-200'
              }`}
            >
              <span
                className={`absolute left-0 top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                  isActive ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className="text-sm text-gray-600">Active</span>
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
              {category ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function NewCategoryButton() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#005a2e] transition"
      >
        <Plus className="w-4 h-4" />
        New Category
      </button>
      {open && (
        <CategoryModal
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

export default function CategoriesClient({ categories, postCounts }: Props) {
  const router = useRouter();
  const [editCategory, setEditCategory] = useState<Category | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [togglingId, setTogglingId] = useState<string | null>(null);
  const [pendingDelete, setPendingDelete] = useState<Category | null>(null);
  const supabase = createClient();

  async function doDelete() {
    if (!pendingDelete) return;
    const cat = pendingDelete;
    setPendingDelete(null);
    setDeletingId(cat.id);
    const { error } = await supabase.from('blog_categories').delete().eq('id', cat.id);
    if (error) toast.error('Failed to delete category.');
    else {
      toast.success('Category deleted.');
      router.refresh();
    }
    setDeletingId(null);
  }

  async function handleToggleActive(cat: Category) {
    setTogglingId(cat.id);
    const { error } = await supabase
      .from('blog_categories')
      .update({ is_active: !cat.is_active })
      .eq('id', cat.id);
    if (error) toast.error('Failed to update.');
    else router.refresh();
    setTogglingId(null);
  }

  if (categories.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
          <span className="text-2xl">📂</span>
        </div>
        <p className="font-semibold text-gray-700 mb-1">No categories yet</p>
        <p className="text-sm text-gray-400 mb-5">Create your first category to organize blog posts.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: cat.color ?? '#3B82F6' }}
                />
                <span className="font-semibold text-gray-900">{cat.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setEditCategory(cat)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setPendingDelete(cat)}
                  disabled={deletingId === cat.id}
                  className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition disabled:opacity-50"
                >
                  {deletingId === cat.id ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Trash2 className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-3 min-h-[20px]">
              {cat.description || 'No description'}
            </p>

            <p className="text-xs text-gray-400 font-mono mb-2">/{cat.slug}</p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                {cat.is_active ? 'Active' : 'Inactive'}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                  {postCounts[cat.name] ?? 0} posts
                </span>
                <button
                  type="button"
                  onClick={() => handleToggleActive(cat)}
                  disabled={togglingId === cat.id}
                  className={`relative w-10 h-5 rounded-full transition-colors disabled:opacity-50 ${
                    cat.is_active ? 'bg-[#006837]' : 'bg-gray-200'
                  }`}
                >
                  {togglingId === cat.id ? (
                    <Loader2 className="absolute inset-0 m-auto w-3 h-3 animate-spin text-white" />
                  ) : (
                    <span
                      className={`absolute left-0 top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                        cat.is_active ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ConfirmModal
        open={!!pendingDelete}
        message={pendingDelete ? `Delete "${pendingDelete.name}"? This cannot be undone.` : ''}
        onConfirm={doDelete}
        onCancel={() => setPendingDelete(null)}
      />
      {editCategory && (
        <CategoryModal
          category={editCategory}
          onClose={() => setEditCategory(null)}
          onSave={() => {
            setEditCategory(null);
            router.refresh();
          }}
        />
      )}
    </>
  );
}

export { NewCategoryButton };
