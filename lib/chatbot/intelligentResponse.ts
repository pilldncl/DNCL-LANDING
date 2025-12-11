// Intelligent rule-based response system
// No AI costs - completely free, runs on your server

import { ConversationStateManager, ConversationStage } from './conversationState'
import { getResponseActions, ResponseAction } from './responseActions'

interface ResponseRule {
  keywords: string[]
  context?: string[]
  response: string
  priority: number
  followUp?: {
    question: string
    responses: Record<string, string>
  }
}

const responseRules: ResponseRule[] = [
  {
    keywords: ['price', 'pricing', 'cost', 'how much', 'quote', 'quotation'],
    response: 'Our pricing varies based on volume, device type, and specific requirements. For enterprise quotes, I recommend contacting our sales team via WhatsApp at +1 (682) 561-6897 or emailing info@dncltechzone.com. We offer competitive volume pricing for bulk orders.',
    priority: 1,
    followUp: {
      question: 'Are you looking for wholesale pricing or retail?',
      responses: {
        wholesale: 'For wholesale orders, we offer tiered pricing based on volume. Contact us for a custom quote based on your quantity and device requirements.',
        retail: 'You can browse our retail stores on Amazon, Walmart, and eBay for individual device pricing. Visit our Shop page for direct links.',
      }
    }
  },
  {
    keywords: ['device', 'product', 'what do you sell', 'inventory', 'catalog', 'items'],
    response: 'We supply certified, professionally graded devices including smartphones, laptops, tablets, and smartwatches. All devices are enterprise-ready for deployment, resale, or internal use. You can browse our retail platforms (Amazon, Walmart, eBay) or contact us for wholesale inquiries.',
    priority: 1,
  },
  {
    keywords: ['quality', 'grade', 'certified', 'inspection', 'testing', 'qa'],
    response: 'We maintain a 99.3% quality pass rate. All devices go through rigorous inspection, professional grading (A-B grades), data sanitization, and quality assurance. We serve 1,200+ enterprise clients with a 4.6/5.0 satisfaction rating.',
    priority: 1,
  },
  {
    keywords: ['contact', 'reach', 'phone', 'email', 'whatsapp', 'support'],
    response: 'You can reach us via WhatsApp at +1 (682) 561-6897 (preferred method) or email at info@dncltechzone.com. For enterprise inquiries, we also have a contact form on our website. We typically respond within 24 hours.',
    priority: 1,
  },
  {
    keywords: ['enterprise', 'business', 'wholesale', 'bulk', 'volume', 'b2b'],
    response: 'We specialize in enterprise technology solutions with volume pricing, SLA guarantees, contract/PO support, and dedicated account management. We serve Fortune 500 companies to SMBs across healthcare, education, retail, and more. Would you like to request an enterprise quote?',
    priority: 1,
  },
  {
    keywords: ['shipping', 'delivery', 'time', 'when', 'how long', 'timeline'],
    response: 'Delivery times vary based on order size and location. For enterprise orders, we provide detailed timelines during the quote process. We have a proven track record of on-time delivery for large-scale deployments.',
    priority: 2,
  },
  {
    keywords: ['warranty', 'guarantee', 'return', 'refund', 'policy'],
    response: 'We offer comprehensive warranty coverage and return policies. All devices come with quality guarantees. For specific warranty terms based on device type and order size, please contact our team.',
    priority: 2,
  },
  {
    keywords: ['minimum order', 'moq', 'minimum quantity', 'small order'],
    response: 'Minimum order quantities vary by device type and order type. For wholesale orders, we typically work with bulk quantities. For smaller orders, you can purchase through our retail platforms. Contact us to discuss your specific needs.',
    priority: 2,
  },
  {
    keywords: ['payment', 'pay', 'terms', 'po', 'purchase order', 'invoice'],
    response: 'We accept purchase orders and offer flexible payment terms for enterprise clients. We support various payment methods including wire transfer, ACH, and credit cards. Contact us to discuss payment terms for your order.',
    priority: 2,
  },
  {
    keywords: ['specification', 'spec', 'model', 'brand', 'apple', 'samsung', 'dell', 'hp'],
    response: 'We work with leading device manufacturers. Available models and specifications vary by inventory. For specific device models, brands, or technical specifications, please contact our team with your requirements.',
    priority: 2,
  },
  {
    keywords: ['process', 'how it works', 'workflow', 'steps'],
    response: 'Our process: 1) Sourced from vetted suppliers, 2) Individually inspected and tested, 3) Professionally graded (A-B), 4) Data sanitized and cleaned, 5) Quality assurance passed. Every device meets enterprise standards before delivery.',
    priority: 2,
  },
  {
    keywords: ['industry', 'healthcare', 'education', 'retail', 'government'],
    response: 'We serve multiple industries including healthcare, education, retail, government, hospitality, and more. Our devices are certified for various compliance requirements. Tell me your industry and I can provide more specific information.',
    priority: 2,
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon'],
    response: 'Hello! Welcome to DNCL-Techzone. I\'m here to help you with information about our enterprise technology solutions, products, pricing, and services. What would you like to know?',
    priority: 1,
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response: 'You\'re welcome! Is there anything else I can help you with? If you need detailed assistance, feel free to contact our team via WhatsApp at +1 (682) 561-6897 or email info@dncltechzone.com.',
    priority: 3,
  },
  {
    keywords: ['location', 'where', 'address', 'office', 'headquarters'],
    response: 'We operate globally with clients worldwide. For specific location information or to discuss local delivery options, please contact us via WhatsApp at +1 (682) 561-6897 or email info@dncltechzone.com.',
    priority: 2,
  },
  {
    keywords: ['certification', 'compliance', 'hipaa', 'gdpr', 'iso', 'security'],
    response: 'We maintain quality-focused operations with secure data handling and industry best practices. All devices undergo professional grading and inspection. For specific compliance requirements (HIPAA, GDPR, etc.), please contact our team to discuss your needs.',
    priority: 2,
  },
  {
    keywords: ['retail', 'amazon', 'walmart', 'ebay', 'shop', 'marketplace'],
    response: 'Yes! We sell on major retail platforms including Amazon, Walmart, and eBay. You can browse our certified devices on these platforms. Visit our Shop page for direct links to our retail stores.',
    priority: 1,
  },
  {
    keywords: ['partnership', 'partner', 'reseller', 'distributor'],
    response: 'We work with various partners including resellers, distributors, and enterprise clients. If you\'re interested in partnership opportunities, please contact our team via WhatsApp at +1 (682) 561-6897 or email info@dncltechzone.com to discuss.',
    priority: 2,
  },
  {
    keywords: ['hours', 'business hours', 'when', 'available', 'open'],
    response: 'Our team is available to assist you. We typically respond to inquiries within 24 hours. For immediate assistance, contact us via WhatsApp at +1 (682) 561-6897 (preferred method).',
    priority: 2,
  },
]

export function getIntelligentResponse(
  message: string, 
  conversationHistory: string[] = [],
  stateManager?: ConversationStateManager
): { response: string; stage: ConversationStage; shouldUpdateStage: boolean; actions?: ResponseAction[] } {
  const lowerMessage = message.toLowerCase()
  
  // Handle special commands
  if (lowerMessage.includes('menu') || lowerMessage.includes('main menu') || lowerMessage.includes('start over')) {
    if (stateManager) {
      stateManager.updateContext({ stage: ConversationStage.MENU })
      const { message, showActions } = stateManager.getStageResponse(ConversationStage.MENU, '', false)
      return {
        response: message,
        stage: ConversationStage.MENU,
        shouldUpdateStage: false,
        actions: []
      }
    }
  }

  // Check for exact matches first (higher priority)
  let baseResponse = ''
  for (const rule of responseRules.sort((a, b) => a.priority - b.priority)) {
    const hasKeyword = rule.keywords.some(keyword => lowerMessage.includes(keyword))
    const hasContext = !rule.context || rule.context.some(ctx => lowerMessage.includes(ctx))
    
    if (hasKeyword && hasContext) {
      // Check if there's a follow-up question context
      if (rule.followUp && conversationHistory.length > 0) {
        const lastResponse = conversationHistory[conversationHistory.length - 1]
        if (lastResponse.includes(rule.followUp.question)) {
          // Check for follow-up responses
          for (const [key, response] of Object.entries(rule.followUp.responses)) {
            if (lowerMessage.includes(key)) {
              baseResponse = response
              break
            }
          }
        }
      }
      
      if (!baseResponse) {
        baseResponse = rule.response
      }
      break
    }
  }
  
  // Default response if no match
  if (!baseResponse) {
    baseResponse = `Thank you for your question! I can help you with:
  
• Pricing and quotes
• Product information
• Quality and certification
• Enterprise solutions
• Shipping and delivery
• Payment terms

For detailed assistance, I recommend contacting our team directly via WhatsApp at +1 (682) 561-6897 or emailing info@dncltechzone.com. They can provide specific answers to your inquiry.`
  }

  // Apply stage-based response formatting
  if (stateManager) {
    const context = stateManager.getContext()
    
    // Track topic before determining next stage
    stateManager.trackTopic(message)
    const updatedContext = stateManager.getContext()
    
    // Determine next stage based on current stage
    let nextStage: ConversationStage
    let shouldShowTransition = false
    
    if (context.stage === ConversationStage.GREETING) {
      // First question - answer it, then immediately show transition to FOLLOW_UP
      nextStage = ConversationStage.FOLLOW_UP
      shouldShowTransition = true
    } else if (context.stage === ConversationStage.INQUIRY) {
      // Question was just answered - immediately show transition to FOLLOW_UP
      nextStage = ConversationStage.FOLLOW_UP
      shouldShowTransition = true
    } else if (context.stage === ConversationStage.FOLLOW_UP) {
      // User responded to follow-up - check what they want
      const lowerMessage = message.toLowerCase()
      if (lowerMessage.includes('menu') || lowerMessage.includes('main menu') || lowerMessage.includes('start over')) {
        nextStage = ConversationStage.MENU
        shouldShowTransition = false
      } else if (stateManager.detectNewQuestion(message)) {
        // New question asked - answer it, then show transition
        nextStage = ConversationStage.FOLLOW_UP
        shouldShowTransition = true
      } else {
        // Continue in FOLLOW_UP (user might be acknowledging)
        nextStage = ConversationStage.FOLLOW_UP
        shouldShowTransition = false
      }
    } else if (context.stage === ConversationStage.MENU) {
      // User selected from menu - answer question, then show transition
      nextStage = ConversationStage.FOLLOW_UP
      shouldShowTransition = true
    } else {
      // Default: show transition to guide user
      nextStage = ConversationStage.FOLLOW_UP
      shouldShowTransition = true
    }
    
    // Get response actions for FOLLOW_UP stage
    const actions = (nextStage === ConversationStage.FOLLOW_UP && shouldShowTransition)
      ? getResponseActions(updatedContext.currentTopic, updatedContext.topicsDiscussed)
      : []
    
    // Format response with empathetic transition if needed
    const { message: formattedResponse, showActions } = stateManager.getStageResponse(
      nextStage, 
      baseResponse, 
      shouldShowTransition, 
      message
    )
    
    return {
      response: formattedResponse,
      stage: nextStage,
      shouldUpdateStage: true,
      actions: showActions ? actions : []
    }
  }

  return {
    response: baseResponse,
    stage: ConversationStage.INQUIRY,
    shouldUpdateStage: false,
    actions: []
  }
}

// Lead qualification logic
export function qualifyLead(message: string): {
  isEnterprise: boolean
  intent: string
  confidence: number
} {
  const lowerMessage = message.toLowerCase()
  
  const enterpriseKeywords = ['enterprise', 'business', 'wholesale', 'bulk', 'volume', 'company', 'organization', 'b2b']
  const retailKeywords = ['buy', 'purchase', 'shop', 'retail', 'individual', 'personal']
  
  const enterpriseScore = enterpriseKeywords.filter(kw => lowerMessage.includes(kw)).length
  const retailScore = retailKeywords.filter(kw => lowerMessage.includes(kw)).length
  
  return {
    isEnterprise: enterpriseScore > retailScore,
    intent: enterpriseScore > retailScore ? 'enterprise' : 'retail',
    confidence: Math.min(1, (enterpriseScore + retailScore) / 5)
  }
}

