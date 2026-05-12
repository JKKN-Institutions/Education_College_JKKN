'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';

const Header = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActiveRoute = (itemHref: string) => {
    if (pathname === itemHref) return true;
    if (itemHref !== '/' && pathname.startsWith(itemHref)) return true;
    return false;
  };

  const navItems = [
    { name: 'HOME', href: '/', hasDropdown: false },
    { name: 'ABOUT', href: '/about', hasDropdown: true },
    { name: 'DEPARTMENTS', href: '/departments', hasDropdown: true },
    { name: 'ADMISSIONS', href: '/admissions', hasDropdown: false },
    { name: 'GALLERY', href: '/gallery', hasDropdown: false },
    { name: 'BLOG', href: '/blog', hasDropdown: false },
    { name: 'FACILITIES', href: '/facilities', hasDropdown: true },
    { name: 'OTHERS', href: '/others', hasDropdown: true },
    { name: 'CONTACT', href: '/contact', hasDropdown: false },
  ];

  const dropdownMenus: { [key: string]: { name: string; href: string }[] } = {
    ABOUT: [
      { name: 'Our Vision And Mission', href: '/about/vision-mission' },
      { name: 'Our Trust', href: '/about/trust' },
      { name: 'Our Management', href: '/about/management' },
      { name: 'Our Institutions', href: '/about/institutions' },
      { name: "Principal's Message", href: '/about/principal-message' },
      { name: 'NCTE Approval', href: '/about/ncte-approval' },
    ],
    DEPARTMENTS: [
      { name: 'B.Ed Tamil', href: '/departments/tamil' },
      { name: 'B.Ed English', href: '/departments/english' },
      { name: 'B.Ed Zoology', href: '/departments/zoology' },
      { name: 'B.Ed Maths', href: '/departments/maths' },
      { name: 'B.Ed Chemistry', href: '/departments/chemistry' },
      { name: 'B.Ed Computer Science', href: '/departments/computer-science' },
      { name: 'B.Ed Commerce', href: '/departments/commerce' },
      { name: 'B.Ed Physics', href: '/departments/physics' },
      { name: 'B.Ed Botany', href: '/departments/botany' },
      { name: 'B.Ed History', href: '/departments/history' },
      { name: 'B.Ed Economics', href: '/departments/economics' },
      { name: 'B.Ed Political Science', href: '/departments/political-science' },
      { name: 'B.Ed Social Science', href: '/departments/social-science' },
      { name: 'B.Ed Microbiology', href: '/departments/microbiology' },
    ],
    FACILITIES: [
      { name: 'Library', href: '/facilities/library' },
      { name: 'Hostel', href: '/facilities/hostel' },
      { name: 'Class Room', href: '/facilities/class-room' },
      { name: 'Auditorium', href: '/facilities/auditorium' },
      { name: 'Transport', href: '/facilities/transport' },
      { name: 'WIFI', href: '/facilities/wifi' },
      { name: 'Ambulance Services', href: '/facilities/ambulance-services' },
      { name: 'Food Court', href: '/facilities/food-court' },
      { name: 'Bank & Post Office', href: '/facilities/bank-post-office' },
      { name: 'Hospital', href: '/facilities/hospital' },
      { name: 'Seminar Hall', href: '/facilities/seminar-hall' },
    ],
    OTHERS: [
      { name: 'BIOMATRIC LIST', href: '/others/biomatric-list' },
      { name: 'Balance Sheet', href: '/others/balance-sheet' },
      { name: 'Financial details', href: '/others/financial-details' },
      { name: 'Faculty Details', href: '/others/faculty-details' },
      { name: 'Careers', href: '/others/careers' },
      { name: 'Alumni', href: '/others/alumni' },
      { name: 'Privacy policy', href: '/others/privacy-policy' },
    ],
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="relative flex h-20 items-center gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={siteConfig.logoPath}
                alt={siteConfig.name}
                width={250}
                height={60}
                priority
                className="h-10 sm:h-12 lg:h-14 w-auto max-w-[180px] sm:max-w-[220px] lg:max-w-[250px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-1 xl:space-x-2 2xl:space-x-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <button
                    className={`flex items-center text-xs xl:text-sm font-semibold transition-colors duration-200 px-1 xl:px-2 py-2 ${
                      isActiveRoute(item.href)
                        ? 'text-gray-800 border-b-2 border-[#1e7f4e]'
                        : 'text-gray-800 hover:text-gray-600'
                    }`}
                  >
                    {item.name}
                    <svg
                      className="ml-1 h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center text-xs xl:text-sm font-semibold transition-colors duration-200 px-1 xl:px-2 py-2 ${
                      isActiveRoute(item.href)
                        ? 'text-gray-800 border-b-2 border-[#1e7f4e]'
                        : 'text-gray-800 hover:text-gray-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && dropdownMenus[item.name] && (
                  <div className="absolute top-full left-0 pt-2 w-64 z-50">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
                      {dropdownMenus[item.name].map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-5 py-3 text-sm transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                            pathname === subItem.href
                              ? 'bg-[#1e7f4e] text-white'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Apply Now Button */}
          <div className="hidden lg:flex lg:items-center lg:flex-shrink-0">
            <Link
              href={siteConfig.admissionFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 font-bold text-white rounded-lg whitespace-nowrap"
              style={{ backgroundColor: '#0B7845' }}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Apply Now Button */}
          <div className="flex lg:hidden">
            <Link
              href={siteConfig.admissionFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 font-bold text-white rounded-lg text-sm whitespace-nowrap"
              style={{ backgroundColor: '#0B7845' }}
            >
              Apply Now
            </Link>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;
