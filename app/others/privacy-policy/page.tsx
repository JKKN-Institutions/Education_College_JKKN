import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata = seoMetadata(
  'Privacy Policy',
  'Privacy policy of JKKN College of Education — how we collect, use, and protect your personal information.',
  '/others/privacy-policy'
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Privacy Policy', href: '/others/privacy-policy' },
      ]} />
      <Header />

      {/* Privacy Policy Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" style={{ color: '#2d3748' }}>
            Privacy Policy
          </h1>

          {/* Opening Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: '#4a5568' }}>
            At JKKN College of Education, we value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose information about our students, staff, and other stakeholders.
          </p>

          {/* Information We Collect */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2d3748' }}>
            Information We Collect
          </h2>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6" style={{ color: '#4a5568' }}>
            We may collect personal information from you, such as your name, email address, phone number, address, and other details when you apply for admission, register for a course, or interact with us in other ways. We may also collect information about your academic and professional background, including transcripts, resumes, and references.
          </p>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: '#4a5568' }}>
            In addition, we may collect information automatically when you visit our website, such as your IP address, browser type, operating system, and other technical details.
          </p>

          {/* How We Use Your Information */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2d3748' }}>
            How We Use Your Information
          </h2>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4" style={{ color: '#4a5568' }}>
            We may use your personal information for the following purposes:
          </p>

          <ul className="space-y-3 ml-4 sm:ml-6 mb-6 sm:mb-8">
            <li
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                color: '#4a5568',
                listStyleType: 'disc',
                paddingLeft: '0.5rem'
              }}
            >
              To provide educational and administrative services, such as course registration, academic advising, and career services.
            </li>
            <li
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                color: '#4a5568',
                listStyleType: 'disc',
                paddingLeft: '0.5rem'
              }}
            >
              To communicate with you about our programs, services, and events.
            </li>
            <li
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                color: '#4a5568',
                listStyleType: 'disc',
                paddingLeft: '0.5rem'
              }}
            >
              To process payments and manage financial aid.
            </li>
            <li
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                color: '#4a5568',
                listStyleType: 'disc',
                paddingLeft: '0.5rem'
              }}
            >
              To comply with legal obligations, such as reporting requirements and requests from government agencies.
            </li>
            <li
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                color: '#4a5568',
                listStyleType: 'disc',
                paddingLeft: '0.5rem'
              }}
            >
              To improve our website and other systems, and to conduct research and analysis.
            </li>
          </ul>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: '#4a5568' }}>
            We may also use your information for other purposes that are consistent with this privacy policy and that you have consented to or that are permitted by law.
          </p>

          {/* How We Share Your Information */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2d3748' }}>
            How We Share Your Information
          </h2>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4" style={{ color: '#4a5568' }}>
            We may share your personal information with third parties in the following circumstances:
          </p>

          <ul className="space-y-3 ml-4 sm:ml-6 mb-6 sm:mb-8">
            <li
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                color: '#4a5568',
                listStyleType: 'disc',
                paddingLeft: '0.5rem'
              }}
            >
              With your consent or at your direction.
            </li>
            <li
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                color: '#4a5568',
                listStyleType: 'disc',
                paddingLeft: '0.5rem'
              }}
            >
              With our service providers who assist us in providing educational and administrative services, such as IT support, payment processing, and marketing.
            </li>
            <li
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                color: '#4a5568',
                listStyleType: 'disc',
                paddingLeft: '0.5rem'
              }}
            >
              With our academic partners who offer joint programs and courses.
            </li>
            <li
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                color: '#4a5568',
                listStyleType: 'disc',
                paddingLeft: '0.5rem'
              }}
            >
              With government agencies or other parties as required by law or to protect our legal rights or the safety of others.
            </li>
            <li
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{
                color: '#4a5568',
                listStyleType: 'disc',
                paddingLeft: '0.5rem'
              }}
            >
              In connection with a merger, acquisition, or other business transaction involving JKKN College of Education.
            </li>
          </ul>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: '#4a5568' }}>
            We may also share information that is aggregated or anonymized and does not identify you personally.
          </p>

          {/* How We Protect Your Information */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2d3748' }}>
            How We Protect Your Information
          </h2>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6" style={{ color: '#4a5568' }}>
            We take reasonable measures to protect your personal information from unauthorized access, use, and disclosure. We use a combination of physical, technical, and administrative safeguards to protect your information, including encryption, firewalls, and access controls.
          </p>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: '#4a5568' }}>
            However, no system can guarantee complete security, and we cannot guarantee the security of your information. Therefore, you should take steps to protect your own information, such as using strong passwords and avoiding sharing sensitive information over unsecured networks.
          </p>

          {/* Your Rights and Choices */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2d3748' }}>
            Your Rights and Choices
          </h2>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6" style={{ color: '#4a5568' }}>
            You have certain rights regarding your personal information, such as the right to access, correct, and delete your information. You may also have the right to object to certain uses of your information, such as for marketing purposes.
          </p>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: '#4a5568' }}>
            To exercise your rights or to request more information about our privacy practices, please contact us at admin@jkkn.ac.in. We will respond to your request as soon as reasonably practicable.
          </p>

          {/* Updates to this Privacy Policy */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2d3748' }}>
            Updates to this Privacy Policy
          </h2>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: '#4a5568' }}>
            We may update this privacy policy from time to time to reflect changes in our information practices or legal requirements. We will notify you of any material changes to this policy by posting a notice on our website or by other means.
          </p>

          {/* Contact Us */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2d3748' }}>
            Contact Us
          </h2>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6" style={{ color: '#4a5568' }}>
            If you have any questions or concerns about this privacy policy or our privacy practices, please contact us at:
          </p>

          <div className="space-y-2 mb-6" style={{ color: '#4a5568' }}>
            <p className="text-sm sm:text-base lg:text-lg">
              <strong>Call:</strong> +919345855001
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              <strong>Email:</strong> admin@jkkn.ac.in
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              <strong>Address:</strong> JKKN College of Education, NH-544 (Salem to Coimbatore Highway), Kumarapalayam, Namakkal (DT), Tamil Nadu. 638183.
            </p>
          </div>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: '#4a5568' }}>
            We will endeavor to resolve any complaints or disputes about our privacy practices in a timely and fair manner.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
