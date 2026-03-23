import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center" style={{ backgroundColor: '#f5f0e8', minHeight: 'calc(100vh - 160px)' }}>
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-6xl sm:text-8xl font-bold mb-4" style={{ color: '#006837' }}>404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Page Not Found</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The page you are looking for does not exist or has been moved. Please use the navigation to find what you need.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="px-6 py-3 text-white font-semibold rounded-lg transition-colors" style={{ backgroundColor: '#006837' }}>
              Back to Home
            </Link>
            <Link href="/departments" className="px-6 py-3 font-semibold rounded-lg border-2 transition-colors text-[#006837] border-[#006837] hover:bg-[#006837] hover:text-white">
              Departments
            </Link>
            <Link href="/contact" className="px-6 py-3 font-semibold rounded-lg border-2 transition-colors text-[#006837] border-[#006837] hover:bg-[#006837] hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
