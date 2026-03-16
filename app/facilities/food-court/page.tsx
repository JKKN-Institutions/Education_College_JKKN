import { seoMetadata } from '@/lib/seo-metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = seoMetadata(
  'Food Court',
  'On-campus food court at JKKN College of Education offering hygienic, affordable meals for students and staff.',
  '/facilities/food-court',
  { keywords: ['JKKN food court', 'college canteen', 'campus dining'] }
);

export default function FoodCourt() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Food Court Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12" style={{ color: '#1e7f4e' }}>
            FOOD COURT
          </h1>

          {/* Three Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
            {/* Image 1 - Exterior */}
            <div className="relative w-full h-48 sm:h-56 lg:h-64">
              <Image
                src="/images/foodcourt-1.webp"
                alt="Food Court Exterior"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Image 2 - Interior 1 */}
            <div className="relative w-full h-48 sm:h-56 lg:h-64">
              <Image
                src="/images/foodcourt-2.webp"
                alt="Food Court Interior 1"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Image 3 - Interior 2 */}
            <div className="relative w-full h-48 sm:h-56 lg:h-64">
              <Image
                src="/images/foodcourt-3.webp"
                alt="Food Court Interior 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6 max-w-6xl">
            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              At JKKN Educational Institutions, our canteen is more than just a place to grab a quick bite. It&apos;s a social hub where students can come together to relax, catch up with friends, and refuel before diving back into their studies. Our comfortable seating and warm, welcoming atmosphere provide the perfect backdrop for a well-deserved break.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify" style={{ color: '#4a5568' }}>
              When it comes to food options, our canteen has something for everyone. Our menu features a wide range of delicious and satisfying meals, including fresh salads, sandwiches, hearty hot meals, and snacks. We also cater to a variety of dietary needs and preferences, so you can feel confident that you&apos;ll find something to suit your taste buds.
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify mb-4" style={{ color: '#4a5568' }}>
              At JKKN Educational Institutions, we believe that good food and a welcoming atmosphere are essential for a positive educational experience. So, whether you&apos;re looking for a quick snack or a full meal, our canteen has got you covered.
            </p>

            {/* Bulleted List */}
            <ul className="space-y-3 ml-6">
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed font-semibold"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                Diverse menu
              </li>
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed font-semibold"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                Quality ingredients
              </li>
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed font-semibold"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                Healthy options
              </li>
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed font-semibold"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                Affordable prices
              </li>
              <li
                className="text-sm sm:text-base lg:text-lg leading-relaxed font-semibold"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                Hygiene and safety
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
