import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollTop}
        className={`fixed bottom-8 right-8 scroll-button text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </button>

      <footer className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-400 font-mont">
      {/* Newsletter Section */}
      <div className="px-4 md:py-18 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            JOIN OUR SECURE PAYMENT NETWORK
          </h2>
          <p className="text-white/90 text-sm sm:text-base mb-8">
            Stay up-to-date with new features, security updates, merchant offers, and exclusive promotions.
          </p>
          
          {/* Email Signup Form */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-white  input-gradient-button"
            />
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap">
              SIGN ME UP!
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-900 px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <a href="#" className="bg-teal-500 hover:bg-teal-600 p-3 rounded-full transition-colors duration-200">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="bg-teal-500 hover:bg-teal-600 p-3 rounded-full transition-colors duration-200">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="bg-teal-500 hover:bg-teal-600 p-3 rounded-full transition-colors duration-200">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="bg-teal-500 hover:bg-teal-600 p-3 rounded-full transition-colors duration-200">
              <Twitter className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white font-semibold text-sm sm:text-base">
              <li><a href="#" className="hover:text-teal-400 transition-colors">HOME</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">SOLUTIONS</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">ABOUT</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">PRICING</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">PARTNERS</a></li>
            </ul>
          </nav>

          {/* Secondary Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm mb-6">
            <a href="#" className="hover:text-white transition-colors">CONTACT</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">SECURITY</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">API DOCS</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">SUPPORT</a>
          </div>


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-teal-600 px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white font-semibold text-xs sm:text-sm mb-1">
            SECURE PAYMENTS, TRUSTED GLOBALLY 🔒 PROCESSING WORLDWIDE
          </p>
          <p className="text-white/80 text-xs">
            ©PAYRAYDOO | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
      </footer>
    </>
  );
}