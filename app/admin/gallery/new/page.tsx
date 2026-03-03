'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useAdminCollege } from '../../AdminCollegeContext';

export default function NewAlbum() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [saving, setSaving] = useState(false);
  const router = useRouter();
  const supabase = createClient();
  const collegeId = useAdminCollege();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return toast.error('Album name is required.');
    setSaving(true);

    const { data, error } = await supabase
      .from('gallery_albums')
      .insert({ name: name.trim(), description: description.trim(), college_id: collegeId })
      .select('id')
      .single();

    setSaving(false);
    if (error) {
      toast.error('Failed to create album: ' + error.message);
    } else {
      toast.success('Album created! Now add your photos.');
      router.push(`/admin/gallery/${data.id}`);
      router.refresh();
    }
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-xl">
      <Link
        href="/admin/gallery"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Gallery
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">New Album</h1>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Album Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g. Annual Day 2025"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Description <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Brief description of this album..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white text-sm font-semibold py-3 rounded-xl hover:bg-purple-700 transition disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            Create Album & Add Photos
          </button>
        </form>
      </div>
    </div>
  );
}
