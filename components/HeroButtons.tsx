'use client';

// 2026-10-16: the Apply link moved out - phones get Get a Call Back under the heading, lg+ the form card.

export default function HeroButtons() {
  const scrollToProgramme = () => {
    document.getElementById('bed-programme')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
      <button
        onClick={scrollToProgramme}
        className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-[#006837] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 text-center text-sm sm:text-base"
      >
        Explore Programme
      </button>
    </div>
  );
}
