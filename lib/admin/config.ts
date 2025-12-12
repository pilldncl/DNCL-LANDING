/**
 * TikTok Configuration Manager
 * 
 * Manages TikTok pop-up configuration from admin panel
 * Uses Supabase database (landing_tiktok_config table)
 */

import { getSupabaseClient } from '@/lib/supabase/client'

interface TikTokConfig {
  enabled: boolean
  username: string
  videoIds: string[]
  delaySeconds: number
  title: string
}

const DEFAULT_CONFIG_ID = '00000000-0000-0000-0000-000000000001'

export async function getTikTokConfig(): Promise<TikTokConfig | null> {
  try {
    // Try Supabase first (server-side or client-side)
    const supabase = getSupabaseClient()
    if (supabase) {
      const { data, error } = await supabase
        .from('landing_tiktok_config')
        .select('*')
        .eq('id', DEFAULT_CONFIG_ID)
        .single()

      if (!error && data) {
        return {
          enabled: data.enabled || false,
          username: data.username || '',
          videoIds: data.video_ids || [],
          delaySeconds: data.delay_seconds || 5,
          title: data.title || 'Check Us Out on TikTok!',
        }
      }
    }

    // Fallback to API
    if (typeof window !== 'undefined') {
      const response = await fetch('/api/admin/tiktok-config', {
        cache: 'no-store',
      })

      if (response.ok) {
        const config = await response.json()
        return config
      }
    }
  } catch (error) {
    console.error('Failed to load TikTok config:', error)
  }

  return null
}

export function getDefaultConfig(): TikTokConfig {
  return {
    enabled: false,
    username: '',
    videoIds: [],
    delaySeconds: 5,
    title: 'Check Us Out on TikTok!',
  }
}

