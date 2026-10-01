import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { seoMetadata } from '@/lib/seo-metadata';

// GL6-378, added 2026-10-01. "ncte approved b ed colleges in tamilnadu" and "approved b ed colleges in
// tamilnadu" had 0 GSC impressions in 16 months, and Google's People Also Ask carries "How do I check if
// my college is NCTE approved?". This page answers that with the two official records and shows ours.
// Sources, all read 2026-10-01:
//  - NCTE recognised-institutions list, Tamil Nadu (Southern Regional Committee):
//    https://web.ncte.gov.in/page-regional-committee-institution-lists/32/tamil-nadu - searching
//    "Nattraja" returns "JKK Nattraja College of Education", Institute ID NCTE4593081, file SRCAPP2506,
//    B.Ed intake 100, orders 02-05-2016 (2016-2017, Revised Recognition) and 15-04-2021 (2021-2022,
//    Restoration/Continuation). Searching "JKKN" returns nothing, so the record name is shown (user
//    decision 2026-10-01).
//  - TNTEU affiliated colleges, course B.Ed, all 37 districts: 650 colleges, 66,620 seats; category filter
//    Government 5, Aided 10, Self-Finance 635. Our entry: code 36108, intake 100.
//  - NCTE Regulations 2014, Appendix-4 (B.Ed norms): 2 academic years, completable within 3 years;
//    eligibility 50% in the bachelor's or master's degree; fee only as prescribed, no donation/capitation.
//  - The one-year B.Ed question that Google also shows is NOT answered here: NCTE's regulations page
//    (last modified 2026-09-07) lists no such regulation, and by the user's decision nothing is said
//    without an NCTE source.

const PATH = '/ncte-approved-b-ed-colleges-tamil-nadu';
const NCTE_TN_LIST = 'https://web.ncte.gov.in/page-regional-committee-institution-lists/32/tamil-nadu';
const NCTE_DERECOGNISED = 'https://web.ncte.gov.in/page/de-recognized-institutions';
const TNTEU_LIST = 'https://www.tnteu.ac.in/affiliated_colleges.php';
const NCTE_BED_NORMS = 'https://d3swgpghzvje7l.cloudfront.net/website/PDF/regulation/regulation2014/english/appendix4.pdf';

export const metadata = seoMetadata(
  'NCTE Approved B.Ed Colleges in Tamil Nadu: How to Check',
  'How to check whether a B.Ed college in Tamil Nadu is NCTE recognised and TNTEU affiliated, step by step, using the two official lists - with JKKN College of Education as the example.',
  PATH,
  {
    absolute: true,
    keywords: ['NCTE approved B.Ed colleges in Tamil Nadu', 'approved B.Ed colleges in Tamil Nadu', 'how to check NCTE approval', 'TNTEU affiliated colleges'],
  },
);

const steps: { t: string; d: string; href: string; link: string }[] = [
  {
    t: 'Search the NCTE recognised list',
    d: 'Open the NCTE list of recognised institutions for Tamil Nadu (Southern Regional Committee) and search the college name. A recognised college shows its Institute ID, the course (B.Ed), the intake and the date of each NCTE order.',
    href: NCTE_TN_LIST,
    link: 'NCTE list for Tamil Nadu',
  },
  {
    t: 'Check the de-recognised list too',
    d: 'NCTE publishes a separate list of institutions whose recognition was withdrawn. A college can appear in an old directory and still be on this list.',
    href: NCTE_DERECOGNISED,
    link: 'NCTE de-recognised institutions',
  },
  {
    t: 'Search the TNTEU affiliated-colleges list',
    d: 'In Tamil Nadu, B.Ed colleges are affiliated to Tamil Nadu Teachers Education University. Choose the district and the course B.Ed. The college should appear with its college code and intake.',
    href: TNTEU_LIST,
    link: 'TNTEU affiliated colleges',
  },
  {
    t: 'Match the details with the college',
    d: 'The name may differ slightly from the college’s brand name. Match the address and intake, and ask the college for its NCTE order. A recognised college can show it to you.',
    href: '/about/ncte-approval',
    link: 'Our NCTE order',
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'How do I check if a B.Ed college is NCTE approved?',
    a: 'Search the college name in the NCTE list of recognised institutions for Tamil Nadu on web.ncte.gov.in, and check that it is not on the NCTE de-recognised list. Then find it on the TNTEU affiliated-colleges list for its district. A recognised college appears with its Institute ID, the B.Ed course, the intake and the NCTE order dates.',
  },
  {
    q: 'How many B.Ed colleges are there in Tamil Nadu?',
    a: 'The TNTEU affiliated-colleges list shows 650 B.Ed colleges across the 37 districts of Tamil Nadu, with a combined intake of 66,620 seats a year (read on 1 October 2026).',
  },
  {
    q: 'How many government B.Ed colleges are there in Tamil Nadu?',
    a: 'The TNTEU list, filtered by category, shows 5 government and 10 government-aided B.Ed colleges; the remaining 635 are self-financing (read on 1 October 2026).',
  },
  {
    q: 'Is JKKN College of Education NCTE approved?',
    a: 'Yes. The NCTE list for Tamil Nadu shows it as JKK Nattraja College of Education, Institute ID NCTE4593081, B.Ed with an intake of 100, with NCTE orders dated 2 May 2016 and 15 April 2021. TNTEU lists it under Namakkal district with college code 36108 and an intake of 100.',
  },
  {
    q: 'What are the NCTE rules for a regular B.Ed?',
    a: 'Under the NCTE Regulations 2014 (Appendix-4), the B.Ed runs for two academic years and can be completed within three years from admission. Candidates need at least 50% in their bachelor’s or master’s degree, with reservation and relaxation as per government rules. A college may charge only the fee prescribed by the affiliating body or state government, and no donation or capitation fee.',
  },
];

export default function NcteApprovedBedTamilNaduPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Admissions', href: '/admissions' },
          { name: 'NCTE Approved B.Ed Colleges in Tamil Nadu', href: PATH },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Header />

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">

          {/* Title */}
          <div className="text-center mb-10">
            <span className="inline-block bg-[#006837] text-white px-5 py-1.5 rounded-full font-semibold text-sm mb-4 tracking-wide uppercase">
              Before You Apply
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#006837] mb-3">
              NCTE Approved B.Ed Colleges in Tamil Nadu: How to Check
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              A B.Ed counts for teaching jobs only if the college is recognised by the National Council
              for Teacher Education (NCTE). In Tamil Nadu it should also be affiliated to Tamil Nadu
              Teachers Education University (TNTEU). Both are public lists you can check in a few minutes.
              TNTEU lists 650 B.Ed colleges across Tamil Nadu (read on 1 October 2026).
            </p>
          </div>

          {/* Steps */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4">
              Four Steps to Check Any B.Ed College
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((s, i) => (
                <div key={s.t} className="rounded-xl border border-gray-200 bg-white p-4">
                  <h3 className="font-bold text-[#006837] text-sm mb-1">
                    {i + 1}. {s.t}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.d}</p>
                  {s.href.startsWith('http') ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs font-semibold text-[#006837] underline underline-offset-2"
                    >
                      {s.link}
                    </a>
                  ) : (
                    <Link href={s.href} className="inline-block mt-2 text-xs font-semibold text-[#006837] underline underline-offset-2">
                      {s.link}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Our record */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3">
              Example: Our Own Record
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              In the official lists our college appears under its registered name, JKK Nattraja College of
              Education. Search for &quot;Nattraja&quot; &mdash; a search for &quot;JKKN&quot; does not find it.
            </p>
            <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="text-left px-4 py-3 font-semibold">Record</th>
                    <th className="text-left px-4 py-3 font-semibold">What it shows</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['NCTE name', 'JKK Nattraja College of Education'],
                    ['NCTE Institute ID', 'NCTE4593081'],
                    ['NCTE course and intake', 'B.Ed, 100'],
                    ['NCTE orders', '2 May 2016 (session 2016-2017); 15 April 2021 (session 2021-2022)'],
                    ['TNTEU district and code', 'Namakkal, college code 36108'],
                    ['TNTEU B.Ed intake', '100'],
                  ].map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? 'bg-white' : 'bg-[#006837]/5'}>
                      <td className="px-4 py-2.5 font-medium text-gray-800">{k}</td>
                      <td className="px-4 py-2.5 text-gray-700">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Read from the NCTE and TNTEU lists on 1 October 2026. The lists are the current record; check
              them yourself before you apply anywhere.
            </p>
          </section>

          {/* Rules */}
          <section className="mt-10 rounded-xl border-l-4 border-[#006837] bg-[#FBFBEE] p-5">
            <h2 className="text-lg sm:text-xl font-bold text-[#006837] mb-2">
              What NCTE Says a Regular B.Ed Must Be
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Two academic years, completable within three years of admission; at least 50% in the
              qualifying degree; and only the fee prescribed by the affiliating body or state government
              &mdash; no donation or capitation fee.{' '}
              <a href={NCTE_BED_NORMS} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#006837] underline underline-offset-2">
                NCTE B.Ed norms (Regulations 2014, Appendix-4)
              </a>
              . Looking for a distance, part-time or special-education B.Ed? See{' '}
              <Link href="/b-ed-regular-vs-distance-part-time" className="font-semibold text-[#006837] underline underline-offset-2">
                regular vs distance vs part-time B.Ed
              </Link>
              .
            </p>
          </section>

          {/* FAQ - text identical to the FAQPage JSON-LD above (both read `faqs`) */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4">
              Questions about NCTE Approval
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5">
                  <h3 className="font-semibold text-[#006837]">{f.q}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/admissions"
                className="inline-block bg-[#006837] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#7cb983] transition-colors"
              >
                B.Ed admission at JKKN
              </Link>
              <Link
                href="/b-ed-colleges-in-namakkal-district"
                className="inline-block border border-[#006837] text-[#006837] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#006837]/5 transition-colors"
              >
                B.Ed colleges in Namakkal district
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
