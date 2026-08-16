'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EducationEnquiryForm from "@/components/lead/EducationEnquiryForm";

export default function PhysicsDepartment() {
  const [activeSemester, setActiveSemester] = useState('semester1')

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%)] lg:bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%),url(/images/B.Ed-Physics-Hero-Banner-Image.webp)] bg-cover bg-center">
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
                <span style={{ color: '#7cb983' }}>Physics</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#ffffff' }}>
                Bachelor of Education in Physics
              </h2>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Transform your physics expertise into an inspiring teaching career. Our comprehensive 2-year program equips you with innovative pedagogical techniques, hands-on laboratory skills, and deep subject knowledge in Mechanics, Electromagnetism, Optics, and Modern Physics.
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
                  <div className="text-4xl font-bold mb-2" style={{ color: '#7cb983' }}>95%</div>
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
                src="/images/B.Ed-Physics-Hero-Banner-Image.webp"
                alt="B.Ed Physics Department"
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
            Discover the pathway to becoming a certified Physics educator
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
                    he Bachelor of Education (B.Ed) in Physics at JKKN College of Education is a comprehensive two-year professional program designed to transform physics graduates into skilled and passionate educators. Approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), this program combines theoretical foundations with practical teaching experiences to prepare you for a rewarding career in physics education.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                Our curriculum aligns with the National Education Policy (NEP) 2020, emphasizing experiential learning, critical thinking, and the integration of technology in science education. You will master innovative teaching methodologies, laboratory demonstration techniques, and assessment strategies that make physics concepts accessible and engaging for Learners at secondary and higher secondary levels.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                The program covers essential areas including Classical Mechanics, Thermodynamics, Electromagnetism, Optics, Quantum Physics, and Modern Physics education. Through micro-teaching sessions, simulated experiments, and intensive school internships, you will develop the confidence and competence to inspire the next generation of scientists and engineers.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                JKKN College of Education provides state-of-the-art physics laboratories, smart Learning Studios equipped with interactive technology, and dedicated Learning Facilitators who bring decades of experience in science education. Our strong network of partner schools ensures hands-on teaching practice in diverse educational settings.
              </p>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Duration */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  DURATION
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  2 Years
                </div>
                <div className="text-sm" style={{ color: '#006837' }}>
                  (4 Semesters)
                </div>
              </div>

              {/* Total Seats */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  TOTAL SEATS
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  50 Seats
                </div>
              </div>

              {/* Degree Awarded */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  DEGREE AWARDED
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  B.Ed (Physics)
                </div>
              </div>

              {/* Medium */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  MEDIUM
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  English
                </div>
              </div>

              {/* Affiliation */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  AFFILIATION
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  TNTEU, Chennai
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
              What makes our B.Ed Physics program stand out
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hands-On Laboratory Training */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Hands-On Laboratory Training
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Extensive practical sessions in well-equipped physics laboratories to master experimental techniques, demonstrations, and safety protocols for effective science teaching.
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
                Learn from experienced physics educators and researchers who bring real-world expertise, innovative teaching methods, and passion for science education to every session.
              </p>
            </div>

            {/* Technology-Integrated Pedagogy */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Technology-Integrated Pedagogy
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Master the use of simulations, virtual labs, interactive whiteboards, and digital tools to make abstract physics concepts visual, engaging, and accessible to all Learners.
              </p>
            </div>

            {/* Intensive School Internship */}
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
                Intensive School Internship
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Gain real-world teaching experience through 16+ weeks of supervised internship in partner schools, teaching physics to classes 9-12 under expert mentor guidance.
              </p>
            </div>

            {/* NEP 2020 Aligned Curriculum */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                NEP 2020 Aligned Curriculum
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Updated syllabus incorporating competency-based education, multidisciplinary approaches, inquiry-based learning, and contemporary physics discoveries for holistic preparation.
              </p>
            </div>

            {/* Scholarship Support */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Scholarship Support
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Various government and institutional scholarships available for eligible candidates to ensure accessible, quality education for all deserving Learners pursuing science education.
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
              Requirements for admission to B.Ed Physics program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Academic Requirements */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#10b981' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#7cb983' }}>
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
                    Bachelor's degree in Physics (B.Sc Physics) or equivalent from a recognized university
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
                    Physics as a major subject at degree level (minimum 3 years of study)
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
                <h3 className="text-2xl font-bold" style={{ color: '#7cb983' }}>
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
                    B.Sc degree certificate and consolidated mark sheet
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
      <section id="curriculum-structure" className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#006837' }}>
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
                backgroundColor: activeSemester === 'semester1' ? '#006837' : 'transparent',
                color: activeSemester === 'semester1' ? '#ffffff' : '#006837',
                boxShadow: activeSemester === 'semester1' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                border: activeSemester === 'semester1' ? 'none' : '1px solid #e5e7eb'
              }}
            >
              Semester I
            </button>
            <button
              onClick={() => setActiveSemester('semester2')}
              className="px-8 py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: activeSemester === 'semester2' ? '#006837' : 'transparent',
                color: activeSemester === 'semester2' ? '#ffffff' : '#006837',
                boxShadow: activeSemester === 'semester2' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                border: activeSemester === 'semester2' ? 'none' : '1px solid #e5e7eb'
              }}
            >
              Semester II
            </button>
            <button
              onClick={() => setActiveSemester('semester3')}
              className="px-8 py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: activeSemester === 'semester3' ? '#006837' : 'transparent',
                color: activeSemester === 'semester3' ? '#ffffff' : '#006837',
                boxShadow: activeSemester === 'semester3' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                border: activeSemester === 'semester3' ? 'none' : '1px solid #e5e7eb'
              }}
            >
              Semester III
            </button>
            <button
              onClick={() => setActiveSemester('semester4')}
              className="px-8 py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: activeSemester === 'semester4' ? '#006837' : 'transparent',
                color: activeSemester === 'semester4' ? '#ffffff' : '#006837',
                boxShadow: activeSemester === 'semester4' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                border: activeSemester === 'semester4' ? 'none' : '1px solid #e5e7eb'
              }}
            >
              Semester IV
            </button>
          </div>

          {/* Semester I Content */}
          {activeSemester === 'semester1' && (
            <div className="space-y-6">
              {/* Course 1 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">101</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Childhood and Growing Up
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Understanding child development, adolescent psychology, learning theories, and educational psychology principles for effective science teaching.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">102</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Contemporary India and Education
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Exploring the Indian education system, national policies, constitutional provisions, and contemporary challenges in science education.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory</span>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">PHY</div>
                    <div className="text-lg">103</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Pedagogy of Physical Science - Part I
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Foundations of physics teaching, curriculum design, instructional strategies, and teaching methods for mechanics, thermodynamics, and waves.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 4 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">104</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Language Across the Curriculum
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Integration of language skills in teaching physics, scientific vocabulary, mathematical communication, and effective explanation strategies.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Theory</span>
                  </div>
                </div>
              </div>

              {/* Course 5 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">105</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Reading and Reflecting on Texts
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Critical analysis of educational and scientific texts, research papers, and development of reflective practices in teacher education.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Theory + Assignment</span>
                  </div>
                </div>
              </div>

              {/* Course 6 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">PHY</div>
                    <div className="text-lg">106</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Physics Laboratory Techniques
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Hands-on training in physics experiments, laboratory management, safety protocols, and demonstration techniques for effective teaching.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Practical</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Semester II Content */}
          {activeSemester === 'semester2' && (
            <div className="space-y-6">
              {/* Course 1 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">201</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Learning and Teaching
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    In-depth study of learning theories, teaching-learning processes, constructivist approaches, and differentiated instruction strategies for physics education.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">PHY</div>
                    <div className="text-lg">202</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Pedagogy of Physical Science - Part II
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Advanced teaching methods for electromagnetism, optics, modern physics, and integration of technology in physics instruction.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">203</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Assessment for Learning
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Formative and summative assessment methods, rubric development, question paper design, and continuous evaluation in physics education.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 4 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">204</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Drama and Art in Education
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Using creative arts, demonstrations, role-play, and dramatization to make physics concepts engaging and memorable for diverse learners.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 5 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">205</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    ICT in Education
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Integration of simulations, virtual labs, interactive tools, and educational technology for enhanced physics teaching and learning.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 6 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">PHY</div>
                    <div className="text-lg">206</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Micro-Teaching Practice
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Simulated teaching sessions focusing on specific teaching skills, peer feedback, video analysis, and iterative improvement in physics instruction.
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
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">301</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Knowledge and Curriculum
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Philosophy of knowledge, curriculum development theories, syllabus design for physics education, and alignment with national frameworks.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory</span>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">302</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Gender, School and Society
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Understanding gender issues in science education, promoting inclusive practices, and addressing stereotypes in physics teaching.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory</span>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">303</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Inclusive Education
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Strategies for teaching physics to learners with diverse needs, adapting experiments for accessibility, and creating inclusive Learning Studios.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 4 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">INT</div>
                    <div className="text-lg">304</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    School Internship - Phase I
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Eight weeks of supervised teaching practice in partner schools, developing lesson plans, conducting experiments, and managing physics laboratories.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 8</span>
                    <span>Internship</span>
                  </div>
                </div>
              </div>

              {/* Course 5 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">PHY</div>
                    <div className="text-lg">305</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Physics Project Work
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Designing and executing action research projects, innovative teaching material development, and physics education improvement initiatives.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Project</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Semester IV Content */}
          {activeSemester === 'semester4' && (
            <div className="space-y-6">
              {/* Course 1 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">401</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Creating an Inclusive School
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Developing school-wide inclusive practices, universal design for learning in physics, and collaborative teaching approaches.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">402</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Understanding the Self
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Self-awareness, reflective practice, professional ethics, stress management, and developing teacher identity in science education.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 2</span>
                    <span>Theory + Practical</span>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">403</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Optional Paper: Environmental Education
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Teaching environmental physics, sustainability concepts, climate science, and integrating environmental awareness in physics education.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Theory</span>
                  </div>
                </div>
              </div>

              {/* Course 4 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">INT</div>
                    <div className="text-lg">404</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    School Internship - Phase II
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Eight weeks of advanced teaching practice, taking full responsibility for physics classes, laboratory sessions, and assessment activities.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 8</span>
                    <span>Internship</span>
                  </div>
                </div>
              </div>

              {/* Course 5 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white font-bold"
                     style={{ background: 'linear-gradient(135deg, #006837 0%, #7cb983 100%)' }}>
                  <div className="text-center">
                    <div className="text-xs">EDU</div>
                    <div className="text-lg">405</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                    Action Research Project
                  </h3>
                  <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#002309' }}>
                    Conducting classroom-based research on physics teaching, analyzing data, presenting findings, and contributing to physics education scholarship.
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
                    <span>Credits: 4</span>
                    <span>Research Project</span>
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
              Explore rewarding career opportunities after B.Ed Physics
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
                Teach Physics and General Science in government and private schools for classes 9-10, building strong foundations for future scientists.
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
                Prepare students for competitive examinations like JEE and NEET by teaching Physics at +2 level in CBSE, ICSE, and State Board schools.
              </p>
            </div>

            {/* Coaching Institute Faculty */}
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
                Coaching Institute Faculty
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Join reputed coaching centers teaching Physics for IIT-JEE, NEET, Olympiads, and other competitive examinations with attractive packages.
              </p>
            </div>

            {/* Curriculum Developer */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(14, 116, 144, 0.4)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Curriculum Developer
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Design and develop physics curriculum, textbooks, digital content, and learning materials for educational institutions and publishers.
              </p>
            </div>

            {/* Science Communicator */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(14, 116, 144, 0.4)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-1 16a2 2 0 002 2h8a2 2 0 002-2L17 4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Science Communicator
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Work with museums, science centers, media houses, and educational technology companies to popularize physics and inspire young minds.
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
                Pursue advanced degrees in Education, Physics Education, or Science Education and become college-level educators and researchers.
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
              Why Choose JKKN for B.Ed Physics?
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Discover the advantages of pursuing your B.Ed Physics at JKKN College of Education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 55+ Years */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                     style={{ backgroundColor: '#7cb983' }}>
                  1
                </div>
                <h3 className="text-xl font-bold pt-2" style={{ color: '#002309' }}>
                  55+ Years of Educational Excellence
                </h3>
              </div>
              <p className="leading-relaxed ml-16" style={{ color: '#006837' }}>
                Part of JKKN Institutions with a proven legacy of transforming lives through progressive education since 1969.
              </p>
            </div>

            {/* 95% Placement */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                     style={{ backgroundColor: '#7cb983' }}>
                  2
                </div>
                <h3 className="text-xl font-bold pt-2" style={{ color: '#002309' }}>
                  98% Placement Success Rate
                </h3>
              </div>
              <p className="leading-relaxed ml-16" style={{ color: '#006837' }}>
                Strong placement record with graduates securing positions in government schools, CBSE/ICSE schools, and prestigious coaching institutes.
              </p>
            </div>

            {/* Physics Labs */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                     style={{ backgroundColor: '#7cb983' }}>
                  3
                </div>
                <h3 className="text-xl font-bold pt-2" style={{ color: '#002309' }}>
                  State-of-the-Art Physics Labs
                </h3>
              </div>
              <p className="leading-relaxed ml-16" style={{ color: '#006837' }}>
                Well-equipped laboratories with modern instruments, simulation software, and digital tools for comprehensive practical training.
              </p>
            </div>

            {/* Partner Schools */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                     style={{ backgroundColor: '#7cb983' }}>
                  4
                </div>
                <h3 className="text-xl font-bold pt-2" style={{ color: '#002309' }}>
                  Extensive Partner School Network
                </h3>
              </div>
              <p className="leading-relaxed ml-16" style={{ color: '#006837' }}>
                Tie-ups with 50+ schools for internship providing diverse teaching experiences in urban, rural, government, and private settings.
              </p>
            </div>

            {/* Competitive Exam */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                     style={{ backgroundColor: '#7cb983' }}>
                  5
                </div>
                <h3 className="text-xl font-bold pt-2" style={{ color: '#002309' }}>
                  Competitive Exam Preparation Support
                </h3>
              </div>
              <p className="leading-relaxed ml-16" style={{ color: '#006837' }}>
                Special training modules for TET, CTET, TRB, and other competitive examinations ensuring high success rates for our graduates.
              </p>
            </div>

            {/* Affordable */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                     style={{ backgroundColor: '#7cb983' }}>
                  6
                </div>
                <h3 className="text-xl font-bold pt-2" style={{ color: '#002309' }}>
                  Affordable Quality Education
                </h3>
              </div>
              <p className="leading-relaxed ml-16" style={{ color: '#006837' }}>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Physics Lab */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)' }}>
              <div className="p-8 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>
                  Physics Lab
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Physics Laboratory
                </p>
              </div>
            </div>

            {/* Digital Library */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #6ba872 100%)' }}>
              <div className="p-8 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>
                  Digital Library
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Digital Library
                </p>
              </div>
            </div>

            {/* Micro Teaching */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #006837 100%)' }}>
              <div className="p-8 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>
                  Micro Teaching
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Micro-Teaching Lab
                </p>
              </div>
            </div>

            {/* Smart Studio */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)' }}>
              <div className="p-8 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>
                  Smart Studio
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Smart Learning Studio
                </p>
              </div>
            </div>

            {/* Computer Lab */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)' }}>
              <div className="p-8 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>
                  Computer Lab
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Computer Lab
                </p>
              </div>
            </div>

            {/* Seminar Hall */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #6ba872 100%)' }}>
              <div className="p-8 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>
                  Seminar Hall
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Seminar Hall
                </p>
              </div>
            </div>

            {/* Resource Center */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)' }}>
              <div className="p-8 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>
                  Resource Center
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Resource Center
                </p>
              </div>
            </div>

            {/* Hostel */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #7cb983 0%, #6ba872 100%)' }}>
              <div className="p-8 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#ffffff' }}>
                  Hostel
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
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
              Simple steps to begin your journey as a Physics educator
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Step 1 - Check Eligibility (Left) */}
              <div className="flex flex-col lg:flex-row items-center mb-0">
                <div className="flex flex-col items-center mb-4 lg:mb-0 lg:w-2/12">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10"
                       style={{ backgroundColor: '#7cb983' }}>
                    1
                  </div>
                  <div className="w-0.5 h-24 lg:h-32" style={{ backgroundColor: '#7cb983' }}></div>
                </div>
                <div className="w-full lg:w-5/12 lg:pr-8 lg:order-first">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                      Check Eligibility
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Verify you meet the academic requirements: B.Sc Physics or equivalent degree with minimum 50% marks (45% for reserved categories) with Physics as major subject.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>

              {/* Step 2 - Online Application (Right) */}
              <div className="flex flex-col lg:flex-row items-center mb-0">
                <div className="hidden lg:block lg:w-5/12"></div>
                <div className="flex flex-col items-center mb-4 lg:mb-0 lg:w-2/12">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10"
                       style={{ backgroundColor: '#7cb983' }}>
                    2
                  </div>
                  <div className="w-0.5 h-24 lg:h-32" style={{ backgroundColor: '#7cb983' }}></div>
                </div>
                <div className="w-full lg:w-5/12 lg:pl-8">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                      Online Application
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Complete the online application form on our official website or TNTEU portal. Upload required documents and pay the application fee.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 - Document Verification (Left) */}
              <div className="flex flex-col lg:flex-row items-center mb-0">
                <div className="flex flex-col items-center mb-4 lg:mb-0 lg:w-2/12">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10"
                       style={{ backgroundColor: '#7cb983' }}>
                    3
                  </div>
                  <div className="w-0.5 h-24 lg:h-32" style={{ backgroundColor: '#7cb983' }}></div>
                </div>
                <div className="w-full lg:w-5/12 lg:pr-8 lg:order-first">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                      Document Verification
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Submit original documents for verification at the college admission office. Ensure all certificates are attested and complete.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>

              {/* Step 4 - Counseling & Seat Allotment (Right) */}
              <div className="flex flex-col lg:flex-row items-center mb-0">
                <div className="hidden lg:block lg:w-5/12"></div>
                <div className="flex flex-col items-center mb-4 lg:mb-0 lg:w-2/12">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10"
                       style={{ backgroundColor: '#7cb983' }}>
                    4
                  </div>
                  <div className="w-0.5 h-24 lg:h-32" style={{ backgroundColor: '#7cb983' }}></div>
                </div>
                <div className="w-full lg:w-5/12 lg:pl-8">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                      Counseling & Seat Allotment
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Attend counseling session as per TNTEU schedule. Seats are allotted based on merit, entrance exam scores, and reservation norms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 - Fee Payment & Enrollment (Left) */}
              <div className="flex flex-col lg:flex-row items-center mb-0">
                <div className="flex flex-col items-center mb-4 lg:mb-0 lg:w-2/12">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10"
                       style={{ backgroundColor: '#7cb983' }}>
                    5
                  </div>
                  <div className="w-0.5 h-24 lg:h-32" style={{ backgroundColor: '#7cb983' }}></div>
                </div>
                <div className="w-full lg:w-5/12 lg:pr-8 lg:order-first">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                      Fee Payment & Enrollment
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Pay the prescribed fees within the stipulated time. Complete enrollment formalities and receive your admission confirmation.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>

              {/* Step 6 - Orientation & Classes Begin (Right) */}
              <div className="flex flex-col lg:flex-row items-center">
                <div className="hidden lg:block lg:w-5/12"></div>
                <div className="flex flex-col items-center mb-4 lg:mb-0 lg:w-2/12">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10"
                       style={{ backgroundColor: '#7cb983' }}>
                    6
                  </div>
                  <div className="w-0.5 h-16" style={{ backgroundColor: '#7cb983' }}></div>
                </div>
                <div className="w-full lg:w-5/12 lg:pl-8">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Find answers to common queries about B.Ed Physics program
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What is the eligibility for B.Ed Physics admission?
                </h3>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Candidates must hold a Bachelor's degree in Physics (B.Sc Physics) or equivalent degree with Physics as a major subject from a recognized university with minimum 50% aggregate marks. Reserved category candidates (SC/ST/OBC/PWD) require minimum 45% marks. Candidates appearing for final year degree examinations may also apply provisionally.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What is the duration of B.Ed Physics program?
                </h3>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  The B.Ed Physics program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, practical laboratory sessions, and school internship components as mandated by TNTEU guidelines.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What subjects can I teach after completing B.Ed Physics?
                </h3>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  After completing B.Ed Physics, you are qualified to teach Physics, Physical Science, and related science subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  Is JKKN College of Education NCTE approved for B.Ed Physics?
                </h3>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Physics program meets all regulatory standards for teacher education in India and is recognized for government teaching positions.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What practical training is included in the B.Ed Physics program?
                </h3>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  The B.Ed Physics program includes extensive practical training through micro-teaching sessions, physics laboratory demonstrations, simulated teaching, and a mandatory 16-week school internship program. During internship, Learners teach Physics in actual Learning Studios, conduct experiments, and develop assessment materials under expert mentor guidance.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What competitive exams can I appear for after B.Ed Physics?
                </h3>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  After completing B.Ed Physics, you can appear for TET (Teacher Eligibility Test), CTET (Central Teacher Eligibility Test), TRB (Teachers Recruitment Board) examinations, KVS (Kendriya Vidyalaya Sangathan), NVS (Navodaya Vidyalaya Samiti), and various state-level teacher recruitment examinations for Physics teaching positions.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  Are there hostel facilities available for B.Ed Physics students?
                </h3>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Yes, JKKN College of Education provides separate hostel facilities for both boys and girls with comfortable accommodation, mess facilities, Wi-Fi connectivity, and 24/7 security. The hostels are located within the campus premises for convenient access to all academic facilities including physics laboratories.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  Can I pursue B.Ed Physics after B.Sc with distance education?
                </h3>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                <p className="leading-relaxed" style={{ color: '#006837' }}>
                  Yes, candidates with B.Sc Physics degree from UGC-recognized distance education programs are eligible for B.Ed Physics admission, provided they meet the minimum percentage criteria and other eligibility requirements as specified by NCTE and TNTEU norms.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#7cb983' }}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white leading-tight">
            Ready to Inspire the Next Generation of Scientists?
          </h2>
          <p className="text-lg leading-relaxed mb-10 text-white opacity-95">
            Join JKKN College of Education's B.Ed Physics program and transform your passion for physics into a rewarding teaching career. Applications for 2025-26 batch are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-transform hover:scale-105"
                    style={{ backgroundColor: '#ffffff', color: '#7cb983' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Apply Online
            </Link>
            <a href="tel:+919345855001" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 border-white text-white transition-all hover:bg-white hover:text-orange-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Admission
            </a>
          </div>
        </div>
      </section>

      {/* DEP-34 - enquiry form. Posts to the CRM from the server; a browser cannot POST there */}
      {/* directly - the endpoint sends no Access-Control-Allow-Origin header. */}
      <section className="bg-gradient-to-br from-[#0b6d41] to-[#12a15f] py-16">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">Get a Call Back</h2>
              <p className="text-white/80 text-center text-sm mb-8">Leave your details and our admission team will contact you within 24 hours.</p>
              <EducationEnquiryForm sourcePage="dept-physics" />
          </div>
      </section>

      <Footer />
    </>
  )
}
