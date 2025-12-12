import { NextRequest, NextResponse } from 'next/server'
import { authenticate, createSessionToken } from '@/lib/admin/auth'

// Force dynamic rendering since we use cookies
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const identifier = body.email || body.username
    const password = body.password

    if (!identifier || !password) {
      return NextResponse.json(
        { error: 'Email/username and password are required' },
        { status: 400 }
      )
    }

    console.log('Login attempt for:', identifier)
    
    const isValid = await authenticate(identifier, password)

    if (!isValid) {
      console.log('Authentication failed for:', identifier)
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    console.log('Authentication successful for:', identifier)

    // Create session token
    const sessionToken = createSessionToken()

    // Create response with session cookie
    const response = NextResponse.json({
      success: true,
      token: sessionToken,
    })

    // Set HTTP-only cookie (secure in production)
    response.cookies.set('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

