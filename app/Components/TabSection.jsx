import { useState, useEffect, useRef } from 'react';

export default function TabSection({data, dirrection="row"}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);



  const handleScroll = (e) => {
    const container = e.target;
    const scrollPercentage = container.scrollTop / (container.scrollHeight - container.clientHeight);
    const newIndex = Math.min(
      Math.floor(scrollPercentage * data.length),
      data.length - 1
    );
    setActiveIndex(newIndex);
  };

  const handleFeatureClick = (index) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const scrollHeight = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
      const targetScroll = (scrollHeight / (data.length - 1)) * index;
      scrollContainerRef.current.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className=" font-mont lg:mt-20 mt-6">
      
      <div className={`flex lg:flex-${dirrection} flex-col items-center lg:gap-16 gap-6 w-full mb-8`}>
        <div className="image-box h-[510px] lg:w-1/2 w-full">
          <div 
            className="scroll-container" 
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {data.map((feature, index) => (
              <div key={index} className="scroll-section">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="image-bg"
                />
                <div className="gradient-overlay" />
                {index === 0 && (
                  <div className="scroll-hint">↓ Scroll to explore</div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="features-list w-full lg:w-1/2">
          {data.map((feature, index) => (
            <div 
              key={index}
              className="feature-item lg:py-7 py-2"
              onClick={() => handleFeatureClick(index)}
            >
              <div className={`feature-indicator lg:w-[5px] w-[3px] h-[30px] lg:h-[60px] ${activeIndex === index ? 'active' : ''}`}></div>
              <div className={`feature-text text-[18px] lg:text-[30px] font-medium ${activeIndex === index ? 'active' : ''}`}>
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}