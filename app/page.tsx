import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroButtons from '@/components/HeroButtons';
import AnnouncementBar from '@/components/AnnouncementBar';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/server';
import { JsonLd } from '@/components/JsonLd';

export const revalidate = 60;


export default async function Home() {
  const supabase = await createClient();
  const { data: notices } = await supabase
    .from('notices')
    .select('title')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(10);
  const noticeTexts = notices?.map((n) => n.title) ?? [];
  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': ['EducationalOrganization', 'CollegeOrUniversity'],
          '@id': 'https://edu.jkkn.ac.in/#organization',
          name: 'JKKN College of Education',
          alternateName: 'J.K.K. Nattraja College of Education',
          url: 'https://edu.jkkn.ac.in',
          logo: 'https://edu.jkkn.ac.in/images/logo.png',
          image: 'https://edu.jkkn.ac.in/images/og-default.png',
          description:
            'JKKN College of Education is an NCTE-approved, NAAC-accredited B.Ed college affiliated to Tamil Nadu Teachers Education University (TNTEU), offering a 2-year Bachelor of Education programme with 14 subject specializations in Komarapalayam, Namakkal District, Tamil Nadu.',
          telephone: '+919345855001',
          email: 'education@jkkn.ac.in',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Natarajapuram, NH-544 (Salem to Coimbatore Highway), Komarapalayam',
            addressLocality: 'Namakkal',
            addressRegion: 'Tamil Nadu',
            postalCode: '638183',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 11.4441,
            longitude: 77.7315,
          },
          parentOrganization: {
            '@type': 'Organization',
            '@id': 'https://jkkn.ac.in/#organization',
            name: 'J.K.K. Nattraja Educational Institutions',
            url: 'https://jkkn.ac.in',
          },
          accreditation: [
            'NCTE (National Council for Teacher Education) Approved',
            'NAAC (National Assessment and Accreditation Council) Accredited',
          ],
          memberOf: {
            '@type': 'Organization',
            name: 'Tamil Nadu Teachers Education University (TNTEU)',
            url: 'https://tnteu.ac.in',
          },
          hasOfferingCatalog: {
            '@type': 'OfferingCatalog',
            name: 'B.Ed Programmes',
            itemListElement: [
              { '@type': 'Course', name: 'B.Ed Tamil', description: 'Bachelor of Education specializing in Tamil language teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
              { '@type': 'Course', name: 'B.Ed English', description: 'Bachelor of Education specializing in English language teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
              { '@type': 'Course', name: 'B.Ed Mathematics', description: 'Bachelor of Education specializing in Mathematics teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
              { '@type': 'Course', name: 'B.Ed Physics', description: 'Bachelor of Education specializing in Physics teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
              { '@type': 'Course', name: 'B.Ed Chemistry', description: 'Bachelor of Education specializing in Chemistry teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
              { '@type': 'Course', name: 'B.Ed Botany', description: 'Bachelor of Education specializing in Botany teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
              { '@type': 'Course', name: 'B.Ed Zoology', description: 'Bachelor of Education specializing in Zoology teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
              { '@type': 'Course', name: 'B.Ed History', description: 'Bachelor of Education specializing in History teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
              { '@type': 'Course', name: 'B.Ed Economics', description: 'Bachelor of Education specializing in Economics teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
              { '@type': 'Course', name: 'B.Ed Commerce', description: 'Bachelor of Education specializing in Commerce teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
              { '@type': 'Course', name: 'B.Ed Computer Science', description: 'Bachelor of Education specializing in Computer Science teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
              { '@type': 'Course', name: 'B.Ed Political Science', description: 'Bachelor of Education specializing in Political Science teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
              { '@type': 'Course', name: 'B.Ed Social Science', description: 'Bachelor of Education specializing in Social Science teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
              { '@type': 'Course', name: 'B.Ed Microbiology', description: 'Bachelor of Education specializing in Microbiology teaching methodology', provider: { '@id': 'https://edu.jkkn.ac.in/#organization' }, educationalCredentialAwarded: 'Bachelor of Education (B.Ed)', timeRequired: 'P2Y', courseMode: 'full-time' },
            ],
          },
          foundingDate: '2016',
          sameAs: [
            'https://maps.app.goo.gl/AtaJUB4iz4yB3G117',
            'https://www.facebook.com/jkknedu/',
            'https://www.instagram.com/jkknedu/',
            'https://www.linkedin.com/school/jkkneducation/',
            'https://www.youtube.com/jkkninstitutions',
            'https://en.wikipedia.org/wiki/J._K._K._Nattraja_Educational_Institutions',
            'https://www.wikidata.org/wiki/Q55090877',
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is the duration of the B.Ed programme?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Bachelor of Education (B.Ed) programme is a 2-year (4 semesters) full-time professional degree course as per NCTE regulations. The programme includes theoretical courses, practical training, and a mandatory 16-week school internship. Learners are required to complete 80-100 credits across all four semesters.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the eligibility criteria for B.Ed admission?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Candidates must have completed a Bachelor\'s degree (BA/B.Sc/B.Com/BCA/BBA or equivalent) from a recognized university with a minimum of 50% aggregate marks for General Category and 45% for Reserved Categories (SC/ST/OBC/PWD). There is no upper age limit for admission. Graduation with school teaching subjects is preferred but not mandatory.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is B.Ed valid for government teaching jobs?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, B.Ed from an NCTE-approved and university-affiliated college is essential for government teaching positions. After completing B.Ed, candidates can appear for CTET (Central Teacher Eligibility Test), State TETs, and various recruitment examinations for KVS, NVS, and state government schools. B.Ed is mandatory for TGT and PGT positions in most schools.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can B.Com/BBA graduates pursue B.Ed?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, graduates from any stream including B.Com, BBA, BCA can pursue B.Ed. Commerce graduates can opt for Commerce and Economics as their teaching subjects. The key requirement is completing graduation with the minimum percentage as per eligibility norms. After B.Ed, they can teach commerce subjects at the secondary and senior secondary levels.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the fee structure for B.Ed programme?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The fee structure varies based on the state fee committee guidelines and category. Generally, the annual tuition fee ranges from ₹40,000 to ₹80,000 for self-financing colleges. Government fee concessions, scholarships, and education loans are available for eligible Learners. Contact the admission office for the current fee structure and payment options.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the school internship in B.Ed?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'School internship is a mandatory 16-20 week practical training component in Semester III where B.Ed Learners teach in actual school settings under mentor supervision. Interns deliver 40-50 lessons in their chosen subjects, participate in school activities, conduct action research, and develop teaching portfolios. This hands-on experience is crucial for developing classroom teaching skills.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I teach in CBSE/ICSE schools after B.Ed?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, B.Ed graduates can teach in CBSE, ICSE, and State Board schools at the secondary (Classes 6-10) and senior secondary (Classes 11-12) levels. For CBSE schools, clearing CTET is often preferred. Private schools may directly recruit based on B.Ed qualification and interview performance. Higher education qualification (M.Ed/NET) enhances career prospects.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are the career options after B.Ed?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'B.Ed opens diverse career paths including: School Teacher (TGT/PGT), Education Officer, Curriculum Designer, Content Developer for ed-tech companies, Education Consultant, Online Tutor, and Research Scholar. Graduates can pursue M.Ed for higher studies or appear for competitive exams like CTET, TET, KVS, NVS, and DSSSB for government positions with salary packages ranging from ₹3-8 LPA.',
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
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://edu.jkkn.ac.in',
            },
          ],
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002309] via-[#004d28] to-[#006837] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white text-center lg:text-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6 lg:mb-8">
                <span className="text-white font-semibold text-xs sm:text-sm">NCTE Approved | NAAC Accredited</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Transform Your Passion for Teaching into a{' '}
                <span className="text-[#7cb983]">Rewarding Career</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
                Join our 2-Year B.Ed Programme and become a certified Learning Facilitator equipped with modern pedagogical skills, innovative teaching methodologies, and a commitment to shaping future generations.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#7cb983] mb-1">98%</div>
                  <div className="text-xs sm:text-sm text-white/80">Placement Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#7cb983] mb-1">70+</div>
                  <div className="text-xs sm:text-sm text-white/80">Years of Excellence</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#7cb983] mb-1">5000+</div>
                  <div className="text-xs sm:text-sm text-white/80">Alumni Network</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#7cb983] mb-1">50+</div>
                  <div className="text-xs sm:text-sm text-white/80 leading-tight">Expert Learning Facilitators</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <HeroButtons />
            </div>

            {/* Right Content - Video/Image Placeholder */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden min-h-[350px] sm:min-h-[450px] lg:min-h-[550px]">
                <Image
                  src="/images/Homepage-Hero-Banner-Image.png"
                  alt="Future Teachers Learning"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Badge Overlays */}
                {/* Top Right - NCTE Approved Badge */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                  <div className="bg-white rounded-lg shadow-lg px-2 py-1.5 sm:px-3 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                    <div className="bg-[#7cb983]/10 p-1 rounded">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#006837]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-[#006837] text-[10px] sm:text-xs">NCTE Approved</div>
                      <div className="text-gray-600 text-[8px] sm:text-[10px]">NAAC Accredited</div>
                    </div>
                  </div>
                </div>

                {/* Top Left - Circular Years Badge */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <div className="bg-[#7cb983] rounded-full w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center shadow-lg">
                    <div className="text-white font-bold text-lg sm:text-xl">70+</div>
                    <div className="text-white text-[8px] sm:text-[9px] font-semibold uppercase tracking-wide text-center">Years<br/>Legacy</div>
                  </div>
                </div>

                {/* Bottom Right - Placement Badge */}
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3">
                  <div className="bg-white rounded-lg shadow-lg px-2 py-1.5 sm:px-3 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <div>
                      <div className="font-bold text-[#006837] text-[10px] sm:text-xs">98%+ Placement</div>
                      <div className="text-gray-600 text-[8px] sm:text-[10px]">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Bar */}
      <AnnouncementBar notices={noticeTexts.length > 0 ? noticeTexts : undefined} />

      {/* Info Cards Section */}
      <section className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Programme Duration */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#006837]/20 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#006837]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 mb-0.5 sm:mb-1">PROGRAMME DURATION</div>
                  <div className="font-bold text-sm sm:text-base lg:text-lg text-[#006837]">2 Years (4 Semesters)</div>
                </div>
              </div>

              {/* Departments */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#7cb983]/20 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 mb-0.5 sm:mb-1">DEPARTMENTS</div>
                  <div className="font-bold text-sm sm:text-base lg:text-lg text-[#006837]">14 Specializations</div>
                </div>
              </div>

              {/* Affiliation */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#006837]/20 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#006837]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 mb-0.5 sm:mb-1">AFFILIATION</div>
                  <div className="font-bold text-sm sm:text-base lg:text-lg text-[#006837]">State University</div>
                </div>
              </div>

              {/* Career Scope */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#002309]/20 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#002309]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 mb-0.5 sm:mb-1">CAREER SCOPE</div>
                  <div className="font-bold text-sm sm:text-base lg:text-lg text-[#006837]">Govt. & Private Schools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Programme Section */}
      <section id="bed-programme" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
              ABOUT THE PROGRAMME
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
              Bachelor of Education (B.Ed) Programme
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto px-2">
              A comprehensive teacher education programme designed to develop competent, committed, and professionally qualified Learning Facilitators for secondary and senior secondary schools.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Left Content */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3 sm:mb-4">What is B.Ed?</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Bachelor of Education (B.Ed) is a two-year professional degree programme approved by the National Council for Teacher Education (NCTE). This programme prepares graduates to become certified school teachers capable of teaching at the secondary (Classes 6-10) and senior secondary (Classes 11-12) levels in both government and private schools across India.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3 sm:mb-4">Programme Objectives</h3>
              <ul className="space-y-3">
                {[
                  'Develop understanding of child psychology and learning theories',
                  'Master innovative teaching methodologies and classroom management',
                  'Acquire skills in curriculum design and assessment strategies',
                  'Integrate technology effectively in educational practices',
                  'Foster inclusive education practices for diverse learners',
                  'Build research capabilities in educational contexts'
                ].map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4 sm:mb-6">Programme Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  'NCTE Approved Curriculum',
                  'State-of-the-Art Learning Studios',
                  'Extensive School Internship',
                  'ICT-Enabled Teaching Labs',
                  'Well-Stocked Library Resources',
                  'Placement Assistance Cell'
                ].map((highlight, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700 text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Modern Learning Studio Box */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-48 sm:h-56 lg:h-64">
                <Image
                  src="/images/Homepage-Modern-Learning-Studio-Image.png"
                  alt="Modern Learning Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/95 backdrop-blur-sm text-[#006837] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm shadow-lg">
                    Modern Learning Studio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
              ACADEMIC EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4">
              Our Departments
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Choose from 14 specialized B.Ed programmes designed to match your academic background and career aspirations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* B.Ed Tamil */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#002309] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-white text-xl sm:text-2xl font-bold">த</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (Tamil)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Master the art of teaching Tamil language and literature with modern pedagogical approaches while preserving rich cultural heritage.
              </p>
              <ul className="space-y-2 mb-4">
                {['Tamil Literature & Grammar', 'Language Teaching Methods', 'Cultural Studies Integration'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#7cb983] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                LANGUAGE
              </span>
              <Link href="/departments/tamil" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>

            {/* B.Ed English */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#7cb983] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-white text-xl sm:text-2xl font-bold">En</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (English)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Develop expertise in teaching English language, literature, and communication skills using innovative teaching strategies.
              </p>
              <ul className="space-y-2 mb-4">
                {['English Language Teaching (ELT)', 'Literature & Phonetics', 'Communication Skills'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#7cb983] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                LANGUAGE
              </span>
              <Link href="/departments/english" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>

            {/* B.Ed Mathematics */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#006837] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-white text-xl sm:text-2xl font-bold">Σ</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (Mathematics)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Learn to make mathematics engaging and accessible through practical applications, problem-solving techniques, and conceptual teaching.
              </p>
              <ul className="space-y-2 mb-4">
                {['Mathematical Concepts & Logic', 'Problem-Based Learning', 'ICT in Mathematics'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#006837] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                SCIENCE
              </span>
              <Link href="/departments/maths" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>

            {/* B.Ed Physics */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#002309] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                  <circle cx="12" cy="12" r="8" strokeWidth="1.5"/>
                  <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.5"/>
                  <ellipse cx="12" cy="12" rx="4" ry="10" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (Physics)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Gain skills to teach physics concepts through experiments, demonstrations, and inquiry-based learning methodologies.
              </p>
              <ul className="space-y-2 mb-4">
                {['Experimental Physics Teaching', 'Laboratory Management', 'Conceptual Physics Pedagogy'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#006837] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                SCIENCE
              </span>
              <Link href="/departments/physics" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>

            {/* B.Ed Chemistry */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#7cb983] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path d="M9 3L9 10L6 17C5.5 18 5.5 19 6 20C6.5 21 7.5 21.5 9 21.5H15C16.5 21.5 17.5 21 18 20C18.5 19 18.5 18 18 17L15 10V3"/>
                  <path d="M9 3H15"/>
                  <path d="M10 3V2"/>
                  <path d="M14 3V2"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (Chemistry)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Master chemistry teaching through hands-on laboratory experiences, safety protocols, and real-world applications.
              </p>
              <ul className="space-y-2 mb-4">
                {['Laboratory-Based Teaching', 'Safety & Green Chemistry', 'Applied Chemistry Methods'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#006837] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                SCIENCE
              </span>
              <Link href="/departments/chemistry" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>

            {/* B.Ed Botany */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#006837] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path d="M12 22V12M12 12C12 10 11 6 7 4M12 12C12 10 13 6 17 4M12 12C10 12 6 11 4 7M12 12C10 12 6 13 4 17"/>
                  <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (Botany)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Develop expertise in teaching plant sciences through field studies, herbarium techniques, and environmental education.
              </p>
              <ul className="space-y-2 mb-4">
                {['Plant Science Pedagogy', 'Field-Based Learning', 'Environmental Education'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#006837] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                SCIENCE
              </span>
              <Link href="/departments/botany" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>

            {/* B.Ed Zoology */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#002309] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path d="M8 2V6M16 2V6"/>
                  <rect x="6" y="6" width="4" height="12" rx="1"/>
                  <rect x="14" y="6" width="4" height="12" rx="1"/>
                  <line x1="8" y1="10" x2="16" y2="10"/>
                  <circle cx="12" cy="18" r="3"/>
                  <line x1="12" y1="21" x2="12" y2="22"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (Zoology)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Learn to teach animal sciences effectively through specimen studies, dissection techniques, and biodiversity conservation.
              </p>
              <ul className="space-y-2 mb-4">
                {['Animal Science Teaching', 'Laboratory Techniques', 'Biodiversity Education'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#006837] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                SCIENCE
              </span>
              <Link href="/departments/zoology" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>

            {/* B.Ed Computer Science */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#7cb983] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="14" rx="2"/>
                  <path d="M2 15h20"/>
                  <path d="M9 19h6"/>
                  <path d="M12 15v4"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (Computer Science)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Prepare to teach computing fundamentals, programming concepts, and digital literacy in the modern digital age.
              </p>
              <ul className="space-y-2 mb-4">
                {['Programming Pedagogy', 'Digital Literacy Training', 'Ed-Tech Integration'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#006837] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                SCIENCE
              </span>
              <Link href="/departments/computer-science" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>

            {/* B.Ed Commerce */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#006837] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-white text-xl sm:text-2xl font-bold">₹</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (Commerce)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Acquire skills to teach commerce, accountancy, and business studies with practical case studies and real-world applications.
              </p>
              <ul className="space-y-2 mb-4">
                {['Accountancy Teaching', 'Business Case Studies', 'Financial Literacy'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#7cb983] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                COMMERCE
              </span>
              <Link href="/departments/commerce" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>

            {/* B.Ed History */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#002309] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path d="M6 3h12c1 0 2 1 2 2v14c0 1-1 2-2 2H6c-1 0-2-1-2-2V5c0-1 1-2 2-2z"/>
                  <line x1="8" y1="7" x2="16" y2="7"/>
                  <line x1="8" y1="11" x2="16" y2="11"/>
                  <line x1="8" y1="15" x2="13" y2="15"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (History)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Develop engaging methods to teach historical events, civilizations, and critical thinking through storytelling and analysis.
              </p>
              <ul className="space-y-2 mb-4">
                {['Historical Narrative Methods', 'Source-Based Teaching', 'Heritage & Museum Education'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#002309] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                SOCIAL SCIENCE
              </span>
              <Link href="/departments/history" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>

            {/* B.Ed Economics */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#7cb983] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path d="M3 20V10L6 7V20M10 20V4L13 7V20M17 20V13L20 10V20M3 20H21"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (Economics)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Learn to teach economic concepts, theories, and current affairs through data analysis and practical applications.
              </p>
              <ul className="space-y-2 mb-4">
                {['Economic Theory Pedagogy', 'Data & Statistics Teaching', 'Current Affairs Integration'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#002309] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                SOCIAL SCIENCE
              </span>
              <Link href="/departments/economics" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>

            {/* B.Ed Microbiology */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#002309] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="8"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  <path d="M12 4v3M12 17v3M4 12h3M17 12h3"/>
                  <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
                  <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                  <circle cx="7" cy="17" r="1.5" fill="currentColor"/>
                  <circle cx="17" cy="17" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (Microbiology)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Specialize in teaching microbiology through laboratory techniques, microscopy, and modern biotechnology applications.
              </p>
              <ul className="space-y-2 mb-4">
                {['Microbial Science Pedagogy', 'Laboratory Techniques', 'Biotechnology Teaching'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#006837] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                SCIENCE
              </span>
              <Link href="/departments/microbiology" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>

            {/* B.Ed Political Science */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#7cb983] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5"/>
                  <line x1="5" y1="8" x2="5" y2="16"/>
                  <line x1="19" y1="8" x2="19" y2="16"/>
                  <circle cx="5" cy="16" r="0.5" fill="currentColor"/>
                  <circle cx="19" cy="16" r="0.5" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (Political Science)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Learn to teach political systems, governance, civic education, and democratic values through interactive methods.
              </p>
              <ul className="space-y-2 mb-4">
                {['Civic Education Methods', 'Constitutional Studies', 'Political System Analysis'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#002309] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                SOCIAL SCIENCE
              </span>
              <Link href="/departments/political-science" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>

            {/* B.Ed Social Science */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="bg-[#006837] w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M3 12h18"/>
                  <ellipse cx="12" cy="12" rx="4" ry="9"/>
                  <path d="M12 3c2 3 2 6 0 9s-2 6 0 9"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#006837] mb-2 sm:mb-3">B.Ed (Social Science)</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                Develop integrated teaching skills for history, geography, civics, and economics with interdisciplinary approaches.
              </p>
              <ul className="space-y-2 mb-4">
                {['Integrated Social Studies', 'Civic Awareness', 'Map Skills & Geography'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block bg-[#002309] text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                SOCIAL SCIENCE
              </span>
              <Link href="/departments/social-science" className="block w-full bg-[#006837] hover:bg-[#004d27] text-white text-center font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm">
                Learn More
              </Link>
            </div>
          </div>

          {/* Get Counselling Box */}
          <div className="border-2 border-dashed border-[#7cb983] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4">
              <span className="font-semibold text-[#006837]">Not sure which department suits you?</span> Our academic counselors can help you choose the right specialization based on your graduation background.
            </p>
            <a href="tel:+919345855001" className="inline-block bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base cursor-pointer">
              Get Counselling
            </a>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
              ADMISSION DETAILS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
              Eligibility Criteria & Admission Process
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Clear pathways to begin your journey as an educator
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {/* Eligibility Criteria */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="bg-[#7cb983]/20 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3 sm:mb-4">Eligibility Criteria</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-1">Educational Qualification:</p>
                  <p className="text-sm">Bachelor&apos;s Degree (BA/B.Sc/B.Com/BCA/BBA or equivalent) from a recognized university</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Minimum Marks:</p>
                  <p className="text-sm">50% aggregate for General Category, 45% for Reserved Categories (SC/ST/OBC/PWD)</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Age Limit:</p>
                  <p className="text-sm">No upper age limit for admission</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Subjects:</p>
                  <p className="text-sm">Graduation with school teaching subjects preferred</p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="bg-[#006837]/20 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#006837]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3 sm:mb-4">Required Documents</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  '10th & 12th Mark Sheets and Certificates',
                  'Graduation Degree Certificate & Mark Sheets',
                  'Transfer Certificate (TC) from last attended institution',
                  'Migration Certificate (if applicable)',
                  'Community Certificate (for reserved categories)',
                  'Aadhaar Card & 4 Passport Size Photographs'
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Admission Process */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="bg-[#002309]/20 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#002309]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-3 sm:mb-4">Admission Process</h3>
              <div className="space-y-4">
                {[
                  'Fill online application form with correct details',
                  'Pay application fee and submit documents',
                  'Appear for entrance examination (if applicable)',
                  'Attend counselling session based on merit',
                  'Complete admission formalities and fee payment'
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-[#7cb983] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#002309] to-[#006837] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-white text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Ready to Begin Your Teaching Career?</h3>
              <p className="text-white/90 text-sm sm:text-base">Applications for the 2025-26 academic session are now open. Limited seats available—apply early to secure your admission.</p>
            </div>
            <Link href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-white hover:bg-gray-100 active:bg-gray-200 text-[#006837] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 whitespace-nowrap text-sm sm:text-base flex-shrink-0">
              Start Application
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
              WORLD-CLASS FACILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
              Infrastructure & Learning Resources
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Modern facilities designed to provide an immersive learning experience
            </p>
          </div>

          {/* Main Facilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Smart Learning Studio */}
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] h-36 sm:h-44 lg:h-48 flex items-center justify-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center px-2">Smart Learning Studio</h3>
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="text-xl font-bold text-[#006837] mb-3">Smart Learning Studios</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Air-conditioned Learning Studios equipped with interactive smart boards, projectors, and audio-visual aids for effective teaching demonstrations and micro-teaching sessions.
                </p>
              </div>
            </div>

            {/* Digital Library */}
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#7cb983] h-36 sm:h-44 lg:h-48 flex items-center justify-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center px-2">Digital Library</h3>
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="text-xl font-bold text-[#006837] mb-3">Digital Library</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Extensive collection of 15,000+ books, e-journals, INFLIBNET access, and dedicated reading spaces for research and academic pursuits.
                </p>
              </div>
            </div>

            {/* ICT Laboratory */}
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#002309] to-[#006837] h-36 sm:h-44 lg:h-48 flex items-center justify-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center px-2">ICT Laboratory</h3>
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="text-xl font-bold text-[#006837] mb-3">ICT Laboratory</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  State-of-the-art computer lab with 60+ systems, high-speed internet, and educational software for developing digital teaching competencies.
                </p>
              </div>
            </div>

            {/* Psychology Lab */}
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] h-36 sm:h-44 lg:h-48 flex items-center justify-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center px-2">Psychology Lab</h3>
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="text-xl font-bold text-[#006837] mb-3">Psychology Laboratory</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fully equipped lab with psychological testing tools, counseling facilities, and resources for understanding learner behavior and development.
                </p>
              </div>
            </div>

            {/* Science Lab */}
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#7cb983] to-[#7cb983] h-36 sm:h-44 lg:h-48 flex items-center justify-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center px-2">Science Lab</h3>
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="text-xl font-bold text-[#006837] mb-3">Science Resource Centre</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Well-equipped science labs for physics, chemistry, and biology teaching methodology with teaching aids and demonstration equipment.
                </p>
              </div>
            </div>

            {/* Seminar Hall */}
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gradient-to-br from-[#002309] to-[#006837] h-36 sm:h-44 lg:h-48 flex items-center justify-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center px-2">Seminar Hall</h3>
              </div>
              <div className="p-4 sm:p-6">
                <h4 className="text-xl font-bold text-[#006837] mb-3">Seminar Hall</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  300-seater air-conditioned auditorium for seminars, workshops, conferences, and cultural events with modern AV facilities.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Facilities */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#006837] text-center mb-4 sm:mb-6 lg:mb-8">Additional Facilities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 lg:gap-4">
              {[
                { icon: '🎨', label: 'Art & Craft Room' },
                { icon: '🏃', label: 'Sports Ground' },
                { icon: '🏠', label: 'Hostel Facility' },
                { icon: '🍽️', label: 'Cafeteria' },
                { icon: '🚌', label: 'Transport Service' },
                { icon: '🏥', label: 'Medical Centre' },
                { icon: '📶', label: 'Wi-Fi Campus' },
                { icon: '🔒', label: '24/7 Security' }
              ].map((facility, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{facility.icon}</div>
                  <div className="text-[10px] sm:text-xs font-medium text-gray-700 leading-tight">{facility.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
              CAREER EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
              Placements & Career Opportunities
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Comprehensive placement support to launch your teaching career
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-[#006837] mb-6">Career Prospects After B.Ed</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A B.Ed degree opens doors to diverse career opportunities in the education sector. Our dedicated Placement Cell works tirelessly to connect graduates with the best opportunities.
              </p>

              <div className="space-y-6">
                {/* School Teacher */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-2xl">🏫</div>
                    <h4 className="text-lg font-bold text-[#006837]">School Teacher</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Teach at government or private schools (Classes 6-12) across CBSE, ICSE, and State Board schools.
                  </p>
                </div>

                {/* TGT/PGT Positions */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-2xl">📚</div>
                    <h4 className="text-lg font-bold text-[#006837]">TGT/PGT Positions</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Qualify for Trained Graduate Teacher (TGT) and Post Graduate Teacher (PGT) positions through competitive exams.
                  </p>
                </div>

                {/* Higher Education */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-2xl">🎓</div>
                    <h4 className="text-lg font-bold text-[#006837]">Higher Education</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Pursue M.Ed, M.Phil, or Ph.D. for academic and research careers in teacher education institutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              {/* Placement Rate Box */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 lg:mb-8 h-[200px] sm:h-[250px] lg:h-[300px]">
                <Image
                  src="/images/Homepage-Placement-Rate-Image.png"
                  alt="98% Placement Rate"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/95 backdrop-blur-sm text-[#006837] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm shadow-lg">
                    98% Placement Rate
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 text-center shadow-sm border border-gray-200">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#7cb983] mb-1 sm:mb-2">₹3-8 LPA</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600">Salary Range</div>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 text-center shadow-sm border border-gray-200">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#7cb983] mb-1 sm:mb-2">100+</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600">Recruiting Schools</div>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6 text-center shadow-sm border border-gray-200">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#7cb983] mb-1 sm:mb-2">15+</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600">Campus Drives/Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Career Options */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Higher Education */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-2xl mb-3">🎓</div>
              <h4 className="text-lg font-bold text-[#006837] mb-3">Higher Education</h4>
              <p className="text-sm text-gray-600">
                Pursue M.Ed, M.Phil, or Ph.D. for academic and research careers in teacher education institutions.
              </p>
            </div>

            {/* Education Officer */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-2xl mb-3">📋</div>
              <h4 className="text-lg font-bold text-[#006837] mb-3">Education Officer</h4>
              <p className="text-sm text-gray-600">
                Become Block/District Education Officer through state and central government examinations.
              </p>
            </div>

            {/* Education Consultant */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-2xl mb-3">💼</div>
              <h4 className="text-lg font-bold text-[#006837] mb-3">Education Consultant</h4>
              <p className="text-sm text-gray-600">
                Work with educational organizations, NGOs, and ed-tech companies as curriculum designers or trainers.
              </p>
            </div>

            {/* Online Educator */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-2xl mb-3">🌐</div>
              <h4 className="text-lg font-bold text-[#006837] mb-3">Online Educator</h4>
              <p className="text-sm text-gray-600">
                Join e-learning platforms as content creators, online tutors, or instructional designers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiting Partners */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006837] text-center mb-6 sm:mb-8 lg:mb-12">
            Our Recruiting Partners
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {['KVS', 'NVS', 'DAV', 'DPS', 'CBSE Schools', 'State Govt'].map((partner, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-200 flex items-center justify-center">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 text-center">{partner}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Teaching Examinations */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006837] text-center mb-3 sm:mb-4">
            Government Teaching Examinations
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto px-2">
            B.Ed graduates are eligible to appear for various government teaching examinations:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* CTET */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border-t-4 border-[#7cb983]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-2 sm:mb-3 text-center">CTET</h3>
              <p className="text-sm text-gray-600 text-center">
                Central Teacher Eligibility Test conducted by CBSE for teaching in central government schools.
              </p>
            </div>

            {/* TET */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border-t-4 border-[#7cb983]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-2 sm:mb-3 text-center">TET</h3>
              <p className="text-sm text-gray-600 text-center">
                State-level Teacher Eligibility Tests for teaching positions in state government schools.
              </p>
            </div>

            {/* KVS/NVS */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border-t-4 border-[#7cb983]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-2 sm:mb-3 text-center">KVS/NVS</h3>
              <p className="text-sm text-gray-600 text-center">
                Recruitment examinations for Kendriya Vidyalayas and Navodaya Vidyalayas.
              </p>
            </div>

            {/* DSSSB */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border-t-4 border-[#7cb983]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#006837] mb-2 sm:mb-3 text-center">DSSSB</h3>
              <p className="text-sm text-gray-600 text-center">
                Delhi Subordinate Services Selection Board for teaching posts in Delhi schools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
              SUCCESS STORIES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4">
              What Our Alumni Say
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Hear from our graduates who are now successful Learning Facilitators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="text-4xl text-[#7cb983] mb-4">&ldquo;</div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                The B.Ed programme transformed my understanding of education. The practical training and supportive Learning Facilitators prepared me well for my career. I&apos;m now teaching at a CBSE school and loving every moment!
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-[#7cb983] w-14 h-14 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl sm:text-2xl font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#006837]">Priya Sharma</h4>
                  <p className="text-sm text-[#7cb983]">Batch 2022 | TGT Mathematics</p>
                  <p className="text-xs text-gray-500">Delhi Public School, Chennai</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="text-4xl text-[#7cb983] mb-4">&ldquo;</div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                The internship experience was invaluable. Real classroom exposure during the 16-week internship gave me confidence. The placement cell helped me secure a position even before graduation.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-[#002309] w-14 h-14 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl sm:text-2xl font-bold">R</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#006837]">Rajesh Kumar</h4>
                  <p className="text-sm text-[#7cb983]">Batch 2021 | PGT Science</p>
                  <p className="text-xs text-gray-500">Kendriya Vidyalaya, Coimbatore</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="text-4xl text-[#7cb983] mb-4">&ldquo;</div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                Excellent infrastructure and dedicated Learning Facilitators make this college stand out. The focus on inclusive education and technology integration has been incredibly beneficial for my career growth.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-[#006837] w-14 h-14 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl sm:text-2xl font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#006837]">Sunita Devi</h4>
                  <p className="text-sm text-[#7cb983]">Batch 2023 | TGT English</p>
                  <p className="text-xs text-gray-500">Navodaya Vidyalaya, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-2">
              Find answers to common queries about B.Ed admission, eligibility, and career prospects
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {/* FAQ Item 1 */}
            <details className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-[#006837]">What is the duration of the B.Ed programme?</span>
                <span className="text-[#7cb983] text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                The Bachelor of Education (B.Ed) programme is a 2-year (4 semesters) full-time professional degree course as per NCTE regulations. The programme includes theoretical courses, practical training, and a mandatory 16-week school internship. Learners are required to complete 80-100 credits across all four semesters.
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-[#006837]">What is the eligibility criteria for B.Ed admission?</span>
                <span className="text-[#7cb983] text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                Candidates must have completed a Bachelor&apos;s degree (BA/B.Sc/B.Com/BCA/BBA or equivalent) from a recognized university with a minimum of 50% aggregate marks for General Category and 45% for Reserved Categories (SC/ST/OBC/PWD). There is no upper age limit for admission. Graduation with school teaching subjects is preferred but not mandatory.
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-[#006837]">Is B.Ed valid for government teaching jobs?</span>
                <span className="text-[#7cb983] text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                Yes, B.Ed from an NCTE-approved and university-affiliated college is essential for government teaching positions. After completing B.Ed, candidates can appear for CTET (Central Teacher Eligibility Test), State TETs, and various recruitment examinations for KVS, NVS, and state government schools. B.Ed is mandatory for TGT and PGT positions in most schools.
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-[#006837]">Can B.Com/BBA graduates pursue B.Ed?</span>
                <span className="text-[#7cb983] text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                Yes, graduates from any stream including B.Com, BBA, BCA can pursue B.Ed. Commerce graduates can opt for Commerce and Economics as their teaching subjects. The key requirement is completing graduation with the minimum percentage as per eligibility norms. After B.Ed, they can teach commerce subjects at the secondary and senior secondary levels.
              </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-[#006837]">What is the fee structure for B.Ed programme?</span>
                <span className="text-[#7cb983] text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                The fee structure varies based on the state fee committee guidelines and category. Generally, the annual tuition fee ranges from ₹40,000 to ₹80,000 for self-financing colleges. Government fee concessions, scholarships, and education loans are available for eligible Learners. Contact the admission office for the current fee structure and payment options.
              </div>
            </details>

            {/* FAQ Item 6 */}
            <details className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-[#006837]">What is the school internship in B.Ed?</span>
                <span className="text-[#7cb983] text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                School internship is a mandatory 16-20 week practical training component in Semester III where B.Ed Learners teach in actual school settings under mentor supervision. Interns deliver 40-50 lessons in their chosen subjects, participate in school activities, conduct action research, and develop teaching portfolios. This hands-on experience is crucial for developing classroom teaching skills.
              </div>
            </details>

            {/* FAQ Item 7 */}
            <details className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-[#006837]">Can I teach in CBSE/ICSE schools after B.Ed?</span>
                <span className="text-[#7cb983] text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                Yes, B.Ed graduates can teach in CBSE, ICSE, and State Board schools at the secondary (Classes 6-10) and senior secondary (Classes 11-12) levels. For CBSE schools, clearing CTET is often preferred. Private schools may directly recruit based on B.Ed qualification and interview performance. Higher education qualification (M.Ed/NET) enhances career prospects.
              </div>
            </details>

            {/* FAQ Item 8 */}
            <details className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-[#006837]">What are the career options after B.Ed?</span>
                <span className="text-[#7cb983] text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-4 text-gray-600 text-sm leading-relaxed">
                B.Ed opens diverse career paths including: School Teacher (TGT/PGT), Education Officer, Curriculum Designer, Content Developer for ed-tech companies, Education Consultant, Online Tutor, and Research Scholar. Graduates can pursue M.Ed for higher studies or appear for competitive exams like CTET, TET, KVS, NVS, and DSSSB for government positions with salary packages ranging from ₹3-8 LPA.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div>
              <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                ADMISSIONS 2025-26
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4 sm:mb-6">
                Begin Your Journey as a Future Educator
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
                Take the first step towards a fulfilling career in education. Our admission process is simple, transparent, and supportive.
              </p>

              {/* Timeline */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-[#7cb983] font-bold text-sm sm:text-base sm:min-w-[140px]">Jan - Mar 2025</span>
                  <span className="text-gray-700 text-sm sm:text-base">Application Window Open</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-[#7cb983] font-bold text-sm sm:text-base sm:min-w-[140px]">Apr 2025</span>
                  <span className="text-gray-700 text-sm sm:text-base">Entrance Examination</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-[#7cb983] font-bold text-sm sm:text-base sm:min-w-[140px]">May - Jun 2025</span>
                  <span className="text-gray-700 text-sm sm:text-base">Counselling & Admission</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-[#7cb983] font-bold text-sm sm:text-base sm:min-w-[140px]">Jul 2025</span>
                  <span className="text-gray-700 text-sm sm:text-base">Classes Commence</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Link
                  href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                  className="inline-block bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 text-center text-sm sm:text-base"
                >
                  Apply Online Now
                </Link>
                <button
                  
                  className="inline-block bg-transparent border-2 border-[#006837] hover:bg-[#006837] hover:text-white text-[#006837] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 text-center text-sm sm:text-base"
                >
                  Download Prospectus
                </button>
              </div>

          
            </div>

            {/* Right Content - Orange Box */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden min-h-[200px] sm:min-h-[300px] lg:min-h-[500px]">
              <Image
                src="/images/Homepage-Start-Your-Teaching-Career-Image.png"
                alt="Start Your Teaching Career"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4">
                <span className="bg-white/95 backdrop-blur-sm text-[#006837] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm shadow-lg">
                  Start Your Teaching Career
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
