import React from "react";
import Image from "next/image";
const BlogCard = ({ data }) => {
  const FILE_URL = process.env.NEXT_PUBLIC_FILE_URL;
  const navigate = () => {
    window.location.href = `/blog/${data?.slug}/${data?.id}`;
  };
  // ------------------ FORMAT DATE FOR INPUT ---------------------
  const formatDateForInput = (dateString) => {
    if (!dateString) return "";

    // If it's already in YYYY-MM-DD format, return as is
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return dateString;
    }

    // If it's a full ISO string or other date format
    const date = new Date(dateString);
    if (isNaN(date?.getTime())) return "";

    return date?.toISOString().split("T")[0]; // Get YYYY-MM-DD part
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden animo-border group font-mont">
      {/* Image */}
      <Image
        src={`${FILE_URL}/${data?.image}`}
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
            {formatDateForInput(data?.published_date) || ''}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
