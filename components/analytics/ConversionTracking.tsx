"use client";

import { useEffect } from "react";

/**
 * JKKN conversion-event tracking — DEP-14.
 *
 * Fires two GA4 events that did not exist on any of the six properties before this shipped.
 * Measured live on 2026-08-08 over the previous 28 days, all six GA4 properties:
 *
 *     college         apply_click   form_submit   phone_click   whatsapp_click
 *     dental                   65             0             0                0
 *     pharmacy                117             0             0                0
 *     nursing                 190             0             0                0
 *     arts_science             77             0             0                0
 *     ahs                      88             0             0                0
 *     education                25             0             0                0
 *
 * Every site carries tel: links (15–32 source files each) and four of the six carry wa.me
 * links, so those zeros are not "nobody calls" — they are "nobody was counting".
 *
 * ─────────────────────────────────────────────────────────────────────────────────────────
 * DO NOT ADD apply_click TO THIS FILE. Read this before you are tempted.
 * ─────────────────────────────────────────────────────────────────────────────────────────
 * apply_click already works, and it is NOT produced by site code. Each GA4 property carries
 * an event-create rule that derives apply_click from the enhanced-measurement `click` event
 * whose linkUrl contains jkkn.ai/apply. The counts above are that rule working.
 *
 * Firing apply_click from here as well would count one real click twice. That is not a
 * hypothetical: on 2026-07-29 Pharmacy and Education were each found carrying TWO identical
 * event-create rules and were over-counting apply_click exactly 2x. The duplicates were
 * deleted at 14:59 that day and every property was verified back to one rule. Adding a code
 * event now re-creates the same defect from the other direction, and it would silently break
 * comparability with every apply_click figure this project has published.
 *
 * The original DEP-14 spec (artefacts/ga4-event-snippets.md, 2026-07-29) DID include
 * apply_click, and also matched it on `href.includes("admission")` — which would have fired a
 * conversion event on every navigation link to /admissions. Both were caught by measuring
 * before shipping rather than after. The spec is superseded by this file.
 *
 * If apply_click ever needs to move into code, that is a deliberate migration: delete the six
 * GA4 event-create rules first (scripts/ga4_event_rules.py --audit shows them), accept the
 * break in the data series, and record the switchover date. Not a one-line addition here.
 *
 * ─────────────────────────────────────────────────────────────────────────────────────────
 * Mounted once inside <body> in the root layout, so a single listener lives for the whole app
 * session and survives client-side navigation. Capture phase, so it still fires when a
 * component stops propagation on its own click handler.
 */

type Gtag = (...args: unknown[]) => void;

function track(eventName: string, params: Record<string, string>) {
  // gtag.js loads async. Checking at FIRE time rather than at attach time is deliberate: a
  // click three seconds after paint must not be dropped because the script had not arrived
  // when this component mounted.
  const w = window as unknown as { gtag?: Gtag };
  if (typeof w.gtag !== "function") return;
  w.gtag("event", eventName, params);
}

export function ConversionTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const raw = (anchor.getAttribute("href") || "").trim();
      const href = raw.toLowerCase();
      const shared = {
        link_url: raw.slice(0, 100),
        link_text: (anchor.textContent || "").trim().slice(0, 60),
        page_path: window.location.pathname,
      };

      if (href.startsWith("tel:")) {
        track("phone_click", shared);
        return;
      }
      if (
        href.includes("wa.me/") ||
        href.includes("api.whatsapp.com") ||
        href.includes("web.whatsapp.com")
      ) {
        track("whatsapp_click", shared);
      }
      // Anything else is left alone on purpose — see the apply_click note above.
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}

export default ConversionTracking;
