import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogEnquiryBox from "@/components/lead/BlogEnquiryBox";
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  'Fee Structure',
  'B.Ed fee at JKKN College of Education, Namakkal: Rs 35,000 a year tuition (management quota) and what is charged separately, 2026-27.',
  '/fee-structure',
  { keywords: ['B.Ed fee structure', 'JKKN fee structure', 'B.Ed course fees Namakkal'] }
);

// 14 degree-subject rows (the user's choice 2026-11-21: keep 14 rows, add the teaching-subject
// column). Teaching subject per G.O.(D) No.144 (2026-27), as already stated in lib/admissions-data.ts:
// Physics / Chemistry -> Physical Science; Botany / Zoology / Microbiology -> Biological Science;
// Commerce and Economics need a P.G. degree with 50%; Political Science is not one of JKKN's
// 10 teaching subjects (enquiry form + TNTEU faculty return, see /departments/political-science).
const bedCourses: { subject: string; teaching: string }[] = [
  { subject: 'Tamil', teaching: 'Tamil' },
  { subject: 'English', teaching: 'English' },
  { subject: 'Mathematics', teaching: 'Mathematics' },
  { subject: 'Physics', teaching: 'Physical Science' },
  { subject: 'Chemistry', teaching: 'Physical Science' },
  { subject: 'Botany', teaching: 'Biological Science' },
  { subject: 'Zoology', teaching: 'Biological Science' },
  { subject: 'Commerce', teaching: 'Commerce and Accountancy (needs M.Com, 50%)' },
  { subject: 'Economics', teaching: 'Economics (needs M.A. Economics, 50%)' },
  { subject: 'History', teaching: 'History' },
  { subject: 'Political Science', teaching: 'Not one of our 10 teaching subjects - ask the admission office' },
  { subject: 'Social Science', teaching: 'Social Science' },
  { subject: 'Microbiology', teaching: 'Biological Science' },
  { subject: 'Computer Science', teaching: 'Computer Science' },
];

export default function FeeStructurePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">

          {/* Page Title */}
          <div className="text-center mb-10">
            <span className="inline-block bg-[#006837] text-white px-5 py-1.5 rounded-full font-semibold text-sm mb-4 tracking-wide uppercase">
              Fee Structure
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#006837] mb-3">
              B.Ed Programme Fee Details 2026-27
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Annual fee structure for the 2-year B.Ed programme at JKKN College of Education, Namakkal, for the 2026-27 academic year.
            </p>
          </div>

          {/* Fee Table */}
          <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th className="text-left px-3 sm:px-5 py-4 font-semibold w-8">#</th>
                  <th className="text-left px-3 sm:px-5 py-4 font-semibold">Programme</th>
                  <th className="hidden sm:table-cell text-left px-5 py-4 font-semibold">Teaching subject</th>
                  <th className="text-center px-3 sm:px-5 py-4 font-semibold">Tuition per year (Mgmt. Quota)</th>
                </tr>
              </thead>
              <tbody>
                {bedCourses.map(({ subject, teaching }, index) => (
                  <tr
                    key={subject}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-[#006837]/5'}
                  >
                    <td className="px-3 sm:px-5 py-3.5 text-gray-500 font-medium">{index + 1}</td>
                    <td className="px-3 sm:px-5 py-3.5 font-medium text-gray-800">
                      B.Ed — {subject}
                      {/* phones: the teaching subject sits under the name so the fee column stays on screen */}
                      <span className="block sm:hidden mt-1 text-xs font-normal text-gray-600">
                        Teaching subject: {teaching}
                      </span>
                    </td>
                    <td className="hidden sm:table-cell px-5 py-3.5 text-gray-700">
                      {teaching}
                    </td>
                    <td className="px-3 sm:px-5 py-3.5 text-center font-semibold text-[#006837]">
                      &#8377;35,000
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Teaching-subject note (2026-11-21): 14 degree rows, 10 teaching subjects */}
          <p className="mt-4 text-sm text-gray-600 text-center max-w-3xl mx-auto">
            Your degree subject decides your B.Ed teaching subject. The 14 rows above are degree subjects; they lead to 10 teaching subjects under the 2026-27 Tamil Nadu B.Ed guidelines (G.O.(D) No.144).
          </p>

          {/* Footer Note */}
          <p className="mt-5 text-xs text-gray-500 text-center">
            * Tuition is per year, management quota, as published in the JKKN course fee structure. Admission dates for self-financing colleges of education are announced on the college&apos;s own website (Government of Tamil Nadu, G.O.(D) No.144, para VII.1, dated 18 June 2026).
          </p>

          {/* Enquiry form (DEP-114, 2026-11-14): the same card as the top of /admissions */}
          <BlogEnquiryBox sourcePage="fee-structure-top" feeLink={false} />

          {/* B-06, added 2026-08-27. This page was 287 words and an orphan - measured that day,
              neither the homepage nor /admissions nor /blog linked it even once, while it still
              earned 123 impressions and 3 clicks over 90 days at position 5.8.
              Everything added below follows the rule A-06 established the same day: the ONLY fee
              figure with a source is the 35,000 in the table above, from the JKKN course fee
              sheet whose Education row reads EDUCATION B.ED - 35000. Every other charge names
              WHO sets it and tells the reader to ask. No amount is invented, and the scholarship
              block deliberately carries scheme NAMES and no rupee figure - see GL6-257, where a
              Rs 10,000-50,000 claim elsewhere on the site has no source at all.
              Scope was kept deliberately NARROW to JKKN's own fee at the user's decision, so this
              page does not attempt to answer the government-college fee questions that make up
              more than half the measured fee cluster. */}

          {/* What the fee does not cover */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3">
              What Is Charged Separately
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              The figure above is the college tuition fee. These are billed by someone else, or
              depend on choices you make, so we do not print an amount we cannot stand behind.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  t: 'University examination fee',
                  d: 'Set and collected by Tamil Nadu Teachers Education University, not by the college.',
                  link: 'https://tnteu.ac.in/exam_fees.php',
                  linkText: 'TNTEU exam fees',
                },
                {
                  t: 'Hostel',
                  d: 'Optional, and the amount depends on the room and mess option you choose. Ask the admission office for the current figure.',
                },
                {
                  t: 'Transport',
                  d: 'Optional, and priced by route and distance. Ask the admission office for your route.',
                },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-gray-200 bg-white p-4">
                  <h3 className="font-bold text-[#006837] text-sm mb-1">{x.t}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{x.d}</p>
                  {x.link && (
                    <a
                      href={x.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs font-semibold text-[#006837] underline underline-offset-2"
                    >
                      {x.linkText}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Two years */}
          <section className="mt-10 rounded-xl border-l-4 border-[#006837] bg-[#FBFBEE] p-5">
            <h2 className="text-lg sm:text-xl font-bold text-[#006837] mb-2">
              The B.Ed Runs Two Years
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              The tuition figure above is annual, so it is paid once in each of the two years. We
              are not printing a two-year total, because the second year is charged at whatever
              rate is in force then and we will not quote you a number for a year that has not
              been set. Ask the admission office and they will tell you what is confirmed.
            </p>
          </section>

          {/* Scholarships - names only, no amounts */}
          <section className="mt-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3">
              Scholarships You May Be Eligible For
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Several of these are Tamil Nadu government schemes, so the amount is set by the
              state and changes year to year. The current figures are published on the scholarships page, and the
              admission office will tell you which ones you actually qualify for.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Post Matric Scholarship and maintenance grants for SC, SCA, ST, BC-CC, BC, MBC, DNC and BCM candidates',
                'First Graduate scholarship',
                'Community scholarships',
                'JKKN Trust merit scholarship',
                'Naan Mudhalvan scheme',
              ].map((s) => (
                <li key={s} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/scholarships"
              className="inline-block mt-4 text-sm font-semibold text-[#006837] underline underline-offset-2"
            >
              More on scholarships
            </Link>
          </section>

          {/* CTA */}
          <section className="mt-10 text-center">
            <p className="text-sm text-gray-700 mb-4">
              Fees are one part of the decision. The admission page covers eligibility, the
              process and the 10 teaching subjects.
            </p>
            <Link
              href="/admissions"
              className="inline-block bg-[#006837] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#7cb983] transition-colors"
            >
              B.Ed admission 2026-27
            </Link>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
