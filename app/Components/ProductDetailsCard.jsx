import Image from "next/image";
import React from "react";

export default function ProductDetailsCard({ number, title, desription, image }) {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl p-3 md:p-10 flex md:flex-row flex-col md:justify-center items-center md:gap-8 gap-3">
      <div className=" md:w-[60%] w-full">
        <div className="flex justify- items-center gap-5">
          <p className="card-list-button">{number}.</p>
          <h2 className="text-black md:text-3xl text-xl font-semibold">
            {title}
          </h2>
        </div>
        <p className="text-gray-900 text-md md:text-lg mt-5">
          {desription}
        </p>
      </div>
      <div className=" md:w-[40%] w-full mx-auto">
        <div>
          <Image src={image} alt="card image" width={400} height={200} />
        </div>
      </div>
    </div>
  );
}
