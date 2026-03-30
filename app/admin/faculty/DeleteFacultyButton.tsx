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

  return (
    <>
      <button
        onClick={() => setConfirm(true)}
        className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-red-600 px-2 py-1.5 rounded-lg hover:bg-red-50 transition"
      >
        <Trash2 className="w-3.5 h-3.5" />
        Delete
      </button>

      {confirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-80 flex flex-col gap-4">
            <h2 className="text-base font-semibold text-gray-800">Delete Faculty Member?</h2>
            <p className="text-sm text-gray-500">This action cannot be undone. Are you sure you want to remove this faculty member?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setConfirm(false)}
                disabled={loading}
                className="text-sm font-medium text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={loading}
                className="flex items-center gap-1.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
