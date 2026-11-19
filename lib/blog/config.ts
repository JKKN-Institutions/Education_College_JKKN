/**
 * Where MyJKKN lives. Browser-safe (no server-only code), so the blog pages and
 * the comment form can both use it.
 */
export const MYJKKN_URL = (process.env.NEXT_PUBLIC_MYJKKN_URL || 'https://www.jkkn.ai').replace(/\/+$/, '');
