import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  'Fee Structure',
  'Fee structure for B.Ed programmes at JKKN College of Education, Namakkal — Management Quota and Government Quota details.',
  '/fee-structure',
  { keywords: ['B.Ed fee structure', 'JKKN fee structure', 'B.Ed course fees Namakkal'] }
);

const bedCourses = [
  'Tamil',
  'English',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Botany',
  'Zoology',
  'Commerce',
  'Economics',
  'History',
  'Political Science',
  'Social Science',
  'Microbiology',
  'Computer Science',
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
              B.Ed Programme Fee Details
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Annual fee structure for the 2-year B.Ed programme at JKKN College of Education, Namakkal.
            </p>
          </div>

          {/* Fee Table */}
          <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th className="text-left px-5 py-4 font-semibold w-8">#</th>
                  <th className="text-left px-5 py-4 font-semibold">Programme</th>
                  <th className="text-center px-5 py-4 font-semibold">GQ (Govt. Quota)</th>
                  <th className="text-center px-5 py-4 font-semibold">MQ (Mgmt. Quota)</th>
                </tr>
              </thead>
              <tbody>
                {bedCourses.map((subject, index) => (
                  <tr
                    key={subject}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-[#006837]/5'}
                  >
                    <td className="px-5 py-3.5 text-gray-500 font-medium">{index + 1}</td>
                    <td className="px-5 py-3.5 font-medium text-gray-800">
                      B.Ed — {subject}
                    </td>
                    <td className="px-5 py-3.5 text-center text-[#006837] font-medium">
                      As Per Govt Norms
                    </td>
                    <td className="px-5 py-3.5 text-center font-semibold text-[#006837]">
                      &#8377;35,000
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Note */}
          <p className="mt-5 text-xs text-gray-500 text-center">
            * Fees are per annum. Government Quota fees are fixed as per Tamil Nadu Government norms and are subject to change.
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
}
