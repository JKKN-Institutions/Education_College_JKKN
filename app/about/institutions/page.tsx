import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'JKKN Institutions',
  'Explore all JKKN Educational Institutions — 10 institutions including colleges and schools on NH-544, Kumarapalayam, Namakkal.',
  '/about/institutions',
  { keywords: ['JKKN institutions', 'JKKN colleges', 'JKKN campus Kumarapalayam'] }
);

export default function OurInstitutions() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'JKKN Institutions', href: '/about/institutions' },
      ]} />
      <Header />

      {/* Hero Section with Title */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8" style={{ color: '#1e7f4e' }}>
            OUR INSTITUTIONS
          </h1>

          {/* Hero Image */}
          <div className="w-full mb-6 sm:mb-8 lg:mb-12">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/images/Our_Institution.webp"
                alt="JKKN Institutions Gate"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              Our core objective of teaching is to develop the students to excel in technical knowledge and make them acquire the skills required to meet the growing challenges in today's competitive world. At JKKN Institutions, we implement the best teaching practices to provide a solid foundation for education.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              Our Institutions have well-constructed academic blocks, lab facilities and operation centers, knowledge resource libraries, sports infrastructure, separate accommodations for boys and girls, a general and dental hospital for healthcare services and practices, and an impulsively functioning Placement cell that assures a sure-shot placement for all the students.
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              We have contemporary facilities for the student's and faculty's progressive enhancements. We have tie-ups with leading manufacturing and commercial enterprises to facilitate industrial and corporate exposure for the students and faculty.
            </p>

            {/* Paragraph 4 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              We are located at Komarapalayam, 15 km from Erode City, Tamil Nadu, India. The nearest railway station is Erode railway station, and the nearest airport is Salem/Coimbatore.
            </p>

            {/* Paragraph 5 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify mb-8 sm:mb-12 lg:mb-16" style={{ color: '#4a5568' }}>
              The JKKN Institutions house in its ambit some of the leading institutes of higher learning and have a culture of commitment, transparency, and teamwork. The hallmark of the continuing success is the reputation that the institution has of being a knowledge center that generates and supports exceptional levels of opportunity and initiative.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
