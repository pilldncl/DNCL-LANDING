'use client'

import { useState, useEffect, useRef } from 'react'
import TikTokPopup from './TikTokPopup'
import { getTikTokConfig, getDefaultConfig } from '@/lib/admin/config'

/**
 * Auto-loading TikTok Pop-up with Infinite Video Looping
 * 
 * Automatically loads configuration from admin panel and displays TikTok pop-up.
 * Auto-plays and auto-transitions to next video in infinite loop.
 * Minimal corner design - pure video ads popup.
 * 
 * Video duration: ~20 seconds (typical TikTok video length)
 */
const VIDEO_DURATION_SECONDS = 20 // Auto-transition after 20 seconds

export default function TikTokPopupAuto() {
  const [config, setConfig] = useState(getDefaultConfig())
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const autoTransitionTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    loadConfig()
  }, [])

  const loadConfig = async () => {
    try {
      const adminConfig = await getTikTokConfig()
      if (adminConfig) {
        setConfig(adminConfig)
      }
    } catch (error) {
      console.error('Failed to load TikTok config:', error)
    } finally {
      setIsLoaded(true)
    }
  }

  // Show first popup after initial delay
  useEffect(() => {
    if (!isLoaded || !config.enabled || !config.username || !config.videoIds.length) {
      return
    }

    // Check if user dismissed all videos
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('tiktok-popup-admin-dismissed-all') === 'true') {
        return
      }
    }

    // Show first video after delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, config.delaySeconds * 1000)

    return () => clearTimeout(timer)
  }, [isLoaded, config.enabled, config.username, config.videoIds.length, config.delaySeconds])

  // Auto-transition to next video after duration
  useEffect(() => {
    if (!isVisible || !config.videoIds.length) {
      return
    }

    // Clear any existing timer
    if (autoTransitionTimerRef.current) {
      clearTimeout(autoTransitionTimerRef.current)
    }

    // Set timer to auto-transition to next video
    autoTransitionTimerRef.current = setTimeout(() => {
      transitionToNextVideo()
    }, VIDEO_DURATION_SECONDS * 1000)

    return () => {
      if (autoTransitionTimerRef.current) {
        clearTimeout(autoTransitionTimerRef.current)
      }
    }
  }, [isVisible, currentVideoIndex, config.videoIds.length])

  // Transition to next video (infinite loop)
  const transitionToNextVideo = () => {
    // Move to next video (loop back to first if at end)
    setCurrentVideoIndex((prev) => (prev + 1) % config.videoIds.length)
    // Video will automatically show due to isVisible being true
  }

  // Handle manual close (optional - user can still close)
  const handleVideoClose = () => {
    setIsVisible(false)
    if (autoTransitionTimerRef.current) {
      clearTimeout(autoTransitionTimerRef.current)
    }
    
    // After manual close, show next video after a brief delay
    setTimeout(() => {
      transitionToNextVideo()
      setIsVisible(true)
    }, 2000) // 2 second gap after manual close
  }

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (autoTransitionTimerRef.current) {
        clearTimeout(autoTransitionTimerRef.current)
      }
    }
  }, [])

  // Don't render if config not loaded or disabled
  if (!isLoaded || !config.enabled || !config.username || !config.videoIds.length || !isVisible) {
    return null
  }

  const currentVideoId = config.videoIds[currentVideoIndex]

  if (!currentVideoId) {
    return null
  }

  return (
    <TikTokPopup
      key={`tiktok-${currentVideoId}-${currentVideoIndex}`} // Force re-render on video change
      username={config.username}
      videoId={currentVideoId}
      title={config.title}
      delaySeconds={0} // Already delayed, show immediately
      persistDismiss={false} // Don't persist dismiss, we're looping
      storageKey="tiktok-popup-admin"
      onClose={handleVideoClose}
      minimal={true}
      position="left-corner"
      autoPlay={true}
    />
  )
}

