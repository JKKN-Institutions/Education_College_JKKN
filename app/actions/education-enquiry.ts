// DEP-34 — server action behind the education enquiry form.
//
// WHY A SERVER ACTION AND NOT A fetch() IN THE COMPONENT.
// An OPTIONS preflight to the CRM submit endpoint, sent with a college-site Origin, answers 204
// with "Allow: OPTIONS, POST" and carries NO Access-Control-Allow-Origin header — measured
// 2026-08-11 and re-confirmed 2026-08-16. A browser therefore blocks a direct cross-origin POST
// from this site. Server-to-server has no CORS check, so the submit has to leave from the server.
//
// SIGNATURE DIFFERS FROM THE OTHER FIVE COLLEGES, and the reason is this repo, not preference.
// Arts, nursing, pharmacy, AHS and dental all run React 19 and use useActionState, whose action
// takes (prevState, formData). THIS REPO IS ON REACT 18.3.1 — useActionState does not exist there
// — so the form calls this action imperatively inside a transition and it takes FormData alone.
//
// The endpoint is public — no key, no auth — so nothing secret lives in this file.
//
// This file exports ONLY an async function and an erased type. Programme data lives in
// @/lib/education-programmes because a 'use server' module may not export plain values.

"use server"

import {
  EDUCATION_INSTITUTION_ID,
  VALID_EDUCATION_PROGRAMME_IDS,
} from "@/lib/education-programmes"

const CRM_SLUG = "jkkn-admission-2026"
const CRM_SUBMIT = `https://www.jkkn.ai/api/public/forms/${CRM_SLUG}/submit`

export type EducationEnquiryState = {
  success: boolean
  message?: string
  error?: string
  tracking?: { source_page: string; programme_id: string }
  fieldErrors?: Partial<Record<"name" | "phone" | "programme", string>>
}

// This repo has no zod (checked 2026-08-16) and a lead form is not the place to add a
// dependency, so the three rules are written out by hand.
function validate(name: string, phone: string, programme: string) {
  const fieldErrors: EducationEnquiryState["fieldErrors"] = {}
  if (name.trim().length < 2) fieldErrors.name = "Please enter your full name."
  if (!/^\d{10}$/.test(phone.trim()))
    fieldErrors.phone = "Please enter a 10-digit mobile number, digits only."
  if (!VALID_EDUCATION_PROGRAMME_IDS.has(programme))
    fieldErrors.programme = "Please choose a programme."
  return fieldErrors
}

export async function submitEducationEnquiry(
  formData: FormData
): Promise<EducationEnquiryState> {
  const name = String(formData.get("name") ?? "")
  const phone = String(formData.get("phone") ?? "").replace(/\D/g, "")
  const district = String(formData.get("district") ?? "")
  const sourcePage = String(formData.get("source_page") ?? "")
  const programme = String(formData.get("programme") ?? "")
  const question = String(formData.get("question") ?? "")
  // Honeypot. The CRM expects this key and treats a non-empty value as a bot.
  const honeypot = String(formData.get("company_website") ?? "")

  const fieldErrors = validate(name, phone, programme)
  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, error: "Please fix the highlighted fields.", fieldErrors }
  }

  const payload = {
    formData: {
      first_name: name.trim(),
      phone,
      district,
      institution_program: {
        institution_id: EDUCATION_INSTITUTION_ID,
        program_id: programme,
      },
    },
    honeypot,
    sessionId: crypto.randomUUID(),
    // Tag the source so these leads are separable from jkkn.ai's own traffic inside the CRM.
    utmSource: "edu.jkkn.ac.in",
    utmMedium: "site-form",
    utmCampaign: sourcePage ? `education-${sourcePage}` : "education-site",
    campaignLinkId: null,
    referrerUrl: question ? `question: ${question.slice(0, 300)}` : "",
  }

  try {
    const res = await fetch(CRM_SUBMIT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // A parent staring at a spinner is a lost lead. Fail loudly and fast.
      signal: AbortSignal.timeout(15_000),
      cache: "no-store",
    })

    if (res.status === 409) {
      // 409 means this phone has already applied. Not a failure for the parent.
      return {
        success: true,
        message:
          "You have already enquired with this number. Our admission team will call you — no need to submit again.",
        tracking: { source_page: sourcePage, programme_id: programme },
      }
    }

    if (!res.ok) {
      const body = await res.json().catch(() => null)
      console.error("[education-enquiry] CRM rejected submit", res.status, body)
      return {
        success: false,
        error:
          "We could not submit your enquiry just now. Please call +91-9345855001 or message us on WhatsApp.",
      }
    }

    return {
      success: true,
      message:
        "Thank you. Our admission team will contact you within 24 hours on WhatsApp or by phone.",
      tracking: { source_page: sourcePage, programme_id: programme },
    }
  } catch (err) {
    console.error("[education-enquiry] network/timeout reaching CRM", err)
    return {
      success: false,
      error:
        "We could not reach our admission system. Please call +91-9345855001 or message us on WhatsApp.",
    }
  }
}
