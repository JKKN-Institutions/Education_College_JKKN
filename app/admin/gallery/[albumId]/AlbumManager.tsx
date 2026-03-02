'use client';

import { useState, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Upload, X, Loader2, ImageIcon } from 'lucide-react';
import ConfirmModal from '../../ConfirmModal';
import { useAdminCollege } from '../../AdminCollegeContext';

interface GalleryImage {
  id: string;
  album_id: string;
  image_url: string;
  caption: string | null;
  display_order: number;
}

export default function AlbumManager({
  albumId,
  initialImages,
}: {
  albumId: string;
  initialImages: GalleryImage[];
}) {
  const [images, setImages] = useState<GalleryImage[]>(initialImages);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [pendingDelete, setPendingDelete] = useState<{ id: string; url: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();
  const router = useRouter();
  const collegeId = useAdminCollege();

  async function handleFilesSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    setUploading(true);

    const uploadedImages: GalleryImage[] = [];
    for (const file of files) {
      const ext = file.name.split('.').pop();
      const fileName = `${albumId}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { data, error: uploadError } = await supabase.storage
        .from('gallery')
        .upload(fileName, file, { upsert: true });

      if (uploadError) {
        toast.error(`Failed to upload ${file.name}`);
        continue;
      }

      const { data: { publicUrl } } = supabase.storage.from('gallery').getPublicUrl(data.path);

      const { data: imgRow, error: dbError } = await supabase
        .from('gallery_images')
        .insert({
          album_id: albumId,
          image_url: publicUrl,
          display_order: images.length + uploadedImages.length,
          college_id: collegeId,
        })
        .select()
        .single();

      if (dbError) {
        toast.error(`DB error for ${file.name}: ${dbError.message}`);
      } else {
        uploadedImages.push(imgRow);
      }
    }

    if (uploadedImages.length > 0) {
      setImages((prev) => [...prev, ...uploadedImages]);
      // Update album cover if first upload
      if (images.length === 0 && uploadedImages[0]) {
        await supabase
          .from('gallery_albums')
          .update({ cover_image_url: uploadedImages[0].image_url })
          .eq('id', albumId);
      }
      toast.success(`${uploadedImages.length} photo(s) uploaded!`);
      router.refresh();
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  async function doDelete() {
    if (!pendingDelete) return;
    const { id: imgId, url: imageUrl } = pendingDelete;
    setPendingDelete(null);
    setDeletingId(imgId);

    // Extract path from URL
    const urlParts = imageUrl.split('/storage/v1/object/public/gallery/');
    if (urlParts[1]) {
      await supabase.storage.from('gallery').remove([urlParts[1]]);
    }

    const { error } = await supabase.from('gallery_images').delete().eq('id', imgId);
    if (error) {
      toast.error('Failed to delete photo.');
    } else {
      setImages((prev) => prev.filter((img) => img.id !== imgId));
      toast.success('Photo removed.');
      router.refresh();
    }
    setDeletingId(null);
  }

  return (
    <div>
      {/* Upload Area */}
      <div
        onClick={() => !uploading && fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-2xl p-8 text-center mb-6 transition cursor-pointer ${
          uploading
            ? 'border-purple-300 bg-purple-50 cursor-wait'
            : 'border-gray-200 hover:border-purple-400 hover:bg-purple-50/30'
        }`}
      >
        {uploading ? (
          <div className="flex flex-col items-center gap-3 text-purple-600">
            <Loader2 className="w-8 h-8 animate-spin" />
            <p className="text-sm font-medium">Uploading photos...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <Upload className="w-8 h-8" />
            <p className="text-sm font-medium text-gray-600">Click to upload photos</p>
            <p className="text-xs">Select multiple files at once — JPG, PNG, WebP</p>
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFilesSelect}
        className="hidden"
      />

      {/* Photo Count */}
      <p className="text-sm font-medium text-gray-600 mb-4">
        {images.length} photo{images.length !== 1 ? 's' : ''} in this album
      </p>

      {/* Images Grid */}
      {images.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {images.map((img) => (
            <div key={img.id} className="relative group rounded-xl overflow-hidden bg-gray-100 aspect-square">
              <img
                src={img.image_url}
                alt={img.caption ?? 'Gallery photo'}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setPendingDelete({ id: img.id, url: img.image_url })}
                disabled={deletingId === img.id}
                className="absolute top-1.5 right-1.5 w-7 h-7 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
              >
                {deletingId === img.id ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <X className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 py-12 flex flex-col items-center text-center">
          <ImageIcon className="w-10 h-10 text-gray-200 mb-3" />
          <p className="text-sm text-gray-400">No photos yet. Upload your first photos above.</p>
        </div>
      )}
      <ConfirmModal
        open={!!pendingDelete}
        message="Remove this photo? This cannot be undone."
        confirmLabel="Remove"
        onConfirm={doDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </div>
  );
}
