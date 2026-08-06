'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export default function AdmissionHero() {
  return (
    <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(135deg,rgba(0,35,9,0.85)_0%,rgba(0,104,55,0.85)_100%)]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 mb-8"
                 style={{ borderColor: '#7cb983' }}>
              <svg className="w-5 h-5" style={{ color: '#7cb983' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-base font-semibold" style={{ color: '#7cb983' }}>
                ADMISSIONS OPEN 2026-27
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span style={{ color: '#ffffff' }}>B.Ed </span>
              <span style={{ color: '#7cb983' }}>Admission</span>
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#ffffff' }}>
              Bachelor of Education — {siteConfig.name}
            </h2>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Begin your journey to become a skilled educator. Our NCTE-approved, TNTEU-affiliated B.Ed program offers 14 specializations with modern teaching methodologies, practical training, and 98% placement support.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8 lg:mb-12">
              {/* Years */}
              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#7cb983' }}>2</div>
                <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>YEARS</div>
              </div>

              {/* Subjects */}
              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#7cb983' }}>14</div>
                <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>SUBJECTS</div>
              </div>

              {/* Placement */}
              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#7cb983' }}>98%</div>
                <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>PLACEMENT</div>
              </div>

              {/* Semesters */}
              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#7cb983' }}>4</div>
                <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>SEMESTERS</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href={siteConfig.admissionFormUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white bg-[#7cb983] hover:bg-[#6ba872] transition-transform hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Apply Now
              </Link>

              <button
                onClick={() => {
                  const element = document.getElementById('eligibility-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 transition-all hover:bg-white hover:text-[#002309] text-white"
                style={{ borderColor: '#ffffff' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Explore Details
              </button>
            </div>
          </div>

          {/* Right Content - Hero Banner Image */}
          <div className="relative mt-8 lg:mt-0">
            <Image
              src="/images/Homepage-Start-Your-Teaching-Career-Image.png"
              alt="B.Ed Admission 2026-27 - JKKN College of Education"
              width={2048}
              height={2048}
              priority
              className="w-full h-auto rounded-xl sm:rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
