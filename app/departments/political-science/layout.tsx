import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';

export const metadata = seoMetadata(
  'B.Ed Political Science',
  'B.Ed Political Science specialization at JKKN College of Education — NCTE approved teacher training in Political Science education, Namakkal.',
  '/departments/political-science',
  { keywords: ['B.Ed Political Science', 'Political Science teacher training', 'B.Ed Political Science Tamil Nadu'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed Political Science',
          description: '2-year B.Ed programme in Political Science education at JKKN College of Education, Namakkal.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          educationalCredentialAwarded: 'Bachelor of Education (B.Ed)',
          timeRequired: 'P2Y',
          courseCode: 'B.Ed',
          url: 'https://edu.jkkn.ac.in/departments/political-science',
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
              name: 'What is the eligibility for B.Ed Political Science admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Candidates must hold a P.G. degree in Political Science (M.A. Political Science) with at least 50% marks, with Political Science also as the U.G. major (B.A. Political Science). A U.G. degree alone, or a degree in History, Public Administration or Sociology, is not enough; a pass is enough for differently abled candidates. Selection is purely on merit from P.G. marks, with no entrance test (Government of Tamil Nadu, G.O.(D) No.144, 2026-27).",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration of B.Ed Political Science program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed Political Science program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, practical sessions, school internships, and community engagement components as mandated by TNTEU guidelines.',
              },
            },
            {
              '@type': 'Question',
              name: 'What subjects can I teach after completing B.Ed Political Science?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'After completing B.Ed Political Science, you are qualified to teach Political Science, Civics, Indian Polity, Social Science, and related subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula. You can also teach History and Geography in combination with Political Science at secondary level.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is JKKN College of Education NCTE approved?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Political Science program meets all regulatory standards for teacher education in India, ensuring national recognition and acceptance of your degree.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I appear for TET/CTET after B.Ed Political Science?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, after completing B.Ed Political Science from JKKN College, you are eligible to appear for TET (Teacher Eligibility Test) conducted by state governments and CTET (Central Teacher Eligibility Test) conducted by CBSE. Qualifying these tests is mandatory for teaching positions in government and government-aided schools. We also provide guidance and coaching support for these examinations.',
              },
            },
            {
              '@type': 'Question',
              name: 'What practical training does the program include?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed Political Science program includes extensive practical training through micro-teaching sessions, simulated teaching, and 16-week school internship spread across two semesters. Learners also participate in Mock Parliament sessions, Model United Nations, voter awareness campaigns, Constitutional Day celebrations, and community civic education initiatives under mentor guidance.',
              },
            },
            {
              '@type': 'Question',
              name: 'Are scholarships available for B.Ed Political Science?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The college Scholarships page lists them by community and quota: PMSS and maintenance scholarships for SC/SCA/ST/BC-CC candidates, a JKKN Trust merit scholarship for BC/MBC/DNC/BCM candidates, and monthly support for students from government or government-aided schools. Amounts change each year; see edu.jkkn.ac.in/scholarships.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I pursue B.Ed Political Science after distance education B.A?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Not with a B.A. alone. You need a B.A. and an M.A. in Political Science, with at least 50% marks in the P.G. degree. A degree earned through distance mode must follow the 10+2+3 pattern; U.G. or P.G. degrees taken through an Open University without the 10+2 school pattern are not eligible (Government of Tamil Nadu, G.O.(D) No.144, 2026-27).',
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
            { '@type': 'ListItem', position: 3, name: 'B.Ed Political Science', item: 'https://edu.jkkn.ac.in/departments/political-science' },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed Political Science | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/political-science',
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
