// Call / WhatsApp form gate - ported 2026-11-04 from the Dental site (live there since 2026-11-03,
// tested by the user on a phone), user's choice: the same behaviour on every JKKN college site.
//
// WHY. Every Call and WhatsApp button on the site points at ONE number, +91 93458 55001, and a
// tap on it left no trace in the CRM: GA4 counted the tap (phone_click / whatsapp_click) but a tap
// carries no phone number, so no call or chat could be tied to a website visit. With the gate, a
// tap opens the 3-box enquiry form first; its button ("Call Counsellor" / "Chat on WhatsApp")
// sends the lead to the CRM AND opens the dialer / WhatsApp in the same tap. So every gated
// contact has a CRM "website" lead created a moment before it.
//
// Not gated (user's choices on Dental, applied here): the careers page (job seekers), and the
// pages of a course the CRM form cannot accept - the form forces a CRM programme, so such a page
// must stay direct. On this site that is Political Science: the site itself tells visitors it "is
// not one of the 10 B.Ed teaching subjects on the JKKN enquiry form" (department page, admission
// page and course blog, 2026-10-30). The CRM's 11th row for this college, "B.Ed (Historical
// Aggregate)", is a data-migration bucket that no page advertises (lib/education-programmes.ts),
// so it adds no page here. Any number other than 93458 55001 never matches, so it stays direct.
//
// Plain module: no React, no server code - the modal, the form and the button all import it.

import { DEFAULT_PROGRAMME_BY_DEPARTMENT, EDUCATION_PROGRAMMES } from "@/lib/education-programmes"

export type GateIntent = "call" | "whatsapp"

export const GATE_PHONE = "+919345855001"
export const GATE_PHONE_DISPLAY = "+91 93458 55001"
const GATE_DIGITS = "9345855001"

/** Paths where a tap must reach the number directly. */
const UNGATED_PATH_PREFIXES = [
  "/others/careers",
  "/departments/political-science",
  "/admissions/political-science",
  "/blog/b-ed-political-science-2026",
]

export function isUngatedPath(pathname: string): boolean {
  const p = pathname.toLowerCase()
  return UNGATED_PATH_PREFIXES.some((prefix) => p === prefix || p.startsWith(`${prefix}/`))
}

/**
 * Which gate a link belongs to, or null for any other link.
 * tel: links match when their digits end in the admission number (so "tel:+91 93458 55001",
 * "tel:9345855001" and "tel: +91 93458 55001" all count, and other numbers do not).
 * WhatsApp links match wa.me/<number> and api.whatsapp.com/send?phone=<number>.
 */
export function gateIntentForHref(rawHref: string): GateIntent | null {
  const href = rawHref.trim().toLowerCase()
  if (href.startsWith("tel:")) {
    const digits = href.slice(4).replace(/\D/g, "")
    return digits.endsWith(GATE_DIGITS) ? "call" : null
  }
  const wa = href.match(/^https?:\/\/(?:wa\.me\/(\d+)|(?:api|web)\.whatsapp\.com\/send\/?\?(?:.*&)?phone=(\d+))/)
  if (wa) {
    const digits = wa[1] ?? wa[2] ?? ""
    return digits.endsWith(GATE_DIGITS) ? "whatsapp" : null
  }
  return null
}

/** Short page tag for the CRM source and the WhatsApp reference, e.g. "-contact" or "-home". */
export function pageTag(pathname: string): string {
  return pathname.replace(/\/+$/, "").replace(/\//g, "-") || "-home"
}

/** The CRM programme of a subject key ("tamil", "maths" ...), only where the map has one. */
function programmeOfSubject(subject: string): string | undefined {
  return Object.prototype.hasOwnProperty.call(DEFAULT_PROGRAMME_BY_DEPARTMENT, subject)
    ? DEFAULT_PROGRAMME_BY_DEPARTMENT[subject]
    : undefined
}

/**
 * Pre-selects the subject on a one-subject page, so the Tamil page opens on "B.Ed - Tamil".
 * Same rule the page forms already follow (DEFAULT_PROGRAMME_BY_DEPARTMENT): only the eight
 * subjects with a measured CRM match; botany, zoology, physics ... open on "Select a Programme".
 * Pages: /departments/<subject>, /admissions/<subject> and the course blogs /blog/b-ed-<subject>-2026
 * (the blog says "mathematics" where the map says "maths", as in CourseBlogTemplate).
 */
export function programmeForPath(pathname: string): string | undefined {
  const p = pathname.toLowerCase().replace(/\/+$/, "")
  const page = p.match(/^\/(?:departments|admissions)\/([a-z-]+)$/)
  if (page) return programmeOfSubject(page[1])
  const blog = p.match(/^\/blog\/b-ed-([a-z-]+)-2026$/)
  if (blog) return programmeOfSubject(blog[1] === "mathematics" ? "maths" : blog[1])
  return undefined
}

/** "B.Ed Tamil" - the course as a parent would type it. */
function courseShort(programmeId: string): string {
  const label = EDUCATION_PROGRAMMES.find((x) => x.id === programmeId)?.label ?? ""
  if (!label) return "B.Ed"
  return label.replace(" \u2014 ", " ")
}

/**
 * WhatsApp link with the course and a page reference typed into the box.
 * No name and no phone in it, ever: a link like this can end up in analytics or logs.
 */
export function whatsappGateUrl(programmeId: string, pathname: string): string {
  const ref = pageTag(pathname).replace(/^-/, "").replace(/[^a-z0-9-]/gi, "").slice(0, 30) || "home"
  const text = `Hi, ${courseShort(programmeId)} admission details venum. Ref: WEB-EDU-${ref}`
  return `https://wa.me/${GATE_PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`
}

export const telGateUrl = `tel:${GATE_PHONE}`

// Plain-text numbers. The site prints the number as plain text in places (contact card, FAQ
// answers, page copy); iPhone used to turn those into dial links of its own, outside the gate. The
// layout switches that off, and EnquiryModal reads a tap on such a number with numberAtOffset().
// Indian mobiles only, as a visitor reads them: "+91 93458 55001", "93458 55001", "9345855001".
const PLAIN_MOBILE = /(?:\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}/g

/** The 10-digit mobile number that a character offset of a text falls inside, or null. */
export function numberAtOffset(text: string, offset: number): string | null {
  for (const m of text.matchAll(PLAIN_MOBILE)) {
    const start = m.index ?? 0
    if (offset >= start && offset <= start + m[0].length) return m[0].replace(/\D/g, "").slice(-10)
  }
  return null
}

/** True for the admission number - the one number the gate applies to. */
export function isGateNumber(digits: string): boolean {
  return digits === GATE_DIGITS
}

export function telUrlFor(digits: string): string {
  return `tel:+91${digits}`
}
