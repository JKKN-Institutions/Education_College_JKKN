import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  "Principal's Message",
  "Message from the Principal of JKKN College of Education, Dr. KM Ranjendiran — B.Ed college in Kumarapalayam, Namakkal.",
  '/about/principal-message',
  { keywords: ['JKKN principal', 'principal message', 'Dr KM Ranjendiran'] }
);

export default function PrincipalMessage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: "Principal's Message", href: '/about/principal-message' },
      ]} />
      <Header />

      {/* Principal Message Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-4xl">
          {/* Principal Photo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] h-[220px] sm:h-[260px] md:h-[320px]">
              <Image
                src="/images/Principal_message.jpg"
                alt="Dr.KM.Ranjendiran - Principal"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Principal Name and Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: '#1e7f4e' }}>
              Principal&apos;s Message
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2" style={{ color: '#1e7f4e' }}>
              Dr.KM.Ranjendiran
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6" style={{ color: '#1e7f4e' }}>
              Principal, JKKN College of Education
            </p>
          </div>

          {/* Message Content */}
          <div className="space-y-6 text-justify">
            {/* Welcome */}
            <p className="text-sm sm:text-base lg:text-lg font-semibold" style={{ color: '#4a5568' }}>
              Welcome to JKKN College of Education!
            </p>

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
              Education is the cornerstone of a nation's progress, and at JKKN College of Education, we take pride in our commitment to nurturing the future generation of educators. Our college is a vibrant and dynamic learning community that strives for excellence in teaching, research, and community engagement.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
              As the Principal of JKKN College of Education, it gives me immense pleasure to lead this esteemed institution, where we endeavor to create an enriching environment that fosters intellectual curiosity, critical thinking, and holistic development among our students. Our mission is to empower aspiring teachers with the knowledge, skills, and values they need to become effective educators who can make a positive impact in the lives of their students.
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
              We believe that a teacher's role extends beyond the boundaries of the classroom. Our faculty members are not just educators but also mentors who inspire and guide students on their journey toward becoming compassionate and capable professionals. We encourage our students to embrace innovation, embrace diversity, and embrace the joy of learning, as we equip them with the necessary tools to thrive in the ever-evolving landscape of education.
            </p>

            {/* Paragraph 4 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
              At JKKN College of Education, we understand the importance of practical experience in shaping a teacher's abilities. Our comprehensive and well-structured curriculum incorporates hands-on training, internships, and community outreach programs, enabling our students to gain real-world exposure and develop a deep understanding of the education sector.
            </p>

            {/* Paragraph 5 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
              We also emphasize research and encourage our faculty and students to explore innovative ideas that can revolutionize teaching methodologies and contribute to the advancement of education. Our college provides a supportive and nurturing environment that allows researchers to flourish and share their insights with the wider academic community.
            </p>

            {/* Paragraph 6 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
              Furthermore, we take pride in our state-of-the-art facilities that create a conducive learning atmosphere for our students. Our well-equipped classrooms, advanced laboratories, and extensive library resources enrich the learning experience and provide a platform for academic growth.
            </p>

            {/* Paragraph 7 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
              At JKKN College of Education, we are deeply committed to fostering a culture of inclusivity and respect. We celebrate diversity and uphold the values of integrity, empathy, and social responsibility. We strive to create an environment where every individual feels valued and appreciated, irrespective of their background or beliefs.
            </p>

            {/* Paragraph 8 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
              I extend a warm invitation to all prospective students to join us in this incredible journey of learning and self-discovery. Together, we can shape a future where education becomes a catalyst for positive change, empowering individuals and societies to thrive.
            </p>

            {/* Paragraph 9 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
              Thank you for considering JKKN College of Education for your educational pursuit. I assure you that with our dedicated faculty, cutting-edge facilities, and unwavering commitment to excellence, your time at our institution will be truly transformative.
            </p>

            {/* Closing */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
              Wishing you all success and looking forward to welcoming you to our college!
            </p>

            {/* Signature */}
            <div className="pt-6">
              <p className="text-sm sm:text-base lg:text-lg font-semibold mb-6" style={{ color: '#4a5568' }}>
                Sincerely,
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-bold" style={{ color: '#4a5568' }}>
                Dr.KM.Ranjendiran
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-semibold" style={{ color: '#4a5568' }}>
                Principal, JKKN College of Education
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
