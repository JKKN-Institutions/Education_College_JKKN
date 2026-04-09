import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const Footer = () => {
  return (
    <footer className="bg-[#006837] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - College Info & Map */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-white">
              {siteConfig.name.toUpperCase()}
            </h3>

            {/* Google Map Embed */}
            <div className="mb-6 rounded-lg overflow-hidden aspect-video sm:aspect-auto">
              <iframe
                src={siteConfig.mapsEmbedUrl}
                width="100%"
                height="200"
                style={{ border: 0, minHeight: '150px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${siteConfig.name} Location`}
                className="w-full h-[150px] sm:h-[200px] lg:h-[250px]"
              />
            </div>

            <p className="text-base font-semibold">
              Best Innovation Focused<br />
              Multi-Disciplinary Campus
            </p>
          </div>

          {/* Middle Column - Our Institutions */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-white">
              OUR INSTITUTIONS
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="https://dental.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200 text-sm sm:text-base py-1 inline-block">
                  JKKN Dental College and Hospital
                </Link>
              </li>
              <li>
                <Link href="https://ahs.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200 text-sm sm:text-base py-1 inline-block">
                  JKKN College Of Allied Health Science
                </Link>
              </li>
              <li>
                <Link href="https://pharmacy.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200 text-sm sm:text-base py-1 inline-block">
                  JKKN College of Pharmacy
                </Link>
              </li>
              <li>
                <Link href="https://nursing.sresakthimayeil.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200 text-sm sm:text-base py-1 inline-block">
                  Srisakthimayeil Institute of Nursing and Research
                </Link>
              </li>
              <li>
                <Link href="https://edu.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200 text-sm sm:text-base py-1 inline-block">
                  JKKN College of Education
                </Link>
              </li>
              <li>
                <Link href="https://cas.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200 text-sm sm:text-base py-1 inline-block">
                  JKKN College of Arts and Science (Autonomous)
                </Link>
              </li>
              <li>
                <Link href="https://engg.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200 text-sm sm:text-base py-1 inline-block">
                  JKKN College of Engineering and Technology
                </Link>
              </li>
              <li>
                <Link href="https://school.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200 text-sm sm:text-base py-1 inline-block">
                  JKKN Matriculation Higher Secondary School
                </Link>
              </li>
              <li>
                <Link href="https://nv.jkkn.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200 text-sm sm:text-base py-1 inline-block">
                  Nattraja Vidhyalya
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact Us & Follow Us */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-white">
              CONTACT US
            </h3>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div>
                <a href={`tel:${siteConfig.phone}`} className="font-semibold text-sm sm:text-base hover:underline">
                  Call: {siteConfig.phone}
                </a>
              </div>
              <div>
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-sm sm:text-base hover:underline break-all">
                  Email: {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Address:</p>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 pb-2 sm:pb-3 border-b-2 border-white">
              FOLLOW US
            </h3>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/jkkneducation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>

              {/* Twitter */}
              {/* <Link
                href="https://x.com/jkknedu/"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link> */}

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/jkkninstitutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/school/jkkneducation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                href="https://www.youtube.com/jkkninstitutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/30">
          <p className="text-center text-xs sm:text-sm px-4">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
