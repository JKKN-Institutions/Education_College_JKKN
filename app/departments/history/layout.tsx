import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'B.Ed History',
  'B.Ed History specialization at JKKN College of Education — NCTE approved teacher training in History education, Namakkal, Tamil Nadu.',
  '/departments/history',
  { keywords: ['B.Ed History', 'History teacher training', 'B.Ed History Namakkal'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed History',
          description: '2-year B.Ed programme in History education at JKKN College of Education, Namakkal.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          educationalCredentialAwarded: 'Bachelor of Education (B.Ed)',
          timeRequired: 'P2Y',
          courseCode: 'B.Ed',
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
              name: 'What is the eligibility for B.Ed History admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Candidates must hold a Bachelor's degree in History (B.A. History) or equivalent degree with History as a major subject from a recognized university with minimum 50% aggregate marks. Reserved category candidates (SC/ST/OBC/PWD) require minimum 45% marks. Candidates with B.A. in Political Science, Sociology, or Economics with History as subsidiary may also apply. Those appearing for final year degree examinations can apply provisionally.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration of B.Ed History program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed History program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, practical sessions, heritage visits, and school internship components as mandated by TNTEU guidelines.',
              },
            },
            {
              '@type': 'Question',
              name: 'What subjects can I teach after completing B.Ed History?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'After completing B.Ed History, you are qualified to teach History, Civics, Political Science, Social Science, and related subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula. You can also teach Social Studies at middle school level (Classes 6-8).',
              },
            },
            {
              '@type': 'Question',
              name: 'Is JKKN College of Education NCTE approved?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed History program meets all regulatory standards for teacher education in India, ensuring your degree is recognized nationally for TGT/PGT teaching positions.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the fee structure for B.Ed History?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The fee structure is regulated by the Tamil Nadu government for teacher education programs. Various scholarships including government scholarships for SC/ST/OBC/BC candidates, merit scholarships, and institutional financial assistance are available for eligible Learners. Please contact our admission office for current fee details and scholarship information.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does the program include heritage site visits?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the B.Ed History program includes heritage site visits, museum education sessions, and archaeological exploration as part of the curriculum. Learners visit historical monuments, museums, and cultural sites to understand experiential learning methods and develop skills in using local heritage resources for classroom teaching.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I pursue B.Ed History after B.A. with distance education?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, candidates with B.A. History degree from UGC-recognized distance education universities/institutions are eligible for B.Ed History admission, provided they meet the minimum percentage criteria (50% general, 45% reserved) and other eligibility requirements. The distance education degree must be from a university listed in the UGC/AIU approved list.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are the career opportunities after B.Ed History?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'B.Ed History graduates have diverse career options including: History/Civics/Social Science teachers in government and private schools, TGT/PGT positions in CBSE/ICSE schools, museum educators, heritage consultants, curriculum developers, educational content writers for history publications, civil services coaching faculty, and opportunities to pursue M.Ed/Ph.D for academic and research roles in higher education.',
              },
            },
          ],
        }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Departments', href: '/departments' },
        { name: 'B.Ed History', href: '/departments/history' },
      ]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed History | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/history',
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
