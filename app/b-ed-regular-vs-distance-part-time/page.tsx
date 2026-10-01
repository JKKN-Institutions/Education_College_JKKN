import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { seoMetadata } from '@/lib/seo-metadata';

// GL6-378, added 2026-10-01. Four of the nine Tamil Nadu keywords ask for courses JKKN College of
// Education does NOT offer: distance, correspondence, part-time and special-education B.Ed. Google's
// local pack even showed JKKN for "part time b ed colleges in tamilnadu". By the user's decision this
// page answers those searches honestly and says plainly that JKKN runs only the regular 2-year B.Ed.
// Sources, read 2026-10-01:
//  - NCTE Regulations 2014, Appendix-4 (regular B.Ed): two academic years, max three; at least 200
//    working days a year; at least 36 hours a week with the physical presence of teachers and student
//    teachers; minimum attendance 80% for course work and practicum, 90% for school internship.
//  - NCTE Regulations 2014, Appendix-10 (B.Ed through Open and Distance Learning): offered only by open
//    universities and ODL directorates/schools; eligible students are (i) trained in-service teachers in
//    elementary education and (ii) candidates who completed an NCTE-recognised teacher education
//    programme through face-to-face mode; two years, max five.
//  - Tamil Nadu Open University, School of Education (tnou.ac.in/SchoolEducation.php): lists a
//    Bachelor of Education (B.Ed.) and a Department of Special Education with a B.Ed Special Education
//    entrance examination; objective "to prepare in-service teachers".
// Nothing here says a course elsewhere is "invalid"; it states what the NCTE norms require.

const PATH = '/b-ed-regular-vs-distance-part-time';
const NCTE_BED = 'https://d3swgpghzvje7l.cloudfront.net/website/PDF/regulation/regulation2014/english/appendix4.pdf';
const NCTE_ODL = 'https://d3swgpghzvje7l.cloudfront.net/website/PDF/regulation/regulation2014/english/appendix10.pdf';
const TNOU_EDU = 'https://www.tnou.ac.in/SchoolEducation.php';
// RCI homepage (read 2026-10-01): mandate "to regulate and monitor services ... to standardise syllabi and to
// maintain a Central Rehabilitation Register of all qualified professionals ... in ... Special Education".
const RCI = 'https://rehabcouncil.nic.in/';

export const metadata = seoMetadata(
  'Regular vs Distance vs Part-time B.Ed in Tamil Nadu',
  'Regular, distance (ODL), part-time and special-education B.Ed in Tamil Nadu compared from the NCTE norms: who each is for and where it is offered. JKKN offers the regular B.Ed only.',
  PATH,
  {
    absolute: true,
    keywords: ['B.Ed distance education Tamil Nadu', 'B.Ed correspondence Tamil Nadu', 'part time B.Ed Tamil Nadu', 'special B.Ed Tamil Nadu', 'regular B.Ed'],
  },
);

const modes: { mode: string; who: string; rules: string; where: string; jkkn: string }[] = [
  {
    mode: 'Regular B.Ed (face-to-face)',
    who: 'Graduates with at least 50% in the bachelor’s or master’s degree',
    rules: 'Two years (max three). At least 36 hours a week with physical presence; 80% attendance for course work, 90% for school internship.',
    where: 'Colleges of education recognised by NCTE and affiliated to TNTEU',
    jkkn: 'Yes — this is the programme we run',
  },
  {
    mode: 'Distance / correspondence B.Ed (ODL)',
    who: 'Trained in-service teachers in elementary education, or those who completed an NCTE-recognised face-to-face teacher education programme',
    rules: 'Two years (max five), through study centres and contact sessions.',
    where: 'Open universities and university ODL directorates only — in Tamil Nadu, for example, Tamil Nadu Open University',
    jkkn: 'No',
  },
  {
    mode: 'Part-time B.Ed',
    who: '—',
    rules: 'The NCTE norms for the regular B.Ed require full working weeks with physical presence and minimum attendance, so the regular B.Ed is not a part-time course. The flexible route NCTE provides is the ODL B.Ed above, for eligible teachers.',
    where: '—',
    jkkn: 'No',
  },
  {
    mode: 'B.Ed Special Education',
    who: 'Those who want to teach learners with disabilities',
    rules: 'A separate programme; special-education teacher training is regulated by the Rehabilitation Council of India (RCI).',
    where: 'In Tamil Nadu, for example, Tamil Nadu Open University runs a B.Ed Special Education with an entrance examination',
    jkkn: 'No',
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'Is B.Ed available in distance mode in Tamil Nadu?',
    a: 'Yes, but only through open universities and university distance-education directorates, and only for eligible candidates. Under NCTE Regulations 2014 (Appendix-10), the distance B.Ed is meant for trained in-service teachers in elementary education and for those who have completed an NCTE-recognised face-to-face teacher education programme. Tamil Nadu Open University lists a B.Ed.',
  },
  {
    q: 'Can I do a B.Ed part-time?',
    a: 'Not as a regular B.Ed. The NCTE norms for the regular B.Ed require at least 36 hours a week with physical presence, 80% attendance for course work and 90% for school internship. If you are already a teacher, check whether you are eligible for the distance B.Ed instead.',
  },
  {
    q: 'Is a non-attending B.Ed valid?',
    a: 'The NCTE norms for the regular B.Ed require physical presence and minimum attendance (80% for course work, 90% for school internship). Before joining any course that promises a B.Ed without attendance, check the institution on the NCTE recognised list and the affiliating university’s list.',
  },
  {
    q: 'Where can I study a special B.Ed in Tamil Nadu?',
    a: 'Special-education teacher training is regulated by the Rehabilitation Council of India (RCI). In Tamil Nadu, Tamil Nadu Open University runs a B.Ed Special Education with an entrance examination. JKKN College of Education does not offer it.',
  },
  {
    q: 'Does JKKN College of Education offer distance, part-time or special B.Ed?',
    a: 'No. JKKN College of Education runs only the regular two-year B.Ed, face to face, at Komarapalayam in Namakkal district, with 14 subject specialisations and 100 NCTE-sanctioned seats a year.',
  },
];

export default function BedModesPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Admissions', href: '/admissions' },
          { name: 'Regular vs Distance vs Part-time B.Ed', href: PATH },
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
              B.Ed Modes Explained
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#006837] mb-3">
              Regular vs Distance vs Part-time B.Ed in Tamil Nadu
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              JKKN College of Education runs only the regular two-year B.Ed. Many people search for a
              distance, correspondence, part-time or special-education B.Ed, so this page sets out what the
              NCTE norms say about each mode, who it is for and where it is offered &mdash; even where that
              is not us.
            </p>
          </div>

          {/* Comparison */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4">
              The Four Modes Side by Side
            </h2>
            <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="text-left px-4 py-3 font-semibold">Mode</th>
                    <th className="text-left px-4 py-3 font-semibold">Who it is for</th>
                    <th className="text-left px-4 py-3 font-semibold">What NCTE requires</th>
                    <th className="text-left px-4 py-3 font-semibold">Where</th>
                    <th className="text-left px-4 py-3 font-semibold">At JKKN?</th>
                  </tr>
                </thead>
                <tbody>
                  {modes.map((m, i) => (
                    <tr key={m.mode} className={i % 2 === 0 ? 'bg-white align-top' : 'bg-[#006837]/5 align-top'}>
                      <td className="px-4 py-3 font-semibold text-gray-800">{m.mode}</td>
                      <td className="px-4 py-3 text-gray-700">{m.who}</td>
                      <td className="px-4 py-3 text-gray-700">{m.rules}</td>
                      <td className="px-4 py-3 text-gray-700">{m.where}</td>
                      <td className="px-4 py-3 font-semibold text-gray-800">{m.jkkn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Sources:{' '}
              <a href={NCTE_BED} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                NCTE Regulations 2014, Appendix-4 (B.Ed)
              </a>
              ;{' '}
              <a href={NCTE_ODL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                Appendix-10 (B.Ed through ODL)
              </a>
              ;{' '}
              <a href={TNOU_EDU} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                Tamil Nadu Open University, School of Education
              </a>
              ;{' '}
              <a href={RCI} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                Rehabilitation Council of India
              </a>
              . Read on 1 October 2026.
            </p>
          </section>

          {/* Check */}
          <section className="mt-10 rounded-xl border-l-4 border-[#006837] bg-[#FBFBEE] p-5">
            <h2 className="text-lg sm:text-xl font-bold text-[#006837] mb-2">
              Whichever Mode You Choose, Check the Institution
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              A B.Ed is accepted for teaching jobs only from an institution NCTE recognises for that
              programme. Our step-by-step guide shows how to check any college on the NCTE and TNTEU lists.
            </p>
            <Link
              href="/ncte-approved-b-ed-colleges-tamil-nadu"
              className="inline-block mt-3 text-sm font-semibold text-[#006837] underline underline-offset-2"
            >
              How to check NCTE approval
            </Link>
          </section>

          {/* FAQ - text identical to the FAQPage JSON-LD above (both read `faqs`) */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4">
              Questions about B.Ed Modes
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
                Regular B.Ed admission at JKKN
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
