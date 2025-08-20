// api/fetchLeads.js
import { supabase } from "../components/SupabaseClient";

export async function fetchLeads() {
  const { data, error } = await supabase
    .from('leads')
    .select('*')

  if (error) {
    throw new Error(error.message)
  }

  return data
}
