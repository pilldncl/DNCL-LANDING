'use client'

import { useState } from 'react'
import { submitToWebhook, type ContactFormData } from '@/lib/webhook'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    whatsapp: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status message when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Map form data to webhook expected format
      const webhookData: ContactFormData = {
        Name: formData.name,
        Organization: formData.company,
        Whatsapp: formData.whatsapp,
        Email: formData.email,
        Message: formData.message,
      }

      // Get current page URL
      const currentPageUrl = window.location.href

      // Submit to webhook
      const result = await submitToWebhook(webhookData, currentPageUrl)

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you for your inquiry! We will get back to you soon.',
        })
        // Reset form on success
        setFormData({
          company: '',
          name: '',
          whatsapp: '',
          email: '',
          message: '',
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to submit form. Please try again.',
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again or contact us directly via WhatsApp.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="whatsapp" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <span>WhatsApp</span>
            <span className="px-2 py-0.5 rounded-full bg-[#25D366] text-white text-xs font-bold">
              Preferred
            </span>
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-[#25D366]/30 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-[#25D366] bg-[#25D366]/5"
            placeholder="Your WhatsApp number"
          />
          <p className="mt-1.5 text-xs text-gray-600">
            All phone communications go through WhatsApp. We&apos;ll respond quickly!
          </p>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Tell us about your requirements..."
          />
        </div>

        {/* Status Message */}
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            <p className="text-sm font-medium">{submitStatus.message}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Request Access'}
        </button>
      </form>
    </div>
  )
}

