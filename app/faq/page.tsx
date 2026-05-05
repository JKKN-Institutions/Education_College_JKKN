import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/site-config'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: `FAQ — ${siteConfig.name}`,
  description: 'Frequently asked questions about B.Ed admission, eligibility, fee structure, hostel, scholarships, and career opportunities at JKKN College of Education.',
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white" style={{ background: 'linear-gradient(135deg, #002309 0%, #006837 100%)' }}>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block bg-white/20 text-white px-5 py-1.5 rounded-full font-semibold text-xs sm:text-sm mb-4 tracking-wide uppercase">
            Help Centre
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <div className="h-1 w-20 mx-auto mb-6" style={{ backgroundColor: '#7cb983' }} />
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Everything you need to know about B.Ed admissions, programs, fees, and life at JKKN College of Education.
          </p>
        </div>
      </section>

      <FAQClient phone={siteConfig.phone} email={siteConfig.email} />

      <Footer />
    </div>
  )
}
