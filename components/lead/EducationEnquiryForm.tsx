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

"use client"

import { useRef, useState, useTransition } from "react"
import {
  submitEducationEnquiry,
  type EducationEnquiryState,
} from "@/app/actions/education-enquiry"
import { EDUCATION_PROGRAMMES } from "@/lib/education-programmes"

const ADMISSION_PHONE = "+919345855001"
const ADMISSION_PHONE_DISPLAY = "+91 93458 55001"

type Props = {
  /** Which page this instance sits on, e.g. "admissions". Tags the lead in the CRM. */
  sourcePage: string
  /** Pre-selected programme id, so a department page opens on its own pedagogy. Optional. */
  defaultProgrammeId?: string
}

export default function EducationEnquiryForm({ sourcePage, defaultProgrammeId }: Props) {
  const [state, setState] = useState<EducationEnquiryState | null>(null)
  const [isPending, startTransition] = useTransition()
  const fired = useRef(false)

  function track(next: EducationEnquiryState) {
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

  if (state?.success) {
    return (
      <div className="space-y-4 text-center" role="status" aria-live="polite">
        <p className="text-white text-lg font-semibold">{state.message}</p>
        <p className="text-white/70 text-sm">You can also reach us directly:</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href={`tel:${ADMISSION_PHONE}`}
            className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {ADMISSION_PHONE_DISPLAY}
          </a>
          <a
            href={`https://wa.me/${ADMISSION_PHONE.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366] text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    )
  }

  const err = state?.fieldErrors
  const inputCls =
    "w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60"

  return (
    <form onSubmit={onSubmit} className="space-y-5">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ed-name" className="block text-white text-sm font-medium mb-1.5">
            Your Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="ed-name"
            type="text"
            name="name"
            required
            minLength={2}
            placeholder="Enter your full name"
            aria-invalid={!!err?.name}
            className={inputCls}
          />
          {err?.name && <p className="text-red-200 text-xs mt-1">{err.name}</p>}
        </div>
        <div>
          <label htmlFor="ed-phone" className="block text-white text-sm font-medium mb-1.5">
            Mobile Number <span aria-hidden="true">*</span>
          </label>
          <input
            id="ed-phone"
            type="tel"
            name="phone"
            required
            inputMode="numeric"
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            aria-invalid={!!err?.phone}
            className={inputCls}
          />
          {err?.phone && <p className="text-red-200 text-xs mt-1">{err.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ed-programme" className="block text-white text-sm font-medium mb-1.5">
            B.Ed Specialisation <span aria-hidden="true">*</span>
          </label>
          <select
            id="ed-programme"
            name="programme"
            required
            defaultValue={defaultProgrammeId ?? ""}
            aria-invalid={!!err?.programme}
            className={`${inputCls} appearance-none`}
          >
            <option value="" disabled className="text-gray-800 bg-white">
              Select a Programme
            </option>
            {EDUCATION_PROGRAMMES.map((p) => (
              <option key={p.id} value={p.id} className="text-gray-800 bg-white">
                {p.label}
              </option>
            ))}
          </select>
          {err?.programme && <p className="text-red-200 text-xs mt-1">{err.programme}</p>}
        </div>
        <div>
          <label htmlFor="ed-district" className="block text-white text-sm font-medium mb-1.5">
            Your District <span className="font-normal opacity-70">(optional)</span>
          </label>
          <input
            id="ed-district"
            type="text"
            name="district"
            placeholder="e.g., Namakkal"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label htmlFor="ed-question" className="block text-white text-sm font-medium mb-1.5">
          Any Questions? <span className="font-normal opacity-70">(optional)</span>
        </label>
        <textarea
          id="ed-question"
          name="question"
          rows={3}
          maxLength={300}
          placeholder="e.g., What is the fee for B.Ed?"
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-4 rounded-full text-base transition-colors"
      >
        {isPending ? "Submitting…" : "Submit Enquiry — Get a Call Back"}
      </button>

      {state && !state.success && state.error && (
        <p className="text-red-200 text-sm text-center" role="alert">
          {state.error}
        </p>
      )}

      <p className="text-center text-white/70 text-sm">
        Or call us directly:{" "}
        <a href={`tel:${ADMISSION_PHONE}`} className="text-white underline">
          {ADMISSION_PHONE_DISPLAY}
        </a>{" "}
        •{" "}
        <a
          href={`https://wa.me/${ADMISSION_PHONE.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline"
        >
          WhatsApp
        </a>
      </p>
    </form>
  )
}
