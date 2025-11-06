import React from 'react'
import Image from 'next/image';
import blogImage from "../../public/images/invoice-bill-paid-payment-financial-account-concept.png"

const BlogCard = () => {
  return (
    <div className='font-mont'>
        {/* single blog */}
        <div className="w-full bg-white rounded-xl shadow-md overflow-hidden animo-border group">
            {/* Image */}
            <Image  
            src={blogImage}
            width={300}
            height={300}
            alt="Finance workflow"
            className="w-full h-62"
            />

            {/* Content */}
            <div className="p-5 bg-white">
                <p className="text-gray-800 text-lg leading-5 font-semibold mb-4">
                    No more tab-hopping in manual finance work. Just flow.
                </p>

                <div className="flex justify-between items-center">
                    <button className="animo-blog-button-dark opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        Read More ...
                    </button>
                    <span className="text-gray-500 text-[10px] font-bold">
                        Published <br />
                        27th Sept.
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard