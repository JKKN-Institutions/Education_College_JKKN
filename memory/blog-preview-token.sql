-- ============================================================
-- Public draft-preview links for blogs
-- Run once in Supabase → SQL Editor. Safe to re-run.
-- ============================================================

-- ── STEP 1: secret token column ─────────────────────────────
-- The column may already exist as uuid (or as text on some installs), so
-- pick a default that matches whatever type is actually there.
DO $do$
DECLARE
  coltype text;
BEGIN
  SELECT data_type INTO coltype
    FROM information_schema.columns
   WHERE table_schema = 'public'
     AND table_name   = 'blogs'
     AND column_name  = 'preview_token';

  IF coltype IS NULL THEN
    ALTER TABLE public.blogs ADD COLUMN preview_token uuid;
    coltype := 'uuid';
  END IF;

  IF coltype = 'uuid' THEN
    ALTER TABLE public.blogs
      ALTER COLUMN preview_token SET DEFAULT gen_random_uuid();

    UPDATE public.blogs
       SET preview_token = gen_random_uuid()
     WHERE preview_token IS NULL;
  ELSE
    ALTER TABLE public.blogs
      ALTER COLUMN preview_token
      SET DEFAULT replace(gen_random_uuid()::text, '-', '')
               || replace(gen_random_uuid()::text, '-', '');

    UPDATE public.blogs
       SET preview_token = replace(gen_random_uuid()::text, '-', '')
                        || replace(gen_random_uuid()::text, '-', '')
     WHERE preview_token IS NULL;
  END IF;
END
$do$;

CREATE UNIQUE INDEX IF NOT EXISTS blogs_preview_token_key
  ON public.blogs (preview_token);


-- ── STEP 2: token-gated read ────────────────────────────────
-- SECURITY DEFINER so it bypasses the "is_published = true" RLS policy,
-- but ONLY ever returns a row when the exact secret token is supplied.
-- The column is cast to text (not the argument to uuid) so a malformed
-- token simply fails to match instead of raising 22P02.
CREATE OR REPLACE FUNCTION public.get_blog_preview(p_id uuid, p_token text)
RETURNS SETOF public.blogs
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $fn$
  SELECT b.*
    FROM public.blogs b
   WHERE b.id = p_id
     AND p_token IS NOT NULL
     AND length(p_token) >= 32
     AND b.preview_token IS NOT NULL
     AND b.preview_token::text = p_token
   LIMIT 1;
$fn$;

REVOKE ALL ON FUNCTION public.get_blog_preview(uuid, text) FROM public;
GRANT EXECUTE ON FUNCTION public.get_blog_preview(uuid, text) TO anon, authenticated;
