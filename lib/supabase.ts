import { createClient } from '@supabase/supabase-js';

// Substitua pelas suas chaves do Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ntvzmabfbgimtrjwgvli.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'COLE_SUA_ANON_KEY_AQUI';

console.log('🔌 Supabase Config Debug:');
console.log('URL:', supabaseUrl);
console.log('Key (first 10 chars):', supabaseAnonKey ? supabaseAnonKey.substring(0, 10) + '...' : 'undefined');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
