'use client'
import React from 'react'
import ButtonAnimated from '../Components/ButtonAnimated'
import BlogHeroSlider from '../Components/BlogHeroSlider';
import BlogCard from '../Components/BlogCard';

export default function page() {

  return (
    // blog page
    <div className="bg-linear-to-b from-[#A94DFF] to-[#09DAF9] w-full p-8">
      {/* hero section */}
      <div className="p-4 pt-16 pb-20 w-full flex flex-col justify-center items-center overflow-hidden">
        <BlogHeroSlider/>
      </div>
      {/* blog section */}
      <div className='bg-white px-14 pt-14 pb-20 rounded-2xl w-full flex-col justify-center items-center'>
        {/* blog section heading */}
        <div>
          <h2 className='text-center text-4xl mb-14 animo-gradient-header font-bold'>Read More Of Our Latest Blogs</h2>
        </div>
        {/* blogs box */}
        <div className='grid grid-cols-4 gap-x-5 gap-y-10 justify-items-center px-14'>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>
      </div>
    </div>
  )
}
