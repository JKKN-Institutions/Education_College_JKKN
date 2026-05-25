import Link from 'next/link'

const specializations = [
  { name: 'English', slug: 'english', description: 'English language teaching with modern ELT methodologies and communicative approaches' },
  { name: 'Tamil', slug: 'tamil', description: 'Tamil language education with classical literature and contemporary teaching methods' },
  { name: 'Mathematics', slug: 'maths', description: 'Mathematical concepts with problem-solving pedagogy and activity-based learning' },
  { name: 'Physics', slug: 'physics', description: 'Physics education with practical demonstrations and experimental teaching methods' },
  { name: 'Chemistry', slug: 'chemistry', description: 'Chemistry teaching with lab-based learning and real-world applications' },
  { name: 'Botany', slug: 'botany', description: 'Plant sciences education with field studies and environmental awareness' },
  { name: 'Zoology', slug: 'zoology', description: 'Zoological sciences teaching with specimen studies and ecological understanding' },
  { name: 'Microbiology', slug: 'microbiology', description: 'Microbiology education with laboratory techniques and research methodology' },
  { name: 'Commerce', slug: 'commerce', description: 'Commerce and business studies teaching with practical financial literacy' },
  { name: 'Economics', slug: 'economics', description: 'Economics education with data analysis and economic theory applications' },
  { name: 'History', slug: 'history', description: 'History teaching with source-based learning and critical analysis methods' },
  { name: 'Political Science', slug: 'political-science', description: 'Political science education with civic awareness and governance understanding' },
  { name: 'Computer Science', slug: 'computer-science', description: 'Computer science teaching with programming skills and digital literacy' },
  { name: 'Social Science', slug: 'social-science', description: 'Integrated social science education with interdisciplinary teaching approaches' },
]

export default function SpecializationGrid() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            14 SPECIALIZATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
            Course-Wise B.Ed Admission
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Click any specialization to see course-specific eligibility, fees, application steps, and apply directly
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {specializations.map((spec) => (
            <Link
              key={spec.slug}
              href={`/admissions/${spec.slug}`}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#7cb983] transition-all duration-200 group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#7cb983]/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#7cb983]/30 transition-colors">
                  <svg className="w-5 h-5 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#006837] group-hover:text-[#7cb983] transition-colors">
                  B.Ed {spec.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{spec.description}</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#7cb983]">
                View Admission Details
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
