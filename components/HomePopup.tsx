'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export function HomePopup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
      <div className="relative max-w-sm w-full lg:max-w-lg xl:max-w-xl">
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 z-10 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
        <a
          href="https://www.jkkn.ai/apply/jkkn-admission-2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/education-pop-up-poster.jpg"
            alt="JKKN Admission 2026"
            width={500}
            height={700}
            className="rounded-lg w-full h-auto cursor-pointer shadow-2xl"
            priority
          />
        </a>
      </div>
    </div>
  );
}
