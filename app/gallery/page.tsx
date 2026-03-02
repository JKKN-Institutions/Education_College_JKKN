import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export const revalidate = 300;

export default async function Gallery() {
  const supabase = await createClient();

  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const { data: albums } = await supabase
    .from('gallery_albums')
    .select('id, name, cover_image_url')
    .eq('college_id', collegeId)
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            style={{ color: '#1e7f4e' }}
          >
            GALLERY
          </h1>

          {albums && albums.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {albums.map((album) => (
                <Link key={album.id} href={`/gallery/${album.id}`}>
                  <div className="cursor-pointer group">
                    <h2
                      className="text-lg sm:text-xl font-bold mb-3"
                      style={{ color: '#1e7f4e' }}
                    >
                      {album.name}
                    </h2>
                    <div className="overflow-hidden rounded-xl aspect-[4/3] bg-gray-100">
                      {album.cover_image_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={album.cover_image_url}
                          alt={album.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-sm">
                          No cover image
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No albums yet.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
