import { createClient } from "@supabase/supabase-js";
import { Database } from "../supabase";

const supabaseUrl: string = import.meta.env.VITE_APP_URL;
const supabaseKey: string = import.meta.env.VITE_APP_ANON_KEY;
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
