'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { ScrollToTop } from '@/components/ScrollToTop';
import {
  Clock,
  BookOpen,
  ChevronUp,
  Mail,
  TrendingUp,
  AlignLeft,
  GraduationCap,
} from 'lucide-react';
import type { CourseBlogData } from '@/app/blog/_data/course-blog-types';

const FIXED_TOP = 104;

const tocItems = [
  { id: 'what-is', label: 'What is the Course?' },
  { id: 'why-choose', label: 'Why Choose This Specialization' },
  { id: 'eligibility', label: 'Eligibility Criteria' },
  { id: 'curriculum', label: 'Curriculum & Syllabus' },
  { id: 'career-scope', label: 'Career Scope' },
  { id: 'recruiters', label: 'Top Recruiters' },
  { id: 'salary', label: 'Salary Expectations' },
  { id: 'why-jkkn', label: 'Why JKKN College of Education' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const popularPosts = [
  {
    category: 'B.Ed Admissions',
    title: 'B.Ed Admission 2026 in Tamil Nadu: Eligibility, Process & Key Dates',
    date: 'Feb 20, 2026',
    href: '/blog/career-prospects-after-bed',
  },
  {
    category: 'Teaching Careers',
    title: 'Top 10 Career Options After B.Ed in India [2026 Updated]',
    date: 'Feb 18, 2026',
    href: '/blog/top-10-career-options-after-bed-2026',
  },
  {
    category: 'B.Ed Admissions',
    title: 'B.Ed vs D.El.Ed: Which Teacher Training Course is Right for You?',
    date: 'Feb 5, 2026',
    href: '/blog',
  },
];

export default function CourseBlogTemplate({ data }: { data: CourseBlogData }) {
  const [activeSection, setActiveSection] = useState('what-is');
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
        sidebarAbsTop = sidebarRef.current.getBoundingClientRect().top + window.scrollY;
        setFixedLeft(sidebarRef.current.getBoundingClientRect().left);
        setFixedWidth(sidebarRef.current.offsetWidth);
      }
      if (gridRef.current) {
        gridAbsBottom = gridRef.current.getBoundingClientRect().bottom + window.scrollY;
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

  const pageUrl = `https://edu.jkkn.ac.in/blog/${data.slug}`;

  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.h1,
          description: data.metaDescription,
          image: 'https://edu.jkkn.ac.in/images/og-default.png',
          datePublished: data.publishedDateIso,
          dateModified: new Date().toISOString(),
          author: {
            '@type': 'Organization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          publisher: {
            '@type': 'Organization',
            name: 'JKKN College of Education',
            '@id': 'https://edu.jkkn.ac.in/#organization',
            logo: {
              '@type': 'ImageObject',
              url: 'https://edu.jkkn.ac.in/images/logo.png',
            },
          },
          mainEntityOfPage: pageUrl,
          keywords: data.keywords.join(', '),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://edu.jkkn.ac.in' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://edu.jkkn.ac.in/blog' },
            { '@type': 'ListItem', position: 3, name: data.h1, item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: data.courseFullName,
          description: data.metaDescription,
          provider: {
            '@type': 'CollegeOrUniversity',
            name: 'JKKN College of Education',
            sameAs: 'https://edu.jkkn.ac.in',
          },
          educationalCredentialAwarded: 'Bachelor of Education (B.Ed)',
          timeRequired: 'P2Y',
          occupationalCategory: 'School Teacher',
        }}
      />

      <Header />

      {/* ── Article Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="bg-[#FBFBEE] text-[#006837] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            {data.category}
          </span>
          <div className="flex items-center gap-1.5 text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            <span>{data.readTime}</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400 text-sm">{data.wordCount}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          {data.h1}
        </h1>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
            <span className="text-[#006837] font-bold text-sm">JE</span>
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm">By JKKN Education Team</p>
            <p className="text-gray-400 text-xs">
              Published {data.publishedDate} &bull; Updated {data.publishedDate}
            </p>
          </div>
        </div>
      </div>

      {/* ── Featured Image ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="w-full rounded-2xl bg-gradient-to-br from-[#7cb983] via-[#6ba872] to-[#006837] flex flex-col items-center justify-center py-16 sm:py-20 gap-3">
          <GraduationCap className="w-12 h-12 text-white" strokeWidth={1.5} />
          <p className="text-white font-semibold text-lg text-center px-4">
            B.Ed {data.subject} — Complete Course Guide 2026
          </p>
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
                <span className="text-[#006837] font-bold text-xs uppercase tracking-wider">Quick Answer</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: data.quickAnswer }} />
            </div>

            {/* Section 1: What is */}
            <section id="what-is" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                What is B.Ed {data.subject}?
              </h2>
              {data.whatIs.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: p }} />
              ))}
              <p className="text-gray-600 leading-relaxed mb-5">Key highlights of the program:</p>
              <ul className="space-y-2.5 mb-4">
                {data.whatIs.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                    <span><strong>{h.label}</strong> {h.value}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 2: Why Choose */}
            <section id="why-choose" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why Choose B.Ed {data.subject}?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: data.whyChoose.intro }} />
              <div className="space-y-5">
                {data.whyChoose.reasons.map((r, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#006837] text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{r.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: r.desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Eligibility */}
            <section id="eligibility" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Eligibility Criteria for B.Ed {data.subject}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: data.eligibility.intro }} />
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200 w-44">Criteria</th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.eligibility.criteria.map((c, i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{c.criteria}</td>
                        <td className="px-4 py-3 text-gray-600">{c.requirement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-amber-700">Important:</strong> {data.eligibility.note}
                </p>
              </div>
            </section>

            {/* Section 4: Curriculum */}
            <section id="curriculum" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                B.Ed {data.subject} — Curriculum &amp; Syllabus
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: data.curriculum.intro }} />
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200 w-24">Year</th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200 w-28">Semester</th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Key Subjects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.curriculum.rows.map((r, i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{r.year}</td>
                        <td className="px-4 py-3 text-gray-600">{r.semester}</td>
                        <td className="px-4 py-3 text-gray-600">{r.subjects}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-[#FBFBEE] border-l-4 border-[#006837] rounded-r-xl p-4">
                <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: data.curriculum.practicalNote }} />
              </div>
            </section>

            {/* Section 5: Career Scope */}
            <section id="career-scope" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Career Scope After B.Ed {data.subject}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: data.careerScope.intro }} />
              {data.careerScope.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: p }} />
              ))}
              <p className="text-gray-600 mb-4 mt-2">Top career paths:</p>
              <ol className="space-y-3 mb-8">
                {data.careerScope.careerPaths.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#006837] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-600 text-sm leading-relaxed">
                      <strong className="text-gray-800">{c.title}</strong> — {c.desc}
                    </span>
                  </li>
                ))}
              </ol>

              {/* Mid-content CTA */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#7cb983] via-[#6ba872] to-[#006837] p-8 text-center overflow-hidden">
                <div className="absolute top-3 right-6 w-20 h-20 rounded-full bg-white/10 pointer-events-none" />
                <div className="absolute bottom-3 left-4 w-12 h-12 rounded-full bg-white/10 pointer-events-none" />
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                  Ready to Become a {data.subject} Teacher?
                </h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  Apply for B.Ed {data.subject} at JKKN College of Education — NCTE approved, TNTEU affiliated, with strong placement record.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                  <a href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="bg-white text-[#006837] font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                    Apply Now →
                  </a>
                  <a href="tel:+919345855001" className="border border-white/50 text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-white/10 transition-colors">
                    Call +91 9345855001
                  </a>
                </div>
              </div>
            </section>

            {/* Section 6: Top Recruiters */}
            <section id="recruiters" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Top Recruiters for B.Ed {data.subject} Graduates
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: data.recruiters.intro }} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.recruiters.list.map((r, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-[#006837]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">{r.name}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{r.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Salary */}
            <section id="salary" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Salary Expectations for B.Ed {data.subject} Graduates
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: data.salary.intro }} />
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Role</th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Experience</th>
                      <th className="px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide border-b border-gray-200">Monthly Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.salary.rows.map((r, i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-gray-700 font-medium">{r.role}</td>
                        <td className="px-4 py-3 text-gray-600">{r.experience}</td>
                        <td className="px-4 py-3 text-gray-600">{r.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-amber-700">Note:</strong> {data.salary.note}
                </p>
              </div>
            </section>

            {/* Section 8: Why JKKN */}
            <section id="why-jkkn" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why Choose JKKN College of Education for B.Ed {data.subject}?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: data.whyJkkn.intro }} />
              <div className="space-y-6">
                {data.whyJkkn.points.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#006837] text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: p.desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section id="faq" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {data.faqs.map((faq, i) => (
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
                          <span className="text-[#006837] text-base font-bold leading-none">&times;</span>
                        )}
                      </div>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 pt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100" dangerouslySetInnerHTML={{ __html: faq.a }} />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Author Box */}
            <div className="border border-gray-200 rounded-2xl p-6 mb-8">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Written By</p>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#FBFBEE] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#006837] font-bold text-lg">JE</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">JKKN Education Team</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-2">
                    The content team at JKKN College of Education creates evidence-based educational content about teacher education, B.Ed specializations, career guidance, and academic pathways. Our faculty includes experienced teacher-educators affiliated to Tamil Nadu Teachers Education University (TNTEU).
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-10 border-b border-gray-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-500 text-sm font-medium">Tags:</span>
                {data.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
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
                  ? { position: 'fixed', top: FIXED_TOP, left: fixedLeft, width: fixedWidth, zIndex: 10 }
                  : sidebarState === 'bottom'
                  ? { position: 'absolute', bottom: 0, right: 0, width: fixedWidth }
                  : {}
              }
            >
              {/* TOC */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <AlignLeft className="w-4 h-4 text-[#006837]" />
                  <span className="font-bold text-gray-800 text-xs uppercase tracking-wider">Table of Contents</span>
                </div>
                <nav className="space-y-0.5">
                  {tocItems.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-2 py-1.5 rounded text-sm transition-colors ${
                        activeSection === item.id ? 'text-[#006837] font-semibold' : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      {i + 1}. {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* CTA */}
              <div className="bg-[#FBFBEE] border border-[#7cb983]/40 rounded-xl p-5">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-green-600 text-xs font-bold uppercase tracking-wide">Open</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">B.Ed {data.subject} Admission 2026</h4>
                <p className="text-gray-500 text-xs mb-4">Limited seats at JKKN College of Education, Komarapalayam</p>
                <a href="https://www.jkkn.ai/apply/jkkn-admission-2026" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#006837] text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-[#004d28] transition-colors text-center">
                  Apply Now →
                </a>
                <a href="tel:+919345855001" className="block text-center text-[#006837] text-xs font-medium mt-3">+91 9345855001</a>
              </div>

              {/* Email Subscribe */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="w-4 h-4 text-[#006837]" />
                  <span className="font-bold text-gray-800 text-sm">Teacher Education Updates</span>
                </div>
                <p className="text-gray-400 text-xs mb-4">Get admission alerts, exam tips & career guides.</p>
                <input type="email" placeholder="Enter your email" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2 focus:outline-none focus:border-[#006837] transition-colors" />
                <button className="w-full bg-gray-900 text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-gray-700 transition-colors">Subscribe</button>
              </div>

              {/* Related Courses */}
              {data.relatedCourses.length > 0 && (
                <div className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-4 h-4 text-[#006837]" />
                    <span className="font-bold text-gray-800 text-xs uppercase tracking-wider">Other B.Ed Specializations</span>
                  </div>
                  <div className="space-y-2">
                    {data.relatedCourses.map((c) => (
                      <a key={c.slug} href={`/blog/${c.slug}`} className="block text-sm text-gray-600 hover:text-[#006837] transition-colors py-1">
                        → B.Ed {c.subject}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Posts */}
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-[#006837]" />
                  <span className="font-bold text-gray-800 text-xs uppercase tracking-wider">Popular Posts</span>
                </div>
                <div className="space-y-4">
                  {popularPosts.map((post, i) => (
                    <a key={i} href={post.href} className="group block cursor-pointer">
                      <span className="bg-[#FBFBEE] text-[#006837] text-xs font-bold px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <p className="text-sm font-semibold text-gray-800 mt-1.5 mb-0.5 group-hover:text-[#006837] transition-colors leading-snug">
                        {post.title}
                      </p>
                      <p className="text-xs text-gray-400">{post.date}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
