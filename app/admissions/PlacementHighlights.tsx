export default function PlacementHighlights() {
  const stats = [
    { value: '98%', label: 'Placement Rate' },
    { value: '₹3-8 LPA', label: 'Salary Range' },
    { value: '100+', label: 'Recruiting Schools' },
    { value: '15+', label: 'Campus Drives/Year' },
  ]

  const recruiters = [
    'Kendriya Vidyalaya Sangathan (KVS)',
    'Navodaya Vidyalaya Samiti (NVS)',
    'DAV Schools',
    'Delhi Public School (DPS)',
    'CBSE Affiliated Schools',
    'State Government Schools',
    'International Schools',
    'Private School Chains',
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#002309] to-[#006837]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            CAREER OUTCOMES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
            Placement Highlights
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-3xl mx-auto px-2">
            Our graduates are placed in top schools and educational institutions across India
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7cb983] mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Top Recruiters */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">Top Recruiting Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {recruiters.map((recruiter, idx) => (
              <div key={idx} className="bg-white/10 rounded-lg p-3 sm:p-4 text-center">
                <p className="text-xs sm:text-sm text-white font-medium">{recruiter}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
