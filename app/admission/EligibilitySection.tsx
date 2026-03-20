import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export default function EligibilitySection() {
  return (
    <section id="eligibility-section" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            WHO CAN APPLY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
            Eligibility Criteria
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Check if you meet the requirements to join our B.Ed program
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Educational Qualification */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="bg-[#7cb983]/20 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3 sm:mb-4">Educational Qualification</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-sm leading-relaxed">
                Bachelor&apos;s Degree (BA/B.Sc/B.Com/BCA/BBA or equivalent) from a recognized university.
              </p>
              <p className="text-sm leading-relaxed">
                Candidates with degrees in arts, science, commerce, or any other discipline with school-level teaching subjects are eligible.
              </p>
              <p className="text-sm leading-relaxed font-medium text-[#006837]">
                Candidates appearing for final year exams may also apply provisionally.
              </p>
            </div>
          </div>

          {/* Minimum Marks */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="bg-[#006837]/20 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#006837]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3 sm:mb-4">Minimum Marks Required</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <div className="bg-[#7cb983] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">G</div>
                <div>
                  <p className="font-semibold mb-1">General Category</p>
                  <p className="text-sm">50% aggregate marks in the qualifying degree</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#006837] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">R</div>
                <div>
                  <p className="font-semibold mb-1">Reserved Categories (SC/ST/OBC/PWD)</p>
                  <p className="text-sm">45% aggregate marks in the qualifying degree</p>
                </div>
              </div>
            </div>
          </div>

          {/* Age Limit */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="bg-[#002309]/20 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#002309]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3 sm:mb-4">Age Limit</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-sm leading-relaxed">
                There is <strong>no upper age limit</strong> for B.Ed admission at JKKN College of Education.
              </p>
              <p className="text-sm leading-relaxed">
                Working professionals and career changers are welcome to apply.
              </p>
            </div>
          </div>

          {/* Preferred Subjects */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="bg-[#7cb983]/20 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3 sm:mb-4">Preferred Subjects</h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-sm leading-relaxed">
                Graduation with school-level teaching subjects is preferred. Available B.Ed specializations include:
              </p>
              <div className="flex flex-wrap gap-2">
                {['English', 'Tamil', 'Maths', 'Physics', 'Chemistry', 'Botany', 'Zoology', 'Commerce', 'Economics', 'History', 'Computer Science'].map((subject) => (
                  <span key={subject} className="inline-block bg-[#7cb983]/10 text-[#006837] px-3 py-1 rounded-full text-xs font-medium">
                    {subject}
                  </span>
                ))}
                <span className="inline-block bg-[#7cb983]/10 text-[#006837] px-3 py-1 rounded-full text-xs font-medium">+3 more</span>
              </div>
            </div>
          </div>
        </div>

        {/* Apply CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href={siteConfig.admissionFormUrl}
            className="inline-flex items-center gap-2 bg-[#006837] hover:bg-[#005a2e] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Check Eligibility & Apply Now
          </Link>
        </div>
      </div>
    </section>
  )
}
