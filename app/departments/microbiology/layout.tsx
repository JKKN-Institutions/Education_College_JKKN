import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';

export const metadata = seoMetadata(
  'B.Ed Microbiology',
  'B.Ed Microbiology specialization at JKKN College of Education — NCTE approved teacher training in Microbiology education, Namakkal.',
  '/departments/microbiology',
  { keywords: ['B.Ed Microbiology', 'Microbiology teacher training', 'B.Ed Microbiology Tamil Nadu'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed Microbiology',
          description: '2-year B.Ed programme in Microbiology education at JKKN College of Education, Namakkal.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          educationalCredentialAwarded: 'Bachelor of Education (B.Ed)',
          timeRequired: 'P2Y',
          courseCode: 'B.Ed',
          url: 'https://edu.jkkn.ac.in/departments/microbiology',
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
              name: 'What is the eligibility for B.Ed Microbiology admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Candidates must hold a Bachelor's degree in Microbiology (B.Sc Microbiology) or equivalent degree with Microbiology as a major subject from a recognized university with minimum 50% aggregate marks. Reserved category candidates (SC/ST/OBC/PWD) require minimum 45% marks. Candidates with B.Sc Biotechnology, B.Sc Life Sciences, or B.Sc Biological Sciences with Microbiology as a subject may also apply. Candidates appearing for final year degree examinations may apply provisionally.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration of B.Ed Microbiology program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed Microbiology program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, laboratory practical sessions, and school internship components as mandated by TNTEU guidelines.',
              },
            },
            {
              '@type': 'Question',
              name: 'What subjects can I teach after completing B.Ed Microbiology?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'After completing B.Ed Microbiology, you are qualified to teach Biology, Microbiology, Life Sciences, Biotechnology, Zoology, and related subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula. You can also teach for NEET and medical entrance preparation.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is JKKN College of Education NCTE approved?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Microbiology program meets all regulatory standards for teacher education in India, ensuring your degree is recognized nationally for teaching positions in schools.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the fee structure for B.Ed Microbiology?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The fee structure is regulated by the Tamil Nadu government for teacher education programs. Various scholarships including government scholarships for SC/ST/OBC/BC candidates, merit scholarships, and institutional financial assistance are available for eligible Learners. Please contact our admission office for current fee details and scholarship information.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does the program include laboratory and practical teaching experience?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the B.Ed Microbiology program includes extensive practical training through laboratory teaching sessions, micro-teaching demonstrations, microscopy training, simulated teaching practices, peer teaching, and a mandatory 16-week school internship program spread across two phases. Learners teach Biology and Microbiology subjects in actual classroom and laboratory settings under mentor Learning Facilitator guidance.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I pursue B.Ed Microbiology after B.Sc Biotechnology?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, candidates with B.Sc Biotechnology, B.Sc Life Sciences, or B.Sc Biological Sciences degrees that include Microbiology as a core or major subject are eligible for B.Ed Microbiology admission, provided they meet the minimum percentage criteria (50% general, 45% reserved) and other eligibility requirements.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are the career opportunities after B.Ed Microbiology?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'B.Ed Microbiology graduates have diverse career options including: Biology/Life Sciences teachers in government and private schools, TGT/PGT positions in CBSE/ICSE schools, NEET coaching institute faculty, laboratory instructors, science curriculum developers, educational content writers, science communicators, and opportunities to pursue M.Ed/Ph.D for academic and administrative roles in higher education.',
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
            { '@type': 'ListItem', position: 3, name: 'B.Ed Microbiology', item: 'https://edu.jkkn.ac.in/departments/microbiology' },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed Microbiology | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/microbiology',
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
