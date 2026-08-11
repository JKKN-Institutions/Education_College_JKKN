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

export const metadata = seoMetadata(
  'B.Ed Admission 2026-27',
  'Apply for B.Ed admission at JKKN College of Education, Namakkal. 14 specializations, NCTE approved, TNTEU affiliated. 98% placement rate. Check eligibility, fee structure, and admission process.',
  '/admissions',
  {
    keywords: [
      'B.Ed admission 2026',
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

      <Footer />
    </>
  )
}
