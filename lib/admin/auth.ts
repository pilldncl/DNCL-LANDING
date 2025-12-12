/**
 * Admin Authentication
 * 
 * Supports multiple modes:
 * 1. Database-based (from landing_admin_users table) - Primary method
 * 2. Simple password-based (stored in env) - Fallback
 * 3. Supabase authentication (optional)
 */

import { getSupabaseClient } from '@/lib/supabase/client'

// Use Node.js crypto (available in Next.js API routes)
const crypto = require('crypto')

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@dncltechzone.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || ''

// Hash password using SHA-256
function hashPassword(password: string, salt: string = 'dncl-landing-2024'): string {
  return crypto
    .createHash('sha256')
    .update(password + salt)
    .digest('hex')
}

// Database-based authentication (primary method)
export async function authenticateDatabase(emailOrUsername: string, password: string): Promise<boolean> {
  const supabase = getSupabaseClient()
  if (!supabase) {
    console.log('Supabase client not available - check environment variables')
    return false
  }

  try {
    const passwordHash = hashPassword(password)
    console.log('Attempting database auth for:', emailOrUsername)
    console.log('Password hash:', passwordHash.substring(0, 20) + '...')

    // Try to find user by username first, then email
    let data = null
    let error = null
    
    // Try username match first
    const { data: usernameData, error: usernameError } = await supabase
      .from('landing_admin_users')
      .select('*')
      .eq('username', emailOrUsername)
      .maybeSingle()
    
    if (usernameData) {
      data = usernameData
    } else {
      // If no username match, try email
      const { data: emailData, error: emailError } = await supabase
        .from('landing_admin_users')
        .select('*')
        .eq('email', emailOrUsername)
        .maybeSingle()
      
      data = emailData
      error = emailError
    }

    if (error) {
      console.error('Database query error:', error)
      return false
    }

    if (!data) {
      console.log('User not found in database')
      return false
    }

    console.log('User found:', { username: data.username, email: data.email })
    console.log('Stored hash:', data.password_hash?.substring(0, 20) + '...')
    console.log('Computed hash:', passwordHash.substring(0, 20) + '...')
    console.log('Hash match:', data.password_hash === passwordHash)

    // Verify password hash
    return data.password_hash === passwordHash
  } catch (error) {
    console.error('Database auth error:', error)
    return false
  }
}

// Simple password-based auth (fallback)
export async function authenticateSimple(email: string, password: string): Promise<boolean> {
  if (!ADMIN_PASSWORD) {
    return false
  }

  // Basic validation
  if (email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() && password === ADMIN_PASSWORD) {
    return true
  }

  return false
}

// Supabase authentication (if configured)
export async function authenticateSupabase(email: string, password: string): Promise<boolean> {
  // Check if Supabase is configured
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    // Fallback to simple auth
    return authenticateSimple(email, password)
  }

  try {
    // Dynamic import to avoid errors if Supabase not installed
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error('Supabase auth error:', error)
      return false
    }

    return !!data.session
  } catch (error) {
    console.error('Supabase not configured, falling back to simple auth')
    return authenticateSimple(email, password)
  }
}

// Main authentication function
export async function authenticate(emailOrUsername: string, password: string): Promise<boolean> {
  // Try database authentication first (if Supabase is configured)
  const supabase = getSupabaseClient()
  if (supabase) {
    console.log('Attempting database authentication...')
    const dbAuth = await authenticateDatabase(emailOrUsername, password)
    if (dbAuth) {
      console.log('Database authentication successful')
      return true
    }
    console.log('Database authentication failed')
  } else {
    console.log('Supabase not configured, skipping database auth')
  }

  // Fallback to Supabase auth if enabled
  const useSupabase = process.env.NEXT_PUBLIC_USE_SUPABASE_AUTH === 'true'
  if (useSupabase) {
    console.log('Attempting Supabase auth...')
    const supabaseAuth = await authenticateSupabase(emailOrUsername, password)
    if (supabaseAuth) {
      console.log('Supabase auth successful')
      return true
    }
  }

  // Final fallback to simple env-based auth
  console.log('Falling back to simple env-based auth')
  return authenticateSimple(emailOrUsername, password)
}

// Create session token (simple JWT-like token stored in sessionStorage)
export function createSessionToken(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 15)
  return `${timestamp}-${random}`
}

// Verify session token
export function verifySessionToken(token: string): boolean {
  if (!token) return false

  try {
    const [timestamp] = token.split('-')
    const tokenTime = parseInt(timestamp, 10)
    const now = Date.now()
    const maxAge = 24 * 60 * 60 * 1000 // 24 hours

    return (now - tokenTime) < maxAge
  } catch {
    return false
  }
}

