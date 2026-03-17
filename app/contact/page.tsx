import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'Contact Us',
  'Contact JKKN College of Education — phone, email, address, and campus map. Located on NH-544, Kumarapalayam, Namakkal, Tamil Nadu.',
  '/contact',
  { keywords: ['JKKN contact', 'JKKN College of Education address', 'JKKN phone number'] }
);

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Contact Us', href: '/contact' },
      ]} />
      <Header />

      {/* Contact Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Us */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#1e7f4e' }}>
                CONTACT US
              </h1>

              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8" style={{ color: '#4a5568' }}>
                Welcome to our Website. We are glad to have you around.
              </p>

              {/* Contact Cards */}
              <div className="space-y-3 sm:space-y-4">
                {/* Phone Card */}
                <div className="flex items-start p-4 sm:p-6 rounded-lg" style={{ backgroundColor: '#d4edda' }}>
                  <div className="mr-3 sm:mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      style={{ color: '#1e7f4e' }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{ color: '#2d3748' }}>
                      Phone
                    </h3>
                    <a href="tel:+919345855001" className="text-sm sm:text-base md:text-lg hover:underline" style={{ color: '#4a5568' }}>
                      +(91) 93458 55001
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start p-4 sm:p-6 rounded-lg" style={{ backgroundColor: '#d4edda' }}>
                  <div className="mr-3 sm:mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      style={{ color: '#1e7f4e' }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{ color: '#2d3748' }}>
                      Email
                    </h3>
                    <a href="mailto:education@jkkn.ac.in" className="text-sm sm:text-base md:text-lg hover:underline break-all" style={{ color: '#1e7f4e' }}>
                      education@jkkn.ac.in
                    </a>
                  </div>
                </div>

                {/* Address Card */}
                <div className="flex items-start p-4 sm:p-6 rounded-lg" style={{ backgroundColor: '#d4edda' }}>
                  <div className="mr-3 sm:mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      style={{ color: '#1e7f4e' }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{ color: '#2d3748' }}>
                      Address
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
                      JKKN College of Education, NH-544 (Salem to Coimbatore Highway), Kumarapalayam, Namakkal (DT), Tamil Nadu. 638183.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Online Admission Form */}
            <div className="lg:pl-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#1e7f4e' }}>
                ONLINE ADMISSION FORM
              </h2>

              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8" style={{ color: '#4a5568' }}>
                Required fields are marked.
              </p>

              <Link
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-white font-semibold rounded-md transition-colors duration-200 text-sm sm:text-base hover:opacity-90 active:opacity-80"
                style={{ backgroundColor: '#1e7f4e' }}
              >
                Click Here
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
