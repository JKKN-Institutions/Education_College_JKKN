import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'B.Ed Tamil',
  'B.Ed Tamil specialization at JKKN College of Education — NCTE approved, TNTEU affiliated teacher training in Tamil language education, Namakkal.',
  '/departments/tamil',
  { keywords: ['B.Ed Tamil', 'Tamil teacher training', 'B.Ed Tamil Nadu'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed Tamil',
          description: '2-year B.Ed programme in Tamil language education at JKKN College of Education, Namakkal.',
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
              name: 'What is the eligibility for B.Ed Tamil admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Candidates must hold a Bachelor's degree (BA/BSc/BCom or equivalent) from a recognized university with at least 50% marks (45% for SC/ST/OBC/PWD candidates). Additionally, candidates should have Tamil as a subject at the degree level or have studied Tamil up to Class 12. Final year degree students may also apply.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration of the B.Ed Tamil program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed Tamil program is a 2-year (4 semesters) full-time professional degree course as per NCTE norms. Each academic year consists of two semesters with comprehensive theoretical and practical components.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is JKKN College of Education NCTE approved?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. Our programs meet all regulatory standards and are recognized across India.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are the career opportunities after B.Ed Tamil?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Graduates can become Tamil teachers in government and private schools (Classes 6-12), pursue higher education (M.Ed, Ph.D in Education), work as curriculum developers or educational content writers, join coaching institutes, or take up administrative roles in educational institutions.',
              },
            },
            {
              '@type': 'Question',
              name: 'Are scholarships available for B.Ed Tamil students?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, eligible candidates can avail various government scholarships including BC/MBC/SC/ST scholarships, minority scholarships, and other state and central government schemes. Our scholarship cell assists Learners in identifying and applying for appropriate financial aid.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is hostel accommodation available?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, separate hostel facilities are available for both male and female Learners within the campus. The hostels offer comfortable accommodation, nutritious food, 24/7 security, Wi-Fi connectivity, and all necessary amenities at reasonable rates.',
              },
            },
            {
              '@type': 'Question',
              name: 'How is the school internship program structured?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The school internship is spread across three phases during the program. Learners undergo teaching practice at partner schools, starting with observation and assisted teaching, progressing to independent lesson delivery, and culminating in full classroom responsibility with continuous mentoring and assessment.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I pursue B.Ed Tamil after completing BCom or BSc?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Yes, candidates with BCom, BSc, or any other Bachelor's degree can pursue B.Ed Tamil, provided they have studied Tamil as a subject at the degree level or have Tamil as a subject up to Class 12. This allows professionals from various backgrounds to enter the teaching profession.",
              },
            },
          ],
        }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Departments', href: '/departments' },
        { name: 'B.Ed Tamil', href: '/departments/tamil' },
      ]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed Tamil | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/tamil',
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
