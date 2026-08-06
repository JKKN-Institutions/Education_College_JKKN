'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ChemistryDepartment() {
  const [activeSemester, setActiveSemester] = useState('semester1')

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%)] lg:bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%),url(/images/B.Ed-Chemistry-Hero-Banner-Image.png)] bg-cover bg-center">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* NCTE Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 mb-8"
                   style={{ borderColor: '#7cb983' }}>
                <svg className="w-5 h-5" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-base font-semibold" style={{ color: '#7cb983' }}>
                  NCTE Approved | TNTEU Affiliated
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span style={{ color: '#ffffff' }}>B.Ed </span>
                <span style={{ color: '#7cb983' }}>Chemistry</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#ffffff' }}>
                Bachelor of Education in Chemistry
              </h2>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Transform your passion for Chemistry into a rewarding teaching career. Our comprehensive 2-year program combines theoretical knowledge with hands-on laboratory experience, preparing you to inspire the next generation of scientists and critical thinkers.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8 lg:mb-12">
                {/* Years */}
                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#7cb983' }}>2</div>
                  <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>YEARS</div>
                </div>

                {/* Seats */}
                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#7cb983' }}>50</div>
                  <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>SEATS</div>
                </div>

                {/* Placement */}
                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#7cb983' }}>96%</div>
                  <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>PLACEMENT</div>
                </div>

                {/* Semesters */}
                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#7cb983' }}>4</div>
                  <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>SEMESTERS</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white bg-[#7cb983] hover:bg-[#6ba872] transition-transform hover:scale-105">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Apply Now
                </Link>

                <button
                  onClick={() => {
                    const element = document.getElementById('curriculum-structure');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 transition-all hover:bg-white hover:text-[#002309] text-white"
                  style={{ borderColor: '#ffffff' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  View Curriculum
                </button>
              </div>
            </div>

            {/* Right Content - Hero Banner Image */}
            <div className="relative mt-8 lg:mt-0">
              <Image
                src="/images/B.Ed-Chemistry-Hero-Banner-Image.png"
                alt="B.Ed Chemistry Department"
                width={2816}
                height={1536}
                priority
                className="w-full h-auto rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Course Overview
            </h2>
            <div className="h-1 w-20 mx-auto" style={{ backgroundColor: '#7cb983' }}></div>
          </div>

          <p className="text-center text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-12" style={{ color: '#006837' }}>
            A comprehensive teacher education program designed to shape passionate Chemistry educators
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <span className="text-8xl font-bold" style={{ color: '#7cb983' }}>T</span>
                </div>
                <div>
                  <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                    he Bachelor of Education (B.Ed) in Chemistry at JKKN College of Education is a meticulously designed 2-year professional degree program that prepares graduates to become competent and inspiring Learning Facilitators for secondary and higher secondary schools. This NCTE-approved program seamlessly integrates theoretical foundations of educational psychology with extensive practical laboratory training, ensuring our Learners are well-equipped to meet the evolving demands of science education in the 21st century.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                Our program emphasizes inquiry-based learning, experimental pedagogy, and innovative teaching methodologies specifically tailored for Chemistry education. Learners gain hands-on experience through micro-teaching sessions, laboratory demonstration techniques, school internships, and community engagement activities. The curriculum is aligned with the National Education Policy (NEP) 2020, focusing on competency-based learning, STEM integration, and holistic development of future educators.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                At JKKN Institutions, we believe in excellence without elitism. Our experienced Learning Facilitators, state-of-the-art Chemistry laboratories, digital learning resources, and comprehensive support systems ensure that every Learner receives personalized attention and guidance throughout their educational journey. Join us in our mission to transform lives through progressive science education and create Chemistry educators who can inspire curiosity and scientific thinking.
              </p>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Program Duration */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  PROGRAM DURATION
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  2 Years
                </div>
                <div className="text-sm" style={{ color: '#006837' }}>
                  (4 Semesters)
                </div>
              </div>

              {/* Mode of Study */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  MODE OF STUDY
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  Full-Time
                </div>
                <div className="text-sm" style={{ color: '#006837' }}>
                  On-Campus
                </div>
              </div>

              {/* Total Intake */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  TOTAL INTAKE
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  50 Seats
                </div>
                <div className="text-sm" style={{ color: '#006837' }}>
                  per Academic Year
                </div>
              </div>

              {/* Affiliation */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  AFFILIATION
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  TNTEU
                </div>
                <div className="text-sm" style={{ color: '#006837' }}>
                  Chennai
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Program Highlights
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Discover what makes our B.Ed Chemistry program exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NCTE Approved */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                NCTE Approved
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Recognized by the National Council for Teacher Education, ensuring quality standards and national acceptance of your degree for teaching positions across India.
              </p>
            </div>

            {/* Advanced Chemistry Labs */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Advanced Chemistry Labs
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                State-of-the-art laboratories equipped with modern instruments and safety equipment for hands-on experimental learning and demonstration techniques.
              </p>
            </div>

            {/* Extensive Internship */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Extensive Internship
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                16-20 weeks of comprehensive school internship program with partner institutions providing real-world teaching experience and mentorship.
              </p>
            </div>

            {/* Expert Learning Facilitators */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Expert Learning Facilitators
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Learn from experienced educators with advanced degrees in Chemistry and Education, bringing extensive teaching and research experience.
              </p>
            </div>

            {/* Smart Learning Studios */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Smart Learning Studios
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Technology-enabled facilities with interactive boards, virtual lab simulations, molecular modeling software, and digital resources for enhanced learning.
              </p>
            </div>

            {/* Scholarship Support */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Scholarship Support
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Various government and institutional scholarships available for eligible candidates including SC/ST/OBC and merit-based financial assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Chemistry Teaching Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Why Choose Chemistry Teaching?
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Discover the rewarding path of becoming a Chemistry educator
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                     style={{ backgroundColor: '#7cb983' }}>
                  1
                </div>
                <h3 className="text-xl font-bold pt-2" style={{ color: '#002309' }}>
                  High Demand for Science Educators
                </h3>
              </div>
              <p className="leading-relaxed ml-16" style={{ color: '#006837' }}>
                Growing demand for qualified Chemistry teachers in government and private schools, CBSE, ICSE, and international boards across India.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                     style={{ backgroundColor: '#7cb983' }}>
                  2
                </div>
                <h3 className="text-xl font-bold pt-2" style={{ color: '#002309' }}>
                  Job Security & Benefits
                </h3>
              </div>
              <p className="leading-relaxed ml-16" style={{ color: '#006837' }}>
                Government school teachers enjoy excellent job security, pension benefits, medical insurance, and regular pay revisions under 7th Pay Commission.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                     style={{ backgroundColor: '#7cb983' }}>
                  3
                </div>
                <h3 className="text-xl font-bold pt-2" style={{ color: '#002309' }}>
                  Inspire Future Scientists
                </h3>
              </div>
              <p className="leading-relaxed ml-16" style={{ color: '#006837' }}>
                Shape young minds and inspire the next generation of researchers, doctors, engineers, and scientists through engaging Chemistry education.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                     style={{ backgroundColor: '#7cb983' }}>
                  4
                </div>
                <h3 className="text-xl font-bold pt-2" style={{ color: '#002309' }}>
                  Multiple Career Paths
                </h3>
              </div>
              <p className="leading-relaxed ml-16" style={{ color: '#006837' }}>
                Beyond teaching, explore careers in curriculum development, educational content creation, ed-tech companies, and educational administration.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                     style={{ backgroundColor: '#7cb983' }}>
                  5
                </div>
                <h3 className="text-xl font-bold pt-2" style={{ color: '#002309' }}>
                  Work-Life Balance
                </h3>
              </div>
              <p className="leading-relaxed ml-16" style={{ color: '#006837' }}>
                Teaching careers offer structured work hours, regular vacations, and the flexibility to pursue further studies or research alongside your profession.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                     style={{ backgroundColor: '#7cb983' }}>
                  6
                </div>
                <h3 className="text-xl font-bold pt-2" style={{ color: '#002309' }}>
                  Continuous Learning
                </h3>
              </div>
              <p className="leading-relaxed ml-16" style={{ color: '#006837' }}>
                Stay updated with latest discoveries in Chemistry and pedagogical innovations, ensuring your knowledge remains current and relevant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria & Documents Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Eligibility Criteria & Documents
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Requirements for admission to B.Ed Chemistry program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Academic Requirements */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7cb983' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#002309' }}>
                  Academic Requirements
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    Bachelor's degree (BSc Chemistry or BSc with Chemistry as ancillary) from a recognized university
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    Minimum 50% aggregate marks in graduation (45% for SC/ST/OBC/PWD candidates)
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    MSc Chemistry candidates are eligible and given preference
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    Candidates appearing for final year degree exams may also apply provisionally
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    Age limit as per Tamil Nadu government norms (no upper age limit for reserved categories)
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    Valid TNTEU B.Ed entrance examination score (if applicable for current year)
                  </p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7cb983' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#002309' }}>
                  Required Documents
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    10th and 12th mark sheets and certificates (originals and copies)
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    Degree certificate and consolidated mark sheet
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    Transfer certificate from last institution attended
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    Community certificate (for reserved category candidates)
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    Income certificate (for scholarship and fee concession purposes)
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    Aadhar card and recent passport-size photographs (8 copies)
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    Migration certificate (for candidates from other universities)
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                      <svg className="w-4 h-4" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#002309' }}>
                    TNTEU entrance score card (if applicable)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Structure Section */}
      <section id="curriculum-structure" className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Curriculum Structure
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Comprehensive syllabus aligned with NCTE norms and NEP 2020 guidelines
            </p>
          </div>

          {/* Semester Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveSemester('semester1')}
              className="px-8 py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: activeSemester === 'semester1' ? '#002309' : '#ffffff',
                color: activeSemester === 'semester1' ? '#ffffff' : '#002309',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              Semester I
            </button>
            <button
              onClick={() => setActiveSemester('semester2')}
              className="px-8 py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: activeSemester === 'semester2' ? '#002309' : '#ffffff',
                color: activeSemester === 'semester2' ? '#ffffff' : '#002309',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              Semester II
            </button>
            <button
              onClick={() => setActiveSemester('semester3')}
              className="px-8 py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: activeSemester === 'semester3' ? '#002309' : '#ffffff',
                color: activeSemester === 'semester3' ? '#ffffff' : '#002309',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              Semester III
            </button>
            <button
              onClick={() => setActiveSemester('semester4')}
              className="px-8 py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: activeSemester === 'semester4' ? '#002309' : '#ffffff',
                color: activeSemester === 'semester4' ? '#ffffff' : '#002309',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              Semester IV
            </button>
          </div>

          {/* Semester I Content */}
          {activeSemester === 'semester1' && (
            <div className="space-y-6">
              {/* Course 1 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div>101</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Childhood and Growing Up
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Understanding child development, learning theories, cognitive development, and educational psychology principles essential for effective teaching.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div>102</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Contemporary India and Education
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Exploring the Indian education system, educational policies, NEP 2020, constitutional provisions, and contemporary challenges in education.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory</span>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">CHE</div>
                    <div>103</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Pedagogy of Chemistry - Part I
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Foundations of Chemistry teaching, curriculum design, nature of Chemistry education, historical development, and instructional strategies for secondary level.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 4 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div>104</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Language Across the Curriculum
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Integration of language skills in science teaching, scientific communication, and effective use of terminology in Chemistry instruction.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Theory</span>
                  </div>
                </div>
              </div>

              {/* Course 5 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div>105</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Reading and Reflecting on Texts
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Critical analysis of educational texts, reflective practices, and professional development through reading scientific and pedagogical literature.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Theory</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Semester II Content */}
          {activeSemester === 'semester2' && (
            <div className="space-y-6">
              {/* Course 1 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div>201</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Learning and Teaching
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Theories of learning, teaching models, constructivist approaches, and practical applications in Chemistry classroom settings.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">CHE</div>
                    <div>202</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Pedagogy of Chemistry - Part II
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Advanced teaching methods, laboratory pedagogy, demonstration techniques, safety protocols, and assessment strategies for Chemistry education.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div>203</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Assessment for Learning
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Formative and summative assessment, rubric design, practical examination assessment, continuous comprehensive evaluation in science subjects.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory</span>
                  </div>
                </div>
              </div>

              {/* Course 4 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div>204</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Drama and Art in Education
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Creative approaches to science teaching using drama, visual arts, models, and multimedia for engaging Chemistry instruction.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 5 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">CHE</div>
                    <div>205</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Chemistry Laboratory Teaching
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Planning and conducting laboratory sessions, safety management, practical skills development, and evaluation of laboratory work.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Practical</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Semester III Content */}
          {activeSemester === 'semester3' && (
            <div className="space-y-6">
              {/* Course 1 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div>301</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Knowledge and Curriculum
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Curriculum development processes, science curriculum frameworks, NCERT guidelines, and state-level curriculum adaptations for Chemistry.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory</span>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div>302</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Inclusive Education
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Teaching diverse learners, accommodations for students with special needs, differentiated instruction in Chemistry, and inclusive laboratory practices.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div>303</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Gender, School and Society
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Gender issues in science education, promoting equity in Chemistry classrooms, and addressing stereotypes about women in science.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Theory</span>
                  </div>
                </div>
              </div>

              {/* Course 4 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">INT</div>
                    <div>304</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    School Internship - Phase I
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    8-10 weeks of intensive teaching practice in partner schools, lesson planning, classroom management, and supervised Chemistry teaching.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 8</span>
                    <span>Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 5 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">CHE</div>
                    <div>305</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    ICT in Chemistry Education
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Digital tools for Chemistry teaching, virtual labs, molecular visualization software, online simulations, and educational technology integration.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Practical</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Semester IV Content */}
          {activeSemester === 'semester4' && (
            <div className="space-y-6">
              {/* Course 1 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">INT</div>
                    <div>401</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    School Internship - Phase II
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Extended 8-10 weeks teaching practice with increased responsibilities, action research, and professional development activities.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 8</span>
                    <span>Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div>402</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Understanding the Self
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Self-reflection, professional identity development, emotional intelligence, stress management, and teacher wellness strategies.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">CHE</div>
                    <div>403</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Environmental Chemistry Education
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Teaching environmental concepts through Chemistry, green chemistry principles, sustainability education, and connecting chemistry to real-world issues.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 4 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div>404</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Action Research Project
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Conducting classroom-based research on Chemistry teaching, data collection, analysis, and presenting findings for educational improvement.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 5 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                     style={{ backgroundColor: '#006837' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div>405</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 break-words" style={{ color: '#006837' }}>
                    Yoga and Health Education
                  </h3>
                  <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Physical and mental wellness practices, stress management techniques, and promoting holistic health for educators and learners.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Practical</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Career Prospects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{
        background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)'
      }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Career Prospects
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Diverse opportunities await B.Ed Chemistry graduates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Secondary School Teacher */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(14, 116, 144, 0.4)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Secondary School Teacher
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Teach Chemistry in government and private schools (Classes 9-10) across all boards - State, CBSE, ICSE, and International schools.
              </p>
            </div>

            {/* Higher Secondary Teacher */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(14, 116, 144, 0.4)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Higher Secondary Teacher
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Teach Chemistry at Plus One and Plus Two levels, preparing students for competitive examinations like NEET, JEE, and board exams.
              </p>
            </div>

            {/* Laboratory Coordinator */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(14, 116, 144, 0.4)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Laboratory Coordinator
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Manage and coordinate Chemistry laboratory activities in schools, ensuring safety standards and effective practical learning experiences.
              </p>
            </div>

            {/* Curriculum Developer */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(14, 116, 144, 0.4)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Curriculum Developer
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Design and develop Chemistry curriculum, textbooks, laboratory manuals, and educational materials for publishers and educational boards.
              </p>
            </div>

            {/* Ed-Tech Content Creator */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(14, 116, 144, 0.4)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Ed-Tech Content Creator
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Create digital learning content, video lectures, virtual lab simulations, and interactive Chemistry modules for ed-tech platforms.
              </p>
            </div>

            {/* Educational Administrator */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(14, 116, 144, 0.4)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Educational Administrator
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Pursue leadership roles as Head of Science Department, Vice Principal, or Principal after gaining teaching experience.
              </p>
            </div>

            {/* Higher Education */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(14, 116, 144, 0.4)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Higher Education (M.Ed/Ph.D)
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Pursue advanced degrees like M.Ed, M.Phil, or Ph.D in Education to become college/university Learning Facilitators or researchers.
              </p>
            </div>

            {/* Coaching Institute Faculty */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(14, 116, 144, 0.4)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Coaching Institute Faculty
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Join premier coaching institutes preparing students for NEET, JEE, and other competitive examinations requiring Chemistry expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Campus Facilities
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              World-class infrastructure supporting your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Chemistry Lab */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Chemistry Lab
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#7cb983' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  Advanced Chemistry Lab
                </p>
              </div>
            </div>

            {/* Instrument Room */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #6ba872 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Instrument Room
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#ffffff' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  Instrumentation Room
                </p>
              </div>
            </div>

            {/* Digital Library */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #006837 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Digital Library
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#ffffff' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  Digital Library
                </p>
              </div>
            </div>

            {/* Smart Classroom */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Smart Classroom
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#7cb983' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  Smart Learning Studios
                </p>
              </div>
            </div>

            {/* Micro Teaching Lab */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #6ba872 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Micro Teaching Lab
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#ffffff' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  Micro-Teaching Lab
                </p>
              </div>
            </div>

            {/* Computer Lab */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #006837 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Computer Lab
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#ffffff' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  Computer Lab
                </p>
              </div>
            </div>

            {/* Seminar Hall */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Seminar Hall
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#7cb983' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  Seminar Hall
                </p>
              </div>
            </div>

            {/* Hostel Facility */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #6ba872 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Hostel Facility
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#ffffff' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  Hostel Facility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Admission Process
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Simple steps to begin your journey as a Chemistry educator
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden lg:block"
                 style={{ background: 'linear-gradient(to bottom, #7cb983 0%, #7cb983 100%)' }}></div>

            {/* Step 1 - Left */}
            <div className="relative mb-16 lg:mb-24">
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-5/12 lg:pr-12 mb-8 lg:mb-0">
                  <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Check Eligibility
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Verify that you meet the academic requirements: BSc Chemistry or BSc with Chemistry as ancillary with minimum 50% marks (45% for reserved categories).
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full z-10 mb-8 lg:mb-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  <span className="text-xl lg:text-2xl font-bold text-white">1</span>
                </div>
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            </div>

            {/* Step 2 - Right */}
            <div className="relative mb-16 lg:mb-24">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="hidden lg:block lg:w-5/12"></div>
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full z-10 mb-8 lg:mb-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  <span className="text-xl lg:text-2xl font-bold text-white">2</span>
                </div>
                <div className="w-full lg:w-5/12 lg:pl-12">
                  <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Online Application
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Fill out the online application form on our website with accurate personal, academic, and contact information. Upload required documents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Left */}
            <div className="relative mb-16 lg:mb-24">
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-5/12 lg:pr-12 mb-8 lg:mb-0">
                  <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Document Verification
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Visit the campus with original documents for verification. Our admission counselors will guide you through the process and answer your queries.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full z-10 mb-8 lg:mb-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  <span className="text-xl lg:text-2xl font-bold text-white">3</span>
                </div>
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            </div>

            {/* Step 4 - Right */}
            <div className="relative mb-16 lg:mb-24">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="hidden lg:block lg:w-5/12"></div>
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full z-10 mb-8 lg:mb-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  <span className="text-xl lg:text-2xl font-bold text-white">4</span>
                </div>
                <div className="w-full lg:w-5/12 lg:pl-12">
                  <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Merit List & Counseling
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Candidates are selected based on merit (graduation marks) and reservation norms. Attend counseling session for seat confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 - Left */}
            <div className="relative mb-16 lg:mb-24">
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-5/12 lg:pr-12 mb-8 lg:mb-0">
                  <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Fee Payment
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Pay the admission fee as per the fee structure. Apply for scholarships if eligible. Multiple payment options available including installments.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full z-10 mb-8 lg:mb-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  <span className="text-xl lg:text-2xl font-bold text-white">5</span>
                </div>
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            </div>

            {/* Step 6 - Right */}
            <div className="relative">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="hidden lg:block lg:w-5/12"></div>
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full z-10 mb-8 lg:mb-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  <span className="text-xl lg:text-2xl font-bold text-white">6</span>
                </div>
                <div className="w-full lg:w-5/12 lg:pl-12">
                  <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Begin Your Journey
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Attend the orientation program, collect study materials, and begin your transformative 2-year journey to become a Chemistry educator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Find answers to common questions about B.Ed Chemistry program
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What is the eligibility criteria for B.Ed Chemistry admission?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Candidates must have completed BSc Chemistry or BSc with Chemistry as an ancillary subject from a recognized university with minimum 50% aggregate marks. For SC/ST/OBC/PWD candidates, the minimum is 45%. MSc Chemistry candidates are also eligible and given preference during admission.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What is the duration and mode of the B.Ed Chemistry program?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  B.Ed Chemistry is a 2-year full-time professional degree program divided into 4 semesters. The program includes theoretical coursework, practical laboratory sessions, micro-teaching, and 16-20 weeks of school internship as per NCTE norms.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Can B.Ed Chemistry graduates teach in CBSE and ICSE schools?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Yes, B.Ed Chemistry graduates from NCTE-approved institutions like JKKN College can teach in all types of schools including State Board, CBSE, ICSE, and International schools across India. The degree is nationally recognized for teaching positions at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Does JKKN have specialized Chemistry laboratories for B.Ed students?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Yes, JKKN College of Education has well-equipped Chemistry laboratories specifically designed for teacher education. The labs feature modern equipment, safety infrastructure, demonstration tables, and resources for teaching laboratory techniques, practical skills, and safety protocols essential for effective Chemistry teaching.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What practical training do B.Ed Chemistry students receive?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Students receive comprehensive practical training including: micro-teaching sessions for skill development, laboratory demonstration techniques, 16-20 weeks of school internship in partner schools, lesson planning workshops, educational technology integration, virtual lab simulations, action research projects, and hands-on experience with modern teaching aids.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What are the career opportunities after B.Ed Chemistry?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Graduates have diverse career options including: Chemistry teachers in schools (government and private), coaching institute faculty for NEET/JEE preparation, laboratory coordinators, curriculum developers, educational content writers, ed-tech content creators, educational administrators, and higher education (M.Ed, Ph.D) for teaching in colleges and research.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Are scholarships available for B.Ed Chemistry students?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Yes, various scholarships are available including: State government scholarships for SC/ST/OBC/BC/MBC candidates, central government scholarships, minority scholarships, merit-based scholarships for top performers, and fee concessions for economically disadvantaged students. Contact the admission office for detailed eligibility information.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Can I pursue M.Ed after completing B.Ed Chemistry?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Yes, B.Ed graduates can pursue M.Ed (Master of Education), M.Phil, or Ph.D in Education for advanced career opportunities. M.Ed qualifies you for positions as college/university Learning Facilitators, educational researchers, curriculum specialists, and senior administrative roles in educational institutions.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#7cb983' }}>
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Chemistry Passion into a Teaching Career?
          </h2>
          <p className="text-xl leading-relaxed mb-10 text-white">
            Join JKKN College of Education and become part of our legacy of excellence in teacher education. Applications for 2025-26 batch are now open. Take the first step towards an inspiring career as a Chemistry educator.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-semibold transition-transform hover:scale-105"
                    style={{ backgroundColor: '#ffffff', color: '#7cb983' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Apply Online Now
            </Link>
            <a href="tel:+919345855001" className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-semibold border-2 border-white text-white transition-all hover:bg-white hover:text-orange-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Admissions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
