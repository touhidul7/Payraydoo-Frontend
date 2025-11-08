import React, { useState, useEffect } from 'react';

export default function ERPCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const logos = [
    { name: 'SAP', src: '/logos/sap.png', hasBackground: true },
    { name: 'Sage', src: '/logos/sage.png', hasBackground: false },
    { name: 'Oracle', src: '/logos/oracle.png', hasBackground: false },
    { name: 'SAP', src: '/logos/sap.png', hasBackground: true },
    { name: 'Sage', src: '/logos/sage.png', hasBackground: false }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (logos.length - 2));
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl max-w-md w-full">
        <h2 className="text-white text-3xl font-bold mb-8">ERP Integrations</h2>
        
        <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 mb-6 overflow-hidden">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {logos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: 'calc(40% - 12px)' }}
                >
                  <div
                    className={`${
                      logo.hasBackground ? 'bg-white' : 'bg-transparent'
                    } rounded-xl px-6 py-8 transition-all duration-300 hover:scale-105 flex items-center justify-center h-24`}
                    style={{
                      boxShadow: logo.hasBackground ? '0 10px 40px rgba(0,0,0,0.3)' : 'none'
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2">
          {logos.slice(0, -2).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-blue-500'
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}