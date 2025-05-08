import React from 'react';
import { 
  FaHeadset, 
  FaComments, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaCogs, 
  FaFacebook, 
  FaChartLine, 
  FaUserShield 
} from 'react-icons/fa';

const ContactCenter = () => {
  const services = [
    {
      title: "24/7 Omnichannel Support",
      description: "Round-the-clock customer service across all communication channels.",
      icon: <FaHeadset className="text-blue-600" size={24} />,
      stats: "98% availability"
    },
    {
      title: "Call Handling & Escalation",
      description: "Professional call management with priority routing for urgent issues.",
      icon: <FaPhoneAlt className="text-blue-600" size={24} />,
      stats: "90% call resolution rate"
    },
    {
      title: "Live Chat & Email Support",
      description: "Instant responses and detailed written assistance for customer queries.",
      icon: <FaEnvelope className="text-blue-600" size={24} />,
      stats: "<5 min response time"
    },
    {
      title: "Social Media Management",
      description: "Brand-consistent engagement across all social platforms.",
      icon: <FaFacebook className="text-blue-600" size={24} />,
      stats: "4.8/5 satisfaction"
    },
    {
      title: "CRM Integration",
      description: "Seamless connection with your existing customer relationship systems.",
      icon: <FaCogs className="text-blue-600" size={24} />,
      stats: "100% compatibility"
    },
    {
      title: "Technical Helpdesk",
      description: "Specialized support for product troubleshooting and technical issues.",
      icon: <FaUserShield className="text-blue-600" size={24} />,
      stats: "85% first-call resolution"
    }
  ];

  const features = [
    {
      title: "AI-Powered Routing",
      description: "Smart call distribution based on customer needs and agent expertise",
      icon: <FaChartLine className="text-blue-500" size={20} />
    },
    {
      title: "Multilingual Support",
      description: "Agents fluent in 20+ languages for global customer bases",
      icon: <FaComments className="text-blue-500" size={20} />
    },
    {
      title: "Sentiment Analysis",
      description: "Real-time mood detection to enhance customer interactions",
      icon: <FaChartLine className="text-blue-500" size={20} />
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive reporting on KPIs and customer satisfaction metrics",
      icon: <FaChartLine className="text-blue-500" size={20} />
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Always online</span> to keep your business in line
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our contact center solutions deliver responsive, scalable customer service that builds brand loyalty and drives satisfaction.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-blue-600 text-white rounded-xl p-6 mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">24/7</div>
            <div className="text-sm md:text-base">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">95%</div>
            <div className="text-sm md:text-base">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">150+</div>
            <div className="text-sm md:text-base">Agents</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">5s</div>
            <div className="text-sm md:text-base">Avg. Answer Speed</div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Comprehensive Contact Center Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="text-sm font-medium text-blue-600">{service.stats}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Advanced Contact Center Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-blue-600 mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Our Technology Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Amazon Connect",
              "Zendesk",
              "Salesforce",
              "Twilio",
              "Freshdesk",
              "Genesys",
              "Five9",
              "Zoho"
            ].map((tech, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to transform your customer experience?
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Our contact center specialists are ready to design a solution tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              Get a Free Consultation
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300 border border-blue-600 shadow-sm hover:shadow-md">
              View Client Success Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCenter;