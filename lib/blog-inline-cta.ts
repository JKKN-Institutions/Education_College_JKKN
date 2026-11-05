// Enquiry box INSIDE a CMS blog post - where it goes (lead option 2, 2026-11-05).
//
// A live 375 px check on 2026-11-05 found no enquiry form inside the Education campus posts (only the
// header / footer buttons). Same method as the Dental site (lib/blog-inline-cta.ts there, live since
// 2026-11-02): the box goes right after the first answer section of EVERY post.
//
// No course is pre-selected here on purpose. A slug word is not a pedagogy: "tamil" sits in every
// "tamil-nadu" slug and "english" in "english-medium". Same rule as lib/education-programmes.ts -
// where there is no measured answer, do not guess on the applicant's behalf. The reader picks.
//
// The post body is CMS HTML, so the box cannot live in the CMS text. The template splits the HTML
// just before the Nth <h2> and renders the box in between. The split is refused (null) whenever the
// part before it leaves a block element open - then the box simply goes after the whole post - so
// a later CMS edit that wraps the body in a <div> can never produce broken markup.

/** The box goes just before a post's 2nd <h2> (after the first answer section). */
export const DEFAULT_BEFORE_H2 = 2;

/** The CRM tag is utm_campaign education-<sourcePage>; the slug part is kept short. */
const SOURCE_SLUG_MAX = 40;

const BLOCK_TAGS = ['div', 'section', 'article', 'aside', 'table', 'ul', 'ol', 'blockquote', 'figure', 'details', 'p', 'pre'];

/** True when every block tag opened in `html` is also closed in it. */
export function blockTagsBalanced(html: string): boolean {
  return BLOCK_TAGS.every((tag) => {
    const open = (html.match(new RegExp(`<${tag}(?=[\\s>/])`, 'gi')) || []).length;
    const close = (html.match(new RegExp(`</${tag}\\s*>`, 'gi')) || []).length;
    return open === close;
  });
}

/** The HTML cut just before its Nth <h2> (n >= 2), or null when there is no Nth <h2> or the cut is unsafe. */
export function splitBeforeNthH2(html: string, n: number): { before: string; after: string } | null {
  if (!html || n < 2) return null;
  const re = /<h2(?=[\s>])/gi;
  let count = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    count += 1;
    if (count === n) {
      const before = html.slice(0, m.index);
      const after = html.slice(m.index);
      return blockTagsBalanced(before) ? { before, after } : null;
    }
  }
  return null;
}

export type InlineCta = { sourcePage: string; before: string | null; after: string | null };

/** The box for a post: its source tag and the two halves (both null = box after the post).
 *  Null only when there is no slug. */
export function inlineCtaFor(slug: string, html: string): InlineCta | null {
  if (!slug) return null;
  const sourcePage = `blog-${slug.slice(0, SOURCE_SLUG_MAX).replace(/-+$/, '')}`;
  const parts = splitBeforeNthH2(html, DEFAULT_BEFORE_H2);
  return { sourcePage, before: parts?.before ?? null, after: parts?.after ?? null };
}
