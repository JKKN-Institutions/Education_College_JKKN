export default function DocumentsRequired() {
  const requiredDocs = [
    '10th Mark Sheet and Certificate',
    '12th / HSC Mark Sheet and Certificate',
    'Graduation Degree Certificate',
    'All Semester / Year Mark Sheets',
    'Transfer Certificate (TC) from last attended institution',
    'Community Certificate (for reserved categories)',
    'Income Certificate',
    'Aadhaar Card (front and back)',
    '4 Passport-Size Photographs (white background)',
  ]

  const optionalDocs = [
    'Migration Certificate (if from other state/university)',
    'Physically Handicapped Certificate (if applicable)',
    'Ex-Serviceman Certificate (if applicable)',
    'Sports Achievement Certificates',
    'Extra-curricular Activity Certificates',
    'Work Experience Certificate (if applicable)',
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            CHECKLIST
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
            Documents Required
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Keep these documents ready before starting your application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Required Documents */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#006837]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
              </svg>
              Required Documents
            </h3>
            <ul className="space-y-3 text-gray-700">
              {requiredDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Optional Documents */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4 sm:mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
              </svg>
              Optional Documents
            </h3>
            <ul className="space-y-3 text-gray-700">
              {optionalDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-[#7cb983]/60 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  {doc}
                </li>
              ))}
            </ul>
            <p className="mt-4 sm:mt-6 text-xs text-gray-500 italic">
              * These documents are not mandatory but may support your application
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
