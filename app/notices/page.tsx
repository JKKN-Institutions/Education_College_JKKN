import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@/lib/supabase/server';
import { Bell, Download, Calendar, AlertCircle } from 'lucide-react';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const revalidate = 30;

export const metadata = seoMetadata(
  'Notices',
  'Official notices and announcements from JKKN College of Education — exam schedules, holidays, and academic updates.',
  '/notices',
  { keywords: ['JKKN notices', 'college announcements', 'exam notices'] }
);

const typeConfig: Record<string, { label: string; color: string; bg: string }> = {
  exam: { label: 'Exam', color: 'text-red-700', bg: 'bg-red-50' },
  academic: { label: 'Academic', color: 'text-blue-700', bg: 'bg-blue-50' },
  holiday: { label: 'Holiday', color: 'text-green-700', bg: 'bg-green-50' },
  general: { label: 'General', color: 'text-gray-700', bg: 'bg-gray-100' },
};

export default async function NoticesPage() {
  const supabase = await createClient();

  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const { data: notices } = await supabase
    .from('notices')
    .select('id, title, content, notice_type, attachment_url, expires_at, created_at')
    .eq('college_id', collegeId)
    .eq('is_active', true)
    .or('expires_at.is.null,expires_at.gte.' + new Date().toISOString().split('T')[0])
    .order('created_at', { ascending: false });

  function formatDate(d: string | null) {
    if (!d) return null;
    return new Date(d).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Notices', href: '/notices' },
      ]} />
      <Header />

      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Page Title */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
            style={{ color: '#1e7f4e' }}
          >
            NOTICES
          </h1>

          {notices && notices.length > 0 ? (
            <div className="space-y-4">
              {notices.map((notice) => {
                const cfg = typeConfig[notice.notice_type] ?? typeConfig.general;
                return (
                  <div
                    key={notice.id}
                    className="border border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-[#1e7f4e]/30 hover:shadow-sm transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-[#1e7f4e]/10 flex items-center justify-center flex-shrink-0">
                        <Bell className="w-5 h-5 text-[#1e7f4e]" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}
                          >
                            {cfg.label}
                          </span>
                          <span className="text-xs text-gray-400">
                            {formatDate(notice.created_at)}
                          </span>
                          {notice.expires_at && (
                            <span className="flex items-center gap-1 text-xs text-orange-500">
                              <Calendar className="w-3 h-3" />
                              Expires {formatDate(notice.expires_at)}
                            </span>
                          )}
                        </div>

                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">
                          {notice.title}
                        </h3>

                        {notice.content && (
                          <p className="text-gray-500 text-sm leading-relaxed mb-3">
                            {notice.content}
                          </p>
                        )}

                        {notice.attachment_url && (
                          <a
                            href={notice.attachment_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#1e7f4e] hover:text-[#006837] border border-[#1e7f4e]/30 hover:border-[#1e7f4e] rounded-lg px-3 py-1.5 transition"
                          >
                            <Download className="w-3.5 h-3.5" />
                            Download PDF
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-[#1e7f4e]/10 flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-[#1e7f4e]/50" />
              </div>
              <p className="text-lg font-semibold text-gray-700 mb-1">No notices at this time</p>
              <p className="text-gray-400 text-sm">Check back soon for updates and announcements.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
