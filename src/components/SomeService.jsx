import React from "react";
import { useNavigate } from "react-router-dom";
import another from '../assets/sematice.mp4'

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Smart Support. Scalable Services. Real Results.
              </h1>
              <p className="text-lg mb-8">
                We provide reliable, scalable outsourcing and digital services—including data annotation,
                customer support, web development, and digital marketing—to help businesses grow efficiently and affordably.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full h-auto"
              >
                <source src={another} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Services Are you looking?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your trusted outsourcing and technology partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start">
            {/* Image Column with Button */}
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <div className="mb-8">
                <img
                  src="https://jumpx-react.envytheme.com/images/about-img.png"
                  alt="Digital Solutions"
                  className="max-w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              <div className="text-center md:text-left">
                <a
                  href="/services/digital-marketing"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Explore Our Marketing Services
                </a>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Elevate Your Digital Presence with Expert Solutions
              </h2>
              <p className="text-gray-600 mb-8">
                We specialize in crafting high-performance websites and results-driven digital marketing strategies.
                From responsive web design to targeted online campaigns, we help businesses thrive in the digital landscape.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Custom Web Development</h3>
                    <p className="text-gray-600">Tailored websites built with modern technologies for optimal performance and user experience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">SEO & Digital Marketing</h3>
                    <p className="text-gray-600">Comprehensive strategies to increase visibility, traffic, and conversions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">E-Commerce Solutions</h3>
                    <p className="text-gray-600">Powerful online stores designed to maximize sales and customer engagement.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Social Media Management</h3>
                    <p className="text-gray-600">Strategic content creation and campaign management across all platforms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  // Map service titles to their respective routes
  const getServiceRoute = (title) => {
    switch (title) {
      case "Data annotation":
        return "/services/annotation";
      case "Contact center solution":
        return "/services/contact-center";
      case "Digital Marketing Services":
        return "/services/digital-marketing";
      case "Technical Support & Consultations":
        return "/services/consultations";
      default:
        return "#";
    }
  };

  const handleClick = () => {
    const route = getServiceRoute(service.title);
    navigate(route);
  };

  return (
    <div
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
    </div>
  );
};

const services = [
  {
    title: "Data annotation",
    description: "We provide affordable human-powered data annotation services for artificial intelligence and machine learning",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
  },
  {
    title: "Contact center solution",
    description: "We're a call center agency that can help you with all your customer service needs.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    title: "Back Office Support",
    description: "Our team can help you save time and improve efficiency with our comprehensive back-office support services",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Technical Support & Consultations",
    description: "Whether you need help solving system issues, planning your next IT move, or improving digital operations, our team offers expert-level technical support and strategic consultation.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    title: "Website Development",
    description: "Whether you need a landing page or a full-featured platform, our developers design and build websites that are fast, mobile-friendly, and optimized for conversions.",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
  },
  {
    title: "Digital Marketing Services",
    description: "We offer tailored digital marketing strategies to help you attract, convert, and retain customers online. From content to campaigns, we align with your business goals to deliver measurable growth.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  }
];

export default LandingPage;