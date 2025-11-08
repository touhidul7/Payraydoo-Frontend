"use client";

import { useState } from "react";

export default function CompactContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    companySize: "",
    hearAbout: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-2xl w-full mx-auto p-3 font-mont flex flex-col items-center">
      <div className="bg-black rounded-xl shadow-md p-12">
        
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#1e1e1e] "
              placeholder="Enter your work email *"
            />
          </div>

          <div>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#1e1e1e]"
              placeholder="Enter your name *"
            />
          </div>

          <div>
            
            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#1e1e1e] "
             
            >
              <option value="">What is your company size?</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501-1000">501-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
          </div>

          <div>
           
            <select
              name="hearAbout"
              value={formData.hearAbout}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-[#1e1e1e]"
            >
              <option value="">How did you hear about us?</option>
              <option value="search">Search Engine</option>
              <option value="social">Social Media</option>
              <option value="referral">Friend/Colleague</option>
              <option value="advertisement">Advertisement</option>
              <option value="event">Event/Conference</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className=" pt-2">
            <p className="text-xs text-white font-medium">
              By submitting, you agree to our{" "}
              <a href="/privacy" className="text-blue-600 hover:underline font-medium">
                privacy policy
              </a>
              . Docket uses the information you submit to contact you. You may unsubscribe from these communications at any time.
            </p>
          </div>

          <button
            type="submit"
            className="w-full  py-4 px-6 rounded-lg font-bold text-md md:text-lg contact-button   duration-200 mt-4"
          >
            Get a Demo For Free
          </button>
        </form>
      </div>
    </div>
  );
}