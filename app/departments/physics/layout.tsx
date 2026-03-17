import { seoMetadata } from '@/lib/seo-metadata';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'B.Ed Physics',
  'B.Ed Physics specialization at JKKN College of Education — NCTE approved teacher training in Physics education, Namakkal, Tamil Nadu.',
  '/departments/physics',
  { keywords: ['B.Ed Physics', 'Physics teacher training', 'B.Ed Physics Namakkal'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'B.Ed Physics',
          description: '2-year B.Ed programme in Physics education at JKKN College of Education, Namakkal.',
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
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is the eligibility for B.Ed Physics admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Candidates must hold a Bachelor's degree in Physics (B.Sc Physics) or equivalent degree with Physics as a major subject from a recognized university with minimum 50% aggregate marks. Reserved category candidates (SC/ST/OBC/PWD) require minimum 45% marks. Candidates appearing for final year degree examinations may also apply provisionally.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the duration of B.Ed Physics program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed Physics program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE (National Council for Teacher Education) norms. Each academic year consists of classroom learning, practical laboratory sessions, and school internship components as mandated by TNTEU guidelines.',
              },
            },
            {
              '@type': 'Question',
              name: 'What subjects can I teach after completing B.Ed Physics?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'After completing B.Ed Physics, you are qualified to teach Physics, Physical Science, and related science subjects at secondary (Classes 9-10) and higher secondary (Classes 11-12) levels in government, aided, and private schools across India following CBSE, ICSE, or State Board curricula.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is JKKN College of Education NCTE approved for B.Ed Physics?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. The B.Ed Physics program meets all regulatory standards for teacher education in India and is recognized for government teaching positions.',
              },
            },
            {
              '@type': 'Question',
              name: 'What practical training is included in the B.Ed Physics program?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The B.Ed Physics program includes extensive practical training through micro-teaching sessions, physics laboratory demonstrations, simulated teaching, and a mandatory 16-week school internship program. During internship, Learners teach Physics in actual Learning Studios, conduct experiments, and develop assessment materials under expert mentor guidance.',
              },
            },
            {
              '@type': 'Question',
              name: 'What competitive exams can I appear for after B.Ed Physics?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'After completing B.Ed Physics, you can appear for TET (Teacher Eligibility Test), CTET (Central Teacher Eligibility Test), TRB (Teachers Recruitment Board) examinations, KVS (Kendriya Vidyalaya Sangathan), NVS (Navodaya Vidyalaya Samiti), and various state-level teacher recruitment examinations for Physics teaching positions.',
              },
            },
            {
              '@type': 'Question',
              name: 'Are there hostel facilities available for B.Ed Physics students?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, JKKN College of Education provides separate hostel facilities for both boys and girls with comfortable accommodation, mess facilities, Wi-Fi connectivity, and 24/7 security. The hostels are located within the campus premises for convenient access to all academic facilities including physics laboratories.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I pursue B.Ed Physics after B.Sc with distance education?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, candidates with B.Sc Physics degree from UGC-recognized distance education programs are eligible for B.Ed Physics admission, provided they meet the minimum percentage criteria and other eligibility requirements as specified by NCTE and TNTEU norms.',
              },
            },
          ],
        }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Departments', href: '/departments' },
        { name: 'B.Ed Physics', href: '/departments/physics' },
      ]} />
      {children}
    </>
  );
}
