'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import {
  Clock,
  BookOpen,
  ChevronUp,
  Mail,
  TrendingUp,
  AlignLeft,
  ClipboardList,
  Briefcase,
  ArrowLeftRight,
} from 'lucide-react';

const tocItems = [
  { id: 'what-is-bed', label: 'What is B.Ed? Course Overview' },
  { id: 'eligibility', label: 'B.Ed Eligibility Criteria' },
  { id: 'curriculum', label: 'B.Ed Course Curriculum' },
  { id: 'tnteu-counseling', label: 'TNTEU Counseling 2026' },
  { id: 'fee-structure', label: 'B.Ed Fee Structure' },
  { id: 'career-scope', label: 'Career Scope After B.Ed' },
  { id: 'why-jkkn', label: 'Why Choose JKKN College of Education?' },
  { id: 'admission-process', label: 'Admission Process 2026' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const popularPosts = [
  {
    category: 'Exam Prep',
    title: 'How to Crack TNTET 2026: Complete Study Plan & Strategy',
    date: 'Feb 12, 2026',
  },
  {
    category: 'B.Ed Admissions',
    title: 'B.Ed vs D.El.Ed: Which Teacher Training Course is Right for You?',
    date: 'Feb 5, 2026',
  },
  {
    category: 'Teaching Careers',
    title: 'Top 10 Career Options After B.Ed in India [2026 Updated]',
    date: 'Feb 18, 2026',
  },
];

const faqs = [
  {
    q: 'What is the eligibility for B.Ed admission at JKKN College of Education?',
    a: 'Candidates must hold a Bachelor\'s degree with minimum 50% marks (45% for SC/ST/OBC) from a recognized university. The degree should be in the subject you wish to specialize in. Contact our admissions office at +91 9345855001 for detailed eligibility criteria.',
  },
  {
    q: 'Is hostel facility available at JKKN College of Education?',
    a: 'Yes, JKKN provides separate hostel facilities for boys and girls within the campus at Natarajapuram, Komarapalayam. The campus is residential with mess, library, and recreational facilities.',
  },
  {
    q: 'What is the B.Ed fee structure at JKKN College of Education?',
    a: 'Fee structure is regulated by the Tamil Nadu government fee committee and varies by admission category (state quota/management). Contact admissions for current fees: +91 9345855001.',
  },
  {
    q: 'Is JKKN College of Education NCTE approved?',
    a: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai — ensuring your B.Ed degree is recognized for government and private school teaching positions across India.',
  },
  {
    q: 'What are the career opportunities after B.Ed from JKKN?',
    a: 'JKKN College of Education has a 98% placement rate. Graduates secure teaching positions in government and private schools, qualify for TNTET/TRB examinations, and advance to M.Ed or Ph.D programs. Many alumni teach in CBSE, ICSE, and Tamil Nadu State Board schools across the region.',
  },
];

const relatedArticles = [
  {
    category: 'Teaching Careers',
    readTime: '10 min',
    title: 'Top 10 Career Options After B.Ed in India [2026 Updated]',
    description:
      'From school teaching to curriculum development, ed-tech to school administration — discover the best career paths open to B.Ed graduates in 2026...',
    date: 'Feb 18, 2026',
    Icon: Briefcase,
    gradient: 'from-[#6ba872] to-[#002309]',
  },
  {
    category: 'B.Ed Admissions',
    readTime: '13 min',
    title: 'B.Ed vs D.El.Ed: Which Teacher Training Course is Right for You?',
    description:
      'An honest comparison of B.Ed and D.El.Ed — course duration, eligibility, career scope, salary expectations, and which suits your teaching ambitions...',
    date: 'Feb 5, 2026',
    Icon: ArrowLeftRight,
    gradient: 'from-[#7cb983] to-[#006837]',
  },
  {
    category: 'Campus Life',
    readTime: '7 min',
    title: 'Day in the Life of a B.Ed Student at JKKN College of Education',
    description:
      'Follow a typical day of a B.Ed student at JKKN — from morning sessions and micro-teaching practice to school internships and campus activities...',
    date: 'Feb 8, 2026',
    Icon: ClipboardList,
    gradient: 'from-[#7cb983] via-[#6ba872] to-[#006837]',
  },
];

// header height (pt-20 = 80px) + desired gap (24px)
const FIXED_TOP = 104;

export default function BlogDetailPage() {
  const [activeSection, setActiveSection] = useState('what-is-bed');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // JS-based sticky sidebar — 3 states: normal → fixed → bottom
  // (CSS sticky is broken by overflow-x:hidden on body in globals.css)
  const gridRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarContentRef = useRef<HTMLDivElement>(null);
  const [sidebarState, setSidebarState] = useState<'normal' | 'fixed' | 'bottom'>('normal');
  const [fixedLeft, setFixedLeft] = useState(0);
  const [fixedWidth, setFixedWidth] = useState(320);

  useEffect(() => {
    let sidebarAbsTop = 0;
    let gridAbsBottom = 0;
    let prevState: 'normal' | 'fixed' | 'bottom' = 'normal';

    const measure = () => {
      if (sidebarRef.current) {
        sidebarAbsTop =
          sidebarRef.current.getBoundingClientRect().top + window.scrollY;
        setFixedLeft(sidebarRef.current.getBoundingClientRect().left);
        setFixedWidth(sidebarRef.current.offsetWidth);
      }
      if (gridRef.current) {
        gridAbsBottom =
          gridRef.current.getBoundingClientRect().bottom + window.scrollY;
      }
    };

    const handleScroll = () => {
      // TOC active section tracking
      const scrollPos = window.scrollY + FIXED_TOP + 20;
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }

      // 3-state sidebar logic
      if (!sidebarRef.current || !sidebarContentRef.current) return;
      const scrollY = window.scrollY;
      const sidebarHeight = sidebarContentRef.current.offsetHeight;
      const threshold1 = sidebarAbsTop - FIXED_TOP;
      const threshold2 = gridAbsBottom - FIXED_TOP - sidebarHeight;

      let next: 'normal' | 'fixed' | 'bottom';
      if (scrollY < threshold1) {
        next = 'normal';
      } else if (scrollY >= threshold2) {
        next = 'bottom';
      } else {
        next = 'fixed';
        // Keep left/width fresh while transitioning into fixed
        setFixedLeft(sidebarRef.current.getBoundingClientRect().left);
        setFixedWidth(sidebarRef.current.offsetWidth);
      }

      if (next !== prevState) {
        prevState = next;
        setSidebarState(next);
      }
    };

    const handleResize = () => {
      measure();
      handleScroll();
    };

    const raf = requestAnimationFrame(measure);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── Article Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="bg-[#FBFBEE] text-[#006837] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            B.Ed Admissions
          </span>
          <div className="flex items-center gap-1.5 text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            <span>12 min read</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400 text-sm">2,200 words</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          B.Ed Admission 2026 in Tamil Nadu: Eligibility, Process &amp; Key Dates
        </h1>

        {/* Author row */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
            <span className="text-[#006837] font-bold text-sm">JE</span>
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm">By JKKN Education Team</p>
            <p className="text-gray-400 text-xs">
              Published Feb 20, 2026 &bull; Updated Feb 20, 2026
            </p>
          </div>
        </div>
      </div>

      {/* ── Featured Image ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="w-full rounded-2xl bg-gradient-to-br from-[#7cb983] via-[#6ba872] to-[#006837] flex flex-col items-center justify-center py-16 sm:py-20 gap-3">
          <BookOpen className="w-12 h-12 text-white" strokeWidth={1.5} />
          <p className="text-white font-semibold text-lg">B.Ed Admission Guide 2026 — Featured Image</p>
          <p className="text-white/70 text-sm">JKKN College of Education</p>
        </div>
      </div>

      {/* ── Two-column layout ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 relative" ref={gridRef}>

          {/* ── Main Content ── */}
          <main className="min-w-0">

            {/* Quick Answer */}
            <div className="bg-[#FBFBEE] border-l-4 border-[#006837] rounded-r-xl p-5 mb-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full border-2 border-[#006837] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#006837] font-bold text-[10px] leading-none">i</span>
                </div>
                <span className="text-[#006837] font-bold text-xs uppercase tracking-wider">
                  Quick Answer
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                B.Ed (Bachelor of Education) is a 2-year professional teacher training degree
                required to teach at secondary and senior secondary level schools in India. In Tamil
                Nadu, B.Ed colleges are affiliated to the{' '}
                <strong>Tamil Nadu Teachers Education University (TNTEU)</strong> and must be
                approved by the <strong>National Council for Teacher Education (NCTE)</strong>.
                Admission is based on merit in the qualifying degree.{' '}
                <strong>JKKN College of Education, Komarapalayam</strong> offers 100 B.Ed seats
                with NCTE approval and TNTEU affiliation.
              </p>
            </div>

            {/* ── Section 1: What is B.Ed ── */}
            <section id="what-is-bed" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                What is B.Ed? Course Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                B.Ed stands for <strong>Bachelor of Education</strong>, a 2-year professional
                undergraduate program that trains candidates to become qualified school teachers.
                It is mandatory for teaching at the secondary (Classes 9–10) and senior secondary
                (Classes 11–12) levels in recognized schools across India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The course is regulated by the{' '}
                <strong>National Council for Teacher Education (NCTE)</strong> and is offered by
                colleges affiliated to state teacher education universities. In Tamil Nadu, all
                B.Ed colleges — including{' '}
                <span className="text-[#006837] font-medium cursor-pointer hover:underline">
                  JKKN College of Education
                </span>{' '}
                — are affiliated to the{' '}
                <strong>Tamil Nadu Teachers Education University (TNTEU), Chennai</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">Key highlights of the B.Ed course:</p>
              <ul className="space-y-2.5 mb-4">
                {[
                  ['Duration:', '2 years (4 semesters)'],
                  ['Degree type:', 'Professional undergraduate'],
                  ['Regulatory body:', 'NCTE (National Council for Teacher Education)'],
                  ['Affiliation (Tamil Nadu):', 'TNTEU — Tamil Nadu Teachers Education University'],
                  ['Specializations:', 'Mathematics, Science, Tamil, English, Commerce, Social Science, and more'],
                  ['School Internship:', '16 weeks of practice teaching in partner schools'],
                ].map(([key, val]) => (
                  <li key={key as string} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span>
                      <strong>{key}</strong> {val}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── Section 2: Eligibility ── */}
            <section id="eligibility" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                B.Ed Eligibility Criteria in Tamil Nadu
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                To be eligible for B.Ed admission in Tamil Nadu, candidates must meet the following
                criteria:
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200 w-36">
                        Criteria
                      </th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Requirement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Education', 'Bachelor\'s degree (B.A. / B.Sc. / B.Com. or equivalent) from a recognized university'],
                      ['Minimum Marks', '50% aggregate in qualifying degree (45% for SC/ST/OBC candidates)'],
                      ['Entrance Exam', 'No entrance exam — admission based on merit in qualifying degree'],
                      ['Age', 'No upper age limit for B.Ed admission in Tamil Nadu'],
                      ['Nationality', 'Indian citizens and NRI candidates'],
                      ['Domicile', 'Tamil Nadu domicile preferred for state quota seats'],
                    ].map(([criteria, req], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{criteria}</td>
                        <td className="px-4 py-3 text-gray-600">{req}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-amber-700">Important:</strong> Your B.Ed specialization
                  must align with the subject you studied in your Bachelor&apos;s degree. For
                  example, a B.Sc. Mathematics graduate can choose Mathematics as their B.Ed
                  teaching subject.
                </p>
              </div>
            </section>

            {/* ── Section 3: Curriculum ── */}
            <section id="curriculum" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                B.Ed Course Curriculum — Semester-Wise Breakdown
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                The B.Ed curriculum is structured across four semesters spanning two academic years.
                The program combines theoretical foundations of education with extensive practical
                classroom training.
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200 w-24">
                        Year
                      </th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200 w-28">
                        Semester
                      </th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Key Subjects
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        '1st Year',
                        'Sem 1',
                        'Childhood & Growing Up, Contemporary India & Education, Language Across the Curriculum, Understanding Disciplines & Subjects',
                      ],
                      [
                        '1st Year',
                        'Sem 2',
                        'Learning & Teaching, Assessment for Learning, Creating an Inclusive School, Pedagogy of School Subject I',
                      ],
                      [
                        '2nd Year',
                        'Sem 3',
                        'Knowledge & Curriculum, Gender, School & Society, Pedagogy of School Subject II, School Internship (Practice Teaching)',
                      ],
                      [
                        '2nd Year',
                        'Sem 4',
                        'Optional Courses, Reading & Reflecting on Texts, School Internship (continued), Dissertation / Project Work',
                      ],
                      ['Internship', '16 Weeks', 'Practice teaching in government and private schools under faculty supervision'],
                    ].map(([year, sem, subjects], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{year}</td>
                        <td className="px-4 py-3 text-gray-600">{sem}</td>
                        <td className="px-4 py-3 text-gray-600">{subjects}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-[#FBFBEE] border-l-4 border-[#006837] rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  At <strong>JKKN College of Education</strong>, students complete their
                  school internship at partner schools across Komarapalayam, Namakkal, and
                  Erode, gaining <strong>real classroom experience</strong> with structured
                  mentoring from experienced faculty.
                </p>
              </div>
            </section>

            {/* ── Section 4: TNTEU Counseling ── */}
            <section id="tnteu-counseling" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                TNTEU Counseling for B.Ed Admission in Tamil Nadu 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                B.Ed admission in Tamil Nadu is conducted through a centralized counseling process
                managed by the <strong>Tamil Nadu Teachers Education University (TNTEU)</strong>.
                Seats are allotted based on merit in the qualifying degree and category-wise
                reservation. The following table outlines the expected counseling schedule:
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Stage
                      </th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Expected Timeline
                      </th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Online Registration', 'June – July 2026', 'Apply via TNTEU portal with qualifying degree marks'],
                      ['Document Verification', 'July 2026', 'Certificates verified at designated centers'],
                      ['Counseling Round 1', 'August 2026', 'Seat allotment based on merit and college preference'],
                      ['Counseling Round 2', 'August – September 2026', 'Remaining seats filled via second round'],
                      ['College Reporting', 'September 2026', 'Report to allotted college with original documents'],
                    ].map(([stage, timeline, details], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{stage}</td>
                        <td className="px-4 py-3 text-gray-600">{timeline}</td>
                        <td className="px-4 py-3 text-gray-600">{details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-amber-700">Note:</strong> These are estimated timelines
                  based on previous year schedules. Actual 2026 counseling dates will be published
                  by TNTEU on their official portal. Check regularly for updates or contact JKKN
                  College of Education admissions at +91 9345855001.
                </p>
              </div>
            </section>

            {/* ── Section 5: Fee Structure ── */}
            <section id="fee-structure" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                B.Ed Fee Structure in Tamil Nadu
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                B.Ed fees in Tamil Nadu are regulated by the government and vary based on the type
                of institution and admission category. Here is an overview of fee ranges across
                different college types:
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        College Type
                      </th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Annual Fee Range
                      </th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Total (2 Years)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Government B.Ed Colleges', '₹5,000 – ₹15,000', '₹10,000 – ₹30,000'],
                      [
                        'Aided B.Ed Colleges',
                        '₹20,000 – ₹40,000',
                        '₹40,000 – ₹80,000',
                      ],
                      [
                        'Self-Financing (State Quota)',
                        '₹40,000 – ₹70,000',
                        '₹80,000 – ₹1,40,000',
                      ],
                      [
                        'Self-Financing (Management)',
                        '₹60,000 – ₹1,00,000',
                        '₹1,20,000 – ₹2,00,000',
                      ],
                    ].map(([type, annual, total], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{type}</td>
                        <td className="px-4 py-3 text-gray-600">{annual}</td>
                        <td className="px-4 py-3 text-gray-600">{total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-amber-700">Note:</strong> JKKN College of Education fee
                  structure for 2026-27 is subject to government fee committee regulation. Contact
                  admissions for current fees:{' '}
                  <span className="text-[#006837] font-semibold">+91 9345855001</span>
                </p>
              </div>
            </section>

            {/* ── Section 6: Career Scope ── */}
            <section id="career-scope" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Career Scope After B.Ed
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A B.Ed degree opens a wide range of career opportunities in teaching, education
                administration, and beyond. With India&apos;s growing emphasis on quality education
                and the Right to Education Act, certified B.Ed teachers are in steady demand across
                government and private schools.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The most common career path after B.Ed is school teaching. Government school
                teaching positions are filled through state-level examinations — in Tamil Nadu,
                candidates must qualify the{' '}
                <strong>TNTET (Tamil Nadu Teacher Eligibility Test)</strong> and appear for{' '}
                <strong>TRB (Teacher Recruitment Board)</strong> recruitment. These positions offer
                job security, pension benefits, and structured pay scales under the 7th Pay
                Commission.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Private schools — including CBSE, ICSE, and international board schools — actively
                recruit B.Ed graduates with subject expertise. Ed-Tech companies, curriculum
                developers, and education NGOs also offer exciting non-classroom roles for B.Ed
                graduates seeking broader impact in education.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                For those seeking academic advancement, M.Ed (Master of Education) and Ph.D programs
                open doors to college lectureship, educational research, and policy roles. Many
                JKKN graduates have also established their own coaching centers and private schools,
                building entrepreneurial careers in education.
              </p>
              <p className="text-gray-600 mb-4">Top career paths after B.Ed:</p>
              <ol className="space-y-3 mb-8">
                {[
                  ['Government school teacher', 'via TNTET & TRB recruitment — Classes 6 to 12'],
                  ['Private school teacher', 'CBSE, ICSE, State Board, and international curriculum schools'],
                  [
                    'M.Ed / Ph.D specialization',
                    'Educational Psychology, Curriculum & Instruction, Special Education, and more',
                  ],
                  ['Education researcher / academician', 'teacher education colleges and universities'],
                  [
                    'Ed-Tech professional',
                    'content development, instructional design, online teaching platforms',
                  ],
                  ['Education administrator', 'school principal, headmaster, academic coordinator'],
                  ['Education entrepreneur', 'coaching center owner, curriculum developer, private school founder'],
                  [
                    'NGO / policy roles',
                    'community education programs, government literacy initiatives',
                  ],
                ].map(([title, desc], i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#006837] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-600 text-sm leading-relaxed">
                      <strong className="text-gray-800">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ol>

              {/* Mid-content CTA */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#7cb983] via-[#6ba872] to-[#006837] p-8 text-center overflow-hidden">
                <div className="absolute top-3 right-6 w-20 h-20 rounded-full bg-white/10 pointer-events-none" />
                <div className="absolute bottom-3 left-4 w-12 h-12 rounded-full bg-white/10 pointer-events-none" />
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                  Ready to Start Your Teaching Career?
                </h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  Apply for B.Ed 2026 at JKKN College of Education — 100 seats, NCTE approved,
                  TNTEU affiliated, and 98% placement rate.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                  <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-white text-[#006837] font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                    Apply Now →
                  </a>
                  <a href="tel:+919345855001" className="border border-white/50 text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-white/10 transition-colors">
                    Contact Admissions
                  </a>
                </div>
              </div>
            </section>

            {/* ── Section 7: Why JKKN ── */}
            <section id="why-jkkn" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why Choose JKKN College of Education for B.Ed?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Choosing the right B.Ed college shapes your classroom readiness and career prospects.
                Here are five reasons why JKKN College of Education stands apart for B.Ed aspirants
                in Tamil Nadu:
              </p>
              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: 'NCTE Approved & TNTEU Affiliated',
                    desc: 'JKKN College of Education holds valid NCTE recognition, ensuring your B.Ed degree is legally recognized for teaching in government and private schools across India. Affiliation to TNTEU guarantees a standardized, quality curriculum.',
                  },
                  {
                    num: 2,
                    title: 'Extensive School Internship',
                    desc: 'Students complete 16 weeks of practice teaching at partner government and private schools across Komarapalayam, Namakkal, and Erode districts. Real classroom exposure under expert mentorship prepares graduates for confident teaching from day one.',
                  },
                  {
                    num: 3,
                    title: 'Experienced Faculty',
                    desc: 'Our faculty includes experienced teacher-educators with postgraduate and doctoral qualifications in Education, Psychology, and their respective subject specializations. Regular workshops, seminars, and guest lectures enrich student learning.',
                  },
                  {
                    num: 4,
                    title: 'Outstanding Placement Record',
                    desc: '98% placement rate with graduates placed in CBSE, ICSE, and Tamil Nadu State Board schools. TNTET coaching and TRB guidance are integrated into the program, ensuring graduates are exam-ready alongside classroom-ready.',
                  },
                  {
                    num: 5,
                    title: 'Strategic Location & Residential Campus',
                    desc: 'Situated on NH-544 (Salem-Coimbatore Highway) at Natarajapuram, Komarapalayam, easily accessible from Salem (45 km), Erode (30 km), Namakkal (20 km), and Tiruchengode (15 km). The residential campus includes hostel, library, and sports facilities.',
                  },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#006837] text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      {num}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 8: Admission Process ── */}
            <section id="admission-process" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                B.Ed Admission Process 2026 — Step by Step
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The B.Ed admission process in Tamil Nadu follows a centralized counseling-based
                system managed by TNTEU. Here is the step-by-step process for securing a seat at
                JKKN College of Education:
              </p>
              <div className="space-y-5">
                {[
                  [
                    'Complete your Bachelor\'s degree',
                    'with minimum 50% aggregate marks (45% for reserved categories) in a relevant subject from a recognized university.',
                  ],
                  [
                    'Register on the TNTEU portal',
                    'during the application window (June–July 2026). Fill in your personal details, academic marks, and preferred B.Ed specialization and colleges.',
                  ],
                  [
                    'Upload required documents',
                    'including qualifying degree mark sheets, transfer certificate, community certificate (if applicable), and passport-size photographs.',
                  ],
                  [
                    'Attend document verification',
                    'at designated TNTEU centers. Carry all original certificates and attested photocopies for verification.',
                  ],
                  [
                    'Participate in counseling',
                    'and select JKKN College of Education from the available options. Seat allotment is based on merit rank and college preference.',
                  ],
                  [
                    'Report to college',
                    'with all original documents upon receiving your allotment letter. Pay the admission fee and complete hostel allocation if required.',
                  ],
                  [
                    'Begin your B.Ed program',
                    'in September 2026. Orientation week includes campus tour, faculty introduction, academic briefing, and micro-teaching workshop.',
                  ],
                ].map(([bold, rest], i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#006837] text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      <strong className="text-gray-800">{bold}</strong> {rest}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 9: FAQs ── */}
            <section id="faq" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 text-sm pr-4">{faq.q}</span>
                      <div className="w-6 h-6 rounded-full bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
                        {openFaq === i ? (
                          <ChevronUp className="w-3.5 h-3.5 text-[#006837]" />
                        ) : (
                          <span className="text-[#006837] text-base font-bold leading-none">
                            &times;
                          </span>
                        )}
                      </div>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 pt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ── Author Box ── */}
            <div className="border border-gray-200 rounded-2xl p-6 mb-8">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                Written By
              </p>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#006837] font-bold text-lg">JE</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">JKKN Education Team</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-2">
                    The content team at JKKN College of Education creates evidence-based
                    educational content about teacher education, career guidance, and academic
                    pathways. Our faculty includes experienced teacher-educators and researchers
                    affiliated to Tamil Nadu Teachers Education University (TNTEU).
                  </p>
                  <button className="text-[#006837] font-semibold text-sm hover:underline">
                    More articles by this author →
                  </button>
                </div>
              </div>
            </div>

            {/* ── Tags & Share ── */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-10 border-b border-gray-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-500 text-sm font-medium">Tags:</span>
                {['B.Ed', 'Tamil Nadu', 'TNTEU', 'Admissions 2026', 'Teacher Education'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm font-medium">Share:</span>
                {[
                  { bg: 'bg-[#1877F2]', label: 'f' },
                  { bg: 'bg-[#1DA1F2]', label: 't' },
                  { bg: 'bg-[#0A66C2]', label: 'in' },
                  { bg: 'bg-[#25D366]', label: 'w' },
                ].map(({ bg, label }) => (
                  <button
                    key={label}
                    className={`w-8 h-8 rounded-full ${bg} text-white text-xs font-bold flex items-center justify-center hover:opacity-90 transition-opacity`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </main>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block" ref={sidebarRef}>
            <div
              ref={sidebarContentRef}
              className="space-y-5"
              style={
                sidebarState === 'fixed'
                  ? {
                      position: 'fixed',
                      top: FIXED_TOP,
                      left: fixedLeft,
                      width: fixedWidth,
                      zIndex: 10,
                    }
                  : sidebarState === 'bottom'
                  ? {
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: fixedWidth,
                    }
                  : {}
              }
            >

              {/* Table of Contents */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <AlignLeft className="w-4 h-4 text-[#006837]" />
                  <span className="font-bold text-gray-800 text-xs uppercase tracking-wider">
                    Table of Contents
                  </span>
                </div>
                <nav className="space-y-0.5">
                  {tocItems.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-2 py-1.5 rounded text-sm transition-colors ${
                        activeSection === item.id
                          ? 'text-[#006837] font-semibold'
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      {i + 1}. {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* CTA Card */}
              <div className="bg-[#FBFBEE] border border-[#7cb983]/40 rounded-xl p-5">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-green-600 text-xs font-bold uppercase tracking-wide">
                    Open
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">B.Ed Admission 2026</h4>
                <p className="text-gray-500 text-xs mb-4">
                  100 Seats Available at JKKN College of Education, Komarapalayam
                </p>
                <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="block w-full bg-[#006837] text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-[#004d28] transition-colors text-center">
                  Apply Now →
                </a>
                <a href="tel:+919345855001" className="block text-center text-[#006837] text-xs font-medium mt-3">
                  +91 9345855001
                </a>
              </div>

              {/* Email Subscribe */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="w-4 h-4 text-[#006837]" />
                  <span className="font-bold text-gray-800 text-sm">Teacher Education Updates</span>
                </div>
                <p className="text-gray-400 text-xs mb-4">
                  Get admission alerts, exam tips &amp; career guides delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2 focus:outline-none focus:border-[#006837] transition-colors"
                />
                <button className="w-full bg-gray-900 text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-gray-700 transition-colors">
                  Subscribe
                </button>
                <p className="text-center text-gray-400 text-xs mt-2">
                  No spam. Unsubscribe anytime.
                </p>
              </div>

              {/* Popular Posts */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-[#006837]" />
                  <span className="font-bold text-gray-800 text-xs uppercase tracking-wider">
                    Popular Posts
                  </span>
                </div>
                <div className="space-y-4">
                  {popularPosts.map((post, i) => (
                    <div key={i} className="group cursor-pointer">
                      <span className="bg-[#FBFBEE] text-[#006837] text-xs font-bold px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <p className="text-sm font-semibold text-gray-800 mt-1.5 mb-0.5 group-hover:text-[#006837] transition-colors leading-snug">
                        {post.title}
                      </p>
                      <p className="text-xs text-gray-400">{post.date}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>

      {/* ── Related Articles ── */}
      <section className="border-t border-gray-100 px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Related Articles</h2>
            <button className="text-[#006837] font-semibold text-sm hover:underline">
              View all posts →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((article, i) => {
              const { Icon } = article;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div
                    className={`h-44 bg-gradient-to-br ${article.gradient} flex items-center justify-center`}
                  >
                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-[#FBFBEE] text-[#006837] text-xs font-bold px-2 py-0.5 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">
                      {article.description}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {article.date} &bull; JKKN Education Team
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
