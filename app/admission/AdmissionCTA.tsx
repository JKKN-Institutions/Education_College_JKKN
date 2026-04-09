import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export default function AdmissionCTA() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gradient-to-r from-[#002309] to-[#006837] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                Ready to Begin Your Teaching Career?
              </h2>
              <p className="text-white/90 text-sm sm:text-base max-w-xl">
                Applications for the 2026-27 academic session are now open. Limited seats available across 14 specializations — apply early to secure your preferred subject.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0">
              <Link
                href={siteConfig.admissionFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 active:bg-gray-200 text-[#006837] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 whitespace-nowrap text-sm sm:text-base text-center"
              >
                Start Application
              </Link>
              <Link
                href={`tel:${siteConfig.phone}`}
                className="border-2 border-white text-white hover:bg-white hover:text-[#006837] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 whitespace-nowrap text-sm sm:text-base text-center"
              >
                Call: {siteConfig.phone.replace('+91', '+91 ')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
