'use client';
import React, { useState, useEffect } from 'react';
import ButtonAnimated from '../Components/ButtonAnimated';
import Image from 'next/image';

function BlogHeroSlider() {
  const SliderData = [
    {
      id: 1,
      title: 'Reduce Cost By 50%',
      text: 'Payraydoo orchestrates AR & AP end to end inside your Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quae quia excepturi. Natus vitae accusantium distinctio laudantium molestiae dolorum velit iusto dignissimos beatae id magni repellendus, delectus neque veritatis vel.',
      img: 'https://images.pexels.com/photos/7658355/pexels-photo-7658355.jpeg',
    },
    {
      id: 2,
      title: 'Automate Your Workflow',
      text: 'Boost productivity with seamless automation and real-time insights. Dolor sit amet consectetur adipisicing elit. Facilis, cumque.',
      img: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
    },
    {
      id: 3,
      title: 'Enhance Team Collaboration',
      text: 'Empower teams to collaborate efficiently across finance and operations. Ipsum dolor sit amet consectetur adipisicing elit.',
      img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    },
    {
      id: 4,
      title: 'Accelerate Growth',
      text: 'Scale confidently with data-driven decisions and streamlined AR/AP management. Lorem ipsum dolor sit amet.',
      img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    },
    {
      id: 5,
      title: 'Simplify Your Finance',
      text: 'Experience end-to-end simplicity in your financial processes. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const handleHeroText = () => setExpanded(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => {
  //       if (prev >= 4) {
  //         clearInterval(interval);
  //         return prev = 0;
  //       }
  //       return prev + 1;
  //     });
  //   }, 500);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev >= 4 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full'>
      {/* slider box */}
      <div
  className="flex transition-transform duration-700 ease-in-out w-full"
  style={{ transform: `translateX(-${current * 100}%)` }}
>
  {SliderData.map((slide, index) => (
    <div
      key={slide.id}
      className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16 space-y-8 lg:space-y-0 mx-auto w-full shrink-0 px-4 lg:px-0"
    >
      {/* slider image */}
      <div className="animo-border w-full lg:w-auto">
        <Image
          className="rounded-3xl w-full lg:w-[600px] h-auto lg:h-[440px] aspect-video object-cover"
          width={600}
          height={500}
          src={slide.img}
          alt={`slide-${index}`}
        />
      </div>

      {/* slider content */}
      <div className="w-full lg:w-[35%] font-mont text-center lg:text-left px-4 lg:px-0">
        <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 lg:mb-6">
          {slide.title}
        </h3>
        <p className="text-white text-base sm:text-lg md:text-lg lg:text-xl font-medium mb-4 lg:mb-6">
          {expanded
            ? slide.text
            : `${slide.text.substring(0, 53)} ... `}
          {!expanded && (
            <button
              onClick={handleHeroText}
              className="underline cursor-pointer"
            >
              Read More
            </button>
          )}
        </p>
        <ButtonAnimated content={'Request a Demo For Free'} />
      </div>
    </div>
  ))}
</div>

      {/* slider mover */}
      <div className="slider-mover flex gap-2.5 justify-center mt-8">
        {SliderData.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 w-14 rounded-2xl cursor-pointer transition-all ${
              current === i
                ? 'bg-amber-50 animo-gradient scale-110'
                : 'bg-white/60 hover:bg-white/80'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}


export default BlogHeroSlider;