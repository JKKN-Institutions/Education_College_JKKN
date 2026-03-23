import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { JsonLd } from '@/components/JsonLd';

export const metadata = seoMetadata(
  'Management',
  'Management committee of JKKN College of Education — leadership guiding NCTE-approved teacher education in Namakkal, Tamil Nadu.',
  '/about/management',
  { keywords: ['JKKN management', 'college management committee', 'JKKN leadership'] }
);

export default function OurManagement() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Management', href: '/about/management' },
      ]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          'name': 'JKKN College of Education Management',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'item': {
                '@type': 'Person',
                'name': 'Smt. N. Sendamaraai',
                'jobTitle': 'Chairperson',
                'worksFor': {
                  '@type': 'EducationalOrganization',
                  'name': 'JKKN Institutions',
                  'url': 'https://jkkn.ac.in'
                }
              }
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'item': {
                '@type': 'Person',
                'name': 'Shri. S. Ommsharravana',
                'jobTitle': 'Director',
                'worksFor': {
                  '@type': 'EducationalOrganization',
                  'name': 'JKKN Institutions',
                  'url': 'https://jkkn.ac.in'
                }
              }
            }
          ]
        }}
      />
      <Header />

      {/* Our Management Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16" style={{ color: '#1e7f4e' }}>
            OUR MANAGEMENT
          </h1>

          {/* Management Team - Two Frames */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
            {/* Chairperson */}
            <div className="flex flex-col items-center">
              {/* Photo */}
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] mb-8">
                <Image
                  src="/images/Our_Management-1.webp"
                  alt="Chairperson SMT.N.SENDAMARAAI"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Name and Title */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4" style={{ color: '#000' }}>
                SMT.N.SENDAMARAAI
              </h2>
              <h3 className="text-sm sm:text-base lg:text-lg md:text-xl font-bold text-center mb-6" style={{ color: '#1e7f4e' }}>
                CHAIRPERSON - JKKN INSTITUTIONS
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify" style={{ color: '#5a6c7d' }}>
                Happy to hold the monumental responsibility as Chairperson of "JKKN Institutions." I am proud to say that we have made exceptional progress and have achieved the status of one of the most prestigious educational institutions. "Leadership and Excellence" is our motto, a fact that is evident from our state-of-the-art infrastructure and the quality of each individual.
              </p>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify mt-4" style={{ color: '#5a6c7d' }}>
                The institution provides the necessary infrastructure and a team of qualified and motivated faculty, all under one roof for the student community. Besides providing world-class engineering education, we also inculcate a progressive attitude blended with innovation towards the betterment of society. The excellent symbiosis of academic excellence and industrial relevance is the unique feature of JKKN Institutions. Our hearty welcome to our lush green campus!
              </p>
            </div>

            {/* Director */}
            <div className="flex flex-col items-center">
              {/* Photo */}
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] mb-8">
                <Image
                  src="/images/Our_Management-2.webp"
                  alt="Director SHRI.S.OMMSHARRAVANA"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Name and Title */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4" style={{ color: '#000' }}>
                SHRI.S.OMMSHARRAVANA
              </h2>
              <h3 className="text-sm sm:text-base lg:text-lg md:text-xl font-bold text-center mb-6" style={{ color: '#1e7f4e' }}>
                DIRECTOR - JKKN INSTITUTIONS
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify" style={{ color: '#5a6c7d' }}>
                I heartily congratulate the college for taking an ardent and intense interest in molding passionate future educators. We are committed to the mission of implementing new education methodologies to enable quality learning that encourages independent thinking and helps students develop a wholesome personality so that they can contribute their best to society and the country. Together, we work towards JKKN as the best temple of learning, guiding and encouraging students in their own way. JKKN aims to produce top-notch educators with their colorful flag flying high in the air of success in this pulsating world of competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
