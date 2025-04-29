import React, { useState, useEffect } from "react";

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
        <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="block">Specialized</span>
                <span className="text-indigo-600">
                  {isSmallMobile ? "AI" : "Artificial Intelligence"} 
                </span>
                <span>Startup</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 max-w-xl">
                {isMobile ? (
                  "Advanced AI solutions tailored to your business needs. Transform your operations today."
                ) : (
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                  "incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices " +
                  "gravida risus commodo."
                )}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg text-sm sm:text-base">
                  {isSmallMobile ? "Learn" : "Learn More"}
                </button>
                <button className="border-2 border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300 text-sm sm:text-base">
                  {isSmallMobile ? "Contact" : "Connect Us"}
                </button>
              </div>
            </div>
            
            {/* Image/Illustration - Hidden on smallest screens if needed */}
            <div className={`lg:w-1/2 mt-8 sm:mt-0 ${isSmallMobile ? '' : ''}`}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="AI Technology" 
                  className="rounded-xl shadow-xl w-full object-cover"
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
              Our <span className="text-indigo-600">AI Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              {isMobile ? "Cutting-edge AI for your business" : "Cutting-edge artificial intelligence tailored to your business needs"}
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <StatItem value="95%" label={isSmallMobile ? "Accuracy" : "Accuracy Rate"} />
            <StatItem value="50+" label={isSmallMobile ? "Clients" : "Happy Clients"} />
            <StatItem value="24/7" label="Support" />
            <StatItem 
              value={isSmallMobile ? "10×" : "10x"} 
              label={isSmallMobile ? "Speed" : "Faster Processing"} 
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
      <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300 inline-flex items-center text-sm sm:text-base">
        Learn more
        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
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
    title: "Machine Learning",
    description: "Advanced algorithms that learn and improve from experience without being explicitly programmed.",
    shortDescription: "Self-improving algorithms for your business",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    title: "Computer Vision",
    description: "AI that can identify and process objects in images and videos like human vision.",
    shortDescription: "Visual recognition systems",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
  },
  {
    title: "Natural Language",
    description: "Systems that understand, interpret, and generate human language naturally.",
    shortDescription: "Human-like language processing",
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
  }
];

export default ResponsiveHomepage;