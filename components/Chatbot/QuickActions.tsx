'use client'

interface QuickAction {
  label: string
  message: string
  icon?: string
}

interface QuickActionsProps {
  onSelect: (message: string) => void
}

const quickActions: QuickAction[] = [
  { label: 'Pricing', message: 'What are your pricing options?' },
  { label: 'Products', message: 'What devices do you sell?' },
  { label: 'Quality', message: 'Tell me about your quality standards' },
  { label: 'Enterprise', message: 'I need enterprise solutions' },
  { label: 'Contact', message: 'How can I contact you?' },
]

export default function QuickActions({ onSelect }: QuickActionsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {quickActions.map((action, index) => (
        <button
          key={index}
          onClick={() => onSelect(action.message)}
          className="px-3 py-1.5 text-xs font-medium text-primary-700 bg-primary-50 border border-primary-200 rounded-lg hover:bg-primary-100 hover:border-primary-300 transition-colors"
        >
          {action.label}
        </button>
      ))}
    </div>
  )
}

