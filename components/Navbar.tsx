'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX, FiShield, FiCheckCircle, FiMessageCircle } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Trust Bar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-xs text-gray-600">
            <div className="hidden items-center gap-6 md:flex">
              <div className="flex items-center gap-2">
                <FiShield className="text-primary-600" size={14} />
                <span>Quality-Focused Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-primary-600" size={14} />
                <span>Secure Data Handling</span>
              </div>
              <span className="text-gray-400">|</span>
              <span>Enterprise-Grade Standards</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <a 
                href="https://wa.me/16825616897" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hidden items-center gap-2 px-3 py-1.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20BA5A] transition-all hover:scale-105 shadow-sm sm:flex"
              >
                <FiMessageCircle size={14} />
                <span>Chat on WhatsApp</span>
              </a>
              <a href="mailto:info@dncltechzone.com" className="hover:text-primary-600">
                info@dncltechzone.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900" aria-label="DNCL Techzone home">
              <span className="inline-flex items-center gap-1">
                <span aria-hidden className="tracking-tight">DNCL</span>
                <span aria-hidden className="text-primary-700">-</span>
                <span aria-hidden className="tracking-tight">TECHZONE</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-8 md:flex">
              <Link href="/" className="text-sm font-semibold text-gray-800 transition hover:text-primary-700">
                Home
              </Link>
              <Link href="/about" className="text-sm font-semibold text-gray-800 transition hover:text-primary-700">
                About
              </Link>
              <a 
                href="https://app.dncltechzone.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-800 transition hover:text-primary-700"
              >
                Shop
              </a>
              <Link href="/contact" className="text-sm font-semibold text-gray-800 transition hover:text-primary-700">
                Contact
              </Link>
              <a
                href="https://app.dncltechzone.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-800 hover:shadow-md"
              >
                Shop Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-200 pb-4 pt-4">
              <Link
                href="/"
                className="block px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 hover:text-primary-700"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 hover:text-primary-700"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <a
                href="https://app.dncltechzone.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 hover:text-primary-700"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </a>
              <Link
                href="/contact"
                className="block px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 hover:text-primary-700"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://app.dncltechzone.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-3 flex items-center justify-center gap-2 rounded-md bg-primary-700 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-primary-800"
                onClick={() => setIsOpen(false)}
              >
                Shop Now
              </a>
              <a
                href="https://wa.me/16825616897"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-3 flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#20BA5A]"
                onClick={() => setIsOpen(false)}
              >
                <FiMessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="mx-4 mt-3 block rounded-md bg-gray-700 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
