import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { JsonLd } from '@/components/JsonLd';

// Every value on this page was read on the regulator's own site on 29 October 2026 (IST) and is
// printed with its source. Sources:
//  - NCTE Southern Regional Committee, recognised institutions list, Tamil Nadu (search "Nattraja")
//  - NCTE continuation order PDF linked from that list (also served here as /pdf/NCTE-Approval.pdf)
//  - NCTE de-recognised institutions list, Tamil Nadu (search "Nattraja" = 0 rows)
//  - TNTEU affiliated colleges list, Namakkal district (print view)
//  - AISHE HE institution directory (Tamil Nadu > Namakkal)
//  - G.O.(D) No.144, Higher Education (G1) Department, 18.06.2026
// The 2021 order number is printed only up to ".../2021": its last digits are handwritten on the
// order, so they wait for the office copy. Education is NOT on NAAC's list of accredited
// institutions (as on 14-08-2025) - never add a NAAC line here without the certificate.
// Do not add a value to this page without opening its official source first.

const AS_ON = '29 October 2026';

const SRC = {
  ncteList:
    'https://web.ncte.gov.in/page-regional-committee-institution-lists/32/tamil-nadu?searchTerm=Nattraja',
  ncteOrder:
    'https://d3swgpghzvje7l.cloudfront.net/WebAdmin/pdf/SRC/4_21_06_2021_637598628008758124.pdf',
  ncteDerec:
    'https://web.ncte.gov.in/page-regional-committee-de-institution-lists/32/tamilnadu?searchTerm=Nattraja',
  tnteu:
    'https://www.tnteu.ac.in/affiliated_colleges_ajax.php?district_id=14&course_id=All&category=All&opcode=1&print=1',
  aishe: 'https://dashboard.aishe.gov.in/hedirectory/#/hedirectory',
  go144: 'https://cms.tn.gov.in/cms_migrated/document/GO/hedu_e_%20144_D_2026.pdf',
};

const records: { label: string; value: string; source: string; href: string; asOn: string }[] = [
  {
    label: 'NCTE recognition',
    value:
      'JKK Nattraja College of Education, NCTE Institute ID NCTE4593081, file SRCAPP2506. Two-year B.Ed, annual intake 100.',
    source: 'NCTE Southern Regional Committee, recognised institutions list (Tamil Nadu)',
    href: SRC.ncteList,
    asOn: AS_ON,
  },
  {
    label: 'Current NCTE order',
    value:
      'Continuation Order F.No.SRC/NCTE/SRCAPP2506/B.Ed./TN/2021, dated 15 April 2021, academic session 2021-2022.',
    source: 'NCTE Southern Regional Committee, order PDF',
    href: SRC.ncteOrder,
    asOn: AS_ON,
  },
  {
    label: 'Earlier NCTE order',
    value:
      'Revised Recognition order SRO/NCTE/SRCAPP2506/B.Ed/TN/2016-17/85013, dated 2 May 2016, academic session 2016-2017.',
    source: 'NCTE Southern Regional Committee (order type from the list; number quoted in the 2021 order)',
    href: SRC.ncteList,
    asOn: AS_ON,
  },
  {
    label: 'NCTE de-recognised list',
    value: 'JKK Nattraja College of Education is not on the NCTE list of de-recognised institutions for Tamil Nadu.',
    source: 'NCTE Southern Regional Committee, de-recognised institutions list (Tamil Nadu)',
    href: SRC.ncteDerec,
    asOn: AS_ON,
  },
  {
    label: 'University affiliation',
    value:
      'Tamil Nadu Teachers Education University (TNTEU), Chennai. Namakkal district, college code 36108, self-financing, B.Ed intake 100.',
    source: 'Tamil Nadu Teachers Education University, affiliated colleges list',
    href: SRC.tnteu,
    asOn: AS_ON,
  },
  {
    label: 'AISHE code',
    value: 'C-57531, an affiliated college, Private Un-Aided, affiliated to Tamil Nadu Teachers Education University, Chennai.',
    source: 'Ministry of Education, AISHE institution directory',
    href: SRC.aishe,
    asOn: AS_ON,
  },
  {
    label: 'Admission rules 2026-27',
    value:
      'B.Ed admission follows the Government of Tamil Nadu guidelines for Government, Aided and Self-Financing colleges of education: selection on merit from degree marks, no entrance test.',
    source: 'Government of Tamil Nadu, G.O.(D) No.144, Higher Education (G1) Department',
    href: SRC.go144,
    asOn: '18 June 2026',
  },
];

const keyFacts = [
  'Registered name: JKK Nattraja College of Education, Kumarapalayam, Namakkal district, Tamil Nadu 638183.',
  'NCTE Institute ID NCTE4593081; two-year B.Ed with an annual intake of 100.',
  'Current NCTE order: Continuation Order dated 15 April 2021 (session 2021-2022).',
  'Not on the NCTE de-recognised list for Tamil Nadu.',
  'Affiliated to Tamil Nadu Teachers Education University (TNTEU), college code 36108, self-financing.',
  'AISHE code C-57531.',
  'B.Ed admission 2026-27 follows G.O.(D) No.144 of the Higher Education (G1) Department, dated 18 June 2026.',
];

const faqs = [
  {
    q: 'Is JKKN College of Education recognised by NCTE?',
    also: 'JKKN B.Ed college ku NCTE approval iruka?',
    a: 'Yes. The NCTE Southern Regional Committee list for Tamil Nadu shows JKK Nattraja College of Education, Institute ID NCTE4593081, for a two-year B.Ed with an annual intake of 100. Its current order is the Continuation Order dated 15 April 2021, and the college is not on the NCTE de-recognised list for Tamil Nadu.',
  },
  {
    q: 'Which university is JKKN College of Education affiliated to?',
    also: 'JKKN B.Ed entha university kitta affiliate?',
    a: 'JKKN College of Education is affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The university list of affiliated colleges shows it in Namakkal district under college code 36108, in the self-financing category, with a B.Ed intake of 100 seats a year.',
  },
  {
    q: 'What is the AISHE code of JKKN College of Education?',
    also: 'JKKN Education college AISHE code enna?',
    a: 'The AISHE code of JKKN College of Education is C-57531. The Ministry of Education AISHE directory lists it as J.K.K. Nattraja College of Education, an affiliated, private unaided college in Namakkal district, affiliated to Tamil Nadu Teachers Education University, Chennai.',
  },
  {
    q: 'What marks do I need for B.Ed admission at JKKN in 2026-27?',
    also: 'B.Ed ku evlo percentage venum?',
    a: 'For JKKN College of Education, the 2026-27 Tamil Nadu guidelines ask for a U.G. degree in your teaching subject with at least 50% (OC), 45% (BC/BC(M)), 43% (MBC/DNC) or 40% (SC/SC(A)/ST). Economics, Commerce and Political Science need a P.G. degree in the same subject with 50%.',
  },
  {
    q: 'Is there an entrance exam or state counselling for B.Ed at JKKN?',
    also: 'JKKN B.Ed ku entrance exam iruka?',
    a: 'No entrance test applies: the 2026-27 Tamil Nadu guidelines select B.Ed students on merit from degree marks. State online counselling covers Government and Government-Aided colleges only. JKKN College of Education is self-financing, so you apply to the college, which announces its admission dates on this website.',
  },
];

export const metadata = seoMetadata(
  'Approvals & Official Data',
  'NCTE Institute ID NCTE4593081, TNTEU college code 36108, AISHE code C-57531 and B.Ed intake 100, each linked to the official record and the date it was read.',
  '/about/approvals',
  { keywords: ['JKKN College of Education NCTE approval', 'JKKN B.Ed TNTEU code', 'JKKN College of Education AISHE code'] }
);

export default function ApprovalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
          { name: 'Approvals', href: '/about/approvals' },
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

      <main>
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
          <div className="mx-auto max-w-5xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5" style={{ color: '#1e7f4e' }}>
              Approvals and Official Records of JKKN College of Education
            </h1>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              JKKN College of Education, registered as JKK Nattraja College of Education, is recognised by NCTE
              (Institute ID NCTE4593081) for a two-year B.Ed with an intake of 100. It is affiliated to Tamil Nadu
              Teachers Education University (college code 36108) and is listed in AISHE as C-57531. Each fact below
              links to the official record.
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-6">Official records</h2>
            <div className="space-y-4">
              {records.map((r) => (
                <div key={r.label} className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
                  <h3 className="font-bold text-[#002309] mb-2">{r.label}</h3>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed break-words">{r.value}</p>
                  <p className="mt-2 text-xs text-gray-600 break-words">
                    Source:{' '}
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className="underline text-[#006837]">
                      {r.source}
                    </a>
                    , as on {r.asOn}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-700 leading-relaxed">
              Read the NCTE order itself:{' '}
              <a href="/pdf/NCTE-Approval.pdf" target="_blank" rel="noopener noreferrer" className="underline text-[#006837] font-semibold">
                NCTE Continuation Order, 15 April 2021 (PDF)
              </a>
              . Faculty details as filed with the university:{' '}
              <Link href="/others/faculty-details" className="underline text-[#006837] font-semibold">
                faculty details
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#FBFBEE]">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-4">Key facts</h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base text-gray-800">
              {keyFacts.map((k) => (
                <li key={k} className="break-words">
                  {k}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              Sources: NCTE, TNTEU and AISHE records as on {AS_ON}; Government of Tamil Nadu G.O.(D) No.144, 18 June 2026.
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#006837] mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
                  <h3 className="font-semibold text-[#002309]">{f.q}</h3>
                  <p className="mt-1 text-xs text-gray-500">Also asked: {f.also}</p>
                  <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
