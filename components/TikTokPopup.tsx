'use client'

import { useState, useEffect, useRef } from 'react'
import { FiX, FiExternalLink } from 'react-icons/fi'

/**
 * Auto-play overlay component
 * Provides a clickable overlay to start video playback
 * Auto-hides after a few seconds or when clicked
 */
/**
 * Video play trigger - transparent overlay that allows clicks to pass through to video
 * Shows a subtle hint that video is clickable
 */
function VideoPlayTrigger({ videoId }: { videoId: string }) {
  const [showHint, setShowHint] = useState(true)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hide hint after 3 seconds
    const timer = setTimeout(() => {
      setShowHint(false)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [videoId])

  // Let clicks pass through to the video - don't block them
  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center transition-opacity duration-500"
      style={{ pointerEvents: 'none' }} // Allow clicks to pass through
    >
      {/* Subtle play button hint - fades out */}
      {showHint && (
        <div 
          className="bg-black/50 backdrop-blur-sm rounded-full p-3 animate-pulse pointer-events-none"
          style={{ opacity: showHint ? 1 : 0 }}
        >
          <svg
            className="w-10 h-10 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </div>
  )
}

function AutoPlayOverlay({ videoId }: { videoId: string }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const hasClickedRef = useRef(false)

  // Auto-attempt play after embed loads
  useEffect(() => {
    if (hasClickedRef.current) return

    const attemptAutoPlay = () => {
      // Wait for TikTok embed to fully render
      setTimeout(() => {
        const embedContainer = document.querySelector(`.tiktok-embed[data-video-id="${videoId}"]`) as HTMLElement
        const iframe = embedContainer?.querySelector('iframe') as HTMLIFrameElement

        if (iframe && !hasClickedRef.current) {
          const rect = iframe.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2

          // Create click events
          const events = ['mousedown', 'mouseup', 'click'].map(type =>
            new MouseEvent(type, {
              view: window,
              bubbles: true,
              cancelable: true,
              clientX: centerX,
              clientY: centerY,
              button: 0,
            })
          )

          // Dispatch events on iframe
          events.forEach(event => {
            iframe.dispatchEvent(event)
          })

          // Also try clicking directly
          iframe.click()

          hasClickedRef.current = true
          
          // Hide overlay after attempt
          setTimeout(() => {
            setIsVisible(false)
          }, 500)
        }
      }, 3000) // Wait 3s for embed to render
    }

    // Try multiple times
    let attempts = 0
    const maxAttempts = 3
    const interval = setInterval(() => {
      attempts++
      if (!hasClickedRef.current && attempts <= maxAttempts) {
        attemptAutoPlay()
      } else {
        clearInterval(interval)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [videoId])

  // Manual click handler
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    hasClickedRef.current = true
    setIsVisible(false)
    
    // User interaction - try to trigger play
    setTimeout(() => {
      const iframe = document.querySelector(`.tiktok-embed[data-video-id="${videoId}"] iframe`) as HTMLElement
      if (iframe) {
        const rect = iframe.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
          clientX: centerX,
          clientY: centerY,
          button: 0,
        })
        
        iframe.dispatchEvent(clickEvent)
        iframe.click()
      }
    }, 100)
  }

  // Auto-hide after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center group transition-opacity duration-500"
      onClick={handleClick}
    >
      {/* Play button hint */}
      <div className="w-16 h-16 rounded-full bg-black/50 group-hover:bg-black/70 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110">
        <svg
          className="w-8 h-8 text-white ml-1"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  )
}

interface TikTokPopupProps {
  /**
   * TikTok username (without @)
   */
  username: string
  
  /**
   * TikTok video ID to display
   * Get from video URL: https://www.tiktok.com/@username/video/VIDEO_ID
   */
  videoId: string
  
  /**
   * Title/heading for the pop-up
   */
  title?: string
  
  /**
   * Show after X seconds (default: 5)
   */
  delaySeconds?: number
  
  /**
   * Don't show again after dismiss (uses localStorage)
   */
  persistDismiss?: boolean
  
  /**
   * Storage key for dismiss tracking
   */
  storageKey?: string
  
  /**
   * Close callback
   */
  onClose?: () => void
  
  /**
   * Minimal mode - only show video, no header/footer
   */
  minimal?: boolean
  
  /**
   * Position: 'center' | 'left-corner' | 'right-corner'
   */
  position?: 'center' | 'left-corner' | 'right-corner'
  
  /**
   * Auto-play video (TikTok embeds auto-play by default)
   */
  autoPlay?: boolean
}

/**
 * Simple TikTok Video Pop-up
 * 
 * Shows a single TikTok video in a pop-up.
 * Perfect for showcasing your latest TikTok content to visitors.
 */
export default function TikTokPopup({
  username,
  videoId,
  title = 'Check Us Out on TikTok!',
  delaySeconds = 5,
  persistDismiss = true,
  storageKey = 'tiktok-popup-dismissed',
  onClose,
  minimal = false,
  position = 'center',
  autoPlay = false,
}: TikTokPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Check if user already dismissed
    if (persistDismiss && typeof window !== 'undefined') {
      if (localStorage.getItem(storageKey) === 'true') {
        return
      }
    }

    // Show after delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delaySeconds * 1000)

    return () => clearTimeout(timer)
  }, [delaySeconds, persistDismiss, storageKey])

  // Load TikTok embed script and process embeds (native TikTok embeds should autoplay muted)
  useEffect(() => {
    if (!isVisible || typeof window === 'undefined') return

    // Load embed.js script (native TikTok method)
    const existingScript = document.querySelector('script[src*="tiktok.com/embed"]')
    
    const processEmbeds = () => {
      setTimeout(() => {
        const embeds = document.querySelectorAll(`.tiktok-embed[data-video-id="${videoId}"]:not([data-embed-processed])`)
        if ((window as any).tiktokEmbed && embeds.length > 0) {
          try {
            (window as any).tiktokEmbed.lib.render(embeds)
            // Mark as processed
            embeds.forEach((embed: Element) => {
              embed.setAttribute('data-embed-processed', 'true')
            })
            
            // Verify and ensure iframe is muted for autoplay
            setTimeout(() => {
              const iframes = document.querySelectorAll(`.tiktok-embed[data-video-id="${videoId}"] iframe`)
              iframes.forEach((iframe: Element) => {
                const iframeEl = iframe as HTMLIFrameElement
                // TikTok's iframe should already be muted, but ensure it is
                if (iframeEl) {
                  iframeEl.setAttribute('muted', 'true')
                  iframeEl.setAttribute('playsinline', 'true')
                  
                  // Try to access iframe content and ensure muted (may be blocked by CORS)
                  try {
                    const iframeDoc = iframeEl.contentDocument || iframeEl.contentWindow?.document
                    if (iframeDoc) {
                      const video = iframeDoc.querySelector('video') as HTMLVideoElement
                      if (video) {
                        video.muted = true
                        video.playsInline = true
                      }
                    }
                  } catch (e) {
                    // CORS blocked - that's expected, TikTok handles it
                  }
                }
              })
            }, 500)
          } catch (error) {
            console.warn('TikTok embed render error:', error)
          }
        }
      }, 300)
    }
    
    if (!existingScript) {
      // Load script for the first time
      const script = document.createElement('script')
      script.src = 'https://www.tiktok.com/embed.js'
      script.async = true
      script.onload = () => {
        processEmbeds()
      }
      document.head.appendChild(script)
    } else {
      // Script already loaded - process embeds
      processEmbeds()
    }
  }, [isVisible, videoId])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
      if (persistDismiss && typeof window !== 'undefined') {
        localStorage.setItem(storageKey, 'true')
      }
      onClose?.()
    }, 300)
  }

  if (!isVisible) return null

  const tiktokVideoUrl = `https://www.tiktok.com/@${username}/video/${videoId}`

  // Position classes
  const positionClasses = {
    'center': 'inset-0 flex items-center justify-center',
    'left-corner': 'left-4 bottom-4',
    'right-corner': 'right-4 bottom-4',
  }

  // Size for minimal mode (smaller, corner-friendly)
  const containerClasses = minimal
    ? `relative bg-white rounded-xl shadow-2xl overflow-hidden ${position === 'center' ? 'max-w-sm w-full' : 'w-80'}`
    : 'relative bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden'

  return (
    <>
      {/* Backdrop - only show in center mode */}
      {!minimal && position === 'center' && (
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
            isClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleClose}
        />
      )}

      {/* Pop-up Content */}
      <div
        className={`fixed z-[9999] p-4 transition-all duration-300 ${
          isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        } ${
          minimal
            ? positionClasses[position]
            : positionClasses['center']
        }`}
      >
        <div
          className={containerClasses}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
            aria-label="Close pop-up"
          >
            <FiX size={16} className="text-white" />
          </button>

          {/* Header - only if not minimal */}
          {!minimal && (
            <div className="bg-gradient-to-r from-black via-gray-900 to-black p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0050] to-[#00F2EA] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TT</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{title}</h3>
                  <p className="text-gray-400 text-xs">@{username}</p>
                </div>
              </div>
            </div>
          )}

          {/* TikTok Video Embed */}
          <div className="relative bg-black">
            <div className="w-full" style={{ paddingBottom: '177.78%' }}> {/* 9:16 aspect ratio */}
              {/* Official TikTok native embed - should autoplay muted by default */}
              <blockquote
                className="tiktok-embed"
                cite={tiktokVideoUrl}
                data-video-id={videoId}
                // TikTok's embed.js automatically handles muted autoplay
                // The iframe generated by TikTok will have muted attribute
                style={{ 
                  maxWidth: '325px',
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
                  >
                    {`View on TikTok - @${username}`}
                  </a>
                </section>
              </blockquote>
            </div>
            {/* Clickable overlay - makes entire video area clickable to play */}
            <VideoPlayTrigger videoId={videoId} />
          </div>

          {/* Footer - only if not minimal */}
          {!minimal && (
            <div className="p-4 bg-gray-50">
              <a
                href={`https://www.tiktok.com/@${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                <span>Follow @{username} on TikTok</span>
                <FiExternalLink size={16} />
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

