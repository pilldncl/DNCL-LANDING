import { NextRequest, NextResponse } from 'next/server'
import { verifySessionToken } from '@/lib/admin/auth'
import { getSupabaseClient } from '@/lib/supabase/client'

// Force dynamic rendering since we use cookies
export const dynamic = 'force-dynamic'

const DEFAULT_CONFIG_ID = '00000000-0000-0000-0000-000000000001'

// GET endpoint is PUBLIC - allows visitors to see TikTok popup config
// POST endpoint is PROTECTED - only admins can update config
export async function GET(request: NextRequest) {
  try {
    // Try to get from Supabase (public access)
    const supabase = getSupabaseClient()
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('landing_tiktok_config')
          .select('*')
          .eq('id', DEFAULT_CONFIG_ID)
          .single()

        if (!error && data) {
          return NextResponse.json({
            enabled: data.enabled || false,
            username: data.username || '',
            videoIds: data.video_ids || [],
            delaySeconds: data.delay_seconds || 5,
            title: data.title || 'Check Us Out on TikTok!',
          })
        }
      } catch (supabaseError) {
        console.error('Supabase get error:', supabaseError)
      }
    }

    // Fallback to default
    return NextResponse.json({
      enabled: false,
      username: '',
      videoIds: [],
      delaySeconds: 5,
      title: 'Check Us Out on TikTok!',
    })
  } catch (error) {
    console.error('Get config error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get('admin_session')?.value

    if (!sessionToken || !verifySessionToken(sessionToken)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const config = await request.json()

    // Validate config
    if (typeof config.username !== 'string' || !Array.isArray(config.videoIds)) {
      return NextResponse.json({ error: 'Invalid configuration' }, { status: 400 })
    }

    // Save to Supabase
    const supabase = getSupabaseClient()
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('landing_tiktok_config')
          .upsert({
            id: DEFAULT_CONFIG_ID,
            enabled: config.enabled || false,
            username: config.username || '',
            video_ids: config.videoIds || [],
            delay_seconds: config.delaySeconds || 5,
            title: config.title || 'Check Us Out on TikTok!',
            updated_at: new Date().toISOString(),
          })
          .select()
          .single()

        if (error) {
          console.error('Supabase save error:', error)
          return NextResponse.json({ error: 'Failed to save configuration' }, { status: 500 })
        }

        return NextResponse.json({ success: true, config: data })
      } catch (supabaseError) {
        console.error('Supabase error:', supabaseError)
        return NextResponse.json({ error: 'Database error' }, { status: 500 })
      }
    }

    // Fallback if Supabase not configured
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 })
  } catch (error) {
    console.error('Save config error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

