// Conversation State Management System
// Tracks conversation stages and flow

import { getEmpatheticTransition, detectTransitionContext } from './empatheticTransitions'

export enum ConversationStage {
  GREETING = 'greeting',
  INQUIRY = 'inquiry',
  FOLLOW_UP = 'follow_up',
  CLOSING = 'closing',
  MENU = 'menu',
}

export enum ConversationAction {
  CONTINUE = 'continue',
  NEW_TOPIC = 'new_topic',
  MAIN_MENU = 'main_menu',
  CONTACT_HUMAN = 'contact_human',
  END = 'end',
}

export interface ConversationContext {
  stage: ConversationStage
  currentTopic?: string
  messageCount: number
  lastResponse?: string
  topicsDiscussed: string[]
  needsFollowUp: boolean
}

export class ConversationStateManager {
  private context: ConversationContext

  constructor() {
    this.context = {
      stage: ConversationStage.GREETING,
      messageCount: 0,
      topicsDiscussed: [],
      needsFollowUp: false,
    }
  }

  getContext(): ConversationContext {
    return this.context
  }

  updateContext(updates: Partial<ConversationContext>) {
    this.context = { ...this.context, ...updates }
  }

  // Detect if question is complete and answered
  isQuestionComplete(userMessage: string, botResponse: string): boolean {
    // Check if response is substantial (not just a redirect)
    const isSubstantial = botResponse.length > 100 && 
                         !botResponse.toLowerCase().includes('contact us directly')
    
    // Check if user seems satisfied (short acknowledgment)
    const isAcknowledgment = /^(ok|okay|thanks|thank you|got it|alright|sounds good|perfect|great)$/i.test(userMessage.trim())
    
    // Check if user is asking new question (indicates previous was answered)
    const isNewQuestion = this.detectNewQuestion(userMessage)
    
    return isSubstantial || isAcknowledgment || isNewQuestion
  }

  // Detect if user is starting a new topic
  detectNewQuestion(message: string): boolean {
    const lowerMessage = message.toLowerCase()
    const questionStarters = ['what', 'how', 'when', 'where', 'why', 'can', 'do', 'does', 'is', 'are', 'tell me', 'i need', 'i want']
    return questionStarters.some(starter => lowerMessage.startsWith(starter))
  }

  // Determine next stage based on context
  getNextStage(userMessage: string, botResponse: string): ConversationStage {
    const lowerMessage = userMessage.toLowerCase()

    // User wants main menu
    if (lowerMessage.includes('menu') || lowerMessage.includes('start over') || lowerMessage.includes('main menu')) {
      return ConversationStage.MENU
    }

    // User wants to contact human
    if (lowerMessage.includes('human') || lowerMessage.includes('speak to') || lowerMessage.includes('talk to')) {
      return ConversationStage.CLOSING
    }

    // Current stage logic
    switch (this.context.stage) {
      case ConversationStage.GREETING:
        return ConversationStage.INQUIRY

      case ConversationStage.INQUIRY:
        // Automatically move to FOLLOW_UP when question is answered
        // This happens immediately after providing the answer
        return ConversationStage.FOLLOW_UP

      case ConversationStage.FOLLOW_UP:
        if (lowerMessage.includes('menu') || lowerMessage.includes('main menu') || lowerMessage.includes('start over')) {
          return ConversationStage.MENU
        }
        if (this.detectNewQuestion(userMessage)) {
          // New question - will auto-move to FOLLOW_UP after answer
          return ConversationStage.INQUIRY
        }
        // Keep in FOLLOW_UP to continue showing options
        return ConversationStage.FOLLOW_UP

      case ConversationStage.MENU:
        return ConversationStage.INQUIRY

      case ConversationStage.CLOSING:
        return ConversationStage.GREETING // Reset for new conversation

      default:
        return ConversationStage.INQUIRY
    }
  }

  // Get appropriate response based on stage
  getStageResponse(
    stage: ConversationStage, 
    botResponse: string, 
    includeActions: boolean = true,
    userMessage?: string
  ): { message: string; showActions: boolean } {
    switch (stage) {
      case ConversationStage.FOLLOW_UP:
        return {
          message: includeActions 
            ? `${botResponse}\n\n${this.getFollowUpPrompt(userMessage, botResponse)}`
            : botResponse,
          showActions: includeActions
        }

      case ConversationStage.CLOSING:
        // Don't force close - keep conversation open with empathetic transition
        return {
          message: `${botResponse}\n\n${this.getFollowUpPrompt(userMessage, botResponse)}`,
          showActions: true
        }

      case ConversationStage.MENU:
        return {
          message: this.getMainMenu(),
          showActions: false // Menu is already a list of options
        }

      default:
        return {
          message: botResponse,
          showActions: false
        }
    }
  }

  private getFollowUpPrompt(userMessage?: string, botResponse?: string): string {
    const context = this.getContext()
    
    // Detect context for appropriate empathetic message
    const transitionContext = userMessage && botResponse
      ? detectTransitionContext(userMessage, botResponse, [])
      : 'answer'
    
    // Get empathetic transition based on context
    const empatheticMessage = getEmpatheticTransition(transitionContext, context.messageCount)
    
    return `\n\n${empatheticMessage} What would you like to do next?`
  }

  private getClosingMessage(): string {
    // Keep conversation open - don't force close
    return `\n\nThank you for contacting DNCL-Techzone! For detailed assistance, you can reach us via:\n\n📱 WhatsApp: +1 (682) 561-6897 (Preferred)\n📧 Email: info@dncltechzone.com\n\nIs there anything else I can help you with?`
  }

  private getMainMenu(): string {
    return `Here's how I can help you:\n\n📋 **Quick Options:**\n• Pricing & Quotes\n• Product Information\n• Quality & Certification\n• Enterprise Solutions\n• Shipping & Delivery\n• Contact Information\n\n💡 **Or ask me anything about:**\n• Our devices and inventory\n• Our process and quality standards\n• Enterprise partnerships\n• Retail platforms\n\nWhat would you like to know?`
  }

  // Track topic for context
  trackTopic(message: string) {
    const topics = ['pricing', 'product', 'quality', 'contact', 'enterprise', 'shipping', 'warranty', 'payment']
    const lowerMessage = message.toLowerCase()
    
    const foundTopic = topics.find(topic => lowerMessage.includes(topic))
    if (foundTopic && !this.context.topicsDiscussed.includes(foundTopic)) {
      this.context.topicsDiscussed.push(foundTopic)
      this.context.currentTopic = foundTopic
    }
  }

  // Reset conversation
  reset() {
    this.context = {
      stage: ConversationStage.GREETING,
      messageCount: 0,
      topicsDiscussed: [],
      needsFollowUp: false,
    }
  }
}

