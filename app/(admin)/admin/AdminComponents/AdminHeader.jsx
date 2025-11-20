"use client";

import React, { useState, useEffect, useRef } from "react";
import logo from "../../../../public/logo/payraydoo-logo.png";
import Image from "next/image";
import { useAdminData } from "../adminContext/AdminContext";
import Link from "next/link";

export default function AdminHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const {handleLogout} = useAdminData();

  // 👉 Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-default">
        <div className="px-10 flex flex-wrap items-center justify-between mx-auto p-4">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image width={500} height={200} className="h-7 w-auto" src={logo} alt="Payradoo" />
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse" ref={menuRef}>
            
            {/* USER AVATAR BUTTON */}
            <button
              type="button"
              onClick={() => setOpenMenu(!openMenu)}
              className="flex text-sm bg-neutral-primary border border-gray-200 rounded-full md:me-0 focus:ring-1 focus:ring-gray-300"
            >
              <Image
                width={80}
                height={80}
                className="w-8 h-8 rounded-full"
                src="https://cdn-icons-png.flaticon.com/128/16842/16842358.png"
                alt="user photo"
              />
            </button>

            {/* USER DROPDOWN */}
            {openMenu && (
              <div
                className="absolute top-14 right-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44 z-50"
              >
                <div className="px-4 py-3 text-sm border-b border-default">
                  <span className="block text-heading font-medium">Admin</span>
                  <span className="block text-body truncate">admin@gmail.com</span>
                </div>

                <ul className="p-2 text-sm text-body font-medium">
                  <li>
                    <button onClick={handleLogout} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* NAV MENU */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            {/* <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:text-fg-brand md:p-0">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:text-fg-brand md:p-0">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:text-fg-brand md:p-0">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:text-fg-brand md:p-0">
                  Contact
                </a>
              </li>
            </ul> */}
          </div>

        </div>
      </nav>
    </div>
  );
}
