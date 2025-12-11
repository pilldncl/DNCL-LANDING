'use client'

import { useRef } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const solutions = [
  {
    title: 'Marketplace Velocity',
    highlight: 'Channel-ready lots with documented grading, high sell-through, and warranty support.',
    bullets: ['Serialized manifest exports', 'Automated listing assets', 'Return mitigation playbooks'],
  },
  {
    title: 'Enterprise Deployment',
    highlight: 'Cross-country rollouts with staged inventory, ITAD swap, and zero-touch provisioning.',
    bullets: ['Pre-imaging & MDM enrollment', 'Accessory kitting', 'Asset tagging & packing'],
  },
  {
    title: 'Recurring Programs',
    highlight: 'Subscription-like inventory for MSPs and integrators that require predictable refresh cycles.',
    bullets: ['Capacity planning', 'Forecast alignment', 'Quarterly business reviews'],
  },
]

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useScrollAnimation(sectionRef, 0.1)
  
  const solutionColors = [
    { gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { gradient: 'from-purple-500 to-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
    { gradient: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  ]

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-10"></div>
      
      <div className="container relative mx-auto px-4">
        <div className={`mx-auto max-w-3xl text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Tailored Solutions for Your Business Needs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We combine sourcing, refurbishment, and logistics into modular programs that integrate seamlessly 
            into your marketplace or enterprise workflows. Each solution is tailored to your specific operational needs.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const colors = solutionColors[index % solutionColors.length]
            return (
              <div
                key={solution.title}
                className={`group relative overflow-hidden rounded-xl border-2 ${colors.border} bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 0.15}s`
                }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4 group-hover:text-primary-800 transition-colors">{solution.title}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">{solution.highlight}</p>
                <ul className="mt-6 space-y-3 text-sm text-gray-600">
                  {solution.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${colors.gradient} flex-shrink-0`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
