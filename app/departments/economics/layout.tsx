import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';

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
          offers: {
            '@type': 'Offer',
            category: 'Tuition',
            priceSpecification: {
              '@type': 'PriceSpecification',
              priceCurrency: 'INR',
              description: 'As per Tamil Nadu government fee norms. Scholarships available.',
            },
          },
          numberOfCredits: 90,
          educationalLevel: 'Undergraduate',
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
                text: "Candidates must hold a P.G. degree in Economics (M.A. Economics) with at least 50% marks, with Economics also as the U.G. major (B.A. Economics). A U.G. degree alone is not enough; a pass is enough for differently abled candidates. Selection is purely on merit from P.G. marks, with no entrance test (Government of Tamil Nadu, G.O.(D) No.144, 2026-27).",
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
                text: 'Tuition is ₹35,000 a year under the management quota, as published in the JKKN course fee structure. Various scholarships including government scholarships for eligible community candidates, merit scholarships, and institutional financial assistance are available for eligible Learners. Please contact our admission office for current fee details and scholarship information.',
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
                text: 'Not with a B.A. Economics alone. You need a B.A. and an M.A. in Economics, with at least 50% marks in the P.G. degree. A degree earned through distance mode must follow the 10+2+3 pattern; U.G. or P.G. degrees taken through an Open University without the 10+2 school pattern are not eligible (Government of Tamil Nadu, G.O.(D) No.144, 2026-27).',
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
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://edu.jkkn.ac.in' },
            { '@type': 'ListItem', position: 2, name: 'Departments', item: 'https://edu.jkkn.ac.in/departments' },
            { '@type': 'ListItem', position: 3, name: 'B.Ed Economics', item: 'https://edu.jkkn.ac.in/departments/economics' },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed Economics | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/economics',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
          datePublished: '2024-01-01',
          dateModified: new Date().toISOString(),
        }}
      />
      {children}
    </>
  );
}
