// Enquiry box inside a blog post and near the top of the admissions page (lead options 1 + 2, 2026-11-05).
// The same white card + compact 3-box form as the Dental site's box. No fee figure here on purpose: the
// B.Ed fee table on /fee-structure is the one place that number lives, so the box links to it.
// No course is pre-selected (see lib/blog-inline-cta.ts): the reader picks the pedagogy.
// The title is not a heading, so the article's own H2 outline (and its table of contents) stays as written.

import Link from "next/link"
import EducationEnquiryForm from "@/components/lead/EducationEnquiryForm"

export default function BlogEnquiryBox({ sourcePage }: { sourcePage: string }) {
  return (
    <aside
      aria-label="B.Ed admission enquiry"
      className="my-10 max-w-xl mx-auto rounded-[20px] bg-white border border-[#d4f1e4] shadow-[0_18px_40px_rgba(3,40,22,0.35)] p-5 sm:p-6 lg:p-7"
    >
      <div className="mb-4">
        <div className="text-xl lg:text-2xl font-bold text-[#032816] leading-snug">Get B.Ed Fee &amp; Admission Details</div>
        <div className="mt-2 text-base text-[#374151] leading-relaxed">
          Fill your details, then call or WhatsApp our admission team right away.{" "}
          <Link href="/fee-structure" className="font-semibold text-[#0b6d41] underline">
            See the B.Ed fee table
          </Link>
          .
        </div>
      </div>
      <EducationEnquiryForm sourcePage={sourcePage} compact bare />
    </aside>
  )
}
