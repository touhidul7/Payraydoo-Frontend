"use client";
import React, { useEffect, useState } from "react";
import BlogHeroSlider from "../../Components/BlogHeroSlider";
import BlogCard from "../../Components/BlogCard";
import axios from "axios";
import { motion } from "framer-motion";
export default function page() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const FILE_URL = process.env.NEXT_PUBLIC_FILE_URL;

  useEffect(() => {
    loadContactData();
  }, []);

  const loadContactData = async () => {
    try {
      setLoading(true);
      setError("");
      // console.log("Loading data from:", `${BASE_URL}/api/about`);

      const res = await axios.get(`${BASE_URL}/api/blogs`);

      console.log("Response data:", res.data);

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

  return (
    // blog page
    <div className="home-page w-full p-4 sm:p-6 lg:p-8">
      {/* hero section */}
      <div className="p-2 sm:p-4 pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-16 lg:pb-20 w-full flex flex-col justify-center items-center overflow-hidden">
        <BlogHeroSlider data={data} />
      </div>
      {/* blog section */}
      <div className="bg-white px-4 sm:px-8 lg:px-14 pt-8 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 rounded-xl sm:rounded-2xl w-full flex-col justify-center items-center">
        {/* blog section heading */}
        <div>
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
            <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-10 lg:mb-14 animo-gradient-header font-bold px-2">
              Read More Of Our Latest Blogs
            </h2>
          </motion.div>
        </div>
        {/* blogs box */}
        <motion.div
          className="w-full"
          initial={{ y: 50, scale: 1, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-x-5 lg:gap-y-10 justify-items-center px-2 sm:px-6 lg:px-14">
            {data?.map((blog, index) => (
              <BlogCard key={index} data={blog} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
