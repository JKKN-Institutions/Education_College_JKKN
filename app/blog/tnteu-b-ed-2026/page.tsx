import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'
import { JsonLd } from '@/components/JsonLd'
import { seoMetadata } from '@/lib/seo-metadata'

// B-05. WHY THIS PAGE EXISTS AND WHAT IT IS ALLOWED TO SAY.
//
// MEASURED 2026-08-27 on GSC across edu and cas, rolling 90 days: 63 query-page rows mentioning
// TNTEU or Tamil Nadu Teachers Education University, carrying 1,205 impressions and 50 clicks.
// 1,171 of those 1,205 land on cas.jkkn.ac.in/blog/bed-admission-2026-tamil-nadu, which 308s to
// /admissions - a page that mentions TNTEU exactly twice. Top queries: tnteu b ed admission 2026
// at 328 impressions, tnteu admission 2026 at 246, tnteu b ed admission 2026 last date at 140,
// tamil nadu teachers education university b ed admission at 98, tnteu application form 2026 at 53.
//
// THE HONESTY PROBLEM THIS PAGE HAD TO SOLVE. Most of that demand is for things only TNTEU can
// publish - exam dates, results, time tables, application forms, last dates. We cannot print any
// of them, for the same reason /admissions no longer prints an admission date. So this page does
// not try to BE TNTEU. It explains what TNTEU is, what it decides versus what a college decides,
// and routes each question to the exact TNTEU page that answers it.
//
// EVERY OUTBOUND LINK WAS FETCHED BEFORE IT WAS WRITTEN. All nine returned 200 on 2026-08-27.
// That rule exists because on 2026-08-25 an earlier fix named TNGASA as the B.Ed authority from
// what the name sounded like, and it was wrong, and it was live on 15 URLs for two hours.
//
// The two facts quoted about TNTEU itself - the enacting Act and the NAAC line - are verbatim
// from tnteu.ac.in and are attributed to it on the page, not asserted as ours.
//
// NOT CLAIMED HERE, because none of it was verified: any exam date, any result, any application
// deadline, any eligibility rule, and the claim that TNTEU's affiliated-colleges list names JKKN.
// That list is a district drill-down and JKKN does not appear on the landing page, so the page
// states our affiliation as our own statement and links TNTEU's list for the reader to check.

export const metadata = seoMetadata(
  'TNTEU B.Ed 2026 - What the University Decides and Where It Publishes It',
  'Tamil Nadu Teachers Education University (TNTEU) awards the B.Ed degree and sets the academic calendar, syllabus and examinations. Here is what TNTEU decides, what a college decides, and the exact TNTEU page for each question.',
  '/blog/tnteu-b-ed-2026',
  {
    keywords: [
      'tnteu b ed admission 2026',
      'tnteu admission 2026',
      'tamil nadu teachers education university b ed admission',
      'tnteu application form 2026',
      'tnteu eligibility criteria',
      'tnteu counselling 2026',
    ],
    absolute: true,
  },
)

// Every href below was fetched on 2026-08-27 and returned 200. Do not add one without doing that.
const TNTEU_PAGES = [
  {
    q: 'Admission notifications and last dates',
    href: 'https://tnteu.ac.in/notifications.php',
    label: 'TNTEU notifications',
    note: 'Where the university posts its own announcements. This is the page to watch, not a college website.',
  },
  {
    q: 'Exam dates, semester schedule, academic year',
    href: 'https://tnteu.ac.in/academic_calendar.php',
    label: 'TNTEU academic calendar',
    note: 'The calendar the whole affiliated system runs on.',
  },
  {
    q: 'Examinations, results and anything the exam office handles',
    href: 'https://tnteu.ac.in/controller_of_examinations.php',
    label: 'TNTEU Controller of Examinations',
    note: 'The office responsible for the examination side.',
  },
  {
    q: 'What you will actually study',
    href: 'https://tnteu.ac.in/bed_syllabus.php',
    label: 'TNTEU B.Ed syllabus',
    note: 'The syllabus is set by the university, so it is the same at every affiliated college.',
  },
  {
    q: 'Which colleges are affiliated',
    href: 'https://tnteu.ac.in/affiliated_colleges.php',
    label: 'TNTEU affiliated colleges',
    note: 'A district-wise list. Pick Namakkal to see the colleges in our district.',
  },
  {
    q: 'Examination fees',
    href: 'https://tnteu.ac.in/exam_fees.php',
    label: 'TNTEU exam fees',
    note: 'University examination fees, separate from a college tuition fee.',
  },
]

const DECIDES = [
  {
    who: 'TNTEU decides',
    colour: 'bg-[#006837]',
    items: [
      'The syllabus you study, identical across every affiliated college',
      'The academic calendar and the examination schedule',
      'The examinations themselves and the results',
      'Which colleges are affiliated, and their sanctioned intake',
      'The degree certificate you finally receive',
    ],
  },
  {
    who: 'The college decides',
    colour: 'bg-[#7cb983]',
    items: [
      'Whether it has a self-financing seat available for you today',
      'Its own tuition fee, hostel and transport charges',
      'Teaching quality, faculty, and the school where you do teaching practice',
      'Its own application process for self-financing seats',
      'Facilities, placement support and day-to-day student life',
    ],
  },
]

const FAQS = [
  {
    q: 'What is TNTEU?',
    a: 'Tamil Nadu Teachers Education University, based in Chennai. Its own website states it was created by the Government of Tamil Nadu under Act No. 33 of 2008. It is the university that sets the B.Ed syllabus and examinations in Tamil Nadu and awards the degree.',
  },
  {
    q: 'Is my B.Ed degree from JKKN or from TNTEU?',
    a: 'From TNTEU. JKKN College of Education is an affiliated college, so you study here and the university awards the degree. That is why the syllabus and the examination schedule are the same at every affiliated college in the state.',
  },
  {
    q: 'When is the TNTEU B.Ed admission last date for 2026?',
    a: 'We are not printing a date. Admission dates are announced by the state and the university, not by a college, and an approximate date on a college website is how an applicant misses a real one. The TNTEU notifications page linked above is where it appears.',
  },
  {
    q: 'Where do I find the TNTEU exam time table or result?',
    a: 'On TNTEU, not here. The academic calendar and the Controller of Examinations pages linked above are the university surfaces for that. We do not republish exam dates or results, because a stale copy of either is worse than no copy.',
  },
  {
    q: 'Can I apply to JKKN while I wait for the TNTEU process?',
    a: 'Yes. JKKN self-financing seats run on our own cycle and are open now, and applying to us does not stop you applying through the government route. Most applicants do both.',
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

export default function TnteuBEdPage() {
  return (
    <>
      <Header />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: 'TNTEU B.Ed 2026', href: '/blog/tnteu-b-ed-2026' },
        ]}
      />
      <JsonLd data={faqSchema} />

      <main className="min-h-screen bg-[#FBFBEE]">
        {/* Hero */}
        <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-4">
              THE UNIVERSITY BEHIND YOUR DEGREE
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-5">
              TNTEU and Your B.Ed &mdash; What the University Decides, and Where It Says So
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Most people searching for TNTEU want one specific thing &mdash; a date, a result, a
              form. This page tells you which of those belongs to the university, which belongs to
              a college, and exactly where each one is published.
            </p>
          </div>
        </section>

        {/* Quick answer */}
        <section className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border-l-4 border-[#006837] bg-white p-6 sm:p-8">
              <p className="text-base sm:text-lg text-[#002309] leading-relaxed font-medium">
                Tamil Nadu Teachers Education University awards your B.Ed and sets the syllabus,
                the academic calendar and the examinations. JKKN College of Education is an{' '}
                <strong>affiliated college</strong> &mdash; you study here, TNTEU awards the
                degree. So a syllabus or an exam date is a TNTEU question, and a seat or a fee is a
                college question.
              </p>
            </div>
          </div>
        </section>

        {/* Who decides what */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-3">
              Who Decides What
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              Getting this split right saves most of the confusion, and it tells you who to ask.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {DECIDES.map((d) => (
                <div
                  key={d.who}
                  className="rounded-2xl bg-[#FBFBEE] border border-[#7cb983]/30 p-5 sm:p-6"
                >
                  <span
                    className={`inline-block ${d.colour} text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-4`}
                  >
                    {d.who.toUpperCase()}
                  </span>
                  <ul className="space-y-2">
                    {d.items.map((i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                        <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Routing table */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-3">
              Where TNTEU Publishes Each Thing
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              We do not republish university dates, results or forms. A stale copy of any of them
              is worse than no copy. Go to the source.
            </p>
            <div className="space-y-4">
              {TNTEU_PAGES.map((p) => (
                <div key={p.href} className="rounded-xl bg-white border border-[#7cb983]/30 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    {p.q}
                  </p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#006837] underline underline-offset-2 hover:text-[#7cb983] text-sm sm:text-base"
                  >
                    {p.label}
                  </a>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{p.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About TNTEU - attributed */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-4">
              About the University Itself
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                TNTEU describes itself on its own website as having been created by the Government
                of Tamil Nadu under <strong>Act No. 33 of 2008</strong>, and states that it holds
                UGC 12(B) status and is accredited with an &lsquo;A&rsquo; grade, CGPA 3.17, by
                NAAC in its first cycle. It is based in Chennai.
              </p>
              <p>
                Those are TNTEU&rsquo;s statements about TNTEU, quoted from{' '}
                <a
                  href="https://tnteu.ac.in/about_us.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006837] font-semibold underline underline-offset-2"
                >
                  its own site
                </a>
                , not ours about it.
              </p>
            </div>
          </div>
        </section>

        {/* JKKN's relationship */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-4">
              Where JKKN Fits
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
              JKKN College of Education is NCTE-approved and affiliated to TNTEU, and runs the
              two-year B.Ed across 14 subject specialisations. You can check the affiliated-college
              list on TNTEU&rsquo;s own site, linked above, rather than taking our word for it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/admissions"
                className="inline-block bg-[#006837] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#7cb983] transition-colors"
              >
                B.Ed admission at JKKN
              </Link>
              <Link
                href="/blog/campus/the-university-behind-your-bed-degree"
                className="inline-block bg-white text-[#006837] border-2 border-[#006837] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#FBFBEE] transition-colors"
              >
                Who actually awards your degree
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-6">
              Questions People Actually Ask
            </h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.q} className="rounded-xl bg-[#FBFBEE] border border-[#7cb983]/30 p-5">
                  <h3 className="font-bold text-[#002309] mb-2 text-sm sm:text-base">{f.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
