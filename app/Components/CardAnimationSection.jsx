import React, { useEffect, useRef } from "react";
import small_logo from "../../public/logo/small_logo.png";
import setting from "../../public/images/noun-erp-7857504.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CardAnimationSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const ctx = gsap.context(() => {
      // Set initial states - second and third cards start below viewport
      gsap.set(".second-card", { opacity: 0, y: 100 });
      gsap.set(".third-card", { opacity: 0, y: 100 });

      // First card - fade in when it enters viewport
      gsap.to(".first-card", {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".first-card",
          start: "top 80%",
          end: "center center",
          scrub: 1,
          markers: false,
        }
      });

      // First card PIN - starts when it reaches center, ends when second card reaches center
      gsap.to(".first-card", {
        scrollTrigger: {
          trigger: ".first-card",
          start: "center center",
          end: "bottom center", // Changed from pinning indefinitely
          pin: true,
          pinSpacing: true, // Changed to true to reserve space
          scrub: 1,
          markers: false,
        }
      });

      // Second card - appears AFTER first card unpins
      gsap.to(".second-card", {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".second-card",
          start: "top 90%", // Start when second card is near bottom
          end: "center center", // Complete animation when it reaches center
          scrub: 1,
          markers: false,
        }
      });

      // Third card - appears after second card
      gsap.to(".third-card", {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".third-card",
          start: "top 90%",
          end: "center center",
          scrub: 1,
          markers: false,
        }
      });

    }, containerRef);

    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-24 my-16">
      {/* First Card */}
      <div className="first-card w-full bg-white py-16 px-8 clip-card rounded-xl custom-white-card relative">
        <div className="z-10">
          <div className="border-animation absolute -top-6 sm:-top-12 left-[50%] p-2 sm:p-3 z-10 transform -translate-x-1/2">
            <Image
              src={small_logo}
              alt="small logo"
              width={75}
              height={75}
              className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 lg:w-[75px] lg:h-[75px]"
            />
          </div>
        </div>
        <h2 className="text-gray-700 mt-6 sm:mt-8 p-4 sm:p-5 lg:px-6 lg:py-8 font-medium font-mont text-base sm:text-xl lg:text-2xl text-center">
          Payraydoo bridges receivables and payables automating the flow of
          money in and out
        </h2>
      </div>

      {/* 2nd card - Responsive grid */}
      <div className="second-card w-full py-16 px-8 mx-auto custom-white-card font-mont rounded-xl bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-8 text-center">
          <div className="w-full lg:w-auto">
            <h2 className="text-black text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-8">
              Accounts Receivable
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-gray-700 font-medium text-xs sm:text-sm lg:text-base">
              <div>
                <p>Cash Application agent</p>
              </div>
              <div>
                <p>Collection agent</p>
              </div>
              <div>
                <p>Dispute agent</p>
              </div>
              <div>
                <p>Closing agent</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block h-24 sm:h-32 custom-bar bg-white w-0.5"></div>
          <div className="block lg:hidden w-full h-0.5 custom-bar bg-white my-4"></div>

          <div className="w-full lg:w-auto">
            <h2 className="text-black text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-8">
              Accounts Payable
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 text-gray-700 font-medium text-xs sm:text-sm lg:text-base items-center">
              <div>
                <p>Invoice Capturing agent</p>
              </div>
              <div>
                <p>Verification & Reconciliation agent</p>
              </div>
              <div>
                <p>Scheduling agent</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Card with gradient */}
      <div className="third-card w-full py-16 px-8 flex flex-col items-center custom-gradient-card rounded-xl">
        <Image
          src={setting}
          alt="setting"
          width={120}
          height={120}
          className="w-16 h-16 sm:w-24 sm:h-24 lg:w-[120px] lg:h-[120px]"
        />
        <h2 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-mont font-medium mt-4 sm:mt-6 text-center px-2">
          Your ERP/ Accounting Software
        </h2>
      </div>
    </div>
  );
}