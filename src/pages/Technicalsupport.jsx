import React from 'react';
import { 
  FaServer, FaShieldAlt, FaCloud, FaDesktop, 
  FaHeadset, FaDatabase, FaFileAlt, FaSearch,
  FaEnvelope, FaClipboardList, FaUsersCog
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const TechnicalSupport = () => {
  const services = [
    {
      title: "Remote Helpdesk Support",
      description: "24/7 technical assistance for your team with fast response times and expert solutions.",
      icon: <FaHeadset className="text-blue-600" size={24} />,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    },
    {
      title: "Infrastructure Consulting",
      description: "Optimize your IT infrastructure for performance, scalability, and cost-efficiency.",
      icon: <FaServer className="text-blue-600" size={24} />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
    },
    {
      title: "Cloud Solutions",
      description: "Migrate, optimize, and secure your cloud environment across all major platforms.",
      icon: <FaCloud className="text-blue-600" size={24} />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80"
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive protection against threats with proactive monitoring and rapid response.",
      icon: <FaShieldAlt className="text-blue-600" size={24} />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    },
    {
      title: "System Migrations",
      description: "Seamless transition to new platforms with minimal downtime and data integrity.",
      icon: <FaDatabase className="text-blue-600" size={24} />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
    },
    {
      title: "Hardware Assessments",
      description: "Optimize your hardware investments with expert evaluations and recommendations.",
      icon: <FaDesktop className="text-blue-600" size={24} />,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    }
  ];

  const stats = [
    { value: "24/7", label: "Support Availability" },
    { value: "<30 min", label: "Average Response Time" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "100+", label: "Satisfied Clients" }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80)" }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Technical Support</span> & IT Consulting
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Keep your systems secure and your business agile with expert IT support and advisory services.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white text-blue-900 rounded-xl p-6 mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 shadow-lg"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Our IT Support Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="h-full w-full bg-gradient-to-t from-blue-900/70 via-blue-900/30 to-transparent flex items-start p-4">
                    <div className="p-2 bg-blue-600 rounded-lg text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Back-Office Services Section */}
        <div className="mb-16 bg-blue-50 rounded-xl p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🗂</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Back-Office Services
                </h2>
              </div>
              <p className="text-gray-700 mb-6">
                Maximize efficiency by outsourcing repetitive, time-consuming operational tasks to our expert team.
              </p>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <h3 className="font-semibold text-lg">We Handle:</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <FaFileAlt className="text-blue-500 mr-2" />
                    Data entry and validation
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="text-blue-500 mr-2" />
                    Direct mail services
                  </li>
                  <li className="flex items-center">
                    <FaSearch className="text-blue-500 mr-2" />
                    Online and offline research
                  </li>
                  <li className="flex items-center">
                    <FaClipboardList className="text-blue-500 mr-2" />
                    Form processing and transcription
                  </li>
                  <li className="flex items-center">
                    <FaUsersCog className="text-blue-500 mr-2" />
                    CRM & data management
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <span className="text-blue-600 mr-2">🧩</span>
                  <h3 className="font-semibold text-lg">Why Work With Us:</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Tailored service packages
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Experienced, professional teams
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Streamlined onboarding
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Ongoing quality assurance and training
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 relative rounded-xl overflow-hidden min-h-64">
              <div 
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)" }}
              >
                <div className="h-full w-full bg-gradient-to-t from-blue-900/70 via-blue-900/40 to-transparent flex items-end p-6">
                  <p className="text-white text-lg font-medium">
                    Outsource the busywork. Focus on the big picture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IT Consulting Section */}
        <div className="mb-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 relative rounded-xl overflow-hidden min-h-64">
              <div 
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80)" }}
              ></div>
            </div>
            
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  IT Consulting Services
                </h2>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <span className="text-blue-600 mr-2">🔐</span>
                  <h3 className="font-semibold text-lg">Services Include:</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Remote helpdesk support
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Infrastructure consulting
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    System migrations & upgrades
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Cloud and cybersecurity solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Software & hardware assessments
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    On-demand technical troubleshooting
                  </li>
                </ul>
              </div>
              
              <p className="text-lg text-blue-800 font-medium">
                Get peace of mind with a tech partner that speaks your language.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-xl p-8 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to streamline your IT operations?
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Schedule a consultation with our technical experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Book a Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 border border-white shadow-sm hover:shadow-md"
            >
              View Service Plans
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnicalSupport;