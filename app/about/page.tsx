import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'About Us',
  'Learn about JKKN College of Education — our vision, mission, trust, management, and NCTE-approved B.Ed programmes in Namakkal, Tamil Nadu.',
  '/about',
  { keywords: ['about JKKN College of Education', 'JKKN trust', 'college history Namakkal'] }
);

const aboutLinks = [
  { name: 'Our Vision & Mission', href: '/about/vision-mission', description: 'Our guiding principles and educational philosophy.' },
  { name: 'Our Trust', href: '/about/trust', description: 'J.K.K. Rangammal Charitable Trust — over 70 years of educational service.' },
  { name: 'Our Management', href: '/about/management', description: 'Leadership committee guiding JKKN College of Education.' },
  { name: 'Our Institutions', href: '/about/institutions', description: 'The JKKN group of institutions under one umbrella.' },
  { name: "Principal's Message", href: '/about/principal-message', description: 'A message from our Principal on excellence in teacher education.' },
  { name: 'NCTE Approval', href: '/about/ncte-approval', description: 'Official NCTE recognition and affiliation details.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
      ]} />
      <Header />

      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1e7f4e' }}>
            ABOUT US
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-12 max-w-3xl">
            JKKN College of Education is an NCTE-approved, TNTEU-affiliated B.Ed institution committed to producing quality teachers in Namakkal, Tamil Nadu.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {aboutLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block p-6 bg-white border-2 border-gray-200 hover:border-[#006837] rounded-lg transition-colors group"
              >
                <h2 className="text-lg font-bold mb-2 group-hover:text-[#006837]" style={{ color: '#1e7f4e' }}>
                  {item.name}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
