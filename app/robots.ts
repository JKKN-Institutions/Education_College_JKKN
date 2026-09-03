import type { MetadataRoute } from 'next';

// Every group below MUST repeat the disallow list. robots.txt has NO group
// inheritance (RFC 9309): a crawler reads only its own most-specific group and
// never falls back to `*` for extra rules. An AI group carrying just `Allow: /`
// would be exempt from every protection this site has.
const DISALLOW = [
  // `$` anchors the match to the exact path. A bare `/admin` would also prefix-match
  // `/administration`, and a bare `/api` would match `/api-*`. `/admissions` is safe
  // either way (5th char `n` vs `s`) but do not rely on eyeballing that - the pairs
  // are verified with a longest-match evaluator, not by reading.
  '/admin$',          // /admin exactly: it 307s to the live CMS login
  '/admin/',          // and everything under it
  '/api$',
  '/api/',
  '/blog/preview/',   // app/blog/preview/[id] renders unpublished posts
];

const AI_CRAWLERS = [
  // OpenAI / ChatGPT
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  // Anthropic / Claude
  'ClaudeBot',
  'Claude-Web',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google AI
  'Google-Extended',
  'Google-CloudVertexBot',
  'Gemini-Deep-Research',
  // Meta AI
  'Meta-ExternalAgent',
  'meta-externalfetcher',
  'FacebookBot',
  // xAI / Grok
  'GrokBot',
  'xAI-Grok',
  // Apple, Amazon, Mistral, Cohere, You, AI2, Common Crawl, ByteDance, DuckDuckGo
  'Applebot',
  'Applebot-Extended',
  'Amazonbot',
  'MistralAI-User',
  'cohere-ai',
  'YouBot',
  'AI2Bot',
  'CCBot',
  'Bytespider',
  'DuckAssistBot',
  // Classic search
  'Googlebot',
  'Bingbot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: AI_CRAWLERS,
        allow: '/',
        disallow: DISALLOW,
      },
    ],
    sitemap: 'https://edu.jkkn.ac.in/sitemap.xml',
  };
}
