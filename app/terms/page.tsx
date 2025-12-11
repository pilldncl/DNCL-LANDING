import { Metadata } from 'next'
import { FiFileText, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Terms of Service - DNCL Techzone',
  description: 'Terms of Service for DNCL-TECHZONE. Read our terms and conditions for using our services.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
            <FiFileText className="text-primary-600" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using the services provided by DNCL-TECHZONE (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not access or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms apply to all visitors, users, and others who access or use our website, products, or services. Your use of our services constitutes acceptance of these Terms and our Privacy Policy.
            </p>
          </section>

          {/* Services Description */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              DNCL-TECHZONE provides enterprise-grade technology solutions, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Wholesale technology devices and equipment</li>
              <li>Enterprise deployment and integration services</li>
              <li>Marketplace solutions and platform access</li>
              <li>Recurring technology programs</li>
              <li>Consulting and technical support services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
            </p>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.
            </p>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to use our services to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Transmit harmful, offensive, or illegal content</li>
              <li>Interfere with or disrupt our services or servers</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems to access our services without permission</li>
              <li>Impersonate others or provide false information</li>
              <li>Engage in any fraudulent, abusive, or harmful activity</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <div className="flex items-start gap-3">
                <FiAlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">
                  <strong>Violation Consequences:</strong> Violation of this policy may result in immediate termination of your access and potential legal action.
                </p>
              </div>
            </div>
          </section>

          {/* Orders and Payments */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Orders, Pricing, and Payment</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.1 Order Acceptance</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All orders are subject to acceptance by DNCL-TECHZONE. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, pricing errors, or suspected fraudulent activity.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.2 Pricing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prices are subject to change without notice. We strive to ensure accurate pricing, but errors may occur. We reserve the right to correct pricing errors and cancel orders placed at incorrect prices.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.3 Payment Terms</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Payment is due according to the terms specified in your order or invoice</li>
              <li>We accept payment methods as specified during checkout</li>
              <li>All prices are in the currency specified and exclude applicable taxes</li>
              <li>You are responsible for any taxes, duties, or fees applicable to your purchase</li>
              <li>Late payments may incur interest charges or service suspension</li>
            </ul>
          </section>

          {/* Shipping and Delivery */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Shipping and Delivery</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Shipping terms, delivery times, and costs are specified at the time of order. We are not responsible for delays caused by carriers, customs, or circumstances beyond our control. Risk of loss passes to you upon delivery to the carrier.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For enterprise orders, specific shipping and delivery terms will be outlined in your purchase agreement.
            </p>
          </section>

          {/* Returns and Refunds */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Returns, Refunds, and Warranties</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">7.1 Return Policy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Return policies vary by product and are specified at the time of purchase. Generally, returns must be requested within the specified timeframe and items must be in original condition. Custom or special-order items may not be returnable.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">7.2 Warranties</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Products are covered by manufacturer warranties as specified. We provide support in facilitating warranty claims but are not responsible for manufacturer warranty terms.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">7.3 Refunds</h3>
            <p className="text-gray-700 leading-relaxed">
              Refunds, when applicable, will be processed according to our refund policy and may take 5-10 business days to appear in your account.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content, trademarks, logos, and materials on our website and services are the property of DNCL-TECHZONE or our licensors and are protected by intellectual property laws. You may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Reproduce, distribute, or create derivative works without permission</li>
              <li>Use our trademarks or branding without authorization</li>
              <li>Remove or alter copyright notices</li>
              <li>Use our content for commercial purposes without a license</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, DNCL-TECHZONE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING FROM YOUR USE OF OUR SERVICES.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our total liability for any claims shall not exceed the amount you paid to us in the twelve (12) months preceding the claim. Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of the above may not apply to you.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless DNCL-TECHZONE and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services, violation of these Terms, or infringement of any rights of another.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Your right to use our services will cease</li>
              <li>We may delete your account and data</li>
              <li>Provisions that by their nature should survive will remain in effect</li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any disputes arising from these Terms or our services shall be resolved through:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Good Faith Negotiation:</strong> Parties will attempt to resolve disputes through direct communication</li>
              <li><strong>Mediation:</strong> If negotiation fails, disputes may be submitted to mediation</li>
              <li><strong>Arbitration or Litigation:</strong> As specified in your purchase agreement or applicable law</li>
            </ol>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any legal action shall be brought in the appropriate courts with jurisdiction.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Material changes will be notified through our website or email. Your continued use of our services after changes become effective constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-primary-50 rounded-lg p-6 mt-8">
            <div className="flex items-start gap-4">
              <FiCheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> <a href="mailto:legal@dncltechzone.com" className="text-primary-600 hover:underline">legal@dncltechzone.com</a></p>
                  <p><strong>General Inquiries:</strong> <a href="mailto:info@dncltechzone.com" className="text-primary-600 hover:underline">info@dncltechzone.com</a></p>
                  <p><strong>WhatsApp:</strong> <a href="https://wa.me/16825616897" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">+1 (682) 561-6897</a></p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <a href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

