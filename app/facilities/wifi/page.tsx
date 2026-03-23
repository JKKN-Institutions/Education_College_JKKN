import { seoMetadata } from '@/lib/seo-metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'Wi-Fi Campus',
  'Wi-Fi enabled campus at JKKN College of Education — high-speed internet access for students and faculty.',
  '/facilities/wifi',
  { keywords: ['JKKN wifi', 'wifi campus', 'internet facility college'] }
);

export default function WiFi() {
  const wifiFeatures = [
    'Stay connected on the go',
    'Save your data',
    'Faster internet speeds',
    'Convenient access',
    'Secure connection'
  ];

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Wi-Fi Campus', href: '/facilities/wifi' },
      ]} />
      <Header />

      {/* WiFi Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#1e7f4e' }}>
            WI-FI
          </h1>

          {/* WiFi Icon */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <Image
              src="/images/wifi.png"
              alt="Wi-Fi Icon"
              width={300}
              height={300}
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              At JKKN Educational Institutions, we believe that internet access is crucial for students to succeed in their academic pursuits. That's why we offer free, high-speed WiFi across all our campuses. Whether you're in a lecture hall, library, or enjoying the outdoors, you can easily connect your laptop, tablet, or smartphone to our secure network and stay connected all day long.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              Our commitment to providing reliable and fast internet ensures that students can access course materials, conduct research, and collaborate with their peers seamlessly. With our free WiFi facilities, you can study for exams, attend lectures, or even catch up on social media, all while staying connected.
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify mb-4" style={{ color: '#4a5568' }}>
              At JKKN Educational Institutions, we strive to provide an exceptional student experience, and our free WiFi is just one of the ways we achieve that.
            </p>

            {/* Bulleted List */}
            <ul className="space-y-3 ml-6">
              {wifiFeatures.map((feature, index) => (
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
