import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import axios from "axios";
import Link from "next/link";

export default function Footer() {
  const [showScroll, setShowScroll] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState(null);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  React.useEffect(() => {
    loadContactData();
  }, []);

  const loadContactData = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(`${BASE_URL}/api/contact`);

      // console.log("API Response:", res);
      // console.log("Response data:", res.data);

      setData(res.data);
    } catch (error) {
      console.error("Load failed:", error);
      console.error("Error response:", error.response);

      if (error.response?.status === 404) {
        setData(null);
        setError("No contact page found - create a new one");
      } else if (error.response?.status === 500) {
        setError(
          "Server error: " +
            (error.response.data?.message || "Internal server error")
        );
      } else if (error.request) {
        setError("Network error: Could not reach the server");
      } else {
        setError("Failed to load: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    const form = document.querySelector(
      "form[action='https://api.web3forms.com/submit']"
    );
    const status = document.getElementById("newsletter-status");

    if (!form) return;

    async function handleSubmit(e) {
      e.preventDefault();

      const data = new FormData(form);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      }).then((r) => r.json());

      if (res.success) {
        status.innerHTML = "🎉 Thank you for subscribing!";
        status.style.color = "#b4ffb4";
        form.reset();
      } else {
        status.innerHTML = "❌ Something went wrong. Please try again.";
        status.style.color = "#ffb4b4";
      }
    }

    form.addEventListener("submit", handleSubmit);

    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  return (
    <>
      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollTop}
        className={`fixed bottom-8 right-8 scroll-button text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 ${
          showScroll
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <footer className="bg-linear-to-r from-purple-600 via-purple-500 to-blue-400 font-mont">
        {/* Newsletter Section */}
        <div className="px-4 md:py-18 py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              JOIN OUR SECURE PAYMENT NETWORK
            </h2>
            <p className="text-white/90 text-sm sm:text-base mb-8">
              Stay up-to-date with new features, security updates, merchant
              offers, and exclusive promotions.
            </p>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
            >
              {/* REQUIRED Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value={data?.submission?.web3key}
              />

              {/* Subject (optional but recommended) */}
              <input
                type="hidden"
                name="subject"
                value="New Newsletter Subscriber"
              />

              {/* Newsletter Email */}
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-white input-gradient-button"
              />

              {/* Button */}
              <button
                type="submit"
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                SIGN ME UP!
              </button>
            </form>
          <div id="newsletter-status" className="text-white mt-4 text-sm"></div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="bg-gray-900 px-4 py-8 sm:px-6 lg:px-8 md:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Social Icons */}
            <div className="flex justify-center gap-4 mb-6">
              <a
                href="#"
                className="bg-purple-500 hover:bg-purple-600 p-3 rounded-full transition-colors duration-200"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-purple-500 hover:bg-purple-600 p-3 rounded-full transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-purple-500 hover:bg-purple-600 p-3 rounded-full transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-purple-500 hover:bg-purple-600 p-3 rounded-full transition-colors duration-200"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="mb-6">
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white font-semibold text-sm sm:text-base">
                <li>
                  <Link
                    href="/"
                    className="hover:text-purple-400 transition-colors"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-purple-400 transition-colors"
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-purple-400 transition-colors"
                  >
                    BLOGS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-purple-400 transition-colors"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Secondary Links */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm mb-6">
              <Link href="/product/AP" className="hover:text-white transition-colors">
                PRODUCT AP
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/product/AR" className="hover:text-white transition-colors">
                PRODUCT AR
              </Link>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-linear-to-r from-purple-600 via-purple-500 to-blue-400 px-4 py-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white font-semibold text-xs sm:text-sm mb-1">
              SECURE PAYMENTS | TRUSTED GLOBALLY | PROCESSING WORLDWIDE
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
