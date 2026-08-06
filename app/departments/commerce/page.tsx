'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CurriculumSection from './CurriculumSection'

export default function CommerceDepartment() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%)] lg:bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%),url(/images/B.Ed-Commerce-Hero-Banner-Image.webp)] bg-cover bg-center">
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
                <span style={{ color: '#7cb983' }}>Commerce</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#ffffff' }}>
                Bachelor of Education in Commerce
              </h2>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Transform your commerce expertise into a rewarding teaching career. Our comprehensive 2-year program equips you with modern pedagogical techniques, practical teaching skills, and deep subject knowledge in Accountancy, Business Studies, and Economics.
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
                src="/images/B.Ed-Commerce-Hero-Banner-Image.webp"
                alt="B.Ed Commerce Department"
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

          <p className="text-center text-lg mb-12" style={{ color: '#006837' }}>
            A comprehensive teacher education program designed to shape passionate Commerce educators
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <span className="text-8xl font-bold" style={{ color: '#7cb983' }}>T</span>
                </div>
                <div>
                  <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                    he Bachelor of Education (B.Ed) in Commerce at JKKN College of Education is a meticulously designed 2-year professional degree program that prepares graduates to become competent and effective Learning Facilitators for secondary and higher secondary schools. This NCTE-approved program combines strong theoretical foundations with extensive practical training in teaching Accountancy, Business Studies, Economics, and related commerce subjects.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                Our curriculum emphasizes modern pedagogical approaches, innovative teaching methodologies, and technology-enhanced learning strategies. Learners gain hands-on experience through micro-teaching sessions, simulated teaching practices, and comprehensive school internships in partner institutions. The program is aligned with the National Education Policy (NEP) 2020, focusing on competency-based learning, outcome-based education, and holistic development of future educators.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                At JKKN Institutions, we believe in excellence without elitism. Our experienced Learning Facilitators, state-of-the-art Learning Studios, well-equipped commerce laboratories, and comprehensive support systems ensure that every Learner receives personalized attention and guidance throughout their educational journey. Join us in our mission to transform lives through progressive education and create a new generation of inspiring Commerce educators.
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
              Discover what makes our B.Ed Commerce program exceptional
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

            {/* Practical Training */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Practical Training
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Extensive school internship program with partner institutions providing real-world teaching experience, classroom management skills, and professional mentorship.
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
                Learn from experienced educators with extensive backgrounds in Commerce education, accounting principles, business management, and modern pedagogy.
              </p>
            </div>

            {/* Modern Learning Studios */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Modern Learning Studios
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Well-equipped facilities with smart boards, accounting software labs, digital resources, and simulation tools for enhanced learning experiences.
              </p>
            </div>

            {/* Industry-Relevant Curriculum */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Industry-Relevant Curriculum
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Updated syllabus covering latest accounting standards, GST, digital finance, e-commerce, and contemporary business practices for comprehensive teaching preparation.
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
                Various government and institutional scholarships available for eligible candidates to ensure accessible, quality education for all deserving Learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria & Documents Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Eligibility Criteria & Documents
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Requirements for admission to B.Ed Commerce program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Academic Requirements */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
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
                    Bachelor's degree in Commerce (B.Com) or equivalent from a recognized university
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
                    Commerce subjects (Accountancy, Business Studies, Economics) at degree level
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
                    Candidates appearing for final year degree examinations may also apply
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
                    Age limit as per Tamil Nadu government norms for teacher education
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
                    Valid TNTEU B.Ed entrance examination score (if applicable)
                  </p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
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
                    Income certificate (for scholarship purposes)
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
                    Aadhar card and recent passport-size photographs
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
                    Migration certificate (if applicable for candidates from other states/universities)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Structure Section */}
      <CurriculumSection />

      {/* Career Prospects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{
        background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)'
      }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Career Prospects
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Diverse opportunities await B.Ed Commerce graduates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Secondary School Teacher */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Secondary School Teacher
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Teach Commerce, Accountancy, and Business Studies in government and private schools for classes 9-10 across India.
              </p>
            </div>

            {/* Higher Secondary Teacher */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Higher Secondary Teacher
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Prepare students for competitive examinations and higher education in Accountancy, Business Studies, and Economics at +2 level.
              </p>
            </div>

            {/* Coaching Institute Faculty */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Coaching Institute Faculty
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Join reputed coaching centers teaching Commerce subjects for board exams, CA/CS foundation, and competitive examinations.
              </p>
            </div>

            {/* Curriculum Developer */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Curriculum Developer
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Design and develop Commerce curriculum materials, textbooks, and digital content for educational institutions and publishers.
              </p>
            </div>

            {/* Corporate Trainer */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Corporate Trainer
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Conduct training programs in corporate settings on accounting software, business communication, and professional development.
              </p>
            </div>

            {/* Higher Education */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Higher Education (M.Ed/Ph.D)
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Pursue advanced degrees in Education, Commerce Education, or Educational Administration and become college-level educators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose JKKN Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Why Choose JKKN for B.Ed Commerce?
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Discover the advantages of pursuing your B.Ed Commerce at JKKN College of Education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="p-8 rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                     style={{ backgroundColor: '#7cb983', color: '#ffffff' }}>
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#002309' }}>
                  55+ Years of Educational Excellence
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Part of JKKN Institutions with a proven legacy of transforming lives through progressive education since 1969.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="p-8 rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                     style={{ backgroundColor: '#7cb983', color: '#ffffff' }}>
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#002309' }}>
                  98% Placement Success Rate
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Strong placement record with graduates securing positions in government schools, CBSE/ICSE schools, and prestigious educational institutions.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="p-8 rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                     style={{ backgroundColor: '#7cb983', color: '#ffffff' }}>
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#002309' }}>
                  Industry-Aligned Curriculum
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Curriculum updated with GST, Tally, digital finance, and e-commerce concepts ensuring Learners teach contemporary business practices.
              </p>
            </div>

            {/* Advantage 4 */}
            <div className="p-8 rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                     style={{ backgroundColor: '#7cb983', color: '#ffffff' }}>
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#002309' }}>
                  Extensive Partner School Network
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Tie-ups with 50+ schools for internship providing diverse teaching experiences in urban, rural, government, and private settings.
              </p>
            </div>

            {/* Advantage 5 */}
            <div className="p-8 rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                     style={{ backgroundColor: '#7cb983', color: '#ffffff' }}>
                  <span className="text-xl font-bold">5</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#002309' }}>
                  Holistic Development Focus
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Beyond academics, focus on soft skills, communication, personality development, and professional ethics for well-rounded educators.
              </p>
            </div>

            {/* Advantage 6 */}
            <div className="p-8 rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                     style={{ backgroundColor: '#7cb983', color: '#ffffff' }}>
                  <span className="text-xl font-bold">6</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#002309' }}>
                  Affordable Quality Education
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Government-regulated fees with multiple scholarship options ensuring quality teacher education accessible to all deserving candidates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
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
            {/* Commerce Lab */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Commerce Lab
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#7cb983' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  Commerce Lab
                </p>
              </div>
            </div>

            {/* Digital Library */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #6ba872 100%)' }}>
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

            {/* Smart Classrooms */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #006837 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Smart Classrooms
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#ffffff' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  Smart Learning Studios
                </p>
              </div>
            </div>

            {/* Micro Teaching */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Micro Teaching
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#7cb983' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  Micro-Teaching Lab
                </p>
              </div>
            </div>

            {/* Computer Lab */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #6ba872 100%)' }}>
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
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #006837 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Seminar Hall
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#ffffff' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  Seminar Hall
                </p>
              </div>
            </div>

            {/* Resource Center */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Resource Center
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#7cb983' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  Resource Center
                </p>
              </div>
            </div>

            {/* Hostel */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #6ba872 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Hostel
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
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Admission Process
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Simple steps to begin your journey as a Commerce educator
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden lg:block"
                 style={{ background: 'linear-gradient(to bottom, #7cb983 0%, #7cb983 100%)' }}></div>

            {/* Step 1 - Left */}
            <div className="relative mb-16 lg:mb-32">
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-5/12 lg:pr-12 mb-8 lg:mb-0">
                  <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Check Eligibility
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Verify you meet the academic requirements: B.Com or equivalent degree with minimum 50% marks (45% for reserved categories) with Commerce subjects.
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
            <div className="relative mb-16 lg:mb-32">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="hidden lg:block lg:w-5/12"></div>
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full z-10 mb-8 lg:mb-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  <span className="text-xl lg:text-2xl font-bold text-white">2</span>
                </div>
                <div className="w-full lg:w-5/12 lg:pl-12">
                  <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Online Application
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Complete the online application form on our official website or TNTEU portal. Upload required documents and pay the application fee.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Left */}
            <div className="relative mb-16 lg:mb-32">
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-5/12 lg:pr-12 mb-8 lg:mb-0">
                  <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Document Verification
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Submit original documents for verification at the college admission office. Ensure all certificates are attested and complete.
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
            <div className="relative mb-16 lg:mb-32">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="hidden lg:block lg:w-5/12"></div>
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full z-10 mb-8 lg:mb-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  <span className="text-xl lg:text-2xl font-bold text-white">4</span>
                </div>
                <div className="w-full lg:w-5/12 lg:pl-12">
                  <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Counseling & Seat Allotment
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Attend counseling session as per TNTEU schedule. Seats are allotted based on merit, entrance exam scores, and reservation norms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 - Left */}
            <div className="relative mb-16 lg:mb-32">
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-5/12 lg:pr-12 mb-8 lg:mb-0">
                  <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Fee Payment & Enrollment
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Pay the prescribed fees within the stipulated time. Complete enrollment formalities and receive your admission confirmation.
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
                  <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Orientation & Classes Begin
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Attend the orientation program to familiarize with campus, Learning Facilitators, and academic schedule. Begin your transformative journey!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Find answers to common queries about B.Ed Commerce program
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="group p-6 rounded-xl transition-all" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What is the eligibility for B.Ed Commerce admission?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Candidates must hold a Bachelor's degree in Commerce (B.Com) or equivalent degree with Commerce subjects (Accountancy, Business Studies, Economics) from a recognized university with minimum 50% aggregate marks. Reserved category candidates (SC/ST/OBC/PWD) require minimum 45% marks. Candidates appearing for final year degree examinations may also apply provisionally.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group p-6 rounded-xl transition-all" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What is the duration of B.Ed Commerce program?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  The B.Ed Commerce program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, practical sessions, and school internship components as mandated by TNTEU guidelines.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group p-6 rounded-xl transition-all" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What subjects can I teach after completing B.Ed Commerce?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  After completing B.Ed Commerce, you are qualified to teach Commerce, Accountancy, Business Studies, Economics, and related subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group p-6 rounded-xl transition-all" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Is JKKN College of Education NCTE approved?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Commerce program meets all regulatory standards for teacher education in India, ensuring your degree is recognized nationally for teaching positions.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group p-6 rounded-xl transition-all" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What is the fee structure for B.Ed Commerce?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  The fee structure is regulated by the Tamil Nadu government for teacher education programs. Various scholarships including government scholarships for SC/ST/OBC/BC candidates, merit scholarships, and institutional financial assistance are available for eligible Learners. Please contact our admission office for current fee details and scholarship information.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group p-6 rounded-xl transition-all" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Does the program include practical teaching experience?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Yes, the B.Ed Commerce program includes extensive practical training through micro-teaching sessions, simulated teaching practices, peer teaching, and a mandatory 16-week school internship program spread across two phases. Learners teach Commerce subjects in actual classroom settings under mentor Learning Facilitator guidance in our partner schools.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group p-6 rounded-xl transition-all" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Can I pursue B.Ed Commerce after distance B.Com?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Yes, candidates with B.Com degree from UGC-recognized distance education universities/institutions are eligible for B.Ed Commerce admission, provided they meet the minimum percentage criteria (50% general, 45% reserved) and other eligibility requirements. The distance education degree must be from a recognized university listed in UGC/AIU approved list.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group p-6 rounded-xl transition-all" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What are the career opportunities after B.Ed Commerce?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  B.Ed Commerce graduates have diverse career options including: Commerce/Accountancy/Business Studies teachers in government and private schools, TGT/PGT positions in CBSE/ICSE schools, coaching institute faculty, curriculum developers, educational content writers, corporate trainers, and opportunities to pursue M.Ed/Ph.D for academic and administrative roles in higher education.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#7cb983' }}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Begin Your Journey as a Commerce Educator?
          </h2>
          <p className="text-xl leading-relaxed mb-10 text-white">
            Join JKKN College of Education and transform your passion for Commerce into a rewarding teaching career. Admissions open for 2025-26 academic year.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-semibold transition-transform hover:scale-105"
                    style={{ backgroundColor: '#ffffff', color: '#7cb983' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Apply Online Now
            </Link>
            <a href="tel:+919345855001" className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-semibold border-2 border-white text-white transition-all hover:bg-white hover:text-orange-600">
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
