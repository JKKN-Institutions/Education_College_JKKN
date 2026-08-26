import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'
import { JsonLd } from '@/components/JsonLd'
import { seoMetadata } from '@/lib/seo-metadata'
import { ADMISSION_DATE_SOURCES } from '@/lib/admissions-data'

// B-04. WHY THIS PAGE EXISTS AND WHY IT IS SHAPED LIKE THIS.
//
// MEASURED 2026-08-26 on GSC across edu and cas, rolling 90 days: 51 query-page rows asking
// about a ONE-YEAR B.Ed, carrying 386 impressions and 22 clicks. 384 of those 386 land on
// cas.jkkn.ac.in/blog/bed-admission-2026-tamil-nadu, which 308s to /admissions - a page that
// says nothing about a one-year route. The queries are things like "1 year bed course in
// tamilnadu", "will b ed be 1 year from 2026", "1 year bed course when will start" and
// "1 year b ed after pg". People are asking whether it EXISTS, not asking to buy ours.
//
// JKKN DOES NOT OFFER A ONE-YEAR B.Ed. Checked live the same day: /admissions, /departments,
// the homepage and /blog/b-ed-complete-guide-2026 mention "2 year" 18 times between them and
// "1 year" ZERO times. So this page must not sell a course we do not run.
//
// AND IT MUST NOT EXPLAIN THE REGULATION. ncte.gov.in was attempted through six fetch tiers on
// 2026-08-26 and failed on every one, and the free Google research lane was soft-blocked, so
// the regulatory position of a one-year B.Ed COULD NOT BE VERIFIED. The user's instruction was
// explicit: say nothing about the regulation. That is why this page carries no eligibility
// rule, no start date, no course structure and no claim about who qualifies. It states what we
// offer, states plainly what we do not know, and points at the bodies that will publish it.
//
// This is deliberately NOT built on CourseBlogTemplate. That template requires eligibility,
// curriculum semesters, recruiters and salary rows - every one of which would have to be
// invented here. A template that forces a claim is the wrong template for an honest page.
//
// ROUTE CHOICE IS ALSO MEASURED: /blog/b-ed-* code routes earned 8,384 impressions and 126
// clicks over the same 90 days across 13 pages, while every /blog/campus/ CMS page earned
// ZERO. This page therefore lives on the route pattern that demonstrably works on this site.

export const metadata = seoMetadata(
  '1-Year B.Ed in Tamil Nadu 2026 - What Is Confirmed and What Is Not',
  'Is there a one-year B.Ed in Tamil Nadu for 2026? JKKN College of Education runs the two-year B.Ed with 14 specialisations. We do not publish a one-year start date or eligibility rule until the official notification exists - here is where it will appear.',
  '/blog/b-ed-one-year-2026',
  {
    keywords: [
      '1 year b ed admission 2026',
      'one year b ed course in tamilnadu',
      '1 year bed course when will start',
      'will b ed be 1 year from 2026',
      '1 year b ed after pg',
      'b ed one year course 2026',
    ],
    absolute: true,
  },
)

// The 14 specialisations JKKN actually runs. Every slug below is a live page in sitemap.xml,
// checked 2026-08-26 - this is our own offering, not a third-party claim.
const SPECIALISATIONS = [
  { slug: 'tamil', name: 'Tamil' },
  { slug: 'english', name: 'English' },
  { slug: 'maths', name: 'Mathematics' },
  { slug: 'physics', name: 'Physics' },
  { slug: 'chemistry', name: 'Chemistry' },
  { slug: 'botany', name: 'Botany' },
  { slug: 'zoology', name: 'Zoology' },
  { slug: 'microbiology', name: 'Microbiology' },
  { slug: 'history', name: 'History' },
  { slug: 'economics', name: 'Economics' },
  { slug: 'commerce', name: 'Commerce' },
  { slug: 'computer-science', name: 'Computer Science' },
  { slug: 'political-science', name: 'Political Science' },
  { slug: 'social-science', name: 'Social Science' },
]

// The two routes into a B.Ed seat in Tamil Nadu. Same content as the AdmissionRoutes section on
// /admissions, and under the same rule: nothing is claimed about merit-list computation,
// government fees, government-college affiliation or any date, because none of it was verified.
const ROUTES = [
  {
    tag: 'ROUTE 1',
    title: 'Government and government-aided colleges of education',
    body: 'Run by the Government of Tamil Nadu through its own B.Ed admission process. You apply to the state, not to a college, and seat allotment happens centrally. The dates come from the state notification.',
  },
  {
    tag: 'ROUTE 2',
    title: 'Self-financing colleges, including JKKN',
    body: 'You apply to the college directly. There is no central allotment to wait for, and you can hold a JKKN application open while the government process runs. Applying to both is normal and costs you nothing.',
  },
]

const FAQS = [
  {
    q: 'Does JKKN College of Education offer a 1-year B.Ed?',
    a: 'No. JKKN College of Education offers the two-year B.Ed, across 14 subject specialisations, NCTE-approved and affiliated to Tamil Nadu Teachers Education University. That is the programme you can apply to today.',
  },
  {
    q: 'Will the B.Ed become a 1-year course from 2026?',
    a: 'We are not going to tell you either way, because we cannot show you a source for it. Any change to the length of the B.Ed is announced by the national and state authorities, not by a college. Check the official portals linked on this page rather than trusting any college website, including ours.',
  },
  {
    q: 'When will the 1-year B.Ed course start?',
    a: 'There is no date we can verify, so we are not publishing one. An approximate date on a college website is how an applicant misses a real deadline. When an official notification exists, this page is updated the same day.',
  },
  {
    q: 'I already have a PG degree. Can I do a shorter B.Ed?',
    a: 'We cannot confirm what a postgraduate degree qualifies you for under any shorter route, and we will not guess about your eligibility. Our admission office will tell you honestly what you qualify for in the two-year programme, and will say so if the answer is that you should wait.',
  },
  {
    q: 'What B.Ed can I actually apply for at JKKN right now?',
    a: 'The two-year B.Ed, in any of 14 specialisations including Tamil, English, Mathematics, Physics, Chemistry, Biology, History, Economics, Commerce, Computer Science and Political Science. Self-financing seats are open now and you apply to the college directly.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function OneYearBEdPage() {
  return (
    <>
      <Header />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: '1-Year B.Ed in Tamil Nadu', href: '/blog/b-ed-one-year-2026' },
        ]}
      />
      <JsonLd data={faqSchema} />

      <main className="min-h-screen bg-[#FBFBEE]">
        {/* Hero */}
        <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-4">
              STRAIGHT ANSWER
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-5">
              1-Year B.Ed in Tamil Nadu &mdash; What Is Confirmed, and What Is Not
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              You searched for a one-year B.Ed. Here is the honest position, in one paragraph,
              before anything else on this page.
            </p>
          </div>
        </section>

        {/* The answer, above the fold, snippet-shaped */}
        <section className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border-l-4 border-[#006837] bg-white p-6 sm:p-8">
              <p className="text-base sm:text-lg text-[#002309] leading-relaxed font-medium">
                JKKN College of Education offers the <strong>two-year B.Ed</strong>, and that is
                the programme you can apply to today. We are <strong>not</strong> publishing a
                start date, an eligibility rule or an admission process for a one-year B.Ed,
                because we cannot show you an official source for one. When the authorities
                publish it, this page changes the same day.
              </p>
            </div>
          </div>
        </section>

        {/* What we do offer */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-4">
              What JKKN Actually Runs
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
              One programme, described plainly:
            </p>
            <ul className="space-y-3">
              {[
                'The two-year B.Ed, in 14 subject specialisations',
                'NCTE-approved',
                'Affiliated to Tamil Nadu Teachers Education University (TNTEU), which awards the degree',
                'Self-financing seats are open now - you apply to the college directly, with no state merit list to wait for',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm sm:text-base text-gray-700">
                  <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/admissions"
                className="inline-block bg-[#006837] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#7cb983] transition-colors"
              >
                See the two-year B.Ed admission page
              </Link>
            </div>
          </div>
        </section>

        {/* The 14 specialisations - the practical answer to "so what CAN I apply for" */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-3">
              The 14 Subjects You Can Take
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              Your B.Ed subject decides which classes you are qualified to teach afterwards, so it
              matters more than most applicants expect. Each page below covers what that
              specialisation involves and who it suits.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {SPECIALISATIONS.map((s) => (
                <Link
                  key={s.slug}
                  href={`/admissions/${s.slug}`}
                  className="block rounded-lg bg-white border border-[#7cb983]/30 px-4 py-3 text-sm font-semibold text-[#006837] hover:border-[#7cb983] transition-colors"
                >
                  B.Ed {s.name}
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm text-gray-600">
              Not sure which one?{' '}
              <Link
                href="/blog/campus/which-bed-subject-to-choose-decision-guide"
                className="text-[#006837] font-semibold underline underline-offset-2"
              >
                Read the subject decision guide
              </Link>{' '}
              &mdash; it works backwards from the degree you already hold.
            </p>
          </div>
        </section>

        {/* Two routes */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-3">
              Two Ways Into a B.Ed Seat in Tamil Nadu
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              These are separate processes and they do not share an application form. Whichever
              route a one-year B.Ed eventually falls under, this split is worth understanding now.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ROUTES.map((r) => (
                <div
                  key={r.tag}
                  className="rounded-2xl bg-[#FBFBEE] border border-[#7cb983]/30 p-5 sm:p-6"
                >
                  <span className="inline-block bg-[#006837] text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-3">
                    {r.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#002309] mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why no date */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-4">
              Why This Page Refuses to Give You a Date
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Search for this and you will find college websites carrying confident months and
                eligibility rules. Most of them are repeating each other.
              </p>
              <p>
                We are not doing that. A course length, a start date and an eligibility rule are
                set by the national and state authorities. A college that prints an approximate
                one is not being helpful &mdash; it is how an applicant misses a real deadline, or
                waits a year for something that was never coming.
              </p>
              <p className="font-medium text-[#002309]">
                So the honest statement is this: we do not know, and we would rather say so than
                fill the gap with something that reads well.
              </p>
            </div>
          </div>
        </section>

        {/* Where the answer will appear */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-3">
              Where the Answer Will Actually Appear
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Check these rather than any college website, ours included.
            </p>
            <ul className="space-y-4">
              {ADMISSION_DATE_SOURCES.map((src) => (
                <li key={src.href} className="rounded-xl border border-[#7cb983]/30 p-4">
                  <a
                    href={src.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#006837] underline underline-offset-2 hover:text-[#7cb983] text-sm sm:text-base"
                  >
                    {src.label}
                  </a>
                  <span className="block text-xs sm:text-sm text-gray-500 mt-1">{src.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-6">
              Questions People Actually Ask
            </h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.q} className="rounded-xl bg-white border border-[#7cb983]/30 p-5">
                  <h3 className="font-bold text-[#002309] mb-2 text-sm sm:text-base">{f.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Close */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-4">
              If You Want to Start Teaching Sooner
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              The two-year B.Ed is open now and does not depend on any announcement. If you would
              rather wait for a shorter route, that is a reasonable choice &mdash; call our
              admission office and we will tell you what we know and what we do not.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/admissions"
                className="inline-block bg-[#006837] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#7cb983] transition-colors"
              >
                B.Ed admission 2026-27
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white text-[#006837] border-2 border-[#006837] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#FBFBEE] transition-colors"
              >
                Talk to the admission office
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
