import { createClient } from "@supabase/supabase-js";

/**
 * Returns a Supabase client using the service role key.
 * Called inside each handler, never at module level, so build-time
 * import does not crash when env vars are absent.
 */
export function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}
