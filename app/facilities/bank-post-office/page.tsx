import { seoMetadata } from '@/lib/seo-metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'Bank & Post Office',
  'On-campus bank and post office at JKKN Educational Institutions for convenient student services.',
  '/facilities/bank-post-office',
  { keywords: ['campus bank', 'campus post office', 'JKKN facilities'] }
);

export default function BankPostOffice() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Bank & Post Office', href: '/facilities/bank-post-office' },
      ]} />
      <Header />

      {/* Bank & Post Office Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#1e7f4e' }}>
            BANK &amp; POST OFFICE
          </h1>

          {/* Two Images Grid */}
          <div className="flex justify-center mb-6 sm:mb-8 lg:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full md:w-1/2">
              {/* Image 1 - Post Office */}
              <div className="relative w-full h-48 sm:h-56 lg:h-64">
                <Image
                  src="/images/post-office-bank-1.jpg"
                  alt="Post Office"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Image 2 - Bank */}
              <div className="relative w-full h-48 sm:h-56 lg:h-64">
                <Image
                  src="/images/post-office-bank-2.jpg"
                  alt="Bank"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6 max-w-6xl">
            {/* Introductory Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              Looking for hassle-free banking and postal services? Look no further than the JKKN Educational Institutions, where we offer a range of convenient and reliable banking and postal services to our students and staff. Here are some of the key benefits you can enjoy:
            </p>

            {/* Banking Facilities Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#4a5568' }}>
                BANKING FACILITIES:
              </h2>
              <ul className="space-y-3 ml-6">
                <li
                  className="text-sm sm:text-base lg:text-lg leading-relaxed"
                  style={{
                    color: '#4a5568',
                    listStyleType: 'disc',
                    paddingLeft: '0.5rem'
                  }}
                >
                  Our campus features a fully-functional branch of a popular bank, providing students and staff with convenient access to a range of banking services.
                </li>
                <li
                  className="text-sm sm:text-base lg:text-lg leading-relaxed"
                  style={{
                    color: '#4a5568',
                    listStyleType: 'disc',
                    paddingLeft: '0.5rem'
                  }}
                >
                  These services include account opening, cash deposits and withdrawals, fund transfers, and more, making it easy to manage your finances without leaving campus.
                </li>
                <li
                  className="text-sm sm:text-base lg:text-lg leading-relaxed"
                  style={{
                    color: '#4a5568',
                    listStyleType: 'disc',
                    paddingLeft: '0.5rem'
                  }}
                >
                  JKKN students and staff can also take advantage of special offers and discounts available exclusively through our banking facility.
                </li>
                <li
                  className="text-sm sm:text-base lg:text-lg leading-relaxed"
                  style={{
                    color: '#4a5568',
                    listStyleType: 'disc',
                    paddingLeft: '0.5rem'
                  }}
                >
                  By using our on-campus banking service, you can save time and effort, allowing you to focus on your studies and work with peace of mind.
                </li>
              </ul>
            </div>

            {/* Postal Services Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#4a5568' }}>
                POSTAL SERVICES:
              </h2>
              <ul className="space-y-3 ml-6">
                <li
                  className="text-sm sm:text-base lg:text-lg leading-relaxed"
                  style={{
                    color: '#4a5568',
                    listStyleType: 'disc',
                    paddingLeft: '0.5rem'
                  }}
                >
                  Enjoy hassle-free mail and package delivery with our on-campus post office.
                </li>
                <li
                  className="text-sm sm:text-base lg:text-lg leading-relaxed"
                  style={{
                    color: '#4a5568',
                    listStyleType: 'disc',
                    paddingLeft: '0.5rem'
                  }}
                >
                  Our post office offers a wide range of services, including domestic and international mail, registered post, speed post, and parcel delivery.
                </li>
                <li
                  className="text-sm sm:text-base lg:text-lg leading-relaxed"
                  style={{
                    color: '#4a5568',
                    listStyleType: 'disc',
                    paddingLeft: '0.5rem'
                  }}
                >
                  Additional services like post office savings schemes, money orders, and postal life insurance are also available.
                </li>
                <li
                  className="text-sm sm:text-base lg:text-lg leading-relaxed"
                  style={{
                    color: '#4a5568',
                    listStyleType: 'disc',
                    paddingLeft: '0.5rem'
                  }}
                >
                  Stay connected with loved ones and business associates with our reliable postal services.
                </li>
                <li
                  className="text-sm sm:text-base lg:text-lg leading-relaxed"
                  style={{
                    color: '#4a5568',
                    listStyleType: 'disc',
                    paddingLeft: '0.5rem'
                  }}
                >
                  Conveniently manage important documents and packages without leaving campus.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
