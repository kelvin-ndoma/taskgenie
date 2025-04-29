import React from "react";

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                World's Leading Machine Learning Company
              </h1>
              <p className="text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices 
                gravida nuis commodo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition duration-300">
                  Learn More
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white py-3 px-6 rounded-lg font-medium transition duration-300">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://jumpx-react.envytheme.com/images/offer1.png" 
                alt="Machine Learning" 
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services For You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipiscing elit. Iur e architecto quae nt eaque sapiente 
              accusantium ad ut explicabo consequuntur fuga quiaem? Sint.
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
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://jumpx-react.envytheme.com/images/about-img.png" 
                alt="About Us" 
                className="max-w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We Complete Every Project With Extra Care As Customer Need
              </h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices 
                gravida. Risus commodo werra maecenas accumsan lucta vel.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Data Science</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet consectetur, adipiscing elit. Molina, maame ipsum praesentum culpa eppelita.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Data Engineer</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet consectetur, adipiscing elit. Molina, maame ipsum praesentum culpa eppelita.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Facing AI Challenges</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet consectetur, adipiscing elit. Molina, maame ipsum praesentum culpa eppelita.
                    </p>
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
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">
        Read More
      </a>
    </div>
  );
};

const services = [
  {
    title: "Robotics & Drones",
    description: "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
  },
  {
    title: "Virtually Reality",
    description: "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    title: "Blackchain Project",
    description: "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Image Processing",
    description: "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    title: "Order Management",
    description: "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
  },
  {
    title: "Machine Learning",
    description: "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  }
];

export default LandingPage;