import { NextResponse } from 'next/server'

// Force dynamic rendering since we use cookies
export const dynamic = 'force-dynamic'

export async function POST() {
  const response = NextResponse.json({ success: true })
  
  // Clear session cookie
  response.cookies.delete('admin_session')
  
  return response
}

