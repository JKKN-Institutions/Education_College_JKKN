import { seoMetadata } from '@/lib/seo-metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'Auditorium',
  'Modern auditorium at JKKN College of Education for seminars, cultural events, and academic functions in Kumarapalayam.',
  '/facilities/auditorium',
  { keywords: ['JKKN auditorium', 'college auditorium', 'event hall'] }
);

export default function Auditorium() {
  const auditoriumFeatures = [
    'Spacious seating',
    'High-tech sound and lighting systems',
    'Stage equipment and props',
    'Excellent acoustics',
    'Professional staff'
  ];

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Facilities', href: '/facilities/auditorium' },
          { name: 'Auditorium', href: '/facilities/auditorium' },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'PerformingArtsTheater',
          name: 'JKKN College Auditorium',
          description: 'Spacious auditorium at JKKN College of Education with impeccable acoustics, latest audio-visual technology, high-tech sound and lighting systems. Ideal for concerts, lectures, graduation ceremonies, and theatrical performances.',
          url: 'https://edu.jkkn.ac.in/facilities/auditorium',
          containedInPlace: {
            '@type': 'CollegeOrUniversity',
            name: 'JKKN College of Education',
            '@id': 'https://edu.jkkn.ac.in/#organization',
          },
        }}
      />
      <Header />

      {/* Auditorium Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#1e7f4e' }}>
            AUDITORIUM
          </h1>

          {/* Auditorium Images */}
          <div className="flex justify-center mb-6 sm:mb-8 lg:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full md:w-1/2">
              <div className="relative w-full h-48 sm:h-56 lg:h-64">
                <Image
                  src="/images/auditorium-1.jpg"
                  alt="Auditorium view 1"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-full h-48 sm:h-56 lg:h-64">
                <Image
                  src="/images/auditorium-2.jpg"
                  alt="Auditorium view 2"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              Looking for an impressive and versatile venue for your event? The JKKN auditorium is a spacious facility with impeccable acoustics and the latest audio-visual technology, ideal for hosting concerts, lectures, and theatrical performances.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              Our well-designed seating arrangement provides an uninterrupted view of the stage for large numbers of guests, while the warm and welcoming atmosphere of our elegantly decorated space is enhanced by carefully selected lighting.
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify mb-4" style={{ color: '#4a5568' }}>
              The auditorium is also an essential resource for the institution, as it can be used for various purposes such as graduation ceremonies, workshops, and seminars. Rest assured that our professional staff maintains the auditorium in top condition at all times. Book the JKKN auditorium now and make your event unforgettable!
            </p>

            {/* Bulleted List */}
            <ul className="space-y-3 ml-6">
              {auditoriumFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm sm:text-base lg:text-lg leading-relaxed"
                  style={{
                    color: '#4a5568',
                    listStyleType: 'square',
                    paddingLeft: '0.5rem'
                  }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
