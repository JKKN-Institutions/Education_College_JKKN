export default function AdmissionTimeline() {
  const milestones = [
    { month: 'Mar', title: 'Applications Open', description: 'Online application portal opens for 2026-27 session', status: 'active' },
    { month: 'Apr', title: 'Document Verification', description: 'Submit documents and complete application review', status: 'upcoming' },
    { month: 'May', title: 'Entrance Exam', description: 'State-level entrance examination (if applicable)', status: 'upcoming' },
    { month: 'Jun', title: 'Counselling', description: 'Merit-based counselling and specialization selection', status: 'upcoming' },
    { month: 'Jul', title: 'Seat Allotment', description: 'Final seat allotment and admission confirmation', status: 'upcoming' },
    { month: 'Aug', title: 'Classes Begin', description: 'Orientation program and academic session starts', status: 'upcoming' },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            IMPORTANT DATES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
            Admission Timeline 2026-27
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Key dates and milestones for your B.Ed admission journey
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-[#7cb983]/20"></div>
            <div className="absolute top-8 left-0 h-1 bg-[#7cb983]" style={{ width: '16.66%' }}></div>

            <div className="grid grid-cols-6 gap-4">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative text-center">
                  {/* Circle Marker */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm ${
                    milestone.status === 'active'
                      ? 'bg-[#7cb983] text-white shadow-lg shadow-[#7cb983]/30'
                      : 'bg-white text-[#006837] border-2 border-[#7cb983]/30'
                  }`}>
                    {milestone.month}
                  </div>
                  <h3 className="text-sm font-bold text-[#006837] mb-1">{milestone.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="space-y-0">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs ${
                    milestone.status === 'active'
                      ? 'bg-[#7cb983] text-white shadow-md'
                      : 'bg-white text-[#006837] border-2 border-[#7cb983]/30'
                  }`}>
                    {milestone.month}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className={`w-0.5 h-full min-h-[40px] my-1 ${
                      milestone.status === 'active' ? 'bg-[#7cb983]' : 'bg-[#7cb983]/20'
                    }`}></div>
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="text-base font-bold text-[#006837] mb-1">{milestone.title}</h3>
                  <p className="text-sm text-gray-500">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
