import { createClient } from '@/lib/supabase/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { UserCircle2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Faculty | JKKN Dental College & Hospital',
  description:
    'Meet the experienced faculty of JKKN Dental College & Hospital, Komarapalayam. Qualified professors and specialists in BDS and MDS programmes.',
  alternates: { canonical: '/faculty/' },
  openGraph: {
    title: 'Faculty | JKKN Dental College & Hospital',
    description:
      'Meet the experienced faculty of JKKN Dental College & Hospital, Komarapalayam.',
    url: 'https://dental.jkkn.ac.in/faculty/',
    siteName: 'JKKN Dental College & Hospital',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faculty | JKKN Dental College & Hospital',
    description:
      'Meet the experienced faculty of JKKN Dental College & Hospital, Komarapalayam.',
  },
};

export default async function FacultyPage() {
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID;

  const { data: members } = await supabase
    .from('faculty')
    .select(
      'id, name, designation, department, qualification, experience_years, photo_url, slug'
    )
    .eq('college_id', collegeId)
    .eq('is_active', true)
    .order('display_order', { ascending: true })
    .order('name', { ascending: true });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FBF8F3]">
        {/* Hero */}
        <section className="bg-[#1B5E20] py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[#FFC107] text-xs font-semibold tracking-widest uppercase mb-2">
            JKKN COLLEGE OF EDUCATION
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Our Faculty</h1>
            <p className="text-green-200 mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Experienced specialists guiding the next generation of dental professionals.
            </p>
          </div>
        </section>

        {/* Faculty Grid */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          {members && members.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {members.map((m) => {
                const initials = m.name
                  .split(' ')
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w: string) => w[0].toUpperCase())
                  .join('');

                const card = (
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition">
                    {/* Photo / Initials */}
                    <div className="w-28 h-28 rounded-full overflow-hidden mb-4 flex-shrink-0 bg-[#1B5E20] flex items-center justify-center">
                      {m.photo_url ? (
                        <img
                          src={m.photo_url}
                          alt={m.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white text-xl font-bold">{initials}</span>
                      )}
                    </div>

                    {/* Info */}
                    <p className="font-semibold text-gray-900 text-sm leading-snug">
                      {m.name}
                    </p>
                    {m.designation && (
                      <p className="text-xs text-[#1B5E20] font-medium mt-0.5">
                        {m.designation}
                      </p>
                    )}
                    {m.department && (
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                        {m.department}
                      </p>
                    )}
                    {m.qualification && (
                      <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                        {m.qualification}
                      </p>
                    )}
                    {m.experience_years > 0 && (
                      <p className="text-xs text-gray-400 mt-0.5">
                        {m.experience_years}+ yrs experience
                      </p>
                    )}
                  </div>
                );

                return (
                  <div key={m.id}>
                    <a href={`/faculty/${m.slug || m.id}/`} target="_blank" rel="noopener noreferrer" className="block">
                      {card}
                    </a>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                <UserCircle2 className="w-8 h-8 text-gray-300" />
              </div>
              <p className="text-gray-500 font-medium">No faculty members found.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
