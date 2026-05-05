import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Student Testimonials — ${siteConfig.name}`,
  description: 'Hear from JKKN College of Education graduates who are now successful teachers across India.',
}

const testimonials = [
  {
    quote:
      "The B.Ed programme transformed my understanding of education. The practical training and supportive Learning Facilitators prepared me well for my career. I'm now teaching at a CBSE school and loving every moment!",
    name: 'Priya Sharma',
    batch: 'Batch 2022 | TGT Mathematics',
    school: 'Delhi Public School, Chennai',
    initial: 'P',
    bg: '#7cb983',
  },
  {
    quote:
      'The internship experience was invaluable. Real classroom exposure during the 16-week internship gave me confidence. The placement cell helped me secure a position even before graduation.',
    name: 'Rajesh Kumar',
    batch: 'Batch 2021 | PGT Science',
    school: 'Kendriya Vidyalaya, Coimbatore',
    initial: 'R',
    bg: '#002309',
  },
  {
    quote:
      'Excellent infrastructure and dedicated Learning Facilitators make this college stand out. The focus on inclusive education and technology integration has been incredibly beneficial for my career growth.',
    name: 'Sunita Devi',
    batch: 'Batch 2023 | TGT English',
    school: 'Navodaya Vidyalaya, Tamil Nadu',
    initial: 'S',
    bg: '#006837',
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white"
        style={{ background: 'linear-gradient(135deg, #002309 0%, #006837 100%)' }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block bg-white/20 text-white px-5 py-1.5 rounded-full font-semibold text-xs sm:text-sm mb-4 tracking-wide uppercase">
            Success Stories
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Student Testimonials</h1>
          <div className="h-1 w-20 mx-auto mb-6" style={{ backgroundColor: '#7cb983' }} />
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Hear from our graduates who are now successful Learning Facilitators across India.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg flex flex-col"
            >
              <div className="text-4xl mb-4" style={{ color: '#7cb983' }}>&ldquo;</div>
              <p className="text-gray-700 italic mb-6 leading-relaxed flex-1">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: t.bg }}
                >
                  <span className="text-white text-xl font-bold">{t.initial}</span>
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: '#006837' }}>{t.name}</h3>
                  <p className="text-sm" style={{ color: '#7cb983' }}>{t.batch}</p>
                  <p className="text-xs text-gray-500">{t.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
