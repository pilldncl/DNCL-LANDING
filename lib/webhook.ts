/**
 * Utility functions for submitting form data to n8n webhook
 */

export interface ContactFormData {
  Name: string
  Organization: string
  Whatsapp: string
  Email: string
  Message: string
}

export interface WebhookPayload {
  Name: string
  Organization: string
  Whatsapp: string
  Email: string
  Message: string
  page: string
  ua: string
  webhookUrl: string
  executionMode: string
}

export interface WebhookResponse {
  success: boolean
  message?: string
  error?: string
}

/**
 * Submits contact form data to n8n webhook
 * 
 * @param formData - The form data to submit
 * @param pageUrl - Current page URL
 * @returns Promise with success status and optional message/error
 */
export async function submitToWebhook(
  formData: ContactFormData,
  pageUrl: string = typeof window !== 'undefined' ? window.location.href : ''
): Promise<WebhookResponse> {
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL

  if (!webhookUrl) {
    console.error('Webhook URL is not configured')
    return {
      success: false,
      error: 'Webhook configuration is missing. Please contact the administrator.',
    }
  }

  // Get user agent
  const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : ''

  // Prepare payload matching n8n expected format
  const payload: WebhookPayload = {
    Name: formData.Name.trim(),
    Organization: formData.Organization.trim(),
    Whatsapp: formData.Whatsapp.trim(),
    Email: formData.Email.trim(),
    Message: formData.Message.trim(),
    page: pageUrl,
    ua: userAgent,
    webhookUrl: webhookUrl,
    executionMode: 'production',
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Webhook submission failed:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
      })

      return {
        success: false,
        error: `Failed to submit form. Please try again or contact us directly.`,
      }
    }

    // n8n webhooks typically return the processed data
    const responseData = await response.json().catch(() => ({}))
    
    return {
      success: true,
      message: 'Form submitted successfully! We will get back to you soon.',
    }
  } catch (error) {
    console.error('Error submitting to webhook:', error)
    
    return {
      success: false,
      error: error instanceof Error 
        ? `Network error: ${error.message}` 
        : 'An unexpected error occurred. Please try again later.',
    }
  }
}

