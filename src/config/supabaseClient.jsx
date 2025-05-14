// src/config/supabaseClient.js

import { createClient } from "@supabase/supabase-js";

// Use env vars for safety—set these in your .env (or hosting dashboard)
const SUPABASE_URL = "https://yulrhydzxhdbclqiubxy.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1bHJoeWR6eGhkYmNscWl1Ynh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1OTE0MDYsImV4cCI6MjA1NzE2NzQwNn0.yEWDAurF0QxwTsuy_HYllez0VnywY4d2vw4AfQnkxgM";
const SUPABASE_SERVICE_ROLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1bHJoeWR6eGhkYmNscWl1Ynh5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MTU5MTQwNiwiZXhwIjoyMDU3MTY3NDA2fQ.Gl0sVy5pp4Qo2eNcXsy19ES46O0VIqn2i95LbrBRhiU";

// Validate
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "Missing environment variables: SUPABASE_URL and SUPABASE_ANON_KEY are required"
  );
}

// Browser-safe client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Service-role client (only use on server/Node!)
// Protect by checking you’re not in the browser
export const supabaseAdmin =
  typeof window === "undefined" && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    : null;

// Optional helper to guard admin calls
export function getAdminClient() {
  if (!supabaseAdmin) {
    throw new Error(
      "Service-role key is not available. You can only call admin functions from the server."
    );
  }
  return supabaseAdmin;
}
