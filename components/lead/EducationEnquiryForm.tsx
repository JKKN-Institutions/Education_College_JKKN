// DEP-34 — the education enquiry form.
//
// Sixth and last college to get this form. Arts went live 2026-08-16 and was submitted
// end-to-end from a real browser the same day: the action returned the CRM-accepted branch, not
// the 409 branch and not the error branch. Nursing, pharmacy, AHS and dental followed.
//
// THIS ONE IS NOT A COPY OF THE OTHER FIVE, and the reason is the repo. Those all run React 19
// and use useActionState. THIS REPO IS ON REACT 18.3.1, where useActionState does not exist, so
// the same behaviour is built from useState + useTransition and the action is called
// imperatively. Everything a parent sees is identical; only the wiring differs.
//
// PII rule, and it is not a style preference: name and phone are collected here and NEVER sent
// to GA4. Only the source page, the programme id and the path leave this component.
//
// LOOK — mockup #7 "What Happens Next", the user's pick of 10 on 2026-10-22, live on the Dental
// site first and ported here with the exact Dental colours (user's choice). Every host puts this
// form on a green section, and the old see-through card with white text did not stand out from
// it; a white card does. The three-step strip answers the parent's first doubt ("what happens
// after I give my number?") and the trust line answers the second ("is this college genuine?").
// Fields, labels, button text, the CRM payload and the GA4 events are unchanged.

"use client"

import { useId, useRef, useState, useTransition } from "react"
import { CheckCircle2, ChevronDown } from "lucide-react"
import {
  submitEducationEnquiry,
  type EducationEnquiryState,
} from "@/app/actions/education-enquiry"
import { EDUCATION_PROGRAMMES } from "@/lib/education-programmes"
import { ENQUIRY_DONE_KEY, writeStore } from "@/lib/enquiry-store"

const ADMISSION_PHONE = "+919345855001"
const ADMISSION_PHONE_DISPLAY = "+91 93458 55001"

// Trust line under the button. Each item is proven by a document this site itself publishes
// (checked 2026-10-22); do not add one back without a document that states it.
//  - "NCTE Approved": NCTE SRC continuation-of-recognition order, public/pdf/NCTE-Approval.pdf
//    (served at /about/ncte-approval) — B.Ed, 2 basic units of 100 students.
//  - "TNTEU Affiliated": the college's own TNTEU faculty return, public/pdf/Faculty-Details.pdf
//    ("TNTEU-Faculty Details"), and the site-wide "NCTE Approved | TNTEU Affiliated" line.
//  - "Since 2016": the same NCTE order recognises the B.Ed from academic session 2016-17, as
//    TRUST_SIGNALS in lib/admissions-data.ts records. 1969 is the trust's year, not this college's.
// No NAAC item: this repo and the live site carry no NAAC certificate for this college.
const TRUST = ["NCTE Approved", "TNTEU Affiliated", "Since 2016"]

type Props = {
  /** Which page this instance sits on, e.g. "admissions". Tags the lead in the CRM. */
  sourcePage: string
  /** Pre-selected programme id, so a department page opens on its own pedagogy. Optional. */
  defaultProgrammeId?: string
  /** 3 boxes only (name, mobile, programme) — for the homepage popup and cards. District and
   *  the question box are optional in the CRM form, so a compact lead is still a complete lead. */
  compact?: boolean
  /** No white card of its own — for a host that already is the white card (homepage hero, popup). */
  bare?: boolean
}

export default function EducationEnquiryForm({
  sourcePage,
  defaultProgrammeId,
  compact = false,
  bare = false,
}: Props) {
  // Unique per instance: the homepage can show this form twice (hero card + popup).
  const uid = useId()
  const fid = (name: string) => `${uid}-${name}`
  const [state, setState] = useState<EducationEnquiryState | null>(null)
  const [isPending, startTransition] = useTransition()
  const fired = useRef(false)

  function track(next: EducationEnquiryState) {
    if (next.success) writeStore(ENQUIRY_DONE_KEY, new Date().toISOString())
    const w = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (typeof w.gtag !== "function") return
    if (next.success && !fired.current) {
      fired.current = true
      // Fires once, only on a CRM-accepted submit — not on click, not before the round trip.
      w.gtag("event", "lead_form_submit", {
        form_name: "education_enquiry",
        source_page: sourcePage,
        programme: next.tracking?.programme_id ?? "not_selected",
        destination: "crm",
        page_path: window.location.pathname,
      })
    }
    // A form that silently fails and a form nobody used both read 0. This separates them.
    if (!next.success && next.error) {
      w.gtag("event", "lead_form_error", {
        form_name: "education_enquiry",
        source_page: sourcePage,
        page_path: window.location.pathname,
      })
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      const next = await submitEducationEnquiry(formData)
      setState(next)
      track(next)
    })
  }

  const surface = bare
    ? ""
    : "bg-white rounded-[20px] shadow-[0_18px_40px_rgba(3,40,22,0.35)] p-4 sm:p-6"

  if (state?.success) {
    return (
      <div className={`${surface} space-y-4 text-center`} role="status" aria-live="polite">
        <p className="text-[#032816] text-lg font-semibold">{state.message}</p>
        <p className="text-[#4b5563] text-sm">You can also reach us directly:</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href={`tel:${ADMISSION_PHONE}`}
            className="bg-[#0b6d41] text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {ADMISSION_PHONE_DISPLAY}
          </a>
          {/* Dark text: white on WhatsApp green is 1.98:1, below the 4.5:1 text minimum. */}
          <a
            href={`https://wa.me/${ADMISSION_PHONE.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366] text-[#032816] px-4 py-2 rounded-full text-sm font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    )
  }

  const err = state?.fieldErrors
  // 16 px text in every box: below 16 px, iPhone Safari zooms the page on focus (the full form
  // used 14 px). Border #75867e is 3.84:1 on white and the hint text #5f6b66 is 5.55:1 — the
  // WCAG minimums are 3:1 for a box edge and 4.5:1 for text.
  const inputCls =
    "w-full bg-white border-[1.5px] border-[#75867e] rounded-xl px-4 py-3 text-base text-[#1f2a24] placeholder:text-[#5f6b66] focus:outline-none focus:border-[#0b6d41] focus:ring-[3px] focus:ring-[#0b6d41]/20"
  const labelCls = "block text-[#032816] text-sm font-semibold mb-1.5"
  const errCls = "text-[#b42318] text-xs mt-1"
  // No-break space keeps "24 hrs" on one line: at 375 px the strip box broke it as "24 / hrs".
  const steps = [compact ? "Fill 3 details" : "Fill your details", "We call in 24 hrs", "Get fee and admission details"]

  return (
    <form onSubmit={onSubmit} className={`${surface} space-y-4 text-left`}>
      <input type="hidden" name="source_page" value={sourcePage} />

      {/* Honeypot. Off-screen rather than display:none - a real browser autofill will not reach
          it and a bot will. Never remove: the CRM scores this field. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <ol aria-label="What happens next" className="grid grid-cols-3 gap-1.5">
        {steps.map((step, i) => (
          <li
            key={step}
            className="rounded-xl bg-[#f1f7f3] px-1.5 py-2.5 text-center text-xs font-semibold leading-tight text-[#032816]"
          >
            <span
              aria-hidden="true"
              className="mx-auto mb-1.5 grid h-6 w-6 place-items-center rounded-full bg-[#ffde59] text-xs font-bold"
            >
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor={fid("name")} className={labelCls}>
            Your Name <span aria-hidden="true">*</span>
          </label>
          <input
            id={fid("name")}
            type="text"
            name="name"
            required
            minLength={2}
            placeholder="Enter your full name"
            aria-invalid={!!err?.name}
            className={inputCls}
          />
          {err?.name && <p className={errCls}>{err.name}</p>}
        </div>
        <div>
          <label htmlFor={fid("phone")} className={labelCls}>
            Mobile Number <span aria-hidden="true">*</span>
          </label>
          <input
            id={fid("phone")}
            type="tel"
            name="phone"
            required
            inputMode="numeric"
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            aria-invalid={!!err?.phone}
            className={inputCls}
          />
          {err?.phone && <p className={errCls}>{err.phone}</p>}
        </div>
      </div>

      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor={fid("programme")} className={labelCls}>
            B.Ed Specialisation <span aria-hidden="true">*</span>
          </label>
          {/* appearance-none hides the native arrow, so draw one: without it the box does not
              read as a dropdown. */}
          <div className="relative">
            <select
              id={fid("programme")}
              name="programme"
              required
              defaultValue={defaultProgrammeId ?? ""}
              aria-invalid={!!err?.programme}
              className={`${inputCls} appearance-none pr-10`}
            >
              <option value="" disabled>
                Select a Programme
              </option>
              {EDUCATION_PROGRAMMES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4b5563]"
            />
          </div>
          {err?.programme && <p className={errCls}>{err.programme}</p>}
        </div>
        {!compact && (
        <div>
          <label htmlFor={fid("district")} className={labelCls}>
            Your District <span className="font-normal text-[#4b5563]">(optional)</span>
          </label>
          <input
            id={fid("district")}
            type="text"
            name="district"
            placeholder="e.g., Namakkal"
            className={inputCls}
          />
        </div>
        )}
      </div>

      {!compact && (
      <div>
        <label htmlFor={fid("question")} className={labelCls}>
          Any Questions? <span className="font-normal text-[#4b5563]">(optional)</span>
        </label>
        <textarea
          id={fid("question")}
          name="question"
          rows={3}
          maxLength={300}
          placeholder="e.g., What is the fee for B.Ed?"
          className={`${inputCls} resize-none`}
        />
      </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-[#0b6d41] hover:bg-[#095a36] disabled:opacity-60 text-white font-bold py-4 rounded-full text-base transition-colors"
      >
        {isPending ? "Submitting…" : compact ? "Get a Call Back" : "Submit Enquiry — Get a Call Back"}
      </button>

      {state && !state.success && state.error && (
        <p className="text-[#b42318] text-sm text-center" role="alert">
          {state.error}
        </p>
      )}

      <ul
        aria-label="Recognition"
        className="flex flex-wrap justify-center gap-x-3.5 gap-y-1.5 text-[12.5px] font-semibold text-[#032816]"
      >
        {TRUST.map((t) => (
          <li key={t} className="flex items-center gap-1.5">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-[#0b6d41]" />
            {t}
          </li>
        ))}
      </ul>

      <p className="text-center text-[#4b5563] text-sm">
        Or call us directly:{" "}
        <a href={`tel:${ADMISSION_PHONE}`} className="text-[#0b6d41] font-semibold underline">
          {ADMISSION_PHONE_DISPLAY}
        </a>{" "}
        •{" "}
        <a
          href={`https://wa.me/${ADMISSION_PHONE.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0b6d41] font-semibold underline"
        >
          WhatsApp
        </a>
      </p>

      {compact && (
        <p className="text-center text-[#5f6b66] text-xs">
          By submitting, you agree to be contacted by our admission team.
        </p>
      )}
    </form>
  )
}
