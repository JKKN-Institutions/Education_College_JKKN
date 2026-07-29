-- ============================================================
-- Public draft-preview links for blogs
-- Run once in Supabase → SQL Editor. Safe to re-run.
-- ============================================================

-- ── STEP 1: secret token column ─────────────────────────────
ALTER TABLE public.blogs
  ADD COLUMN IF NOT EXISTS preview_token text;

-- New rows get a token automatically (64 hex chars, from two UUIDs).
ALTER TABLE public.blogs
  ALTER COLUMN preview_token
  SET DEFAULT replace(gen_random_uuid()::text, '-', '')
           || replace(gen_random_uuid()::text, '-', '');

-- Backfill existing rows.
UPDATE public.blogs
   SET preview_token = replace(gen_random_uuid()::text, '-', '')
                    || replace(gen_random_uuid()::text, '-', '')
 WHERE preview_token IS NULL;

CREATE UNIQUE INDEX IF NOT EXISTS blogs_preview_token_key
  ON public.blogs (preview_token);


-- ── STEP 2: token-gated read ────────────────────────────────
-- SECURITY DEFINER so it bypasses the "is_published = true" RLS policy,
-- but ONLY ever returns a row when the exact secret token is supplied.
CREATE OR REPLACE FUNCTION public.get_blog_preview(p_id uuid, p_token text)
RETURNS SETOF public.blogs
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT b.*
    FROM public.blogs b
   WHERE b.id = p_id
     AND p_token IS NOT NULL
     AND length(p_token) >= 32
     AND b.preview_token IS NOT NULL
     AND b.preview_token = p_token
   LIMIT 1;
$$;

REVOKE ALL ON FUNCTION public.get_blog_preview(uuid, text) FROM public;
GRANT EXECUTE ON FUNCTION public.get_blog_preview(uuid, text) TO anon, authenticated;
