/**
 * Shared blog content helpers.
 *
 * These mirror the rendering logic used by the live campus blog page so that
 * the draft preview page produces byte-identical output.
 */

export interface TocItem {
  id: string;
  label: string;
}

/** Extract h2/h3 headings from HTML and inject id attributes for TOC */
export function processContent(
  html: string
): { processedHtml: string; tocItems: TocItem[] } {
  if (!html) return { processedHtml: '', tocItems: [] };

  const tocItems: TocItem[] = [];
  const seen = new Map<string, number>();

  const processedHtml = html.replace(
    /<h([23])([^>]*)>(.*?)<\/h\1>/gi,
    (_, level: string, attrs: string, inner: string) => {
      const label = inner.replace(/<[^>]+>/g, '').trim();
      const base = label
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      const count = seen.get(base) ?? 0;
      const id = count > 0 ? `${base}-${count}` : base;
      seen.set(base, count + 1);

      tocItems.push({ id, label });

      if (!attrs.includes('id=')) {
        return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
      }
      return `<h${level}${attrs}>${inner}</h${level}>`;
    }
  );

  return { processedHtml, tocItems };
}

/** Estimate reading time from HTML content */
export function calcReadMeta(content: string): { words: number; readTime: number } {
  const text = content.replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return { words, readTime: Math.max(1, Math.ceil(words / 200)) };
}

/** Normalise stored blog content into renderable HTML (plain text → paragraphs) */
export function toRenderableHtml(content: string | null | undefined): string {
  const contentHtml = content ?? '';
  if (!contentHtml) return '';
  if (contentHtml.includes('<')) return contentHtml;
  return contentHtml
    .split(/\n\n+/)
    .map((p) => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
    .join('');
}
