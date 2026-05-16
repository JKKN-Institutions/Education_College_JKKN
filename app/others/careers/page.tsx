import { seoMetadata } from '@/lib/seo-metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = seoMetadata(
  'Careers',
  'Job openings and career opportunities at JKKN College of Education — join our faculty and staff team in Namakkal.',
  '/others/careers',
  { keywords: ['JKKN careers', 'teaching jobs Namakkal', 'college faculty jobs Tamil Nadu'], robots: { index: false, follow: false } }
);

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#1e7f4e' }}>
            CAREERS
          </h1>
          <iframe
            src="https://jobs.cvviz.com/jkkn_institutions"
            className="w-full border-0"
            style={{ height: '80vh', minHeight: '600px' }}
            title="JKKN Careers"
            allowFullScreen
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
