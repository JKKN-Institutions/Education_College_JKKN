import Link from 'next/link'

// INTERNAL LINKS TO THE DEEP B.Ed GUIDES, grouped by where the reader is in the decision.
//
// Added 2026-08-25 and the reason is measured, not decorative. On 2026-08-24 every one of the
// 28 /blog/campus/ B.Ed articles on this site read "Discovered - currently not indexed" in the
// GSC URL Inspection API, with lastCrawlTime null - 25 Discovered and 3 worse still, "URL is
// unknown to Google". They sit in a sitemap Google downloaded on 2026-08-23 with zero errors,
// so the sitemap is not the fault. A sitemap is a weak crawl signal; an internal link from a
// page Google actually crawls is a strong one.
//
// WHY THIS PAGE AND NOT /blog. Measured 2026-08-25: /blog is indexed and DOES already link 9 of
// the 28 - but Google last crawled it on 2026-07-05, and the articles were published around
// 2026-08-08. Those 9 links have existed for weeks and Google has never seen them. /admissions
// was crawled 2026-08-22, so it is the only reliably-fresh internal surface this site has.
//
// Before this component the live /admissions page contained the string "blog" ZERO times.
//
// Anchor text is descriptive on purpose. A bare "read more" carries no crawl or relevance
// signal, and these anchors are the only description Google has of pages it has never fetched.
const GROUPS = [
  {
    heading: 'Before you apply',
    items: [
      {
        href: '/blog/campus/bed-admission-tamil-nadu-full-process',
        title: 'B.Ed admission in Tamil Nadu: the full process',
        note: 'Every stage, start to seat, in one place',
      },
      {
        href: '/blog/campus/bed-admission-dates-where-they-are-published',
        title: 'B.Ed admission dates: where they are published',
        note: 'Which official notice carries which date',
      },
      {
        href: '/blog/campus/government-bed-college-admission-how-it-differs',
        title: 'Government B.Ed college admission: how it differs',
        note: 'What changes if you take the state route',
      },
      {
        href: '/blog/campus/bed-fees-what-two-years-actually-costs',
        title: 'B.Ed fees: what two years actually costs',
        note: 'Tuition, hostel, transport and the extras',
      },
      {
        href: '/blog/campus/bed-for-science-graduates-and-arts-graduates',
        title: 'B.Ed for science graduates and arts graduates',
        note: 'What your degree subject lets you take',
      },
      {
        href: '/blog/campus/bed-vs-deled-which-teaching-qualification',
        title: 'B.Ed or D.El.Ed: which teaching qualification',
        note: 'Which classes each one lets you teach',
      },
      {
        href: '/blog/campus/which-bed-subject-to-choose-decision-guide',
        title: 'Which B.Ed subject to choose',
        note: 'How your degree subject narrows the choice',
      },
      {
        href: '/blog/campus/bed-regular-or-distance',
        title: 'B.Ed regular or distance',
        note: 'What each mode is accepted for',
      },
      {
        href: '/blog/campus/what-ncte-approval-actually-means',
        title: 'What NCTE approval actually means',
        note: 'The one approval to check before you pay',
      },
    ],
  },
  {
    heading: 'What the two years look like',
    items: [
      {
        href: '/blog/campus/bed-two-years-what-to-expect',
        title: 'B.Ed: what the two years actually involve',
        note: 'Semester by semester, in plain terms',
      },
      {
        href: '/blog/campus/bed-exam-dates-and-the-academic-calendar',
        title: 'B.Ed exam dates and the academic calendar',
        note: 'How the university year is structured',
      },
    ],
  },
  {
    heading: 'After the degree',
    items: [
      {
        href: '/blog/campus/how-to-become-a-teacher-in-tamil-nadu-after-bed',
        title: 'How to become a teacher in Tamil Nadu after B.Ed',
        note: 'The routes into a classroom, step by step',
      },
      {
        href: '/blog/campus/government-teacher-recruitment-after-bed',
        title: 'Government teacher recruitment after B.Ed',
        note: 'How the state hiring process actually runs',
      },
      {
        href: '/blog/campus/teaching-in-cbse-and-matriculation-schools-private-route',
        title: 'Teaching in CBSE and matriculation schools',
        note: 'The private-school route after B.Ed',
      },
    ],
  },
]

export default function AdmissionGuides() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            DETAILED GUIDES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006837] mb-3 px-2">
            B.Ed Admission &mdash; Read Deeper
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2">
            Longer answers to the questions this page can only summarise.
          </p>
        </div>

        <div className="space-y-8">
          {GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-base sm:text-lg font-bold text-[#002309] mb-3 pb-2 border-b border-[#7cb983]/30">
                {group.heading}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((g) => (
                  <Link
                    key={g.href}
                    href={g.href}
                    className="block rounded-xl bg-white border border-[#7cb983]/30 p-4 hover:border-[#7cb983] transition-colors"
                  >
                    <h4 className="text-sm font-bold text-[#006837] mb-1 leading-snug">{g.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{g.note}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
