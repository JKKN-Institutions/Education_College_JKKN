'use client';

import { useState } from 'react';
import { Trash2, Loader2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import ConfirmModal from '../ConfirmModal';

export default function DeleteAlbumButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function doDelete() {
    setModalOpen(false);
    setLoading(true);
    const { error } = await supabase.from('gallery_albums').delete().eq('id', id);
    if (error) {
      toast.error('Failed to delete album.');
    } else {
      toast.success('Album deleted.');
      router.refresh();
    }
    setLoading(false);
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        disabled={loading}
        className="flex items-center justify-center gap-1 text-xs font-medium text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-2 rounded-lg transition disabled:opacity-50"
      >
        {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
      </button>
      <ConfirmModal
        open={modalOpen}
        message="Delete this album and all its photos? This cannot be undone."
        onConfirm={doDelete}
        onCancel={() => setModalOpen(false)}
      />
    </>
  );
}
