'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PoliticalScienceDepartment() {
  const [activeTab, setActiveTab] = useState(0)

  const curriculum = [
    {
      semester: 'Semester I',
      courses: [
        { code: 'EDU 101', name: 'Childhood and Growing Up', description: 'Understanding child development stages, adolescent psychology, learning theories, and factors influencing growth and development.', credits: 4, type: 'Theory' },
        { code: 'EDU 102', name: 'Contemporary India and Education', description: 'Indian education system, constitutional provisions, educational policies, NEP 2020, and contemporary educational challenges.', credits: 4, type: 'Theory' },
        { code: 'POL 103', name: 'Pedagogy of Political Science - I', description: 'Foundations of Political Science teaching, aims and objectives, nature and scope of teaching Civics and Indian Polity at secondary level.', credits: 4, type: 'Theory + Practical' },
        { code: 'EDU 104', name: 'Language Across the Curriculum', description: 'Role of language in learning, multilingual education, communication skills for effective teaching, and language development strategies.', credits: 2, type: 'Theory' },
        { code: 'EDU 105', name: 'Drama and Art in Education', description: 'Creative expression, role play, dramatization techniques for teaching Civics, street plays on social issues, and art integration in Political Science teaching.', credits: 2, type: 'Practical' },
        { code: 'EDU 106', name: 'Reading and Reflecting on Texts', description: 'Critical analysis of educational literature, constitutional documents, landmark judgments, and reflective practices for educators.', credits: 2, type: 'Seminar' },
      ]
    },
    {
      semester: 'Semester II',
      courses: [
        { code: 'EDU 201', name: 'Learning and Teaching', description: 'Learning theories, teaching methods, instructional strategies, lesson planning, and classroom management for effective education delivery.', credits: 4, type: 'Theory' },
        { code: 'EDU 202', name: 'Assessment for Learning', description: 'Evaluation techniques, formative and summative assessment, question paper design, continuous comprehensive evaluation (CCE), and rubric development.', credits: 4, type: 'Theory + Practical' },
        { code: 'POL 203', name: 'Pedagogy of Political Science - II', description: 'Advanced teaching methods for International Relations, Comparative Politics, teaching Indian Constitution, case study approach, and debate-based learning.', credits: 4, type: 'Theory + Practical' },
        { code: 'EDU 204', name: 'Knowledge and Curriculum', description: 'Curriculum development, textbook analysis, syllabus design for Political Science, NEP 2020 curriculum framework, and learning outcomes mapping.', credits: 4, type: 'Theory' },
        { code: 'EDU 205', name: 'Micro-Teaching Practice', description: 'Developing core teaching skills through micro-teaching sessions, peer teaching, video analysis, and feedback-based skill enhancement.', credits: 2, type: 'Practical' },
        { code: 'EDU 206', name: 'School Exposure Program', description: 'Initial school visits, observation of classroom teaching, understanding school culture, and interaction with practicing teachers.', credits: 2, type: 'Field Work' },
      ]
    },
    {
      semester: 'Semester III',
      courses: [
        { code: 'EDU 301', name: 'School Internship - Phase I', description: '8-week intensive school internship with supervised teaching practice, lesson planning, classroom management, and conducting mock parliament and debates.', credits: 16, type: 'Practical / Field Work' },
        { code: 'EDU 302', name: 'Inclusive Education', description: 'Teaching diverse learners, special education needs, differentiated instruction, inclusive classroom practices, and addressing learning disabilities.', credits: 4, type: 'Theory' },
        { code: 'EDU 303', name: 'ICT in Education', description: 'Educational technology, digital tools, online teaching methods, creating interactive Political Science content, e-learning platforms, and virtual simulations.', credits: 4, type: 'Theory + Lab' },
        { code: 'POL 304', name: 'Teaching Indian Constitution & Civics', description: 'Specialized methods for teaching Preamble, Fundamental Rights, DPSP, Constitutional Bodies, Local Self Government, and electoral processes.', credits: 4, type: 'Theory + Practical' },
      ]
    },
    {
      semester: 'Semester IV',
      courses: [
        { code: 'EDU 401', name: 'School Internship - Phase II', description: '8-week advanced internship with independent teaching, action research project, comprehensive classroom experience, and conducting voter awareness programs.', credits: 16, type: 'Practical / Field Work' },
        { code: 'EDU 402', name: 'Gender, School and Society', description: 'Gender sensitization, equity in education, addressing gender stereotypes, women\'s political participation, and creating inclusive learning environments.', credits: 4, type: 'Theory' },
        { code: 'EDU 403', name: 'Action Research Project', description: 'Educational research methodology, classroom-based research on civic engagement, data analysis, and research report preparation on Political Science education.', credits: 4, type: 'Research + Dissertation' },
        { code: 'EDU 404', name: 'Understanding the Self', description: 'Self-awareness, emotional intelligence, stress management, professional ethics, and personal development for educators promoting democratic values.', credits: 2, type: 'Theory + Workshop' },
        { code: 'POL 405', name: 'Teaching International Relations & Global Politics', description: 'Specialized pedagogy for teaching IR, UN System, Foreign Policy, Global Issues, Model United Nations, and contemporary world affairs integration.', credits: 4, type: 'Theory + Practical' },
      ]
    }
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%)] lg:bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%),url(/images/B.Ed-Political-Science-Hero-Banner-Image.webp)] bg-cover bg-center">
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
                <span style={{ color: '#7cb983' }}>Political Science</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#ffffff' }}>
                Bachelor of Education in Political Science
              </h2>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Transform your political science expertise into a rewarding teaching career. Our comprehensive 2-year program equips you with modern pedagogical techniques, practical teaching skills, and deep subject knowledge in Indian Polity, Civics, International Relations, and Political Theory.
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
                src="/images/B.Ed-Political-Science-Hero-Banner-Image.webp"
                alt="B.Ed Political Science Department"
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
            A comprehensive teacher education program designed to shape passionate Political Science educators
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
                    he Bachelor of Education (B.Ed) in Political Science at JKKN College of Education is a meticulously designed 2-year professional degree program that prepares graduates to become competent and effective Learning Facilitators for secondary and higher secondary schools. This NCTE-approved program combines strong theoretical foundations with extensive practical training in teaching Indian Polity, Civics, International Relations, Political Theory, and related social science subjects.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                Our curriculum emphasizes modern pedagogical approaches, innovative teaching methodologies, and technology-enhanced learning strategies. Learners gain hands-on experience through micro-teaching sessions, simulated teaching practices, and comprehensive school internships in partner institutions. The program is aligned with the National Education Policy (NEP) 2020, focusing on competency-based learning, outcome-based education, democratic values, and holistic development of future educators who can nurture responsible citizens.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                At JKKN Institutions, we believe in excellence without elitism. Our experienced Learning Facilitators, state-of-the-art Learning Studios, well-equipped social science resource centers, and comprehensive support systems ensure that every Learner receives personalized attention and guidance throughout their educational journey. Join us in our mission to transform lives through progressive education and create a new generation of inspiring Political Science educators who promote democratic values and civic responsibility.
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
              Discover what makes our B.Ed Political Science program exceptional
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
                Extensive school internship program with partner institutions providing real-world teaching experience, classroom management skills, and professional mentorship in diverse educational settings.
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
                Learn from experienced educators with extensive backgrounds in Political Science, Constitutional Law, International Relations, and modern pedagogy techniques.
              </p>
            </div>

            {/* Digital Learning Integration */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Digital Learning Integration
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Master ICT tools for education including smart board usage, digital content creation, online assessment platforms, and virtual classroom management for modern teaching environments.
              </p>
            </div>

            {/* Democratic Values Education */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Democratic Values Education
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Specialized training in teaching constitutional values, fundamental rights, civic duties, and democratic principles to develop responsible and informed citizens.
              </p>
            </div>

            {/* Global Perspective */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Global Perspective
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Comprehensive curriculum covering International Relations, Global Politics, and Comparative Government systems to provide Learners with world-class knowledge for teaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Eligibility Criteria
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Requirements and qualifications for B.Ed Political Science admission
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
                    Bachelor's degree (B.A/B.A Honours) in Political Science from a recognized university
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
                    Minimum 50% aggregate marks in qualifying degree (45% for SC/ST/OBC/PWD candidates)
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
                    Political Science as a major or elective subject in undergraduate studies
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
                    Candidates with B.A in History, Public Administration, or Sociology with Political Science combination are also eligible
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
                    Final year degree candidates can apply provisionally
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
                    Degrees from distance education (UGC recognized) are accepted
                  </p>
                </div>
              </div>
            </div>

            {/* Documents Required */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7cb983' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#002309' }}>
                  Documents Required
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
                    10th & 12th Mark Sheets and Certificates (Original + 2 copies)
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
                    Degree Certificate and all semester mark sheets
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
                    Transfer Certificate from last institution attended
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
                    Community Certificate (for reserved categories)
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
                    Aadhar Card, Passport size photos (8 copies)
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
                    Migration Certificate (if from other university)
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
                    Income Certificate (for scholarship applicants)
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
              Comprehensive semester-wise course structure aligned with NCTE and TNTEU guidelines
            </p>
          </div>

          {/* Semester Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {curriculum.map((sem, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                  activeTab === index
                    ? 'text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: activeTab === index ? '#002309' : 'transparent',
                  border: activeTab === index ? 'none' : '1px solid #e5e7eb'
                }}
              >
                {sem.semester}
              </button>
            ))}
          </div>

          {/* Course List */}
          <div className="space-y-4">
            {curriculum[activeTab].courses.map((course, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col md:flex-row gap-6"
                style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                    style={{
                      background: course.code.startsWith('POL')
                        ? 'linear-gradient(135deg, #006837 0%, #002309 100%)'
                        : 'linear-gradient(135deg, #7cb983 0%, #6ba872 100%)'
                    }}
                  >
                    <div className="text-center">
                      <div className="text-xs">{course.code.split(' ')[0]}</div>
                      <div>{course.code.split(' ')[1]}</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2" style={{ color: '#002309' }}>
                    {course.name}
                  </h4>
                  <p className="mb-3" style={{ color: '#006837' }}>
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm" style={{ color: '#6b7280' }}>
                    <span>Credits: {course.credits}</span>
                    <span>{course.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Diverse opportunities await B.Ed Political Science graduates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Secondary School Teacher */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Secondary School Teacher
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Teach Political Science, Civics, and Social Science in government and private schools for classes 9-10 across India following State Board, CBSE, or ICSE curricula.
              </p>
            </div>

            {/* Higher Secondary Teacher */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Higher Secondary Teacher
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Prepare students for competitive examinations and higher education in Political Science, Indian Polity, and International Relations at +2 level.
              </p>
            </div>

            {/* Civil Services Coaching Faculty */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Civil Services Coaching Faculty
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Join reputed coaching institutes teaching Indian Polity, Governance, and International Relations for UPSC, TNPSC, and other competitive examinations.
              </p>
            </div>

            {/* Curriculum Developer */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Curriculum Developer
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Design and develop Civics and Political Science curriculum materials, textbooks, digital content, and learning resources for educational institutions and publishers.
              </p>
            </div>

            {/* NGO & Civic Education Roles */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                NGO & Civic Education Roles
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Work with NGOs and government bodies on voter education, civic awareness programs, democratic literacy initiatives, and community engagement projects.
              </p>
            </div>

            {/* Higher Education (M.Ed/Ph.D) */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Higher Education (M.Ed/Ph.D)
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Pursue advanced degrees in Education, Political Science Education, or Public Policy and become college-level educators, researchers, or educational administrators.
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
              Why Choose JKKN for B.Ed Political Science?
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Discover the advantages of pursuing your B.Ed Political Science at JKKN College of Education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 55+ Years of Educational Excellence */}
            <div className="p-8 rounded-xl border-l-4"
                 style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  1
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  55+ Years of Educational Excellence
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Part of JKKN Institutions with a proven legacy of transforming lives through progressive education since 1969.
              </p>
            </div>

            {/* 94% Placement Success Rate */}
            <div className="p-8 rounded-xl border-l-4"
                 style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  2
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  98% Placement Success Rate
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Strong placement record with graduates securing positions in government schools, CBSE/ICSE schools, coaching institutes, and prestigious educational institutions.
              </p>
            </div>

            {/* NEP 2020 Aligned Curriculum */}
            <div className="p-8 rounded-xl border-l-4"
                 style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  3
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  NEP 2020 Aligned Curriculum
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Curriculum updated with contemporary political developments, constitutional amendments, current affairs integration, and competency-based learning outcomes.
              </p>
            </div>

            {/* Extensive Partner School Network */}
            <div className="p-8 rounded-xl border-l-4"
                 style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  4
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Extensive Partner School Network
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Tie-ups with 50+ schools for internship providing diverse teaching experiences in urban, rural, government, and private settings across Tamil Nadu.
              </p>
            </div>

            {/* Civic Engagement Initiatives */}
            <div className="p-8 rounded-xl border-l-4"
                 style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  5
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Civic Engagement Initiatives
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Unique programs including Mock Parliament, Model UN, Voter Awareness Campaigns, and Constitutional Day celebrations providing practical democratic education experience.
              </p>
            </div>

            {/* Affordable Quality Education */}
            <div className="p-8 rounded-xl border-l-4"
                 style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  6
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#002309' }}>
                  Affordable Quality Education
                </h3>
              </div>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Government-regulated fees with multiple scholarship options ensuring quality teacher education accessible to all deserving candidates from diverse backgrounds.
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
            {/* Social Science Lab */}
            <div className="rounded-2xl p-3 sm:p-8 flex flex-col justify-end min-h-[140px] sm:min-h-[200px]"
                 style={{ backgroundColor: '#002309' }}>
              <h3 className="text-sm sm:text-2xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>
                Social Science Lab
              </h3>
              <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Social Science Lab
              </p>
            </div>

            {/* Digital Library */}
            <div className="rounded-2xl p-3 sm:p-8 flex flex-col justify-end min-h-[140px] sm:min-h-[200px]"
                 style={{ backgroundColor: '#7cb983' }}>
              <h3 className="text-sm sm:text-2xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>
                Digital Library
              </h3>
              <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Digital Library
              </p>
            </div>

            {/* Micro Teaching */}
            <div className="rounded-2xl p-3 sm:p-8 flex flex-col justify-end min-h-[140px] sm:min-h-[200px]"
                 style={{ backgroundColor: '#002309' }}>
              <h3 className="text-sm sm:text-2xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>
                Micro Teaching
              </h3>
              <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Micro-Teaching Lab
              </p>
            </div>

            {/* Computer Lab */}
            <div className="rounded-2xl p-3 sm:p-8 flex flex-col justify-end min-h-[140px] sm:min-h-[200px]"
                 style={{ backgroundColor: '#7cb983' }}>
              <h3 className="text-sm sm:text-2xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>
                Computer Lab
              </h3>
              <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Computer Lab
              </p>
            </div>

            {/* Seminar Hall */}
            <div className="rounded-2xl p-3 sm:p-8 flex flex-col justify-end min-h-[140px] sm:min-h-[200px]"
                 style={{ backgroundColor: '#7cb983' }}>
              <h3 className="text-sm sm:text-2xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>
                Seminar Hall
              </h3>
              <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Seminar Hall
              </p>
            </div>

            {/* Resource Center */}
            <div className="rounded-2xl p-3 sm:p-8 flex flex-col justify-end min-h-[140px] sm:min-h-[200px]"
                 style={{ backgroundColor: '#002309' }}>
              <h3 className="text-sm sm:text-2xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>
                Resource Center
              </h3>
              <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Resource Center
              </p>
            </div>

            {/* Hostel */}
            <div className="rounded-2xl p-3 sm:p-8 flex flex-col justify-end min-h-[140px] sm:min-h-[200px]"
                 style={{ backgroundColor: '#7cb983' }}>
              <h3 className="text-base sm:text-3xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>
                Hostel
              </h3>
              <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Hostel Facility
              </p>
            </div>

            {/* Auditorium */}
            <div className="rounded-2xl p-3 sm:p-8 flex flex-col justify-end min-h-[140px] sm:min-h-[200px]"
                 style={{ backgroundColor: '#7cb983' }}>
              <h3 className="text-sm sm:text-2xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>
                Auditorium
              </h3>
              <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Auditorium
              </p>
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
              Simple steps to begin your journey as a Political Science educator
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden md:block"
                 style={{ background: 'linear-gradient(to bottom, #7cb983 0%, #7cb983 100%)' }}></div>

            {/* Step 1 - Check Eligibility */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="flex-shrink-0 z-10 mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  1
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pr-12 md:text-right md:order-first">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Check Eligibility
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Verify you meet the academic requirements: B.A in Political Science or equivalent degree with minimum 50% marks (45% for reserved categories) with Political Science as a subject.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>

            {/* Step 2 - Online Application */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="w-full md:w-1/2 md:pr-12 hidden md:block"></div>
              <div className="flex-shrink-0 z-10 mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  2
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 md:text-left">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Online Application
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Complete the online application form on our official website or TNTEU portal. Upload required documents and pay the application fee online.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 - Document Verification */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="flex-shrink-0 z-10 mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  3
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pr-12 md:text-right md:order-first">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Document Verification
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Submit original documents for verification at the college admission office. Ensure all certificates are attested and complete as per checklist.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>

            {/* Step 4 - Counseling & Seat Allotment */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="w-full md:w-1/2 md:pr-12 hidden md:block"></div>
              <div className="flex-shrink-0 z-10 mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  4
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 md:text-left">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Counseling & Seat Allotment
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Attend counseling session as per TNTEU schedule. Seats are allotted based on merit, entrance exam scores, and reservation norms applicable to Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 - Fee Payment & Enrollment */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="flex-shrink-0 z-10 mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  5
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pr-12 md:text-right md:order-first">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Fee Payment & Enrollment
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Pay the prescribed fees within the stipulated time. Complete enrollment formalities and receive your admission confirmation letter.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 hidden md:block"></div>
            </div>

            {/* Step 6 - Orientation & Classes Begin */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12 hidden md:block"></div>
              <div className="flex-shrink-0 z-10 mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  6
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 md:text-left">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Orientation & Classes Begin
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Attend the orientation program to familiarize with campus, Learning Facilitators, and academic schedule. Begin your transformative journey as a future educator!
                  </p>
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
              Find answers to common queries about B.Ed Political Science program
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What is the eligibility for B.Ed Political Science admission?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Candidates must hold a Bachelor's degree in Political Science (B.A) or equivalent degree with Political Science as a major or elective subject from a recognized university with minimum 50% aggregate marks. Reserved category candidates (SC/ST/OBC/PWD) require minimum 45% marks. Candidates with B.A in History, Public Administration, or Sociology with Political Science combination are also eligible. Final year degree candidates may apply provisionally.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What is the duration of B.Ed Political Science program?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                The B.Ed Political Science program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, practical sessions, school internships, and community engagement components as mandated by TNTEU guidelines.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What subjects can I teach after completing B.Ed Political Science?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                After completing B.Ed Political Science, you are qualified to teach Political Science, Civics, Indian Polity, Social Science, and related subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula. You can also teach History and Geography in combination with Political Science at secondary level.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  Is JKKN College of Education NCTE approved?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Political Science program meets all regulatory standards for teacher education in India, ensuring national recognition and acceptance of your degree.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  Can I appear for TET/CTET after B.Ed Political Science?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Yes, after completing B.Ed Political Science from JKKN College, you are eligible to appear for TET (Teacher Eligibility Test) conducted by state governments and CTET (Central Teacher Eligibility Test) conducted by CBSE. Qualifying these tests is mandatory for teaching positions in government and government-aided schools. We also provide guidance and coaching support for these examinations.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What practical training does the program include?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                The B.Ed Political Science program includes extensive practical training through micro-teaching sessions, simulated teaching, and 16-week school internship spread across two semesters. Learners also participate in Mock Parliament sessions, Model United Nations, voter awareness campaigns, Constitutional Day celebrations, and community civic education initiatives under mentor guidance.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  Are scholarships available for B.Ed Political Science?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Yes, various scholarships are available including Tamil Nadu Government scholarships for SC/ST/OBC/BC candidates, merit-based scholarships, and scholarships for economically weaker sections. Eligible candidates can also avail central government schemes like Post-Matric Scholarship. Contact the admission office for detailed information on available scholarships and application procedures.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="group p-6 rounded-xl bg-white" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  Can I pursue B.Ed Political Science after distance education B.A?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Yes, candidates with B.A degree in Political Science from UGC-recognized distance education programs (such as IGNOU, state open universities, or university distance education directorates) are eligible for B.Ed Political Science admission, provided they meet the minimum percentage criteria and other eligibility requirements as specified by TNTEU.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#7cb983' }}>
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Ready to Shape Future Citizens?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Join JKKN College of Education and embark on a rewarding career as a Political Science educator. Applications are now open for the 2025-26 academic year. Transform your passion for Political Science and democratic values into a meaningful teaching career.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-transform hover:scale-105"
                    style={{ backgroundColor: '#ffffff', color: '#7cb983' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Apply Now
            </Link>
            <a href="tel:+919345855001" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 transition-all hover:bg-white hover:text-[#002309]"
                    style={{ borderColor: '#ffffff', color: '#ffffff' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Talk to Counselor
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
