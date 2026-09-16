'use client'

import { useState } from 'react'
import { allFaqs } from './faq-data'

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
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
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
                <div
                    id={`faq-answer-${i}`}
                    className={`px-5 sm:px-6 pb-5 sm:pb-6 ${openIndex === i ? '' : 'hidden'}`}
                  >
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#002309' }}>
                      {faq.answer}
                    </p>
                  </div>
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
