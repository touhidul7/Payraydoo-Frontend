import { useState, useEffect, useRef } from 'react';

export default function InvoiceFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const features = [
    {
      title: "Auto-send invoices",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=800&fit=crop",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Smart payment reminders",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=800&fit=crop",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Instant payment matching",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      title: "Real-time customer status",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
      color: "from-violet-500 to-violet-700"
    }
  ];

  const handleScroll = (e) => {
    const container = e.target;
    const scrollPercentage = container.scrollTop / (container.scrollHeight - container.clientHeight);
    const newIndex = Math.min(
      Math.floor(scrollPercentage * features.length),
      features.length - 1
    );
    setActiveIndex(newIndex);
  };

  const handleFeatureClick = (index) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const scrollHeight = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
      const targetScroll = (scrollHeight / (features.length - 1)) * index;
      scrollContainerRef.current.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container font-mont mt-20">
      
      <div className="content-wrapper">
        <div className="image-box">
          <div 
            className="scroll-container" 
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {features.map((feature, index) => (
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
        
        <div className="features-list">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-item"
              onClick={() => handleFeatureClick(index)}
            >
              <div className={`feature-indicator ${activeIndex === index ? 'active' : ''}`}></div>
              <div className={`feature-text ${activeIndex === index ? 'active' : ''}`}>
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}