import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import Link from 'next/link';
import { Plus, ImageIcon, Pencil } from 'lucide-react';
import DeleteAlbumButton from './DeleteAlbumButton';

export default async function AdminGallery() {
  const supabase = await createClient();

  const collegeId = await getAdminCollegeId();
  const { data: albums } = await supabase
    .from('gallery_albums')
    .select('id, name, description, cover_image_url, created_at')
    .eq('college_id', collegeId)
    .order('created_at', { ascending: false });

  // Get photo counts for each album
  const albumsWithCount = await Promise.all(
    (albums ?? []).map(async (album) => {
      const { count } = await supabase
        .from('gallery_images')
        .select('*', { count: 'exact', head: true })
        .eq('album_id', album.id);
      return { ...album, photoCount: count ?? 0 };
    })
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gallery</h1>
          <p className="text-gray-500 text-sm mt-0.5">{albums?.length ?? 0} albums</p>
        </div>
        <Link
          href="/admin/gallery/new"
          className="flex items-center gap-2 bg-[#1e7f4e] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#166040] transition"
        >
          <Plus className="w-4 h-4" />
          New Album
        </Link>
      </div>

      {/* Albums Grid */}
      {albumsWithCount.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {albumsWithCount.map((album) => (
            <div
              key={album.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              {/* Cover */}
              <div className="relative h-40 bg-green-50">
                {album.cover_image_url ? (
                  <img
                    src={album.cover_image_url}
                    alt={album.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-10 h-10 text-[#1e7f4e]/30" />
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  {album.photoCount} photos
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 truncate">{album.name}</h3>
                {album.description && (
                  <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{album.description}</p>
                )}

                <div className="flex items-center gap-2 mt-3">
                  <Link
                    href={`/admin/gallery/${album.id}`}
                    className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium text-[#1e7f4e] hover:text-[#166040] bg-green-50 hover:bg-green-100 px-3 py-2 rounded-lg transition"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                    Manage Photos
                  </Link>
                  <DeleteAlbumButton id={album.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-4">
            <ImageIcon className="w-7 h-7 text-[#1e7f4e]" />
          </div>
          <p className="font-semibold text-gray-700 mb-1">No albums yet</p>
          <p className="text-sm text-gray-400 mb-5">Create an album and upload your photos.</p>
          <Link
            href="/admin/gallery/new"
            className="flex items-center gap-2 bg-[#1e7f4e] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#166040] transition"
          >
            <Plus className="w-4 h-4" />
            New Album
          </Link>
        </div>
      )}
    </div>
  );
}
