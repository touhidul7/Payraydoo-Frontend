'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import retailco from '../../public/logo/retailco.png';
const testimonials = [
  {
    id: 1,
    text: "Closed 2× faster. Exceptions dropped to near zero. Payraydoo paid for itself in weeks",
    author: "AAA BBB",
    role: "(CFO)",
    company: "TECHCORP",
    logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQEHxJrZ8gZ3MQ/company-logo_200_200/company-logo_200_200/0/1631356930047?e=2147483647&v=beta&t=_QsrOF9PAbXWf0O4hAvqHiaH9YqBBhjXnyzh6xlBdRE"
  },

  {
    id: 2,
    text: "Collections, finally predictable. DSO down double digits",
    author: "AAA BBB",
    role: "(AP HEAD)",
    company: "RETAILCO",
    logoUrl: "../../public/logo/retailco.png"
  },
  {
    id: 3,
    text: "Invoice processing time cut by 60%. Our team can finally focus on strategic work",
    author: "CCC DDD",
    role: "(VP Finance)",
    company: "FINTECH",
    logoUrl: "FinTech"
  },
  {
    id: 4,
    text: "Payment reconciliation is now automated. We've eliminated manual errors completely",
    author: "EEE FFF",
    role: "(Controller)",
    company: "LOGISTICS",
    logoUrl: "Logistics"
  },
  {
    id: 5,
    text: "The platform transformed our accounts receivable process. ROI achieved in under 3 months",
    author: "GGG HHH",
    role: "(CFO)",
    company: "HEALTHCARE",
    logoUrl: "HealthCare"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const nextSlide = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 2; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center rounded-2xl">
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100px);
          }
        }

        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100px);
          }
        }

        .slide-in-right {
          animation: slideInRight 0.5s ease-out;
        }

        .slide-in-left {
          animation: slideInLeft 0.5s ease-out;
        }

        .testimonial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .nav-button {
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          transform: scale(1.1);
            background: linear-gradient(135deg,rgba(82, 84, 255, 1) 0%, rgba(0, 0, 156, 1) 100%);
        }
      `}</style>

      <div className="max-w-7xl w-full mx-auto  p-5 lg:pb-0  rounded-2xl">
        <div className="mb-12">
          <h2 className="text-transparent gradient-text lg:text-5xl text-lg font-semibold my-5">
            Client Testimonials
          </h2>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              What Our Customers Say !
            </h1>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="nav-button lg:w-12 w-8 lg:h-12 h-8 rounded-full bg-linear-to-br from-blue-300 to-blue-300 flex items-center justify-center hover:shadow-lg cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="lg:w-6 w-4 h-4 lg:h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="nav-button lg:w-12 w-8 lg:h-12 h-8 rounded-full bg-linear-to-br from-blue-300 to-blue-300 flex items-center justify-center hover:shadow-lg cursor-pointer"
                aria-label="Next testimonial"
              >
                <ArrowRight className="lg:w-6 w-4 h-4 lg:h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {getVisibleTestimonials().map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${currentIndex}-${idx}`}
              className={`testimonial-card bg-white rounded-2xl shadow-lg  ${
                idx === 1 && direction === 'next' ? 'slide-in-right' : 
                idx === 1 && direction === 'prev' ? 'slide-in-left' : ''
              }`}
            >
              <div className="h-4 rounded-t-lg w-full mb-8 bg-linear-to-r from-purple-500 to-purple-600"></div>
              
              <div className='lg:p-8 p-4'>
                   <p className="text-gray-700 lg:text-2xl text-xl leading-relaxed mb-16 ">
                {testimonial.text}
              </p>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-gray-900  text-md font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-md font-semibold">
                    {testimonial.role}
                  </p>
                </div>
                <div className="text-right">
                  <div className="inline-block mb-3 px-4 py-2 bg-linear-to-r from-purple-50 to-purple-100 rounded-lg">
                   <Image 
                      src={testimonial.logoUrl} 
                      width={100}
                      height={80}
                      alt={`${testimonial.company} logo`}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              </div>
           
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 'next' : 'prev');
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-linear-to-r from-purple-500 to-purple-600'
                  : 'w-2 bg-purple-200'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}