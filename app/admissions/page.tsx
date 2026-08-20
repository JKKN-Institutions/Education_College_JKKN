import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'
import { JsonLd } from '@/components/JsonLd'
import { seoMetadata } from '@/lib/seo-metadata'

import AdmissionHero from './AdmissionHero'
import EligibilitySection from './EligibilitySection'
import AdmissionProcess from './AdmissionProcess'
import DocumentsRequired from './DocumentsRequired'
import FeeStructure from './FeeStructure'
import SpecializationGrid from './SpecializationGrid'
import AdmissionTimeline from './AdmissionTimeline'
import PlacementHighlights from './PlacementHighlights'
import CampusFacilities from './CampusFacilities'
import AdmissionFAQ from './AdmissionFAQ'
import AdmissionCTA from './AdmissionCTA'
import EducationEnquiryForm from "@/components/lead/EducationEnquiryForm";

// GL1-08. This page is the redirect target of
// cas.jkkn.ac.in/blog/bed-admission-2026-tamil-nadu, which 308s here - so this title is what
// searchers see for that result. Measured GSC 2026-07-21..08-17, that URL alone carried 8,886
// impressions and 438 clicks, which is 69% of the ENTIRE Arts & Science site's 632 clicks.
// The old title carried neither "Tamil Nadu" nor "counselling", the two tokens the traffic
// actually uses: b ed admission 2026 tamil nadu 519 impr, b.ed counselling 2026 tamilnadu 445,
// b ed admission 2026 last date in tamil nadu 310.
// `absolute: true` skips the root layout's " | JKKN College of Education" (28 chars); the old
// 22-char title rendered as 50 and the new one would otherwise render at 87.
// DELIBERATELY NOT PROMISED IN THE TITLE: a last date. Four of the seven queries ask WHEN, and
// the 2026 dates are still blank in Facts-Master (DEC-04). Ranking a page that cannot answer
// its own query buys a bounce, not an admission. Add the date block when the office confirms.
export const metadata = seoMetadata(
    'B.Ed Admission & Counselling 2026 Tamil Nadu - JKKN College',
    'B.Ed admission & counselling 2026-27 in Tamil Nadu at JKKN College of Education, Namakkal. Eligibility, fees, 14 specializations. NCTE approved, 98% placement.',
  '/admissions',
  {
    absolute: true,
    keywords: [
      'B.Ed admission 2026',
      'B.Ed counselling 2026 Tamil Nadu',
      'TN B.Ed counselling 2026',
      'JKKN College of Education admission',
      'B.Ed Namakkal',
      'B.Ed Tamil Nadu',
      'teacher training admission',
      'NCTE approved B.Ed college',
      'TNTEU affiliated college',
      'B.Ed fee structure',
      'B.Ed eligibility criteria',
      'B.Ed specializations',
      'teaching career',
      'B.Ed admission process',
    ],
  }
)

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the eligibility criteria for B.Ed admission at JKKN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Candidates must hold a Bachelor's degree (BA/B.Sc/B.Com/BCA/BBA or equivalent) from a recognized university with a minimum of 50% aggregate marks for General Category and 45% for Reserved Categories (SC/ST/OBC/PWD).",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the duration of the B.Ed program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The B.Ed program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE norms. The program includes theoretical coursework, practical training, micro-teaching sessions, and a comprehensive 16-week school internship.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the fee structure for B.Ed at JKKN College of Education?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The B.Ed tuition fee at JKKN College of Education is ₹35,000 per year under the Management Quota. Various scholarships are available for BC/MBC/SC/ST candidates. Contact the admission office to confirm the fee for the current academic year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there an entrance exam for B.Ed admission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Admission is based on merit and counselling conducted by the Tamil Nadu Teachers Education University (TNTEU). Some seats may require qualifying in the state-level entrance examination.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the counselling process for B.Ed admission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After applying, eligible candidates are called for counselling based on academic merit. During counselling, candidates choose their preferred B.Ed specialization from 14 available subjects. Seat allotment is based on rank, category, and availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is hostel facility available for B.Ed students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, separate hostel facilities are available for both male and female students within the JKKN campus with comfortable accommodation, nutritious food, Wi-Fi connectivity, and 24/7 security.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents are required for B.Ed admission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Required documents include 10th & 12th mark sheets and certificates, graduation degree certificate, all semester mark sheets, transfer certificate (TC), community certificate (for reserved categories), income certificate, Aadhaar card, and 4 passport-size photographs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What career opportunities are available after B.Ed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'B.Ed graduates can become teachers in government and private schools (CBSE/ICSE/State Board), pursue higher education (M.Ed, Ph.D), work as curriculum developers, education consultants, or join educational administration. JKKN has a 98% placement rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pursue M.Ed after completing B.Ed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, after completing B.Ed, you can pursue M.Ed (Master of Education), Ph.D in Education, or specialize further with MA in your subject area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are scholarships available for B.Ed students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, various scholarships are available including Tamil Nadu government scholarships for BC/MBC/SC/ST students, merit-based scholarships, EWS concessions, and special scholarships for differently-abled candidates.',
      },
    },
  ],
}

export default function AdmissionPage() {
  return (
    <>
      <Header />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Admission', href: '/admissions' },
        ]}
      />
      <JsonLd data={faqSchema} />

      <main className="min-h-screen bg-[#FBFBEE]">
        <AdmissionHero />
        <EligibilitySection />
        <AdmissionProcess />
        <DocumentsRequired />
        <FeeStructure />
        <SpecializationGrid />
        <AdmissionTimeline />
        <PlacementHighlights />
        <CampusFacilities />
        <AdmissionFAQ />
        <AdmissionCTA />
      </main>

      {/* DEP-34 - enquiry form. Posts to the CRM from the server; a browser cannot POST there */}
      {/* directly - the endpoint sends no Access-Control-Allow-Origin header. */}
      <section className="bg-gradient-to-br from-[#0b6d41] to-[#12a15f] py-16">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">Get a Call Back</h2>
              <p className="text-white/80 text-center text-sm mb-8">Leave your details and our admission team will contact you within 24 hours.</p>
              <EducationEnquiryForm sourcePage="admissions" />
          </div>
      </section>

      <Footer />
    </>
  )
}
