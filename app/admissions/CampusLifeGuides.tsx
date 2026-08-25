import Link from 'next/link'

// STUDENT-LIFE GUIDES - deliberately SEPARATE from AdmissionGuides.
//
// Added 2026-08-25. These six articles were the last true orphans on the site: measured that
// day, /blog links 9 of the 28 campus articles and /admissions links the rest, leaving exactly
// 12 with no internal link from anywhere. Six of those twelve are admission-decision content
// and went into AdmissionGuides. These six are not - they answer "what is it actually like once
// I am here", which is a different reader at a different moment.
//
// They sit here, after CampusFacilities, rather than in the admissions block on purpose. Piling
// twenty links onto one money section spreads its link value thin and buries the guides a
// prospective applicant actually needs before deciding. Grouping by intent keeps both blocks
// readable and keeps the admission block pointed at admission questions.
//
// Every one of these is 1,938 to 2,176 words with a proper title - checked live 2026-08-25, so
// none of this is a link to a thin page.
const CAMPUS_LIFE = [
  {
    href: '/blog/campus/bed-hostel-and-daily-life',
    title: 'B.Ed hostel and daily life at JKKN',
    note: 'What an ordinary week actually looks like',
  },
  {
    href: '/blog/campus/bed-teaching-practice-what-it-involves',
    title: 'B.Ed teaching practice: what it involves',
    note: 'Your first time in front of a real class',
  },
  {
    href: '/blog/campus/choosing-the-school-for-your-teaching-practice',
    title: 'Choosing the school for your teaching practice',
    note: 'Why the school you pick changes the year',
  },
  {
    href: '/blog/campus/bed-record-work-and-reflective-journals',
    title: 'B.Ed record work and reflective journals',
    note: 'The written work nobody warns you about',
  },
  {
    href: '/blog/campus/classroom-management-what-nobody-teaches-you',
    title: 'Classroom management: what nobody teaches you',
    note: 'The part of teaching the syllabus skips',
  },
  {
    href: '/blog/campus/failing-a-bed-paper-what-happens',
    title: 'Failing a B.Ed paper: what actually happens',
    note: 'Arrears, re-exams and what it costs you',
  },
]

export default function CampusLifeGuides() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#FBFBEE]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            LIFE ON THE PROGRAMME
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006837] mb-3 px-2">
            What the Two Years Are Really Like
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2">
            Written by people who teach the programme, not by a brochure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAMPUS_LIFE.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="block rounded-xl bg-white border border-[#7cb983]/30 p-4 hover:border-[#7cb983] transition-colors"
            >
              <h3 className="text-sm font-bold text-[#006837] mb-1 leading-snug">{g.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{g.note}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
