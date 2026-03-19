'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SocialScienceDepartment() {
  const [activeSemester, setActiveSemester] = useState(1)

  const curriculumData = {
    1: [
      { code: 'EDU', number: '101', title: 'Childhood and Growing Up', description: 'Understanding child development, adolescent psychology, learning theories, and educational psychology principles for effective teaching.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU', number: '102', title: 'Contemporary India and Education', description: 'Exploring the Indian education system, national policies, constitutional provisions, and contemporary challenges in education.', credits: 4, type: 'Theory' },
      { code: 'SSC', number: '103', title: 'Pedagogy of Social Science - Part I', description: 'Foundations of Social Science teaching, curriculum design, instructional strategies for History and Geography at secondary level.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU', number: '104', title: 'Language Across the Curriculum', description: 'Integration of language skills in teaching Social Science, historical terminology, geographical vocabulary, and effective communication strategies.', credits: 2, type: 'Theory' },
      { code: 'EDU', number: '105', title: 'Reading and Reflecting on Texts', description: 'Critical analysis of educational texts, historical documents, research papers, and development of reflective practices in teacher education.', credits: 2, type: 'Theory + Assignment' },
    ],
    2: [
      { code: 'EDU', number: '201', title: 'Learning and Teaching', description: 'Advanced learning theories, cognitive development, motivation strategies, and effective classroom teaching methodologies for Social Science.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU', number: '202', title: 'Knowledge and Curriculum', description: 'Curriculum development theories, syllabus design, textbook analysis, and curriculum transaction strategies for Social Science education.', credits: 4, type: 'Theory' },
      { code: 'SSC', number: '203', title: 'Pedagogy of Social Science - Part II', description: 'Advanced teaching methods for Civics, Political Science, Economics, citizenship education, and contemporary social issues.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU', number: '204', title: 'Assessment for Learning', description: 'Evaluation techniques, continuous assessment, formative and summative assessment strategies, question paper design for Social Science subjects.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU', number: '205', title: 'Drama and Art in Education', description: 'Creative approaches using drama, role-play, visual arts, and storytelling for engaging Social Science education.', credits: 2, type: 'Practical' },
    ],
    3: [
      { code: 'EDU', number: '301', title: 'Inclusive Education', description: 'Understanding diverse learners, special educational needs, inclusive classroom practices, and differentiated instruction for Social Science teaching.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU', number: '302', title: 'ICT in Education', description: 'Technology-enhanced learning, digital tools for Social Science, GIS applications, virtual museum tours, educational software, and online teaching strategies.', credits: 4, type: 'Theory + Practical' },
      { code: 'SSC', number: '303', title: 'Teaching of History', description: 'Specialized methods for history teaching, chronological understanding, historical inquiry, primary sources analysis, and heritage education.', credits: 4, type: 'Theory + Practical' },
      { code: 'SSC', number: '304', title: 'Teaching of Geography', description: 'Map reading and interpretation, field surveys, environmental education, climate change education, and practical geography skills.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU', number: '305', title: 'School Internship - Phase I', description: 'Initial teaching practice in partner schools, classroom observation, lesson planning, micro-teaching sessions, and mentor feedback.', credits: 8, type: 'Practical' },
    ],
    4: [
      { code: 'EDU', number: '401', title: 'Gender, School and Society', description: 'Understanding gender dynamics, creating gender-sensitive classrooms, addressing social inequalities through education, and promoting social justice.', credits: 4, type: 'Theory' },
      { code: 'EDU', number: '402', title: 'Creating an Inclusive School', description: 'School-based practices for inclusion, community engagement, addressing caste, class, and regional diversities in Social Science education.', credits: 4, type: 'Theory + Practical' },
      { code: 'SSC', number: '403', title: 'Teaching of Civics & Economics', description: 'Citizenship education, democratic values, constitutional literacy, economic concepts, financial literacy, and contemporary governance issues.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU', number: '404', title: 'School Internship - Phase II', description: 'Extended teaching practice, full classroom responsibility, action research project, community engagement, and professional portfolio development.', credits: 12, type: 'Practical' },
      { code: 'EDU', number: '405', title: 'Action Research Project', description: 'Independent research on Social Science teaching challenges, data collection, analysis, and implementing solutions in classroom practice.', credits: 4, type: 'Project' },
    ],
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%)] lg:bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%),url(/images/B.Ed-Social-Science-Hero-Banner-Image.png)] bg-cover bg-center">
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
                <span style={{ color: '#7cb983' }}>Social Science</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#ffffff' }}>
                Bachelor of Education in Social Science
              </h2>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Shape young minds with knowledge of History, Geography, Civics, and Economics. Become a certified Social Science educator through our comprehensive 2-year professional program designed to develop passionate and skilled Learning Facilitators.
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
                  <div className="text-4xl font-bold mb-2" style={{ color: '#7cb983' }}>97%</div>
                  <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>PLACEMENT</div>
                </div>

                {/* Years Legacy */}
                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#7cb983' }}>55+</div>
                  <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>YEARS LEGACY</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white bg-[#7cb983] hover:bg-[#6ba872] transition-transform hover:scale-105">
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
              <img
                src="/images/B.Ed-Social-Science-Hero-Banner-Image.png"
                alt="B.Ed Social Science Department"
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
            A comprehensive teacher education program designed to shape passionate Social Science educators
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
                    he Bachelor of Education (B.Ed) in Social Science at JKKN College of Education is a meticulously designed 2-year professional degree program that prepares graduates to become competent and effective Learning Facilitators for upper primary, secondary, and higher secondary schools. This NCTE-approved program combines strong theoretical foundations with extensive practical training in teaching History, Geography, Political Science, Economics, Civics, and related Social Science subjects.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                Our curriculum emphasizes modern pedagogical approaches, innovative teaching methodologies, and experiential learning strategies including field visits to historical sites, geographical surveys, and community engagement projects. Learners gain hands-on experience through micro-teaching sessions, simulated teaching practices, and comprehensive school internships in partner institutions. The program is aligned with the National Education Policy (NEP) 2020, focusing on competency-based learning, outcome-based education, and developing responsible citizens through education.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                At JKKN Institutions, we believe in excellence without elitism. Our experienced Learning Facilitators, state-of-the-art Learning Studios, well-equipped Social Science resource centers, map laboratories, and comprehensive support systems ensure that every Learner receives personalized attention and guidance throughout their educational journey. Join us in our mission to transform lives through progressive education and create a new generation of inspiring Social Science educators who foster civic responsibility, historical consciousness, and geographical awareness.
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
                  2 Years <span className="text-base font-normal" style={{ color: '#006837' }}>(4 Semesters)</span>
                </div>
              </div>

              {/* Mode of Study */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  MODE OF STUDY
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  Full-Time <span className="text-base font-normal" style={{ color: '#006837' }}>On-Campus</span>
                </div>
              </div>

              {/* Total Intake */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  TOTAL INTAKE
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  50 Seats <span className="text-base font-normal" style={{ color: '#006837' }}>per Academic Year</span>
                </div>
              </div>

              {/* Affiliation */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  AFFILIATION
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  TNTEU <span className="text-base font-normal" style={{ color: '#006837' }}>Chennai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects You Can Teach Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Subjects You Can Teach
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              B.Ed Social Science qualifies you to teach these subjects across Classes 6-12
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {/* History */}
            <div className="p-6 rounded-xl text-center border-2 transition-transform hover:scale-105"
                 style={{ borderColor: '#e5e7eb', backgroundColor: '#ffffff' }}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#e0f2fe' }}>
                <svg className="w-6 h-6" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold" style={{ color: '#002309' }}>History</h3>
            </div>

            {/* Geography */}
            <div className="p-6 rounded-xl text-center border-2 transition-transform hover:scale-105"
                 style={{ borderColor: '#e5e7eb', backgroundColor: '#ffffff' }}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#e0f2fe' }}>
                <svg className="w-6 h-6" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold" style={{ color: '#002309' }}>Geography</h3>
            </div>

            {/* Civics */}
            <div className="p-6 rounded-xl text-center border-2 transition-transform hover:scale-105"
                 style={{ borderColor: '#e5e7eb', backgroundColor: '#ffffff' }}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#e0f2fe' }}>
                <svg className="w-6 h-6" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="font-semibold" style={{ color: '#002309' }}>Civics</h3>
            </div>

            {/* Political Science */}
            <div className="p-6 rounded-xl text-center border-2 transition-transform hover:scale-105"
                 style={{ borderColor: '#e5e7eb', backgroundColor: '#ffffff' }}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#e0f2fe' }}>
                <svg className="w-6 h-6" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold" style={{ color: '#002309' }}>Political Science</h3>
            </div>

            {/* Economics */}
            <div className="p-6 rounded-xl text-center border-2 transition-transform hover:scale-105"
                 style={{ borderColor: '#e5e7eb', backgroundColor: '#ffffff' }}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#e0f2fe' }}>
                <svg className="w-6 h-6" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold" style={{ color: '#002309' }}>Economics</h3>
            </div>

            {/* Sociology */}
            <div className="p-6 rounded-xl text-center border-2 transition-transform hover:scale-105"
                 style={{ borderColor: '#e5e7eb', backgroundColor: '#ffffff' }}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#e0f2fe' }}>
                <svg className="w-6 h-6" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold" style={{ color: '#002309' }}>Sociology</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Program Highlights
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Discover what makes our B.Ed Social Science program exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NCTE Approved */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
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

            {/* Field-Based Learning */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Field-Based Learning
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Experiential learning through heritage site visits, geographical surveys, community engagement projects, and educational excursions to enhance practical understanding.
              </p>
            </div>

            {/* Expert Learning Facilitators */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
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
                Learn from experienced educators with extensive backgrounds in Social Science education, history research, geography fieldwork, and modern pedagogy.
              </p>
            </div>

            {/* Modern Learning Studios */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Modern Learning Studios
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Well-equipped facilities with smart boards, map laboratories, GIS tools, historical archives, digital resources, and simulation tools for enhanced learning experiences.
              </p>
            </div>

            {/* Practical Teaching Training */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Practical Teaching Training
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Extensive school internship program with partner institutions providing real-world teaching experience, classroom management skills, and professional mentorship.
              </p>
            </div>

            {/* Scholarship Support */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Eligibility Criteria & Documents
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Requirements for admission to B.Ed Social Science program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Academic Requirements */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FBFBEE' }}>
                  <svg className="w-6 h-6" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    Bachelor's degree in Arts (BA) or equivalent from a recognized university
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
                    Social Science subjects (History, Geography, Political Science, Economics, Sociology, Civics) at degree level
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
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e0f2fe' }}>
                  <svg className="w-6 h-6" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="flex justify-center mb-12">
            <div className="flex flex-col w-full max-w-xs rounded-xl overflow-hidden border-2" style={{ borderColor: '#e5e7eb' }}>
              {[1, 2, 3, 4].map((sem) => (
                <button
                  key={sem}
                  onClick={() => setActiveSemester(sem)}
                  className="px-6 py-4 font-semibold transition-all text-sm lg:text-base text-center"
                  style={{
                    backgroundColor: activeSemester === sem ? '#006837' : '#ffffff',
                    color: activeSemester === sem ? '#ffffff' : '#002309',
                    borderBottom: sem < 4 ? '2px solid #e5e7eb' : 'none'
                  }}
                >
                  Semester {sem === 1 ? 'I' : sem === 2 ? 'II' : sem === 3 ? 'III' : 'IV'}
                </button>
              ))}
            </div>
          </div>

          {/* Course Cards */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {curriculumData[activeSemester as keyof typeof curriculumData].map((course, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 rounded-xl"
                   style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex flex-col items-center justify-center text-white font-bold"
                     style={{ background: course.code === 'SSC' ? 'linear-gradient(135deg, #7cb983 0%, #6ba872 100%)' : 'linear-gradient(135deg, #7cb983 0%, #6ba872 100%)' }}>
                  <span className="text-xs">{course.code}</span>
                  <span className="text-base sm:text-lg">{course.number}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#002309' }}>
                    {course.title}
                  </h3>
                  <p className="text-sm sm:text-base mb-3 break-words" style={{ color: '#006837' }}>
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm" style={{ color: '#9ca3af' }}>
                    <span>Credits: {course.credits}</span>
                    <span>{course.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#002309' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Career Opportunities
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Explore diverse career paths after completing B.Ed Social Science
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Government School Teacher */}
            <div className="p-8 rounded-xl"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Government School Teacher
              </h3>
              <p className="text-center" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Secure permanent positions in government schools through TET/CTET and state-level teacher recruitment examinations for Classes 6-12.
              </p>
            </div>

            {/* Private School Educator */}
            <div className="p-8 rounded-xl"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Private School Educator
              </h3>
              <p className="text-center" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Teach History, Geography, Civics, and Economics in prestigious CBSE, ICSE, IB, and state board schools across India.
              </p>
            </div>

            {/* Educational Content Developer */}
            <div className="p-8 rounded-xl"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Educational Content Developer
              </h3>
              <p className="text-center" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Create engaging Social Science content for EdTech platforms, textbook publishers, e-learning companies, and digital education initiatives.
              </p>
            </div>

            {/* Heritage & Museum Educator */}
            <div className="p-8 rounded-xl"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Heritage & Museum Educator
              </h3>
              <p className="text-center" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Work with museums, archaeological departments, heritage sites, and cultural organizations for educational programming and outreach.
              </p>
            </div>

            {/* NGO & Civic Education */}
            <div className="p-8 rounded-xl"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                NGO & Civic Education
              </h3>
              <p className="text-center" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Join NGOs working on civic awareness, voter education, human rights, environmental education, and community development programs.
              </p>
            </div>

            {/* Higher Education */}
            <div className="p-8 rounded-xl"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#ffffff' }}>
                Higher Education (M.Ed/Ph.D)
              </h3>
              <p className="text-center" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Pursue advanced degrees in Education, Social Science Education, or Educational Research and become college-level educators or researchers.
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
              Why Choose JKKN for B.Ed Social Science?
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Discover the advantages of pursuing your B.Ed Social Science at JKKN College of Education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 55+ Years */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  1
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#7cb983' }}>
                  55+ Years of Educational Excellence
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Part of JKKN Institutions with a proven legacy of transforming lives through progressive education since 1969.
              </p>
            </div>

            {/* 97% Placement */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  2
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#7cb983' }}>
                  97% Placement Success Rate
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Strong placement record with graduates securing positions in government schools, CBSE/ICSE schools, and prestigious educational institutions.
              </p>
            </div>

            {/* NEP 2020 */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  3
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#7cb983' }}>
                  NEP 2020 Aligned Curriculum
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Curriculum updated with contemporary approaches including civic engagement, environmental education, and digital literacy for Social Science teaching.
              </p>
            </div>

            {/* Partner Schools */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  4
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#7cb983' }}>
                  Extensive Partner School Network
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Tie-ups with 50+ schools for internship providing diverse teaching experiences in urban, rural, government, and private settings.
              </p>
            </div>

            {/* Field-Based Learning */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  5
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#7cb983' }}>
                  Field-Based Experiential Learning
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Regular educational excursions to historical sites, geographical locations, legislative assemblies, and community institutions.
              </p>
            </div>

            {/* Affordable Education */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  6
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#7cb983' }}>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Map Laboratory */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#002309' }}>
              <div className="p-3 sm:p-8 h-24 sm:h-32 flex items-center justify-center">
                <h3 className="text-sm sm:text-2xl font-bold text-center break-words" style={{ color: '#ffffff' }}>
                  Map Laboratory
                </h3>
              </div>
              <div className="px-2 pb-2 sm:px-4 sm:pb-4">
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Map Laboratory</p>
              </div>
            </div>

            {/* Digital Library */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="p-3 sm:p-8 h-24 sm:h-32 flex items-center justify-center">
                <h3 className="text-sm sm:text-2xl font-bold text-center break-words" style={{ color: '#ffffff' }}>
                  Digital Library
                </h3>
              </div>
              <div className="px-2 pb-2 sm:px-4 sm:pb-4">
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Digital Library</p>
              </div>
            </div>

            {/* Smart Classrooms */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="p-3 sm:p-8 h-24 sm:h-32 flex items-center justify-center">
                <h3 className="text-sm sm:text-2xl font-bold text-center break-words" style={{ color: '#ffffff' }}>
                  Smart Classrooms
                </h3>
              </div>
              <div className="px-2 pb-2 sm:px-4 sm:pb-4">
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Smart Learning Studios</p>
              </div>
            </div>

            {/* Micro Teaching */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#002309' }}>
              <div className="p-3 sm:p-8 h-24 sm:h-32 flex items-center justify-center">
                <h3 className="text-sm sm:text-2xl font-bold text-center break-words" style={{ color: '#ffffff' }}>
                  Micro Teaching
                </h3>
              </div>
              <div className="px-2 pb-2 sm:px-4 sm:pb-4">
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Micro-Teaching Lab</p>
              </div>
            </div>

            {/* History Museum */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#002309' }}>
              <div className="p-3 sm:p-8 h-24 sm:h-32 flex items-center justify-center">
                <h3 className="text-sm sm:text-2xl font-bold text-center break-words" style={{ color: '#ffffff' }}>
                  History Museum
                </h3>
              </div>
              <div className="px-2 pb-2 sm:px-4 sm:pb-4">
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>History Museum</p>
              </div>
            </div>

            {/* Seminar Hall */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="p-3 sm:p-8 h-24 sm:h-32 flex items-center justify-center">
                <h3 className="text-sm sm:text-2xl font-bold text-center break-words" style={{ color: '#ffffff' }}>
                  Seminar Hall
                </h3>
              </div>
              <div className="px-2 pb-2 sm:px-4 sm:pb-4">
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Seminar Hall</p>
              </div>
            </div>

            {/* Resource Center */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#002309' }}>
              <div className="p-3 sm:p-8 h-24 sm:h-32 flex items-center justify-center">
                <h3 className="text-sm sm:text-2xl font-bold text-center break-words" style={{ color: '#ffffff' }}>
                  Resource Center
                </h3>
              </div>
              <div className="px-2 pb-2 sm:px-4 sm:pb-4">
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Resource Center</p>
              </div>
            </div>

            {/* Hostel */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="p-3 sm:p-8 h-24 sm:h-32 flex items-center justify-center">
                <h3 className="text-base sm:text-3xl font-bold text-center break-words" style={{ color: '#ffffff' }}>
                  Hostel
                </h3>
              </div>
              <div className="px-2 pb-2 sm:px-4 sm:pb-4">
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Hostel Facility</p>
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
              Simple step-by-step guide to join B.Ed Social Science at JKKN
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden md:block" style={{ backgroundColor: '#7cb983' }}></div>

            {/* Step 1 - Online Application */}
            <div className="relative flex flex-row md:flex-row items-start mb-12 gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-white font-bold z-10"
                   style={{ backgroundColor: '#7cb983' }}>
                1
              </div>
              <div className="flex-1 md:w-1/2 md:pr-12 md:text-right md:order-1">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Online Application
                  </h3>
                  <p style={{ color: '#006837' }}>
                    Visit our website and complete the online application form with accurate personal, educational, and contact details. Pay the application fee online.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>

            {/* Step 2 - Document Submission */}
            <div className="relative flex flex-row md:flex-row items-start mb-12 gap-4">
              <div className="md:w-1/2 md:pr-12 md:order-1 hidden md:block"></div>
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-white font-bold z-10 md:order-2"
                   style={{ backgroundColor: '#7cb983' }}>
                2
              </div>
              <div className="flex-1 md:w-1/2 md:pl-12 md:order-3">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Document Submission
                  </h3>
                  <p style={{ color: '#006837' }}>
                    Upload scanned copies of all required documents including mark sheets, certificates, community certificate, and photographs as per specifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 - Entrance Exam / Counseling */}
            <div className="relative flex flex-row md:flex-row items-start mb-12 gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-white font-bold z-10"
                   style={{ backgroundColor: '#7cb983' }}>
                3
              </div>
              <div className="flex-1 md:w-1/2 md:pr-12 md:text-right md:order-1">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Entrance Exam / Counseling
                  </h3>
                  <p style={{ color: '#006837' }}>
                    Appear for TNTEU B.Ed entrance examination (if applicable) or participate in counseling process based on merit and reservation criteria.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>

            {/* Step 4 - Merit List & Selection */}
            <div className="relative flex flex-row md:flex-row items-start mb-12 gap-4">
              <div className="md:w-1/2 md:pr-12 md:order-1 hidden md:block"></div>
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-white font-bold z-10 md:order-2"
                   style={{ backgroundColor: '#7cb983' }}>
                4
              </div>
              <div className="flex-1 md:w-1/2 md:pl-12 md:order-3">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Merit List & Selection
                  </h3>
                  <p style={{ color: '#006837' }}>
                    Check the merit list published on the college website. Selected candidates receive admission offer through email and SMS notification.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 - Fee Payment */}
            <div className="relative flex flex-row md:flex-row items-start mb-12 gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-white font-bold z-10"
                   style={{ backgroundColor: '#7cb983' }}>
                5
              </div>
              <div className="flex-1 md:w-1/2 md:pr-12 md:text-right md:order-1">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Fee Payment
                  </h3>
                  <p style={{ color: '#006837' }}>
                    Pay the prescribed tuition fee through online payment gateway or demand draft within the stipulated time to confirm your admission.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>

            {/* Step 6 - Document Verification & Enrollment */}
            <div className="relative flex flex-row md:flex-row items-start gap-4">
              <div className="md:w-1/2 md:pr-12 md:order-1 hidden md:block"></div>
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-white font-bold z-10 md:order-2"
                   style={{ backgroundColor: '#7cb983' }}>
                6
              </div>
              <div className="flex-1 md:w-1/2 md:pl-12 md:order-3">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Document Verification & Enrollment
                  </h3>
                  <p style={{ color: '#006837' }}>
                    Visit the campus with original documents for verification. Complete enrollment formalities and receive your student ID and class schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Start Application Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white bg-[#7cb983] hover:bg-[#6ba872] transition-transform hover:scale-105">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Start Your Application
            </button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Find answers to common queries about B.Ed Social Science program
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4 group-open:text-[#7cb983]" style={{ color: '#002309' }}>
                  What is the eligibility for B.Ed Social Science admission?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  Candidates must hold a Bachelor's degree in Arts (BA) or equivalent with Social Science subjects (History, Geography, Political Science, Economics, Sociology, Civics) with at least 50% marks (45% for SC/ST/OBC/PWD candidates). Candidates appearing for final year examinations may also apply provisionally.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4 group-open:text-[#7cb983]" style={{ color: '#002309' }}>
                  What is the duration of B.Ed Social Science program?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  The B.Ed Social Science program is a 2-year (4 semesters) full-time professional degree course as per NCTE (National Council for Teacher Education) norms and TNTEU (Tamil Nadu Teachers Education University) guidelines.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4 group-open:text-[#7cb983]" style={{ color: '#002309' }}>
                  What subjects can I teach after completing B.Ed Social Science?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  After completing B.Ed Social Science, you can teach History, Geography, Political Science, Civics, Economics, and Sociology at upper primary (Classes 6-8), secondary (Classes 9-10), and higher secondary (Classes 11-12) levels in government and private schools across India.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4 group-open:text-[#7cb983]" style={{ color: '#002309' }}>
                  Is JKKN College of Education NCTE approved?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Social Science program meets all regulatory standards for teacher education in India.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4 group-open:text-[#7cb983]" style={{ color: '#002309' }}>
                  What are the career opportunities after B.Ed Social Science?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  Graduates can become Social Science teachers in government and private schools, work as curriculum developers, educational content writers, join museums and heritage organizations, work with NGOs in civic education, or pursue higher studies like M.Ed and Ph.D in Education.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4 group-open:text-[#7cb983]" style={{ color: '#002309' }}>
                  Does the program include practical teaching experience?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  Yes, the program includes extensive practical training through micro-teaching sessions, simulated teaching, educational excursions to historical and geographical sites, and a mandatory school internship where Learners teach Social Science subjects in actual classrooms under mentor guidance.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4 group-open:text-[#7cb983]" style={{ color: '#002309' }}>
                  Are scholarships available for B.Ed Social Science?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  Yes, various scholarships are available including government scholarships for SC/ST/OBC/MBC candidates, merit-based scholarships for toppers, and institutional scholarships for economically weaker sections. Contact the admission office for detailed scholarship information.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4 group-open:text-[#7cb983]" style={{ color: '#002309' }}>
                  Can I pursue B.Ed Social Science after BA with distance education?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#006837' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  Yes, candidates with BA degree from UGC-recognized distance education universities are eligible for B.Ed Social Science admission, provided they meet the minimum percentage criteria and have studied Social Science subjects at the graduation level.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#7cb983' }}>
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Ready to Become a Social Science Educator?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
            Join JKKN College of Education and transform your passion for History, Geography, and Civics into a rewarding teaching career. Shape the future citizens of our nation through progressive education.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-transform hover:scale-105"
                    style={{ backgroundColor: '#ffffff', color: '#7cb983' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Apply for Admission
            </Link>
            <a href='tel:+919345855001' className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 transition-all hover:bg-white hover:text-[#002309]"
                    style={{ borderColor: '#ffffff', color: '#ffffff' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
