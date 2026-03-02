'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export default function HeroButtons() {
  const scrollToProgramme = () => {
    document.getElementById('bed-programme')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
      <Link
        href={siteConfig.admissionFormUrl}
        className="inline-block bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 text-center text-sm sm:text-base"
      >
        Apply Now for 2026-27
      </Link>
      <button
        onClick={scrollToProgramme}
        className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-[#006837] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 text-center text-sm sm:text-base"
      >
        Explore Programme
      </button>
    </div>
  );
}
