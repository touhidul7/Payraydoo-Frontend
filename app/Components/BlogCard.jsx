import React from 'react'
import Image from 'next/image';

const BlogCard = () => {
  return (
    <div>
        {/* single blog */}
        <div className="max-w-72 bg-white rounded-xl shadow-md overflow-hidden animo-border">
            {/* Image */}
            <Image
            src={"https://images.pexels.com/photos/7658355/pexels-photo-7658355.jpeg"}
            width={300}
            height={250}
            alt="Finance workflow"
            className="w-full h-48"
            />

            {/* Content */}
            <div className="p-5 bg-white">
                <p className="text-gray-800 text-lg leading-5 font-semibold mb-4">
                    No more tab-hopping in manual finance work. Just flow.
                </p>

                <div className="flex justify-between items-center">
                    <button className="animo-blog-button-dark">
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
