import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { siteConfig } from '@/lib/site-config';

export const revalidate = 60;

export const metadata = seoMetadata(
  'Blog',
  'Latest articles, insights, and news from JKKN College of Education — teacher education, B.Ed tips, and campus updates.',
  '/blog',
  { keywords: ['JKKN blog', 'education blog', 'B.Ed articles'] }
);

export default async function BlogPage() {
  // Fetch admin-created posts from Supabase
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const { data: campusPosts } = await supabase
    .from('blogs')
    .select('id, title, slug, excerpt, author_name, category, cover_image_url, published_at, created_at, read_time')
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .limit(9);

  const hasCampusPosts = campusPosts && campusPosts.length > 0;

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
      ]} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
        <p className="text-[#FFD700] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
          {siteConfig.name.toUpperCase()}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Our Blog
        </h1>
        <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto">
          Latest articles, insights and updates on teacher education, campus life, and careers.
        </p>
      </section>

      {/* ── Coming Soon — shown when no posts exist ── */}
      {!hasCampusPosts && (
        <section className="bg-[#FBFBEE] px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <Clock className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-[#002309] mb-2">Coming Soon</h2>
            <p className="text-gray-500 text-sm">
              We&apos;re working on our first articles. Check back soon!
            </p>
          </div>
        </section>
      )}

      {/* ── Campus News (Admin Posts) Section — shown only when posts exist ── */}
      {hasCampusPosts && (
        <section className="bg-[#FBFBEE] border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {campusPosts.map((post) => {
                const cat = post.category || 'General';
                const firstLetter = post.title?.[0]?.toUpperCase() ?? 'B';
                const authorInitials = (post.author_name ?? 'JE').split(' ').map((w: string) => w[0]).join('').slice(0, 2).toUpperCase();
                const authorShort = post.author_name
                  ? post.author_name.length > 10
                    ? post.author_name.slice(0, 9) + '...'
                    : post.author_name
                  : 'JKKN Team';
                const readMins = post.read_time
                  ? post.read_time.replace(/[^0-9]/g, '') || '5'
                  : '5';

                return (
                  <a
                    key={post.id}
                    href={`/blog/campus/${post.slug}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
                  >
                    {/* Cover image / placeholder */}
                    <div className="relative" style={{ height: '13rem' }}>
                      {post.cover_image_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.cover_image_url}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#e8f0ec] flex items-center justify-center">
                          <span
                            className="font-black select-none"
                            style={{ fontSize: '7rem', color: '#c5d9cc', lineHeight: 1 }}
                          >
                            {firstLetter}
                          </span>
                        </div>
                      )}
                      {/* Category badge */}
                      <span className="absolute top-3 left-3 bg-[#3B82F6] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {cat}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold text-gray-900 text-[0.95rem] leading-snug mb-2 line-clamp-3">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                          {post.excerpt}
                        </p>
                      )}

                      {/* Footer */}
                      <div className="flex items-center gap-3 mt-auto flex-wrap">
                        {/* Author */}
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <div className="w-7 h-7 rounded-full bg-[#d1e8da] flex items-center justify-center flex-shrink-0">
                            <span className="text-[10px] font-bold text-[#006837]">{authorInitials}</span>
                          </div>
                          <span className="text-xs text-gray-600">{authorShort}</span>
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-1 text-gray-500 flex-shrink-0">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="text-xs">{formatDate(post.published_at ?? post.created_at)}</span>
                        </div>

                        {/* Read time */}
                        <div className="flex items-center gap-1 text-gray-500 flex-shrink-0">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-xs">{readMins} min</span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
