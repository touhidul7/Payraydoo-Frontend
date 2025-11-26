import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function CapabilitiesCard({
  image,
  title,
  description,
  number,
  component = false,
}) {
  return (
    <motion.div
      className="flex md:flex-row flex-col gap-5 justify-center items-center mt-12 lg:mt-22 p-3"
      initial={{ y: 100, scale: 1, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: false }}
    >
      <div className="lg:w-[50%] w-[80%] ">
        {!component ? (
          <Image
            src={image}
            alt="workflow image"
            width={400}
            height={250}
            className="lg:w-[350px] md:w-100% h-AUTO"
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
    </motion.div>
  );
}
