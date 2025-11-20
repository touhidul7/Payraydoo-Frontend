import React from "react";
import Image from "next/image";
const BlogCard = ({ data }) => {
  const navigate = () => {
    const slug = data.title.replace(/\s+/g, "-"); // convert spaces → hyphens
    window.location.href = `/blog/${data.slug}/${data.id}`;
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden animo-border group font-mont">
      {/* Image */}
      <Image
        src={data?.image}
        width={300}
        height={300}
        alt="Finance workflow"
        className="w-full h-auto"
      />

      {/* Content */}
      <div className="p-5 bg-white">
        <p className="text-gray-800 text-lg leading-5 font-semibold mb-4">
          {data?.title}
        </p>

        <div className="flex justify-between items-center">
          <button
            onClick={navigate}
            className="animo-blog-button-dark opacity-100 lg:opacity-0 visible lg:invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
          >
            Read More ...
          </button>
          <span className="text-gray-500 text-[10px] font-bold">
            Published <br />
            {data?.publishedDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
