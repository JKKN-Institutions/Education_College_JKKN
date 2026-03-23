import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';

export const metadata = seoMetadata(
  'B.Ed Social Science',
  'B.Ed Social Science specialization at JKKN College of Education — NCTE approved teacher training in Social Science education, Namakkal.',
  '/departments/social-science',
  { keywords: ['B.Ed Social Science', 'Social Science teacher training', 'B.Ed Social Science Namakkal'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed Social Science',
          description: '2-year B.Ed programme in Social Science education at JKKN College of Education, Namakkal.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          educationalCredentialAwarded: 'Bachelor of Education (B.Ed)',
          timeRequired: 'P2Y',
          courseCode: 'B.Ed',
          url: 'https://edu.jkkn.ac.in/departments/social-science',
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
              name: 'What is the eligibility for B.Ed Social Science admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Candidates must hold a Bachelor's degree in Arts (BA) or equivalent with Social Science subjects (History, Geography, Political Science, Economics, Sociology, Civics) with at least 50% marks (45% for SC/ST/OBC/PWD candidates). Candidates appearing for final year examinations may also apply provisionally.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration of B.Ed Social Science program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed Social Science program is a 2-year (4 semesters) full-time professional degree course as per NCTE (National Council for Teacher Education) norms and TNTEU (Tamil Nadu Teachers Education University) guidelines.',
              },
            },
            {
              '@type': 'Question',
              name: 'What subjects can I teach after completing B.Ed Social Science?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'After completing B.Ed Social Science, you can teach History, Geography, Political Science, Civics, Economics, and Sociology at upper primary (Classes 6-8), secondary (Classes 9-10), and higher secondary (Classes 11-12) levels in government and private schools across India.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is JKKN College of Education NCTE approved?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Social Science program meets all regulatory standards for teacher education in India.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are the career opportunities after B.Ed Social Science?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Graduates can become Social Science teachers in government and private schools, work as curriculum developers, educational content writers, join museums and heritage organizations, work with NGOs in civic education, or pursue higher studies like M.Ed and Ph.D in Education.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does the program include practical teaching experience?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the program includes extensive practical training through micro-teaching sessions, simulated teaching, educational excursions to historical and geographical sites, and a mandatory school internship where Learners teach Social Science subjects in actual classrooms under mentor guidance.',
              },
            },
            {
              '@type': 'Question',
              name: 'Are scholarships available for B.Ed Social Science?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, various scholarships are available including government scholarships for SC/ST/OBC/MBC candidates, merit-based scholarships for toppers, and institutional scholarships for economically weaker sections. Contact the admission office for detailed scholarship information.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I pursue B.Ed Social Science after BA with distance education?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, candidates with BA degree from UGC-recognized distance education universities are eligible for B.Ed Social Science admission, provided they meet the minimum percentage criteria and have studied Social Science subjects at the graduation level.',
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
            { '@type': 'ListItem', position: 3, name: 'B.Ed Social Science', item: 'https://edu.jkkn.ac.in/departments/social-science' },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed Social Science | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/social-science',
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
