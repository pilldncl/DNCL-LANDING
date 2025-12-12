'use client'

import { useState, useRef, useEffect } from 'react'
import { FiMessageCircle, FiX, FiSend, FiMinimize2 } from 'react-icons/fi'
import QuickActions from './QuickActions'
import ResponseActions from './ResponseActions'
import { ResponseAction } from '@/lib/chatbot/responseActions'

interface Message {
  role: 'user' | 'assistant'
  content: string
  actions?: ResponseAction[]
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I&apos;m here to help you learn about DNCL-Techzone&apos;s enterprise technology solutions. How can I assist you today?'
    }
  ])
  const [showQuickActions, setShowQuickActions] = useState(true)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }],
          sessionId: sessionId,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
      // Store session ID for conversation continuity
      if (data.sessionId && !sessionId) {
        setSessionId(data.sessionId)
      }
      
      // Add response with actions if available
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.message,
        actions: data.actions || []
      }])
      setShowQuickActions(false) // Hide quick actions after first interaction
    } catch (error) {
      // Fallback if API fails
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I&apos;m having trouble processing your request. Please contact us directly via WhatsApp at +1 (682) 561-6897 or email info@dncltechzone.com for immediate assistance.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setMessages([{
      role: 'assistant',
      content: 'Hello! I&apos;m here to help you learn about DNCL-Techzone&apos;s enterprise technology solutions. How can I assist you today?'
    }])
    setSessionId(null)
    setShowQuickActions(true)
  }

  const handleQuickAction = (message: string) => {
    setInput(message)
    setShowQuickActions(false)
    // Auto-send the quick action message
    setTimeout(() => {
      const form = document.querySelector('form')
      if (form) {
        const event = new Event('submit', { bubbles: true, cancelable: true })
        form.dispatchEvent(event)
      }
    }, 100)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-primary-600 text-white shadow-2xl hover:bg-primary-700 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Open chatbot"
      >
        <FiMessageCircle size={24} className="group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        </span>
      </button>
    )
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border-2 border-gray-200 flex flex-col transition-all duration-300 ${
      isMinimized ? 'h-16' : 'h-[600px]'
    }`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <FiMessageCircle className="text-white" size={20} />
          </div>
          <div>
            <h3 className="text-white font-bold">DNCL Assistant</h3>
            <p className="text-white/80 text-xs">We&apos;re here to help</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-2 py-1 text-xs text-white/80 hover:text-white hover:bg-white/20 rounded transition-colors"
            title="Start over"
          >
            Reset
          </button>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label={isMinimized ? 'Expand' : 'Minimize'}
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            <FiMinimize2 className="text-white" size={18} />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close"
          >
            <FiX className="text-white" size={18} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div key={index} className="space-y-2">
                <div
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-900 border border-gray-200'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
                {/* Show action buttons for assistant messages */}
                {message.role === 'assistant' && message.actions && message.actions.length > 0 && (
                  <div className="flex justify-start">
                    <ResponseActions 
                      actions={message.actions} 
                      onSelect={(msg) => {
                        setInput(msg)
                        // Auto-send after a brief delay
                        setTimeout(() => {
                          const form = document.querySelector('form')
                          if (form) {
                            const event = new Event('submit', { bubbles: true, cancelable: true })
                            form.dispatchEvent(event)
                          }
                        }, 100)
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            {showQuickActions && messages.length === 1 && (
              <QuickActions onSelect={handleQuickAction} />
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <FiSend size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              For complex inquiries, contact us via <a href="https://wa.me/16825616897" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">WhatsApp</a>
            </p>
          </form>
        </>
      )}
    </div>
  )
}

