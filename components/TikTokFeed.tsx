'use client'

import { useState, useEffect } from 'react'
import { FiX, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface TikTokFeedProps {
  /**
   * TikTok username (without @)
   * Example: "dncltechzone" for @dncltechzone
   */
  username: string
  
  /**
   * TikTok video IDs to display (if you want specific videos)
   * If not provided, will try to fetch from account
   */
  videoIds?: string[]
  
  /**
   * Display mode: 'popup' or 'inline'
   */
  mode?: 'popup' | 'inline'
  
  /**
   * Number of videos to show (default: 3)
   */
  maxVideos?: number
  
  /**
   * Show as pop-up (only for popup mode)
   */
  showAsPopup?: boolean
  
  /**
   * Pop-up delay in seconds (default: 5)
   */
  popupDelay?: number
  
  /**
   * Storage key for dismiss tracking
   */
  storageKey?: string
  
  /**
   * Callback when pop-up closes
   */
  onClose?: () => void
}

/**
 * TikTok Feed Component
 * 
 * Displays TikTok videos from a public account.
 * Can be shown as pop-up or inline section.
 * 
 * Note: TikTok doesn't have a public API for fetching account videos.
 * You'll need to manually add video IDs or use TikTok's embed iframe.
 * 
 * To get video IDs:
 * 1. Go to TikTok video
 * 2. Click "Share" > "Embed"
 * 3. Copy the video ID from the embed code
 * Or extract from URL: https://www.tiktok.com/@username/video/VIDEO_ID
 */
export default function TikTokFeed({
  username,
  videoIds = [],
  mode = 'inline',
  maxVideos = 3,
  showAsPopup = false,
  popupDelay = 5,
  storageKey = 'tiktok-feed-dismissed',
  onClose,
}: TikTokFeedProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClosing, setIsClosing] = useState(false)
  const [isVisible, setIsVisible] = useState(mode === 'inline' || showAsPopup === false)

  // Example video IDs - replace with your actual TikTok video IDs
  // You can get these from your TikTok video URLs
  const defaultVideoIds = videoIds.length > 0 
    ? videoIds 
    : [
        // Add your TikTok video IDs here
        // Example: "7234567890123456789"
        // Get from: https://www.tiktok.com/@username/video/VIDEO_ID
      ]

  // Show pop-up after delay
  useEffect(() => {
    if (mode === 'popup' && showAsPopup && typeof window !== 'undefined') {
      // Check if already dismissed
      if (localStorage.getItem(storageKey) === 'true') {
        return
      }

      const timer = setTimeout(() => {
        setIsVisible(true)
      }, popupDelay * 1000)

      return () => clearTimeout(timer)
    }
  }, [mode, showAsPopup, popupDelay, storageKey])

  const handleClose = () => {
    if (mode === 'popup') {
      setIsClosing(true)
      setTimeout(() => {
        setIsVisible(false)
        setIsClosing(false)
        localStorage.setItem(storageKey, 'true')
        onClose?.()
      }, 300)
    }
  }

  const nextVideo = () => {
    if (defaultVideoIds.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % defaultVideoIds.length)
    }
  }

  const prevVideo = () => {
    if (defaultVideoIds.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + defaultVideoIds.length) % defaultVideoIds.length)
    }
  }

  if (!isVisible || defaultVideoIds.length === 0) return null

  const currentVideoId = defaultVideoIds[currentIndex]
  const tiktokVideoUrl = `https://www.tiktok.com/@${username}/video/${currentVideoId}`

  const content = (
    <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden ${
      mode === 'popup' ? 'w-full max-w-sm' : 'w-full'
    }`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0050] to-[#00F2EA] flex items-center justify-center">
            <span className="text-white font-bold text-sm">TT</span>
          </div>
          <div>
            <h3 className="text-white font-bold">@{username}</h3>
            <p className="text-gray-400 text-xs">Follow us on TikTok</p>
          </div>
        </div>
        {mode === 'popup' && (
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <FiX size={18} className="text-white" />
          </button>
        )}
      </div>

      {/* TikTok Video Embed */}
      <div className="relative bg-black">
        <div className="w-full" style={{ paddingBottom: '177.78%' }}> {/* 9:16 aspect ratio */}
          <blockquote
            className="tiktok-embed"
            cite={tiktokVideoUrl}
            data-video-id={currentVideoId}
            style={{ 
              maxWidth: '100%',
              minWidth: '325px',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <section>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={tiktokVideoUrl}
                className="text-white"
              >
                View on TikTok
              </a>
            </section>
          </blockquote>
        </div>
        
        {/* Navigation Arrows (if multiple videos) */}
        {defaultVideoIds.length > 1 && (
          <>
            <button
              onClick={prevVideo}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors z-10"
              aria-label="Previous video"
            >
              <FiChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors z-10"
              aria-label="Next video"
            >
              <FiChevronRight size={20} className="text-white" />
            </button>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs text-gray-600">
            Video {currentIndex + 1} of {defaultVideoIds.length}
          </div>
          <a
            href={`https://www.tiktok.com/@${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-semibold"
          >
            <span>Follow on TikTok</span>
            <FiExternalLink size={14} />
          </a>
        </div>
        <p className="text-xs text-gray-500 text-center">
          Check out more of our content on TikTok!
        </p>
      </div>
    </div>
  )

  // Load TikTok embed script
  if (typeof window !== 'undefined' && !document.querySelector('script[src*="tiktok.com/embed"]')) {
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.head.appendChild(script)
  }

  if (mode === 'popup') {
    return (
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
            isClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleClose}
        />

        {/* Pop-up Content */}
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${
            isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {content}
          </div>
        </div>
      </>
    )
  }

  // Inline mode
  return (
    <div className="w-full max-w-md mx-auto">
      {content}
    </div>
  )
}

