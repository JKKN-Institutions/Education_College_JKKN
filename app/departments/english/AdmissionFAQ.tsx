'use client'

import { useState } from 'react'

export default function AdmissionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is the eligibility for B.Ed English admission?',
      answer: 'Candidates must hold a U.G. degree with English as the Part-III major subject, with at least 50% (OC), 45% (BC/BC(M)), 43% (MBC/DNC) or 40% (SC/SC(A)/ST) marks; a pass is enough for differently abled candidates. A P.G. degree in English with at least 50% marks also qualifies. English studied only as a Part-II language or up to Class 12 does not qualify (Government of Tamil Nadu, G.O.(D) No.144, 2026-27). Candidates appearing for final year exams may also apply provisionally.'
    },
    {
      question: 'What is the duration of B.Ed English program?',
      answer: 'The B.Ed English program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE norms. The program includes theoretical coursework, practical training, and a 16-week school internship distributed across three phases.'
    },
    {
      question: 'What are the career opportunities after B.Ed English?',
      answer: 'Graduates can become English teachers in government and private schools (CBSE/ICSE/State Board), pursue higher education (M.Ed, Ph.D, MA English), work as curriculum developers, educational content writers, IELTS/TOEFL trainers, corporate trainers, or join educational administration.'
    },
    {
      question: 'Is JKKN College of Education NCTE approved?',
      answer: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. Our B.Ed degree is recognized nationwide and valid for teacher recruitment in all states.'
    },
    {
      question: 'What teaching methodologies are covered in B.Ed English?',
      answer: 'The program covers Communicative Language Teaching (CLT), Task-Based Language Teaching (TBLT), Content and Language Integrated Learning (CLIL), Grammar-Translation Method, Direct Method, technology-enhanced learning, and assessment strategies aligned with NEP 2020.'
    },
    {
      question: 'Does B.Ed English include practical training?',
      answer: 'Yes, the program includes extensive practical training through micro-teaching sessions, peer teaching, simulated teaching, demonstration lessons, and a comprehensive 16-week school internship program in partner institutions across three phases.'
    },
    {
      question: 'Can I teach in CBSE/ICSE schools after B.Ed English?',
      answer: 'Yes, B.Ed English graduates are eligible to teach in all types of schools including CBSE, ICSE, State Board, and International Baccalaureate (IB) schools at secondary (Classes 6-10) and higher secondary (Classes 11-12) levels across India and internationally.'
    },
    {
      question: 'What is the fee structure for B.Ed English?',
      answer: 'The fee structure is as per Tamil Nadu government norms and is affordable compared to private institutions. Various scholarships are available for BC/MBC/SC/ST candidates. Contact the admission office at +91 4288 262600 for detailed fee information and payment options.'
    },
    {
      question: 'Is hostel facility available for B.Ed Learners?',
      answer: 'Yes, separate hostel facilities are available for both male and female Learners within the campus. The hostels provide comfortable accommodation, nutritious food, Wi-Fi connectivity, 24/7 security, and a conducive environment for academic pursuits.'
    },
    {
      question: 'Can I pursue M.Ed after completing B.Ed English?',
      answer: 'Yes, after completing B.Ed English, you can pursue M.Ed (Master of Education) to become a teacher educator or pursue Ph.D in Education for research and academic careers. You can also pursue MA in English Literature or Applied Linguistics for specialization.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#006837' }}>
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
          <p className="text-lg" style={{ color: '#006837' }}>
            Find answers to common queries about B.Ed English program
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-lg font-semibold pr-8" style={{ color: '#006837' }}>
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  style={{ color: '#006837' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="leading-relaxed" style={{ color: '#002309' }}>
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
