import Link from 'next/link'
import { FiMail, FiMessageCircle, FiMapPin, FiShield, FiLock } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-gray-200 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              DNCL-TECHZONE
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Enterprise-Grade Technology Solutions. Delivered with uncompromising quality, 
              security, and compliance for B2B organizations worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                  <FiMessageCircle className="text-white" size={16} />
                </div>
                <div>
                  <a href="https://wa.me/16825616897" target="_blank" rel="noopener noreferrer" className="hover:text-white transition block">
                    <span className="text-white font-semibold">Chat on WhatsApp</span>
                  </a>
                  <span className="text-xs text-gray-400 block">Preferred Contact Method</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-primary-400" size={16} />
                <a href="mailto:info@dncltechzone.com" className="hover:text-white transition">
                  info@dncltechzone.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="text-primary-400" size={16} />
                <span>Global Operations</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition">
                  Shop Our Stores
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Wholesale Devices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Enterprise Deployment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Marketplace Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Recurring Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal & Compliance</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              {/* <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li> */}
              <li>
                <Link href="/compliance" className="hover:text-white transition">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-white transition">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <FiShield className="text-primary-400" size={14} />
                <span>Quality-Focused Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <FiLock className="text-primary-400" size={14} />
                <span>Secure Data Handling</span>
              </div>
              <span>Enterprise-Grade Standards</span>
            </div>
            <div className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} DNCL-TECHZONE. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
