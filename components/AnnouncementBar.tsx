'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/site-config';

const defaultAnnouncements = [
  {
    text: `Admissions Open 2026-27 at ${siteConfig.name} – Apply Now and secure your seat!`,
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    text: 'Congratulations to our 2025 graduates – 98%+ Placement achieved!',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2M12 20l3.5-4" />
      </svg>
    ),
  },
  {
    text: 'Internal Examination Schedule for Semester IV released – Check Notice Board.',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    text: `${siteConfig.name} ranked among Top Colleges in the region.`,
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    text: 'Last date to submit scholarship applications is 15th March 2026.',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    text: 'Guest Lecture on "Modern Pedagogy" on 28th February 2026 – All students must attend.',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const bellIcon = (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

interface AnnouncementBarProps {
  notices?: string[];
}

export default function AnnouncementBar({ notices }: AnnouncementBarProps) {
  const announcements =
    notices && notices.length > 0
      ? notices.map((text) => ({ text, icon: bellIcon }))
      : defaultAnnouncements;

  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setCurrent(0);
  }, [notices]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % announcements.length);
        setVisible(true);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div className="bg-[#002309] border-b-2 border-[#006837]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3">
          {/* Label */}
          <div className="flex-shrink-0 bg-[#006837] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
            Announcements
          </div>

          {/* Divider */}
          <div className="flex-shrink-0 w-px h-5 bg-[#7cb983]/40" />

          {/* Icon + Text */}
          <div
            className="flex-1 flex items-center gap-2 overflow-hidden"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}
          >
            <span className="text-[#7cb983] flex-shrink-0">
              {announcements[current].icon}
            </span>
            <p className="text-white text-xs sm:text-sm font-medium truncate">
              {announcements[current].text}
            </p>
          </div>

          {/* Dot indicators */}
          <div className="flex-shrink-0 hidden sm:flex items-center gap-1.5">
            {announcements.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setVisible(true); }}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i === current ? '#7cb983' : 'rgba(124,185,131,0.35)',
                  transform: i === current ? 'scale(1.3)' : 'scale(1)',
                }}
                aria-label={`Announcement ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
