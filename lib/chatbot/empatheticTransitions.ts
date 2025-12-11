// Empathetic transition messages for natural conversation flow
// Makes chatbot feel more human and considerate

export interface EmpatheticTransition {
  message: string
  context: 'answer' | 'helpful' | 'clarification' | 'general'
}

const empatheticTransitions: EmpatheticTransition[] = [
  // After providing an answer
  { message: "I hope that helps!", context: 'answer' },
  { message: "Does that answer your question?", context: 'answer' },
  { message: "I hope that information is useful!", context: 'answer' },
  { message: "Let me know if that helps!", context: 'answer' },
  { message: "I hope that clarifies things!", context: 'answer' },
  { message: "Does that make sense?", context: 'answer' },
  { message: "I hope that's what you were looking for!", context: 'answer' },
  
  // When being helpful
  { message: "I'm glad I could help!", context: 'helpful' },
  { message: "Happy to help!", context: 'helpful' },
  { message: "I'm here to help with anything else!", context: 'helpful' },
  
  // When providing clarification
  { message: "I hope that clears things up!", context: 'clarification' },
  { message: "Does that help clarify?", context: 'clarification' },
  { message: "I hope that explains it better!", context: 'clarification' },
  
  // General transitions
  { message: "Great!", context: 'general' },
  { message: "Perfect!", context: 'general' },
  { message: "Sounds good!", context: 'general' },
]

export function getEmpatheticTransition(
  context: 'answer' | 'helpful' | 'clarification' | 'general' = 'answer',
  messageCount: number = 0
): string {
  // Filter by context
  const relevant = empatheticTransitions.filter(t => t.context === context || t.context === 'general')
  
  // Use message count to vary responses (creates natural variety)
  const index = messageCount % relevant.length
  return relevant[index].message
}

// Detect context from conversation
export function detectTransitionContext(
  userMessage: string,
  botResponse: string,
  conversationHistory: string[]
): 'answer' | 'helpful' | 'clarification' | 'general' {
  const lowerUser = userMessage.toLowerCase()
  const lowerBot = botResponse.toLowerCase()
  
  // User asked for clarification
  if (lowerUser.includes('clarify') || lowerUser.includes('explain') || lowerUser.includes('what do you mean')) {
    return 'clarification'
  }
  
  // User thanked or acknowledged
  if (lowerUser.includes('thank') || lowerUser.includes('thanks') || lowerUser.includes('helpful')) {
    return 'helpful'
  }
  
  // Bot provided clarification
  if (lowerBot.includes('clarify') || lowerBot.includes('explain') || lowerBot.includes('means')) {
    return 'clarification'
  }
  
  // Default: answer provided
  return 'answer'
}

