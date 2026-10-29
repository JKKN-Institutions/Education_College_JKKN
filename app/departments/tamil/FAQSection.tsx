'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is the eligibility for B.Ed Tamil admission?',
      answer: "Candidates must hold a U.G. degree with Tamil as the Part-III major subject from a recognized university, with at least 50% (OC), 45% (BC/BC(M)), 43% (MBC/DNC) or 40% (SC/SC(A)/ST) marks; a pass is enough for differently abled candidates. A P.G. degree in Tamil with at least 50% marks also qualifies. Tamil studied only as a Part-I language or up to Class 12 does not qualify (Government of Tamil Nadu, G.O.(D) No.144, 2026-27). Final year degree students may also apply."
    },
    {
      question: 'What is the duration of the B.Ed Tamil program?',
      answer: 'The B.Ed Tamil program is a 2-year (4 semesters) full-time professional degree course as per NCTE norms. Each academic year consists of two semesters with comprehensive theoretical and practical components.'
    },
    {
      question: 'Is JKKN College of Education NCTE approved?',
      answer: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. Our programs meet all regulatory standards and are recognized across India.'
    },
    {
      question: 'What are the career opportunities after B.Ed Tamil?',
      answer: 'Graduates can become Tamil teachers in government and private schools (Classes 6-12), pursue higher education (M.Ed, Ph.D in Education), work as curriculum developers or educational content writers, join coaching institutes, or take up administrative roles in educational institutions.'
    },
    {
      question: 'Are scholarships available for B.Ed Tamil students?',
      answer: 'Yes, eligible candidates can avail various government scholarships including BC/MBC/SC/ST scholarships, minority scholarships, and other state and central government schemes. Our scholarship cell assists Learners in identifying and applying for appropriate financial aid.'
    },
    {
      question: 'Is hostel accommodation available?',
      answer: 'Yes, separate hostel facilities are available for both male and female Learners within the campus. The hostels offer comfortable accommodation, nutritious food, 24/7 security, Wi-Fi connectivity, and all necessary amenities at reasonable rates.'
    },
    {
      question: 'How is the school internship program structured?',
      answer: 'The school internship is spread across three phases during the program. Learners undergo teaching practice at partner schools, starting with observation and assisted teaching, progressing to independent lesson delivery, and culminating in full classroom responsibility with continuous mentoring and assessment.'
    },
    {
      question: 'Can I pursue B.Ed Tamil after completing BCom or BSc?',
      answer: "Not on the basis of Tamil studied as a Part-I language or up to Class 12. The 2026-27 Tamil Nadu guidelines require a U.G. degree with Tamil as the Part-III major subject, or a P.G. degree in Tamil with at least 50% marks. BCom and BSc graduates should check the B.Ed subject that matches their own major with the admission office."
    }
  ]

  return (
    <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#006837' }}>
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-16 sm:w-20 mx-auto mb-4 sm:mb-6 lg:mb-8" style={{ backgroundColor: '#7cb983' }}></div>
          <p className="text-sm sm:text-base lg:text-lg px-2" style={{ color: '#006837' }}>
            Get answers to common queries about B.Ed Tamil program
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg sm:rounded-xl overflow-hidden transition-shadow"
              style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left transition-colors hover:bg-gray-50 min-h-[56px]"
              >
                <span className="text-sm sm:text-base lg:text-lg font-semibold pr-4 sm:pr-8" style={{ color: '#006837' }}>
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  style={{ color: '#006837' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <p className="leading-relaxed text-sm sm:text-base" style={{ color: '#002309' }}>
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
