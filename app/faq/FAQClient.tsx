'use client'

import { useState } from 'react'

const categories = [
  {
    label: 'All Topics',
    key: 'all',
  },
  {
    label: 'Admission & Eligibility',
    key: 'admission',
  },
  {
    label: 'Program & Accreditation',
    key: 'program',
  },
  {
    label: 'Fees & Scholarships',
    key: 'fees',
  },
  {
    label: 'Campus & Facilities',
    key: 'campus',
  },
  {
    label: 'Career & Higher Education',
    key: 'career',
  },
]

const allFaqs = [
  {
    category: 'admission',
    question: 'What is the eligibility criteria for B.Ed admission at JKKN?',
    answer: "Candidates must hold a Bachelor's degree (BA/B.Sc/B.Com/BCA/BBA or equivalent) from a recognized university with a minimum of 50% aggregate marks for General Category and 45% for Reserved Categories (SC/ST/OBC/PWD). Candidates appearing for final year exams may also apply provisionally.",
  },
  {
    category: 'admission',
    question: 'Is there an entrance exam for B.Ed admission?',
    answer: 'Admission is based on merit and counselling conducted by the Tamil Nadu Teachers Education University (TNTEU). Some seats may require qualifying in the state-level entrance examination. Contact our admission office for the latest admission process details for the 2026–27 session.',
  },
  {
    category: 'admission',
    question: 'What is the counselling process for B.Ed admission?',
    answer: 'After applying, eligible candidates are called for counselling based on their academic merit. During counselling, candidates choose their preferred B.Ed specialization from 14 available subjects. Seat allotment is based on rank, category, and availability. Both management and government quota seats are available.',
  },
  {
    category: 'admission',
    question: 'What documents are required for B.Ed admission?',
    answer: 'Required documents include: 10th & 12th mark sheets and certificates, graduation degree certificate and all semester mark sheets, transfer certificate (TC), migration certificate (if applicable), community certificate (for reserved categories), income certificate, Aadhaar card, and 4 passport-size photographs.',
  },
  {
    category: 'program',
    question: 'What is the duration of the B.Ed program?',
    answer: 'The B.Ed program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE norms. The program includes theoretical coursework, practical training, micro-teaching sessions, and a comprehensive 16-week school internship.',
  },
  {
    category: 'program',
    question: 'Is JKKN College of Education NCTE approved?',
    answer: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. Our B.Ed degree is recognized nationwide and valid for teacher recruitment in all states.',
  },
  {
    category: 'program',
    question: 'How is the school internship program structured?',
    answer: 'The school internship is spread across three phases during the program. Students undergo teaching practice at partner schools, starting with observation and assisted teaching, progressing to independent lesson delivery, and culminating in full classroom responsibility with continuous mentoring and assessment.',
  },
  {
    category: 'program',
    question: 'How many B.Ed specializations are offered?',
    answer: 'JKKN College of Education offers 14 B.Ed specializations: Tamil, English, Mathematics, Physics, Chemistry, Botany, Zoology, Microbiology, Commerce, Economics, History, Political Science, Social Science, and Computer Science.',
  },
  {
    category: 'fees',
    question: 'What is the fee structure for B.Ed at JKKN College of Education?',
    answer: 'The B.Ed tuition fee at JKKN College of Education is ₹35,000 per year under the Management Quota. Various scholarships are available for BC/MBC/SC/ST candidates. Contact the admission office at +91 93458 55001 for detailed fee information.',
  },
  {
    category: 'fees',
    question: 'Are scholarships available for B.Ed students?',
    answer: 'Yes, various scholarships are available including Tamil Nadu government scholarships for BC/MBC/SC/ST students, merit-based scholarships, economically weaker section (EWS) concessions, and special scholarships for differently-abled candidates. Our admission office assists students in applying for all eligible scholarships.',
  },
  {
    category: 'campus',
    question: 'Is hostel facility available for B.Ed students?',
    answer: 'Yes, separate hostel facilities are available for both male and female students within the JKKN campus. The hostels provide comfortable accommodation, nutritious food, Wi-Fi connectivity, 24/7 security, laundry service, and a conducive environment for academic pursuits.',
  },
  {
    category: 'campus',
    question: 'What other campus facilities are available?',
    answer: 'The campus offers a well-equipped library, computer lab, science labs, smart classrooms, auditorium, food court, medical/ambulance services, bank and post office facility, sports grounds, and a dedicated placement cell to support student life and career development.',
  },
  {
    category: 'career',
    question: 'What career opportunities are available after B.Ed?',
    answer: "B.Ed graduates can become teachers in government and private schools (CBSE/ICSE/State Board), pursue higher education (M.Ed, Ph.D), work as curriculum developers, education consultants, content writers, or join educational administration. JKKN's 98% placement rate ensures strong career support.",
  },
  {
    category: 'career',
    question: 'Can I pursue M.Ed after completing B.Ed?',
    answer: 'Yes, after completing B.Ed, you can pursue M.Ed (Master of Education) to become a teacher educator, pursue Ph.D in Education for research careers, or specialize further with MA in your subject area. JKKN provides guidance for higher education pathways.',
  },
  {
    category: 'career',
    question: 'Can B.Ed graduates teach in CBSE or ICSE schools?',
    answer: 'Yes, B.Ed graduates are eligible to teach in all types of schools including CBSE, ICSE, State Board, and International Baccalaureate (IB) schools at secondary (Classes 6–10) and higher secondary (Classes 11–12) levels across India.',
  },
]

export default function FAQClient({ phone, email }: { phone: string; email: string }) {
  const [activeTab, setActiveTab] = useState('all')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filtered = activeTab === 'all' ? allFaqs : allFaqs.filter((f) => f.category === activeTab)

  const handleTabChange = (key: string) => {
    setActiveTab(key)
    setOpenIndex(0)
  }

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <>
      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 py-4">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleTabChange(cat.key)}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors"
                style={
                  activeTab === cat.key
                    ? { backgroundColor: '#006837', color: '#ffffff', borderColor: '#006837' }
                    : { backgroundColor: '#ffffff', color: '#006837', borderColor: '#006837' }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {activeTab !== 'all' && (
            <h2 className="text-xl sm:text-2xl font-bold mb-8 pb-3 border-b-2" style={{ color: '#006837', borderColor: '#7cb983' }}>
              {categories.find((c) => c.key === activeTab)?.label}
            </h2>
          )}
          <div className="space-y-3 sm:space-y-4">
            {filtered.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-gray-50"
                >
                  <span className="text-sm sm:text-base font-semibold pr-8" style={{ color: '#006837' }}>
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                    style={{ color: '#006837' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
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

      {/* Contact CTA */}
      <section className="pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center rounded-2xl p-8 sm:p-10" style={{ backgroundColor: '#006837' }}>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Still have questions?</h2>
          <p className="text-white/80 text-sm sm:text-base mb-6">Our admission team is happy to help you.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${phone}`}
              className="inline-block bg-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-gray-100 transition-colors"
              style={{ color: '#006837' }}
            >
              Call {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-block border-2 border-white text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white/10 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
