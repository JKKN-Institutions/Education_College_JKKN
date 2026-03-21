import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';

export const metadata = seoMetadata(
  'B.Ed English',
  'B.Ed English specialization at JKKN College of Education — NCTE approved teacher training in English language education, Namakkal, Tamil Nadu.',
  '/departments/english',
  { keywords: ['B.Ed English', 'English teacher training', 'B.Ed English Namakkal'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed English',
          description: '2-year B.Ed programme in English language education at JKKN College of Education, Namakkal.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          educationalCredentialAwarded: 'Bachelor of Education (B.Ed)',
          timeRequired: 'P2Y',
          courseCode: 'B.Ed',
          url: 'https://edu.jkkn.ac.in/departments/english',
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
              name: 'What is the eligibility for B.Ed English admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Candidates must hold a Bachelor's degree (BA/BSc/BCom or equivalent) with at least 50% marks (45% for reserved categories) with English as a subject at the degree level or studied English up to Class 12 with minimum 50% marks. Candidates appearing for final year exams may also apply provisionally.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration of B.Ed English program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed English program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE norms. The program includes theoretical coursework, practical training, and a 16-week school internship distributed across three phases.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are the career opportunities after B.Ed English?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Graduates can become English teachers in government and private schools (CBSE/ICSE/State Board), pursue higher education (M.Ed, Ph.D, MA English), work as curriculum developers, educational content writers, IELTS/TOEFL trainers, corporate trainers, or join educational administration.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is JKKN College of Education NCTE approved?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. Our B.Ed degree is recognized nationwide and valid for teacher recruitment in all states.',
              },
            },
            {
              '@type': 'Question',
              name: 'What teaching methodologies are covered in B.Ed English?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The program covers Communicative Language Teaching (CLT), Task-Based Language Teaching (TBLT), Content and Language Integrated Learning (CLIL), Grammar-Translation Method, Direct Method, technology-enhanced learning, and assessment strategies aligned with NEP 2020.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does B.Ed English include practical training?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the program includes extensive practical training through micro-teaching sessions, peer teaching, simulated teaching, demonstration lessons, and a comprehensive 16-week school internship program in partner institutions across three phases.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I teach in CBSE/ICSE schools after B.Ed English?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, B.Ed English graduates are eligible to teach in all types of schools including CBSE, ICSE, State Board, and International Baccalaureate (IB) schools at secondary (Classes 6-10) and higher secondary (Classes 11-12) levels across India and internationally.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the fee structure for B.Ed English?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The fee structure is as per Tamil Nadu government norms and is affordable compared to private institutions. Various scholarships are available for BC/MBC/SC/ST candidates. Contact the admission office at +91 4288 262600 for detailed fee information and payment options.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is hostel facility available for B.Ed Learners?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, separate hostel facilities are available for both male and female Learners within the campus. The hostels provide comfortable accommodation, nutritious food, Wi-Fi connectivity, 24/7 security, and a conducive environment for academic pursuits.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I pursue M.Ed after completing B.Ed English?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, after completing B.Ed English, you can pursue M.Ed (Master of Education) to become a teacher educator or pursue Ph.D in Education for research and academic careers. You can also pursue MA in English Literature or Applied Linguistics for specialization.',
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
            { '@type': 'ListItem', position: 3, name: 'B.Ed English', item: 'https://edu.jkkn.ac.in/departments/english' },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed English | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/english',
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
