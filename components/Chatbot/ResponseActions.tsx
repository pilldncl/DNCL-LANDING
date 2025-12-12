'use client'

import { ResponseAction } from '@/lib/chatbot/responseActions'

interface ResponseActionsProps {
  actions: ResponseAction[]
  onSelect: (message: string) => void
}

export default function ResponseActions({ actions, onSelect }: ResponseActionsProps) {
  if (!actions || actions.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={() => onSelect(action.message)}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            action.type === 'contact'
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : action.type === 'navigation'
              ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              : 'bg-primary-50 text-primary-700 border border-primary-200 hover:bg-primary-100'
          }`}
        >
          {action.label}
        </button>
      ))}
    </div>
  )
}

