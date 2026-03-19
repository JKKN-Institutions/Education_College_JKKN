'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type GalleryImage = {
  id: string;
  image_url: string;
  caption: string | null;
};

type Album = {
  id: string;
  name: string;
  images: GalleryImage[];
};

function Dots({
  total,
  current,
  onDotClick,
}: {
  total: number;
  current: number;
  onDotClick: (i: number) => void;
}) {
  if (total <= 1) return null;
  return (
    <div className="flex justify-center gap-2 py-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
            i === current ? 'bg-[#006837]' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

function AlbumCarousel({ album }: { album: Album }) {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(album.images.length / perPage);
  const slice = album.images.slice(page * perPage, (page + 1) * perPage);

  if (album.images.length === 0) return null;

  return (
    <div className="mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#002309] mb-2">{album.name}</h2>

      <div className="flex items-center gap-3 sm:gap-5 my-4">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 disabled:opacity-30 flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <div className="flex-1 grid grid-cols-3 gap-3 sm:gap-5">
          {slice.map((img) => (
            <div
              key={img.id}
              className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.image_url}
                alt={img.caption ?? album.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {slice.length < perPage &&
            Array.from({ length: perPage - slice.length }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-[4/3]" />
            ))}
        </div>

        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 disabled:opacity-30 flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <Dots total={totalPages} current={page} onDotClick={setPage} />
    </div>
  );
}

export function GalleryCarousel({ albums }: { albums: Album[] }) {
  const albumsWithImages = albums.filter((a) => a.images.length > 0);

  if (albumsWithImages.length === 0) {
    return <p className="text-gray-500">No photos yet.</p>;
  }

  return (
    <div>
      {albumsWithImages.map((album) => (
        <AlbumCarousel key={album.id} album={album} />
      ))}
    </div>
  );
}
