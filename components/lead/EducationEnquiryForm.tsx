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
//
// CALL / WHATSAPP (2026-11-04, ported from the Dental site where the user tested it live): the old
// "Get a Call Back" button ended on a "Thank you, 24 hours" screen. Now every form shows two
// buttons, "Call Counsellor" and "Chat on WhatsApp"; ONE tap sends the lead (keepalive POST to
// /api/enquiry, which runs the same server action) and opens the dialer / WhatsApp. Inside a Call /
// WhatsApp gate (lib/call-gate.ts) only the matching button shows. lead_form_submit and
// lead_form_error keep their names and params, so both stay one series with the figures before.
// No-JS: this React 18 form never had a server-action fallback (it called the action from
// onSubmit), and it still has none - the keepalive POST replaces that onSubmit call.

"use client"

import { useId, useRef, useState, type FormEvent } from "react"
import { CheckCircle2, ChevronDown } from "lucide-react"
import type { EducationEnquiryState } from "@/app/actions/education-enquiry"
import CampaignFields from "@/components/lead/CampaignFields"
import { EDUCATION_PROGRAMMES } from "@/lib/education-programmes"
import { ENQUIRY_DONE_KEY, writeStore } from "@/lib/enquiry-store"
import { sendGaEvent } from "@/lib/ga-event"
import { GATE_PHONE_DISPLAY, telGateUrl, whatsappGateUrl, type GateIntent } from "@/lib/call-gate"

// Browser autofill fills a saved number as "07000000001" (Chrome 156, tel-national, India trunk 0 -
// measured 2026-11-12 on this live form) or "+91 ...". The box and the server both accept exactly 10
// digits from 6-9, so keep digits only and drop a leading 91 / 0 - otherwise a one-tap fill fails the
// pattern check and the visitor has to retype it. Same helper as Dental / Pharmacy / Nursing / Arts.
export function toTenDigitMobile(raw: string): string {
  const digits = raw.replace(/\D/g, "")
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2)
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1)
  return digits
}

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
  /** Call / WhatsApp gate (lib/call-gate.ts): ONE button, "Call Counsellor" or "Chat on WhatsApp".
   *  Left out (every page form and the Enquire Now popup): TWO buttons, "Call Counsellor" +
   *  "Chat on WhatsApp". Either way ONE tap sends the lead and opens the app. */
  gate?: GateIntent
}

type GatePhase =
  | { step: "form" }
  | { step: "opened"; result: "waiting" | "saved" | "failed"; programmeId: string; intent: GateIntent }

export default function EducationEnquiryForm({
  sourcePage,
  defaultProgrammeId,
  compact = false,
  bare = false,
  gate,
}: Props) {
  // Unique per instance: the homepage can show this form twice (hero card + popup).
  const uid = useId()
  const fid = (name: string) => `${uid}-${name}`

  const [gatePhase, setGatePhase] = useState<GatePhase>({ step: "form" })
  // Which of the two buttons was pressed. Read from SubmitEvent.submitter where the browser has it;
  // this ref (set on the button's own click) covers the rest. Enter in a box = the first button, Call.
  const chosen = useRef<GateIntent>(gate ?? "call")
  const eventFor = (intent: GateIntent) => (intent === "call" ? "gate_call" : "gate_wa")

  // Opens the dialer / WhatsApp. Called inside the visitor's tap (the browser allows another app
  // only then), and again from the fallback button if the phone ignored the first try.
  const openApp = (programmeId: string, intent: GateIntent) => {
    if (intent === "call") {
      window.location.assign(telGateUrl)
      return
    }
    const url = whatsappGateUrl(programmeId, window.location.pathname)
    // A new tab keeps this page (and the request still in flight) alive; a blocked tab falls back
    // to the same tab, where keepalive still lets the request finish.
    const tab = window.open(url, "_blank")
    if (tab) tab.opener = null
    else window.location.assign(url)
  }

  // ONE tap: check the 3 boxes, send the lead without waiting, open the app at once.
  const onGateSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null
    const fromButton = submitter?.value === "whatsapp" || submitter?.value === "call" ? submitter.value : null
    const intent: GateIntent = gate ?? (fromButton as GateIntent | null) ?? chosen.current
    const gateEvent = eventFor(intent)
    const nameBox = form.elements.namedItem("name") as HTMLInputElement | null
    if (nameBox) nameBox.setCustomValidity(nameBox.value.trim().length < 2 ? "Please enter your full name." : "")
    // Same three rules as the server (name, 10-digit mobile from 6-9, a programme). Checked here
    // because the app opens before the server has answered.
    if (!form.reportValidity()) return

    const data = new FormData(form)
    const programmeId = String(data.get("programme") ?? "")
    const body = new URLSearchParams()
    data.forEach((value, key) => {
      if (typeof value === "string") body.append(key, value)
    })
    const request = fetch("/api/enquiry", { method: "POST", body, keepalive: true })

    sendGaEvent(`${gateEvent}_launch`, { source_page: sourcePage, page_path: window.location.pathname })
    openApp(programmeId, intent)
    setGatePhase({ step: "opened", result: "waiting", programmeId, intent })

    request
      .then((res) => {
        if (!res.ok) throw new Error("not accepted")
        return res.json() as Promise<EducationEnquiryState>
      })
      .then((result) => {
        if (!result.success) throw new Error("not accepted")
        writeStore(ENQUIRY_DONE_KEY, new Date().toISOString())
        // Same event, same params as the ordinary form, so lead_form_submit stays one series.
        // DEP-100 (2026-11-13), same rule as Arts since 2026-11-02: a 409 (phone already applied) is not a
        // new CRM lead, so it is lead_form_duplicate; lead_form_submit counts new leads only.
        sendGaEvent(result.duplicate ? "lead_form_duplicate" : "lead_form_submit", {
          form_name: "education_enquiry",
          source_page: sourcePage,
          programme: result.tracking?.programme_id ?? "not_selected",
          destination: "crm",
          page_path: window.location.pathname,
        })
        sendGaEvent(`${gateEvent}_lead`, { source_page: sourcePage, page_path: window.location.pathname })
        setGatePhase((p) => (p.step === "opened" ? { ...p, result: "saved" } : p))
      })
      .catch((err: unknown) => {
        // A form that silently fails and a form nobody used both read 0. This separates them.
        // "not accepted" = the server answered no (422 / 400 / a non-JSON 5xx): a real failure. Anything else = the
        // browser lost the answer - WhatsApp or the dialer took the screen, or the same-tab fallback left the page -
        // and the keepalive request has usually reached the CRM anyway (2026-11-07 08:29 IST, Nursing: a B.Sc lead in
        // the CRM and lead_form_error in GA4 the same minute). Counted apart, so lead_form_error stays a real failure.
        const refused = err instanceof Error && err.message === "not accepted"
        sendGaEvent(refused ? "lead_form_error" : "lead_form_unconfirmed", {
          form_name: "education_enquiry",
          source_page: sourcePage,
          page_path: window.location.pathname,
        })
        sendGaEvent(`${gateEvent}_${refused ? "fail" : "unconfirmed"}`, { source_page: sourcePage, page_path: window.location.pathname })
        setGatePhase((p) => (p.step === "opened" ? { ...p, result: "failed" } : p))
      })
  }

  const surface = bare
    ? ""
    : "bg-white rounded-[20px] shadow-[0_18px_40px_rgba(3,40,22,0.35)] p-4 sm:p-6"

  if (gatePhase.step === "opened") {
    const isCall = gatePhase.intent === "call"
    const gateEvent = eventFor(gatePhase.intent)
    return (
      <div className={`${surface} space-y-4 text-center`} role="status" aria-live="polite">
        <p className="text-[#032816] text-lg font-semibold">
          {isCall ? "Opening your phone dialer…" : "Opening WhatsApp…"}
        </p>
        <p className="text-[#4b5563] text-sm">
          {isCall
            ? `Tap the green Call button on your phone to talk to our counsellor at ${GATE_PHONE_DISPLAY}.`
            : "Your message is typed in WhatsApp. Tap Send to reach our admission team."}
        </p>
        {/* A <button>, not an <a>: ConversionTracking counts <a> taps, and this second try must not
            count as a second call tap. Dark text on WhatsApp green: white is 1.98:1. */}
        <button
          type="button"
          onClick={() => {
            sendGaEvent(`${gateEvent}_fallback`, { source_page: sourcePage, page_path: window.location.pathname })
            openApp(gatePhase.programmeId, gatePhase.intent)
          }}
          className={
            isCall
              ? "w-full bg-[#0b6d41] hover:bg-[#095a36] text-white font-bold py-4 rounded-full text-base transition-colors"
              : "w-full bg-[#25d366] hover:bg-[#1ebe5a] text-[#032816] font-bold py-4 rounded-full text-base transition-colors"
          }
        >
          {isCall ? `Did not open? Call ${GATE_PHONE_DISPLAY}` : "Did not open? Open WhatsApp"}
        </button>
        {gatePhase.result === "failed" && (
          <p className="text-[#b42318] text-sm" role="alert">
            Your details did not reach our system. Please tell the counsellor your name and course.
          </p>
        )}
      </div>
    )
  }

  // 16 px text in every box: below 16 px, iPhone Safari zooms the page on focus (the full form
  // used 14 px). Border #75867e is 3.84:1 on white and the hint text #5f6b66 is 5.55:1 — the
  // WCAG minimums are 3:1 for a box edge and 4.5:1 for text.
  const inputCls =
    "w-full bg-white border-[1.5px] border-[#75867e] rounded-xl px-4 py-3 text-base text-[#1f2a24] placeholder:text-[#5f6b66] focus:outline-none focus:border-[#0b6d41] focus:ring-[3px] focus:ring-[#0b6d41]/20"
  const labelCls = "block text-[#032816] text-sm font-semibold mb-1.5"
  // The 3-step strip says what the buttons do (the old "We call in 24 hrs" step went with the
  // 24-hour callback, 2026-11-04).
  const steps =
    gate === "call"
      ? ["Fill 3 details", "Tap Call Counsellor", "Talk to us now"]
      : gate === "whatsapp"
        ? ["Fill 3 details", "Tap Chat on WhatsApp", "Send the message"]
        : [compact ? "Fill 3 details" : "Fill your details", "Tap Call or WhatsApp", "Talk to us now"]

  return (
    <form onSubmit={onGateSubmit} className={`${surface} space-y-4 text-left`}>
      <input type="hidden" name="source_page" value={sourcePage} />
      <CampaignFields />

      {/* Honeypot. Off-screen rather than display:none so a bot still fills it. Never remove: the
          CRM scores this field. autoComplete is a made-up token ON PURPOSE - measured 2026-11-12
          on Chrome 156 (/admissions): with "off", Chrome read "company_website" as Company name
          and filled a parent's saved company into it, which would mark a real lead as a bot.
          Chrome does not fill a field whose token it does not recognise. Do not change it back. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="hp-ignore"
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
            autoComplete="name"
            required
            minLength={2}
            placeholder="Enter your full name"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor={fid("phone")} className={labelCls}>
            Mobile Number <span aria-hidden="true">*</span>
          </label>
          <input
            id={fid("phone")}
            type="tel"
            name="phone"
            autoComplete="tel-national"
            onInput={(e) => {
              const box = e.currentTarget
              const tenDigits = toTenDigitMobile(box.value)
              if (tenDigits !== box.value) box.value = tenDigits
            }}
            required
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            title="10-digit mobile number starting with 6, 7, 8 or 9"
            placeholder="10-digit mobile number"
            className={inputCls}
          />
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

      {/* One tap = lead + app. Two buttons on every page form and the Enquire Now popup (the old
          "Get a Call Back" ended on a 24-hour thank-you screen); one inside a Call / WhatsApp gate.
          Dark text on WhatsApp green: white on it is 1.98:1, below the 4.5:1 text minimum. */}
      {(gate ? [gate] : (["call", "whatsapp"] as GateIntent[])).map((intent) => (
        <button
          key={intent}
          type="submit"
          name="cta"
          value={intent}
          onClick={() => {
            chosen.current = intent
          }}
          className={
            intent === "whatsapp"
              ? "w-full bg-[#25d366] hover:bg-[#1ebe5a] text-[#032816] font-bold py-4 rounded-full text-base transition-colors"
              : "w-full bg-[#0b6d41] hover:bg-[#095a36] text-white font-bold py-4 rounded-full text-base transition-colors"
          }
        >
          {intent === "call" ? "Call Counsellor" : "Chat on WhatsApp"}
        </button>
      ))}

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

      {compact && (
        <p className="text-center text-[#5f6b66] text-xs">
          By submitting, you agree to be contacted by our admission team.
        </p>
      )}
    </form>
  )
}
