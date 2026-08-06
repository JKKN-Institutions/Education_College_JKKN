'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HistoryDepartment() {
  const [activeSemester, setActiveSemester] = useState(1)

  const curriculumData = {
    1: [
      { code: 'EDU 101', title: 'Childhood and Growing Up', description: 'Understanding child development, adolescent psychology, learning theories, and educational psychology principles for effective history teaching.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU 102', title: 'Contemporary India and Education', description: 'Exploring the Indian education system, national policies, constitutional provisions, and the role of history in shaping national identity.', credits: 4, type: 'Theory' },
      { code: 'HIS 103', title: 'Pedagogy of History - Part I', description: 'Foundations of History teaching, aims and objectives, instructional strategies, and teaching methods for Ancient and Medieval Indian History.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU 104', title: 'Language Across the Curriculum', description: 'Integration of language skills in teaching History, historical vocabulary development, and effective communication strategies for social science education.', credits: 2, type: 'Theory' },
      { code: 'EDU 105', title: 'Reading and Reflecting on Texts', description: 'Critical analysis of historical texts, primary sources, historiographical debates, and development of reflective practices in history education.', credits: 2, type: 'Theory + Assignment' },
    ],
    2: [
      { code: 'EDU 201', title: 'Learning and Teaching', description: 'Advanced learning theories, cognitive development, motivation strategies, and effective classroom teaching methodologies for history education.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU 202', title: 'Knowledge and Curriculum', description: 'Curriculum development theories, syllabus design, textbook analysis, and curriculum transaction strategies for History and Social Science education.', credits: 4, type: 'Theory' },
      { code: 'HIS 203', title: 'Pedagogy of History - Part II', description: 'Advanced teaching methods for Modern Indian History, World History, Civics, and contemporary global issues through historical perspectives.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU 204', title: 'Assessment for Learning', description: 'Evaluation techniques for history, question paper design, continuous comprehensive evaluation (CCE), and formative assessment in social sciences.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU 205', title: 'Drama and Art in Education', description: 'Creative teaching approaches, historical role-play, dramatization of historical events, timeline activities, and artistic methods for engaging History education.', credits: 2, type: 'Practical' },
    ],
    3: [
      { code: 'EDU 301', title: 'School Internship - Phase I', description: '8-week intensive school internship with supervised teaching practice in History and Social Science, lesson planning, and classroom management experience.', credits: 16, type: 'Practical / Field Work' },
      { code: 'EDU 302', title: 'Inclusive Education', description: 'Teaching diverse learners, special education needs, differentiated instruction in history, and creating inclusive social science classrooms.', credits: 4, type: 'Theory' },
      { code: 'EDU 303', title: 'ICT in Education', description: 'Educational technology, digital archives, virtual museum tours, GIS mapping for history, online historical databases, and e-learning platforms for history education.', credits: 4, type: 'Theory + Lab' },
      { code: 'HIS 304', title: 'Teaching of Indian History', description: 'Specialized methods for teaching Ancient, Medieval, and Modern Indian History, freedom struggle, constitutional development, and nation-building processes.', credits: 4, type: 'Theory + Practical' },
      { code: 'HIS 305', title: 'Heritage and Museum Education', description: 'Field visits to heritage sites, museum-based learning, archaeological interpretation, and integrating local history into classroom teaching.', credits: 2, type: 'Practical / Field Visit' },
    ],
    4: [
      { code: 'EDU 401', title: 'School Internship - Phase II', description: '8-week advanced internship with independent teaching, action research project on history pedagogy, and comprehensive classroom experience.', credits: 16, type: 'Practical / Field Work' },
      { code: 'EDU 402', title: 'Gender, School and Society', description: 'Gender sensitization in history teaching, women\'s history, equity perspectives, addressing historical biases, and creating gender-inclusive learning environments.', credits: 4, type: 'Theory' },
      { code: 'HIS 403', title: 'Teaching of World History', description: 'Methods for teaching World Civilizations, Renaissance, Industrial Revolution, World Wars, Cold War, globalization, and contemporary world affairs.', credits: 4, type: 'Theory + Practical' },
      { code: 'HIS 404', title: 'Teaching of Civics and Political Science', description: 'Pedagogy for teaching Indian Constitution, democracy, governance, citizenship education, political systems, and contemporary political developments.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU 405', title: 'Understanding the Self', description: 'Personal growth, teacher identity development, reflective practice, professional ethics, and preparing for continuous professional development in education.', credits: 2, type: 'Theory + Practical' },
      { code: 'EDU 406', title: 'Action Research Project', description: 'Independent research on a chosen topic in history education, research methodology, data analysis, and presentation of findings.', credits: 4, type: 'Project' },
    ],
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%)] lg:bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%),url(/images/B.Ed-History-Hero-Banner-Image.webp)] bg-cover bg-center">
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
                <span style={{ color: '#7cb983' }}>History</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#ffffff' }}>
                Bachelor of Education in History
              </h2>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Transform your passion for History into an inspiring teaching career. Our comprehensive 2-year program equips you with innovative pedagogical techniques, critical thinking skills, and deep knowledge in Indian History, World History, Civics, and Social Sciences to shape future generations.
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
                src="/images/B.Ed-History-Hero-Banner-Image.webp"
                alt="B.Ed History Department"
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
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Course Overview
            </h2>
            <div className="h-1 w-20 mx-auto" style={{ backgroundColor: '#7cb983' }}></div>
          </div>

          <p className="text-center text-lg mb-12" style={{ color: '#006837' }}>
            Comprehensive training to become an exceptional History educator
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
                    he Bachelor of Education (B.Ed) in History at JKKN College of Education is a meticulously designed 2-year professional program that prepares passionate individuals to become highly effective History teachers. This NCTE-approved and TNTEU-affiliated program combines rigorous academic training with extensive practical teaching experience, ensuring graduates are well-equipped to inspire young minds with the richness of human civilization and historical consciousness.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                Our curriculum encompasses Indian History from ancient Indus Valley Civilization to contemporary India, World History covering major civilizations and global transformations, Civics and Political Science, Geography integration, and Heritage Studies. Learners develop expertise in historical methodology, source analysis, archaeological interpretation, and the art of making history engaging and relevant for secondary and higher secondary school students.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                The program emphasizes critical historical thinking, evidence-based analysis, and the development of historical empathy among learners. With dedicated Learning Facilitators, state-of-the-art teaching laboratories, access to historical archives, museum visits, heritage site explorations, and partnerships with leading schools across Tamil Nadu, JKKN provides an unparalleled learning environment for aspiring History educators. Our graduates consistently secure positions in prestigious government schools, CBSE/ICSE institutions, international schools, and educational organizations across India.
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

              {/* Approval */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  APPROVAL
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  NCTE Approved
                </div>
              </div>

              {/* Teaching Subjects */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  TEACHING SUBJECTS
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  History, Civics, Social Science
                </div>
              </div>

              {/* Intake Capacity */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  INTAKE CAPACITY
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  50
                </div>
                <div className="text-sm" style={{ color: '#006837' }}>
                  Seats per Year
                </div>
              </div>
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
              Key features that make our B.Ed History program exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NCTE Approved Program */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
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
                Fully approved by National Council for Teacher Education ensuring your degree is recognized nationally for TGT/PGT positions in all boards.
              </p>
            </div>

            {/* Heritage & Museum Education */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Heritage & Museum Education
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Unique hands-on learning through heritage site visits, museum education sessions, and archaeological exploration integrated into the curriculum.
              </p>
            </div>

            {/* Expert Learning Facilitators */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
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
                Learn from experienced educators with expertise in Indian History, World History, historiography, and modern history teaching methodologies.
              </p>
            </div>

            {/* Digital History Resources */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Digital History Resources
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Access to digital archives, historical databases, virtual museum tours, and multimedia teaching tools for engaging history education.
              </p>
            </div>

            {/* NEP 2020 Aligned Curriculum */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                NEP 2020 Aligned Curriculum
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Updated syllabus incorporating National Education Policy guidelines with focus on multidisciplinary approach and Indian knowledge systems.
              </p>
            </div>

            {/* Scholarship Support */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
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
              Requirements for admission to B.Ed History program
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
                    Bachelor's degree in History (B.A. History) or equivalent from a recognized university
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
                    History as a major subject or substantial History papers at degree level
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
                    B.A. with Political Science, Sociology, Economics with History subsidiary also eligible
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
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[1, 2, 3, 4].map((semester) => (
              <button
                key={semester}
                onClick={() => setActiveSemester(semester)}
                className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                  activeSemester === semester
                    ? 'text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                style={activeSemester === semester ? { backgroundColor: '#002309' } : { boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
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
                className="p-6 rounded-xl flex flex-col md:flex-row gap-6"
                style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-lg flex flex-col items-center justify-center text-white font-bold"
                    style={{ backgroundColor: course.code.startsWith('HIS') ? '#006837' : '#7cb983' }}
                  >
                    <span className="text-xs">{course.code.split(' ')[0]}</span>
                    <span className="text-lg">{course.code.split(' ')[1]}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#002309' }}>
                    {course.title}
                  </h3>
                  <p className="mb-3" style={{ color: '#006837' }}>
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm" style={{ color: '#006837' }}>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#002309' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Career Prospects
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Diverse career opportunities await B.Ed History graduates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* School History Teacher */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                School History Teacher
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Teach History, Civics, and Social Science at secondary and higher secondary levels in government, aided, and private schools across India.
              </p>
            </div>

            {/* CBSE/ICSE TGT/PGT */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                CBSE/ICSE TGT/PGT
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Qualify for Trained Graduate Teacher (TGT) and Post Graduate Teacher (PGT) positions in prestigious CBSE, ICSE, and international schools.
              </p>
            </div>

            {/* Museum Educator */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Museum Educator
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Work as education officers in museums, heritage sites, and cultural institutions designing educational programs and guided tours.
              </p>
            </div>

            {/* Curriculum Developer */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Curriculum Developer
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Design History and Social Science curricula, create educational content, develop textbooks, and work with educational boards and publishers.
              </p>
            </div>

            {/* Civil Services Coaching */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Civil Services Coaching
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Join coaching institutes teaching History for UPSC, TNPSC, and other competitive examinations leveraging your subject expertise.
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
                Pursue advanced degrees in Education, History Education, or pursue Ph.D to become college-level educators and researchers in history pedagogy.
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
              Why Choose JKKN for B.Ed History?
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Discover the advantages of pursuing your B.Ed History at JKKN College of Education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 55+ Years of Educational Excellence */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    55+ Years of Educational Excellence
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Part of JKKN Institutions with a proven legacy of transforming lives through progressive education since 1969.
                  </p>
                </div>
              </div>
            </div>

            {/* 94% Placement Success Rate */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    98% Placement Success Rate
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Strong placement record with graduates securing positions in government schools, CBSE/ICSE schools, and prestigious educational institutions across India.
                  </p>
                </div>
              </div>
            </div>

            {/* Heritage-Integrated Learning */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Heritage-Integrated Learning
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Unique curriculum with heritage site visits, museum education, archaeological exploration, and experiential learning in historical environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Extensive Partner School Network */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Extensive Partner School Network
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Tie-ups with 50+ schools for internship providing diverse teaching experiences in urban, rural, government, and private school settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Rich Historical Resource Library */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Rich Historical Resource Library
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Well-stocked library with historical texts, primary sources, digital archives, maps, and multimedia resources for comprehensive history education.
                  </p>
                </div>
              </div>
            </div>

            {/* Affordable Quality Education */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Affordable Quality Education
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Government-regulated fees with multiple scholarship options ensuring quality teacher education accessible to all deserving candidates.
                  </p>
                </div>
              </div>
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
            {/* History Resource Center */}
            <div className="group relative overflow-hidden rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: '#002309', aspectRatio: '1' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 text-center">
                <h3 className="text-xs sm:text-lg font-semibold mb-1 sm:mb-2 break-words" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  History Resource Center
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <p className="text-xs sm:text-sm font-semibold break-words" style={{ color: '#ffffff' }}>
                  History Resource Center
                </p>
              </div>
            </div>

            {/* Digital Library */}
            <div className="group relative overflow-hidden rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: '#7cb983', aspectRatio: '1' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 text-center">
                <h3 className="text-sm sm:text-2xl font-bold break-words" style={{ color: '#ffffff' }}>
                  Digital Library
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <p className="text-xs sm:text-sm font-semibold break-words" style={{ color: '#ffffff' }}>
                  Digital Library
                </p>
              </div>
            </div>

            {/* Smart Classrooms */}
            <div className="group relative overflow-hidden rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: '#7cb983', aspectRatio: '1' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 text-center">
                <h3 className="text-sm sm:text-2xl font-bold break-words" style={{ color: '#ffffff' }}>
                  Smart Classrooms
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <p className="text-xs sm:text-sm font-semibold break-words" style={{ color: '#ffffff' }}>
                  Smart Learning Studios
                </p>
              </div>
            </div>

            {/* Micro Teaching Lab */}
            <div className="group relative overflow-hidden rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: '#002309', aspectRatio: '1' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 text-center">
                <h3 className="text-sm sm:text-2xl font-bold break-words" style={{ color: '#ffffff' }}>
                  Micro Teaching Lab
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <p className="text-xs sm:text-sm font-semibold break-words" style={{ color: '#ffffff' }}>
                  Micro-Teaching Lab
                </p>
              </div>
            </div>

            {/* Map & Globe Room */}
            <div className="group relative overflow-hidden rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: '#002309', aspectRatio: '1' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 text-center">
                <h3 className="text-xs sm:text-lg font-semibold break-words" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Map & Globe Room
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <p className="text-xs sm:text-sm font-semibold break-words" style={{ color: '#ffffff' }}>
                  Map & Globe Room
                </p>
              </div>
            </div>

            {/* Seminar Hall */}
            <div className="group relative overflow-hidden rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: '#7cb983', aspectRatio: '1' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 text-center">
                <h3 className="text-sm sm:text-2xl font-bold break-words" style={{ color: '#ffffff' }}>
                  Seminar Hall
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <p className="text-xs sm:text-sm font-semibold break-words" style={{ color: '#ffffff' }}>
                  Seminar Hall
                </p>
              </div>
            </div>

            {/* Computer Lab */}
            <div className="group relative overflow-hidden rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: '#002309', aspectRatio: '1' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 text-center">
                <h3 className="text-sm sm:text-2xl font-bold break-words" style={{ color: '#ffffff' }}>
                  Computer Lab
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <p className="text-xs sm:text-sm font-semibold break-words" style={{ color: '#ffffff' }}>
                  Computer Lab
                </p>
              </div>
            </div>

            {/* Hostel Facility */}
            <div className="group relative overflow-hidden rounded-xl transition-transform hover:scale-105"
                 style={{ backgroundColor: '#7cb983', aspectRatio: '1' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 text-center">
                <h3 className="text-sm sm:text-2xl font-bold break-words" style={{ color: '#ffffff' }}>
                  Hostel Facility
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <p className="text-xs sm:text-sm font-semibold break-words" style={{ color: '#ffffff' }}>
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
              Simple steps to begin your journey as a History educator
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2" style={{ backgroundColor: '#7cb983' }}></div>

            {/* Step 1 - Check Eligibility */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10"
                   style={{ backgroundColor: '#7cb983' }}>
                1
              </div>
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Check Eligibility
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Verify you meet the academic requirements: B.A. History or equivalent degree with minimum 50% marks (45% for reserved categories) with History as major subject.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>

            {/* Step 2 - Online Application */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 md:pr-12 md:order-1"></div>
              <div className="mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10"
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

            {/* Step 3 - Document Verification */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10"
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

            {/* Step 4 - Counseling & Seat Allotment */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 md:pr-12 md:order-1"></div>
              <div className="mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10"
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

            {/* Step 5 - Fee Payment & Enrollment */}
            <div className="relative flex flex-col md:flex-row items-center mb-12">
              <div className="mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10"
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

            {/* Step 6 - Orientation & Classes Begin */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:order-1"></div>
              <div className="mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10"
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
              Find answers to common queries about B.Ed History program
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  What is the eligibility for B.Ed History admission?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Candidates must hold a Bachelor's degree in History (B.A. History) or equivalent degree with History as a major subject from a recognized university with minimum 50% aggregate marks. Reserved category candidates (SC/ST/OBC/PWD) require minimum 45% marks. Candidates with B.A. in Political Science, Sociology, or Economics with History as subsidiary may also apply. Those appearing for final year degree examinations can apply provisionally.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  What is the duration of B.Ed History program?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                The B.Ed History program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, practical sessions, heritage visits, and school internship components as mandated by TNTEU guidelines.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  What subjects can I teach after completing B.Ed History?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                After completing B.Ed History, you are qualified to teach History, Civics, Political Science, Social Science, and related subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula. You can also teach Social Studies at middle school level (Classes 6-8).
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  Is JKKN College of Education NCTE approved?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed History program meets all regulatory standards for teacher education in India, ensuring your degree is recognized nationally for TGT/PGT teaching positions.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  What is the fee structure for B.Ed History?
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
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  Does the program include heritage site visits?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Yes, the B.Ed History program includes heritage site visits, museum education sessions, and archaeological exploration as part of the curriculum. Learners visit historical monuments, museums, and cultural sites to understand experiential learning methods and develop skills in using local heritage resources for classroom teaching.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  Can I pursue B.Ed History after B.A. with distance education?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Yes, candidates with B.A. History degree from UGC-recognized distance education universities/institutions are eligible for B.Ed History admission, provided they meet the minimum percentage criteria (50% general, 45% reserved) and other eligibility requirements. The distance education degree must be from a university listed in the UGC/AIU approved list.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold pr-4" style={{ color: '#002309' }}>
                  What are the career opportunities after B.Ed History?
                </h3>
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                B.Ed History graduates have diverse career options including: History/Civics/Social Science teachers in government and private schools, TGT/PGT positions in CBSE/ICSE schools, museum educators, heritage consultants, curriculum developers, educational content writers for history publications, civil services coaching faculty, and opportunities to pursue M.Ed/Ph.D for academic and research roles in higher education.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#7cb983' }}>
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Ready to Begin Your Journey as a History Educator?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
            Join JKKN College of Education and transform your passion for History into an inspiring teaching career. Admissions open for 2025-26 academic year.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-transform hover:scale-105"
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

      <Footer />
    </>
  )
}
