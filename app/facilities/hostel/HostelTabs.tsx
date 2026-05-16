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
        {/* Hostel Image */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="relative w-full max-w-[350px] h-48 sm:h-56 lg:h-64">
            <Image
              src={activeTab === 'boys' ? '/images/Boys-hostel.jpg' : '/images/Girls-Hostel.jpg'}
              alt={activeTab === 'boys' ? 'Boys Hostel Building' : 'Girls Hostel Building'}
              fill
              className="object-cover"
              priority
            />
          </div>
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
