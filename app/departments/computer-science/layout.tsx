import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';

export const metadata = seoMetadata(
  'B.Ed Computer Science',
  'B.Ed Computer Science specialization at JKKN College of Education — NCTE approved teacher training in Computer Science education, Namakkal.',
  '/departments/computer-science',
  { keywords: ['B.Ed Computer Science', 'CS teacher training', 'B.Ed Computer Science Tamil Nadu'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed Computer Science',
          description: '2-year B.Ed programme in Computer Science education at JKKN College of Education, Namakkal.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          educationalCredentialAwarded: 'Bachelor of Education (B.Ed)',
          timeRequired: 'P2Y',
          courseCode: 'B.Ed',
          url: 'https://edu.jkkn.ac.in/departments/computer-science',
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
              name: 'What is the eligibility for B.Ed Computer Science admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Candidates must hold a Bachelor's degree (B.Sc Computer Science/BCA/B.Tech/MCA or equivalent) with at least 50% marks (45% for SC/ST/OBC/PWD candidates) with Computer Science, Information Technology, or Computer Applications as a major subject at the degree level.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration of the B.Ed Computer Science program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed Computer Science program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE norms. Each semester includes theory papers, practical sessions, and school internships.',
              },
            },
            {
              '@type': 'Question',
              name: 'What programming languages are covered in the curriculum?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The curriculum covers teaching methodologies for programming languages including Python, Java, C++, and web technologies (HTML, CSS, JavaScript). Learners also study pedagogical approaches for teaching database management, data structures, and computational thinking.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I teach in CBSE and ICSE schools after completing this program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, B.Ed Computer Science graduates are eligible to teach in schools following CBSE, ICSE, and State Board curricula at secondary and higher secondary levels across India. The degree is nationally recognized by NCTE.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are the career opportunities after B.Ed Computer Science?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Graduates can become Computer Science teachers in government and private schools, pursue higher education (M.Ed, Ph.D), work as curriculum developers, educational technology specialists, e-learning content creators, or join educational administration roles.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is JKKN College of Education NCTE approved?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), ensuring your degree is recognized nationwide.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the fee structure for B.Ed Computer Science?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The fee structure is as per Tamil Nadu government norms. Various scholarships are available for eligible candidates including government scholarships for SC/ST/OBC and minority communities. Contact the admission office for detailed fee information.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does the program include school internship?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the program includes extensive school internship spread across Semester III and Semester IV. Learners gain hands-on teaching experience in partner schools under the mentorship of experienced Learning Facilitators, totaling 16-20 weeks of practical teaching.',
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
            { '@type': 'ListItem', position: 3, name: 'B.Ed Computer Science', item: 'https://edu.jkkn.ac.in/departments/computer-science' },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed Computer Science | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/computer-science',
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
