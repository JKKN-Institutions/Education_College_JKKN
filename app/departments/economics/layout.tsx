import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'B.Ed Economics',
  'B.Ed Economics specialization at JKKN College of Education — NCTE approved teacher training in Economics education, Namakkal.',
  '/departments/economics',
  { keywords: ['B.Ed Economics', 'Economics teacher training', 'B.Ed Economics Tamil Nadu'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed Economics',
          description: '2-year B.Ed programme in Economics education at JKKN College of Education, Namakkal.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          educationalCredentialAwarded: 'Bachelor of Education (B.Ed)',
          timeRequired: 'P2Y',
          courseCode: 'B.Ed',
          url: 'https://edu.jkkn.ac.in/departments/economics',
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
              name: 'What is the eligibility for B.Ed Economics admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Candidates must hold a Bachelor's degree with Economics as a major or subsidiary subject (BA Economics, B.Sc Economics, B.Com with Economics, or equivalent) from a recognized university with minimum 50% aggregate marks. Reserved category candidates (SC/ST/OBC/PWD) require minimum 45% marks. Candidates appearing for final year degree examinations may also apply provisionally.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration of B.Ed Economics program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed Economics program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, practical sessions, and school internship components as mandated by TNTEU guidelines.',
              },
            },
            {
              '@type': 'Question',
              name: 'What subjects can I teach after completing B.Ed Economics?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'After completing B.Ed Economics, you are qualified to teach Economics, Indian Economic Development, Statistics for Economics, Business Economics, and related subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is JKKN College of Education NCTE approved?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Economics program meets all regulatory standards for teacher education in India, ensuring your degree is recognized nationally for teaching positions.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the fee structure for B.Ed Economics?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The fee structure is regulated by the Tamil Nadu government for teacher education programs. Various scholarships including government scholarships for SC/ST/OBC/BC candidates, merit scholarships, and institutional financial assistance are available for eligible Learners. Please contact our admission office for current fee details and scholarship information.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does the program include practical teaching experience?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the B.Ed Economics program includes extensive practical training through micro-teaching sessions, simulated teaching practices, peer teaching, and a mandatory 16-week school internship program spread across two phases. Learners teach Economics subjects in actual classroom settings under mentor Learning Facilitator guidance in our partner schools.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I pursue B.Ed Economics after BA Economics through distance education?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, candidates with BA Economics or equivalent degree from UGC-recognized distance education universities/institutions are eligible for B.Ed Economics admission, provided they meet the minimum percentage criteria (50% general, 45% reserved) and other eligibility requirements. The distance education degree must be from a recognized university listed in UGC/AIU approved list.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are the career opportunities after B.Ed Economics?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'B.Ed Economics graduates have diverse career options including: Economics teachers in government and private schools, TGT/PGT positions in CBSE/ICSE schools, coaching institute faculty for competitive exams, curriculum developers, educational content writers, financial literacy educators, and opportunities to pursue M.Ed/Ph.D for academic and research roles in higher education.',
              },
            },
          ],
        }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Departments', href: '/departments' },
        { name: 'B.Ed Economics', href: '/departments/economics' },
      ]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed Economics | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/economics',
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
