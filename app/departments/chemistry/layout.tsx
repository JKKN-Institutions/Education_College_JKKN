import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'B.Ed Chemistry',
  'B.Ed Chemistry specialization at JKKN College of Education — NCTE approved teacher training in Chemistry education, Namakkal.',
  '/departments/chemistry',
  { keywords: ['B.Ed Chemistry', 'Chemistry teacher training', 'B.Ed Chemistry Tamil Nadu'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed Chemistry',
          description: '2-year B.Ed programme in Chemistry education at JKKN College of Education, Namakkal.',
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
              name: 'What is the eligibility criteria for B.Ed Chemistry admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Candidates must have completed BSc Chemistry or BSc with Chemistry as an ancillary subject from a recognized university with minimum 50% aggregate marks. For SC/ST/OBC/PWD candidates, the minimum is 45%. MSc Chemistry candidates are also eligible and given preference during admission.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration and mode of the B.Ed Chemistry program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'B.Ed Chemistry is a 2-year full-time professional degree program divided into 4 semesters. The program includes theoretical coursework, practical laboratory sessions, micro-teaching, and 16-20 weeks of school internship as per NCTE norms.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can B.Ed Chemistry graduates teach in CBSE and ICSE schools?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, B.Ed Chemistry graduates from NCTE-approved institutions like JKKN College can teach in all types of schools including State Board, CBSE, ICSE, and International schools across India. The degree is nationally recognized for teaching positions at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does JKKN have specialized Chemistry laboratories for B.Ed students?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education has well-equipped Chemistry laboratories specifically designed for teacher education. The labs feature modern equipment, safety infrastructure, demonstration tables, and resources for teaching laboratory techniques, practical skills, and safety protocols essential for effective Chemistry teaching.',
              },
            },
            {
              '@type': 'Question',
              name: 'What practical training do B.Ed Chemistry students receive?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Students receive comprehensive practical training including: micro-teaching sessions for skill development, laboratory demonstration techniques, 16-20 weeks of school internship in partner schools, lesson planning workshops, educational technology integration, virtual lab simulations, action research projects, and hands-on experience with modern teaching aids.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are the career opportunities after B.Ed Chemistry?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Graduates have diverse career options including: Chemistry teachers in schools (government and private), coaching institute faculty for NEET/JEE preparation, laboratory coordinators, curriculum developers, educational content writers, ed-tech content creators, educational administrators, and higher education (M.Ed, Ph.D) for teaching in colleges and research.',
              },
            },
            {
              '@type': 'Question',
              name: 'Are scholarships available for B.Ed Chemistry students?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, various scholarships are available including: State government scholarships for SC/ST/OBC/BC/MBC candidates, central government scholarships, minority scholarships, merit-based scholarships for top performers, and fee concessions for economically disadvantaged students. Contact the admission office for detailed eligibility information.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I pursue M.Ed after completing B.Ed Chemistry?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, B.Ed graduates can pursue M.Ed (Master of Education), M.Phil, or Ph.D in Education for advanced career opportunities. M.Ed qualifies you for positions as college/university Learning Facilitators, educational researchers, curriculum specialists, and senior administrative roles in educational institutions.',
              },
            },
          ],
        }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Departments', href: '/departments' },
        { name: 'B.Ed Chemistry', href: '/departments/chemistry' },
      ]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed Chemistry | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/chemistry',
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
