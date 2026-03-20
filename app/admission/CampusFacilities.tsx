import Link from 'next/link'

export default function CampusFacilities() {
  const facilities = [
    { icon: '🖥️', label: 'Smart Learning Studios' },
    { icon: '📚', label: 'Digital Library' },
    { icon: '💻', label: 'ICT Laboratory' },
    { icon: '🧠', label: 'Psychology Lab' },
    { icon: '🔬', label: 'Science Lab' },
    { icon: '🎤', label: 'Seminar Hall' },
    { icon: '🎨', label: 'Art & Craft Room' },
    { icon: '🏃', label: 'Sports Ground' },
    { icon: '🏠', label: 'Hostel Facility' },
    { icon: '🍽️', label: 'Cafeteria' },
    { icon: '🚌', label: 'Transport Service' },
    { icon: '📶', label: 'Wi-Fi Campus' },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            CAMPUS LIFE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
            World-Class Facilities
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Modern infrastructure designed for an immersive learning experience
          </p>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {facilities.map((facility, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center hover:shadow-md transition-shadow duration-200 border border-gray-100">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{facility.icon}</div>
                <div className="text-[10px] sm:text-xs font-medium text-gray-700 leading-tight">{facility.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 text-[#006837] font-semibold text-sm hover:text-[#7cb983] transition-colors"
            >
              Explore All Facilities
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
