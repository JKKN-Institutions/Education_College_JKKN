import { seoMetadata } from '@/lib/seo-metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'Library',
  'Central library at JKKN College of Education with 15,000+ books, journals, and digital resources for B.Ed students in Namakkal.',
  '/facilities/library',
  { keywords: ['JKKN library', 'college library Namakkal', 'B.Ed library facilities'] }
);

export default function Library() {
  const learningResources = [
    'OPAC (Online Public Access Catalogue) Searching Service.',
    'Circulation Section for issue and return of books.',
    'Entry Computer: Optical Character Recognition entry using ID card or Manual entry.',
    'Open Access system: Students and staff members have direct access to the book shelves.',
    'INFLIBNET, and NDL Online Database Services.',
    'Stack rooms and Back volume Section',
    'Periodical and Reference Sections',
    'News paper reading section.',
    'CCTV Security System.',
    'Reprographic Service Section',
    'Internet Browsing Facilities',
    'Technical Processing Section',
    'Newspaper Clipping Service.',
    'Current Awareness Service.'
  ];

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Library', href: '/facilities/library' },
      ]} />
      <Header />

      {/* Library Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#1e7f4e' }}>
            LIBRARY
          </h1>

          {/* Image */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="relative w-full max-w-[350px] h-48 sm:h-56 lg:h-64">
              <Image
                src="/images/library.png"
                alt="Student studying in library"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              Our library is a valuable resource center for both students and faculty members, equipped with the latest automation software, "Campus I Lib". The collection includes recent books, journals, and online resources in the fields of arts, science, and social sciences, among others. With 25,863 volumes and 17,386 titles, our library provides a vast array of materials to explore.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              Spanning a total area of 3,328 square feet, our library has a seating capacity for up to 150 readers. It houses over 25,771 books on various subjects, as well as 40 reputable national and international journals, magazines, newspapers, e-resources, and back volumes. Our library is a member of both INFLIBNET and the National Digital Library of India (NDL), and is fully computerized with barcode technology.
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              Our library is open from 9:00 AM to 4:45 PM on all working days. Staff members and students are provided with separate ID cards with barcodes for easy accessibility and book checkout procedures.
            </p>

            {/* Paragraph 4 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify mb-4" style={{ color: '#4a5568' }}>
              The following learning resources are extended to the learners.
            </p>

            {/* Bulleted List */}
            <ul className="space-y-3 ml-6">
              {learningResources.map((resource, index) => (
                <li
                  key={index}
                  className="text-sm sm:text-base lg:text-lg leading-relaxed"
                  style={{
                    color: '#4a5568',
                    listStyleType: 'square',
                    paddingLeft: '0.5rem'
                  }}
                >
                  {resource}
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
