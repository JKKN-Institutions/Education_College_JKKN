import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';

export const metadata = seoMetadata(
  'B.Ed Botany',
  'B.Ed Botany specialization at JKKN College of Education — NCTE approved teacher training in Botany and plant sciences, Namakkal.',
  '/departments/botany',
  { keywords: ['B.Ed Botany', 'Botany teacher training', 'B.Ed Botany Namakkal'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed Botany',
          description: '2-year B.Ed programme in Botany education at JKKN College of Education, Namakkal.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          educationalCredentialAwarded: 'Bachelor of Education (B.Ed)',
          timeRequired: 'P2Y',
          courseCode: 'B.Ed',
          url: 'https://edu.jkkn.ac.in/departments/botany',
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
              name: 'What is the eligibility for B.Ed Botany admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Candidates must hold a Bachelor's degree in Botany (B.Sc Botany) or equivalent degree with Botany as a major subject with at least 50% marks (45% for reserved categories SC/ST/OBC/PWD). Candidates appearing for final year degree examinations may also apply provisionally.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration of B.Ed Botany program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed Botany program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, practical sessions, laboratory work, and school internship components as mandated by TNTEU guidelines.',
              },
            },
            {
              '@type': 'Question',
              name: 'What subjects can I teach after completing B.Ed Botany?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'After completing B.Ed Botany, you are qualified to teach Botany, Biology, Life Science, Environmental Science, and related subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is JKKN College of Education NCTE approved?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Botany program meets all regulatory standards for teacher education in India, ensuring your degree is recognized nationally for teaching positions.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the fee structure for B.Ed Botany?',
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
                text: 'Yes, the B.Ed Botany program includes extensive practical training through micro-teaching sessions, simulated teaching practices, botanical laboratory work, herbarium preparation, field studies, peer teaching, and a mandatory 16-week school internship program spread across two phases. Learners teach Botany subjects in actual classroom settings under mentor Learning Facilitator guidance in our partner schools.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I pursue B.Ed Botany after distance B.Sc?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, candidates with B.Sc Botany degree from UGC-recognized distance education universities/institutions are eligible for B.Ed Botany admission, provided they meet the minimum percentage criteria (50% general, 45% reserved) and other eligibility requirements. The distance education degree must be from a recognized university listed in UGC/AIU approved list.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are the career opportunities after B.Ed Botany?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'B.Ed Botany graduates have diverse career options including: Botany/Biology teachers in government and private schools, TGT/PGT positions in CBSE/ICSE schools, laboratory instructors, coaching institute faculty, environmental educators, curriculum developers, educational content writers, and opportunities to pursue M.Ed/Ph.D for academic and administrative roles in higher education and research.',
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
            { '@type': 'ListItem', position: 3, name: 'B.Ed Botany', item: 'https://edu.jkkn.ac.in/departments/botany' },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed Botany | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/botany',
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
