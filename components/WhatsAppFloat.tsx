'use client'

import { FiMessageCircle, FiX } from 'react-icons/fi'
import { useState } from 'react'

export default function WhatsAppFloat() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Expanded Info Card */}
        {isExpanded && (
          <div className="mb-4 mr-0 bg-white rounded-2xl shadow-2xl border-2 border-[#25D366] p-5 max-w-xs animate-fade-in">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                  <FiMessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Chat with Us</h4>
                  <p className="text-xs text-gray-600">We respond quickly!</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition"
                aria-label="Close"
              >
                <FiX size={20} />
              </button>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              All phone communications go through WhatsApp. Click below to start a conversation.
            </p>
            <a
              href="https://wa.me/16825616897"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2.5 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BA5A] transition-colors"
            >
              Open WhatsApp
            </a>
          </div>
        )}

        {/* Main Floating Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="WhatsApp Contact"
        >
          <FiMessageCircle size={28} className="transition-transform group-hover:scale-110" />
          
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
            !
          </span>
        </button>
      </div>
    </>
  )
}

