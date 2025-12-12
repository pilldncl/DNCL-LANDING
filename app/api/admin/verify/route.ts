import { NextRequest, NextResponse } from 'next/server'
import { verifySessionToken } from '@/lib/admin/auth'

// Force dynamic rendering since we use cookies
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get('admin_session')?.value

    if (!sessionToken) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }

    const isValid = verifySessionToken(sessionToken)

    if (!isValid) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }

    return NextResponse.json({ authenticated: true })
  } catch (error) {
    console.error('Verify error:', error)
    return NextResponse.json({ authenticated: false }, { status: 500 })
  }
}

