import { seoMetadata } from '@/lib/seo-metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'Seminar Hall',
  'Well-equipped seminar halls at JKKN College of Education for academic presentations and workshops.',
  '/facilities/seminar-hall',
  { keywords: ['JKKN seminar hall', 'college seminar hall', 'academic workshops'] }
);

export default function SeminarHall() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Seminar Hall', href: '/facilities/seminar-hall' },
      ]} />
      <Header />

      {/* Seminar Hall Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#1e7f4e' }}>
            SEMINAR HALL
          </h1>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 sm:mb-8 lg:mb-12">
            {['/images/Seminar-hall-1.avif', '/images/Seminar-hall-2.avif', '/images/Seminar-hall-3.avif'].map((src, i) => (
              <div key={i} className="relative w-full h-48 sm:h-56 lg:h-64">
                <Image
                  src={src}
                  alt={`Seminar hall ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Bulleted List */}
            <ul className="space-y-4 ml-6">
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                Our seminar hall is spacious and comfortable, perfect for hosting events and seminars of all kinds.
              </li>
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                Equipped with modern amenities, such as a fully air-conditioned environment, stage, projector, sound system, and lighting equipment, our hall ensures that every attendee can learn in comfort and convenience.
              </li>
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                With high-speed Wi-Fi and ample parking facilities, our venue is designed to make event planning a breeze.
              </li>
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                Our team of skilled technicians and support staff are available to help with event setup and ensure that everything runs smoothly and efficiently.
              </li>
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                Whether you&apos;re hosting a large conference or a small workshop, our seminar hall is the perfect space for your event. Contact us today to learn more about our facilities and how we can help make your event a success!
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
