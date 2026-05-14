import { seoMetadata } from '@/lib/seo-metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'Scholarships',
  'Scholarship details for B.Ed students at JKKN College of Education, Namakkal. Includes government and trust scholarships for all communities.',
  '/scholarships',
  { keywords: ['JKKN scholarship', 'B.Ed scholarship Namakkal', 'education college scholarship', 'PMSS scholarship'] }
);

export default function Scholarships() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Scholarships', href: '/scholarships' },
      ]} />
      <Header />

      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#1e7f4e' }}>
            SCHOLARSHIPS
          </h1>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify mb-8 sm:mb-10" style={{ color: '#4a5568' }}>
            JKKN College of Education offers various government and trust-funded scholarships for B.Ed students. The following scholarships are available based on community category and eligibility criteria.
          </p>

          {/* SC / SCA / ST / BC-CC Scholarships */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: '#1e7f4e' }}>
              SC / SCA / ST / BC-CC
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm sm:text-base" style={{ color: '#4a5568' }}>
                <thead>
                  <tr style={{ backgroundColor: '#006837', color: '#ffffff' }}>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Scholarship</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Category</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">PMSS (Community Scholarship)</td>
                    <td className="border border-gray-300 px-4 py-3">GQ</td>
                    <td className="border border-gray-300 px-4 py-3 font-medium">₹30,000 / Year</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9f5ef' }}>
                    <td className="border border-gray-300 px-4 py-3">Maintenance Scholarship</td>
                    <td className="border border-gray-300 px-4 py-3">MQ</td>
                    <td className="border border-gray-300 px-4 py-3 font-medium">&lt;₹5,000 / Year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* BC / MBC / DNC / BCM Scholarships */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: '#1e7f4e' }}>
              BC / MBC / DNC / BCM
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm sm:text-base" style={{ color: '#4a5568' }}>
                <thead>
                  <tr style={{ backgroundColor: '#006837', color: '#ffffff' }}>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Scholarship</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Category</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">Trust Scholarship (Merit Based)</td>
                    <td className="border border-gray-300 px-4 py-3">MQ / GQ</td>
                    <td className="border border-gray-300 px-4 py-3 font-medium">₹5,000 – ₹10,000 / Year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* All Community Scholarship */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: '#1e7f4e' }}>
              All Community
            </h2>
            <p className="text-sm sm:text-base mb-4 leading-relaxed" style={{ color: '#4a5568' }}>
              For students from Government / Government Aided Schools (Classes 6–12) from your region.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm sm:text-base" style={{ color: '#4a5568' }}>
                <thead>
                  <tr style={{ backgroundColor: '#006837', color: '#ffffff' }}>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Eligibility</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3">Boys &amp; Girls</td>
                    <td className="border border-gray-300 px-4 py-3 font-medium">₹1,000 / Month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#718096' }}>
            * GQ — Government Quota &nbsp;|&nbsp; MQ — Management Quota. Scholarship amounts are subject to government guidelines and may vary each academic year. Contact the college office for the latest details.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
