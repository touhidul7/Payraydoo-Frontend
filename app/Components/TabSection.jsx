"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export default function TabSection({ data, dirrection }) {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const mainContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const FILE_URL = process.env.NEXT_PUBLIC_FILE_URL;

  // ⛔ STOP page scroll while inside this section
  useEffect(() => {
    const section = sectionRef.current;

   ScrollTrigger.create({
  trigger: section,
  start: "top top",
  end: () => `+=${window.innerHeight * (data?.length - 1)}`,
  pin: true,
  pinSpacing: true,
  scrub: 1,

  onUpdate: (self) => {
    const progress = self.progress * (data?.length - 1);
    const index = Math.round(progress);
    setActiveIndex(index);

    const container = scrollContainerRef.current;
    if (container) {
      const maxScroll =
        container.scrollHeight - container.clientHeight;
      const target = (maxScroll / (data?.length - 1)) * index;

      container.scrollTo({
        top: target,
        behavior: "auto",
      });
    }
  },
});


    return () => ScrollTrigger.killAll();
  }, []);

  // your full original JSX EXACTLY preserved
  return (
    <div ref={sectionRef}>
      <div
        ref={mainContainerRef}
        className="font-mont lg:mt-20 mt-6 main-container"
      >
        <div
          className={`flex ${
            dirrection ? "lg:flex-row-reverse" : "lg:flex-row"
          } flex-col items-center lg:gap-16 gap-6 w-full mb-8`}
        >
          {/* IMAGE SIDE */}
          <div className="image-box h-[510px] lg:w-1/2 w-full">
            <div
              className="scroll-container"
              ref={scrollContainerRef}
            >
              {data?.map((feature, index) => (
                <div key={index} className="scroll-section">
                  <Image
                  width={100}
                  height={100}
                    src={`${FILE_URL}/${feature?.image}`}
                    alt={feature?.title}
                    className="image-bg"
                  />
                  <div className="gradient-overlay" />
                </div>
              ))}
            </div>
          </div>

          {/* TEXT TITLES */}
          <div className="features-list w-full lg:w-1/2">
            {data?.map((feature, index) => (
              <div
                key={index}
                className="feature-item lg:py-7 py-2"
              >
                <div
                  className={`feature-indicator lg:w-[5px] w-[3px] h-[30px] lg:h-[60px] ${
                    activeIndex === index ? "active" : ""
                  }`}
                ></div>
                <div
                  className={`feature-text text-[18px] lg:text-[30px] font-medium ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  {feature?.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
