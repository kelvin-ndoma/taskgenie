import React, { useState, useEffect } from "react";
import ai from "../assets/ai.webp"
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
                Your trusted outsourcing and digital services partner. We help businesses grow through affordable, high-quality services.
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
                <img 
                  src={ai}
                  alt="Business Team" 
                  className="rounded-xl shadow-xl w-full object-cover max-h-[400px] lg:max-h-none"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-indigo-100 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Our <span className="text-indigo-600">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              {isMobile ? "Comprehensive solutions for your business" : "High-quality services tailored to your business needs"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} isMobile={isMobile} />
            ))}
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

const FeatureCard = ({ feature, isMobile }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition duration-300">
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
        </svg>
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
      <p className="text-gray-600 mb-4 text-sm sm:text-base">
        {isMobile ? feature.shortDescription : feature.description}
      </p>
         </div>
  );
};

const StatItem = ({ value, label }) => (
  <div className="p-4 sm:p-6">
    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">{value}</div>
    <div className="text-gray-600 text-sm sm:text-base">{label}</div>
  </div>
);

const features = [
  {
    title: "Data Annotation",
    description: "With a skilled workforce and advanced tools, we help you build accurate training datasets for intelligent systems across industries.",
    shortDescription: "Focus on your business while we handle operations",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
  },
  {
    title: "Digital Marketing & Web development",
    description: "We power business growth with strategic digital marketing. From brand awareness to lead generation, our team uses data-driven strategies to drive measurable results.",
    shortDescription: "Complete digital solutions for your business",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  },
  {
    title: "Operational Support & Consultations",
    description: "Whatever your operational or digital challenge, we’re here to support you. Let’s talk about how our solutions can help your business thrive.",
    shortDescription: "Streamlined operations for better efficiency",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }
];

export default ResponsiveHomepage;