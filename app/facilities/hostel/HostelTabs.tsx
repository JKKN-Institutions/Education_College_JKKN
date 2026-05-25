'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HostelTabsProps {
  boysFeatures: string[];
  girlsFeatures: string[];
}

export default function HostelTabs({ boysFeatures, girlsFeatures }: HostelTabsProps) {
  const [activeTab, setActiveTab] = useState<'boys' | 'girls'>('boys');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
      {/* Left Side - Tabs */}
      <div className="lg:col-span-3">
        <div className="flex flex-row lg:flex-col gap-4">
          <button
            onClick={() => setActiveTab('boys')}
            className={`px-6 sm:px-8 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base lg:text-lg border-2 border-black transition-colors ${
              activeTab === 'boys' ? 'bg-white' : 'bg-transparent'
            }`}
            style={{ color: '#000000' }}
          >
            Boys Hostel
          </button>
          <button
            onClick={() => setActiveTab('girls')}
            className={`px-6 sm:px-8 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base lg:text-lg border-2 border-black transition-colors ${
              activeTab === 'girls' ? 'bg-white' : 'bg-transparent'
            }`}
            style={{ color: '#000000' }}
          >
            Girls Hostel
          </button>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="lg:col-span-9">
        {/* Hostel Images */}
        <div className="mb-6 sm:mb-8 lg:mb-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {(activeTab === 'boys'
            ? [
                { src: '/images/boys-hostel-1.jpg', alt: 'Boys Hostel 1' },
                { src: '/images/boys-hostel-2.jpg', alt: 'Boys Hostel 2' },
                { src: '/images/boys-hostel-3.jpg', alt: 'Boys Hostel 3' },
              ]
            : [
                { src: '/images/girls-hostel-1.jpg', alt: 'Girls Hostel 1' },
                { src: '/images/girls-hostel-2.jpg', alt: 'Girls Hostel 2' },
                { src: '/images/girls-hostel-3.jpg', alt: 'Girls Hostel 3' },
              ]
          ).map((img, index) => (
            <div key={index} className="relative w-full h-48 sm:h-56 lg:h-64">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <ul className="space-y-4">
          {(activeTab === 'boys' ? boysFeatures : girlsFeatures).map((feature, index) => (
            <li
              key={index}
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                color: '#4a5568',
                listStyleType: 'square',
                paddingLeft: '0.5rem',
                marginLeft: '1.5rem',
              }}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
