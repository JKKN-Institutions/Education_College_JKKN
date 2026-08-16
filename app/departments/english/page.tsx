'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CurriculumSection from './CurriculumSection'
import AdmissionFAQ from './AdmissionFAQ'
import EducationEnquiryForm from "@/components/lead/EducationEnquiryForm";
import { DEFAULT_PROGRAMME_BY_DEPARTMENT } from "@/lib/education-programmes";

export default function EnglishDepartment() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%)] lg:bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%),url(/images/B.Ed-English-Hero-Banner-Image.webp)] bg-cover bg-center">
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
                <span style={{ color: '#7cb983' }}>English</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#ffffff' }}>
                Bachelor of Education in English Language
              </h2>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Embark on a transformative journey to become a skilled English language educator. Our comprehensive 2-year program equips you with modern ELT methodologies, communicative teaching techniques, and practical classroom experience.
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
                src="/images/B.Ed-English-Hero-Banner-Image.webp"
                alt="B.Ed English Department"
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
            A comprehensive teacher education program designed to shape passionate English language educators
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
                    he Bachelor of Education (B.Ed) in English at JKKN College of Education is a meticulously designed 2-year professional degree program that prepares graduates to become competent and confident Learning Facilitators for secondary and higher secondary schools. This NCTE-approved program combines theoretical foundations with extensive practical training in English Language Teaching (ELT), ensuring our Learners are well-equipped to meet the evolving demands of global English education.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                Our program emphasizes Communicative Language Teaching (CLT), Task-Based Language Teaching (TBLT), and technology-enhanced learning methodologies. Learners gain proficiency in teaching all four language skills—listening, speaking, reading, and writing—along with grammar, vocabulary, and literature. The curriculum is aligned with the National Education Policy (NEP) 2020, focusing on competency-based learning, multilingualism, and 21st-century skills development.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                At JKKN Institutions, we believe in excellence without elitism. Our experienced Learning Facilitators, state-of-the-art English Language Laboratory, and comprehensive support systems ensure that every Learner receives personalized attention and guidance. With over 70 years of educational excellence, join us in our mission to transform lives through progressive education and create globally competent English educators.
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
              Discover what makes our B.Ed English program exceptional
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
                Recognized by the National Council for Teacher Education, ensuring quality standards and national acceptance of your degree across all school boards.
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
                Extensive 16-week school internship program with partner institutions providing real-world teaching experience, mentorship, and classroom management skills.
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
                Learn from experienced educators with extensive backgrounds in English linguistics, literature, ELT methodology, and communicative language teaching.
              </p>
            </div>

            {/* Modern Language Lab */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Modern Language Lab
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Well-equipped English Language Laboratory with CALL software, pronunciation tools, listening stations, and digital resources for enhanced learning.
              </p>
            </div>

            {/* Global English Perspective */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Global English Perspective
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Comprehensive understanding of World Englishes, cross-cultural communication, and preparing Learners for diverse, multicultural classroom environments.
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
                Various government and institutional scholarships available for eligible candidates including BC/MBC/SC/ST categories to ensure accessible education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose JKKN for B.Ed English Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Why Choose JKKN for B.Ed English?
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Discover the unique advantages of pursuing your teaching career with us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 55+ Years Legacy */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-6 rounded-lg flex items-center justify-center"
                   style={{ backgroundColor: '#f0f9ff' }}>
                <svg className="w-8 h-8" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                55+ Years Legacy
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Benefit from over five decades of educational excellence and progressive teaching methodologies established by JKKN Institutions.
              </p>
            </div>

            {/* Communicative Approach */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-6 rounded-lg flex items-center justify-center"
                   style={{ backgroundColor: '#f0f9ff' }}>
                <svg className="w-8 h-8" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Communicative Approach
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Master the Communicative Language Teaching approach that emphasizes meaningful interaction and real-world language use in classroom settings.
              </p>
            </div>

            {/* Technology Integration */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-6 rounded-lg flex items-center justify-center"
                   style={{ backgroundColor: '#f0f9ff' }}>
                <svg className="w-8 h-8" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Technology Integration
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Learn to effectively integrate educational technology, digital tools, and online resources for enhanced English language instruction.
              </p>
            </div>

            {/* Rich Resource Library */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-6 rounded-lg flex items-center justify-center"
                   style={{ backgroundColor: '#f0f9ff' }}>
                <svg className="w-8 h-8" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Rich Resource Library
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Access to an extensive library with English literature, ELT journals, teaching resources, and digital databases for research and learning.
              </p>
            </div>

            {/* NEP 2020 Aligned */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-6 rounded-lg flex items-center justify-center"
                   style={{ backgroundColor: '#f0f9ff' }}>
                <svg className="w-8 h-8" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                NEP 2020 Aligned
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Curriculum designed in accordance with National Education Policy 2020, focusing on competency-based education and holistic development.
              </p>
            </div>

            {/* High Placement Rate */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-6 rounded-lg flex items-center justify-center"
                   style={{ backgroundColor: '#f0f9ff' }}>
                <svg className="w-8 h-8" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                High Placement Rate
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                98% placement rate with graduates placed in prestigious CBSE, ICSE, State Board, and International schools across India and abroad.
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
              Requirements for admission to B.Ed English program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Academic Requirements */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7cb983' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: '#002309' }}>
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
                    Bachelor's degree (BA/BSc/BCom or equivalent) from a recognized university
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
                    English as a subject at degree level OR studied English up to Class 12 with minimum 50% marks
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
                    Age limit as per Tamil Nadu government norms (no upper age limit for certain categories)
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
                    Valid TNTEU B.Ed entrance examination score (if applicable for the admission year)
                  </p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7cb983' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: '#002309' }}>
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
                    10th (SSLC) and 12th (HSC) mark sheets and certificates
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
                    Degree certificate and consolidated mark sheet (all semesters/years)
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
                    Community certificate (for reserved category candidates - BC/MBC/SC/ST)
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
                    Migration certificate (if from other university/state)
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
                    Physically Handicapped certificate (if applicable)
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
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{
        background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)'
      }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Career Prospects
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Explore diverse career opportunities after completing B.Ed English
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Secondary School Teacher */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
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
                Teach English language and literature in CBSE, ICSE, State Board, and International schools across India and abroad.
              </p>
            </div>

            {/* Higher Secondary Teacher */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
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
                Prepare students for board examinations, competitive exams, and higher education with advanced English language skills.
              </p>
            </div>

            {/* IELTS/TOEFL Trainer */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                IELTS/TOEFL Trainer
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Train students for international English proficiency tests and help them achieve their study abroad dreams.
              </p>
            </div>

            {/* Curriculum Developer */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
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
                Design and develop English language curriculum materials for schools, educational publishers, and ed-tech companies.
              </p>
            </div>

            {/* Content Writer & Editor */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Content Writer & Editor
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Create educational content, textbooks, digital learning materials, and assessment items for English language learning.
              </p>
            </div>

            {/* Educational Administrator */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
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
                Take up leadership roles as Academic Coordinator, HOD, Vice-Principal, or Principal in schools and educational institutions.
              </p>
            </div>

            {/* Higher Education */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
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
                Pursue advanced degrees in Education, English Literature, Applied Linguistics, or ELT for academic and research careers.
              </p>
            </div>

            {/* Corporate Trainer */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Corporate Trainer
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Deliver Business English, Communication Skills, and Soft Skills training programs for corporate organizations.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* English Language Lab */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105"
                 style={{ background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)' }}>
              <div className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  English Language Lab
                </h3>
                <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#7cb983' }}></div>
                <p className="text-base font-semibold" style={{ color: '#ffffff' }}>
                  English Language Lab
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
              Simple steps to begin your journey as an English educator
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
              {/* Step 1 - Online Application */}
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                         style={{ backgroundColor: '#7cb983' }}>
                      1
                    </div>
                  </div>
                  <div className="flex-1 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Online Application
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Visit our official website and complete the online application form with accurate personal and academic details. Pay the application fee online.
                    </p>
                  </div>
                </div>
                <div className="absolute top-12 left-6 w-0.5 h-full hidden lg:block" style={{ backgroundColor: '#7cb983' }}></div>
              </div>

              {/* Step 2 - Document Verification */}
              <div className="relative lg:mt-48">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 relative z-10 lg:hidden">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                         style={{ backgroundColor: '#7cb983' }}>
                      2
                    </div>
                  </div>
                  <div className="flex-1 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Document Verification
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Upload scanned copies of required documents including mark sheets, certificates, community certificate, and photographs for initial verification.
                    </p>
                  </div>
                  <div className="flex-shrink-0 relative z-10 hidden lg:block">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                         style={{ backgroundColor: '#7cb983' }}>
                      2
                    </div>
                  </div>
                </div>
                <div className="absolute top-12 right-6 w-0.5 h-full hidden lg:block" style={{ backgroundColor: '#7cb983' }}></div>
                <div className="absolute top-12 left-6 w-0.5 h-full lg:hidden" style={{ backgroundColor: '#7cb983' }}></div>
              </div>

              {/* Step 3 - Entrance Test / Counseling */}
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                         style={{ backgroundColor: '#7cb983' }}>
                      3
                    </div>
                  </div>
                  <div className="flex-1 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Entrance Test / Counseling
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Appear for TNTEU B.Ed entrance examination (if applicable) or participate in institutional counseling based on merit and reservation norms.
                    </p>
                  </div>
                </div>
                <div className="absolute top-12 left-6 w-0.5 h-full hidden lg:block" style={{ backgroundColor: '#7cb983' }}></div>
              </div>

              {/* Step 4 - Seat Allotment */}
              <div className="relative lg:mt-48">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 relative z-10 lg:hidden">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                         style={{ backgroundColor: '#7cb983' }}>
                      4
                    </div>
                  </div>
                  <div className="flex-1 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Seat Allotment
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Receive provisional admission letter based on merit list. Confirm your seat by paying the admission fee within the specified deadline.
                    </p>
                  </div>
                  <div className="flex-shrink-0 relative z-10 hidden lg:block">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                         style={{ backgroundColor: '#7cb983' }}>
                      4
                    </div>
                  </div>
                </div>
                <div className="absolute top-12 right-6 w-0.5 h-full hidden lg:block" style={{ backgroundColor: '#7cb983' }}></div>
                <div className="absolute top-12 left-6 w-0.5 h-full lg:hidden" style={{ backgroundColor: '#7cb983' }}></div>
              </div>

              {/* Step 5 - Document Submission */}
              <div className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                         style={{ backgroundColor: '#7cb983' }}>
                      5
                    </div>
                  </div>
                  <div className="flex-1 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Document Submission
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Submit original documents for verification at the college admission office. Complete physical verification and biometric registration.
                    </p>
                  </div>
                </div>
                <div className="absolute top-12 left-6 w-0.5 h-full hidden lg:block" style={{ backgroundColor: '#7cb983' }}></div>
              </div>

              {/* Step 6 - Enrollment & Orientation */}
              <div className="relative lg:mt-48">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 relative z-10 lg:hidden">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                         style={{ backgroundColor: '#7cb983' }}>
                      6
                    </div>
                  </div>
                  <div className="flex-1 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                      Enrollment & Orientation
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Complete fee payment, receive enrollment number, and attend the orientation program to begin your transformative journey as a future English educator.
                    </p>
                  </div>
                  <div className="flex-shrink-0 relative z-10 hidden lg:block">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                         style={{ backgroundColor: '#7cb983' }}>
                      6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AdmissionFAQ />

      {/* CTA Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#7cb983' }}>
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Begin Your Journey as an English Educator
          </h2>
          <p className="text-sm sm:text-base lg:text-xl mb-8" style={{ color: '#ffffff' }}>
            Join JKKN College of Education and transform your passion for English language into<br />
            a rewarding teaching career. Applications are now open for 2025-26 academic session.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-transform hover:scale-105"
                    style={{ backgroundColor: '#ffffff', color: '#7cb983' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Apply Online Now
            </Link>
            <a href="tel:+919345855001" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 transition-all hover:bg-white hover:text-[#002309]"
                    style={{ borderColor: '#ffffff', color: '#ffffff' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Admissions
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
              <EducationEnquiryForm sourcePage="dept-english" defaultProgrammeId={DEFAULT_PROGRAMME_BY_DEPARTMENT["english"]} />
          </div>
      </section>

      <Footer />
    </>
  )
}
