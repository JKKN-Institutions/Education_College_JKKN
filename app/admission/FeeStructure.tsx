import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export default function FeeStructure() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            AFFORDABLE EDUCATION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
            Fee Structure & Scholarships
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Quality education at government-regulated fees with scholarship support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Fee Range */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border-t-4 border-[#006837]">
            <div className="text-center mb-4 sm:mb-6">
              <div className="bg-[#006837]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#006837]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-2">Annual Tuition Fee</h3>
              <div className="text-2xl sm:text-3xl font-bold text-[#7cb983]">&#8377;40,000 - &#8377;80,000</div>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">Per year (as per TN Govt. norms)</p>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Tuition + Lab + Library fees included
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Exam fees as per university norms
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Hostel fees separate (optional)
              </li>
            </ul>
          </div>

          {/* Scholarships */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border-t-4 border-[#7cb983]">
            <div className="text-center mb-4 sm:mb-6">
              <div className="bg-[#7cb983]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#7cb983]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-2">Scholarships Available</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                { category: 'BC/MBC Students', detail: 'Tamil Nadu govt. scholarship covering tuition fees' },
                { category: 'SC/ST Students', detail: 'Full fee waiver + maintenance allowance' },
                { category: 'Merit-Based', detail: 'Scholarships for top academic performers' },
                { category: 'EWS Concession', detail: 'Fee concession for economically weaker sections' },
                { category: 'Differently-Abled', detail: 'Special scholarship from state & central govt.' },
              ].map((item, idx) => (
                <li key={idx} className="border-l-2 border-[#7cb983] pl-3">
                  <p className="font-semibold text-[#006837]">{item.category}</p>
                  <p className="text-xs text-gray-500">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Options */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border-t-4 border-[#002309]">
            <div className="text-center mb-4 sm:mb-6">
              <div className="bg-[#002309]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#002309]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-2">Payment Options</h3>
            </div>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <div className="bg-[#7cb983] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">1</div>
                <div>
                  <p className="font-semibold">Semester-wise Payment</p>
                  <p className="text-xs text-gray-500">Pay fees each semester — 4 installments over 2 years</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#7cb983] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">2</div>
                <div>
                  <p className="font-semibold">Education Loan Assistance</p>
                  <p className="text-xs text-gray-500">Tie-ups with banks for hassle-free education loans</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#7cb983] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">3</div>
                <div>
                  <p className="font-semibold">Online Payment</p>
                  <p className="text-xs text-gray-500">Pay via net banking, UPI, or card at the admission portal</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link href={`tel:${siteConfig.phone}`} className="flex items-center justify-center gap-2 text-[#006837] font-semibold text-sm hover:underline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call for Exact Fee Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
