import Image from "next/image";
import React from "react";

export default function CapabilitiesCard({
  image,
  title,
  description,
  number,
  component = false,
}) {
  return (
    <div className="flex md:flex-row flex-col gap-5 justify-center items-center mt-12 lg:mt-22 p-3">
      <div className="lg:w-[50%] w-full">
        {!component ? (
          <Image
            src={image}
            alt="workflow image"
            width={400}
            height={250}
            className="lg:w-[350px] md:w-[320px] h-80"
          />
        ) : (
          component
        )}
      </div>
      {/* card contents */}
      <div className="lg:w-[50%] flex flex-col justify-center items-start gap-4">
        <div className="flex justify-center items-center gap-3">
          <button className="dark-card-list-button">{number}</button>
          <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold">
            {title}
          </h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
