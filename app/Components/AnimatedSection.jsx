"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import small_logo from "../../public/logo/small_logo.png";
import setting from "../../public/images/noun-erp-7857504.png";

gsap.registerPlugin(ScrollTrigger);

export default function CardStackBuilder() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Start: all cards way below and invisible
    gsap.set(cards, {
      y: 400,
      opacity: 0,
      rotation: 5,
      scale: 0.9,
    });

    // Proper stacking order (last card in DOM = top of stack)
    cards.forEach((card, i) => {
      gsap.set(card, {
        zIndex: i + 1, // card[0] = bottom, card[2] = top
      });
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%", // 100% per card → perfect timing
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      // Each card flies in and stacks with beautiful easing
      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            y: -120 * i, // stack upward with spacing
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          i * 0.8 // stagger: card 0 → 0s, card 1 → 0.8s, card 2 → 1.6s
        );
      });

      // Optional: Add subtle floating animation after stack is built
      tl.to(cards, {
        y: "+=2",
        duration: 0,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b "
      style={{
        height: 'fit-content'
      }}
    >
      <div className="lg:h-screen h-[80vh] flex items-center justify-center">
        <div className="relative w-full  mx-auto">
          {/* CARD 1 - Will be bottom of stack */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="absolute inset-x-8 md:inset-x-16 top-1/2 -translate-y-1/2"
          >
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
                Payraydoo bridges receivables and payables automating the flow
                of money in and out
              </h2>
            </div>
          </div>

          {/* CARD 2 - Middle */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="absolute inset-x-8 md:inset-x-16 top-1/2 -translate-y-1/2"
          >
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
          </div>

          {/* CARD 3 - Top of final stack */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="absolute inset-x-8 md:inset-x-16 top-1/2 -translate-y-1/2"
          >
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
        </div>
      </div>
    </section>
  );
}
