'use client'

import { useState, useEffect } from 'react'
import { FiX, FiExternalLink } from 'react-icons/fi'

interface PopupAdProps {
  /**
   * Type of pop-up: 'tiktok', 'promo', 'ad', or 'custom'
   */
  type?: 'tiktok' | 'promo' | 'ad' | 'custom'
  
  /**
   * Title of the pop-up
   */
  title?: string
  
  /**
   * Main content/image URL or TikTok video embed code
   */
  content?: string
  
  /**
   * Call-to-action button text
   */
  ctaText?: string
  
  /**
   * CTA link URL
   */
  ctaLink?: string
  
  /**
   * TikTok video ID (for TikTok embeds)
   */
  tiktokVideoId?: string
  
  /**
   * Show after X seconds (default: 3)
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
   * CTA click callback
   */
  onCTAClick?: () => void
}

export default function PopupAd({
  type = 'promo',
  title,
  content,
  ctaText = 'Shop Now',
  ctaLink,
  tiktokVideoId,
  delaySeconds = 3,
  persistDismiss = true,
  storageKey = 'dncl-popup-dismissed',
  onClose,
  onCTAClick,
}: PopupAdProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Check if user already dismissed
    if (persistDismiss && localStorage.getItem(storageKey) === 'true') {
      return
    }

    // Show after delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delaySeconds * 1000)

    return () => clearTimeout(timer)
  }, [delaySeconds, persistDismiss, storageKey])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
      if (persistDismiss) {
        localStorage.setItem(storageKey, 'true')
      }
      onClose?.()
    }, 300)
  }

  const handleCTAClick = () => {
    onCTAClick?.()
    if (ctaLink) {
      window.open(ctaLink, '_blank', 'noopener,noreferrer')
    }
    handleClose()
  }

  if (!isVisible) return null

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
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            aria-label="Close pop-up"
          >
            <FiX size={18} className="text-gray-700" />
          </button>

          {/* TikTok Video Embed */}
          {type === 'tiktok' && tiktokVideoId && (
            <div className="w-full aspect-[9/16] bg-gray-900 relative">
              <blockquote
                className="tiktok-embed"
                cite={`https://www.tiktok.com/@username/video/${tiktokVideoId}`}
                data-video-id={tiktokVideoId}
                style={{ width: '100%', height: '100%' }}
              >
                <section>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.tiktok.com/@username/video/${tiktokVideoId}`}
                  >
                    @username
                  </a>
                </section>
              </blockquote>
              {/* Load TikTok embed script */}
              <script async src="https://www.tiktok.com/embed.js"></script>
            </div>
          )}

          {/* Image/Promo Content */}
          {(type === 'promo' || type === 'ad' || type === 'custom') && content && (
            <div className="w-full">
              {content.startsWith('http') ? (
                <img
                  src={content}
                  alt={title || 'Promotion'}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{content}</div>
                  {title && (
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Footer with CTA */}
          {(ctaText || ctaLink) && (
            <div className="p-6 bg-gradient-to-r from-primary-600 to-primary-700">
              {title && type !== 'custom' && (
                <h3 className="text-xl font-bold text-white mb-3 text-center">{title}</h3>
              )}
              <button
                onClick={handleCTAClick}
                className="w-full bg-white text-primary-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <span>{ctaText}</span>
                <FiExternalLink size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

