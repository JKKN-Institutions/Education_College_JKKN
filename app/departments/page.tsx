import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Departments',
  description: 'Explore all 14 B.Ed specialization departments at JKKN College of Education — Tamil, English, Maths, Science, Commerce, and more. NCTE approved, TNTEU affiliated, Namakkal.',
  alternates: { canonical: 'https://edu.jkkn.ac.in/departments' },
  openGraph: {
    title: 'B.Ed Departments | JKKN College of Education',
    description: 'Explore all 14 B.Ed specialization departments at JKKN College of Education, Namakkal.',
    url: 'https://edu.jkkn.ac.in/departments',
  },
};

const departments = [
  { name: 'B.Ed Tamil', href: '/departments/tamil', description: 'Tamil language education specialization.' },
  { name: 'B.Ed English', href: '/departments/english', description: 'English language education specialization.' },
  { name: 'B.Ed Mathematics', href: '/departments/maths', description: 'Mathematics education specialization.' },
  { name: 'B.Ed Physics', href: '/departments/physics', description: 'Physics education specialization.' },
  { name: 'B.Ed Chemistry', href: '/departments/chemistry', description: 'Chemistry education specialization.' },
  { name: 'B.Ed Botany', href: '/departments/botany', description: 'Botany (Biological Science) education specialization.' },
  { name: 'B.Ed Zoology', href: '/departments/zoology', description: 'Zoology education specialization.' },
  { name: 'B.Ed History', href: '/departments/history', description: 'History education specialization.' },
  { name: 'B.Ed Economics', href: '/departments/economics', description: 'Economics education specialization.' },
  { name: 'B.Ed Commerce', href: '/departments/commerce', description: 'Commerce education specialization.' },
  { name: 'B.Ed Computer Science', href: '/departments/computer-science', description: 'Computer Science education specialization.' },
  { name: 'B.Ed Political Science', href: '/departments/political-science', description: 'Political Science education specialization.' },
  { name: 'B.Ed Social Science', href: '/departments/social-science', description: 'Social Science education specialization.' },
  { name: 'B.Ed Microbiology', href: '/departments/microbiology', description: 'Microbiology education specialization.' },
];

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Departments', href: '/departments' },
      ]} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'B.Ed Programmes at JKKN College of Education',
        description: 'All 14 B.Ed specialization courses offered at JKKN College of Education, Namakkal.',
        itemListElement: departments.map((d, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: d.name,
          url: `https://edu.jkkn.ac.in${d.href}`,
        })),
      }} />
      <Header />

      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1e7f4e' }}>
            DEPARTMENTS
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-12 max-w-3xl">
            JKKN College of Education offers 14 B.Ed specializations under NCTE approval and TNTEU affiliation. Choose your teaching subject and begin your journey as an educator.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {departments.map((dept) => (
              <Link
                key={dept.href}
                href={dept.href}
                className="block p-6 bg-white border-2 border-gray-200 hover:border-[#006837] rounded-lg transition-colors group"
              >
                <h2 className="text-base font-bold mb-2 group-hover:text-[#006837]" style={{ color: '#1e7f4e' }}>
                  {dept.name}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {dept.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
