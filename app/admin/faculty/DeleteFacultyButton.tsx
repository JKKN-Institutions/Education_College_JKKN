'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Trash2, Loader2 } from 'lucide-react';

export default function DeleteFacultyButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleDelete() {
    setLoading(true);
    const { error } = await supabase.from('faculty').delete().eq('id', id);
    setLoading(false);
    if (error) {
      toast.error('Delete failed: ' + error.message);
    } else {
      toast.success('Faculty member removed.');
      router.refresh();
    }
    setConfirm(false);
  }

  if (confirm) {
    return (
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-gray-500">Sure?</span>
        <button
          onClick={handleDelete}
          disabled={loading}
          className="text-xs font-medium text-red-600 hover:text-red-700 px-2 py-1 rounded-lg hover:bg-red-50 transition"
        >
          {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Yes'}
        </button>
        <button
          onClick={() => setConfirm(false)}
          className="text-xs font-medium text-gray-500 hover:text-gray-700 px-2 py-1 rounded-lg hover:bg-gray-100 transition"
        >
          No
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setConfirm(true)}
      className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-red-600 px-2 py-1.5 rounded-lg hover:bg-red-50 transition"
    >
      <Trash2 className="w-3.5 h-3.5" />
      Delete
    </button>
  );
}
