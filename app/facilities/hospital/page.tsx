import { seoMetadata } from '@/lib/seo-metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'Hospital',
  'On-campus hospital facility at JKKN for student and staff healthcare — part of JKKN multi-specialty teaching hospital.',
  '/facilities/hospital',
  { keywords: ['JKKN hospital', 'campus hospital', 'student healthcare'] }
);

export default function Hospital() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Facilities', href: '/facilities/hospital' },
          { name: 'Hospital', href: '/facilities/hospital' },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Hospital',
          name: 'JKKN Campus Hospital',
          description: 'JKKN multi-specialty teaching hospital with 500+ beds. Provides comprehensive medical services to students and staff with advanced medical technology, experienced medical staff, and affordable healthcare.',
          url: 'https://edu.jkkn.ac.in/facilities/hospital',
          numberOfBeds: 500,
          containedInPlace: {
            '@type': 'CollegeOrUniversity',
            name: 'JKKN College of Education',
            '@id': 'https://edu.jkkn.ac.in/#organization',
          },
        }}
      />
      <Header />

      {/* Hospital Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#1e7f4e' }}>
            HOSPITAL
          </h1>

          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6 max-w-6xl">
            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              Our hospital has a team of highly trained and experienced medical professionals who provide top-quality care to our patients, from routine checkups to complex surgeries.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              We stand out for our commitment to using the latest medical technology and equipment, as we believe it&apos;s crucial to offer the best care possible to our patients. That&apos;s why we invest in new equipment and staff training regularly.
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify mb-4" style={{ color: '#4a5568' }}>
              Our hospital facility is not only equipped with cutting-edge technology and staff expertise but also creates a warm and welcoming environment. We understand that receiving medical care can be stressful, so we aim to make our patients feel comfortable and relaxed during their stay.
            </p>

            {/* Bulleted List */}
            <ul className="space-y-3 ml-6">
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed font-semibold"
                style={{
                  color: '#4a5568',
                  listStyleType: 'square',
                  paddingLeft: '0.5rem'
                }}
              >
                Comprehensive Medical Services
              </li>
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed font-semibold"
                style={{
                  color: '#4a5568',
                  listStyleType: 'square',
                  paddingLeft: '0.5rem'
                }}
              >
                Advanced Medical Technology
              </li>
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed font-semibold"
                style={{
                  color: '#4a5568',
                  listStyleType: 'square',
                  paddingLeft: '0.5rem'
                }}
              >
                Comfortable Patient Rooms
              </li>
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed font-semibold"
                style={{
                  color: '#4a5568',
                  listStyleType: 'square',
                  paddingLeft: '0.5rem'
                }}
              >
                Experienced Medical Staff
              </li>
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed font-semibold"
                style={{
                  color: '#4a5568',
                  listStyleType: 'square',
                  paddingLeft: '0.5rem'
                }}
              >
                Affordable Healthcare
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
