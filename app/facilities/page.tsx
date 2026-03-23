import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { JsonLd } from '@/components/JsonLd';

export const metadata = seoMetadata(
  'Facilities',
  'Explore world-class facilities at JKKN College of Education — library, hostel, transport, auditorium, WiFi, hospital, and more in Namakkal.',
  '/facilities',
  { keywords: ['JKKN facilities', 'college facilities Namakkal', 'B.Ed college amenities'] }
);

const facilities = [
  { name: 'Library', href: '/facilities/library', description: 'Central library with 25,000+ volumes, INFLIBNET access, and digital resources.' },
  { name: 'Hostel', href: '/facilities/hostel', description: 'Separate boys and girls hostels with modern amenities and 24/7 security.' },
  { name: 'Transport', href: '/facilities/transport', description: 'College bus service covering major routes across Namakkal district.' },
  { name: 'Auditorium', href: '/facilities/auditorium', description: 'Fully equipped auditorium for seminars, cultural events, and convocations.' },
  { name: 'Food Court', href: '/facilities/food-court', description: 'Hygienic canteen serving nutritious meals and snacks for students and staff.' },
  { name: 'Hospital', href: '/facilities/hospital', description: 'On-campus medical facility with qualified staff for student healthcare.' },
  { name: 'Class Room', href: '/facilities/class-room', description: 'Smart classrooms with modern teaching aids and comfortable seating.' },
  { name: 'Seminar Hall', href: '/facilities/seminar-hall', description: 'Dedicated seminar hall for workshops, guest lectures, and academic events.' },
  { name: 'WiFi', href: '/facilities/wifi', description: 'High-speed campus-wide WiFi connectivity for seamless learning.' },
  { name: 'Bank & Post Office', href: '/facilities/bank-post-office', description: 'On-campus banking and postal services for student convenience.' },
  { name: 'Ambulance Services', href: '/facilities/ambulance-services', description: '24/7 ambulance service for emergency medical response on campus.' },
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Facilities', href: '/facilities' },
      ]} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'JKKN College of Education Facilities',
        itemListElement: facilities.map((f, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: f.name,
          url: `https://edu.jkkn.ac.in${f.href}`,
        })),
      }} />
      <Header />

      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1e7f4e' }}>
            FACILITIES
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-12 max-w-3xl">
            JKKN College of Education provides comprehensive facilities to ensure a conducive learning environment for B.Ed students in Namakkal, Tamil Nadu.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {facilities.map((facility) => (
              <Link
                key={facility.href}
                href={facility.href}
                className="block p-6 bg-white border-2 border-gray-200 hover:border-[#006837] rounded-lg transition-colors group"
              >
                <h2 className="text-lg font-bold mb-2 group-hover:text-[#006837]" style={{ color: '#1e7f4e' }}>
                  {facility.name}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {facility.description}
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
