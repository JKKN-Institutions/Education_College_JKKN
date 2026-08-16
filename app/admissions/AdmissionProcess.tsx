export default function AdmissionProcess() {
  const steps = [
    {
      title: 'Online Application',
      description: 'Fill the online application form at jkkn.ai/apply/jkkn-admission-2026 with accurate personal, academic, and contact details. Upload required documents in the prescribed format.',
    },
    {
      title: 'Document Submission & Fee Payment',
      description: 'Submit original documents for verification and pay the application processing fee. Documents can be submitted online or at the campus admission office.',
    },
    {
      title: 'Entrance Examination',
      description: 'Appear for the entrance examination if applicable as per TNTEU guidelines. The exam assesses general knowledge, teaching aptitude, and subject proficiency.',
    },
    {
      title: 'Counselling & Seat Allotment',
      description: 'Attend the counselling session based on merit ranking. Choose your preferred B.Ed specialization from 14 available subjects during counselling.',
    },
    {
      title: 'Admission Confirmation',
      description: 'Complete admission formalities including fee payment, hostel booking (if needed), and orientation. Collect your ID card and class schedule.',
    },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            HOW TO APPLY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
            Admission Process
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Follow these simple steps to secure your admission at JKKN College of Education
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 sm:gap-6">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#7cb983] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-base sm:text-lg shadow-md">
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 h-full min-h-[60px] bg-[#7cb983]/30 my-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 sm:pb-10">
                  <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
