'use client';

import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { CheckCircle, BookOpen, Users, Clock, DollarSign, Monitor, Beaker, GraduationCap, Briefcase, School, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MathematicsPage() {
  const [activeTab, setActiveTab] = useState('semester1');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
      <section className="relative bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%)] lg:bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%),url(/images/B.Ed-Maths-Hero-Banner-Image.webp)] bg-cover bg-center text-white py-10 sm:py-16 lg:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#7cb983] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#7cb983] mb-6">
                <CheckCircle className="w-5 h-5 text-[#7cb983]" />
                <span className="text-[#7cb983] font-medium">NCTE Approved | TNTEU Affiliated</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                B.Ed <span className="text-[#7cb983]">Mathematics</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl text-white mb-6">
                Bachelor of Education in Mathematics
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed mb-6 sm:mb-8">
                Shape the future by becoming an inspiring Mathematics educator. Our comprehensive 2-year program equips you with innovative pedagogical techniques, problem-solving strategies, and practical teaching experience to transform how students learn Mathematics.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 sm:mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-4xl font-bold text-[#7cb983] mb-1">2</div>
                  <div className="text-sm text-white">YEARS</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-4xl font-bold text-[#7cb983] mb-1">50</div>
                  <div className="text-sm text-white">SEATS</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-4xl font-bold text-[#7cb983] mb-1">98%</div>
                  <div className="text-sm text-white">PLACEMENT</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-4xl font-bold text-[#7cb983] mb-1">4</div>
                  <div className="text-sm text-white">SEMESTERS</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold rounded-lg transition-colors">
                  <Users className="w-5 h-5" />
                  Apply Now
                </Link>
                <button
                  onClick={() => {
                    const element = document.getElementById('curriculum-structure');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-[#006837] font-semibold rounded-lg transition-colors">
                  <BookOpen className="w-5 h-5" />
                  View Curriculum
                </button>
              </div>
            </div>

            {/* Right Content - Hero Banner Image */}
            <div className="relative mt-8 lg:mt-0">
              <Image
                src="/images/B.Ed-Maths-Hero-Banner-Image.webp"
                alt="B.Ed Mathematics Department"
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
      <section className="py-10 sm:py-12 lg:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#006837] mb-4">
              Course Overview
              <div className="w-20 h-1 bg-gradient-to-r from-[#7cb983] to-[#6ba872] mx-auto mt-3"></div>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-6">
              A comprehensive teacher education program designed to shape passionate Mathematics educators
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="text-6xl font-bold text-[#7cb983] float-left mr-4 leading-none">T</span>
                he Bachelor of Education (B.Ed) in Mathematics at JKKN College of Education is a meticulously designed 2-year professional degree program that prepares graduates to become competent and inspiring Learning Facilitators for secondary and higher secondary schools. This NCTE-approved program combines rigorous theoretical foundations with extensive practical training, ensuring our Learners are well-equipped to meet the evolving demands of Mathematics education in the 21st century.
              </p>

              <p className="text-lg">
                Our program emphasizes innovative teaching methodologies, including activity-based learning, technology integration, and differentiated instruction strategies. Learners gain hands-on experience through micro-teaching sessions, school internships, and community engagement activities. The curriculum is aligned with the National Education Policy (NEP) 2020, focusing on competency-based learning, critical thinking development, and making Mathematics accessible and enjoyable for all students.
              </p>

              <p className="text-lg">
                At JKKN Institutions, we believe in excellence without elitism. Our experienced Learning Facilitators, state-of-the-art Mathematics laboratories, and comprehensive support systems ensure that every Learner receives personalized attention and guidance throughout their educational journey. We focus on developing not just teaching skills but also nurturing a deep understanding of mathematical concepts and their real-world applications. Join us in our mission to transform lives through progressive education.
              </p>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#7cb983]">
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">PROGRAM DURATION</div>
                <div className="text-2xl font-bold text-[#006837]">2 Years <span className="text-lg font-normal text-gray-600">(4 Semesters)</span></div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#7cb983]">
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">MODE OF STUDY</div>
                <div className="text-2xl font-bold text-[#006837]">Full-Time <span className="text-lg font-normal text-gray-600">On-Campus</span></div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#7cb983]">
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">TOTAL INTAKE</div>
                <div className="text-2xl font-bold text-[#006837]">50 Seats <span className="text-lg font-normal text-gray-600">per Academic Year</span></div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#7cb983]">
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">AFFILIATION</div>
                <div className="text-2xl font-bold text-[#006837]">TNTEU <span className="text-lg font-normal text-gray-600">Chennai</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="py-10 sm:py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#006837] mb-4">
              Program Highlights
              <div className="w-20 h-1 bg-gradient-to-r from-[#7cb983] to-[#6ba872] mx-auto mt-3"></div>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-6">
              Discover what makes our B.Ed Mathematics program exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#7cb983] shadow-md">
                <GraduationCap className="w-10 h-10 text-[#006837]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">NCTE Approved</h3>
              <p className="text-gray-600 leading-relaxed">
                Recognized by the National Council for Teacher Education, ensuring quality standards and national acceptance of your degree for teaching positions across India.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#7cb983] shadow-md">
                <Clock className="w-10 h-10 text-[#006837]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Extensive Practical Training</h3>
              <p className="text-gray-600 leading-relaxed">
                16-week school internship program with partner institutions providing real-world Mathematics teaching experience, classroom management skills, and mentorship.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#7cb983] shadow-md">
                <Users className="w-10 h-10 text-[#006837]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Expert Learning Facilitators</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn from experienced educators with extensive backgrounds in Mathematics, educational research, and innovative pedagogy methods.
              </p>
            </div>

            {/* Highlight 4 */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#7cb983] shadow-md">
                <Beaker className="w-10 h-10 text-[#006837]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Modern Mathematics Lab</h3>
              <p className="text-gray-600 leading-relaxed">
                Well-equipped Mathematics laboratory with manipulatives, geometric models, graphing tools, and digital resources for enhanced learning experiences.
              </p>
            </div>

            {/* Highlight 5 */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#7cb983] shadow-md">
                <Monitor className="w-10 h-10 text-[#006837]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">ICT Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Training in educational technology tools including GeoGebra, MATLAB, Smart Boards, and online teaching platforms for 21st-century classrooms.
              </p>
            </div>

            {/* Highlight 6 */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#7cb983] shadow-md">
                <DollarSign className="w-10 h-10 text-[#006837]" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">Scholarship Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Various government and institutional scholarships available for eligible candidates to ensure accessible and affordable quality education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria & Documents Section */}
      <section className="py-10 sm:py-12 lg:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#006837] mb-4">
              Eligibility Criteria & Documents
              <div className="w-20 h-1 bg-gradient-to-r from-[#7cb983] to-[#6ba872] mx-auto mt-3"></div>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-6">
              Requirements for admission to B.Ed Mathematics program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Academic Requirements */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-[#7cb983]" />
                <h3 className="text-2xl font-bold text-[#006837]">Academic Requirements</h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Bachelor's degree (BSc/BA/BCom or equivalent) from a recognized university</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Minimum 50% aggregate marks in graduation (45% for SC/ST/OBC/PWD candidates)</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Mathematics as a main subject or subsidiary subject at degree level</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Candidates with Mathematics studied up to Class 12 may also be considered</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Final year degree candidates may apply (provisional admission)</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Age limit as per Tamil Nadu government norms</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Valid TNTEU B.Ed entrance examination score (if applicable)</p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-[#7cb983]" />
                <h3 className="text-2xl font-bold text-[#006837]">Required Documents</h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">10th and 12th mark sheets and certificates (originals and copies)</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Degree certificate and consolidated mark sheet</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Transfer certificate from last institution attended</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Community certificate (for reserved category candidates)</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Income certificate (for scholarship purposes)</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Aadhar card and 6 passport-size photographs</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Migration certificate (if applicable)</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#006837] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">TET/TNTEU entrance score card (if applicable)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Structure Section */}
      <section id="curriculum-structure" className="py-10 sm:py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#006837] mb-4">
              Curriculum Structure
              <div className="w-20 h-1 bg-gradient-to-r from-[#7cb983] to-[#6ba872] mx-auto mt-3"></div>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-6">
              Comprehensive syllabus aligned with NCTE norms and NEP 2020 guidelines
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('semester1')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'semester1'
                  ? 'bg-white text-[#006837] shadow-lg border-2 border-[#7cb983]'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Semester I
            </button>
            <button
              onClick={() => setActiveTab('semester2')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'semester2'
                  ? 'bg-white text-[#006837] shadow-lg border-2 border-[#7cb983]'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Semester II
            </button>
            <button
              onClick={() => setActiveTab('semester3')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'semester3'
                  ? 'bg-white text-[#006837] shadow-lg border-2 border-[#7cb983]'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Semester III
            </button>
            <button
              onClick={() => setActiveTab('semester4')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'semester4'
                  ? 'bg-white text-[#006837] shadow-lg border-2 border-[#7cb983]'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Semester IV
            </button>
          </div>

          {/* Semester Content */}
          <div className="space-y-6">
            {activeTab === 'semester1' && (
              <>
                <CourseCard
                  code="EDU 101"
                  title="Childhood and Growing Up"
                  description="Understanding child development, learning theories, cognitive development, and educational psychology principles for effective teaching."
                  credits="4"
                  type="Theory + Practical"
                />
                <CourseCard
                  code="EDU 102"
                  title="Contemporary India and Education"
                  description="Exploring the Indian education system, NEP 2020, constitutional provisions, and contemporary challenges in education."
                  credits="4"
                  type="Theory"
                />
                <CourseCard
                  code="MAT 103"
                  title="Pedagogy of Mathematics - Part I"
                  description="Foundations of Mathematics teaching, nature of mathematical thinking, curriculum design, and instructional strategies for secondary level."
                  credits="4"
                  type="Theory + Practical"
                />
                <CourseCard
                  code="EDU 104"
                  title="Language Across the Curriculum"
                  description="Integration of language skills in teaching Mathematics, mathematical vocabulary, and effective communication strategies."
                  credits="2"
                  type="Theory"
                />
                <CourseCard
                  code="EDU 105"
                  title="Reading and Reflecting on Texts"
                  description="Critical analysis of educational texts, research papers, and development of reflective practices for continuous improvement."
                  credits="2"
                  type="Theory + Seminar"
                />
              </>
            )}

            {activeTab === 'semester2' && (
              <>
                <CourseCard
                  code="EDU 201"
                  title="Learning and Teaching"
                  description="Advanced learning theories, teaching-learning process, constructivist approaches, and effective pedagogical practices."
                  credits="4"
                  type="Theory + Practical"
                />
                <CourseCard
                  code="EDU 202"
                  title="Assessment for Learning"
                  description="Formative and summative assessment, rubric development, continuous evaluation, and diagnostic testing in Mathematics."
                  credits="4"
                  type="Theory + Practical"
                />
                <CourseCard
                  code="MAT 203"
                  title="Pedagogy of Mathematics - Part II"
                  description="Advanced teaching methods, problem-solving techniques, activity-based learning, and technology integration in Mathematics education."
                  credits="4"
                  type="Theory + Practical"
                />
                <CourseCard
                  code="EDU 204"
                  title="Knowledge and Curriculum"
                  description="Curriculum development, syllabus design, textbook analysis, and alignment with learning outcomes in Mathematics."
                  credits="4"
                  type="Theory"
                />
                <CourseCard
                  code="EDU 205"
                  title="School Internship - Phase I"
                  description="Initial teaching practice, classroom observation, lesson planning, and micro-teaching in Mathematics at partner schools."
                  credits="4"
                  type="Practical"
                />
              </>
            )}

            {activeTab === 'semester3' && (
              <>
                <CourseCard
                  code="EDU 301"
                  title="Inclusive Education"
                  description="Understanding diverse learners, special educational needs, differentiated instruction, and creating inclusive Mathematics classrooms."
                  credits="4"
                  type="Theory + Practical"
                />
                <CourseCard
                  code="EDU 302"
                  title="ICT in Education"
                  description="Educational technology, GeoGebra, online teaching tools, digital content creation, and smart classroom management."
                  credits="4"
                  type="Theory + Lab"
                />
                <CourseCard
                  code="MAT 303"
                  title="Teaching of Higher Secondary Mathematics"
                  description="Advanced Mathematics pedagogy for Classes 11-12, calculus teaching, statistics, and preparation for competitive examinations."
                  credits="4"
                  type="Theory + Practical"
                />
                <CourseCard
                  code="EDU 304"
                  title="School Internship - Phase II"
                  description="Extended teaching practice at partner schools, full classroom responsibility, and mentored teaching experience."
                  credits="8"
                  type="Practical (8 weeks)"
                />
                <CourseCard
                  code="EDU 305"
                  title="Optional: Mathematics Lab Activities"
                  description="Designing Mathematics laboratory activities, manipulatives, working models, and hands-on learning experiences."
                  credits="2"
                  type="Practical"
                />
              </>
            )}

            {activeTab === 'semester4' && (
              <>
                <CourseCard
                  code="EDU 401"
                  title="Gender, School and Society"
                  description="Gender perspectives in education, addressing stereotypes in Mathematics, promoting equity, and inclusive teaching practices."
                  credits="4"
                  type="Theory"
                />
                <CourseCard
                  code="EDU 402"
                  title="School Management and Leadership"
                  description="Educational administration, classroom management, school organization, and teacher leadership skills development."
                  credits="4"
                  type="Theory + Project"
                />
                <CourseCard
                  code="EDU 403"
                  title="Action Research in Education"
                  description="Educational research methodology, action research in Mathematics teaching, data analysis, and research report writing."
                  credits="4"
                  type="Theory + Research Project"
                />
                <CourseCard
                  code="EDU 404"
                  title="School Internship - Phase III"
                  description="Final teaching practice, independent classroom teaching, project completion, and professional portfolio development."
                  credits="8"
                  type="Practical (8 weeks)"
                />
                <CourseCard
                  code="EDU 405"
                  title="Community Engagement Project"
                  description="Mathematics awareness programs, community teaching, mathematical literacy initiatives, and social responsibility projects."
                  credits="2"
                  type="Field Work"
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Mathematics Teaching Section */}
      <section className="py-10 sm:py-12 lg:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#006837] mb-4">
              Why Choose Mathematics Teaching?
              <div className="w-20 h-1 bg-gradient-to-r from-[#7cb983] to-[#6ba872] mx-auto mt-3"></div>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-6">
              Discover the rewarding career of being a Mathematics educator
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReasonCard
              number="1"
              title="High Demand Subject"
              description="Mathematics teachers are consistently in high demand across government and private schools, coaching centers, and educational institutions throughout India."
            />
            <ReasonCard
              number="2"
              title="Make a Lasting Impact"
              description="Help students overcome math anxiety, build confidence, and develop critical thinking skills that will benefit them throughout their lives and careers."
            />
            <ReasonCard
              number="3"
              title="Competitive Salary"
              description="Mathematics teachers command competitive salaries in both government (TRB) and private sector positions, with excellent career growth opportunities."
            />
            <ReasonCard
              number="4"
              title="Diverse Career Paths"
              description="Open doors to various roles including school teaching, curriculum development, educational technology, coaching institutes, and higher education."
            />
            <ReasonCard
              number="5"
              title="Job Security"
              description="Education is a recession-proof sector. Government teaching positions offer job security, pension benefits, and excellent work-life balance."
            />
            <ReasonCard
              number="6"
              title="Continuous Learning"
              description="Teaching Mathematics keeps you intellectually engaged, with opportunities for continuous professional development and research in pedagogy."
            />
          </div>
        </div>
      </section>

      {/* Career Prospects Section */}
      <section className="py-10 sm:py-12 lg:py-16 px-4 bg-gradient-to-br from-[#006837] via-[#004d28] to-[#002309] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Career Prospects
              <div className="w-20 h-1 bg-gradient-to-r from-[#7cb983] to-[#6ba872] mx-auto mt-3"></div>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white mt-6">
              Explore the diverse career opportunities awaiting B.Ed Mathematics graduates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <CareerCard
              icon={<School className="w-10 h-10" />}
              title="Secondary School Teacher"
              description="Teach Mathematics in Classes 6-10 at government and private schools. Eligible for TET and TRB examinations across Tamil Nadu and India."
            />
            <CareerCard
              icon={<GraduationCap className="w-10 h-10" />}
              title="Higher Secondary Teacher"
              description="Teach advanced Mathematics in Classes 11-12, prepare students for board examinations, JEE, NEET, and other competitive exams."
            />
            <CareerCard
              icon={<BookOpen className="w-10 h-10" />}
              title="Curriculum Developer"
              description="Design and develop Mathematics curriculum, textbooks, workbooks, and digital learning materials for educational publishers and institutions."
            />
            <CareerCard
              icon={<Briefcase className="w-10 h-10" />}
              title="Coaching Institute Faculty"
              description="Join premier coaching institutes for competitive examination preparation, IIT-JEE coaching, or establish your own coaching center."
            />
            <CareerCard
              icon={<Users className="w-10 h-10" />}
              title="Educational Administrator"
              description="Take up leadership roles as Academic Coordinator, Vice Principal, or Principal in schools and educational organizations."
            />
            <CareerCard
              icon={<GraduationCap className="w-10 h-10" />}
              title="Higher Education (M.Ed/Ph.D)"
              description="Pursue M.Ed, M.Phil, or Ph.D in Education and become a college lecturer, professor, or educational researcher."
            />
          </div>
        </div>
      </section>

      {/* Campus Facilities Section */}
      <section className="py-10 sm:py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#006837] mb-4">
              Campus Facilities
              <div className="w-20 h-1 bg-gradient-to-r from-[#7cb983] to-[#6ba872] mx-auto mt-3"></div>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-6">
              World-class infrastructure supporting your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <FacilityCard
              title="Mathematics Lab"
              subtitle="Mathematics Lab"
              bgColor="from-[#006837] to-[#002309]"
            />
            <FacilityCard
              title="Digital Library"
              subtitle="Digital Library"
              bgColor="from-[#7cb983] to-[#6ba872]"
            />
            <FacilityCard
              title="Smart Classrooms"
              subtitle="Smart Learning Studios"
              bgColor="from-[#7cb983] to-[#7cb983]"
            />
            <FacilityCard
              title="Micro Teaching"
              subtitle="Micro-Teaching Lab"
              bgColor="from-[#006837] to-[#002309]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FacilityCard
              title="Computer Lab"
              subtitle="Computer Lab"
              bgColor="from-[#7cb983] to-[#6ba872]"
            />
            <FacilityCard
              title="Seminar Hall"
              subtitle="Seminar Hall"
              bgColor="from-[#7cb983] to-[#7cb983]"
            />
            <FacilityCard
              title="Resource Center"
              subtitle="Resource Center"
              bgColor="from-[#006837] to-[#002309]"
            />
            <FacilityCard
              title="Hostel"
              subtitle="Hostel Facility"
              bgColor="from-[#7cb983] to-[#6ba872]"
            />
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-10 sm:py-12 lg:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#006837] mb-4">
              Admission Process
              <div className="w-20 h-1 bg-gradient-to-r from-[#7cb983] to-[#6ba872] mx-auto mt-3"></div>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-6">
              Simple steps to begin your journey as a Mathematics educator
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Desktop Timeline Layout (md and up) */}
            <div className="relative hidden md:block">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#7cb983] to-[#006837]"></div>

              {/* Step 1 */}
              <div className="relative mb-16">
                <div className="flex items-center justify-between gap-8">
                  <div className="w-5/12 text-right">
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-3">Check Eligibility</h3>
                      <p className="text-gray-600">
                        Verify that you meet the academic requirements: Bachelor's degree with Mathematics and minimum 50% marks (45% for reserved categories).
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    1
                  </div>
                  <div className="w-5/12"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-16">
                <div className="flex items-center justify-between gap-8">
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    2
                  </div>
                  <div className="w-5/12 text-left">
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-3">Online Application</h3>
                      <p className="text-gray-600">
                        Fill out the online application form on our website with accurate personal and academic details. Pay the application fee online.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-16">
                <div className="flex items-center justify-between gap-8">
                  <div className="w-5/12 text-right">
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-3">Document Submission</h3>
                      <p className="text-gray-600">
                        Upload scanned copies of required documents including mark sheets, certificates, and photographs during the application process.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    3
                  </div>
                  <div className="w-5/12"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative mb-16">
                <div className="flex items-center justify-between gap-8">
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    4
                  </div>
                  <div className="w-5/12 text-left">
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-3">Counseling & Selection</h3>
                      <p className="text-gray-600">
                        Attend the counseling session (online/offline) where selection is based on academic merit and TNTEU entrance score (if applicable).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative mb-16">
                <div className="flex items-center justify-between gap-8">
                  <div className="w-5/12 text-right">
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-3">Fee Payment</h3>
                      <p className="text-gray-600">
                        Upon selection, complete the fee payment process. Avail government scholarships if eligible. Various payment options available.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    5
                  </div>
                  <div className="w-5/12"></div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative">
                <div className="flex items-center justify-between gap-8">
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    6
                  </div>
                  <div className="w-5/12 text-left">
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-3">Begin Your Journey</h3>
                      <p className="text-gray-600">
                        Complete document verification, attend orientation program, and start your transformative journey as a future Mathematics educator!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Timeline Layout (sm and below) */}
            <div className="relative md:hidden">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7cb983] to-[#006837]"></div>

              {/* Step 1 */}
              <div className="relative mb-8 pl-16">
                <div className="absolute left-0 w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="text-lg font-bold text-[#006837] mb-2">Check Eligibility</h3>
                  <p className="text-gray-600 text-sm">
                    Verify that you meet the academic requirements: Bachelor's degree with Mathematics and minimum 50% marks (45% for reserved categories).
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-8 pl-16">
                <div className="absolute left-0 w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="text-lg font-bold text-[#006837] mb-2">Online Application</h3>
                  <p className="text-gray-600 text-sm">
                    Fill out the online application form on our website with accurate personal and academic details. Pay the application fee online.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-8 pl-16">
                <div className="absolute left-0 w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="text-lg font-bold text-[#006837] mb-2">Document Submission</h3>
                  <p className="text-gray-600 text-sm">
                    Upload scanned copies of required documents including mark sheets, certificates, and photographs during the application process.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative mb-8 pl-16">
                <div className="absolute left-0 w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  4
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="text-lg font-bold text-[#006837] mb-2">Counseling & Selection</h3>
                  <p className="text-gray-600 text-sm">
                    Attend the counseling session (online/offline) where selection is based on academic merit and TNTEU entrance score (if applicable).
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative mb-8 pl-16">
                <div className="absolute left-0 w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  5
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="text-lg font-bold text-[#006837] mb-2">Fee Payment</h3>
                  <p className="text-gray-600 text-sm">
                    Upon selection, complete the fee payment process. Avail government scholarships if eligible. Various payment options available.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative pl-16">
                <div className="absolute left-0 w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  6
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="text-lg font-bold text-[#006837] mb-2">Begin Your Journey</h3>
                  <p className="text-gray-600 text-sm">
                    Complete document verification, attend orientation program, and start your transformative journey as a future Mathematics educator!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#006837] mb-4">
              Frequently Asked Questions
              <div className="w-20 h-1 bg-gradient-to-r from-[#7cb983] to-[#6ba872] mx-auto mt-3"></div>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-6">
              Find answers to common queries about B.Ed Mathematics program
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="What is the eligibility for B.Ed Mathematics admission?"
              answer="Candidates must hold a Bachelor's degree (BSc/BA/BCom or equivalent) with at least 50% marks (45% for SC/ST/OBC/PWD candidates) with Mathematics as a main or subsidiary subject at the degree level. Candidates who have studied Mathematics up to Class 12 may also be considered."
              isOpen={openFaq === 0}
              onClick={() => toggleFaq(0)}
            />
            <FAQItem
              question="What is the duration and mode of B.Ed Mathematics program?"
              answer="The B.Ed Mathematics program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE norms. The program is conducted on-campus at JKKN College of Education, Komarapalayam, and includes classroom teaching, laboratory work, and school internships."
              isOpen={openFaq === 1}
              onClick={() => toggleFaq(1)}
            />
            <FAQItem
              question="Can I teach after completing B.Ed Mathematics?"
              answer="Yes, B.Ed Mathematics graduates are eligible to teach Mathematics in Classes 6-12 in government, government-aided, and private schools. You can appear for TET (Teacher Eligibility Test) and TRB (Teachers Recruitment Board) examinations for government teaching positions in Tamil Nadu and other states."
              isOpen={openFaq === 2}
              onClick={() => toggleFaq(2)}
            />
            <FAQItem
              question="What is the scope of practical training in this program?"
              answer="The program includes extensive practical training: micro-teaching sessions, simulated teaching, and a 16-week school internship program spread across three phases. Learners gain hands-on experience teaching Mathematics at partner secondary and higher secondary schools under expert mentorship."
              isOpen={openFaq === 3}
              onClick={() => toggleFaq(3)}
            />
            <FAQItem
              question="Is JKKN College of Education recognized for B.Ed Mathematics?"
              answer="Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed degree is recognized across India for teaching positions and higher studies."
              isOpen={openFaq === 4}
              onClick={() => toggleFaq(4)}
            />
            <FAQItem
              question="What scholarships are available for B.Ed Mathematics?"
              answer="Various scholarships are available including government scholarships for SC/ST/OBC/MBC candidates, BC Muslim scholarships, and merit-based institutional scholarships. The fee structure follows Tamil Nadu government norms. Contact the admission office for detailed scholarship information and eligibility criteria."
              isOpen={openFaq === 5}
              onClick={() => toggleFaq(5)}
            />
            <FAQItem
              question="What are the career opportunities after B.Ed Mathematics?"
              answer="Career opportunities include: Secondary and Higher Secondary school teacher, Coaching institute faculty, Curriculum developer, Educational content writer, Educational administrator, Online tutor. You can also pursue M.Ed, M.Phil, or Ph.D for academic and research careers in education."
              isOpen={openFaq === 6}
              onClick={() => toggleFaq(6)}
            />
            <FAQItem
              question="Does the program include technology training for teaching?"
              answer="Yes, the program includes comprehensive ICT training covering educational technology tools like GeoGebra, MATLAB basics, Smart Board usage, online teaching platforms, and digital content creation. This prepares you for modern, technology-enabled classrooms and online teaching environments."
              isOpen={openFaq === 7}
              onClick={() => toggleFaq(7)}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-[#7cb983] to-[#7cb983]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Shape Future Mathematicians?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl mb-10 text-white/95">
            Join JKKN College of Education and embark on a rewarding career as a Mathematics educator. Applications are now open for the 2025-26 academic year.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#7cb983] hover:bg-gray-100 font-bold rounded-lg shadow-lg transition-all transform hover:scale-105">
              <Users className="w-6 h-6" />
              Apply Online Now
            </Link>
            <a href="tel:+919345855001" className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-[#7cb983] font-bold rounded-lg shadow-lg transition-all transform hover:scale-105">
              <Phone className="w-6 h-6" />
              Contact Admissions
            </a>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

// Course Card Component
function CourseCard({ code, title, description, credits, type }: {
  code: string;
  title: string;
  description: string;
  credits: string;
  type: string;
}) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-[#006837] text-white px-4 py-3 rounded-lg flex-shrink-0">
          <div className="text-xs font-semibold">{code.split(' ')[0]}</div>
          <div className="text-lg font-bold">{code.split(' ')[1]}</div>
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-[#006837] mb-2">{title}</h4>
          <p className="text-gray-600 mb-3">{description}</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>Credits: {credits}</span>
            <span>{type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reason Card Component
function ReasonCard({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
      <div className="w-14 h-14 bg-[#7cb983] rounded-full flex items-center justify-center mb-6">
        <span className="text-2xl font-bold text-white">{number}</span>
      </div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#006837] mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

// Career Card Component
function CareerCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all">
      <div className="w-20 h-20 bg-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 text-center">{title}</h3>
      <p className="text-white leading-relaxed text-center">{description}</p>
    </div>
  );
}

// Facility Card Component
function FacilityCard({ title, subtitle, bgColor }: {
  title: string;
  subtitle: string;
  bgColor: string;
}) {
  return (
    <div className={`bg-gradient-to-br ${bgColor} rounded-xl p-8 text-white text-center min-h-[200px] flex flex-col justify-center hover:scale-105 transition-transform`}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-lg opacity-90">{subtitle}</p>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
      >
        <span className="text-lg font-bold text-[#006837] pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-[#006837] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-[#006837] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
