import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://yulrhydzxhdbclqiubxy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1bHJoeWR6eGhkYmNscWl1Ynh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1OTE0MDYsImV4cCI6MjA1NzE2NzQwNn0.yEWDAurF0QxwTsuy_HYllez0VnywY4d2vw4AfQnkxgM";

export const supabase = createClient(supabaseURL, supabaseKey);
