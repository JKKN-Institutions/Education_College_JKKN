'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import toast from 'react-hot-toast';
import {
  Search,
  ChevronDown,
  FileText,
  ArrowUpDown,
  Globe,
  Eye,
  MoreHorizontal,
  Pencil,
  Trash2,
  ExternalLink,
  Loader2,
} from 'lucide-react';
import ConfirmModal from '../ConfirmModal';

interface Blog {
  id: string;
  title: string;
  slug: string | null;
  category: string | null;
  author_name: string | null;
  is_published: boolean | null;
  created_at: string;
  published_at: string | null;
  view_count: number | null;
  read_time: string | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  blogs: Blog[];
  categories: Category[];
}

function formatDate(d: string | null) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatTime(d: string | null) {
  if (!d) return '';
  return new Date(d).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

function AuthorAvatar({ name }: { name: string | null }) {
  const initials = name
    ? name
        .split(' ')
        .map((w) => w[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'AU';
  return (
    <div className="w-7 h-7 rounded-full bg-amber-100 border-2 border-amber-200 flex items-center justify-center flex-shrink-0">
      <span className="text-[10px] font-bold text-amber-700">{initials}</span>
    </div>
  );
}

export default function BlogsTableClient({ blogs, categories }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [menuPos, setMenuPos] = useState<{ top: number; right: number } | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const supabase = createClient();

  const filtered = useMemo(() => {
    return (blogs ?? []).filter((b) => {
      const matchSearch =
        !search ||
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        (b.slug ?? '').toLowerCase().includes(search.toLowerCase());
      const matchStatus =
        statusFilter === 'all' ||
        (statusFilter === 'published' && b.is_published) ||
        (statusFilter === 'draft' && !b.is_published);
      const matchCategory =
        categoryFilter === 'all' ||
        (b.category ?? '').toLowerCase() === categoryFilter.toLowerCase();
      return matchSearch && matchStatus && matchCategory;
    });
  }, [blogs, search, statusFilter, categoryFilter]);

  async function doDelete() {
    if (!pendingDeleteId) return;
    const id = pendingDeleteId;
    setPendingDeleteId(null);
    setDeletingId(id);
    const { error } = await supabase.from('blogs').delete().eq('id', id);
    if (error) {
      toast.error('Failed to delete post.');
    } else {
      toast.success('Post deleted.');
      router.refresh();
    }
    setDeletingId(null);
  }

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function toggleAll() {
    if (selected.size === filtered.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(filtered.map((b) => b.id)));
    }
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837]"
          />
        </div>

        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="appearance-none pl-3 pr-8 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="appearance-none pl-3 pr-8 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] cursor-pointer"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {filtered.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-5 py-3.5 w-10">
                    <input
                      type="checkbox"
                      checked={selected.size === filtered.length && filtered.length > 0}
                      onChange={toggleAll}
                      className="rounded border-gray-300 text-[#006837] focus:ring-[#006837]"
                    />
                  </th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600">
                    <button className="flex items-center gap-1.5 hover:text-gray-900">
                      Post <ArrowUpDown className="w-3.5 h-3.5" />
                    </button>
                  </th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 hidden sm:table-cell">
                    <button className="flex items-center gap-1.5 hover:text-gray-900">
                      Category <ArrowUpDown className="w-3.5 h-3.5" />
                    </button>
                  </th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 hidden md:table-cell">
                    <button className="flex items-center gap-1.5 hover:text-gray-900">
                      Author <ArrowUpDown className="w-3.5 h-3.5" />
                    </button>
                  </th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600">
                    <button className="flex items-center gap-1.5 hover:text-gray-900">
                      Status <ArrowUpDown className="w-3.5 h-3.5" />
                    </button>
                  </th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 hidden lg:table-cell">
                    <button className="flex items-center gap-1.5 hover:text-gray-900">
                      Views <ArrowUpDown className="w-3.5 h-3.5" />
                    </button>
                  </th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 hidden lg:table-cell">
                    <button className="flex items-center gap-1.5 hover:text-gray-900">
                      Published <ArrowUpDown className="w-3.5 h-3.5" />
                    </button>
                  </th>
                  <th className="px-4 py-3.5 w-12" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((blog) => (
                  <tr
                    key={blog.id}
                    className={`hover:bg-gray-50/50 transition ${selected.has(blog.id) ? 'bg-green-50/30' : ''}`}
                  >
                    <td className="px-5 py-4">
                      <input
                        type="checkbox"
                        checked={selected.has(blog.id)}
                        onChange={() => toggleSelect(blog.id)}
                        className="rounded border-gray-300 text-[#006837] focus:ring-[#006837]"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-gray-800 truncate max-w-[200px]">{blog.title}</p>
                          <p className="text-xs text-gray-400 truncate max-w-[200px]">
                            /{blog.slug ?? ''}
                            {blog.read_time && <span> · {blog.read_time}</span>}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden sm:table-cell">
                      {blog.category ? (
                        <span className="text-xs font-medium text-blue-600 border border-blue-200 px-2.5 py-1 rounded-full">
                          {blog.category}
                        </span>
                      ) : (
                        <span className="text-gray-400 text-xs">—</span>
                      )}
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <AuthorAvatar name={blog.author_name} />
                        <span className="text-sm text-gray-600 truncate max-w-[100px]">
                          {blog.author_name ? blog.author_name.split(' ')[0] + ' ...' : '—'}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                            blog.is_published
                              ? 'bg-green-50 text-green-700 border border-green-100'
                              : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          {blog.is_published ? 'Published' : 'Draft'}
                        </span>
                        {blog.is_published && (
                          <Globe className="w-3.5 h-3.5 text-gray-400" />
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden lg:table-cell">
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <Eye className="w-3.5 h-3.5" />
                        <span className="text-sm">{blog.view_count ?? 0}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden lg:table-cell">
                      <div>
                        <p className="text-sm text-gray-600">{formatDate(blog.published_at ?? blog.created_at)}</p>
                        <p className="text-xs text-gray-400">{formatTime(blog.published_at ?? blog.created_at)}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="relative">
                        <button
                          onClick={(e) => {
                            if (openMenu === blog.id) {
                              setOpenMenu(null);
                              setMenuPos(null);
                            } else {
                              const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                              setMenuPos({ top: rect.bottom + 4, right: window.innerWidth - rect.right });
                              setOpenMenu(blog.id);
                            }
                          }}
                          className="p-1.5 rounded-lg hover:bg-gray-100 transition"
                        >
                          {deletingId === blog.id ? (
                            <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                          ) : (
                            <MoreHorizontal className="w-4 h-4 text-gray-400" />
                          )}
                        </button>

                        {openMenu === blog.id && menuPos && (
                          <>
                            <div
                              className="fixed inset-0 z-10"
                              onClick={() => { setOpenMenu(null); setMenuPos(null); }}
                            />
                            <div
                              className="fixed z-20 bg-white rounded-xl border border-gray-100 shadow-lg py-1 min-w-[140px]"
                              style={{ top: menuPos.top, right: menuPos.right }}
                            >
                              <Link
                                href={`/admin/blogs/${blog.id}`}
                                className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                onClick={() => { setOpenMenu(null); setMenuPos(null); }}
                              >
                                <Pencil className="w-3.5 h-3.5" />
                                Edit
                              </Link>
                              {blog.is_published && blog.slug && (
                                <Link
                                  href={`/blog/campus/${blog.slug}`}
                                  target="_blank"
                                  className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                  onClick={() => { setOpenMenu(null); setMenuPos(null); }}
                                >
                                  <ExternalLink className="w-3.5 h-3.5" />
                                  View Live
                                </Link>
                              )}
                              <hr className="my-1 border-gray-100" />
                              <button
                                onClick={() => { setOpenMenu(null); setMenuPos(null); setPendingDeleteId(blog.id); }}
                                className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                Delete
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-16 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
              <FileText className="w-7 h-7 text-gray-300" />
            </div>
            <p className="font-semibold text-gray-700 mb-1">
              {search || statusFilter !== 'all' || categoryFilter !== 'all'
                ? 'No posts match your filters'
                : 'No blog posts yet'}
            </p>
            <p className="text-sm text-gray-400 mb-5">
              {search || statusFilter !== 'all' || categoryFilter !== 'all'
                ? 'Try adjusting your search or filters.'
                : 'Create your first blog post to get started.'}
            </p>
            {!search && statusFilter === 'all' && categoryFilter === 'all' && (
              <Link
                href="/admin/blogs/new"
                className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#005a2e] transition"
              >
                New Post
              </Link>
            )}
          </div>
        )}
      </div>
      <ConfirmModal
        open={!!pendingDeleteId}
        message="Delete this blog post? This cannot be undone."
        onConfirm={doDelete}
        onCancel={() => setPendingDeleteId(null)}
      />
    </div>
  );
}
