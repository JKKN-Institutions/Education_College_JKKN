// Browser memory for the homepage enquiry popup. Kept apart from the components so the form and
// the modal can both import it without importing each other.

/** Set after a CRM-accepted submit, so the homepage popup stops interrupting this visitor. */
export const ENQUIRY_DONE_KEY = "jkkn_enquiry_done"

// localStorage throws in some private windows and when site data is blocked. A popup rule must
// never take the page down with it, so every access is wrapped.
export function readStore(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writeStore(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    /* storage unavailable — behave as a first visit */
  }
}
