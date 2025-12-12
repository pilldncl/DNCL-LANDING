/**
 * Supabase Client Setup
 * 
 * Creates a Supabase client instance for use in the application.
 * Configure your Supabase project in .env.local
 */

let supabaseInstance: any = null

export function getSupabaseClient() {
  if (supabaseInstance) {
    return supabaseInstance
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return null
  }

  try {
    // Dynamic import to avoid build errors if not configured
    const { createClient } = require('@supabase/supabase-js')
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
    return supabaseInstance
  } catch (error) {
    console.warn('Supabase client creation failed:', error)
    return null
  }
}

export const supabase = getSupabaseClient()

/**
 * Check if Supabase is configured
 */
export function isSupabaseConfigured(): boolean {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  return !!supabaseUrl && !!supabaseAnonKey && !!supabase
}

