// Quick script to check if env vars are set (without exposing values)
require('dotenv').config({ path: '.env.local' })

const hasSupabaseUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL
const hasSupabaseKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const hasAdminPassword = !!process.env.ADMIN_PASSWORD

console.log('Environment Variables Check:')
console.log('NEXT_PUBLIC_SUPABASE_URL:', hasSupabaseUrl ? '✅ Set' : '❌ Not set')
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', hasSupabaseKey ? '✅ Set' : '❌ Not set')
console.log('ADMIN_PASSWORD:', hasAdminPassword ? '✅ Set' : '❌ Not set')

