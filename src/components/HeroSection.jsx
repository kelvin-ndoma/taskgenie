import React, { useState, useEffect } from "react";
import video from "../assets/video.mp4"
import { Link } from 'react-router-dom';

// Custom hook for window size detection
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const ResponsiveHomepage = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isSmallMobile = width < 640;

  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="block">Welcome to</span>
                <span className="text-indigo-600">TaskGenie</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 max-w-xl">
                Task Genie is a dynamic Business Process Outsourcing (BPO) company that empowers businesses with intelligent support solutions tailored for growth. With a keen focus on operational excellence, digital innovation, and AI-readiness, Task Genie delivers services that help organizations scale efficiently and effectively in today’s competitive market.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg text-center text-sm sm:text-base"
                >
                  {isSmallMobile ? "Get Started" : "Learn More"}
                </Link>
                {!isSmallMobile && (
                  <Link
                    to="/services/annotation"
                    className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-6 rounded-lg transition duration-300 text-center text-sm sm:text-base"
                  >
                    Our Services
                  </Link>
                )}
              </div>
            </div>

            {/* Image/Illustration */}
            <div className={`lg:w-1/2 order-1 lg:order-2 ${isSmallMobile ? 'w-full' : ''}`}>
              <div className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-xl shadow-xl w-full object-cover max-h-[400px] lg:max-h-none"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-indigo-100 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
            <StatItem value="95%" label={isSmallMobile ? "Satisfaction" : "Client Satisfaction"} />
            <StatItem value="24/7" label="Support" />
            <StatItem
              value={isSmallMobile ? "10×" : "10x"}
              label={isSmallMobile ? "Efficiency" : "Operational Efficiency"}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}

    </div>
  );
};

const StatItem = ({ value, label }) => (
  <div className="p-4 sm:p-6">
    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">{value}</div>
    <div className="text-gray-600 text-sm sm:text-base">{label}</div>
  </div>
);
export default ResponsiveHomepage;