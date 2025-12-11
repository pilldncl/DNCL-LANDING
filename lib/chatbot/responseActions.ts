// Quick action suggestions based on conversation context
// Provides actionable next steps for users

export interface ResponseAction {
  label: string
  message: string
  type: 'question' | 'navigation' | 'contact'
}

export function getResponseActions(
  currentTopic: string | undefined,
  topicsDiscussed: string[]
): ResponseAction[] {
  const allTopics = ['pricing', 'product', 'quality', 'contact', 'enterprise', 'shipping', 'warranty', 'payment']
  const availableTopics = allTopics.filter(topic => !topicsDiscussed.includes(topic))

  const actions: ResponseAction[] = []

  // Always show menu option
  actions.push({
    label: '📋 Menu',
    message: 'menu',
    type: 'navigation'
  })

  // Show related topics based on current topic
  if (currentTopic) {
    const relatedTopics: Record<string, string[]> = {
      pricing: ['product', 'enterprise', 'payment'],
      product: ['pricing', 'quality', 'shipping'],
      quality: ['product', 'warranty', 'enterprise'],
      enterprise: ['pricing', 'contact', 'payment'],
      shipping: ['product', 'pricing', 'warranty'],
    }

    const related = relatedTopics[currentTopic] || []
    related.forEach(topic => {
      if (availableTopics.includes(topic)) {
        actions.push({
          label: getTopicLabel(topic),
          message: getTopicQuestion(topic),
          type: 'question'
        })
      }
    })
  }

  // Add 2-3 other available topics
  availableTopics.slice(0, 3).forEach(topic => {
    if (!actions.find(a => a.message.includes(topic))) {
      actions.push({
        label: getTopicLabel(topic),
        message: getTopicQuestion(topic),
        type: 'question'
      })
    }
  })

  // Always show contact option
  actions.push({
    label: '💬 Contact Team',
    message: 'I want to speak with your team',
    type: 'contact'
  })

  // Limit to 4-5 actions max
  return actions.slice(0, 5)
}

function getTopicLabel(topic: string): string {
  const labels: Record<string, string> = {
    pricing: '💰 Pricing',
    product: '📱 Products',
    quality: '✅ Quality',
    contact: '📞 Contact',
    enterprise: '🏢 Enterprise',
    shipping: '🚚 Shipping',
    warranty: '🛡️ Warranty',
    payment: '💳 Payment',
  }
  return labels[topic] || topic
}

function getTopicQuestion(topic: string): string {
  const questions: Record<string, string> = {
    pricing: 'Tell me about your pricing',
    product: 'What products do you sell?',
    quality: 'What are your quality standards?',
    contact: 'How can I contact you?',
    enterprise: 'I need enterprise solutions',
    shipping: 'What are your shipping options?',
    warranty: 'What warranty do you offer?',
    payment: 'What payment methods do you accept?',
  }
  return questions[topic] || `Tell me about ${topic}`
}

