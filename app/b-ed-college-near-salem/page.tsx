import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { seoMetadata } from '@/lib/seo-metadata';
import { siteConfig } from '@/lib/site-config';

// GL6-377, added 2026-10-01. "b ed colleges in salem", "b ed colleges in salem district" and
// "best b ed colleges in salem" had 0 GSC impressions over 16 months, and the site said nothing
// about Salem beyond "also reached from Salem". The college is in Namakkal district, NOT Salem
// district, so nothing here says "in Salem", and nothing claims "best" - the college has no
// ranking or accreditation grade to show. The checklist answers the "best" search honestly.
// Sources:
//  - 57 km: Salem New Bus Stand to the shared campus, OSRM 56.9 km, the figure already live on
//    the Pharmacy and Nursing sites (user decision 2026-10-01: reuse it).
//  - 18 km from Sankagiri: Google Maps, Sankagiri New Bus Stand to JKKN College of Education,
//    fastest route 17.5 km via NH 544, read 2026-10-01.
//  - Rs 35,000, 100 seats, 14 subjects, two admission routes: same sources as /fee-structure and
//    /admissions. By the user's decision no other Salem college is named and no TNTEU Salem list
//    is shown (JKKN is not on it).

const PATH = '/b-ed-college-near-salem';

export const metadata = seoMetadata(
  'B.Ed College near Salem, 57 km - JKKN College of Education',
  'JKKN College of Education, Komarapalayam (Namakkal district) is about 57 km from Salem and 18 km from Sankagiri. NCTE recognised B.Ed, Rs 35,000 a year.',
  PATH,
  {
    absolute: true,
    keywords: ['B.Ed college near Salem', 'B.Ed college near Sankagiri', 'how to choose a B.Ed college', 'JKKN College of Education'],
  },
);

const checklist: { t: string; d: string; ours: string }[] = [
  {
    t: 'NCTE recognition',
    d: 'A B.Ed is valid for teaching jobs only if the college is recognised by the National Council for Teacher Education for the year you join.',
    ours: 'JKKN College of Education: NCTE recognised from the 2016-17 session.',
  },
  {
    t: 'University affiliation',
    d: 'In Tamil Nadu, B.Ed colleges are affiliated to Tamil Nadu Teachers Education University (TNTEU). Check that the college is on its affiliated-colleges list.',
    ours: 'JKKN College of Education is on the TNTEU list for Namakkal district.',
  },
  {
    t: 'Your teaching subject',
    d: 'You can study only the pedagogy subjects the college offers, and your subject depends on your degree.',
    ours: 'JKKN College of Education offers 14 subject specialisations.',
  },
  {
    t: 'The full two-year cost',
    d: 'Ask for tuition for both years, plus the university exam fee, hostel and transport - not tuition alone.',
    ours: 'JKKN College of Education: Rs 35,000 a year tuition (Management Quota); hostel and transport are optional and priced by the office.',
  },
  {
    t: 'Admission route',
    d: 'Government seats come through state counselling; self-financing seats are applied for at the college. Know which seat you are applying for.',
    ours: 'JKKN self-financing seats: apply to the college directly.',
  },
  {
    t: 'Daily travel',
    d: 'Two years of daily travel adds up. Check the route, the time and whether a college bus or hostel is available.',
    ours: 'JKKN College of Education: about 57 km from Salem and about 18 km from Sankagiri, on NH-544.',
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'Is JKKN College of Education in Salem district?',
    a: 'No. JKKN College of Education is at Natarajapuram, Komarapalayam, in Namakkal district, on NH-544 (the Salem to Coimbatore highway). Applicants from the Salem side, especially Sankagiri, often choose it because it is on that highway.',
  },
  {
    q: 'How far is JKKN College of Education from Salem?',
    a: 'About 57 km by road from Salem New Bus Stand, most of it along NH-544.',
  },
  {
    q: 'How far is it from Sankagiri?',
    a: 'About 18 km by road from Sankagiri New Bus Stand, along NH-544.',
  },
  {
    q: 'What is the B.Ed fee at JKKN College of Education?',
    a: 'Rs 35,000 a year tuition under the Management Quota. Government Quota fees follow Tamil Nadu Government norms. Hostel and transport are optional and charged separately.',
  },
  {
    q: 'Is JKKN College of Education the best B.Ed college for Salem students?',
    a: 'We do not claim to be the best, and we have no ranking to show you. Compare any B.Ed college on NCTE recognition, TNTEU affiliation, your teaching subject, the full two-year cost, the admission route and the daily travel. The checklist on this page gives our answer to each.',
  },
  {
    q: 'How do I check whether a B.Ed college is recognised?',
    a: 'Check that the college is recognised by NCTE for your year of admission and that it appears on the TNTEU affiliated-colleges list for its district. A degree from a college that is not recognised is not accepted for teaching jobs.',
  },
];

const facts: { label: string; value: string; detail: string }[] = [
  { label: 'From Salem', value: '~57 km', detail: 'Salem New Bus Stand, by road' },
  { label: 'From Sankagiri', value: '~18 km', detail: 'Along NH-544' },
  { label: 'Tuition', value: '₹35,000', detail: 'Per year, Management Quota' },
  { label: 'Intake', value: '100', detail: 'NCTE sanctioned seats a year' },
];

export default function BedCollegeNearSalemPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Admissions', href: '/admissions' },
          { name: 'B.Ed College near Salem', href: PATH },
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
              For Applicants from Salem
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#006837] mb-3">
              B.Ed College near Salem — JKKN College of Education, Komarapalayam
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              JKKN College of Education is not in Salem district. It is at Komarapalayam in Namakkal
              district, on NH-544 &mdash; about 57 km from Salem and about 18 km from Sankagiri. If you
              are choosing a B.Ed college from the Salem side, this page gives you a checklist to compare
              any college, and our own answer to each point.
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

          {/* Checklist */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3">
              How to Choose a B.Ed College: Six Checks
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              Online &quot;best B.Ed college&quot; lists are compiled by admission portals, not by NCTE or
              TNTEU, so treat them as opinion. These six checks are facts you can verify for any
              college.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checklist.map((c, i) => (
                <div key={c.t} className="rounded-xl border border-gray-200 bg-white p-4">
                  <h3 className="font-bold text-[#006837] text-sm mb-1">
                    {i + 1}. {c.t}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{c.d}</p>
                  <p className="mt-2 text-xs font-semibold text-gray-800 leading-relaxed">{c.ours}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <Link href="/about/ncte-approval" className="font-semibold text-[#006837] underline underline-offset-2">
                Our NCTE approval
              </Link>
              <Link href="/b-ed-colleges-in-namakkal-district" className="font-semibold text-[#006837] underline underline-offset-2">
                TNTEU list for Namakkal district
              </Link>
              <Link href="/departments" className="font-semibold text-[#006837] underline underline-offset-2">
                The 14 subjects
              </Link>
              <Link href="/fee-structure" className="font-semibold text-[#006837] underline underline-offset-2">
                Fee structure
              </Link>
            </div>
          </section>

          {/* Getting here */}
          <section className="mt-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3">
              Getting Here from Salem and Sankagiri
            </h2>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                <span>
                  <strong>From Salem:</strong> about 57 km by road from Salem New Bus Stand, most of it
                  along NH-544, the Salem to Coimbatore highway the campus stands on.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                <span>
                  <strong>From Sankagiri:</strong> about 18 km along NH-544.
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
          <section className="mt-10 rounded-xl border-l-4 border-[#006837] bg-[#FBFBEE] p-5">
            <h2 className="text-lg sm:text-xl font-bold text-[#006837] mb-2">
              How to Apply from Salem
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

          {/* FAQ - text identical to the FAQPage JSON-LD above (both read `faqs`) */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4">
              Questions from Salem-side Applicants
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5">
                  <h3 className="font-semibold text-[#006837]">{f.q}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600">
              Applying from another direction?{' '}
              <Link href="/b-ed-college-near-erode" className="font-semibold text-[#006837] underline underline-offset-2">
                Near Erode
              </Link>{' '}
              &middot;{' '}
              <Link href="/b-ed-colleges-in-namakkal-district" className="font-semibold text-[#006837] underline underline-offset-2">
                Namakkal district
              </Link>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
