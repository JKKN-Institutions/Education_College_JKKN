'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import toast from 'react-hot-toast';
import {
  Search,
  ChevronDown,
  RefreshCw,
  Loader2,
  Check,
  X,
  Trash2,
  AlertTriangle,
} from 'lucide-react';
import ConfirmModal from '../../ConfirmModal';

interface Comment {
  id: string;
  author_name: string;
  author_email: string;
  author_avatar_url: string | null;
  content: string;
  status: string;
  created_at: string;
  blogs: { title: string; slug: string } | null;
}

interface Props {
  comments: Comment[];
}

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-amber-50 text-amber-600 border-amber-100',
  approved: 'bg-green-50 text-green-700 border-green-100',
  rejected: 'bg-red-50 text-red-600 border-red-100',
  spam: 'bg-gray-100 text-gray-600',
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function AuthorInitials({ name }: { name: string }) {
  const initials = name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2);
  return (
    <div className="w-9 h-9 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center flex-shrink-0">
      <span className="text-xs font-bold text-blue-700">{initials}</span>
    </div>
  );
}

function RefreshButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  async function handleRefresh() {
    setLoading(true);
    router.refresh();
    setTimeout(() => setLoading(false), 800);
  }
  return (
    <button
      onClick={handleRefresh}
      className="flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50 transition"
    >
      <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
      Refresh
    </button>
  );
}

export default function CommentsClient({ comments }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const supabase = createClient();

  const filtered = useMemo(
    () =>
      comments.filter((c) => {
        const matchSearch =
          !search ||
          c.author_name.toLowerCase().includes(search.toLowerCase()) ||
          c.author_email.toLowerCase().includes(search.toLowerCase()) ||
          c.content.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter === 'all' || c.status === statusFilter;
        return matchSearch && matchStatus;
      }),
    [comments, search, statusFilter]
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
    else setSelected(new Set(filtered.map((c) => c.id)));
  }

  async function updateStatus(id: string, status: string) {
    setLoadingId(id);
    const { error } = await supabase.from('blog_comments').update({ status }).eq('id', id);
    if (error) toast.error('Failed to update status.');
    else {
      toast.success(`Comment ${status}.`);
      router.refresh();
    }
    setLoadingId(null);
  }

  async function doDelete() {
    if (!pendingDeleteId) return;
    const id = pendingDeleteId;
    setPendingDeleteId(null);
    setLoadingId(id);
    const { error } = await supabase.from('blog_comments').delete().eq('id', id);
    if (error) toast.error('Failed to delete comment.');
    else {
      toast.success('Comment deleted.');
      router.refresh();
    }
    setLoadingId(null);
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search comments..."
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
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="spam">Spam</option>
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
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
        <span className="text-sm text-gray-600">Select all on this page</span>
      </div>

      <div className="bg-white rounded-b-2xl border border-t-0 border-gray-100 shadow-sm divide-y divide-gray-50">
        {filtered.length > 0 ? (
          filtered.map((comment) => (
            <div
              key={comment.id}
              className={`p-5 transition hover:bg-gray-50/50 ${selected.has(comment.id) ? 'bg-green-50/30' : ''}`}
            >
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={selected.has(comment.id)}
                  onChange={() => toggleSelect(comment.id)}
                  className="mt-1 rounded border-gray-300 text-[#006837] focus:ring-[#006837]"
                />
                <AuthorInitials name={comment.author_name} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-semibold text-gray-800 text-sm">{comment.author_name}</span>
                    <span className="text-xs text-gray-400">{comment.author_email}</span>
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${
                        STATUS_COLORS[comment.status] ?? 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {comment.status.charAt(0).toUpperCase() + comment.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{comment.content}</p>
                  {comment.blogs && (
                    <p className="text-xs text-gray-400">
                      On: <span className="text-[#006837]">{comment.blogs.title}</span>
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-0.5">{formatDate(comment.created_at)}</p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  {loadingId === comment.id ? (
                    <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                  ) : (
                    <>
                      {comment.status !== 'approved' && (
                        <button
                          title="Approve"
                          onClick={() => updateStatus(comment.id, 'approved')}
                          className="p-1.5 rounded-lg hover:bg-green-50 text-gray-400 hover:text-green-600 transition"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                      {comment.status !== 'rejected' && (
                        <button
                          title="Reject"
                          onClick={() => updateStatus(comment.id, 'rejected')}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                      {comment.status !== 'spam' && (
                        <button
                          title="Mark as Spam"
                          onClick={() => updateStatus(comment.id, 'spam')}
                          className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-500 transition"
                        >
                          <AlertTriangle className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        title="Delete"
                        onClick={() => setPendingDeleteId(comment.id)}
                        className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-14 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-3">
              <span className="text-xl">💬</span>
            </div>
            <p className="font-semibold text-gray-700 mb-1">
              {search || statusFilter !== 'all' ? 'No comments match your filters' : 'No comments yet'}
            </p>
            <p className="text-sm text-gray-400">
              {search || statusFilter !== 'all'
                ? 'Try adjusting your filters.'
                : 'Comments will appear here when readers submit them.'}
            </p>
          </div>
        )}
      </div>
      <ConfirmModal
        open={!!pendingDeleteId}
        message="Delete this comment? This cannot be undone."
        onConfirm={doDelete}
        onCancel={() => setPendingDeleteId(null)}
      />
    </div>
  );
}

export { RefreshButton };
