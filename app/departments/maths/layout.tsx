import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'B.Ed Mathematics',
  'B.Ed Mathematics specialization at JKKN College of Education — NCTE approved teacher training in Mathematics education, Namakkal.',
  '/departments/maths',
  { keywords: ['B.Ed Mathematics', 'Maths teacher training', 'B.Ed Maths Tamil Nadu'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed Mathematics',
          description: '2-year B.Ed programme in Mathematics education at JKKN College of Education, Namakkal.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          educationalCredentialAwarded: 'Bachelor of Education (B.Ed)',
          timeRequired: 'P2Y',
          courseCode: 'B.Ed',
          url: 'https://edu.jkkn.ac.in/departments/maths',
          inLanguage: 'en-IN',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'full-time',
            courseWorkload: '2 years',
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is the eligibility for B.Ed Mathematics admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Candidates must hold a Bachelor's degree (BSc/BA/BCom or equivalent) with at least 50% marks (45% for SC/ST/OBC/PWD candidates) with Mathematics as a main or subsidiary subject at the degree level. Candidates who have studied Mathematics up to Class 12 may also be considered.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration and mode of B.Ed Mathematics program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed Mathematics program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE norms. The program is conducted on-campus at JKKN College of Education, Komarapalayam, and includes classroom teaching, laboratory work, and school internships.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I teach after completing B.Ed Mathematics?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, B.Ed Mathematics graduates are eligible to teach Mathematics in Classes 6-12 in government, government-aided, and private schools. You can appear for TET (Teacher Eligibility Test) and TRB (Teachers Recruitment Board) examinations for government teaching positions in Tamil Nadu and other states.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the scope of practical training in this program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The program includes extensive practical training: micro-teaching sessions, simulated teaching, and a 16-week school internship program spread across three phases. Learners gain hands-on experience teaching Mathematics at partner secondary and higher secondary schools under expert mentorship.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is JKKN College of Education recognized for B.Ed Mathematics?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed degree is recognized across India for teaching positions and higher studies.',
              },
            },
            {
              '@type': 'Question',
              name: 'What scholarships are available for B.Ed Mathematics?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Various scholarships are available including government scholarships for SC/ST/OBC/MBC candidates, BC Muslim scholarships, and merit-based institutional scholarships. The fee structure follows Tamil Nadu government norms. Contact the admission office for detailed scholarship information and eligibility criteria.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are the career opportunities after B.Ed Mathematics?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Career opportunities include: Secondary and Higher Secondary school teacher, Coaching institute faculty, Curriculum developer, Educational content writer, Educational administrator, Online tutor. You can also pursue M.Ed, M.Phil, or Ph.D for academic and research careers in education.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does the program include technology training for teaching?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the program includes comprehensive ICT training covering educational technology tools like GeoGebra, MATLAB basics, Smart Board usage, online teaching platforms, and digital content creation. This prepares you for modern, technology-enabled classrooms and online teaching environments.',
              },
            },
          ],
        }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Departments', href: '/departments' },
        { name: 'B.Ed Mathematics', href: '/departments/maths' },
      ]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed Mathematics | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/maths',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2:first-of-type', '.faq-section'],
          },
          datePublished: '2024-01-01',
          dateModified: '2026-03-19',
        }}
      />
      {children}
    </>
  );
}
