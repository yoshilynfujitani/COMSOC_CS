import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://keehumuinxmwojarzpjx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlZWh1bXVpbnhtd29qYXJ6cGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxNzE5NTAsImV4cCI6MjAxMDc0Nzk1MH0.5GoL864vDRB8kynG-03RGuwvz-bBZ9A2FkIjlmTo6Ns";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
