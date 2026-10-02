import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { seoMetadata } from '@/lib/seo-metadata';
import { siteConfig } from '@/lib/site-config';
import { namakkalBedColleges, TNTEU_LIST_URL, TNTEU_LIST_READ_ON } from '@/lib/namakkal-bed-colleges';

// GL6-373, added 2026-10-01. "b ed colleges in namakkal" and "b ed colleges in namakkal district"
// had 0 GSC impressions over 16 months: they ask for a LIST, and this site had none. The page
// gives the JKKN facts first, then the district list exactly as TNTEU publishes it.
// Sources:
//  - 62 km: Google Maps, Namakkal Bus Stand to JKKN College of Education, fastest route 61.9 km,
//    read 2026-10-01 (the user asked for it to be measured rather than estimated).
//  - 18 km to Erode: the user's Maps measurement, same campus as Dental and Pharmacy.
//  - Rs 35,000 a year, 100 seats, 14 subjects, two admission routes: same sources as
//    /fee-structure, /admissions and /b-ed-college-near-erode.
//  - The list, 32 colleges and 3,500 seats: lib/namakkal-bed-colleges.ts.

const PATH = '/b-ed-colleges-in-namakkal-district';

const totalIntake = namakkalBedColleges.reduce((sum, c) => sum + c.intake, 0);
const totalColleges = namakkalBedColleges.length;

export const metadata = seoMetadata(
  'B.Ed Colleges in Namakkal District - JKKN College of Education',
  `JKKN College of Education: a B.Ed college in Namakkal district, at Komarapalayam. Fee, seats, how to apply, plus the TNTEU list of all ${totalColleges} district B.Ed colleges.`,
  PATH,
  {
    absolute: true,
    keywords: ['B.Ed colleges in Namakkal district', 'B.Ed college in Namakkal', 'Namakkal B.Ed colleges list', 'JKKN College of Education'],
  },
);

const faqs: { q: string; a: string }[] = [
  {
    q: 'Is JKKN College of Education in Namakkal district?',
    a: 'Yes. JKKN College of Education is at Natarajapuram, Komarapalayam, in Namakkal district, on NH-544 (the Salem to Coimbatore highway). It is recognised by NCTE and affiliated to Tamil Nadu Teachers Education University (TNTEU).',
  },
  {
    q: 'How many B.Ed colleges are there in Namakkal district?',
    a: `The TNTEU list of affiliated colleges shows ${totalColleges} B.Ed colleges in Namakkal district, with a combined intake of ${totalIntake.toLocaleString('en-IN')} seats a year (read on ${TNTEU_LIST_READ_ON}). The full list is on this page.`,
  },
  {
    q: 'How far is JKKN College of Education from Namakkal town?',
    a: 'About 62 km by road from Namakkal bus stand. The campus is at Komarapalayam, in the west of the district, about 18 km from Erode.',
  },
  {
    q: 'What is the B.Ed fee at JKKN College of Education?',
    a: 'Rs 35,000 a year tuition under the Management Quota. Government Quota fees follow Tamil Nadu Government norms. Hostel and transport are optional and charged separately.',
  },
  {
    q: 'How many B.Ed seats does JKKN College of Education have?',
    a: '100 NCTE sanctioned seats a year, shared across 14 subject specialisations, in a 2-year, 4-semester programme.',
  },
  {
    q: 'Is there a government B.Ed college in Namakkal district?',
    a: 'Yes. The TNTEU list includes one government college of education in the district, at Komarapalayam. Government seats are filled through the state counselling route. For JKKN self-financing seats you apply to the college directly.',
  },
];

const facts: { label: string; value: string; detail: string }[] = [
  { label: 'District', value: 'Namakkal', detail: 'Komarapalayam, on NH-544' },
  { label: 'Tuition', value: '₹35,000', detail: 'Per year, Management Quota' },
  { label: 'Intake', value: '100', detail: 'NCTE sanctioned seats a year' },
  { label: 'Subjects', value: '14', detail: 'B.Ed specialisations' },
];

export default function BedCollegesNamakkalDistrictPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Admissions', href: '/admissions' },
          { name: 'B.Ed Colleges in Namakkal District', href: PATH },
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
              Namakkal District
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#006837] mb-3">
              B.Ed Colleges in Namakkal District — JKKN College of Education, Komarapalayam
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              JKKN College of Education is a B.Ed college in Namakkal district, at Komarapalayam on
              NH-544. This page sets out our fee, seats and how to apply, followed by the full list of{' '}
              {totalColleges} B.Ed colleges in the district as Tamil Nadu Teachers Education University
              publishes it.
            </p>
          </div>

          {/* Key facts */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-xl border border-gray-200 bg-[#006837]/5 p-4 text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{f.label}</div>
                <div className="text-2xl sm:text-3xl font-bold text-[#006837] my-1">{f.value}</div>
                <div className="text-xs text-gray-600">{f.detail}</div>
              </div>
            ))}
          </div>

          {/* JKKN programme */}
          <section className="mt-12 rounded-xl border-l-4 border-[#006837] bg-[#FBFBEE] p-5">
            <h2 className="text-lg sm:text-xl font-bold text-[#006837] mb-2">
              B.Ed at JKKN College of Education
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              A 2-year, 4-semester Bachelor of Education, recognised by the National Council for
              Teacher Education since the 2016-17 session and affiliated to TNTEU, Chennai. The
              sanctioned intake is 100 seats a year across 14 subject specialisations. You need a
              bachelor&apos;s degree with at least 50% marks (45% for reserved categories).
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <Link href="/departments" className="font-semibold text-[#006837] underline underline-offset-2">
                The 14 subjects
              </Link>
              <Link href="/admissions/computer-science" className="font-semibold text-[#006837] underline underline-offset-2">
                B.Ed Computer Science
              </Link>
              <Link href="/fee-structure" className="font-semibold text-[#006837] underline underline-offset-2">
                Fee structure
              </Link>
              <Link href="/about/ncte-approval" className="font-semibold text-[#006837] underline underline-offset-2">
                NCTE approval
              </Link>
            </div>
          </section>

          {/* Getting here */}
          <section className="mt-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3">
              Where We Are in the District
            </h2>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                <span>
                  <strong>Campus:</strong> Natarajapuram, Komarapalayam, on NH-544 (the Salem to
                  Coimbatore highway), in the west of Namakkal district.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                <span>
                  <strong>From Namakkal town:</strong> about 62 km by road from Namakkal bus stand.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                <span>
                  <strong>From Salem and Sankagiri:</strong> about 57 km from Salem and about 18 km
                  from Sankagiri, along NH-544. See{' '}
                  <Link href="/b-ed-college-near-salem" className="font-semibold text-[#006837] underline underline-offset-2">
                    B.Ed for applicants near Salem
                  </Link>
                  .
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                <span>
                  <strong>From Erode and Bhavani:</strong> about 18 km from Erode, across the Cauvery
                  from Bhavani. See{' '}
                  <Link href="/b-ed-college-near-erode" className="font-semibold text-[#006837] underline underline-offset-2">
                    B.Ed for applicants near Erode
                  </Link>
                  .
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                <span>
                  <strong>College bus and hostel:</strong> the stop and fee depend on your route, so
                  ask the admission office. See{' '}
                  <Link href="/facilities/transport" className="font-semibold text-[#006837] underline underline-offset-2">
                    transport
                  </Link>{' '}
                  and{' '}
                  <Link href="/facilities/hostel" className="font-semibold text-[#006837] underline underline-offset-2">
                    hostel
                  </Link>
                  .
                </span>
              </li>
            </ul>
          </section>

          {/* How to apply */}
          <section className="mt-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3">
              How to Apply
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Tamil Nadu has two separate B.Ed admission routes and they do not share an application
              form. The government counselling route opens on the state notification. For JKKN
              self-financing seats you apply to the college directly, and there is no state merit
              list to wait for. Applying to both is normal.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={siteConfig.admissionFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#006837] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#7cb983] transition-colors"
              >
                Apply Online
              </a>
              <Link
                href="/admissions"
                className="inline-block border border-[#006837] text-[#006837] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#006837]/5 transition-colors"
              >
                Both routes explained
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-block border border-[#006837] text-[#006837] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#006837]/5 transition-colors"
              >
                Call the admission office
              </a>
            </div>
          </section>

          {/* TNTEU list */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3">
              All {totalColleges} B.Ed Colleges in Namakkal District (TNTEU List)
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Every B.Ed college in Namakkal district affiliated to Tamil Nadu Teachers Education
              University, in the order TNTEU lists them, with the college code and the annual intake
              TNTEU publishes. Combined intake: {totalIntake.toLocaleString('en-IN')} seats a year.
              Fees and admission dates differ between colleges, so check them with each college.
            </p>
            <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="text-left px-4 py-3 font-semibold">TNTEU Code</th>
                    <th className="text-left px-4 py-3 font-semibold">College</th>
                    <th className="text-left px-4 py-3 font-semibold">Area</th>
                    <th className="text-right px-4 py-3 font-semibold">B.Ed Intake</th>
                  </tr>
                </thead>
                <tbody>
                  {namakkalBedColleges.map((c, i) => (
                    <tr
                      key={c.code}
                      className={c.isJkkn ? 'bg-[#7cb983]/25 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-[#006837]/5'}
                    >
                      <td className="px-4 py-2.5 text-gray-600">{c.code}</td>
                      <td className="px-4 py-2.5 text-gray-800">{c.name}</td>
                      <td className="px-4 py-2.5 text-gray-600">{c.area}</td>
                      <td className="px-4 py-2.5 text-right text-gray-800">{c.intake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Source:{' '}
              <a href={TNTEU_LIST_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                TNTEU affiliated colleges
              </a>
              , district Namakkal, course B.Ed, read on {TNTEU_LIST_READ_ON}. The list changes; TNTEU&apos;s
              page is the current record.
            </p>
          </section>

          {/* FAQ - text identical to the FAQPage JSON-LD above (both read `faqs`) */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4">
              Questions about B.Ed in Namakkal District
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5">
                  <h3 className="font-semibold text-[#006837]">{f.q}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
