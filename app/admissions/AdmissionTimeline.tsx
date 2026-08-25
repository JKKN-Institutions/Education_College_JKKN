import { ADMISSION_DATE_SOURCES } from '@/lib/admissions-data'

// ADMISSION STEPS - no calendar month is published here, on purpose.
//
// Until 2026-08-25 this component printed Mar / Apr / May / Jun / Jul / Aug against these six
// steps, with March flagged `active` so it rendered as the current step all year. Those months
// were never verified, they disagreed with the six dates in lib/admissions-data.ts that the
// course pages render, and Tamil Nadu B.Ed dates are set by the state rather than by this
// college. config/admission-windows.json in the SEO project carries "verified": false and
// states that no such date may be published, quoted to a parent, or written into a page.
//
// A step number answers "what happens next" without claiming to know when.
export default function AdmissionTimeline() {
  const milestones = [
    { month: '1', title: 'Applications Open', description: 'JKKN self-financing seats are open now. The state route opens on the Tamil Nadu B.Ed admission notification', status: 'upcoming' },
    { month: '2', title: 'Document Verification', description: 'Submit documents and complete application review', status: 'upcoming' },
    { month: '3', title: 'Entrance Exam', description: 'State-level entrance examination (if applicable)', status: 'upcoming' },
    { month: '4', title: 'Counselling', description: 'Merit-based counselling and specialization selection', status: 'upcoming' },
    { month: '5', title: 'Seat Allotment', description: 'Final seat allotment and admission confirmation', status: 'upcoming' },
    { month: '6', title: 'Classes Begin', description: 'Orientation programme and academic session starts', status: 'upcoming' },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            ADMISSION STEPS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
            B.Ed Admission 2026-27 &mdash; How It Works
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Tamil Nadu B.Ed dates are announced by the state, not by individual colleges. We publish
            a date only once the official notification is out &mdash; an approximate date on a college
            website is how an applicant misses a deadline.
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

        {/* Where the real dates are published. This replaces the six invented months that
            stood here until 2026-08-25 - it answers the same question honestly, and it is the
            better answer for "when does B.Ed admission start in Tamil Nadu". */}
        <div className="mt-10 sm:mt-14 rounded-2xl border border-[#7cb983]/30 bg-white p-5 sm:p-7">
          <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2">
            B.Ed Admission 2026-27 Dates &mdash; Where They Are Officially Published
          </h3>
          <p className="text-sm text-gray-600 mb-5">
            Government and government-aided colleges of education admit through the Government of
            Tamil Nadu B.Ed admission portal. The degree is awarded by Tamil Nadu Teachers Education
            University (TNTEU), which publishes the academic calendar. JKKN self-financing seats run
            on our own cycle and are open now.
          </p>
          <ul className="space-y-3">
            {ADMISSION_DATE_SOURCES.map((src) => (
              <li key={src.href} className="text-sm">
                <a
                  href={src.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#006837] underline underline-offset-2 hover:text-[#7cb983]"
                >
                  {src.label}
                </a>
                <span className="block text-gray-500">{src.note}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs italic text-gray-500">
            We update this section the day the official notification is published. For the current
            cut-off on JKKN self-financing seats, call the admission office.
          </p>
        </div>
      </div>
    </section>
  )
}
