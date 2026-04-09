'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BotanyDepartment() {
  const [activeSemester, setActiveSemester] = useState(1)

  const curriculumData = {
    1: [
      { code: 'EDU 101', title: 'Childhood and Growing Up', description: 'Study of child development, adolescent psychology, learning theories, and factors influencing growth and development of learners.', credits: 4, type: 'Theory' },
      { code: 'EDU 102', title: 'Contemporary India and Education', description: 'Educational philosophy, constitutional provisions, national policies, and contemporary issues in Indian education system.', credits: 4, type: 'Theory' },
      { code: 'EDU 103', title: 'Language Across the Curriculum', description: 'Role of language in education, communication skills, reading comprehension, and language development strategies for science teaching.', credits: 2, type: 'Theory' },
      { code: 'BOT 104', title: 'Pedagogy of Botany - Part I', description: 'Introduction to Botany education, aims and objectives, curriculum analysis, teaching methods, and lesson planning for plant science topics.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU 105', title: 'Understanding Disciplines and Subjects', description: 'Nature of knowledge, interdisciplinary approaches, and subject-specific pedagogical content knowledge for science education.', credits: 2, type: 'Theory' },
      { code: 'EDU 106', title: 'Micro Teaching & Simulated Teaching', description: 'Core teaching skills practice, micro-lesson planning, peer teaching, feedback analysis, and teaching skill development for Botany.', credits: 4, type: 'Practical' },
    ],
    2: [
      { code: 'EDU 201', title: 'Learning and Teaching', description: 'Theories of learning, cognitive processes, motivation, memory, transfer of learning, and constructivist approaches in science education.', credits: 4, type: 'Theory' },
      { code: 'EDU 202', title: 'Assessment for Learning', description: 'Types of assessment, formative and summative evaluation, question paper design, rubrics, and continuous comprehensive evaluation in Botany.', credits: 4, type: 'Theory' },
      { code: 'BOT 203', title: 'Pedagogy of Botany - Part II', description: 'Advanced teaching strategies, laboratory management, herbarium techniques, field study methods, project-based learning in plant science.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU 204', title: 'Drama and Art in Education', description: 'Creative approaches to teaching, role play, nature sketching, botanical illustrations, and artistic expression in science education.', credits: 2, type: 'Practical' },
      { code: 'EDU 205', title: 'Reading and Reflecting on Texts', description: 'Critical analysis of educational and scientific texts, reflective practice, academic writing, and research article comprehension.', credits: 2, type: 'Theory + Seminar' },
      { code: 'BOT 206', title: 'Botanical Laboratory Skills', description: 'Laboratory techniques, microscopy skills, specimen preparation, plant identification, slide preparation, and safety protocols.', credits: 4, type: 'Practical' },
    ],
    3: [
      { code: 'EDU 301', title: 'School Internship - Phase I', description: '8-week intensive school internship with supervised teaching practice, lesson planning, laboratory demonstrations, and classroom management experience.', credits: 16, type: 'Practical / Field Work' },
      { code: 'EDU 302', title: 'Inclusive Education', description: 'Teaching diverse learners, special education needs, differentiated instruction, adaptive teaching strategies for science learning.', credits: 4, type: 'Theory' },
      { code: 'EDU 303', title: 'ICT in Education', description: 'Educational technology, digital tools, virtual labs, 3D plant models, online teaching methods, and e-learning platforms for Botany.', credits: 4, type: 'Theory + Lab' },
      { code: 'BOT 304', title: 'Teaching of Plant Physiology & Ecology', description: 'Specialized methods for teaching plant processes, photosynthesis, respiration, ecology concepts, ecosystem studies, and environmental education.', credits: 4, type: 'Theory + Practical' },
    ],
    4: [
      { code: 'EDU 401', title: 'School Internship - Phase II', description: '8-week advanced internship with independent teaching, action research project, laboratory management, and comprehensive classroom experience.', credits: 16, type: 'Practical / Field Work' },
      { code: 'EDU 402', title: 'Gender, School and Society', description: 'Gender sensitization, equity in education, addressing stereotypes in science, and creating inclusive learning environments.', credits: 4, type: 'Theory' },
      { code: 'EDU 403', title: 'Action Research Project', description: 'Educational research methodology, classroom-based research in Botany teaching, data analysis, and research report preparation.', credits: 4, type: 'Research + Dissertation' },
      { code: 'EDU 404', title: 'Understanding the Self', description: 'Self-awareness, emotional intelligence, stress management, professional ethics, and personal development for educators.', credits: 2, type: 'Theory + Workshop' },
      { code: 'BOT 405', title: 'Teaching of Genetics, Biotechnology & Biodiversity', description: 'Specialized pedagogy for Genetics, Biotechnology, and Biodiversity conservation topics with modern teaching approaches and ethical considerations.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU 406', title: 'Environmental Education', description: 'Environmental awareness, sustainability education, climate change pedagogy, conservation teaching methods, and eco-school initiatives.', credits: 2, type: 'Theory + Field Work' },
    ],
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%)] lg:bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%),url(/images/B.Ed-Botany-Hero-Banner-Image.png)] bg-cover bg-center">
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
                <span style={{ color: '#7cb983' }}>Botany</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#ffffff' }}>
                Bachelor of Education in Botany
              </h2>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Transform your passion for plant science into a rewarding teaching career. Our comprehensive 2-year program equips you with modern pedagogical techniques, practical teaching skills, and deep subject knowledge in Plant Biology, Ecology, Plant Physiology, and Environmental Science.
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
              <img
                src="/images/B.Ed-Botany-Hero-Banner-Image.png"
                alt="B.Ed Botany Department"
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Course Overview
            </h2>
            <div className="h-1 w-20 mx-auto" style={{ backgroundColor: '#7cb983' }}></div>
          </div>

          <p className="text-center text-lg mb-12" style={{ color: '#006837' }}>
            A comprehensive teacher education program designed to shape passionate Botany educators
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
                    he Bachelor of Education (B.Ed) in Botany at JKKN College of Education is a meticulously designed 2-year professional degree program that prepares graduates to become competent and effective Learning Facilitators for secondary and higher secondary schools. This NCTE-approved program combines strong theoretical foundations with extensive practical training in teaching Plant Biology, Plant Physiology, Ecology, Genetics, Biotechnology, and Environmental Science.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                Our curriculum emphasizes modern pedagogical approaches, innovative teaching methodologies, and technology-enhanced learning strategies. Learners gain hands-on experience through micro-teaching sessions, simulated teaching practices, botanical laboratory experiments, herbarium preparation, field studies, and comprehensive school internships in partner institutions. The program is aligned with the National Education Policy (NEP) 2020, focusing on competency-based learning, outcome-based education, and holistic development of future educators.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                At JKKN Institutions, we believe in excellence without elitism. Our experienced Learning Facilitators, state-of-the-art Learning Studios, well-equipped botanical laboratories, botanical garden, and comprehensive support systems ensure that every Learner receives personalized attention and guidance throughout their educational journey. Join us in our mission to transform lives through progressive education and create a new generation of inspiring Botany educators who can foster environmental awareness and scientific curiosity.
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
                  2 Years <span className="text-base font-normal" style={{ color: '#7cb983' }}>(4 Semesters)</span>
                </div>
              </div>

              {/* Mode of Study */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  MODE OF STUDY
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  Full-Time <span className="text-base font-normal" style={{ color: '#002309' }}>On-Campus</span>
                </div>
              </div>

              {/* Total Intake */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  TOTAL INTAKE
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  50 Seats <span className="text-base font-normal" style={{ color: '#7cb983' }}>per Academic Year</span>
                </div>
              </div>

              {/* Affiliation */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#006837' }}>
                  AFFILIATION
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#002309' }}>
                  TNTEU <span className="text-base font-normal" style={{ color: '#002309' }}>Chennai</span>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Program Highlights
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Discover what makes our B.Ed Botany program exceptional
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

            {/* Advanced Botanical Labs */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Advanced Botanical Labs
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Well-equipped botanical laboratories with modern microscopes, specimen collections, herbarium facilities, and tissue culture equipment for comprehensive practical training.
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
                Extensive school internship program with partner institutions providing real-world teaching experience, laboratory management skills, and professional mentorship.
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
                Learn from experienced educators with extensive backgrounds in Botany education, plant science research, ecological studies, and modern pedagogy.
              </p>
            </div>

            {/* Field Studies & Excursions */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Field Studies & Excursions
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Regular botanical excursions to forests, botanical gardens, and biodiversity hotspots providing hands-on experience with plant diversity and ecological concepts.
              </p>
            </div>

            {/* ICT-Enabled Learning */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                ICT-Enabled Learning
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Integration of digital tools, virtual plant dissections, 3D models, educational software, and e-learning platforms for effective Botany teaching methodology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Admission Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Eligibility & Admission
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Check if you qualify for the B.Ed Botany program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Academic Requirements */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-8 h-8" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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
                    Bachelor's degree in Botany (B.Sc Botany) from a recognized university
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
                    B.Sc with Botany as a major/optional subject with adequate credits
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
                  <p className="text-base leading-relaxed" >
                    Minimum 50% aggregate marks in the qualifying degree (General category)
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
                  <p className="text-base leading-relaxed" >
                    45% aggregate marks for reserved categories (SC/ST/OBC/PWD)
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
                    Final year degree candidates can also apply (subject to results)
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
                    Degrees from UGC-recognized distance education universities accepted
                  </p>
                </div>
              </div>
            </div>

            {/* Documents Required */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-8 h-8" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
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
                    Completed application form with recent passport-size photographs
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
                    10th and 12th mark sheets and certificates (original + copies)
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
                    Transfer Certificate and Migration Certificate
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
                    Community Certificate (for reserved category candidates)
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
                    Aadhar Card, ID Proof, and Address Proof
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Curriculum Structure
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Comprehensive semester-wise curriculum aligned with TNTEU and NCTE guidelines
            </p>
          </div>

          {/* Semester Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[1, 2, 3, 4].map((sem) => (
              <button
                key={sem}
                onClick={() => setActiveSemester(sem)}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                  activeSemester === sem
                    ? 'text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: activeSemester === sem ? '#002309' : undefined,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                Semester {sem === 1 ? 'I' : sem === 2 ? 'II' : sem === 3 ? 'III' : 'IV'}
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
                    style={{ background: 'linear-gradient(135deg, #002309 0%, #7cb983 100%)' }}
                  >
                    <span className="text-xs">{course.code.split(' ')[0]}</span>
                    <span className="text-lg">{course.code.split(' ')[1]}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2" style={{ color: '#002309' }}>
                    {course.title}
                  </h4>
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
              Diverse opportunities await B.Ed Botany graduates
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
                Teach Botany, Biology, and Life Science in government and private schools for classes 9-10 across India following various board curricula.
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
                Prepare students for competitive examinations and higher education in Botany, Biology, and Environmental Science at +2 level.
              </p>
            </div>

            {/* Laboratory Instructor */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Laboratory Instructor
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Manage botanical laboratories in schools and colleges, conduct practical sessions, and supervise herbarium and specimen collections.
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
                Design and develop Botany and Biology curriculum materials, textbooks, laboratory manuals, and digital content for educational institutions.
              </p>
            </div>

            {/* Environmental Educator */}
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Environmental Educator
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Work with NGOs, botanical gardens, nature reserves, and environmental organizations in awareness programs and conservation education.
              </p>
            </div>

            {/* Higher Education */}
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
                Pursue advanced degrees in Education, Botany Education, or Environmental Education and become college-level educators or researchers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose JKKN Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Why Choose JKKN for B.Ed Botany?
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Discover the advantages of pursuing your B.Ed Botany at JKKN College of Education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 55+ Years */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#7cb983' }}>
                    55+ Years of Educational Excellence
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Part of JKKN Institutions with a proven legacy of transforming lives through progressive education since 1969.
                  </p>
                </div>
              </div>
            </div>

            {/* 94% Placement */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#7cb983' }}>
                    98% Placement Success Rate
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Strong placement record with graduates securing positions in government schools, CBSE/ICSE schools, and prestigious educational institutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Well-Equipped Lab */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#7cb983' }}>
                    Well-Equipped Botanical Laboratory
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    State-of-the-art botanical lab with modern microscopes, herbarium collections, tissue culture facility, and botanical garden for practical training.
                  </p>
                </div>
              </div>
            </div>

            {/* Partner Schools */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#7cb983' }}>
                    Extensive Partner School Network
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Tie-ups with 50+ schools for internship providing diverse teaching experiences in urban, rural, government, and private settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Field Studies */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#7cb983' }}>
                    Field Studies & Excursions
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Regular botanical excursions to Western Ghats, biodiversity hotspots, botanical gardens, and research institutions for experiential learning.
                  </p>
                </div>
              </div>
            </div>

            {/* Affordable Education */}
            <div className="p-8 rounded-xl border-l-4" style={{ backgroundColor: '#FBFBEE', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#7cb983' }}>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Campus Facilities
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              World-class infrastructure supporting your educational journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Botanical Lab */}
            <div className="rounded-2xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#002309' }}>
              <div className="h-16 sm:h-24 rounded-t-2xl"></div>
              <div className="p-3 sm:p-6">
                <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>Botanical Lab</h3>
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255,255,255,0.8)' }}>Botanical Laboratory</p>
              </div>
            </div>

            {/* Herbarium */}
            <div className="rounded-2xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="h-16 sm:h-24 rounded-t-2xl"></div>
              <div className="p-3 sm:p-6">
                <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>Herbarium</h3>
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255,255,255,0.8)' }}>Herbarium Collection</p>
              </div>
            </div>

            {/* Botanical Garden */}
            <div className="rounded-2xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="h-16 sm:h-24 rounded-t-2xl"></div>
              <div className="p-3 sm:p-6">
                <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>Botanical Garden</h3>
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255,255,255,0.8)' }}>Botanical Garden</p>
              </div>
            </div>

            {/* Digital Library */}
            <div className="rounded-2xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="h-16 sm:h-24 rounded-t-2xl"></div>
              <div className="p-3 sm:p-6">
                <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>Digital Library</h3>
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255,255,255,0.8)' }}>Digital Library</p>
              </div>
            </div>

            {/* Smart Classroom */}
            <div className="rounded-2xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#002309' }}>
              <div className="h-16 sm:h-24 rounded-t-2xl"></div>
              <div className="p-3 sm:p-6">
                <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>Smart Classroom</h3>
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255,255,255,0.8)' }}>Smart Learning Studios</p>
              </div>
            </div>

            {/* Computer Lab */}
            <div className="rounded-2xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="h-16 sm:h-24 rounded-t-2xl"></div>
              <div className="p-3 sm:p-6">
                <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>Computer Lab</h3>
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255,255,255,0.8)' }}>Computer Laboratory</p>
              </div>
            </div>

            {/* Microscopy Room */}
            <div className="rounded-2xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="h-16 sm:h-24 rounded-t-2xl"></div>
              <div className="p-3 sm:p-6">
                <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>Microscopy Room</h3>
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255,255,255,0.8)' }}>Microscopy Room</p>
              </div>
            </div>

            {/* Seminar Hall */}
            <div className="rounded-2xl overflow-hidden transition-transform hover:scale-105" style={{ backgroundColor: '#7cb983' }}>
              <div className="h-16 sm:h-24 rounded-t-2xl"></div>
              <div className="p-3 sm:p-6">
                <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 break-words" style={{ color: '#ffffff' }}>Seminar Hall</h3>
                <p className="text-xs sm:text-sm break-words" style={{ color: 'rgba(255,255,255,0.8)' }}>Seminar Hall</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Admission Process
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Simple step-by-step guide to join our B.Ed Botany program
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden md:block" style={{ backgroundColor: '#7cb983' }}></div>

            {/* Step 1 - Online Application */}
            <div className="relative flex flex-col-reverse md:flex-row items-center mb-16">
              <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>Online Application</h3>
                  <p style={{ color: '#006837' }}>
                    Fill out the online application form on our official website. Upload all required documents including academic certificates, photographs, and ID proof.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 hidden md:flex"
                   style={{ backgroundColor: '#7cb983' }}>
                1
              </div>
              <div className="w-full md:w-1/2 md:pl-12"></div>
              {/* Mobile step indicator */}
              <div className="md:hidden absolute -top-4 left-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                   style={{ backgroundColor: '#7cb983' }}>
                1
              </div>
            </div>

            {/* Step 2 - Document Verification */}
            <div className="relative flex flex-col md:flex-row items-center mb-16">
              <div className="w-full md:w-1/2 md:pr-12 md:order-2 mb-8 md:mb-0">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>Document Verification</h3>
                  <p style={{ color: '#006837' }}>
                    Submit original documents for verification at the admission office. Our team will verify your eligibility and academic credentials.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 hidden md:flex"
                   style={{ backgroundColor: '#7cb983' }}>
                2
              </div>
              <div className="w-full md:w-1/2 md:pl-12 md:order-1"></div>
              {/* Mobile step indicator */}
              <div className="md:hidden absolute -top-4 left-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                   style={{ backgroundColor: '#7cb983' }}>
                2
              </div>
            </div>

            {/* Step 3 - Entrance Test / Interview */}
            <div className="relative flex flex-col-reverse md:flex-row items-center mb-16">
              <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>Entrance Test / Interview</h3>
                  <p style={{ color: '#006837' }}>
                    Appear for the entrance examination or counseling as per TNTEU guidelines. Selection is based on merit and entrance test performance.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 hidden md:flex"
                   style={{ backgroundColor: '#7cb983' }}>
                3
              </div>
              <div className="w-full md:w-1/2 md:pl-12"></div>
              {/* Mobile step indicator */}
              <div className="md:hidden absolute -top-4 left-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                   style={{ backgroundColor: '#7cb983' }}>
                3
              </div>
            </div>

            {/* Step 4 - Admission Confirmation */}
            <div className="relative flex flex-col md:flex-row items-center mb-16">
              <div className="w-full md:w-1/2 md:pr-12 md:order-2 mb-8 md:mb-0">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>Admission Confirmation</h3>
                  <p style={{ color: '#006837' }}>
                    Upon selection, pay the admission fee and complete enrollment formalities. Receive your admission letter and orientation schedule.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 hidden md:flex"
                   style={{ backgroundColor: '#7cb983' }}>
                4
              </div>
              <div className="w-full md:w-1/2 md:pl-12 md:order-1"></div>
              {/* Mobile step indicator */}
              <div className="md:hidden absolute -top-4 left-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                   style={{ backgroundColor: '#7cb983' }}>
                4
              </div>
            </div>

            {/* Step 5 - Begin Your Journey */}
            <div className="relative flex flex-col-reverse md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>Begin Your Journey</h3>
                  <p style={{ color: '#006837' }}>
                    Attend the orientation program and commence your B.Ed Botany journey. Meet your Learning Facilitators and fellow Learners.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 hidden md:flex"
                   style={{ backgroundColor: '#7cb983' }}>
                5
              </div>
              <div className="w-full md:w-1/2 md:pl-12"></div>
              {/* Mobile step indicator */}
              <div className="md:hidden absolute -top-4 left-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                   style={{ backgroundColor: '#7cb983' }}>
                5
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Find answers to common queries about B.Ed Botany program
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-semibold pr-4" style={{ color: '#002309' }}>
                  What is the eligibility for B.Ed Botany admission?
                </h3>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  Candidates must hold a Bachelor's degree in Botany (B.Sc Botany) or equivalent degree with Botany as a major subject with at least 50% marks (45% for reserved categories SC/ST/OBC/PWD). Candidates appearing for final year degree examinations may also apply provisionally.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-semibold pr-4" style={{ color: '#002309' }}>
                  What is the duration of B.Ed Botany program?
                </h3>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  The B.Ed Botany program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, practical sessions, laboratory work, and school internship components as mandated by TNTEU guidelines.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-semibold pr-4" style={{ color: '#002309' }}>
                  What subjects can I teach after completing B.Ed Botany?
                </h3>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  After completing B.Ed Botany, you are qualified to teach Botany, Biology, Life Science, Environmental Science, and related subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-semibold pr-4" style={{ color: '#002309' }}>
                  Is JKKN College of Education NCTE approved?
                </h3>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Botany program meets all regulatory standards for teacher education in India, ensuring your degree is recognized nationally for teaching positions.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-semibold pr-4" style={{ color: '#002309' }}>
                  What is the fee structure for B.Ed Botany?
                </h3>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  The fee structure is regulated by the Tamil Nadu government for teacher education programs. Various scholarships including government scholarships for SC/ST/OBC/BC candidates, merit scholarships, and institutional financial assistance are available for eligible Learners. Please contact our admission office for current fee details and scholarship information.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-semibold pr-4" style={{ color: '#002309' }}>
                  Does the program include practical teaching experience?
                </h3>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  Yes, the B.Ed Botany program includes extensive practical training through micro-teaching sessions, simulated teaching practices, botanical laboratory work, herbarium preparation, field studies, peer teaching, and a mandatory 16-week school internship program spread across two phases. Learners teach Botany subjects in actual classroom settings under mentor Learning Facilitator guidance in our partner schools.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-semibold pr-4" style={{ color: '#002309' }}>
                  Can I pursue B.Ed Botany after distance B.Sc?
                </h3>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  Yes, candidates with B.Sc Botany degree from UGC-recognized distance education universities/institutions are eligible for B.Ed Botany admission, provided they meet the minimum percentage criteria (50% general, 45% reserved) and other eligibility requirements. The distance education degree must be from a recognized university listed in UGC/AIU approved list.
                </p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-semibold pr-4" style={{ color: '#002309' }}>
                  What are the career opportunities after B.Ed Botany?
                </h3>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p style={{ color: '#006837' }}>
                  B.Ed Botany graduates have diverse career options including: Botany/Biology teachers in government and private schools, TGT/PGT positions in CBSE/ICSE schools, laboratory instructors, coaching institute faculty, environmental educators, curriculum developers, educational content writers, and opportunities to pursue M.Ed/Ph.D for academic and administrative roles in higher education and research.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#7cb983' }}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Ready to Begin Your Journey as a Botany Educator?
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Join JKKN College of Education and transform your passion for plant science into a rewarding teaching career. Admissions open for 2025-26 academic year.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
