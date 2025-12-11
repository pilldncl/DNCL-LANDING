'use client'

import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: 'Professional, efficient, and trustworthy in every transaction.',
      text: 'As a repeat customer, we value the transparency, competitive pricing, and commitment to delivering exactly what&apos;s promised.',
      author: 'Mr. H, Procurement Manager',
      company: 'Consumer Electronics Retailer',
      since: 'Partner since 2019',
    },
    {
      quote: 'Direct Answers. On-Time Delivery',
      text: 'The entire process was efficient and transparent, with equipment arriving exactly as promised. It made scaling our operations seamless.',
      author: 'Logistics Supervisor',
      company: 'National Healthcare Network',
      since: 'Partner since 2021',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[currentIndex]

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Trusted by Enterprise Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what enterprise leaders say about working with DNCL-TECHZONE. 
            Real feedback from real partners who trust us with their technology needs.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-xl border-2 border-gray-200 bg-white p-8 shadow-lg md:p-12">
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white border border-gray-300 p-3 text-gray-600 shadow-sm transition hover:bg-gray-50 hover:border-primary-300 hover:text-primary-700 md:inline-flex"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white border border-gray-300 p-3 text-gray-600 shadow-sm transition hover:bg-gray-50 hover:border-primary-300 hover:text-primary-700 md:inline-flex"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </button>

            <div className="text-center">
              <div className="mb-6 inline-flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                &ldquo;{testimonial.quote}&rdquo;
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-700">{testimonial.text}</p>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-lg font-semibold text-gray-900">{testimonial.author}</p>
                <p className="mt-1 text-base text-gray-600">{testimonial.company}</p>
                <p className="mt-2 text-sm font-medium text-primary-700">{testimonial.since}</p>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === currentIndex ? 'bg-primary-700 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
