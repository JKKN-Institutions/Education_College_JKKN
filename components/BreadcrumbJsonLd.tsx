import { JsonLd } from './JsonLd';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

/**
 * Renders BreadcrumbList JSON-LD structured data.
 * Pass an array of items — the last item is the current page.
 */
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://edu.jkkn.ac.in${item.href}`,
    })),
  };

  return <JsonLd data={data} />;
}
