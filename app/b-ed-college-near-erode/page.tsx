import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { seoMetadata } from '@/lib/seo-metadata';
import { siteConfig } from '@/lib/site-config';

// GL6-358, added 2026-09-30. "b ed colleges in erode district" and "b ed colleges in erode" had
// 0 GSC impressions on every JKKN property over 16 months, and no page on this site paired B.Ed
// with Erode. This page answers the Erode-side applicant honestly: the college is in Namakkal
// district, NOT in Erode district, so nothing here says "in Erode".
// Sources for every figure on the page:
//  - 18 km: the user's Google Maps measurement from the shared Natarajapuram campus to Erode bus
//    stand (18.4 km, locked 2026-09-21 for Dental and Pharmacy, confirmed for this campus 2026-09-30).
//  - Rs 35,000 a year: the fee sheet row "EDUCATION B.ED - 35000", same figure as /fee-structure.
//  - 100 seats, 14 subjects, recognised since 2016-17: public/pdf/NCTE-Approval.pdf and
//    lib/admissions-data.ts.
//  - Two admission routes: app/admissions/AdmissionRoutes.tsx.
// By the user's decision 2026-09-30 no other Erode college is named, except the one
// disambiguation answer below, which exists because AI engines list the JKKM college's name
// in answers about Erode B.Ed colleges.

const PATH = '/b-ed-college-near-erode';

export const metadata = seoMetadata(
  'B.Ed College near Erode, 18 km - JKKN College of Education',
  'JKKN College of Education, Komarapalayam (Namakkal district) is about 18 km from Erode. NCTE recognised B.Ed, 14 subjects, Rs 35,000 a year. How to apply.',
  PATH,
  {
    absolute: true,
    keywords: ['B.Ed college near Erode', 'B.Ed college near Bhavani', 'B.Ed admission Erode', 'JKKN College of Education'],
  },
);

const faqs: { q: string; a: string }[] = [
  {
    q: 'Is JKKN College of Education in Erode district?',
    a: 'No. JKKN College of Education is at Natarajapuram, Komarapalayam, in Namakkal district. It is about 18 km from Erode by road and across the Cauvery from Bhavani, so many of our Learners come from the Erode side.',
  },
  {
    q: 'How far is JKKN College of Education from Erode?',
    a: 'About 18 km by road from Erode bus stand to the campus on NH-544 at Komarapalayam. The nearest railway station is Erode railway station.',
  },
  {
    q: 'Is there college transport from Erode?',
    a: 'The college bus service runs routes that cover Erode. Stops and the transport fee depend on your route, so ask the admission office for the stop nearest to you and its current fee.',
  },
  {
    q: 'What is the B.Ed fee for a student from Erode?',
    a: 'The same as for every applicant: Rs 35,000 a year tuition under the Management Quota. Government Quota fees follow Tamil Nadu Government norms. Hostel and transport are optional and charged separately.',
  },
  {
    q: 'How do I apply for B.Ed at JKKN from Erode?',
    a: 'Tamil Nadu has two B.Ed admission routes. For JKKN self-financing seats you apply to the college directly, online or at the admission office, and there is no state merit list to wait for. You can keep this application open while the government counselling process runs.',
  },
  {
    q: 'Is JKKN College of Education the same as Annai J.K.K. Sampoorani Ammal College of Education?',
    a: 'No. Annai J.K.K. Sampoorani Ammal College of Education is a separate college at T.N. Palayam, Gobichettipalayam taluk, Erode district, run by a different trust (the JKKM group). It is not part of JKKN. JKKN College of Education is at Komarapalayam, Namakkal district.',
  },
];

const facts: { label: string; value: string; detail: string }[] = [
  { label: 'Distance', value: '~18 km', detail: 'From Erode bus stand, by road' },
  { label: 'District', value: 'Namakkal', detail: 'Komarapalayam, on NH-544' },
  { label: 'Tuition', value: '₹35,000', detail: 'Per year, Management Quota' },
  { label: 'Intake', value: '100', detail: 'NCTE sanctioned seats a year' },
];

export default function BedCollegeNearErodePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Admissions', href: '/admissions' },
          { name: 'B.Ed College near Erode', href: PATH },
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
              For Applicants from Erode
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#006837] mb-3">
              B.Ed College near Erode — JKKN College of Education, Komarapalayam
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              JKKN College of Education is not in Erode district. It is at Komarapalayam in Namakkal
              district, about 18 km from Erode by road and across the Cauvery from Bhavani. If you
              live on the Erode side and want an NCTE recognised B.Ed college, this page sets out the
              distance, the fee and how to apply.
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

          {/* Getting here */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3">
              Getting Here from Erode and Bhavani
            </h2>
            <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                <span>
                  <strong>By road:</strong> about 18 km from Erode bus stand to the campus at
                  Natarajapuram, Komarapalayam, on NH-544 (the Salem to Coimbatore highway).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                <span>
                  <strong>From Bhavani:</strong> Komarapalayam and Bhavani face each other across the
                  Cauvery, so the campus is a short ride from the Bhavani side.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                <span>
                  <strong>By train:</strong> the nearest railway station is Erode railway station.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                <span>
                  <strong>College bus:</strong> routes cover Erode. The stop and the fee depend on
                  where you live, so ask the admission office. See{' '}
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

          {/* The programme */}
          <section className="mt-10 rounded-xl border-l-4 border-[#006837] bg-[#FBFBEE] p-5">
            <h2 className="text-lg sm:text-xl font-bold text-[#006837] mb-2">
              The B.Ed Programme
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              A 2-year, 4-semester Bachelor of Education, recognised by the National Council for
              Teacher Education since the 2016-17 session and affiliated to Tamil Nadu Teachers
              Education University (TNTEU), Chennai. The NCTE sanctioned intake is 100 seats a year,
              shared across 14 subject specialisations. You need a bachelor&apos;s degree with at
              least 50% marks (45% for reserved categories).
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <Link href="/departments" className="font-semibold text-[#006837] underline underline-offset-2">
                The 14 subjects
              </Link>
              <Link href="/fee-structure" className="font-semibold text-[#006837] underline underline-offset-2">
                Fee structure
              </Link>
              <Link href="/about/ncte-approval" className="font-semibold text-[#006837] underline underline-offset-2">
                NCTE approval
              </Link>
              <Link href="/b-ed-colleges-in-namakkal-district" className="font-semibold text-[#006837] underline underline-offset-2">
                B.Ed colleges in Namakkal district
              </Link>
              <Link href="/b-ed-college-near-salem" className="font-semibold text-[#006837] underline underline-offset-2">
                B.Ed near Salem
              </Link>
            </div>
          </section>

          {/* How to apply */}
          <section className="mt-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3">
              How to Apply from Erode
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

          {/* FAQ - text must stay identical to the FAQPage JSON-LD above (both read `faqs`) */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4">
              Questions from Erode-side Applicants
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
