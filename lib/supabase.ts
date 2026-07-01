import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service_role key.
 *
 * The service_role key bypasses Row Level Security, so it must NEVER be
 * exposed to the browser. Everything that touches the database in this app
 * (saving a wish, listing wishes, exporting) runs on the server, so a single
 * admin client is all we need — no key ever reaches the client bundle.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRole) {
    throw new Error(
      "Faltan variables de entorno de Supabase (NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)."
    );
  }

  return createClient(url, serviceRole, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export type Wish = {
  id: string;
  created_at: string;
  name: string | null;
  message: string;
  email: string | null;
  tags: string[] | null;
};
