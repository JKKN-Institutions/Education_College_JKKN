// Send a GA4 event even when it is raised before gtag exists.
//
// WHY. <GoogleAnalytics /> from @next/third-parties defines window.gtag in an afterInteractive
// script, which runs AFTER React has hydrated. The homepage popup opens in its first effect — so
// on 2026-10-16, live, popup_view and the popup's enquiry_open were dropped on every page load:
// window.dataLayer held only "js" and "config". Pushing to dataLayer before "config" is not a fix
// either: gtag.js would process the event before it knows the measurement id. So wait for gtag,
// then send — the event lands after "config", in order.
//
// No name, no phone — ever. Callers pass only where something happened.

type Gtag = (...args: unknown[]) => void

export function sendGaEvent(eventName: string, params: Record<string, string>) {
  let tries = 0
  const fire = () => {
    const w = window as unknown as { gtag?: Gtag }
    if (typeof w.gtag === "function") {
      w.gtag("event", eventName, params)
      return
    }
    // 40 x 250 ms = 10 s for the GA script to arrive; after that the event is given up quietly.
    if (++tries < 40) window.setTimeout(fire, 250)
  }
  fire()
}
