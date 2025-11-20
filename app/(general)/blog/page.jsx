"use client";
import React from "react";
import BlogHeroSlider from "../../Components/BlogHeroSlider";
import BlogCard from "../../Components/BlogCard";
import blogs from "../../../public/data/blogs.json";
export default function page() {
  return (
    // blog page
    <div className="home-page w-full p-4 sm:p-6 lg:p-8">
      {/* hero section */}
      <div className="p-2 sm:p-4 pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-16 lg:pb-20 w-full flex flex-col justify-center items-center overflow-hidden">
        <BlogHeroSlider data={blogs} />
      </div>
      {/* blog section */}
      <div className="bg-white px-4 sm:px-8 lg:px-14 pt-8 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 rounded-xl sm:rounded-2xl w-full flex-col justify-center items-center">
        {/* blog section heading */}
        <div>
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-10 lg:mb-14 animo-gradient-header font-bold px-2">
            Read More Of Our Latest Blogs
          </h2>
        </div>
        {/* blogs box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-x-5 lg:gap-y-10 justify-items-center px-2 sm:px-6 lg:px-14">
          {blogs.map((blog, index) => (
            <BlogCard key={index} data={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}











 