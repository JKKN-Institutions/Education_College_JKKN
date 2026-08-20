import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';

// GL1-08. Measured GSC 2026-07-21..08-17: this page carries 121 impressions and ZERO clicks.
// The queries are "bed in zoology" (32 impr, position 6.22) and "bed zoology" (21 impr, 2.43) -
// spelled without dots, which "B.Ed Zoology" does not carry as a token. The root layout appends
// " | JKKN College of Education" (28 chars), so the old title rendered at 40 characters of which
// 28 were the college name; absolute: true reclaims that space for the subject and the intent.
// HONEST LIMIT: 121 impressions and no clicks is the weakest page in this batch. It is a cheap
// reversible title change, not a measured cause of anything.
export const metadata = seoMetadata(
  'BEd Zoology - B.Ed Zoology Subject, Eligibility & Syllabus',
  'B.Ed Zoology (BEd Zoology) at JKKN College of Education, Namakkal - eligibility, syllabus, duration and teaching career. NCTE approved, TNTEU affiliated.',
  '/departments/zoology',
  {
    absolute: true,
    keywords: ['BEd Zoology', 'B.Ed Zoology', 'bed in zoology', 'Zoology teacher training', 'B.Ed Zoology Tamil Nadu'],
  }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed Zoology',
          description: '2-year B.Ed programme in Zoology education at JKKN College of Education, Namakkal.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          educationalCredentialAwarded: 'Bachelor of Education (B.Ed)',
          timeRequired: 'P2Y',
          courseCode: 'B.Ed',
          url: 'https://edu.jkkn.ac.in/departments/zoology',
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
              name: 'What is the eligibility for B.Ed Zoology admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Candidates must hold a Bachelor's degree (BSc or equivalent) from a recognized university with at least 50% marks (45% for SC/ST/OBC/PWD candidates). Zoology must be a major or optional subject at the degree level. Candidates with BSc Zoology, BSc Botany & Zoology, or BSc Life Sciences are eligible. Final year degree Learners may also apply.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration of the B.Ed Zoology program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed Zoology program is a 2-year (4 semesters) full-time professional degree course as per NCTE norms. Each academic year consists of two semesters with comprehensive theoretical, practical, and internship components.',
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
              name: 'What are the career opportunities after B.Ed Zoology?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Graduates can become Zoology/Biology teachers in government and private schools (Classes 6-12), prepare Learners for NEET and competitive exams, pursue higher education (M.Ed, Ph.D in Education or Zoology), work as curriculum developers, science content writers, laboratory coordinators, or take up administrative roles in educational institutions.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does the program include laboratory training?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the program includes extensive laboratory-based pedagogy training. Learners gain hands-on experience in microscopy, specimen handling, dissection techniques, laboratory safety protocols, and modern biological research methods essential for effective science teaching.',
              },
            },
            {
              '@type': 'Question',
              name: 'Are scholarships available for B.Ed Zoology Learners?',
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
              name: 'Can I teach Biology after completing B.Ed Zoology?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, B.Ed Zoology graduates are qualified to teach both Zoology and Biology subjects in secondary and higher secondary schools. The program covers comprehensive biological sciences pedagogy, enabling graduates to teach life sciences across all school levels.',
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
            { '@type': 'ListItem', position: 3, name: 'B.Ed Zoology', item: 'https://edu.jkkn.ac.in/departments/zoology' },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'B.Ed Zoology | JKKN College of Education',
          url: 'https://edu.jkkn.ac.in/departments/zoology',
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
