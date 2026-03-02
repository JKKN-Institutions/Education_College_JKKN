import { createClient } from '@/lib/supabase/server';
import { UserCircle2, Mail, BookOpen, Briefcase } from 'lucide-react';

export const revalidate = 3600;

export default async function FacultyDetails() {
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'education';

  const { data: faculty } = await supabase
    .from('faculty')
    .select('id, name, designation, department, qualification, experience_years, photo_url, email')
    .eq('college_id', collegeId)
    .eq('is_active', true)
    .order('display_order', { ascending: true })
    .order('name', { ascending: true });

  // Group by designation with preferred sort order
  const designationOrder = ['Principal', 'Vice Principal', 'Professor', 'Associate Professor', 'Assistant Professor', 'Senior Lecturer', 'Lecturer'];
  const grouped: Record<string, typeof faculty> = {};

  faculty?.forEach((m) => {
    const key = m.designation || 'Other';
    if (!grouped[key]) grouped[key] = [];
    grouped[key]!.push(m);
  });

  const sortedGroups = Object.keys(grouped).sort((a, b) => {
    const ai = designationOrder.indexOf(a);
    const bi = designationOrder.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  return (
    <main className="min-h-screen bg-[#FBFBEE]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#002309] to-[#006837] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Faculty</h1>
          <p className="text-white/70 text-lg">
            Meet the dedicated educators shaping the future at JKKN College of Education
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {faculty && faculty.length > 0 ? (
          <div className="space-y-12">
            {sortedGroups.map((designation) => (
              <section key={designation}>
                <h2 className="text-xl font-bold text-[#002309] mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-7 bg-[#006837] rounded-full inline-block" />
                  {designation}
                  <span className="text-sm font-normal text-gray-400 ml-1">
                    ({grouped[designation]!.length})
                  </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {grouped[designation]!.map((member) => (
                    <div
                      key={member.id}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-md transition-shadow"
                    >
                      {member.photo_url ? (
                        <img
                          src={member.photo_url}
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-gray-50 shadow-sm"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                          <UserCircle2 className="w-12 h-12 text-gray-300" />
                        </div>
                      )}

                      <h3 className="font-bold text-gray-900 text-base leading-snug">{member.name}</h3>
                      <p className="text-[#006837] text-sm font-medium mt-0.5">{member.designation}</p>

                      {member.department && (
                        <p className="text-gray-500 text-xs mt-1.5">{member.department}</p>
                      )}

                      {member.qualification && (
                        <div className="flex items-start gap-1.5 mt-2 justify-center">
                          <BookOpen className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-gray-500 text-left">{member.qualification}</p>
                        </div>
                      )}

                      {member.experience_years > 0 && (
                        <div className="flex items-center gap-1.5 mt-1.5 justify-center">
                          <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                          <p className="text-xs text-gray-500">{member.experience_years} years experience</p>
                        </div>
                      )}

                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-1.5 mt-2 justify-center text-xs text-[#006837] hover:underline"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          {member.email}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
              <UserCircle2 className="w-10 h-10 text-gray-300" />
            </div>
            <p className="text-xl font-semibold text-gray-600 mb-2">Faculty details coming soon</p>
            <p className="text-gray-400">Our faculty information is being updated.</p>
          </div>
        )}
      </div>
    </main>
  );
}
