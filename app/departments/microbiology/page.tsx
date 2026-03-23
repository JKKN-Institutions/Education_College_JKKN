'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MicrobiologyDepartment() {
  const [activeSemester, setActiveSemester] = useState(1)

  const curriculumData = {
    1: [
      { code: 'EDU', number: '101', title: 'Childhood and Growing Up', description: 'Understanding child development, adolescent psychology, learning theories, and educational psychology principles for effective science teaching.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU', number: '102', title: 'Contemporary India and Education', description: 'Exploring the Indian education system, national policies including NEP 2020, constitutional provisions, and contemporary challenges in science education.', credits: 4, type: 'Theory' },
      { code: 'MIC', number: '103', title: 'Pedagogy of Biological Sciences - Part I', description: 'Foundations of biology and microbiology teaching, curriculum design, instructional strategies, and teaching methods for life sciences education.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU', number: '104', title: 'Language Across the Curriculum', description: 'Integration of language skills in teaching science subjects, scientific vocabulary, technical communication, and effective explanation strategies.', credits: 2, type: 'Theory' },
      { code: 'EDU', number: '105', title: 'Reading and Reflecting on Texts', description: 'Critical analysis of scientific and educational texts, research papers, and development of reflective practices in science teacher education.', credits: 2, type: 'Theory + Assignment' },
    ],
    2: [
      { code: 'EDU', number: '201', title: 'Learning and Teaching', description: 'Advanced learning theories, cognitive development in science learning, inquiry-based teaching, motivation strategies, and effective science classroom methodologies.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU', number: '202', title: 'Knowledge and Curriculum', description: 'Curriculum development theories, syllabus design, textbook analysis, and curriculum transaction strategies for biological sciences education.', credits: 4, type: 'Theory' },
      { code: 'MIC', number: '203', title: 'Pedagogy of Biological Sciences - Part II', description: 'Advanced teaching methods for microbiology topics including bacteriology, virology, immunology, molecular biology, and contemporary biotechnology concepts.', credits: 4, type: 'Theory + Practical' },
      { code: 'EDU', number: '204', title: 'Assessment for Learning', description: 'Evaluation techniques for science subjects, question paper design, practical examination assessment, CCE, and formative assessment strategies in biology.', credits: 4, type: 'Theory + Practical' },
      { code: 'MIC', number: '205', title: 'Laboratory Teaching Methods', description: 'Laboratory management, microscopy teaching, culture techniques demonstration, biosafety protocols, and hands-on science teaching approaches.', credits: 2, type: 'Practical + Lab' },
    ],
    3: [
      { code: 'EDU', number: '301', title: 'School Internship - Phase I', description: '8-week intensive school internship with supervised teaching practice in biology and microbiology, lesson planning, laboratory demonstrations, and classroom management.', credits: 16, type: 'Practical / Field Work' },
      { code: 'EDU', number: '302', title: 'Inclusive Education', description: 'Teaching diverse learners in science classrooms, special education needs, differentiated instruction, and inclusive laboratory practices.', credits: 4, type: 'Theory' },
      { code: 'EDU', number: '303', title: 'ICT in Science Education', description: 'Educational technology, digital simulations, virtual microscopy, online teaching methods, virtual laboratories, and e-learning platforms for biology education.', credits: 4, type: 'Theory + Lab' },
      { code: 'MIC', number: '304', title: 'Teaching of Applied Microbiology', description: 'Specialized methods for teaching industrial microbiology, environmental microbiology, food microbiology, medical microbiology, and antimicrobial resistance concepts.', credits: 4, type: 'Theory + Practical' },
    ],
    4: [
      { code: 'EDU', number: '401', title: 'School Internship - Phase II', description: '8-week advanced internship with independent teaching, action research project in science education, and comprehensive classroom and laboratory experience.', credits: 16, type: 'Practical / Field Work' },
      { code: 'EDU', number: '402', title: 'Gender, School and Society', description: 'Gender sensitization in science education, equity in STEM, addressing stereotypes about women in science, and creating inclusive learning environments.', credits: 4, type: 'Theory' },
      { code: 'EDU', number: '403', title: 'Understanding the Self', description: 'Personal development, emotional intelligence for educators, stress management, professional ethics, and identity formation as a science teacher.', credits: 2, type: 'Theory + Activities' },
      { code: 'MIC', number: '404', title: 'Environmental Education & Sustainability', description: 'Teaching environmental microbiology, sustainable practices, biodiversity conservation, climate change education, and developing environmental awareness among students.', credits: 4, type: 'Theory + Field Work' },
      { code: 'EDU', number: '405', title: 'Creating an Inclusive School', description: 'Building inclusive science learning environments, addressing learning difficulties, universal design for learning, and creating accessible laboratory experiences.', credits: 2, type: 'Theory + Practical' },
    ],
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%)] lg:bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%),url(/images/B.Ed-Microbiology-Hero-Banner-Image.png)] bg-cover bg-center">
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
                <span style={{ color: '#7cb983' }}>Microbiology</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#ffffff' }}>
                Bachelor of Education in Microbiology
              </h2>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Transform your microbiology expertise into a rewarding teaching career. Our comprehensive 2-year program equips you with modern pedagogical techniques, laboratory teaching skills, and deep subject knowledge in Bacteriology, Virology, Immunology, and Life Sciences.
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
                src="/images/B.Ed-Microbiology-Hero-Banner-Image.png"
                alt="B.Ed Microbiology Department"
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
            Comprehensive training to become an exceptional Microbiology educator
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
                    he Bachelor of Education (B.Ed) in Microbiology at JKKN College of Education is a 2-year professional degree program designed to transform graduates with a strong foundation in microbiology into skilled, confident, and innovative educators. This program prepares you to teach Biology, Microbiology, and Life Sciences subjects at secondary and higher secondary levels in schools across India.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                Our curriculum integrates theoretical knowledge with practical teaching methodologies, including laboratory instruction techniques, microscopy demonstrations, culture handling safety protocols, and innovative approaches to explaining complex microbiological concepts. Learners gain hands-on experience through micro-teaching sessions, peer teaching, and extensive school internships under the guidance of experienced Learning Facilitators.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                The program emphasizes modern pedagogical approaches aligned with the National Education Policy (NEP) 2020, incorporating inquiry-based learning, activity-based teaching, digital tools for science education, and inclusive classroom practices. Graduates emerge as competent educators capable of inspiring the next generation of scientists and healthcare professionals.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#002309' }}>
                With strong industry connections and a network of partner schools, JKKN ensures that our B.Ed Microbiology graduates are highly sought after by government schools, CBSE/ICSE institutions, international schools, and science coaching centers throughout Tamil Nadu and beyond.
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
              Program <span style={{ color: '#7cb983' }}>Highlights</span>
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Key features that make our B.Ed Microbiology program exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NCTE Approved Program */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                NCTE Approved Program
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Nationally recognized 2-year B.Ed program meeting all regulatory standards set by the National Council for Teacher Education for quality teacher preparation.
              </p>
            </div>

            {/* State-of-the-Art Laboratories */}
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
                State-of-the-Art Laboratories
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Well-equipped microbiology and biology laboratories for hands-on training in laboratory teaching methods, microscopy, and safe handling of cultures and specimens.
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
                Learn from experienced educators and microbiologists who bring real-world teaching experience, research expertise, and innovative pedagogical approaches to the program.
              </p>
            </div>

            {/* Extensive School Internship */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Extensive School Internship
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                16-week intensive internship across two phases in partner schools, providing real classroom and laboratory teaching experience under mentor guidance.
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
                Training in virtual microscopy, digital simulations, educational software, virtual labs, and ICT tools for engaging modern science education.
              </p>
            </div>

            {/* NEP 2020 Aligned Curriculum */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                NEP 2020 Aligned Curriculum
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Updated syllabus covering contemporary microbiology topics including molecular biology, genetic engineering, infectious diseases, antimicrobial resistance, and biotechnology applications.
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

            {/* Laboratory Safety Training */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #7cb983' }}>
                <svg className="w-10 h-10" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#002309' }}>
                Laboratory Safety Training
              </h3>
              <p className="leading-relaxed" style={{ color: '#006837' }}>
                Comprehensive training in biosafety protocols, safe handling of microorganisms, waste disposal, and creating safe laboratory learning environments for school students.
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
              Requirements for admission to B.Ed Microbiology program
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
                    Bachelor's degree in Microbiology (B.Sc Microbiology) from a recognized university
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
                    Candidates with B.Sc Biotechnology, B.Sc Life Sciences, or B.Sc Biological Sciences with Microbiology as a major subject are also eligible
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
                    Candidates appearing for final year degree examinations may also apply provisionally
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
                    B.Sc Microbiology degree certificate and consolidated mark sheet
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
              Curriculum <span style={{ color: '#7cb983' }}>Structure</span>
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Comprehensive syllabus aligned with NCTE norms and NEP 2020 guidelines
            </p>
          </div>

          {/* Semester Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[1, 2, 3, 4].map((sem) => (
              <button
                key={sem}
                onClick={() => setActiveSemester(sem)}
                className="px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-all text-xs sm:text-sm lg:text-base"
                style={{
                  backgroundColor: activeSemester === sem ? '#002309' : '#FBFBEE',
                  color: activeSemester === sem ? '#ffffff' : '#006837',
                  border: activeSemester === sem ? 'none' : '1px solid #7cb983'
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
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 rounded-xl"
                style={{ backgroundColor: '#FBFBEE', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
              >
                <div
                  className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex flex-col items-center justify-center text-white font-bold"
                  style={{ backgroundColor: course.code === 'MIC' ? '#7cb983' : '#002309' }}
                >
                  <span className="text-xs">{course.code}</span>
                  <span className="text-base sm:text-lg">{course.number}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#002309' }}>
                    {course.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed mb-3 break-words" style={{ color: '#006837' }}>
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm" style={{ color: '#006837' }}>
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
              Career <span style={{ color: '#7cb983' }}>Prospects</span>
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Diverse and rewarding career opportunities await B.Ed Microbiology graduates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Government School Teacher */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Government School Teacher
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Secure permanent positions as Biology/Life Sciences teachers in government schools with attractive pay scales and benefits through TRB/TET examinations.
              </p>
            </div>

            {/* CBSE/ICSE School Teacher */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                CBSE/ICSE School Teacher
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Teach Biology, Microbiology, and Biotechnology at prestigious CBSE and ICSE affiliated schools with competitive remuneration and professional growth opportunities.
              </p>
            </div>

            {/* International School Teacher */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                International School Teacher
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Join prestigious international schools following IB, Cambridge, or American curricula, offering global exposure and excellent compensation packages.
              </p>
            </div>

            {/* Laboratory Instructor */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Laboratory Instructor
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Work as laboratory in-charge or instructor in schools, junior colleges, and science centers, managing practical sessions and demonstrations.
              </p>
            </div>

            {/* Science Curriculum Developer */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Science Curriculum Developer
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Design and develop biology and microbiology curriculum, educational content, textbooks, and learning materials for schools and publishers.
              </p>
            </div>

            {/* Coaching Institute Faculty */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Coaching Institute Faculty
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Teach Biology for NEET, medical entrance, and competitive examination preparation at leading coaching centers with excellent earning potential.
              </p>
            </div>

            {/* Science Communicator */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Science Communicator
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Work in science museums, science centers, educational media, and outreach programs promoting microbiology awareness and scientific literacy.
              </p>
            </div>

            {/* Higher Education */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#7cb983' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>
                Higher Education (M.Ed/Ph.D)
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Pursue advanced degrees in Education or Science Education to become college-level educators, researchers, or educational administrators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose JKKN Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FBFBEE' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Why Choose JKKN for B.Ed Microbiology?
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Discover the advantages of pursuing your B.Ed Microbiology at JKKN College of Education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 55+ Years */}
            <div className="p-8 rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
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

            {/* 94% Placement */}
            <div className="p-8 rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    98% Placement Success Rate
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Strong placement record with graduates securing positions in government schools, CBSE/ICSE schools, international schools, and coaching institutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Advanced Labs */}
            <div className="p-8 rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Advanced Science Laboratories
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Well-equipped microbiology, biology, and biotechnology labs with modern equipment for hands-on training in laboratory teaching methods.
                  </p>
                </div>
              </div>
            </div>

            {/* Partner Schools */}
            <div className="p-8 rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    Extensive Partner School Network
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Tie-ups with 50+ schools including CBSE, ICSE, and State Board schools for internship providing diverse teaching experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* NEP 2020 */}
            <div className="p-8 rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                     style={{ backgroundColor: '#7cb983' }}>
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>
                    NEP 2020 Aligned Training
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Curriculum updated with inquiry-based learning, competency-based education, and multidisciplinary approaches as per National Education Policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Affordable */}
            <div className="p-8 rounded-xl border-l-4 transition-transform hover:scale-105"
                 style={{ backgroundColor: '#ffffff', borderColor: '#7cb983', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Microbiology Lab */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105">
              <div className="h-24 sm:h-32 flex items-center justify-center" style={{ backgroundColor: '#002309' }}>
                <h3 className="text-sm sm:text-xl font-bold text-white text-center px-2 sm:px-4 break-words">Microbiology Lab</h3>
              </div>
              <div className="p-2 sm:p-4" style={{ backgroundColor: '#002309' }}>
                <p className="text-xs sm:text-sm text-white break-words">Microbiology Lab</p>
              </div>
            </div>

            {/* Digital Library */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105">
              <div className="h-24 sm:h-32 flex items-center justify-center" style={{ backgroundColor: '#7cb983' }}>
                <h3 className="text-sm sm:text-xl font-bold text-white text-center px-2 sm:px-4 break-words">Digital Library</h3>
              </div>
              <div className="p-2 sm:p-4" style={{ backgroundColor: '#7cb983' }}>
                <p className="text-xs sm:text-sm text-white break-words">Digital Library</p>
              </div>
            </div>

            {/* Smart Classrooms */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105">
              <div className="h-24 sm:h-32 flex items-center justify-center" style={{ backgroundColor: '#7cb983' }}>
                <h3 className="text-sm sm:text-xl font-bold text-white text-center px-2 sm:px-4 break-words">Smart Classrooms</h3>
              </div>
              <div className="p-2 sm:p-4" style={{ backgroundColor: '#7cb983' }}>
                <p className="text-xs sm:text-sm text-white break-words">Smart Learning Studios</p>
              </div>
            </div>

            {/* Micro Teaching */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105">
              <div className="h-24 sm:h-32 flex items-center justify-center" style={{ backgroundColor: '#7cb983' }}>
                <h3 className="text-sm sm:text-xl font-bold text-white text-center px-2 sm:px-4 break-words">Micro Teaching</h3>
              </div>
              <div className="p-2 sm:p-4" style={{ backgroundColor: '#7cb983' }}>
                <p className="text-xs sm:text-sm text-white break-words">Micro-Teaching Lab</p>
              </div>
            </div>

            {/* Biology Lab */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105">
              <div className="h-24 sm:h-32 flex items-center justify-center" style={{ backgroundColor: '#7cb983' }}>
                <h3 className="text-sm sm:text-xl font-bold text-white text-center px-2 sm:px-4 break-words">Biology Lab</h3>
              </div>
              <div className="p-2 sm:p-4" style={{ backgroundColor: '#7cb983' }}>
                <p className="text-xs sm:text-sm text-white break-words">Biology Laboratory</p>
              </div>
            </div>

            {/* Seminar Hall */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105">
              <div className="h-24 sm:h-32 flex items-center justify-center" style={{ backgroundColor: '#7cb983' }}>
                <h3 className="text-sm sm:text-xl font-bold text-white text-center px-2 sm:px-4 break-words">Seminar Hall</h3>
              </div>
              <div className="p-2 sm:p-4" style={{ backgroundColor: '#7cb983' }}>
                <p className="text-xs sm:text-sm text-white break-words">Seminar Hall</p>
              </div>
            </div>

            {/* Resource Center */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105">
              <div className="h-24 sm:h-32 flex items-center justify-center" style={{ backgroundColor: '#002309' }}>
                <h3 className="text-sm sm:text-xl font-bold text-white text-center px-2 sm:px-4 break-words">Resource Center</h3>
              </div>
              <div className="p-2 sm:p-4" style={{ backgroundColor: '#002309' }}>
                <p className="text-xs sm:text-sm text-white break-words">Resource Center</p>
              </div>
            </div>

            {/* Hostel */}
            <div className="rounded-xl overflow-hidden transition-transform hover:scale-105">
              <div className="h-24 sm:h-32 flex items-center justify-center" style={{ backgroundColor: '#7cb983' }}>
                <h3 className="text-sm sm:text-xl font-bold text-white text-center px-2 sm:px-4 break-words">Hostel</h3>
              </div>
              <div className="p-2 sm:p-4" style={{ backgroundColor: '#7cb983' }}>
                <p className="text-xs sm:text-sm text-white break-words">Hostel Facility</p>
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
              Simple steps to begin your journey as a Microbiology educator
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Step 1 - Left */}
            <div className="flex flex-col md:flex-row items-center mb-12 md:mb-0">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>1</div>
                <div className="w-0.5 h-32 hidden md:block" style={{ backgroundColor: '#7cb983' }}></div>
              </div>
              <div className="w-full md:w-1/2 md:pr-8 md:text-right md:order-first">
                <div className="p-6 rounded-xl md:inline-block md:text-left" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>Check Eligibility</h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Verify you meet the academic requirements: B.Sc Microbiology or equivalent degree with minimum 50% marks (45% for reserved categories) with Microbiology as a major subject.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8 hidden md:block"></div>
            </div>

            {/* Step 2 - Right */}
            <div className="flex flex-col md:flex-row items-center mb-12 md:mb-0">
              <div className="w-full md:w-1/2 md:pr-8 hidden md:block"></div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>2</div>
                <div className="w-0.5 h-32 hidden md:block" style={{ backgroundColor: '#7cb983' }}></div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>Online Application</h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Complete the online application form on our official website or TNTEU portal. Upload required documents and pay the application fee.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 - Left */}
            <div className="flex flex-col md:flex-row items-center mb-12 md:mb-0">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>3</div>
                <div className="w-0.5 h-32 hidden md:block" style={{ backgroundColor: '#7cb983' }}></div>
              </div>
              <div className="w-full md:w-1/2 md:pr-8 md:text-right md:order-first">
                <div className="p-6 rounded-xl md:inline-block md:text-left" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>Document Verification</h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Submit original documents for verification at the college admission office. Ensure all certificates including B.Sc marksheets are attested and complete.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8 hidden md:block"></div>
            </div>

            {/* Step 4 - Right */}
            <div className="flex flex-col md:flex-row items-center mb-12 md:mb-0">
              <div className="w-full md:w-1/2 md:pr-8 hidden md:block"></div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>4</div>
                <div className="w-0.5 h-32 hidden md:block" style={{ backgroundColor: '#7cb983' }}></div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>Counseling & Seat Allotment</h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Attend counseling session as per TNTEU schedule. Seats are allotted based on merit, entrance exam scores, and reservation norms.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 - Left */}
            <div className="flex flex-col md:flex-row items-center mb-12 md:mb-0">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>5</div>
                <div className="w-0.5 h-32 hidden md:block" style={{ backgroundColor: '#7cb983' }}></div>
              </div>
              <div className="w-full md:w-1/2 md:pr-8 md:text-right md:order-first">
                <div className="p-6 rounded-xl md:inline-block md:text-left" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>Fee Payment & Enrollment</h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Pay the prescribed fees within the stipulated time. Complete enrollment formalities and receive your admission confirmation.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8 hidden md:block"></div>
            </div>

            {/* Step 6 - Right */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-8 hidden md:block"></div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                     style={{ backgroundColor: '#7cb983' }}>6</div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#002309' }}>Orientation & Classes Begin</h3>
                  <p className="leading-relaxed" style={{ color: '#006837' }}>
                    Attend the orientation program to familiarize with campus, Learning Facilitators, laboratories, and academic schedule. Begin your transformative journey!
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002309' }}>
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
              Find answers to common queries about B.Ed Microbiology program
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What is the eligibility for B.Ed Microbiology admission?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Candidates must hold a Bachelor's degree in Microbiology (B.Sc Microbiology) or equivalent degree with Microbiology as a major subject from a recognized university with minimum 50% aggregate marks. Reserved category candidates (SC/ST/OBC/PWD) require minimum 45% marks. Candidates with B.Sc Biotechnology, B.Sc Life Sciences, or B.Sc Biological Sciences with Microbiology as a subject may also apply. Candidates appearing for final year degree examinations may apply provisionally.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What is the duration of B.Ed Microbiology program?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                The B.Ed Microbiology program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, laboratory practical sessions, and school internship components as mandated by TNTEU guidelines.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What subjects can I teach after completing B.Ed Microbiology?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                After completing B.Ed Microbiology, you are qualified to teach Biology, Microbiology, Life Sciences, Biotechnology, Zoology, and related subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula. You can also teach for NEET and medical entrance preparation.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  Is JKKN College of Education NCTE approved?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Microbiology program meets all regulatory standards for teacher education in India, ensuring your degree is recognized nationally for teaching positions in schools.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What is the fee structure for B.Ed Microbiology?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                The fee structure is regulated by the Tamil Nadu government for teacher education programs. Various scholarships including government scholarships for SC/ST/OBC/BC candidates, merit scholarships, and institutional financial assistance are available for eligible Learners. Please contact our admission office for current fee details and scholarship information.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  Does the program include laboratory and practical teaching experience?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Yes, the B.Ed Microbiology program includes extensive practical training through laboratory teaching sessions, micro-teaching demonstrations, microscopy training, simulated teaching practices, peer teaching, and a mandatory 16-week school internship program spread across two phases. Learners teach Biology and Microbiology subjects in actual classroom and laboratory settings under mentor Learning Facilitator guidance.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  Can I pursue B.Ed Microbiology after B.Sc Biotechnology?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                Yes, candidates with B.Sc Biotechnology, B.Sc Life Sciences, or B.Sc Biological Sciences degrees that include Microbiology as a core or major subject are eligible for B.Ed Microbiology admission, provided they meet the minimum percentage criteria (50% general, 45% reserved) and other eligibility requirements.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-bold" style={{ color: '#002309' }}>
                  What are the career opportunities after B.Ed Microbiology?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#002309' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#006837' }}>
                B.Ed Microbiology graduates have diverse career options including: Biology/Life Sciences teachers in government and private schools, TGT/PGT positions in CBSE/ICSE schools, NEET coaching institute faculty, laboratory instructors, science curriculum developers, educational content writers, science communicators, and opportunities to pursue M.Ed/Ph.D for academic and administrative roles in higher education.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#7cb983' }}>
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Ready to Begin Your Journey as a<br />Microbiology Educator?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Join JKKN College of Education and transform your passion for Microbiology into a rewarding teaching career. Admissions open for 2025-26 academic year.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-transform hover:scale-105"
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
