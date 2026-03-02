'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import {
  Clock,
  Briefcase,
  ChevronUp,
  Mail,
  TrendingUp,
  AlignLeft,
  FileText,
  FlaskConical,
  CheckCircle2,
} from 'lucide-react';

const tocItems = [
  { id: 'career-landscape', label: 'B.Ed Career Landscape in India 2026' },
  { id: 'government-teacher', label: '1. Government School Teacher' },
  { id: 'private-school', label: '2. Private & CBSE School Teacher' },
  { id: 'ed-tech', label: '3. Ed-Tech & Online Teaching' },
  { id: 'higher-education', label: '4. M.Ed & Higher Education' },
  { id: 'admin-roles', label: '5. School Administration' },
  { id: 'more-careers', label: '6–10. More Career Paths' },
  { id: 'salary-comparison', label: 'Salary Comparison 2026' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const popularPosts = [
  {
    category: 'B.Ed Admissions',
    title: 'B.Ed Admission 2026 in Tamil Nadu: Eligibility, Process & Key Dates',
    date: 'Feb 20, 2026',
  },
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
];

const faqs = [
  {
    q: 'What is the starting salary for a government school teacher in Tamil Nadu after B.Ed?',
    a: 'A newly recruited government school teacher in Tamil Nadu (Grade II / BT Assistant) earns approximately ₹35,900 per month basic pay under the 7th Pay Commission, along with DA, HRA, and other allowances. The total in-hand salary typically ranges from ₹45,000 to ₹55,000 per month depending on posting location.',
  },
  {
    q: 'Is B.Ed alone enough to get a government teaching job in Tamil Nadu?',
    a: 'No. A B.Ed degree is the mandatory qualification, but you must additionally qualify the TNTET (Tamil Nadu Teacher Eligibility Test) — either Paper I (Classes 1–5) or Paper II (Classes 6–8) — and then appear in TRB (Teacher Recruitment Board) examinations for actual appointment. JKKN College of Education integrates TNTET preparation into its curriculum to help students clear the exam promptly after graduation.',
  },
  {
    q: 'Can I become a lecturer in a college with just a B.Ed degree?',
    a: 'No. For college-level teaching, you need a minimum of M.Ed (Master of Education) for education departments, or a Master\'s degree with NET/SET qualification for other subjects. After M.Ed and NET/SET clearance, you can apply for Assistant Professor positions in B.Ed and D.El.Ed colleges. A Ph.D further strengthens academic career prospects.',
  },
  {
    q: 'Which B.Ed specialization has the most career opportunities in 2026?',
    a: 'Mathematics, Science (Physics/Chemistry/Biology), and Computer Science B.Ed specializations have the highest demand in both government and private schools. Tamil and English language specialists are also consistently in demand. Commerce and Social Science specializations offer strong placement in CBSE and ICSE schools in urban areas.',
  },
  {
    q: 'What are the career options after B.Ed other than school teaching?',
    a: 'Beyond school teaching, B.Ed graduates can pursue roles in Ed-Tech companies (as content developers, online tutors, or instructional designers), education NGOs, coaching institutes, curriculum development firms, education journalism, and school administration. Entrepreneurial graduates also establish their own coaching centers, tutorial institutions, and private schools.',
  },
];

const relatedArticles = [
  {
    category: 'B.Ed Admissions',
    readTime: '12 min',
    title: 'B.Ed Admission 2026 in Tamil Nadu: Eligibility, Process & Key Dates',
    description:
      'Detailed breakdown of the B.Ed admission process in Tamil Nadu — eligibility, TNTEU affiliation, application steps, and important deadlines for 2026...',
    date: 'Feb 20, 2026',
    Icon: FileText,
    gradient: 'from-[#7cb983] to-[#006837]',
  },
  {
    category: 'B.Ed Specializations',
    readTime: '14 min',
    title: 'Choosing the Right B.Ed Specialization: A Complete Guide for 2026',
    description:
      'Science, Commerce, Languages or Social Science — how to pick the right B.Ed specialization based on your graduation subject and career goals...',
    date: 'Feb 15, 2026',
    Icon: FlaskConical,
    gradient: 'from-[#7cb983] to-[#002309]',
  },
  {
    category: 'Exam Prep',
    readTime: '11 min',
    title: 'How to Crack TNTET 2026: Complete Study Plan & Strategy',
    description:
      'A comprehensive TNTET preparation guide with paper-wise strategy, recommended books, important topics, and time management tips for aspiring teachers...',
    date: 'Feb 12, 2026',
    Icon: CheckCircle2,
    gradient: 'from-[#6ba872] to-[#006837]',
  },
];

// header height (pt-20 = 80px) + desired gap (24px)
const FIXED_TOP = 104;

export default function BlogDetailPage() {
  const [activeSection, setActiveSection] = useState('career-landscape');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
      const scrollPos = window.scrollY + FIXED_TOP + 20;
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(tocItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }

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
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="bg-[#FBFBEE] text-[#006837] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            Teaching Careers
          </span>
          <div className="flex items-center gap-1.5 text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            <span>10 min read</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400 text-sm">2,000 words</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Top 10 Career Options After B.Ed in India [2026 Updated]
        </h1>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
            <span className="text-[#006837] font-bold text-sm">JE</span>
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm">By JKKN Education Team</p>
            <p className="text-gray-400 text-xs">
              Published Feb 18, 2026 &bull; Updated Feb 18, 2026
            </p>
          </div>
        </div>
      </div>

      {/* ── Featured Image ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="w-full rounded-2xl bg-gradient-to-br from-[#6ba872] to-[#002309] flex flex-col items-center justify-center py-16 sm:py-20 gap-3">
          <Briefcase className="w-12 h-12 text-white" strokeWidth={1.5} />
          <p className="text-white font-semibold text-lg">Careers After B.Ed — Featured Image</p>
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
                A B.Ed degree qualifies you for a wide range of careers beyond the traditional
                classroom. The top options include <strong>government school teacher</strong> (via
                TNTET &amp; TRB), <strong>private/CBSE school teacher</strong>,{' '}
                <strong>Ed-Tech educator</strong>, <strong>M.Ed &amp; academic career</strong>,
                and <strong>school administration</strong>. With India&apos;s education sector
                growing at over 16% annually, B.Ed graduates from NCTE-approved institutions like{' '}
                <strong>JKKN College of Education</strong> are in higher demand than ever in 2026.
              </p>
            </div>

            {/* ── Section 1: Career Landscape ── */}
            <section id="career-landscape" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                B.Ed Career Landscape in India 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The career landscape for B.Ed graduates in India has transformed significantly over
                the past decade. While school teaching remains the primary pathway, the rise of
                Ed-Tech, private coaching institutions, international schools, and education-focused
                NGOs has created a diverse ecosystem of opportunities for trained teachers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                India has over <strong>14.5 lakh schools</strong> and more than{' '}
                <strong>25 crore enrolled students</strong> — making it the world&apos;s largest
                school education system. The demand for qualified B.Ed teachers is projected to
                grow steadily as the Right to Education Act continues to drive expansion of
                government school infrastructure and as private schools raise their hiring standards.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Here is a snapshot of career options available to B.Ed graduates in 2026:
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  ['Government school teaching:', 'via TNTET + TRB (Tamil Nadu) or CTET + state TET'],
                  ['Private school teaching:', 'CBSE, ICSE, State Board, and international curriculum schools'],
                  ['Ed-Tech & online education:', 'content creation, live tutoring, instructional design'],
                  ['Higher education:', 'M.Ed + NET/SET → college lectureship; Ph.D → professorship'],
                  ['School administration:', 'academic coordinator, vice-principal, principal'],
                  ['Education entrepreneurship:', 'coaching center, private school, curriculum development'],
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

            {/* ── Section 2: Government Teacher ── */}
            <section id="government-teacher" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                1. Government School Teacher — Most Sought Career After B.Ed
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For most B.Ed graduates in Tamil Nadu, securing a <strong>government school
                teaching post</strong> is the most coveted career goal — and with good reason.
                Government teachers enjoy job security, structured pay scales under the{' '}
                <strong>7th Pay Commission</strong>, pension benefits, and generous leave policies
                that make it one of the most stable career choices in India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                To become a government teacher in Tamil Nadu, B.Ed graduates must clear two
                examinations in sequence:
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200 w-36">
                        Exam
                      </th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Purpose & Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['TNTET Paper I', 'For Classes 1–5 teachers; tests Child Development & Pedagogy, Language I & II, and subject content'],
                      ['TNTET Paper II', 'For Classes 6–8 teachers; tests Child Development & Pedagogy, Language I & II, and subject specialization'],
                      ['TRB Recruitment', 'Tamil Nadu Teacher Recruitment Board exam — actual job appointment after TNTET qualification'],
                      ['Post Grade', 'Secondary Grade Teacher (SGT), BT Assistant (Classes 6–8), PG Assistant (Classes 9–12)'],
                    ].map(([exam, detail], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{exam}</td>
                        <td className="px-4 py-3 text-gray-600">{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-[#FBFBEE] border-l-4 border-[#006837] rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  At <strong>JKKN College of Education</strong>, TNTET preparation is integrated
                  into the B.Ed curriculum. Students attend dedicated coaching sessions, mock tests,
                  and subject-wise strategy classes — ensuring a high TNTET pass rate among our
                  graduates.
                </p>
              </div>
            </section>

            {/* ── Section 3: Private School ── */}
            <section id="private-school" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                2. Private &amp; CBSE School Teacher
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Private schools — including <strong>CBSE, ICSE, State Board, and international
                curriculum</strong> institutions — are among the largest employers of B.Ed
                graduates. Unlike government recruitment, private schools hire directly and
                throughout the year, making this a faster entry point into the teaching profession.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                CBSE-affiliated schools have a legal requirement under NCTE norms to employ only
                B.Ed-qualified teachers for secondary and senior secondary classes. This has
                created a strong, consistent demand for B.Ed graduates with subject expertise.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Salaries in private schools vary widely — from ₹15,000 per month at smaller
                institutions to ₹40,000–₹60,000 per month at reputed CBSE or international
                schools in urban areas. Experienced teachers with 5+ years and a proven track
                record can command significantly higher packages.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-amber-700">Tip:</strong> Building subject expertise
                  and a strong school internship portfolio during B.Ed significantly improves
                  your chances of placement in reputed private schools. JKKN students complete
                  internships at recognized partner schools, adding credibility to their
                  applications.
                </p>
              </div>
            </section>

            {/* ── Section 4: Ed-Tech ── */}
            <section id="ed-tech" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                3. Ed-Tech &amp; Online Teaching
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Ed-Tech sector has emerged as one of the fastest-growing career destinations
                for B.Ed graduates. Companies like <strong>BYJU&apos;S, Vedantu, Unacademy,
                Testbook, and PhysicsWallah</strong> actively recruit trained teachers for roles
                that go far beyond live classroom teaching.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Key roles available to B.Ed graduates in Ed-Tech companies:
              </p>
              <ul className="space-y-2.5 mb-5">
                {[
                  ['Online tutor / live faculty:', 'conduct live classes for school students on Ed-Tech platforms'],
                  ['Content developer:', 'create video lectures, worksheets, question banks, and study materials'],
                  ['Instructional designer:', 'design learning pathways, assessments, and curriculum structures'],
                  ['Academic mentor:', 'guide students on career choices, subject selection, and study strategies'],
                  ['QA / academic reviewer:', 'review and quality-check educational content before publication'],
                ].map(([key, val]) => (
                  <li key={key as string} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span>
                      <strong>{key}</strong> {val}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#FBFBEE] border-l-4 border-[#006837] rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  Ed-Tech roles are largely <strong>remote-friendly</strong>, making them
                  accessible to B.Ed graduates across Tamil Nadu, including those in smaller
                  towns like Komarapalayam, Namakkal, and Erode. A strong subject background
                  and good communication skills are the primary requirements.
                </p>
              </div>
            </section>

            {/* ── Section 5: Higher Education ── */}
            <section id="higher-education" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                4. M.Ed &amp; Higher Education Roles
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For B.Ed graduates who aspire to teach at the college level or pursue academic
                research, the path leads through <strong>M.Ed (Master of Education)</strong> —
                a 2-year postgraduate program in educational theory, research, and practice.
                After M.Ed, graduates can apply for <strong>NET (National Eligibility Test)</strong>{' '}
                or <strong>SET (State Eligibility Test)</strong> qualification to become
                Assistant Professors at B.Ed and D.El.Ed colleges.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                The academic career ladder for B.Ed graduates looks like this:
              </p>
              <div className="space-y-5 mb-5">
                {[
                  {
                    num: 1,
                    title: 'B.Ed → M.Ed',
                    desc: 'Two-year postgraduate program in education. Eligible for NET/SET examination and assistant professor roles in teacher education colleges.',
                  },
                  {
                    num: 2,
                    title: 'M.Ed + NET/SET → Assistant Professor',
                    desc: 'Teach in NCTE-approved B.Ed or D.El.Ed colleges. Salary range: ₹57,700–₹1,82,400 (7th Pay Commission Academic Pay Level 10–14).',
                  },
                  {
                    num: 3,
                    title: 'Ph.D in Education → Associate/Full Professor',
                    desc: 'Advanced research and leadership roles in teacher education universities, education policy bodies, and research institutions.',
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

            {/* ── Section 6: Administration ── */}
            <section id="admin-roles" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                5. School Administration &amp; Leadership
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Experienced B.Ed graduates who develop strong leadership and organisational skills
                can advance into <strong>school administration</strong> roles — moving beyond the
                classroom into positions that shape the entire school&apos;s academic direction.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Common administration roles and typical experience requirements:
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Role
                      </th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Experience Needed
                      </th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Typical Salary
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Academic Coordinator', '2–3 years', '₹25,000 – ₹40,000/month'],
                      ['Head of Department', '4–6 years', '₹35,000 – ₹55,000/month'],
                      ['Vice Principal', '7–10 years', '₹50,000 – ₹80,000/month'],
                      ['Principal / Headmaster', '10+ years', '₹70,000 – ₹1,20,000/month'],
                    ].map(([role, exp, salary], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{role}</td>
                        <td className="px-4 py-3 text-gray-600">{exp}</td>
                        <td className="px-4 py-3 text-gray-600">{salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Section 7: More Careers ── */}
            <section id="more-careers" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                6–10. More Career Paths for B.Ed Graduates
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Beyond the top five options, B.Ed graduates have increasingly diverse career
                avenues in the education ecosystem:
              </p>
              <ol className="space-y-5">
                {[
                  {
                    num: 6,
                    title: 'Coaching Institute Faculty',
                    desc: 'Private coaching centers for competitive exams (NEET, JEE, UPSC, TNPSC) and school tuitions actively recruit B.Ed graduates. Subject experts with strong communication skills can earn ₹30,000–₹70,000 per month in established institutes.',
                  },
                  {
                    num: 7,
                    title: 'Curriculum Developer',
                    desc: 'Publishing houses, school chains, and Ed-Tech companies hire curriculum developers to design textbooks, lesson plans, and digital learning content. A B.Ed background combined with subject expertise makes graduates well-suited for this role.',
                  },
                  {
                    num: 8,
                    title: 'Education NGO & Social Sector',
                    desc: 'Organizations like Teach For India, Pratham, and Akshara Foundation hire trained teachers to work in underserved communities. These roles offer mission-driven work, often with competitive salaries and international exposure.',
                  },
                  {
                    num: 9,
                    title: 'Special Education Teacher',
                    desc: 'With additional certification in Special Education (B.Ed Special Education or RCI-recognized courses), graduates can work with students with learning disabilities, autism spectrum disorders, and other special needs — a growing and underserved field.',
                  },
                  {
                    num: 10,
                    title: 'Education Entrepreneur',
                    desc: 'Many B.Ed graduates launch their own coaching centers, home tuition networks, or private schools. With the right infrastructure and reputation, education entrepreneurship can generate incomes far above salaried positions, along with the satisfaction of building an institution.',
                  },
                ].map(({ num, title, desc }) => (
                  <li key={num} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#006837] text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      {num}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Mid-content CTA */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#6ba872] to-[#002309] p-8 text-center overflow-hidden mt-10">
                <div className="absolute top-3 right-6 w-20 h-20 rounded-full bg-white/10 pointer-events-none" />
                <div className="absolute bottom-3 left-4 w-12 h-12 rounded-full bg-white/10 pointer-events-none" />
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                  Ready to Build Your Teaching Career?
                </h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  Start with a B.Ed from JKKN College of Education — NCTE approved, TNTEU
                  affiliated, with integrated TNTET coaching and 98% placement rate.
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

            {/* ── Section 8: Salary Comparison ── */}
            <section id="salary-comparison" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Salary Comparison for B.Ed Graduates in 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Salaries after B.Ed vary significantly by sector, location, experience, and
                institution type. Here is a realistic salary overview for key career paths in 2026:
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Career Path
                      </th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Starting Salary
                      </th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">
                        Experienced (5–10 yrs)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Government School Teacher (TN)', '₹35,900 + allowances', '₹55,000 – ₹75,000'],
                      ['Private CBSE School Teacher', '₹15,000 – ₹25,000', '₹35,000 – ₹60,000'],
                      ['International School Teacher', '₹30,000 – ₹50,000', '₹60,000 – ₹1,00,000'],
                      ['Ed-Tech Educator / Content Dev', '₹20,000 – ₹35,000', '₹45,000 – ₹80,000'],
                      ['College Lecturer (M.Ed + NET)', '₹57,700 (UGC pay scale)', '₹80,000 – ₹1,20,000'],
                      ['School Principal', '₹50,000 – ₹70,000', '₹80,000 – ₹1,50,000'],
                    ].map(([career, starting, experienced], i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{career}</td>
                        <td className="px-4 py-3 text-gray-600">{starting}</td>
                        <td className="px-4 py-3 text-gray-600">{experienced}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-amber-700">Note:</strong> Salary figures are indicative
                  and vary by institution, location, and individual performance. Government school
                  salaries are based on the 7th Pay Commission scales applicable in Tamil Nadu.
                </p>
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
                {['Teaching Careers', 'B.Ed', 'TNTET', 'Government Teacher', 'Ed-Tech'].map((tag) => (
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
