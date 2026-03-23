import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ albumId: string }>;
}): Promise<Metadata> {
  const { albumId } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: album } = await supabase
    .from('gallery_albums')
    .select('name, description, cover_image_url')
    .eq('id', albumId)
    .eq('college_id', collegeId)
    .single();

  if (!album) return {};

  const description = album.description
    ? album.description.slice(0, 155)
    : `${album.name} — photo gallery from JKKN College of Education, Kumarapalayam.`;

  return {
    title: album.name,
    description,
    alternates: { canonical: `https://edu.jkkn.ac.in/gallery/${albumId}` },
    openGraph: {
      title: album.name,
      description,
      url: `https://edu.jkkn.ac.in/gallery/${albumId}`,
      ...(album.cover_image_url && {
        images: [{ url: album.cover_image_url, alt: album.name }],
      }),
    },
  };
}

export default async function AlbumPage({ params }: { params: Promise<{ albumId: string }> }) {
  const { albumId } = await params;
  const supabase = await createClient();

  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const { data: album } = await supabase
    .from('gallery_albums')
    .select('id, name')
    .eq('id', albumId)
    .eq('college_id', collegeId)
    .single();

  if (!album) notFound();

  const { data: images } = await supabase
    .from('gallery_images')
    .select('id, image_url, caption')
    .eq('album_id', albumId)
    .order('display_order', { ascending: true });

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Gallery', href: '/gallery' },
        { name: album.name, href: `/gallery/${albumId}` },
      ]} />
      <Header />

      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Back link */}
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-6"
          >
            ← Back to Gallery
          </Link>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
            style={{ color: '#1e7f4e' }}
          >
            {album.name}
          </h1>

          {images && images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="overflow-hidden rounded-xl aspect-[4/3] bg-gray-100"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.image_url}
                    alt={img.caption ?? album.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No photos in this album yet.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
