"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import logoimg from "../../public/logo/logo-open-fileArtboard-5.png";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const productMenuRef = useRef(null);
  
  const Menus = [
    { title: "Home", link: "/" },
    { 
      title: "Product", 
      link: "/product",
      submenus: [
        { title: "Product AP", link: "/product/AP" },
        { title: "Product AR", link: "/product/AR" }
      ]
    },
    { title: "Blog", link: "/blog" },
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/contact" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (productMenuRef.current && !productMenuRef.current.contains(event.target)) {
        setIsProductMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  return (
    <div>
      <header className="bg-[#363767] z-999">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href={"/"} className="flex-1 md:flex md:items-center md:gap-12">
              <Image 
                src={logoimg} 
                alt="Company Logo" 
                width={250}
                height={100}
                className="w-40 md:w-64 lg:w-80"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-12 font-mont font-semibold">
              <nav aria-label="Global">
                <ul className="flex items-center gap-8 lg:gap-12 text-md">
                  {Menus.map((menu, index) => (
                    <li key={index} className="relative" ref={menu.submenus ? productMenuRef : null}>
                      {menu.submenus ? (
                        <div>
                          <button
                            className={`flex items-center gap-1 ${
                              pathname === menu.link || pathname.startsWith('/product/')
                                ? "text-teal-400"
                                : "text-white hover:text-teal-400"
                            } transition-colors duration-200`}
                            onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                            onMouseEnter={() => setIsProductMenuOpen(true)}
                          >
                            {menu.title}
                            <svg 
                              className={`w-4 h-4 transition-transform duration-200 ${isProductMenuOpen ? 'rotate-180' : ''}`} 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {/* Dropdown Menu */}
                          {isProductMenuOpen && (
                            <div 
                              className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50"
                              onMouseLeave={() => setIsProductMenuOpen(false)}
                            >
                              {menu.submenus.map((submenu, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={submenu.link}
                                  className={`block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200 ${
                                    pathname === submenu.link ? 'bg-teal-50 text-teal-600' : ''
                                  }`}
                                >
                                  {submenu.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          className={`${
                            pathname === menu.link
                              ? "text-teal-400"
                              : "text-white hover:text-teal-400"
                          } transition-colors duration-200`}
                          href={menu.link}
                        >
                          {menu.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-99">
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
                    {menu.submenus ? (
                      <div>
                        <button
                          className={`flex items-center justify-between w-full py-3 px-4 rounded-lg transition-colors duration-200 ${
                            pathname === menu.link || pathname.startsWith('/product/')
                              ? "text-teal-400 bg-gray-800"
                              : "text-white hover:text-teal-400 hover:bg-gray-800"
                          }`}
                          onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                        >
                          {menu.title}
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${isMobileProductOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {/* Mobile Submenu */}
                        {isMobileProductOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {menu.submenus.map((submenu, subIndex) => (
                              <Link
                                key={subIndex}
                                href={submenu.link}
                                className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                                  pathname === submenu.link
                                    ? "text-teal-400 bg-gray-800"
                                    : "text-gray-300 hover:text-teal-400 hover:bg-gray-800"
                                }`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileProductOpen(false);
                                }}
                              >
                                {submenu.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
                          pathname === menu.link
                            ? "text-teal-400 bg-gray-800"
                            : "text-white hover:text-teal-400 hover:bg-gray-800"
                        }`}
                        href={menu.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {menu.title}
                      </Link>
                    )}
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