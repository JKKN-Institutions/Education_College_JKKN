import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { JsonLd } from '@/components/JsonLd';

export const metadata = seoMetadata(
  'Trust',
  'Learn about the trust behind JKKN College of Education — J.K.K. Rangammal Charitable Trust, established 1969, Namakkal, Tamil Nadu.',
  '/about/trust',
  { keywords: ['JKKN trust', 'JKKN Educational Institutions', 'education trust Namakkal'] }
);

export default function OurTrust() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Trust', href: '/about/trust' },
      ]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Shri. J.K.K. Natarajah',
          jobTitle: 'Founder',
          worksFor: {
            '@type': 'Organization',
            name: 'J.K.K. Rangammal Charitable Trust',
            '@id': 'https://edu.jkkn.ac.in/#organization',
          },
          url: 'https://edu.jkkn.ac.in/about/trust',
        }}
      />
      <Header />

      {/* Our Trust Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12" style={{ color: '#1e7f4e' }}>
            OUR TRUST
          </h1>

          {/* Photo with Ornate Frame */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
              <Image
                src="/images/Our_Trust.webp"
                alt="Founder SHRI.J.K.K.NATARAJAH"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Founder Name */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-6 px-2" style={{ color: '#1e7f4e' }}>
            SHRI.J.K.K.NATARAJAH
          </h2>

          {/* Founder Title */}
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-8 sm:mb-12 px-2" style={{ color: '#1e7f4e' }}>
            FOUNDER OF J.K.K.RANGAMMAL CHARITABLE TRUST
          </h3>

          {/* Description Content */}
          <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify" style={{ color: '#5a6c7d' }}>
              In the sixties, female children in Kumarapalayam had to walk 2.5 km for their schooling to the nearby town of Bhavani. Some parents hesitated to send their children, and some ceased their children's schooling altogether. This resulted in them staying at home or working in handlooms and dyeing industries. Realizing the need for women's education, a visionary philanthropist of the zone, Shri J.K.K. Natarajah, initiated a girls' school in the town in 1965, four years before the inception of the trust.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-justify" style={{ color: '#5a6c7d' }}>
              The Trust, J.K.K. Rangammal Charitable Trust, was established (Reg No: 33) in 1969 with the motto of providing literacy and women's empowerment, resulting in an upgraded socio-economic status for the people. Walking in the footsteps of her father, Smt. N. Sendamaraai, Managing Trustee, expanded the service by providing multi-disciplinary education to both genders. Now, under the umbrella, there are ten institutions, including Dental, Pharmacy, Nursing, Education, Engineering, Arts, and Science colleges and a Government Aided Girls' School and Matriculation schools.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-justify" style={{ color: '#5a6c7d' }}>
              The Trust involves itself in many social service activities, inclusive of health-oriented services such as free dental camps, free treatments, and surgeries, blood donation camps, and motivational and entrepreneurship awareness camps. The trust also extends its charitable hands to provide medical support to the impoverished, help the destitute, provide natural calamity support, education, and scholarship support to poor students, and cultural support. A pioneering establishment of the zone since its inception, its grandeur service to society not only in terms of education but also community welfare activities is still immense.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
