'use client';

import { useState } from 'react';
import { Trash2, Loader2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import ConfirmModal from '../ConfirmModal';

export default function DeleteNoticeButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function doDelete() {
    setModalOpen(false);
    setLoading(true);
    const { error } = await supabase.from('notices').delete().eq('id', id);
    if (error) {
      toast.error('Failed to delete notice.');
    } else {
      toast.success('Notice deleted.');
      router.refresh();
    }
    setLoading(false);
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        disabled={loading}
        className="flex items-center gap-1.5 text-xs font-medium text-red-500 hover:text-red-700 px-3 py-1.5 rounded-lg hover:bg-red-50 transition disabled:opacity-50"
      >
        {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
        Delete
      </button>
      <ConfirmModal
        open={modalOpen}
        message="Delete this notice? This cannot be undone."
        onConfirm={doDelete}
        onCancel={() => setModalOpen(false)}
      />
    </>
  );
}
