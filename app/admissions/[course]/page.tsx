import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { JsonLd } from '@/components/JsonLd';
import { seoMetadata } from '@/lib/seo-metadata';
import { siteConfig } from '@/lib/site-config';
import {
  ADMISSIONS_DATA,
  COURSE_SLUGS,
  FEE_STRUCTURE,
  ADMISSION_TIMELINE,
  DOCUMENTS_REQUIRED,
  APPLICATION_STEPS,
  SCHOLARSHIPS,
  SELECTION_CRITERIA,
  TRUST_SIGNALS,
  getCourseAdmission,
} from '@/lib/admissions-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return COURSE_SLUGS.map((course) => ({ course }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string }>;
}): Promise<Metadata> {
  const { course } = await params;
  const data = getCourseAdmission(course);

  if (!data) {
    return {
      title: 'Course Not Found',
      description: 'The requested B.Ed course admission page could not be found.',
    };
  }

  return seoMetadata(
    `${data.fullName} Admission 2026-27`,
    `Apply for ${data.fullName} admission at JKKN College of Education, Namakkal. ${data.totalSeats} seats, ${data.placementRate} placement, NCTE approved. Check eligibility, fees, application process.`,
    `/admissions/${data.slug}`,
    {
      keywords: [
        `${data.fullName} admission`,
        `${data.fullName} 2026`,
        `${data.fullName} JKKN`,
        `${data.fullName} Namakkal`,
        `B.Ed ${data.name} admission`,
        `${data.fullName} eligibility`,
        `${data.fullName} fees`,
        `${data.fullName} placement`,
        `${data.fullName} Tamil Nadu`,
        `B.Ed ${data.name} colleges`,
        `${data.longName}`,
        'NCTE approved B.Ed',
        'TNTEU affiliated',
      ],
    },
  );
}

export default async function CourseAdmissionPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const data = getCourseAdmission(course);

  if (!data) notFound();

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: data.fullName,
    description: data.heroDescription,
    provider: {
      '@type': 'CollegeOrUniversity',
      name: 'JKKN College of Education',
      sameAs: 'https://edu.jkkn.ac.in',
    },
    educationalCredentialAwarded: data.longName,
    timeRequired: 'P2Y',
    courseMode: 'full-time',
    inLanguage: data.medium,
    offers: {
      '@type': 'Offer',
      category: 'Admission',
      url: `https://edu.jkkn.ac.in/admissions/${data.slug}`,
      availability: 'https://schema.org/InStock',
      validFrom: '2026-03-01',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <Header />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Admissions', href: '/admissions' },
          { name: data.fullName, href: `/admissions/${data.slug}` },
        ]}
      />
      <JsonLd data={courseSchema} />
      <JsonLd data={faqSchema} />

      <main className="min-h-screen bg-[#FBFBEE]">
        {/* ── Hero ── */}
        <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#002309] via-[#004d28] to-[#006837]">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs sm:text-sm text-white/70">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/admissions" className="hover:text-white">Admissions</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{data.fullName}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#7cb983] mb-6">
                  <svg className="w-4 h-4 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold text-[#7cb983]">
                    Admission Open 2026-27 | NCTE Approved
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white">
                  {data.fullName} <span className="text-[#7cb983]">Admission</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-[#7cb983] font-semibold mb-4">
                  {data.tagline}
                </p>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-8 max-w-2xl">
                  {data.heroDescription}
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                  <div className="p-3 sm:p-4 rounded-lg bg-black/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#7cb983]">2</div>
                    <div className="text-xs font-semibold text-white">YEARS</div>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg bg-black/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#7cb983]">{data.totalSeats}</div>
                    <div className="text-xs font-semibold text-white">SEATS</div>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg bg-black/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#7cb983]">{data.placementRate}</div>
                    <div className="text-xs font-semibold text-white">PLACEMENT</div>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg bg-black/30 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#7cb983]">{data.semesters}</div>
                    <div className="text-xs font-semibold text-white">SEMESTERS</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link
                    href={siteConfig.admissionFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white bg-[#7cb983] hover:bg-[#6ba872] transition-transform hover:scale-105 text-sm sm:text-base shadow-lg"
                  >
                    Apply Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-[#006837] transition-all text-sm sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Counsellor
                  </Link>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-[#7cb983] to-[#006837] flex items-center justify-center shadow-2xl">
                  <span className="text-7xl sm:text-8xl lg:text-9xl text-white font-bold">
                    {data.iconLetter}
                  </span>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-[#006837] px-4 py-2 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                    NCTE • TNTEU
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quick Course Snapshot ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Course Snapshot
              </h2>
              <div className="h-1 w-20 bg-[#7cb983] mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {[
                { label: 'Duration', value: data.duration, detail: data.durationDetail },
                { label: 'Mode', value: data.mode.split(',')[0], detail: data.mode },
                { label: 'Medium', value: data.medium, detail: 'Bilingual instruction' },
                { label: 'Affiliation', value: 'TNTEU', detail: data.affiliation },
                { label: 'Approval', value: 'NCTE', detail: data.approval },
                { label: 'Intake', value: `${data.totalSeats}`, detail: 'Seats per year' },
              ].map((item) => (
                <div key={item.label} className="p-4 sm:p-5 rounded-xl border-l-4 border-[#7cb983] bg-[#FBFBEE]">
                  <div className="text-xs font-semibold text-[#006837] mb-1">{item.label.toUpperCase()}</div>
                  <div className="text-lg sm:text-xl font-bold text-[#002309] mb-1">{item.value}</div>
                  <div className="text-xs text-gray-600">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Eligibility ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FBFBEE]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-[#7cb983] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                ELIGIBILITY CRITERIA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Who Can Apply for {data.fullName}?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                {data.eligibilityHeadline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {data.eligibilityCriteria.map((criterion) => (
                <div key={criterion.title} className="p-5 sm:p-6 rounded-xl bg-white shadow-md border-t-4 border-[#7cb983]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7cb983]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#006837]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#002309] mb-2">{criterion.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{criterion.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-[#006837]/10 to-[#7cb983]/10 border-l-4 border-[#006837]">
              <p className="text-sm sm:text-base text-[#002309]">
                <span className="font-bold">Subject Requirement: </span>
                {data.subjectRequirement}
              </p>
            </div>
          </div>
        </section>

        {/* ── Fee Structure ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-[#7cb983] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                TRANSPARENT FEE STRUCTURE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                {data.fullName} Fees 2026-27
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                As per Tamil Nadu Government norms — Scholarships available for eligible candidates
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl shadow-md">
              <table className="w-full bg-white">
                <thead className="bg-[#006837] text-white">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left text-sm font-bold">Fee Component</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-sm font-bold">Amount</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-sm font-bold hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {FEE_STRUCTURE.map((fee) => (
                    <tr key={fee.label} className="hover:bg-[#FBFBEE]">
                      <td className="px-4 sm:px-6 py-3 text-sm font-medium text-[#002309]">{fee.label}</td>
                      <td className="px-4 sm:px-6 py-3 text-sm font-bold text-[#006837]">{fee.amount}</td>
                      <td className="px-4 sm:px-6 py-3 text-xs text-gray-600 hidden sm:table-cell">{fee.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-gray-500 text-center italic">
              * Fees indicative; final amount confirmed during counselling. Tamil Nadu Govt. scholarships waive tuition fee for eligible SC/ST/MBC/BC candidates.
            </p>
          </div>
        </section>

        {/* ── Admission Timeline ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FBFBEE]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-[#7cb983] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                ADMISSION TIMELINE 2026-27
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Important Dates for {data.fullName}
              </h2>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#7cb983]/30 -translate-x-1/2"></div>
              <div className="space-y-6 sm:space-y-8">
                {ADMISSION_TIMELINE.map((event, idx) => (
                  <div key={event.phase} className={`flex flex-col md:flex-row gap-4 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 md:px-6">
                      <div className={`p-5 rounded-xl bg-white shadow-md border-l-4 ${event.status === 'active' ? 'border-[#006837]' : 'border-[#7cb983]'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-[#002309]">{event.phase}</h3>
                          {event.status === 'active' && (
                            <span className="text-xs font-bold text-white bg-[#006837] px-2 py-0.5 rounded-full">LIVE</span>
                          )}
                        </div>
                        <div className="text-sm font-semibold text-[#006837] mb-2">{event.date}</div>
                        <p className="text-sm text-gray-700">{event.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex md:w-12 items-center justify-center">
                      <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${event.status === 'active' ? 'bg-[#006837]' : 'bg-[#7cb983]'}`}></div>
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Application Process ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-[#7cb983] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                6 SIMPLE STEPS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                How to Apply for {data.fullName}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {APPLICATION_STEPS.map((step) => (
                <div key={step.step} className="relative p-6 rounded-xl bg-[#FBFBEE] border-2 border-[#7cb983]/30 hover:border-[#7cb983] transition-colors">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#006837] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-[#002309] mb-2 mt-2">{step.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href={siteConfig.admissionFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white bg-[#006837] hover:bg-[#005a2e] transition-transform hover:scale-105 shadow-lg"
              >
                Start Your Application for {data.fullName}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Documents Required ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FBFBEE]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-[#7cb983] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                DOCUMENT CHECKLIST
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Documents Required for Admission
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Keep these documents ready (originals + 2 sets of self-attested photocopies)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {DOCUMENTS_REQUIRED.map((doc) => (
                <div key={doc} className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-sm">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-[#002309]">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Selection Criteria ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <span className="inline-block bg-[#7cb983] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                  SELECTION PROCESS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-4">
                  How Are Candidates Selected?
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  Admission to {data.fullName} is merit-based, with counselling conducted by Tamil Nadu Teachers Education University (TNTEU). Final selection considers academic performance, subject aptitude, and reservation policy.
                </p>
                <ul className="space-y-3">
                  {SELECTION_CRITERIA.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#7cb983] flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        ✓
                      </div>
                      <span className="text-sm text-[#002309]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#002309] to-[#006837] text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Scholarships Available</h3>
                <p className="text-sm text-white/90 mb-6">Multiple financial assistance options for eligible candidates:</p>
                <div className="space-y-4">
                  {SCHOLARSHIPS.map((s) => (
                    <div key={s.name} className="p-4 rounded-lg bg-white/10 border border-white/20">
                      <div className="font-bold text-[#7cb983] text-sm mb-1">{s.name}</div>
                      <div className="text-xs text-white/80 mb-1">{s.eligibility}</div>
                      <div className="text-xs font-semibold text-white">{s.benefit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose This Course ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FBFBEE]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-[#7cb983] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                WHY CHOOSE JKKN
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Why {data.fullName} at JKKN College of Education?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Unique advantages that make this course a standout choice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {data.whyChooseThis.map((reason, idx) => (
                <div key={reason.title} className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow group">
                  <div className="w-12 h-12 rounded-lg bg-[#7cb983]/20 flex items-center justify-center mb-4 group-hover:bg-[#7cb983] transition-colors">
                    <span className="text-xl font-bold text-[#006837] group-hover:text-white transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#002309] mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Career Outcomes ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-[#7cb983] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                CAREER OUTCOMES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Career Opportunities After {data.fullName}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Diverse career paths with strong placement support
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              <div className="lg:col-span-2 p-6 rounded-xl bg-[#FBFBEE]">
                <h3 className="font-bold text-[#002309] mb-4 text-lg">Top Career Roles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.careerRoles.map((role) => (
                    <div key={role} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                      <span className="text-sm text-[#002309]">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-gradient-to-br from-[#7cb983] to-[#006837] text-white text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-1">{data.averageSalary}</div>
                  <div className="text-xs font-semibold uppercase tracking-wide">Average Salary Range</div>
                </div>
                <div className="p-6 rounded-xl bg-[#002309] text-white text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#7cb983] mb-1">{data.placementRate}</div>
                  <div className="text-xs font-semibold uppercase tracking-wide">Placement Rate</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#FBFBEE]">
              <h3 className="font-bold text-[#002309] mb-4 text-lg">Top Recruiters</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {data.topRecruiters.map((r) => (
                  <span key={r} className="px-3 sm:px-4 py-2 bg-white border border-[#7cb983]/40 rounded-full text-xs sm:text-sm font-medium text-[#006837]">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Signals ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#002309] to-[#006837]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Why JKKN is the Right Choice
              </h2>
              <div className="h-1 w-20 bg-[#7cb983] mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {TRUST_SIGNALS.map((t) => (
                <div key={t.label} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7cb983] mb-1">{t.metric}</div>
                  <div className="text-xs text-white/80">{t.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-[#7cb983] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                {data.fullName} Admission FAQs
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Common questions about admission, eligibility, and career prospects
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {data.faqs.map((faq, idx) => (
                <details key={faq.question} className="group p-5 rounded-xl bg-[#FBFBEE] border border-[#7cb983]/30 hover:border-[#7cb983] transition-colors" open={idx === 0}>
                  <summary className="flex items-center justify-between cursor-pointer font-semibold text-[#002309] text-sm sm:text-base">
                    <span className="pr-4">{faq.question}</span>
                    <svg className="w-5 h-5 text-[#006837] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FBFBEE]">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl bg-gradient-to-r from-[#002309] to-[#006837] p-6 sm:p-10 lg:p-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                <div className="text-white text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                    Ready to join {data.fullName}?
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base max-w-xl">
                    {data.totalSeats} seats available. {data.placementRate} placement rate. Limited intake — apply early to secure your seat for the 2026-27 academic year.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <Link
                    href={siteConfig.admissionFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 text-[#006837] font-bold px-8 py-4 rounded-lg transition-colors text-sm sm:text-base text-center"
                  >
                    Apply Now
                  </Link>
                  <Link
                    href={`tel:${siteConfig.phone}`}
                    className="border-2 border-white text-white hover:bg-white hover:text-[#006837] font-semibold px-6 py-4 rounded-lg transition-colors text-sm sm:text-base text-center"
                  >
                    {siteConfig.phone.replace('+91', '+91 ')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Courses ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Explore Other B.Ed Specializations
              </h2>
              <div className="h-1 w-20 bg-[#7cb983] mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {COURSE_SLUGS.filter((s) => s !== data.slug).slice(0, 12).map((slug) => {
                const c = ADMISSIONS_DATA[slug];
                return (
                  <Link
                    key={slug}
                    href={`/admissions/${slug}`}
                    className="p-3 sm:p-4 rounded-lg bg-[#FBFBEE] border border-[#7cb983]/30 hover:border-[#7cb983] hover:bg-white transition-all text-center group"
                  >
                    <div className="text-2xl sm:text-3xl mb-1 text-[#006837] font-bold group-hover:scale-110 transition-transform">
                      {c.iconLetter}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#002309] group-hover:text-[#006837]">
                      {c.fullName}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
