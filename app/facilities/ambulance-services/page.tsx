import { seoMetadata } from '@/lib/seo-metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'Ambulance Services',
  'Round-the-clock ambulance service at JKKN campus for emergency medical support to students and staff.',
  '/facilities/ambulance-services',
  { keywords: ['JKKN ambulance', 'campus ambulance', 'emergency medical service'] }
);

export default function AmbulanceServices() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Ambulance Services', href: '/facilities/ambulance-services' },
      ]} />
      <Header />

      {/* Ambulance Services Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#1e7f4e' }}>
            AMBULANCE SERVICES
          </h1>

          {/* Ambulance Image */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="relative w-full max-w-xl mx-auto h-72 sm:h-96 lg:h-[420px]">
              <Image
                src="/images/Ambulance.jpg"
                alt="JKKN College Free Ambulance Service"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6 max-w-6xl">
            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              At JKKN Educational Institutions, we are dedicated to providing high-quality education to our students, staff, and the community. As part of this commitment, we are proud to offer our ambulance services. Our 24/7 ambulance services are available to respond to emergencies and provide medical transport for those in need.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              Our ambulances are staffed by certified emergency medical technicians who are highly trained to handle a wide range of medical emergencies. We provide the best possible care to our patients by equipping our ambulances with medical equipment and supplies. At JKKN Educational Institutions, we are committed to serving our community with reliable and efficient ambulance services.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
