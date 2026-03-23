import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'Others',
  'Additional resources from JKKN College of Education — faculty details, alumni, careers, privacy policy, and more.',
  '/others',
  { keywords: ['JKKN faculty', 'JKKN alumni', 'JKKN careers'] }
);

const otherLinks = [
  { name: 'Faculty Details', href: '/others/faculty-details', description: 'Meet our qualified teaching faculty and staff members.' },
  { name: 'Alumni', href: '/others/alumni', description: 'Connect with the JKKN College of Education alumni network.' },
  { name: 'Careers', href: '/others/careers', description: 'Explore job openings and career opportunities at JKKN.' },
  { name: 'Privacy Policy', href: '/others/privacy-policy', description: 'Our privacy policy and data protection guidelines.' },
];

export default function OthersPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Others', href: '/others' },
      ]} />
      <Header />

      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1e7f4e' }}>
            OTHERS
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-12 max-w-3xl">
            Additional resources and information from JKKN College of Education.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherLinks.map((item) => (
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
