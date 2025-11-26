import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function ProductDetailsCard({
  number,
  title,
  desription,
  image,
}) {
  return (
    <motion.div
      className="max-w-6xl mx-auto bg-white rounded-2xl p-3 md:p-10 flex md:flex-row flex-col md:justify-center items-center md:gap-8 gap-3"
      initial={{ y: 100, scale: 1, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: false }}
    >
      <div className=" md:w-[60%] w-full">
        <div className="flex justify- items-center gap-5">
          <p className="card-list-button">{number}.</p>
          <h2 className="text-black md:text-3xl text-xl font-semibold">
            {title}
          </h2>
        </div>
        <p className="text-gray-900 text-md md:text-lg mt-5">{desription}</p>
      </div>
      <div className=" md:w-[40%] w-full mx-auto">
        <div>
          <Image src={image} alt="card image" width={400} height={200} />
        </div>
      </div>
    </motion.div>
  );
}
