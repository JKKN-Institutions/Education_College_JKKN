import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import HostelTabs from './HostelTabs';

const boysHostelFeatures = [
  'Our hostel is situated within the campus premises, offering easy access to classes and a hassle-free commute for students.',
  'We offer well-maintained single and shared rooms that are spacious and well-ventilated.',
  'Our hostel is equipped with all the necessary amenities to cater to the needs of our residents.',
  'At JKKN, we understand the importance of academics, and hence provide a peaceful and quiet environment that is conducive to studying.',
  'Our hostel has high-speed internet connectivity, allowing students to access online resources and complete academic assignments with ease.',
  'The Boys Hostel at JKKN Educational Institutions is a community where students can make lifelong friendships and memories.',
  'The hostel\'s dedicated staff is always available to assist residents with any issues they may face during their stay.',
  'Our Boys Hostel offers a comfortable and safe living experience for students.',
  'We provide state-of-the-art facilities and amenities to ensure a memorable stay.',
  'Our hostel is an ideal choice for students seeking a supportive and conducive living environment during their academic journey.',
];

const girlsHostelFeatures = [
  'Our girls\' hostel is designed to provide modern facilities that ensure a comfortable and enjoyable stay for our female students.',
  'The hostel offers spacious and well-ventilated rooms equipped with comfortable beds, study tables, and ample storage space.',
  'Each room is designed for privacy and equipped with its own bathroom.',
  'The hostel has 24×7 electricity and water supply to ensure that our students are never left in the dark or without water.',
  'Safety is our top priority, and our hostel has round-the-clock security, CCTV surveillance, and access control systems to ensure the safety and security of our female students.',
  'We have a strict no-visitor policy, and all visitors are required to provide valid identification before entering the premises.',
  'JKKN Educational Institutions\' girls hostel offers a comfortable, safe, and enjoyable stay for students.',
  'The hostel provides ample opportunities for students to stay active and healthy, with a dedicated gymnasium, yoga room, and sports complex available.',
  'We encourage students to engage in physical activity for a balanced lifestyle.',
  'Join our growing community of female students and experience the best hostel facilities.',
];

export default function Hostel() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Hostel', href: '/facilities/hostel' },
      ]} />
      <Header />

      {/* Hostel Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#1e7f4e' }}>
            HOSTEL
          </h1>

          {/* Hostel Content Box */}
          <div className="border-2 border-black p-4 sm:p-6 lg:p-8 bg-white">
            <HostelTabs boysFeatures={boysHostelFeatures} girlsFeatures={girlsHostelFeatures} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
