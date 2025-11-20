"use client";
import logo from "../../../public/logo/payraydoo-logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function page() {
  const panelEmail = "admin@gmail.com";
  const panelPassword = "admin123";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (email !== panelEmail || password !== panelPassword) {
      alert("Invalid Credentials!");
      return;
    }

    // SET COOKIE INSTEAD OF LOCAL STORAGE
    document.cookie = "user=true; path=/; max-age=86400";

    alert("Sign In Successful!");
    
    window.location.href = "/admin";
  };

  return (
    <div className=" bg-gray-100 text-gray-900 flex justify-center min-h-screen items-center">
      <div className="max-w-7xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className=" p-6 sm:p-12">
          <Link href={"/"} className="flex justify-center">
            <Image
              alt="logo"
              width={128}
              height={128}
              src={logo}
              className="w-52 h-fit"
            />
          </Link>
          <div className="mt-12 flex flex-col items-center">
            {/* <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1> */}
            <form onSubmit={handleSignUp} className="w-full flex-1 mt-4">
              <div className="mx-auto max-w-xs space-y-5">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-5 tracking-wide font-semibold bg-blue-600 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <span className="ml-3">Sign In</span>
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          />
        </div>
      </div>
    </div>
  );
}
