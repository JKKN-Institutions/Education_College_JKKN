import { seoMetadata } from '@/lib/seo-metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'Classrooms',
  'Smart classrooms with ICT-enabled teaching facilities at JKKN College of Education, Kumarapalayam.',
  '/facilities/class-room',
  { keywords: ['JKKN classrooms', 'smart classroom', 'ICT enabled classroom'] }
);

export default function ClassRoom() {
  const classroomFeatures = [
    'At JKKN Educational Institutions, we prioritize exceptional classroom facilities to create a great learning environment.',
    'Our classrooms are designed to be comfortable and engaging spaces that allow students to fully immerse themselves in their studies.',
    'We provide the latest technology, including high-speed internet, multimedia projectors, and interactive whiteboards, to give students access to a wealth of information at their fingertips.',
    'Comfortable seating arrangements ensure that students can focus on their studies without discomfort or distractions.',
    'Our classrooms are not only functional but also aesthetically pleasing, with vibrant colors and inspirational posters that create a welcoming atmosphere.',
    'We believe that a visually appealing environment can inspire creativity and encourage a positive attitude towards learning.'
  ];

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Classrooms', href: '/facilities/class-room' },
      ]} />
      <Header />

      {/* Class Room Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#1e7f4e' }}>
            Digital class room
          </h1>

          {/* Classroom Image */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="relative w-full max-w-[350px] h-48 sm:h-56 lg:h-64">
              <Image
                src="/images/Class-room.jpg"
                alt="Digital classroom with students"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Features List */}
          <ul className="space-y-4">
            {classroomFeatures.map((feature, index) => (
              <li
                key={index}
                className="text-sm sm:text-base lg:text-lg leading-relaxed"
                style={{
                  color: '#4a5568',
                  listStyleType: 'square',
                  paddingLeft: '0.5rem',
                  marginLeft: '1.5rem'
                }}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
