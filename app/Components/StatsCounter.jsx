'use client'

import { useState, useEffect, useRef } from 'react';


const StatCard = ({ value, label, suffix = '', prefix = '', delay = 0, size = 'large' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  const cardSize = size === 'large' ? 'w-80 h-62' : 'w-72 h-64';
  const textSize = size === 'large' ? 'text-8xl' : 'text-7xl';
  const labelSize = size === 'large' ? 'text-2xl' : 'text-xl';

  return (
    <div
      ref={cardRef}
      className={`${cardSize} bg-gradient-to-br from-gray-500 to-purple-400 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl border border-gray-600 transition-transform duration-300 hover:scale-105`}
    >
      <div className="text-center">
        <div className={`${textSize} font-bold text-white mb-4`}>
          {prefix}{count}{suffix}
        </div>
        <div className={`${labelSize} text-gray-200 font-medium`}>
          {label}
        </div>
      </div>
    </div>
  );
};

export default function StatsCounter() {
  return (
    <div className="lg:h-[300px] md:h-[220px] flex items-center justify-center p-8">
      <div className="flex flex-col gap-6 items-center">
        {/* Top Row - Accuracy and Time Savings */}
        <div className="flex gap-2 lg:gap-6 md:gap-2 items-end">
          {/* Accuracy - Larger */}
          <div className="lg:w-46 md:w-38 w-32 lg:h-56 md:h-42 h-36 ap-accuracy-card-bg rounded-3xl p-6 flex flex-col items-center justify-center shadow-2xl border border-gray-600 transition-transform duration-300 hover:scale-105">
            <div className="text-center">
              <div className="lg:text-5xl md:text-3xl text-3xl font-bold text-white mb-3">
                <CountUp value={95} delay={0} />%
              </div>
              <div className="lg:text-xl text-lg text-gray-200 font-medium">
                Accuracy
              </div>
            </div>
          </div>

          {/* Time Savings - Smaller */}
          <div className="lg:w-48 md:w-40 w-36 lg:h-42  bg-[#3e3e3e] rounded-3xl p-4 flex flex-col items-center justify-center shadow-2xl border border-gray-600 transition-transform duration-300 hover:scale-105">
            <div className="text-center">
              <div className="lg:text-5xl md:text-3xl text-3xl font-bold text-white mb-3">
                <CountUp value={90} delay={300} />%
              </div>
              <div className="text-lg text-gray-200 font-medium">
                Time Savings
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Cost Savings (Centered and Wider) */}
        <div className="lg:w-68 md:w-58 w-52 md:h-52 h-48 lg:h-62 bg-[#3e3e3e] rounded-3xl p-6 flex flex-col items-center justify-center shadow-2xl border border-gray-600 transition-transform duration-300 hover:scale-105">
          <div className="text-center">
            <div className="lg:text-2xl md:text-xl text-gray-300 font-semibold mb-3">
              Upto
            </div>
            <div className="lg:text-6xl md:text-4xl text-3xl font-bold text-white mb-3">
              <CountUp value={60} delay={600} />%
            </div>
            <div className="lg:text-xl md:text-lg text-lg text-gray-200 font-medium">
              Cost Savings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CountUp = ({ value, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return <span ref={ref}>{count}</span>;
};