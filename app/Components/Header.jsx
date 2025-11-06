"use client";

import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import logoimg from "../../public/logo/logo-open-fileArtboard-5.png";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const Menus = [
    { title: "Home", link: "/" },
    { title: "Product", link: "/product" },
    { title: "Blog", link: "/blog" },
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/contact" },
  ];
  
  return (
    <div>
      <header className="bg-[#363767]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Image 
                src={logoimg} 
                alt="Company Logo" 
                width={250}
                height={100}
                className="w-40 md:w-64 lg:w-80"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-12 font-mont font-semibold">
              <nav aria-label="Global">
                <ul className="flex items-center gap-8 lg:gap-12 text-md">
                  {Menus.map((menu, index) => (
                    <li key={index}>
                      <a
                        className={`${
                          pathname === menu.link
                            ? "text-teal-400"
                            : "text-white hover:text-teal-400"
                        } transition-colors duration-200`}
                        href={menu.link}
                      >
                        {menu.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-white hover:text-teal-400 focus:outline-none focus:text-teal-400 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <nav aria-label="Mobile Global" className="pb-4 border-t border-gray-600">
              <ul className="flex flex-col space-y-3 text-md font-mont font-semibold pt-4">
                {Menus.map((menu, index) => (
                  <li key={index}>
                    <a
                      className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
                        pathname === menu.link
                          ? "text-teal-400 bg-gray-800"
                          : "text-white hover:text-teal-400 hover:bg-gray-800"
                      }`}
                      href={menu.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {menu.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}