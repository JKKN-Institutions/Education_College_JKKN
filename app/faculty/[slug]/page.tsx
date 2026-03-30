import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const dynamic = 'force-dynamic';

// ─── Types ────────────────────────────────────────────────────────────────────

type AcademicQualification = { degree: string; specialisation: string; university: string; year: string };
type ExperienceEntry = { type: string; period_start: string; period_end: string; role: string; institution: string; description: string };
type Publication = { title: string; authors: string; journal: string; year: string; doi_url: string; pubmed_url: string };
type FundedResearch = { project: string; agency: string; amount: string; period: string; status: string };
type Certification = { name: string; organisation: string; year: string };
type Award = { award: string; body: string; year: string };
type Membership = { organisation: string; type: string; since: string };
type PhdScholar = { scholar: string; research_topic: string; status: string };
type FAQ = { question: string; answer: string };

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data } = await supabase
    .from('faculty')
    .select('name, designation, department')
    .or(`slug.eq.${slug},id.eq.${slug}`)
    .eq('college_id', process.env.NEXT_PUBLIC_COLLEGE_ID)
    .single();

  if (!data) return { title: 'Faculty | JKKN Dental College & Hospital' };

  const title = `${data.name} — ${data.designation} | JKKN Dental College & Hospital`;
  const description = `Learn about ${data.name}, ${data.designation}${data.department ? ` in the ${data.department}` : ''} at JKKN Dental College & Hospital, Komarapalayam.`;

  return {
    title,
    description,
    alternates: { canonical: `/faculty/${slug}/` },
    openGraph: { title, description, url: `https://dental.jkkn.ac.in/faculty/${slug}/`, siteName: 'JKKN Dental College & Hospital', type: 'website', locale: 'en_IN' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function FacultyProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID;

  const { data: m } = await supabase
    .from('faculty')
    .select(`
      id, name, designation, department, qualification, experience_years,
      photo_url, email, slug,
      summary, research_papers_count, phd_scholars_count, awards_won_count,
      google_scholar_url, researchgate_url, orcid_url,
      mentoring_description, pg_dissertations_guided, ug_projects_guided,
      badges, academic_qualifications, areas_of_specialisation,
      experience, research_focus, publications, funded_research,
      certifications, awards, memberships, phd_scholars, faqs
    `)
    .or(`slug.eq.${slug},id.eq.${slug}`)
    .eq('college_id', collegeId)
    .eq('is_active', true)
    .single();

  if (!m) notFound();

  // Typed casts for JSONB fields
  const badges = (m.badges as string[]) ?? [];
  const academicQualifications = (m.academic_qualifications as AcademicQualification[]) ?? [];
  const areasOfSpecialisation = (m.areas_of_specialisation as string[]) ?? [];
  const experienceEntries = (m.experience as ExperienceEntry[]) ?? [];
  const researchFocus = (m.research_focus as string[]) ?? [];
  const publications = (m.publications as Publication[]) ?? [];
  const fundedResearch = (m.funded_research as FundedResearch[]) ?? [];
  const certifications = (m.certifications as Certification[]) ?? [];
  const awards = (m.awards as Award[]) ?? [];
  const memberships = (m.memberships as Membership[]) ?? [];
  const phdScholars = (m.phd_scholars as PhdScholar[]) ?? [];
  const faqs = (m.faqs as FAQ[]) ?? [];

  const initials = m.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w: string) => w[0].toUpperCase())
    .join('');

  // Group experience by type
  const teachingExp = experienceEntries.filter((e) => e.type === 'Teaching');
  const clinicalExp = experienceEntries.filter((e) => e.type === 'Clinical');

  const teachingYears = teachingExp.reduce((acc, e) => {
    const start = parseInt(e.period_start) || 0;
    const end = e.period_end?.toLowerCase() === 'present' ? new Date().getFullYear() : parseInt(e.period_end) || start;
    return acc + (end - start);
  }, 0);

  const clinicalYears = clinicalExp.reduce((acc, e) => {
    const start = parseInt(e.period_start) || 0;
    const end = e.period_end?.toLowerCase() === 'present' ? new Date().getFullYear() : parseInt(e.period_end) || start;
    return acc + (end - start);
  }, 0);

  // ── Shared styles
  const sectionCard = 'bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4';
  const sectionTitle = 'text-xl font-bold text-gray-900 flex items-center gap-3 mb-4';
  const iconBox = 'w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0';
  const tableHead = 'text-xs font-semibold text-[#1B5E20] uppercase tracking-wide';
  const chip = 'px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700';

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FBF8F3]">
        {/* ── Hero ── */}
        <section className="bg-[#1B5E20] px-4 py-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/faculty/"
              className="inline-flex items-center gap-1.5 text-green-300 hover:text-white text-sm mb-6 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Faculty
            </Link>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Photo / Initials */}
              <div className="w-28 h-28 rounded-full border-4 border-[#FFC107] overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
                {m.photo_url ? (
                  <img src={m.photo_url} alt={m.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-[#1B5E20] text-2xl font-bold">{initials}</span>
                )}
              </div>

              <div className="flex-1">
                <p className="text-[#FFC107] text-xs font-semibold tracking-widest uppercase mb-1">
                JKKN COLLEGE OF EDUCATION
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">{m.name}</h1>
                <p className="text-green-200 mt-1">
                  {m.designation}{m.department ? ` — ${m.department}` : ''}
                </p>

                {/* Badges */}
                {badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {badges.map((badge, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-white border border-white/20"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Cards ── */}
        {(m.experience_years > 0 || m.research_papers_count > 0 || m.phd_scholars_count > 0 || m.awards_won_count > 0) && (
          <section className="max-w-4xl mx-auto px-4 -mt-1 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {m.experience_years > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
                  <p className="text-3xl font-bold text-[#1B5E20]">{m.experience_years}+</p>
                  <p className="text-sm text-gray-500 mt-1">Years Experience</p>
                </div>
              )}
              {m.research_papers_count > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
                  <p className="text-3xl font-bold text-[#1B5E20]">{m.research_papers_count}</p>
                  <p className="text-sm text-gray-500 mt-1">Research Papers</p>
                </div>
              )}
              {m.phd_scholars_count > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
                  <p className="text-3xl font-bold text-[#1B5E20]">{m.phd_scholars_count}</p>
                  <p className="text-sm text-gray-500 mt-1">PhD Scholars</p>
                </div>
              )}
              {m.awards_won_count > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
                  <p className="text-3xl font-bold text-[#1B5E20]">{m.awards_won_count}</p>
                  <p className="text-sm text-gray-500 mt-1">Awards Won</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── Main Content ── */}
        <div className="max-w-4xl mx-auto px-4 pb-12">

          {/* Professional Summary */}
          {m.summary && (
            <div className={sectionCard}>
              <h2 className={sectionTitle}>
                <span className={`${iconBox} bg-gray-100`}>👤</span>
                Professional Summary
              </h2>
              <div className="border-l-4 border-[#1B5E20] pl-4 text-gray-700 leading-relaxed">
                {m.summary}
              </div>
            </div>
          )}

          {/* Academic Qualifications */}
          {academicQualifications.length > 0 && (
            <div className={sectionCard}>
              <h2 className={sectionTitle}>
                <span className={`${iconBox} bg-yellow-50`}>🎓</span>
                Academic Qualifications
              </h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className={`${tableHead} text-left py-2 pr-4`}>Degree</th>
                    <th className={`${tableHead} text-left py-2 pr-4`}>Specialisation</th>
                    <th className={`${tableHead} text-left py-2 pr-4`}>University</th>
                    <th className={`${tableHead} text-right py-2`}>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {academicQualifications.map((q, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0">
                      <td className="py-3 pr-4 font-semibold text-gray-900">{q.degree}</td>
                      <td className="py-3 pr-4 text-gray-600">{q.specialisation}</td>
                      <td className="py-3 pr-4 text-gray-600">{q.university}</td>
                      <td className="py-3 text-right font-bold text-[#1B5E20]">{q.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Areas of Specialisation */}
          {areasOfSpecialisation.length > 0 && (
            <div className={sectionCard}>
              <h2 className={sectionTitle}>
                <span className={`${iconBox} bg-orange-50`}>✦</span>
                Areas of Specialisation
              </h2>
              <div className="flex flex-wrap gap-2">
                {areasOfSpecialisation.map((area, i) => (
                  <span key={i} className={chip}>{area}</span>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {experienceEntries.length > 0 && (
            <div className={sectionCard}>
              <h2 className={sectionTitle}>
                <span className={`${iconBox} bg-red-50`}>💼</span>
                Experience
              </h2>

              {teachingExp.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#1B5E20] inline-block" />
                    TEACHING{teachingYears > 0 ? ` · ${teachingYears} YEARS` : ''}
                  </p>
                  <div className="relative pl-5 border-l-2 border-gray-200 space-y-5">
                    {teachingExp.map((entry, i) => (
                      <div key={i} className="relative">
                        {i === 0 && (
                          <span className="absolute -left-[1.4rem] top-1 w-3 h-3 rounded-full bg-[#1B5E20] border-2 border-white shadow" />
                        )}
                        <p className="text-xs font-semibold text-[#1B5E20] uppercase tracking-wide mb-0.5">
                          {entry.period_start}{entry.period_end ? ` – ${entry.period_end.toUpperCase()}` : ''}
                        </p>
                        <p className="font-semibold text-gray-900 text-sm">{entry.role}</p>
                        <p className="text-sm text-gray-500">{entry.institution}</p>
                        {entry.description && (
                          <p className="text-xs text-gray-400 mt-0.5">{entry.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {clinicalExp.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#1B5E20] inline-block" />
                    CLINICAL{clinicalYears > 0 ? ` · ${clinicalYears} YEARS` : ''}
                  </p>
                  <div className="relative pl-5 border-l-2 border-gray-200 space-y-5">
                    {clinicalExp.map((entry, i) => (
                      <div key={i} className="relative">
                        {i === 0 && (
                          <span className="absolute -left-[1.4rem] top-1 w-3 h-3 rounded-full bg-[#1B5E20] border-2 border-white shadow" />
                        )}
                        <p className="text-xs font-semibold text-[#1B5E20] uppercase tracking-wide mb-0.5">
                          {entry.period_start}{entry.period_end ? ` – ${entry.period_end.toUpperCase()}` : ''}
                        </p>
                        <p className="font-semibold text-gray-900 text-sm">{entry.role}</p>
                        <p className="text-sm text-gray-500">{entry.institution}</p>
                        {entry.description && (
                          <p className="text-xs text-gray-400 mt-0.5">{entry.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Research & Publications */}
          {(researchFocus.length > 0 || publications.length > 0 || fundedResearch.length > 0 || m.google_scholar_url || m.researchgate_url || m.orcid_url) && (
            <div className={sectionCard}>
              <h2 className={sectionTitle}>
                <span className={`${iconBox} bg-blue-50`}>📖</span>
                Research &amp; Publications
              </h2>

              {/* Research Focus */}
              {researchFocus.length > 0 && (
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#1B5E20] inline-block" />
                    RESEARCH FOCUS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {researchFocus.map((f, i) => (
                      <span key={i} className={chip}>{f}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Publications */}
              {publications.length > 0 && (
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#1B5E20] inline-block" />
                    SELECTED PUBLICATIONS
                  </p>
                  <div className="space-y-3">
                    {publications.map((pub, i) => (
                      <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-4">
                        <div className="w-8 h-8 rounded-lg bg-[#1B5E20] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{pub.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {pub.authors}{pub.journal ? ` · ${pub.journal}` : ''}{pub.year ? `, ${pub.year}` : ''}
                          </p>
                          <div className="flex gap-3 mt-1.5">
                            {pub.doi_url && (
                              <a href={pub.doi_url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#1B5E20] hover:underline flex items-center gap-0.5">
                                DOI <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                            {pub.pubmed_url && (
                              <a href={pub.pubmed_url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#1B5E20] hover:underline flex items-center gap-0.5">
                                PUBMED <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Funded Research */}
              {fundedResearch.length > 0 && (
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#1B5E20] inline-block" />
                    FUNDED RESEARCH
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className={`${tableHead} text-left py-2 pr-4`}>Project</th>
                        <th className={`${tableHead} text-left py-2 pr-4`}>Agency</th>
                        <th className={`${tableHead} text-left py-2 pr-4`}>Amount</th>
                        <th className={`${tableHead} text-left py-2 pr-4`}>Period</th>
                        <th className={`${tableHead} text-left py-2`}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fundedResearch.map((fr, i) => (
                        <tr key={i} className="border-b border-gray-50 last:border-0">
                          <td className="py-3 pr-4 text-gray-900">{fr.project}</td>
                          <td className="py-3 pr-4 text-gray-600">{fr.agency}</td>
                          <td className="py-3 pr-4 text-gray-600">{fr.amount}</td>
                          <td className="py-3 pr-4 text-gray-600">{fr.period}</td>
                          <td className="py-3">
                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                              fr.status === 'Completed'
                                ? 'bg-green-50 text-green-700 border border-green-200'
                                : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                            }`}>
                              {fr.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Academic Profiles */}
              {(m.google_scholar_url || m.researchgate_url || m.orcid_url) && (
                <div>
                  <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#1B5E20] inline-block" />
                    ACADEMIC PROFILES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {m.google_scholar_url && (
                      <a href={m.google_scholar_url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-[#1B5E20] hover:text-[#1B5E20] transition">
                        Google Scholar
                      </a>
                    )}
                    {m.researchgate_url && (
                      <a href={m.researchgate_url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-[#1B5E20] hover:text-[#1B5E20] transition">
                        ResearchGate
                      </a>
                    )}
                    {m.orcid_url && (
                      <a href={m.orcid_url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:border-[#1B5E20] hover:text-[#1B5E20] transition">
                        ORCID
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Certifications & Training */}
          {certifications.length > 0 && (
            <div className={sectionCard}>
              <h2 className={sectionTitle}>
                <span className={`${iconBox} bg-orange-50`}>🔒</span>
                Certifications &amp; Training
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-2 bg-gray-50 rounded-xl p-3">
                    <span className="w-2 h-2 rounded-full bg-[#1B5E20] mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{cert.name}</p>
                      <p className="text-xs text-gray-500">{cert.organisation}{cert.year ? ` · ${cert.year}` : ''}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards & Recognitions */}
          {awards.length > 0 && (
            <div className={sectionCard}>
              <h2 className={sectionTitle}>
                <span className={`${iconBox} bg-yellow-50`}>🏆</span>
                Awards &amp; Recognitions
              </h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className={`${tableHead} text-left py-2 pr-4`}>Award</th>
                    <th className={`${tableHead} text-left py-2 pr-4`}>Body</th>
                    <th className={`${tableHead} text-right py-2`}>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {awards.map((award, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0">
                      <td className="py-3 pr-4 font-semibold text-gray-900">{award.award}</td>
                      <td className="py-3 pr-4 text-gray-600">{award.body}</td>
                      <td className="py-3 text-right font-bold text-[#1B5E20]">{award.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Professional Memberships */}
          {memberships.length > 0 && (
            <div className={sectionCard}>
              <h2 className={sectionTitle}>
                <span className={`${iconBox} bg-purple-50`}>👥</span>
                Professional Memberships
              </h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className={`${tableHead} text-left py-2 pr-4`}>Organisation</th>
                    <th className={`${tableHead} text-left py-2 pr-4`}>Type</th>
                    <th className={`${tableHead} text-right py-2`}>Since</th>
                  </tr>
                </thead>
                <tbody>
                  {memberships.map((mem, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0">
                      <td className="py-3 pr-4 font-semibold text-gray-900">{mem.organisation}</td>
                      <td className="py-3 pr-4 text-gray-600">{mem.type}</td>
                      <td className="py-3 text-right font-bold text-[#1B5E20]">{mem.since}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Student Mentoring & Guidance */}
          {(m.mentoring_description || phdScholars.length > 0 || m.pg_dissertations_guided > 0 || m.ug_projects_guided > 0) && (
            <div className={sectionCard}>
              <h2 className={sectionTitle}>
                <span className={`${iconBox} bg-indigo-50`}>🎓</span>
                Student Mentoring &amp; Guidance
              </h2>

              {m.mentoring_description && (
                <p className="text-gray-700 mb-4 leading-relaxed">{m.mentoring_description}</p>
              )}

              {phdScholars.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#1B5E20] inline-block" />
                    PHD SCHOLARS
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className={`${tableHead} text-left py-2 pr-4`}>Scholar</th>
                        <th className={`${tableHead} text-left py-2 pr-4`}>Research Topic</th>
                        <th className={`${tableHead} text-right py-2`}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phdScholars.map((scholar, i) => (
                        <tr key={i} className="border-b border-gray-50 last:border-0">
                          <td className="py-3 pr-4 font-semibold text-gray-900">{scholar.scholar}</td>
                          <td className="py-3 pr-4 text-gray-600">{scholar.research_topic}</td>
                          <td className="py-3 text-right">
                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                              scholar.status?.toLowerCase() === 'ongoing'
                                ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                                : 'bg-green-50 text-green-700 border border-green-200'
                            }`}>
                              {scholar.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {(m.pg_dissertations_guided > 0 || m.ug_projects_guided > 0) && (
                <div>
                  <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#1B5E20] inline-block" />
                    GUIDANCE SUMMARY
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {m.pg_dissertations_guided > 0 && (
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-3xl font-bold text-[#1B5E20]">{m.pg_dissertations_guided}</p>
                        <p className="text-sm text-gray-500 mt-1">PG Dissertations Guided</p>
                      </div>
                    )}
                    {m.ug_projects_guided > 0 && (
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-3xl font-bold text-[#1B5E20]">{m.ug_projects_guided}</p>
                        <p className="text-sm text-gray-500 mt-1">UG Projects Guided</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* FAQs */}
          {faqs.length > 0 && (
            <div className={sectionCard}>
              <h2 className={sectionTitle}>
                <span className={`${iconBox} bg-pink-50`}>❓</span>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details key={i} className="group border border-gray-100 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-gray-900 text-sm list-none hover:bg-gray-50 transition">
                      {faq.question}
                      <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-5 pb-4 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
