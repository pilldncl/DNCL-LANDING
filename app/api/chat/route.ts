import { NextRequest, NextResponse } from 'next/server'
import { getIntelligentResponse, qualifyLead } from '@/lib/chatbot/intelligentResponse'
import { ConversationStateManager, ConversationStage } from '@/lib/chatbot/conversationState'

// Intelligent rule-based chatbot - NO AI COSTS
// Runs completely free on your server with zero per-message fees
// Includes conversation state management and stage tracking
// Optimized caching for performance

// In-memory state storage with TTL (Time To Live) for performance
// In production, consider Redis with expiration
interface CachedState {
  manager: ConversationStateManager
  lastAccessed: number
  messageCount: number
}

const conversationStates = new Map<string, CachedState>()
const CACHE_TTL = 30 * 60 * 1000 // 30 minutes
const MAX_CACHE_SIZE = 1000 // Limit cache size

// Clean up old sessions on-demand (serverless-friendly)
function cleanupOldSessions() {
  const now = Date.now()
  for (const [sessionId, cached] of conversationStates.entries()) {
    if (now - cached.lastAccessed > CACHE_TTL) {
      conversationStates.delete(sessionId)
    }
  }
  // If cache is too large, remove oldest entries
  if (conversationStates.size > MAX_CACHE_SIZE) {
    const entries = Array.from(conversationStates.entries())
      .sort((a, b) => a[1].lastAccessed - b[1].lastAccessed)
    entries.slice(0, conversationStates.size - MAX_CACHE_SIZE)
      .forEach(([sessionId]) => conversationStates.delete(sessionId))
  }
}

function getStateManager(sessionId: string): { manager: ConversationStateManager; cached: CachedState } {
  // Clean up old sessions before getting/creating new ones
  cleanupOldSessions()
  if (!conversationStates.has(sessionId)) {
    conversationStates.set(sessionId, {
      manager: new ConversationStateManager(),
      lastAccessed: Date.now(),
      messageCount: 0
    })
  }
  const cached = conversationStates.get(sessionId)!
  cached.lastAccessed = Date.now() // Update access time
  cached.messageCount++
  return { manager: cached.manager, cached }
}

export async function POST(request: NextRequest) {
  try {
    const { messages, sessionId } = await request.json()

    // Generate or use provided session ID
    const chatSessionId = sessionId || `session_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`
    const { manager: stateManager, cached } = getStateManager(chatSessionId)

    if (!messages || messages.length === 0) {
      stateManager.reset()
      return NextResponse.json({
        message: 'Hello! I\'m here to help you learn about DNCL-Techzone\'s enterprise technology solutions. How can I assist you today?',
        sessionId: chatSessionId,
        stage: ConversationStage.GREETING
      })
    }

    // Get the last user message
    const lastMessage = messages[messages.length - 1]
    const userMessage = lastMessage.content || lastMessage.message || ''

    // Get conversation history for context
    const conversationHistory = messages
      .filter((msg: any) => msg.role === 'assistant')
      .map((msg: any) => msg.content || msg.message)

    // Get intelligent response with state management
    const { response, stage, shouldUpdateStage, actions } = getIntelligentResponse(
      userMessage, 
      conversationHistory,
      stateManager
    )

    // Update state if needed
    if (shouldUpdateStage) {
      stateManager.updateContext({ 
        stage,
        messageCount: cached.messageCount,
        lastResponse: response
      })
    }

    // Optional: Qualify lead for analytics
    const leadInfo = qualifyLead(userMessage)
    
    // Log for analytics (optional - you can remove this)
    if (process.env.NODE_ENV === 'development') {
      console.log('Lead qualification:', leadInfo)
      console.log('Conversation stage:', stage)
      console.log('Cache size:', conversationStates.size)
    }

    return NextResponse.json({
      message: response,
      sessionId: chatSessionId,
      stage,
      actions: actions || [], // Quick action buttons
      leadInfo, // Optional: for analytics
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { 
        message: 'I apologize, but I encountered an error. Please contact us directly via WhatsApp at +1 (682) 561-6897 or email info@dncltechzone.com for immediate assistance.',
        error: 'Failed to process message' 
      },
      { status: 500 }
    )
  }
}

