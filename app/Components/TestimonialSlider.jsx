"use client";
import { motion } from "framer-motion";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function TestimonialSlider({ data }) {
  const FILE_URL = process.env.NEXT_PUBLIC_FILE_URL;

  const testimonials = data || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  // NEXT SLIDE
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
  };

  // PREV SLIDE
  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials?.length) % testimonials?.length
    );
  };

  // GOTO SLIDE
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // RESPONSIVE SLIDES
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesToShow = isMobile ? 1 : 2;

  const visibleTestimonials = Array.from({ length: slidesToShow }, (_, i) => {
    return testimonials[(currentIndex + i) % testimonials?.length];
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
          <motion.div
            className="w-full"
            initial={{ x: 50, scale: 1, opacity: 0 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
          >
            <h2 className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600 text-xl md:text-5xl font-bold mb-4">
              Client Testimonials
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h1>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="nav-button w-12 h-12 rounded-full flex items-center justify-center"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="nav-button w-12 h-12 rounded-full flex items-center justify-center"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleTestimonials?.map((testimonial, idx) => {
            const animationClass =
              idx === 0 ? "animate-slide-in-left" : "animate-slide-in-right";

            // Extract image path
            const imagePath = testimonial?.image || testimonial?.existingImage;
            const finalImageUrl = imagePath && `${FILE_URL}/${imagePath}`;

            return (
              <div
                key={`${testimonial?.name}-${currentIndex}-${idx}`}
                className={`testimonial-card bg-white rounded-2xl shadow-xl overflow-hidden ${animationClass}`}
              >
                <div className="h-2 bg-linear-to-r from-purple-500 to-blue-600"></div>

                <div className="p-8 lg:p-10">
                  <p className="text-gray-700 text-lg lg:text-2xl leading-relaxed mb-12 italic">
                    {testimonial?.review}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold text-gray-900">
                        {testimonial?.name}
                      </p>
                      <p className="text-gray-500 font-medium">
                        {testimonial?.jobtitle}
                      </p>
                    </div>

                    {finalImageUrl && (
                      <div className="bg-purple-50 px-4 py-3 rounded-xl">
                        <Image
                          src={finalImageUrl}
                          alt="Testimonial logo"
                          width={120}
                          height={60}
                          className="h-10 w-auto object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12 flex-wrap">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 h-3 rounded-full ${
                idx === currentIndex
                  ? "w-12 bg-linear-to-r from-purple-500 to-blue-600"
                  : "w-3 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
