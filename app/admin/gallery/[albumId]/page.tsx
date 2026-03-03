import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AlbumManager from './AlbumManager';

export default async function AlbumPage({ params }: { params: Promise<{ albumId: string }> }) {
  const { albumId } = await params;
  const supabase = await createClient();

  const { data: album } = await supabase
    .from('gallery_albums')
    .select('*')
    .eq('id', albumId)
    .single();

  if (!album) notFound();

  const { data: images } = await supabase
    .from('gallery_images')
    .select('*')
    .eq('album_id', albumId)
    .order('display_order', { ascending: true });

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl">
      <Link
        href="/admin/gallery"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Gallery
      </Link>

      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-gray-900">{album.name}</h1>
      </div>
      {album.description && (
        <p className="text-gray-500 text-sm mb-6">{album.description}</p>
      )}

      <AlbumManager albumId={albumId} initialImages={images ?? []} />
    </div>
  );
}
