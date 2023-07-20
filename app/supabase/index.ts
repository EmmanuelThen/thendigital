import { createClient } from "@supabase/supabase-js";

const supabaseUrlKey = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string


//this is only called in server to send info to client
export const supabase = createClient(supabaseUrlKey, supabaseServiceRoleKey)