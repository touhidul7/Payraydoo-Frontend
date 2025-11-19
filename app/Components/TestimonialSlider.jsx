'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import retailco from '../../public/logo/retailco.png'; // Local image import

const testimonials = [
  {
    id: 1,
    text: "Closed 2× faster. Exceptions dropped to near zero. Payraydoo paid for itself in weeks",
    author: "AAA BBB",
    role: "(CFO)",
    company: "TECHCORP",
    logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQEHxJrZ8gZ3MQ/company-logo_200_200/company-logo_200_200/0/1631356930047?e=2147483647&v=beta&t=_QsrOF9PAbXWf0O4hAvqHiaH9YqBBhjXnyzh6xlBdRE",
  },
  {
    id: 2,
    text: "Collections, finally predictable. DSO down double digits",
    author: "AAA BBB",
    role: "(AP HEAD)",
    company: "RETAILCO",
    logoUrl: retailco, // Use imported image directly
  },
  {
    id: 3,
    text: "Invoice processing time cut by 60%. Our team can finally focus on strategic work",
    author: "CCC DDD",
    role: "(VP Finance)",
    company: "FINTECH",
    logoUrl: null, // placeholder - you can add real logo later
  },
  {
    id: 4,
    text: "Payment reconciliation is now automated. We've eliminated manual errors completely",
    author: "EEE FFF",
    role: "(Controller)",
    company: "LOGISTICS",
    logoUrl: null,
  },
  {
    id: 5,
    text: "The platform transformed our accounts receivable process. ROI achieved in under 3 months",
    author: "GGG HHH",
    role: "(CFO)",
    company: "HEALTHCARE",
    logoUrl: null,
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Determine how many to show
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const slidesToShow = isMobile ? 1 : 2;

  // Get visible testimonials
  const visibleTestimonials = Array.from({ length: slidesToShow }, (_, i) => {
    return testimonials[(currentIndex + i) % testimonials.length];
  });

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4">
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutToLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100%);
          }
        }

        @keyframes slideOutToRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        .animate-slide-in-right {
          animation: slideInFromRight 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInFromLeft 0.6s ease-out forwards;
        }

        .testimonial-card {
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .nav-button {
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #5254ff, #00009c);
        }

        .nav-button:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 25px rgba(82, 84, 255, 0.4);
        }
      `}</style>

      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600 text-xl md:text-5xl font-bold mb-4">
            Client Testimonials
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h1>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="nav-button w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                aria-label="Previous"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="nav-button w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                aria-label="Next"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleTestimonials.map((testimonial, idx) => {
            const isEntering = idx === 0 && currentIndex > 0;
            const animationClass = isEntering
              ? 'animate-slide-in-left'
              : 'animate-slide-in-right';

            return (
              <div
                key={`${testimonial.id}-${currentIndex}-${idx}`}
                className={`testimonial-card bg-white rounded-2xl shadow-xl overflow-hidden ${animationClass}`}
              >
                <div className="h-2 bg-linear-to-r from-purple-500 to-blue-600"></div>
                
                <div className="p-8 lg:p-10">
                  <p className="text-gray-700 text-lg lg:text-2xl leading-relaxed mb-12 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-500 font-medium">
                        {testimonial.role}, <span className="text-purple-600">{testimonial.company}</span>
                      </p>
                    </div>

                    {testimonial.logoUrl && (
                      <div className="bg-purple-50 px-4 py-3 rounded-xl">
                        {typeof testimonial.logoUrl === 'string' ? (
                          <img
                            src={testimonial.logoUrl}
                            alt={`${testimonial.company} logo`}
                            className="h-10 w-auto object-contain"
                          />
                        ) : (
                          <Image
                            src={testimonial.logoUrl}
                            alt={`${testimonial.company} logo`}
                            width={120}
                            height={60}
                            className="h-10 w-auto object-contain"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12 flex-wrap">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 h-3 rounded-full ${
                idx === currentIndex
                  ? 'w-12 bg-linear-to-r from-purple-500 to-blue-600'
                  : 'w-3 bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}