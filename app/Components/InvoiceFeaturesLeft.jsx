import { useState, useRef } from 'react';

export default function InvoiceFeaturesLeft() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const payableFeatures = [
    {
      title: "Capture invoices instantly",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Validate with precision",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Approvals that move fast",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      title: "One-click payments",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
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
    <div className="container">
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
    
          padding: 40px 20px;
        }

        .content-wrapper {
          display: flex;
          align-items: center;
          gap: 100px;
          max-width: 1600px;
          width: 100%;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          flex-shrink: 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 32px 0;
          border-bottom: 1px solid #e5e5e5;
          cursor: pointer;
          transition: all 0.3s ease;
        }

    

        .feature-item:first-child {
          padding-top: 0;
        }

        .feature-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .feature-indicator {
          width: 5px;
          height: 60px;
          background: #d1d5db;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .feature-indicator.active {
          background: linear-gradient(180deg,rgba(0, 247, 255, 1) 0%, rgba(0, 250, 242, 1) 25%, rgba(52, 124, 247, 1) 59%, rgba(152, 66, 233, 1) 87%);
          
          
        }

        .feature-text {
          font-size: 35px;
          font-weight: 500;
          color: black;
          letter-spacing: -0.02em;
          line-height: 1.2;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .feature-text.active {
          color: #1f2937;
        }

        .image-box {
          flex: 1;
          height: 520px;
          border-radius: 32px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
        }

        .scroll-container {
          width: 100%;
          height: 100%;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scroll-container::-webkit-scrollbar {
          display: none;
        }

        .scroll-section {
          width: 100%;
          height: 100%;
          scroll-snap-align: start;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.85) 0%, rgba(124, 58, 237, 0.85) 100%);
          z-index: 1;
          transition: opacity 0.3s ease;
        }

        .image-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .scroll-hint {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 14px;
          z-index: 2;
          opacity: 0.8;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        @media (max-width: 1400px) {
          .content-wrapper {
            gap: 80px;
          }

          .feature-text {
            font-size: 38px;
          }

          .image-box {
            height: 450px;
          }
        }

        @media (max-width: 1200px) {
          .content-wrapper {
            gap: 60px;
          }

          .feature-text {
            font-size: 32px;
          }

          .image-box {
            height: 400px;
          }
        }

        @media (max-width: 968px) {
          .content-wrapper {
            flex-direction: column-reverse;
            gap: 60px;
          }

          .image-box {
            width: 100%;
            max-width: 700px;
            height: 400px;
          }

          .features-list {
            width: 100%;
          }

          .feature-text {
            white-space: normal;
          }
        }

        @media (max-width: 640px) {
          .image-box {
            height: 300px;
          }

          .feature-text {
            font-size: 26px;
          }

          .feature-indicator {
            height: 60px;
          }

          .feature-indicator.active {
            height: 65px;
          }

          .feature-item {
            padding: 24px 0;
          }
        }
      `}</style>

      <div className="content-wrapper">
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
      </div>
    </div>
  );
}