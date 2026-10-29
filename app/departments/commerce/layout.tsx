import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';

export const metadata = seoMetadata(
  'B.Ed Commerce',
  'B.Ed Commerce specialization at JKKN College of Education — NCTE approved teacher training in Commerce education, Namakkal.',
  '/departments/commerce',
  { keywords: ['B.Ed Commerce', 'Commerce teacher training', 'B.Ed Commerce Namakkal'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed Commerce',
          description: '2-year B.Ed programme in Commerce education at JKKN College of Education, Namakkal.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          educationalCredentialAwarded: 'Bachelor of Education (B.Ed)',
          timeRequired: 'P2Y',
          courseCode: 'B.Ed',
          url: 'https://edu.jkkn.ac.in/departments/commerce',
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
              name: 'What is the eligibility for B.Ed Commerce admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Candidates must hold a P.G. degree in Commerce (M.Com) with at least 50% marks, with Commerce also as the U.G. major (B.Com). A U.G. degree alone is not enough; a pass is enough for differently abled candidates. Selection is purely on merit from P.G. marks, with no entrance test (Government of Tamil Nadu, G.O.(D) No.144, 2026-27).",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration of B.Ed Commerce program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed Commerce program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, practical sessions, and school internship components as mandated by TNTEU guidelines.',
              },
            },
            {
              '@type': 'Question',
              name: 'What subjects can I teach after completing B.Ed Commerce?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'After completing B.Ed Commerce, you are qualified to teach Commerce, Accountancy, Business Studies, Economics, and related subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is JKKN College of Education NCTE approved?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Commerce program meets all regulatory standards for teacher education in India, ensuring your degree is recognized nationally for teaching positions.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the fee structure for B.Ed Commerce?',
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
                text: 'Yes, the B.Ed Commerce program includes extensive practical training through micro-teaching sessions, simulated teaching practices, peer teaching, and a mandatory 16-week school internship program spread across two phases. Learners teach Commerce subjects in actual classroom settings under mentor Learning Facilitator guidance in our partner schools.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I pursue B.Ed Commerce after distance B.Com?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Not with a B.Com alone. You need a B.Com and an M.Com, with at least 50% marks in the P.G. degree. A degree earned through distance mode must follow the 10+2+3 pattern; U.G. or P.G. degrees taken through an Open University without the 10+2 school pattern are not eligible (Government of Tamil Nadu, G.O.(D) No.144, 2026-27).',
              },
            },
            {
              '@type': 'Question',
              name: 'What are the career opportunities after B.Ed Commerce?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'B.Ed Commerce graduates have diverse career options including: Commerce/Accountancy/Business Studies teachers in government and private schools, TGT/PGT positions in CBSE/ICSE schools, coaching institute faculty, curriculum developers, educational content writers, corporate trainers, and opportunities to pursue M.Ed/Ph.D for academic and administrative roles in higher education.',
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
            { '@type': 'ListItem', position: 3, name: 'B.Ed Commerce', item: 'https://edu.jkkn.ac.in/departments/commerce' },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed Commerce | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/commerce',
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
