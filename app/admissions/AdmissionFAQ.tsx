'use client'

import { useState } from 'react'

export default function AdmissionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is the eligibility criteria for B.Ed admission at JKKN?',
      answer: 'Candidates must hold a Bachelor\'s degree (BA/B.Sc/B.Com/BCA/BBA or equivalent) from a recognized university with a minimum of 50% aggregate marks for General Category and 45% for Reserved Categories (SC/ST/OBC/PWD). Candidates appearing for final year exams may also apply provisionally.'
    },
    {
      question: 'What is the duration of the B.Ed program?',
      answer: 'The B.Ed program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE norms. The program includes theoretical coursework, practical training, micro-teaching sessions, and a comprehensive 16-week school internship.'
    },
    {
      question: 'What is the fee structure for B.Ed at JKKN College of Education?',
      answer: 'The B.Ed tuition fee at JKKN College of Education is ₹35,000 per year under the Management Quota. Various scholarships are available for BC/MBC/SC/ST candidates. Contact the admission office at +91 9345855001 for detailed fee information.'
    },
    {
      question: 'Is there an entrance exam for B.Ed admission?',
      answer: 'Admission is based on merit and counselling conducted by the Tamil Nadu Teachers Education University (TNTEU). Some seats may require qualifying in the state-level entrance examination. Contact our admission office for the latest admission process details for the 2026-27 session.'
    },
    {
      question: 'What is the counselling process for B.Ed admission?',
      answer: 'After applying, eligible candidates are called for counselling based on their academic merit. During counselling, candidates choose their preferred B.Ed specialization from 14 available subjects. Seat allotment is based on rank, category, and availability. Both management and government quota seats are available.'
    },
    {
      question: 'Is hostel facility available for B.Ed students?',
      answer: 'Yes, separate hostel facilities are available for both male and female students within the JKKN campus. The hostels provide comfortable accommodation, nutritious food, Wi-Fi connectivity, 24/7 security, laundry service, and a conducive environment for academic pursuits.'
    },
    {
      question: 'What documents are required for B.Ed admission?',
      answer: 'Required documents include: 10th & 12th mark sheets and certificates, graduation degree certificate and all semester mark sheets, transfer certificate (TC), migration certificate (if applicable), community certificate (for reserved categories), income certificate, Aadhaar card, and 4 passport-size photographs.'
    },
    {
      question: 'What career opportunities are available after B.Ed?',
      answer: 'B.Ed graduates can become teachers in government and private schools (CBSE/ICSE/State Board), pursue higher education (M.Ed, Ph.D), work as curriculum developers, education consultants, content writers, or join educational administration. Our 98% placement rate ensures strong career support.'
    },
    {
      question: 'Can I pursue M.Ed after completing B.Ed?',
      answer: 'Yes, after completing B.Ed, you can pursue M.Ed (Master of Education) to become a teacher educator, pursue Ph.D in Education for research careers, or specialize further with MA in your subject area. JKKN provides guidance for higher education pathways.'
    },
    {
      question: 'Are scholarships available for B.Ed students?',
      answer: 'Yes, various scholarships are available including Tamil Nadu government scholarships for BC/MBC/SC/ST students, merit-based scholarships, economically weaker section (EWS) concessions, and special scholarships for differently-abled candidates. Our admission office assists students in applying for all eligible scholarships.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#006837' }}>
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 mx-auto mb-4 sm:mb-8" style={{ backgroundColor: '#7cb983' }}></div>
          <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
            Find answers to common queries about B.Ed admission at JKKN College of Education
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-base sm:text-lg font-semibold pr-8" style={{ color: '#006837' }}>
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  style={{ color: '#006837' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#002309' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
