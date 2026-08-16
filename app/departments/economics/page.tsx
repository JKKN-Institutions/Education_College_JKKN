'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EducationEnquiryForm from "@/components/lead/EducationEnquiryForm";
import { DEFAULT_PROGRAMME_BY_DEPARTMENT } from "@/lib/education-programmes";

export default function EconomicsDepartment() {
  const [activeSemester, setActiveSemester] = useState(1)

  const curriculumData = {
    1: [
      {
        code: 'EDU 101',
        title: 'Childhood and Growing Up',
        description: 'Understanding child development, adolescent psychology, learning theories, and educational psychology principles for effective teaching.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU 102',
        title: 'Contemporary India and Education',
        description: 'Exploring the Indian education system, national policies, constitutional provisions, and contemporary challenges in education.',
        credits: 4,
        type: 'Theory'
      },
      {
        code: 'ECO 103',
        title: 'Pedagogy of Economics - Part I',
        description: 'Foundations of Economics teaching, curriculum design, instructional strategies, and teaching methods for Microeconomics and basic economic concepts.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU 104',
        title: 'Language Across the Curriculum',
        description: 'Integration of language skills in teaching Economics subjects, economic terminology, and effective communication strategies for complex concepts.',
        credits: 2,
        type: 'Theory'
      },
      {
        code: 'EDU 105',
        title: 'Reading and Reflecting on Texts',
        description: 'Critical analysis of educational texts, economic research papers, and development of reflective practices in teacher education.',
        credits: 2,
        type: 'Theory + Assignment'
      }
    ],
    2: [
      {
        code: 'EDU 201',
        title: 'Learning and Teaching',
        description: 'Advanced learning theories, cognitive development, motivation strategies, and effective classroom teaching methodologies.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU 202',
        title: 'Knowledge and Curriculum',
        description: 'Curriculum development theories, syllabus design, textbook analysis, and curriculum transaction strategies for Economics education.',
        credits: 4,
        type: 'Theory'
      },
      {
        code: 'ECO 203',
        title: 'Pedagogy of Economics - Part II',
        description: 'Advanced teaching methods for Macroeconomics, Indian Economy, GST framework, monetary policy, international trade, and sustainable development.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU 204',
        title: 'Assessment for Learning',
        description: 'Evaluation techniques, question paper design, continuous comprehensive evaluation (CCE), and formative assessment strategies for Economics.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU 205',
        title: 'Drama and Art in Education',
        description: 'Creative teaching approaches, role-play, case studies, economic simulations, and interactive methods for engaging Economics education.',
        credits: 2,
        type: 'Practical'
      }
    ],
    3: [
      {
        code: 'EDU 301',
        title: 'School Internship - Phase I',
        description: '8-week intensive school internship with supervised teaching practice, lesson planning, and classroom management experience in Economics classes.',
        credits: 16,
        type: 'Practical / Field Work'
      },
      {
        code: 'EDU 302',
        title: 'Inclusive Education',
        description: 'Teaching diverse learners, special education needs, differentiated instruction, and inclusive classroom practices for Economics education.',
        credits: 4,
        type: 'Theory'
      },
      {
        code: 'EDU 303',
        title: 'ICT in Education',
        description: 'Educational technology, digital tools, online teaching methods, economic data visualization software, and e-learning platforms for Economics.',
        credits: 4,
        type: 'Theory + Lab'
      },
      {
        code: 'ECO 304',
        title: 'Teaching of Statistics for Economics',
        description: 'Specialized methods for teaching statistical concepts, data analysis, graphical representation, index numbers, and quantitative economics.',
        credits: 4,
        type: 'Theory + Practical'
      }
    ],
    4: [
      {
        code: 'EDU 401',
        title: 'School Internship - Phase II',
        description: '8-week advanced internship with independent teaching, action research project on Economics education, and comprehensive classroom experience.',
        credits: 16,
        type: 'Practical / Field Work'
      },
      {
        code: 'EDU 402',
        title: 'Gender, School and Society',
        description: 'Gender sensitization, equity in education, addressing gender stereotypes in economic discussions, and creating inclusive learning environments.',
        credits: 4,
        type: 'Theory'
      },
      {
        code: 'ECO 403',
        title: 'Teaching Indian Economic Development',
        description: 'Methods for teaching Indian economic history, five-year plans, liberalization, economic reforms, current challenges, and development indicators.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU 404',
        title: 'Understanding the Self',
        description: 'Self-awareness, emotional intelligence, stress management, and professional identity development for aspiring Economics educators.',
        credits: 2,
        type: 'Workshop'
      },
      {
        code: 'EDU 405',
        title: 'Action Research Project',
        description: 'Conducting independent research on an Economics education topic, data collection, analysis, and presenting findings for pedagogical improvement.',
        credits: 4,
        type: 'Project Work'
      }
    ]
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%)] lg:bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%),url(/images/B.Ed-Economics-Hero-Banner-Image.webp)] bg-cover bg-center">
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
                <span style={{ color: '#7cb983' }}>Economics</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#ffffff' }}>
                Bachelor of Education in Economics
              </h2>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Transform your Economics expertise into a rewarding teaching career. Our comprehensive 2-year program equips you with modern pedagogical techniques, practical teaching skills, and deep subject knowledge in Microeconomics, Macroeconomics, Indian Economy, and Development Economics.
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
                  <div className="text-4xl font-bold mb-2" style={{ color: '#7cb983' }}>94%</div>
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
                <Link href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=edu.jkkn.ac.in&utm_medium=organic&utm_campaign=departments-economics" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white bg-[#7cb983] hover:bg-[#6ba872] transition-transform hover:scale-105">
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
                src="/images/B.Ed-Economics-Hero-Banner-Image.webp"
                alt="B.Ed Economics Department"
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
            Comprehensive teacher education program in Economics
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
                    he Bachelor of Education (B.Ed) in Economics at JKKN College of Education is a professionally designed 2-year undergraduate program that prepares passionate Economics graduates to become competent, skilled, and effective educators. This NCTE-approved program combines theoretical knowledge with practical teaching skills, enabling graduates to teach Economics, Indian Economic Development, Statistics for Economics, and related subjects at secondary and higher secondary levels.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                Our curriculum is aligned with the National Education Policy (NEP) 2020 and incorporates contemporary economic concepts including globalization, sustainable development, digital economy, GST framework, monetary policy, and international trade. The program emphasizes experiential learning through micro-teaching, peer teaching, simulated classroom experiences, and extensive school internships in partner institutions.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                Economics education is vital in developing analytical thinking, data interpretation, and economic literacy among young minds. As an Economics educator, you will play a crucial role in shaping future economists, policy analysts, business leaders, and informed citizens who can understand and navigate the complexities of economic systems and contribute meaningfully to national development.
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

              {/* Total Credits */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  TOTAL CREDITS
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  80 Credits
                </div>
              </div>

              {/* Medium of Instruction */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  MEDIUM OF INSTRUCTION
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  English & Tamil
                </div>
              </div>

              {/* Affiliation */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  AFFILIATION
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  TNTEU Chennai
                </div>
              </div>

              {/* Intake Capacity */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  INTAKE CAPACITY
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  50 Seats
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
              What makes our B.Ed Economics program exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NCTE Approved Program */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                NCTE Approved Program
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Fully recognized by National Council for Teacher Education with curriculum meeting all regulatory standards for quality teacher preparation in India.
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
                Learn from experienced educators with expertise in Economics education, pedagogical research, and contemporary teaching methodologies.
              </p>
            </div>

            {/* Technology-Enhanced Learning */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Technology-Enhanced Learning
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Modern smart classrooms, digital teaching tools, economic simulation software, data visualization tools, and online learning platforms for effective pedagogy.
              </p>
            </div>

            {/* Extensive School Internship */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Extensive School Internship
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                16-week supervised teaching practice in partner schools providing real-world classroom experience with diverse learner groups and teaching environments.
              </p>
            </div>

            {/* Contemporary Economics Curriculum */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Contemporary Economics Curriculum
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Updated syllabus covering GST, digital economy, sustainable development goals, behavioral economics, and contemporary economic policies for comprehensive teaching preparation.
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
              Requirements for admission to B.Ed Economics program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Academic Requirements */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e8f5e9' }}>
                  <svg className="w-6 h-6" style={{ color: '#4caf50' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    Bachelor's degree with Economics as major/subsidiary (BA Economics, B.Sc Economics, B.Com with Economics, or equivalent) from a recognized university
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
                    Economics studied at degree level as a core or elective subject
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
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#fff3e0' }}>
                  <svg className="w-6 h-6" style={{ color: '#ff9800' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section id="curriculum-structure" className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
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
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-8 p-2 rounded-xl" style={{ backgroundColor: '#FBFBEE' }}>
              {[1, 2, 3, 4].map((semester) => (
                <button
                  key={semester}
                  onClick={() => setActiveSemester(semester)}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    activeSemester === semester
                      ? 'bg-white shadow-md'
                      : 'hover:bg-white/50'
                  }`}
                  style={{
                    color: activeSemester === semester ? '#002309' : '#006837',
                    border: activeSemester === semester ? '2px solid #7cb983' : '2px solid transparent'
                  }}
                >
                  Semester {semester === 1 ? 'I' : semester === 2 ? 'II' : semester === 3 ? 'III' : 'IV'}
                </button>
              ))}
            </div>

            {/* Course Cards */}
            <div className="space-y-4">
              {curriculumData[activeSemester as keyof typeof curriculumData].map((course, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 rounded-xl"
                  style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                >
                  <div
                    className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex flex-col items-center justify-center text-white font-bold"
                    style={{ background: 'linear-gradient(135deg, #002309 0%, #7cb983 100%)' }}
                  >
                    <span className="text-xs">{course.code.split(' ')[0]}</span>
                    <span className="text-base sm:text-lg">{course.code.split(' ')[1]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#002309' }}>
                      {course.title}
                    </h4>
                    <p className="text-sm sm:text-base leading-relaxed mb-3 break-words" style={{ color: '#006837' }}>
                      {course.description}
                    </p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm" style={{ color: '#8896a6' }}>
                      <span>Credits: {course.credits}</span>
                      <span>{course.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #002309 0%, #004d28 50%, #006837 100%)' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Career Prospects
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Diverse opportunities await B.Ed Economics graduates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* School Economics Teacher */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4" style={{ color: '#ffffff' }}>
                School Economics Teacher
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Teach Economics, Indian Economic Development, and Statistics at secondary and higher secondary levels in government, aided, and private schools.
              </p>
            </div>

            {/* TGT/PGT Economics */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4" style={{ color: '#ffffff' }}>
                TGT/PGT Economics
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Qualify for Trained Graduate Teacher (TGT) and Post Graduate Teacher (PGT) positions in CBSE, ICSE, and State Board schools across India.
              </p>
            </div>

            {/* Curriculum Developer */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4" style={{ color: '#ffffff' }}>
                Curriculum Developer
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Design Economics curriculum, develop textbooks, create educational content, and design assessment materials for educational boards and publishers.
              </p>
            </div>

            {/* Coaching Institute Faculty */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4" style={{ color: '#ffffff' }}>
                Coaching Institute Faculty
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Teach Economics for competitive exams including UPSC, banking, SSC, and other government recruitment examinations.
              </p>
            </div>

            {/* Financial Literacy Educator */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4" style={{ color: '#ffffff' }}>
                Financial Literacy Educator
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Conduct financial literacy programs, personal finance workshops, and economic awareness campaigns in schools and communities.
              </p>
            </div>

            {/* Higher Education (M.Ed/Ph.D) */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4" style={{ color: '#ffffff' }}>
                Higher Education (M.Ed/Ph.D)
              </h3>
              <p className="text-center leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Pursue advanced degrees in Education, Economics Education, or Educational Research and become college-level educators or researchers.
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
              Why Choose JKKN for B.Ed Economics?
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Discover the advantages of pursuing your B.Ed Economics at JKKN College of Education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 55+ Years of Educational Excellence */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  1
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  55+ Years of Educational Excellence
                </h3>
              </div>
              <p className="leading-relaxed ml-14" style={{ color: '#006837' }}>
                Part of JKKN Institutions with a proven legacy of transforming lives through progressive education since 1969.
              </p>
            </div>

            {/* 94% Placement Success Rate */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  2
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  98% Placement Success Rate
                </h3>
              </div>
              <p className="leading-relaxed ml-14" style={{ color: '#006837' }}>
                Strong placement record with graduates securing positions in government schools, CBSE/ICSE schools, coaching institutes, and prestigious educational institutions.
              </p>
            </div>

            {/* Contemporary Economics Curriculum */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  3
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Contemporary Economics Curriculum
                </h3>
              </div>
              <p className="leading-relaxed ml-14" style={{ color: '#006837' }}>
                Curriculum updated with GST, digital economy, sustainable development, behavioral economics, and NEP 2020 aligned content.
              </p>
            </div>

            {/* Extensive Partner School Network */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  4
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Extensive Partner School Network
                </h3>
              </div>
              <p className="leading-relaxed ml-14" style={{ color: '#006837' }}>
                Tie-ups with 50+ schools for internship providing diverse teaching experiences in urban, rural, government, and private settings.
              </p>
            </div>

            {/* Holistic Development Focus */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  5
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Holistic Development Focus
                </h3>
              </div>
              <p className="leading-relaxed ml-14" style={{ color: '#006837' }}>
                Beyond academics, focus on soft skills, communication, personality development, and professional ethics for well-rounded educators.
              </p>
            </div>

            {/* Affordable Quality Education */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  6
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Affordable Quality Education
                </h3>
              </div>
              <p className="leading-relaxed ml-14" style={{ color: '#006837' }}>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Economics Lab */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#002309' }}>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Economics Lab
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Economics Lab
                </p>
              </div>
            </div>

            {/* Digital Library */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Digital Library
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Digital Library
                </p>
              </div>
            </div>

            {/* Smart Classrooms */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Smart Classrooms
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Smart Learning Studios
                </p>
              </div>
            </div>

            {/* Micro Teaching */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#002309' }}>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Micro Teaching
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Micro-Teaching Lab
                </p>
              </div>
            </div>

            {/* Computer Lab */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Computer Lab
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Computer Lab
                </p>
              </div>
            </div>

            {/* Seminar Hall */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Seminar Hall
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Seminar Hall
                </p>
              </div>
            </div>

            {/* Resource Center */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#002309' }}>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Resource Center
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Resource Center
                </p>
              </div>
            </div>

            {/* Hostel */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>
                  Hostel
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
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
              Simple steps to begin your journey as an Economics educator
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 hidden md:block" style={{ backgroundColor: '#e5e7eb' }}></div>

            {/* Step 1 - Check Eligibility */}
            <div className="relative mb-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold z-10 mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
                     style={{ backgroundColor: '#7cb983' }}>
                  1
                </div>
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                      Check Eligibility
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Verify you meet the academic requirements: BA Economics, B.Sc Economics, B.Com with Economics or equivalent degree with minimum 50% marks (45% for reserved categories).
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>

            {/* Step 2 - Online Application */}
            <div className="relative mb-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:order-1"></div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold z-10 mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
                     style={{ backgroundColor: '#7cb983' }}>
                  2
                </div>
                <div className="md:w-1/2 md:pl-12 md:order-2">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                      Online Application
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Complete the online application form on our official website or TNTEU portal. Upload required documents and pay the application fee.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Document Verification */}
            <div className="relative mb-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold z-10 mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
                     style={{ backgroundColor: '#7cb983' }}>
                  3
                </div>
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                      Document Verification
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Submit original documents for verification at the college admission office. Ensure all certificates are attested and complete.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>

            {/* Step 4 - Counseling & Seat Allotment */}
            <div className="relative mb-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:order-1"></div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold z-10 mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
                     style={{ backgroundColor: '#7cb983' }}>
                  4
                </div>
                <div className="md:w-1/2 md:pl-12 md:order-2">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                      Counseling & Seat Allotment
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Attend counseling session as per TNTEU schedule. Seats are allotted based on merit, entrance exam scores, and reservation norms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 - Fee Payment & Enrollment */}
            <div className="relative mb-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold z-10 mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
                     style={{ backgroundColor: '#7cb983' }}>
                  5
                </div>
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                      Fee Payment & Enrollment
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#006837' }}>
                      Pay the prescribed fees within the stipulated time. Complete enrollment formalities and receive your admission confirmation.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>

            {/* Step 6 - Orientation & Classes Begin */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:order-1"></div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold z-10 mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
                     style={{ backgroundColor: '#7cb983' }}>
                  6
                </div>
                <div className="md:w-1/2 md:pl-12 md:order-2">
                  <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Find answers to common queries about B.Ed Economics program
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  What is the eligibility for B.Ed Economics admission?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Candidates must hold a Bachelor's degree with Economics as a major or subsidiary subject (BA Economics, B.Sc Economics, B.Com with Economics, or equivalent) from a recognized university with minimum 50% aggregate marks. Reserved category candidates (SC/ST/OBC/PWD) require minimum 45% marks. Candidates appearing for final year degree examinations may also apply provisionally.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  What is the duration of B.Ed Economics program?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                The B.Ed Economics program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, practical sessions, and school internship components as mandated by TNTEU guidelines.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  What subjects can I teach after completing B.Ed Economics?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                After completing B.Ed Economics, you are qualified to teach Economics, Indian Economic Development, Statistics for Economics, Business Economics, and related subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  Is JKKN College of Education NCTE approved?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Economics program meets all regulatory standards for teacher education in India, ensuring your degree is recognized nationally for teaching positions.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  What is the fee structure for B.Ed Economics?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                The fee structure is regulated by the Tamil Nadu government for teacher education programs. Various scholarships including government scholarships for SC/ST/OBC/BC candidates, merit scholarships, and institutional financial assistance are available for eligible Learners. Please contact our admission office for current fee details and scholarship information.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  Does the program include practical teaching experience?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Yes, the B.Ed Economics program includes extensive practical training through micro-teaching sessions, simulated teaching practices, peer teaching, and a mandatory 16-week school internship program spread across two phases. Learners teach Economics subjects in actual classroom settings under mentor Learning Facilitator guidance in our partner schools.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  Can I pursue B.Ed Economics after BA Economics through distance education?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Yes, candidates with BA Economics or equivalent degree from UGC-recognized distance education universities/institutions are eligible for B.Ed Economics admission, provided they meet the minimum percentage criteria (50% general, 45% reserved) and other eligibility requirements. The distance education degree must be from a recognized university listed in UGC/AIU approved list.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  What are the career opportunities after B.Ed Economics?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                B.Ed Economics graduates have diverse career options including: Economics teachers in government and private schools, TGT/PGT positions in CBSE/ICSE schools, coaching institute faculty for competitive exams, curriculum developers, educational content writers, financial literacy educators, and opportunities to pursue M.Ed/Ph.D for academic and research roles in higher education.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#7cb983' }}>
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Ready to Begin Your Journey as an Economics Educator?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Join JKKN College of Education and transform your passion for Economics into a rewarding teaching career. Admissions open for 2025-26 academic year.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=edu.jkkn.ac.in&utm_medium=organic&utm_campaign=departments-economics" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-transform hover:scale-105"
                    style={{ backgroundColor: '#ffffff', color: '#7cb983' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Apply Online Now
            </Link>
            <a href="tel:+919345855001" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                 style={{ borderColor: '#ffffff', borderWidth: '3px' }}   >
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
              <EducationEnquiryForm sourcePage="dept-economics" defaultProgrammeId={DEFAULT_PROGRAMME_BY_DEPARTMENT["economics"]} />
          </div>
      </section>

      <Footer />
    </>
  )
}
