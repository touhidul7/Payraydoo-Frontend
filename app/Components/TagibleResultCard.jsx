import React from "react";

export default function TagibleResultCard({title, content}) {
  return (
    <div className="lg:text-center text-left h-full w-full flex flex-col justify-between">
      <h3 className="text-[#00FFF2] text-[14px] md::text-xl lg:text-2xl">
        {title}
      </h3>
      <p className="text-xs md:text-base lg:text-lg">
        {content}
      </p>
    </div>
  );
}
