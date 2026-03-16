import { seoMetadata } from '@/lib/seo-metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = seoMetadata(
  'Transport',
  'College transport service covering Salem, Erode, Namakkal, and Tiruchengode routes for JKKN College of Education students.',
  '/facilities/transport',
  { keywords: ['JKKN transport', 'college bus service', 'college transport Namakkal'] }
);

export default function Transport() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Transport Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#1e7f4e' }}>
            TRANSPORT
          </h1>

          {/* Transport Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
            <div className="relative w-full h-48 sm:h-56 lg:h-64">
              <Image
                src="/images/transport-1.webp"
                alt="College buses parked"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative w-full h-48 sm:h-56 lg:h-64">
              <Image
                src="/images/transport-2.webp"
                alt="College transport fleet"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative w-full h-48 sm:h-56 lg:h-64">
              <Image
                src="/images/transport-3.webp"
                alt="Bus with staff member"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Introduction */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              Transportation is a vital aspect of any educational institution, providing students and faculty members with a convenient means of reaching the campus and enhancing the overall learning experience. At JKKN Educational Institutions, we recognize the significance of transportation and have made significant efforts to improve our transport facilities. Here are some of the features of our transport service that make it stand out.
            </p>

            {/* Well-Maintained Buses */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#000000' }}>
                Well-Maintained Buses:
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
                Our transport service boasts a well-maintained fleet of buses that are serviced and cleaned regularly to ensure the safety and comfort of passengers. Equipped with modern amenities and comfortable seating, our buses provide a comfortable and convenient transportation experience.
              </p>
            </div>

            {/* Trained Drivers */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#000000' }}>
                Trained Drivers:
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
                Our drivers are highly trained and experienced, with an excellent understanding of local routes and traffic conditions. They undergo regular training to keep their skills up-to-date, ensuring that they provide a safe and efficient transportation service.
              </p>
            </div>

            {/* Affordable Fees */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#000000' }}>
                Affordable Fees:
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
                We offer an affordable fee structure that is calculated based on the distance of the student's residence from the campus. This ensures that our transportation costs are reasonable for everyone.
              </p>
            </div>

            {/* Safe and Secure */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#000000' }}>
                Safe and Secure:
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
                The safety and security of our passengers are paramount. We have equipped our buses with CCTV cameras and female attendants to ensure the safety of female passengers. We also adhere to strict rules and regulations to guarantee the safety of our passengers.
              </p>
            </div>

            {/* Timely Service */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#000000' }}>
                Timely Service:
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
                Our transport service operates on a strict schedule, ensuring that the buses arrive and depart from the campus on time. This allows our students and faculty members to plan their day without worrying about delays or missed buses.
              </p>
            </div>

            {/* Accessibility */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#000000' }}>
                Accessibility:
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
                Our transport service is accessible to all students, including those with physical disabilities. Our buses are equipped with wheelchair ramps and other accessibility features to make it easier for students with disabilities to use the service.
              </p>
            </div>

            {/* Conclusion */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              The transport facility at JKKN Educational Institutions is well-equipped to provide safe, reliable, and affordable transportation to all its students and faculty members. The institution has taken significant steps to ensure that the transport facility is accessible, secure, and comfortable for everyone.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
