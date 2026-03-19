'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export default function Hostel() {
  const [activeTab, setActiveTab] = useState<'boys' | 'girls'>('boys');

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
    'Our hostel is an ideal choice for students seeking a supportive and conducive living environment during their academic journey.'
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
    'Join our growing community of female students and experience the best hostel facilities.'
  ];

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Facilities', href: '/facilities/hostel' },
          { name: 'Hostel', href: '/facilities/hostel' },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LodgingBusiness',
          name: 'JKKN College of Education Hostel',
          description: 'Separate boys and girls hostels at JKKN College of Education within campus premises. Features spacious rooms, 24x7 electricity and water, high-speed internet, CCTV security, gymnasium, and dedicated staff.',
          url: 'https://edu.jkkn.ac.in/facilities/hostel',
          containedInPlace: {
            '@type': 'CollegeOrUniversity',
            name: 'JKKN College of Education',
            '@id': 'https://edu.jkkn.ac.in/#organization',
          },
        }}
      />
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
              {/* Left Side - Tabs */}
              <div className="lg:col-span-3">
                <div className="flex flex-row lg:flex-col gap-4">
                  <button
                    onClick={() => setActiveTab('boys')}
                    className={`px-6 sm:px-8 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base lg:text-lg border-2 border-black transition-colors ${
                      activeTab === 'boys' ? 'bg-white' : 'bg-transparent'
                    }`}
                    style={{ color: '#000000' }}
                  >
                    Boys Hostel
                  </button>
                  <button
                    onClick={() => setActiveTab('girls')}
                    className={`px-6 sm:px-8 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base lg:text-lg border-2 border-black transition-colors ${
                      activeTab === 'girls' ? 'bg-white' : 'bg-transparent'
                    }`}
                    style={{ color: '#000000' }}
                  >
                    Girls Hostel
                  </button>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:col-span-9">
                {/* Hostel Image */}
                <div className="mb-6 sm:mb-8 lg:mb-12">
                  <div className="relative w-full max-w-[350px] h-48 sm:h-56 lg:h-64">
                    <Image
                      src={activeTab === 'boys' ? '/images/boys-hostel.jpg' : '/images/girls-hostel.jpg'}
                      alt={activeTab === 'boys' ? 'Boys Hostel Building' : 'Girls Hostel Building'}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4">
                  {(activeTab === 'boys' ? boysHostelFeatures : girlsHostelFeatures).map((feature, index) => (
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
