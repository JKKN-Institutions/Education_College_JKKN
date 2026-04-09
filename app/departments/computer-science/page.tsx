'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ComputerScienceDepartment() {
  const [activeSemester, setActiveSemester] = useState('semester1')

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%)] lg:bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%),url(/images/B.Ed-Computer-Science-Hero-Banner-Image.png)] bg-cover bg-center">
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
                <span style={{ color: '#7cb983' }}>Computer Science</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#ffffff' }}>
                Bachelor of Education in Computer Science
              </h2>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Launch your career as a future-ready Computer Science educator. Our comprehensive 2-year program equips you with cutting-edge pedagogical techniques, programming proficiency, and hands-on teaching experience to inspire the next generation of digital innovators.
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
                  <div className="text-4xl font-bold mb-2" style={{ color: '#7cb983' }}>98%</div>
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
                  onClick={() => document.getElementById('curriculum-structure')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 text-white transition-all hover:bg-white hover:text-[#002309]"
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
              <img
                src="/images/B.Ed-Computer-Science-Hero-Banner-Image.png"
                alt="B.Ed Computer Science Department"
                className="w-full h-auto rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#002309' }}>
              Course Overview
            </h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #7cb983, #006837)' }}></div>
            <p className="text-xl text-gray-600">
              A comprehensive teacher education program designed to shape innovative Computer Science educators
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                <span className="text-5xl float-left mr-4 font-bold" style={{ color: '#7cb983', lineHeight: '0.8' }}>T</span>
                he Bachelor of Education (B.Ed) in Computer Science at JKKN College of Education is a meticulously designed 2-year professional degree program that prepares graduates to become competent and innovative Learning Facilitators for secondary and higher secondary schools. This NCTE-approved program combines theoretical foundations in computer science pedagogy with extensive practical training, ensuring our Learners are well-equipped to meet the evolving demands of technology education in the digital age.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                Our program emphasizes modern programming languages, computational thinking methodologies, and innovative teaching strategies tailored for Computer Science education. Learners gain hands-on experience through micro-teaching sessions, school internships, and technology-integrated activities. The curriculum is aligned with the National Education Policy (NEP) 2020, focusing on competency-based learning, coding education, and digital literacy development.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                At JKKN Institutions, we believe in excellence without elitism. Our experienced Learning Facilitators, state-of-the-art computer labs, and comprehensive support systems ensure that every Learner receives personalized attention and guidance throughout their educational journey. Join us in our mission to transform lives through progressive education and prepare the next generation of digital citizens.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Program Duration */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-sm font-semibold mb-2 text-gray-500 tracking-wide">PROGRAM DURATION</div>
                <div className="text-3xl font-bold mb-1" style={{ color: '#002309' }}>2 Years</div>
                <div className="text-gray-600">(4 Semesters)</div>
              </div>

              {/* Mode of Study */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-sm font-semibold mb-2 text-gray-500 tracking-wide">MODE OF STUDY</div>
                <div className="text-3xl font-bold mb-1" style={{ color: '#002309' }}>Full-Time</div>
                <div className="text-gray-600">On-Campus</div>
              </div>

              {/* Total Intake */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-sm font-semibold mb-2 text-gray-500 tracking-wide">TOTAL INTAKE</div>
                <div className="text-3xl font-bold mb-1" style={{ color: '#002309' }}>50 Seats</div>
                <div className="text-gray-600">per Academic Year</div>
              </div>

              {/* Affiliation */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-sm font-semibold mb-2 text-gray-500 tracking-wide">AFFILIATION</div>
                <div className="text-3xl font-bold" style={{ color: '#002309' }}>TNTEU</div>
                <div className="text-gray-600">Chennai</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#002309' }}>
              Program Highlights
            </h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #7cb983, #006837)' }}></div>
            <p className="text-xl text-gray-600">
              Discover what makes our B.Ed Computer Science program exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NCTE Approved */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                   style={{ backgroundColor: 'rgba(124, 185, 131, 0.1)', border: '2px solid #7cb983' }}>
                <svg className="w-8 h-8" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#002309' }}>
                NCTE Approved
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Recognized by the National Council for Teacher Education, ensuring quality standards and national acceptance of your degree for teaching positions.
              </p>
            </div>

            {/* Advanced Computer Labs */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                   style={{ backgroundColor: 'rgba(124, 185, 131, 0.1)', border: '2px solid #7cb983' }}>
                <svg className="w-8 h-8" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#002309' }}>
                Advanced Computer Labs
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                State-of-the-art computer laboratories with latest software, programming tools, and educational technology platforms for hands-on learning.
              </p>
            </div>

            {/* Programming Pedagogy */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                   style={{ backgroundColor: 'rgba(124, 185, 131, 0.1)', border: '2px solid #7cb983' }}>
                <svg className="w-8 h-8" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#002309' }}>
                Programming Pedagogy
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Learn effective methods to teach programming languages including Python, Java, C++, and web technologies with practical demonstrations.
              </p>
            </div>

            {/* Expert Learning Facilitators */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                   style={{ backgroundColor: 'rgba(124, 185, 131, 0.1)', border: '2px solid #7cb983' }}>
                <svg className="w-8 h-8" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#002309' }}>
                Expert Learning Facilitators
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Learn from experienced educators with extensive backgrounds in computer science, software development, and modern pedagogy.
              </p>
            </div>

            {/* Practical Training */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                   style={{ backgroundColor: 'rgba(124, 185, 131, 0.1)', border: '2px solid #7cb983' }}>
                <svg className="w-8 h-8" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#002309' }}>
                Practical Training
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Extensive school internship program with partner institutions providing real-world teaching experience in computer science education.
              </p>
            </div>

            {/* Scholarship Support */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                   style={{ backgroundColor: 'rgba(124, 185, 131, 0.1)', border: '2px solid #7cb983' }}>
                <svg className="w-8 h-8" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#002309' }}>
                Scholarship Support
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Various government and institutional scholarships available for eligible candidates to ensure accessible education for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria & Documents Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#002309' }}>
              Eligibility Criteria & Documents
            </h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #7cb983, #006837)' }}></div>
            <p className="text-xl text-gray-600">
              Requirements for admission to B.Ed Computer Science program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Academic Requirements */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold" style={{ color: '#002309' }}>
                  Academic Requirements
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    Bachelor&apos;s degree (B.Sc Computer Science/BCA/B.Tech/MCA or equivalent) from a recognized university
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    Minimum 50% aggregate marks in graduation (45% for SC/ST/OBC/PWD candidates)
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    Computer Science/IT/Computer Applications as a major subject at degree level
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    Candidates appearing for final year degree exams may also apply
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    Age limit as per Tamil Nadu government norms
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    Valid TNTEU B.Ed entrance examination score (if applicable)
                  </p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-2xl font-bold" style={{ color: '#002309' }}>
                  Required Documents
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    10th and 12th mark sheets and certificates
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    Degree certificate and consolidated mark sheet
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    Transfer certificate from last institution attended
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    Community certificate (for reserved category candidates)
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    Income certificate (for scholarship purposes)
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    Aadhar card and passport-size photographs
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    Migration certificate (if applicable)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Structure Section */}
      <section id="curriculum-structure" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: '#006837' }}>
              Curriculum Structure
            </h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #7cb983, #006837)' }}></div>
            <p className="text-xl text-gray-600">
              Comprehensive syllabus aligned with NCTE norms and NEP 2020 guidelines
            </p>
          </div>

          {/* Semester Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveSemester('semester1')}
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                activeSemester === 'semester1'
                  ? 'shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={activeSemester === 'semester1' ? {
                backgroundColor: '#006837',
                color: '#ffffff'
              } : {}}
            >
              Semester I
            </button>
            <button
              onClick={() => setActiveSemester('semester2')}
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                activeSemester === 'semester2'
                  ? 'shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={activeSemester === 'semester2' ? {
                backgroundColor: '#006837',
                color: '#ffffff'
              } : {}}
            >
              Semester II
            </button>
            <button
              onClick={() => setActiveSemester('semester3')}
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                activeSemester === 'semester3'
                  ? 'shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={activeSemester === 'semester3' ? {
                backgroundColor: '#006837',
                color: '#ffffff'
              } : {}}
            >
              Semester III
            </button>
            <button
              onClick={() => setActiveSemester('semester4')}
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                activeSemester === 'semester4'
                  ? 'shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={activeSemester === 'semester4' ? {
                backgroundColor: '#006837',
                color: '#ffffff'
              } : {}}
            >
              Semester IV
            </button>
          </div>

          {/* Semester Content */}
          <div className="space-y-6">
            {/* Semester I */}
            {activeSemester === 'semester1' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Course 1 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>101</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Childhood and Growing Up
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Understanding child development, learning theories, and educational psychology principles for effective teaching.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 4</span>
                      <span>Theory + Practical</span>
                    </div>
                  </div>
                </div>

                {/* Course 2 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>102</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Contemporary India and Education
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Exploring the Indian education system, policies, NEP 2020, and contemporary challenges in education.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 4</span>
                      <span>Theory</span>
                    </div>
                  </div>
                </div>

                {/* Course 3 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">CS</div>
                      <div>103</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Pedagogy of Computer Science - Part I
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Foundations of computer science teaching, curriculum design, and instructional strategies for programming education.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 4</span>
                      <span>Theory + Practical</span>
                    </div>
                  </div>
                </div>

                {/* Course 4 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>104</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Language Across the Curriculum
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Integration of language skills in teaching technical subjects including computer science effectively.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 2</span>
                      <span>Theory</span>
                    </div>
                  </div>
                </div>

                {/* Course 5 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>105</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Reading and Reflecting on Texts
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Critical analysis of educational texts and development of reflective teaching practices.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 2</span>
                      <span>Practical</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Semester II */}
            {activeSemester === 'semester2' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Course 1 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>201</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Learning and Teaching
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Advanced learning theories, teaching methodologies, and classroom management strategies for educators.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 4</span>
                      <span>Theory + Practical</span>
                    </div>
                  </div>
                </div>

                {/* Course 2 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>202</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Assessment for Learning
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Formative and summative assessment techniques, evaluation methods, and student performance analysis.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 4</span>
                      <span>Theory + Practical</span>
                    </div>
                  </div>
                </div>

                {/* Course 3 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">CS</div>
                      <div>203</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Pedagogy of Computer Science - Part II
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Advanced programming pedagogy, teaching data structures, algorithms, and database concepts effectively.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 4</span>
                      <span>Theory + Practical</span>
                    </div>
                  </div>
                </div>

                {/* Course 4 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>204</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Drama and Art in Education
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Creative teaching methods using drama, art, and multimedia for enhanced learning experiences.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 2</span>
                      <span>Practical</span>
                    </div>
                  </div>
                </div>

                {/* Course 5 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>205</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      ICT in Education
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Integration of Information and Communication Technology in teaching-learning process and digital literacy.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 2</span>
                      <span>Practical</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Semester III */}
            {activeSemester === 'semester3' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Course 1 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>301</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Knowledge and Curriculum
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Curriculum development theories, knowledge construction, and pedagogical content knowledge.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 4</span>
                      <span>Theory</span>
                    </div>
                  </div>
                </div>

                {/* Course 2 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>302</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Gender, School and Society
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Understanding gender dynamics in education, inclusive practices, and social diversity in learning environments.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 4</span>
                      <span>Theory</span>
                    </div>
                  </div>
                </div>

                {/* Course 3 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">CS</div>
                      <div>303</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Teaching of Web Technologies
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Pedagogical approaches for teaching HTML, CSS, JavaScript, and responsive web design concepts.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 4</span>
                      <span>Theory + Practical</span>
                    </div>
                  </div>
                </div>

                {/* Course 4 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>304</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      School Internship - Phase I
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Initial teaching practice in partner schools with mentorship and supervised teaching sessions.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 8</span>
                      <span>Practical</span>
                    </div>
                  </div>
                </div>

                {/* Course 5 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">CS</div>
                      <div>305</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Computational Thinking Pedagogy
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Teaching problem-solving, logical reasoning, and algorithmic thinking skills to secondary school learners.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 2</span>
                      <span>Theory + Practical</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Semester IV */}
            {activeSemester === 'semester4' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Course 1 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>401</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Creating an Inclusive School
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Strategies for inclusive education, addressing diverse learning needs, and special education approaches.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 4</span>
                      <span>Theory</span>
                    </div>
                  </div>
                </div>

                {/* Course 2 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>402</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Understanding the Self
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Self-reflection, emotional intelligence, and professional ethics for educators.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 2</span>
                      <span>Theory + Practical</span>
                    </div>
                  </div>
                </div>

                {/* Course 3 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">CS</div>
                      <div>403</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Emerging Technologies in Education
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Teaching AI, Machine Learning concepts, cybersecurity awareness, and emerging tech to school learners.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 4</span>
                      <span>Theory + Practical</span>
                    </div>
                  </div>
                </div>

                {/* Course 4 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>404</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      School Internship - Phase II
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Extended teaching practice with full classroom responsibilities and comprehensive teaching experience.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 16</span>
                      <span>Practical</span>
                    </div>
                  </div>
                </div>

                {/* Course 5 */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl"
                       style={{ backgroundColor: '#006837' }}>
                    <div className="text-center">
                      <div className="text-xs">EDU</div>
                      <div>405</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                      Action Research Project
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base break-words">
                      Independent research project addressing real classroom challenges in computer science education.
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                      <span>Credits: 4</span>
                      <span>Research + Viva</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Career Prospects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#002309' }}>
              Career Prospects
            </h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #7cb983, #006837)' }}></div>
            <p className="text-xl text-gray-600">
              Diverse opportunities await B.Ed Computer Science graduates in the education sector
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Secondary School Teacher */}
            <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #002309 0%, #006837 100%)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">
                Secondary School Teacher
              </h3>
              <p className="text-gray-200 text-center leading-relaxed">
                Teach Computer Science and programming in CBSE, ICSE, and State Board schools across India.
              </p>
            </div>

            {/* Higher Secondary Teacher */}
            <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #002309 0%, #006837 100%)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">
                Higher Secondary Teacher
              </h3>
              <p className="text-gray-200 text-center leading-relaxed">
                Prepare students for competitive examinations and higher education in Computer Science and IT fields.
              </p>
            </div>

            {/* Curriculum Developer */}
            <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #002309 0%, #006837 100%)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">
                Curriculum Developer
              </h3>
              <p className="text-gray-200 text-center leading-relaxed">
                Design and develop Computer Science curriculum materials for educational institutions and publishers.
              </p>
            </div>

            {/* E-Learning Content Creator */}
            <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #002309 0%, #006837 100%)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">
                E-Learning Content Creator
              </h3>
              <p className="text-gray-200 text-center leading-relaxed">
                Create digital learning content, coding tutorials, and interactive educational materials for EdTech platforms.
              </p>
            </div>

            {/* Educational Technology Specialist */}
            <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #002309 0%, #006837 100%)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">
                Educational Technology Specialist
              </h3>
              <p className="text-gray-200 text-center leading-relaxed">
                Lead technology integration initiatives in schools, training educators in digital tools and platforms.
              </p>
            </div>

            {/* Higher Education */}
            <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #002309 0%, #006837 100%)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">
                Higher Education (M.Ed/Ph.D)
              </h3>
              <p className="text-gray-200 text-center leading-relaxed">
                Pursue advanced degrees and research in education, computer science education, or educational technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#002309' }}>
              Campus Facilities
            </h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #7cb983, #006837)' }}></div>
            <p className="text-xl text-gray-600">
              World-class infrastructure supporting your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Computer Lab */}
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #002309 0%, #006837 100%)' }}>
                <h3 className="text-3xl font-bold mb-4">Computer Lab</h3>
                <p className="text-xl font-semibold text-center">Advanced Computer Lab</p>
              </div>
            </div>

            {/* Digital Library */}
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                <h3 className="text-3xl font-bold mb-4">Digital Library</h3>
                <p className="text-xl font-semibold text-center">Digital Library</p>
              </div>
            </div>

            {/* Smart Classrooms */}
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white transition-transform hover:scale-105"
                   style={{ background: 'linear-gradient(135deg, #7cb983 0%, #006837 100%)' }}>
                <h3 className="text-3xl font-bold mb-4">Smart Classrooms</h3>
                <p className="text-xl font-semibold text-center">Smart Learning Studios</p>
              </div>
            </div>

            {/* Micro Teaching */}
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #002309 0%, #006837 100%)' }}>
                <h3 className="text-3xl font-bold mb-4">Micro Teaching</h3>
                <p className="text-xl font-semibold text-center">Micro-Teaching Lab</p>
              </div>
            </div>

            {/* Programming Lab */}
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                <h3 className="text-3xl font-bold mb-4">Programming Lab</h3>
                <p className="text-xl font-semibold text-center">Programming Lab</p>
              </div>
            </div>

            {/* Seminar Hall */}
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white transition-transform hover:scale-105"
                   style={{ background: 'linear-gradient(135deg, #7cb983 0%, #006837 100%)' }}>
                <h3 className="text-3xl font-bold mb-4">Seminar Hall</h3>
                <p className="text-xl font-semibold text-center">Seminar Hall</p>
              </div>
            </div>

            {/* Resource Center */}
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #002309 0%, #006837 100%)' }}>
                <h3 className="text-3xl font-bold mb-4">Resource Center</h3>
                <p className="text-xl font-semibold text-center">Resource Center</p>
              </div>
            </div>

            {/* Hostel */}
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white transition-transform hover:scale-105" style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                <h3 className="text-3xl font-bold mb-4">Hostel</h3>
                <p className="text-xl font-semibold text-center">Hostel Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#002309' }}>
              Admission Process
            </h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #7cb983, #006837)' }}></div>
            <p className="text-xl text-gray-600">
              Simple steps to begin your journey as a Computer Science educator
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
                 style={{ background: 'linear-gradient(to bottom, #7cb983, #006837)' }}></div>

            {/* Step 1 - Left */}
            <div className="relative mb-12 lg:mb-20">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="flex-shrink-0 z-10 mb-6 lg:mb-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                       style={{ backgroundColor: '#7cb983' }}>
                    1
                  </div>
                </div>
                <div className="w-full lg:w-5/12 lg:pr-12 lg:order-first">
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#002309' }}>
                      Check Eligibility
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Verify that you meet the academic requirements for B.Ed Computer Science admission, including graduation with CS/IT as a major subject.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block w-5/12"></div>
              </div>
            </div>

            {/* Step 2 - Right */}
            <div className="relative mb-12 lg:mb-20">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="hidden lg:block w-5/12"></div>
                <div className="flex-shrink-0 z-10 mb-6 lg:mb-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                       style={{ backgroundColor: '#7cb983' }}>
                    2
                  </div>
                </div>
                <div className="w-full lg:w-5/12 lg:pl-12">
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#002309' }}>
                      Online Application
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Fill the online application form on our website with accurate personal and academic details along with required documents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Left */}
            <div className="relative mb-12 lg:mb-20">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="flex-shrink-0 z-10 mb-6 lg:mb-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                       style={{ backgroundColor: '#7cb983' }}>
                    3
                  </div>
                </div>
                <div className="w-full lg:w-5/12 lg:pr-12 lg:order-first">
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#002309' }}>
                      Document Verification
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Submit original documents for verification at the college admission office as per the scheduled date.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block w-5/12"></div>
              </div>
            </div>

            {/* Step 4 - Right */}
            <div className="relative mb-12 lg:mb-20">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="hidden lg:block w-5/12"></div>
                <div className="flex-shrink-0 z-10 mb-6 lg:mb-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                       style={{ backgroundColor: '#7cb983' }}>
                    4
                  </div>
                </div>
                <div className="w-full lg:w-5/12 lg:pl-12">
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#002309' }}>
                      Counseling Process
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Attend the counseling session conducted by TNTEU or the college for seat allocation based on merit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 - Left */}
            <div className="relative mb-12 lg:mb-20">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="flex-shrink-0 z-10 mb-6 lg:mb-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                       style={{ backgroundColor: '#7cb983' }}>
                    5
                  </div>
                </div>
                <div className="w-full lg:w-5/12 lg:pr-12 lg:order-first">
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#002309' }}>
                      Fee Payment
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Complete the admission by paying the prescribed fee as per government norms and receive your admission confirmation.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block w-5/12"></div>
              </div>
            </div>

            {/* Step 6 - Right */}
            <div className="relative">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="hidden lg:block w-5/12"></div>
                <div className="flex-shrink-0 z-10 mb-6 lg:mb-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                       style={{ backgroundColor: '#7cb983' }}>
                    6
                  </div>
                </div>
                <div className="w-full lg:w-5/12 lg:pl-12">
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#002309' }}>
                      Begin Your Journey
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Attend the orientation program and commence your transformative journey to become a Computer Science educator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#002309' }}>
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #7cb983, #006837)' }}></div>
            <p className="text-xl text-gray-600">
              Find answers to common queries about B.Ed Computer Science program
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-gray-50 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What is the eligibility for B.Ed Computer Science admission?
                </h3>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  Candidates must hold a Bachelor&apos;s degree (B.Sc Computer Science/BCA/B.Tech/MCA or equivalent) with at least 50% marks (45% for SC/ST/OBC/PWD candidates) with Computer Science, Information Technology, or Computer Applications as a major subject at the degree level.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gray-50 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What is the duration of the B.Ed Computer Science program?
                </h3>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  The B.Ed Computer Science program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE norms. Each semester includes theory papers, practical sessions, and school internships.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gray-50 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What programming languages are covered in the curriculum?
                </h3>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  The curriculum covers teaching methodologies for programming languages including Python, Java, C++, and web technologies (HTML, CSS, JavaScript). Learners also study pedagogical approaches for teaching database management, data structures, and computational thinking.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gray-50 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Can I teach in CBSE and ICSE schools after completing this program?
                </h3>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  Yes, B.Ed Computer Science graduates are eligible to teach in schools following CBSE, ICSE, and State Board curricula at secondary and higher secondary levels across India. The degree is nationally recognized by NCTE.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gray-50 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What are the career opportunities after B.Ed Computer Science?
                </h3>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  Graduates can become Computer Science teachers in government and private schools, pursue higher education (M.Ed, Ph.D), work as curriculum developers, educational technology specialists, e-learning content creators, or join educational administration roles.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gray-50 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Is JKKN College of Education NCTE approved?
                </h3>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), ensuring your degree is recognized nationwide.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gray-50 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  What is the fee structure for B.Ed Computer Science?
                </h3>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  The fee structure is as per Tamil Nadu government norms. Various scholarships are available for eligible candidates including government scholarships for SC/ST/OBC and minority communities. Contact the admission office for detailed fee information.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gray-50 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Does the program include school internship?
                </h3>
                <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  Yes, the program includes extensive school internship spread across Semester III and Semester IV. Learners gain hands-on teaching experience in partner schools under the mentorship of experienced Learning Facilitators, totaling 16-20 weeks of practical teaching.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #7cb983 0%, #006837 100%)' }}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Shape the Future of Technology Education?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-white leading-relaxed">
            Join JKKN College of Education and embark on a rewarding career as a Computer Science educator. Applications are now open for 2025-26 academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg font-semibold text-lg transition-transform hover:scale-105 bg-white"
                    style={{ color: '#7cb983' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Apply Online Now
            </Link>
            <a href="tel:+919345855001" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg font-semibold text-lg border-3 text-white hover:text-[#7cb983] transition-all hover:bg-white"
                    style={{ borderColor: '#ffffff', borderWidth: '3px' }}>
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
