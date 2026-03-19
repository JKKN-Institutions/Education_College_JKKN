import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@/lib/supabase/server';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { GalleryCarousel } from './GalleryCarousel';

export const revalidate = 300;

export const metadata = seoMetadata(
  'Gallery',
  'Photo gallery of JKKN College of Education — campus life, events, facilities, and student activities in Kumarapalayam.',
  '/gallery',
  { keywords: ['JKKN gallery', 'college photos', 'campus gallery'] }
);

export default async function Gallery() {
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: albums } = await supabase
    .from('gallery_albums')
    .select('id, name')
    .eq('college_id', collegeId)
    .order('created_at', { ascending: false });

  const albumIds = (albums ?? []).map((a) => a.id);

  const { data: allImages } = albumIds.length > 0
    ? await supabase
        .from('gallery_images')
        .select('id, album_id, image_url, caption')
        .in('album_id', albumIds)
        .order('display_order', { ascending: true })
    : { data: [] };

  const albumsWithImages = (albums ?? []).map((album) => ({
    ...album,
    images: (allImages ?? []).filter((img) => img.album_id === album.id),
  }));

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Gallery', href: '/gallery' },
      ]} />
      <Header />

      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {albums && albums.length > 0 ? (
            <GalleryCarousel albums={albumsWithImages} />
          ) : (
            <p className="text-gray-500">No albums yet.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
