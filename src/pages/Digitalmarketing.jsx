import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  FaSearch, FaChartLine, FaHashtag, FaEnvelope, FaMobileAlt,
  FaLaptopCode, FaPenFancy, FaVideo, FaShoppingCart, FaBullseye,
  FaRobot, FaCalendarAlt, FaAd, FaUsers, FaLightbulb
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const DigitalMarketing = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility and rank higher on search engines with our comprehensive SEO strategies.",
      icon: <FaSearch className="text-purple-600" size={24} />,
      category: "marketing",
      tools: ["Ahrefs", "SEMrush", "Moz", "Google Search Console"]
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Drive targeted traffic through strategic paid campaigns on Google, Bing, and social platforms.",
      icon: <FaChartLine className="text-purple-600" size={24} />,
      category: "ads",
      tools: ["Google Ads", "Microsoft Advertising", "Facebook Ads Manager"]
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience across all major platforms with content that converts followers to customers.",
      icon: <FaHashtag className="text-purple-600" size={24} />,
      category: "marketing",
      tools: ["Hootsuite", "Buffer", "Sprout Social", "Later"]
    },
    {
      title: "Email Marketing Automation",
      description: "Convert leads with personalized, automated email sequences that nurture relationships.",
      icon: <FaEnvelope className="text-purple-600" size={24} />,
      category: "automation",
      tools: ["Mailchimp", "Klaviyo", "ActiveCampaign", "HubSpot"]
    },
    {
      title: "Marketing Automation",
      description: "Streamline your marketing workflows with powerful automation that saves time and increases conversions.",
      icon: <FaRobot className="text-purple-600" size={24} />,
      category: "automation",
      tools: ["Zapier", "Make (Integromat)", "Pardot", "Marketo"]
    },
    {
      title: "Content Strategy & Planning",
      description: "Strategic content calendars that align with your business goals and audience needs.",
      icon: <FaCalendarAlt className="text-purple-600" size={24} />,
      category: "strategy",
      tools: ["CoSchedule", "Trello", "Asana", "Airtable"]
    },
    {
      title: "Website Development",
      description: "Custom websites designed for performance, conversions, and search engine visibility.",
      icon: <FaLaptopCode className="text-purple-600" size={24} />,
      category: "development",
      tools: ["WordPress", "Webflow", "Shopify", "Custom CMS"]
    },
    {
      title: "Content Marketing",
      description: "Attract and retain customers through valuable, SEO-optimized content that builds authority.",
      icon: <FaPenFancy className="text-purple-600" size={24} />,
      category: "marketing",
      tools: ["Grammarly", "Clearscope", "Frase", "SurferSEO"]
    },
    {
      title: "Video Marketing",
      description: "Engage your audience with compelling video content for ads, social media, and your website.",
      icon: <FaVideo className="text-purple-600" size={24} />,
      category: "marketing",
      tools: ["Adobe Premiere", "Final Cut Pro", "Animoto", "InVideo"]
    },
    {
      title: "E-Commerce Solutions",
      description: "Build and optimize your online store for maximum sales and customer experience.",
      icon: <FaShoppingCart className="text-purple-600" size={24} />,
      category: "development",
      tools: ["Shopify", "WooCommerce", "BigCommerce", "Magento"]
    },
    {
      title: "Conversion Rate Optimization",
      description: "Turn more visitors into customers with data-driven improvements to your digital assets.",
      icon: <FaBullseye className="text-purple-600" size={24} />,
      category: "strategy",
      tools: ["Google Optimize", "Hotjar", "VWO", "OptinMonster"]
    },
    {
      title: "Social Media Advertising",
      description: "Precisely targeted ads that reach your ideal customers across social platforms.",
      icon: <FaAd className="text-purple-600" size={24} />,
      category: "ads",
      tools: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "TikTok Ads"]
    },
    {
      title: "Marketing Strategy",
      description: "Comprehensive digital marketing plans tailored to your business objectives.",
      icon: <FaLightbulb className="text-purple-600" size={24} />,
      category: "strategy",
      tools: ["Google Analytics", "Looker Studio", "SimilarWeb", "SpyFu"]
    },
    {
      title: "Influencer Marketing",
      description: "Leverage trusted voices in your industry to amplify your brand message.",
      icon: <FaUsers className="text-purple-600" size={24} />,
      category: "marketing",
      tools: ["Upfluence", "AspireIQ", "Grin", "Traackr"]
    }
  ];

  const filteredServices = activeFilter === 'all'
    ? services
    : services.filter(service => service.category === activeFilter);

  const stats = [
    { value: "3X", label: "Average ROI Increase" },
    { value: "87%", label: "Client Retention" },
    { value: "24/7", label: "Campaign Monitoring" }
  ];

  const processSteps = [
    {
      title: "Discovery & Strategy",
      description: "We analyze your business, competitors, and audience to create a customized digital roadmap",
      icon: "🔍"
    },
    {
      title: "Implementation",
      description: "Our team executes the strategy with precision across all selected channels",
      icon: "🛠️"
    },
    {
      title: "Optimization",
      description: "Continuous testing and refinement to maximize your results",
      icon: "📈"
    },
    {
      title: "Reporting & Analysis",
      description: "Transparent performance metrics with actionable insights",
      icon: "📊"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            <span className="text-purple-600">Digital Growth</span> Engine
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end digital marketing and technology solutions designed to accelerate your business growth,
            attract quality leads, and maximize your online revenue potential.
          </p>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-purple-600 text-white rounded-xl p-4 sm:p-6 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>


        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Our Digital Solutions
          </h2>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg border border-purple-600 ${activeFilter === 'all' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 hover:bg-purple-50'}`}
              >
                All Services
              </button>
              <button
                onClick={() => setActiveFilter('marketing')}
                className={`px-4 py-2 text-sm font-medium border-t border-b border-purple-600 ${activeFilter === 'marketing' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 hover:bg-purple-50'}`}
              >
                Marketing
              </button>
              <button
                onClick={() => setActiveFilter('ads')}
                className={`px-4 py-2 text-sm font-medium border-t border-b border-purple-600 ${activeFilter === 'ads' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 hover:bg-purple-50'}`}
              >
                Advertising
              </button>
              <button
                onClick={() => setActiveFilter('automation')}
                className={`px-4 py-2 text-sm font-medium border-t border-b border-purple-600 ${activeFilter === 'automation' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 hover:bg-purple-50'}`}
              >
                Automation
              </button>
              <button
                onClick={() => setActiveFilter('strategy')}
                className={`px-4 py-2 text-sm font-medium border-t border-b border-purple-600 ${activeFilter === 'strategy' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 hover:bg-purple-50'}`}
              >
                Strategy
              </button>
              <button
                onClick={() => setActiveFilter('development')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg border border-purple-600 ${activeFilter === 'development' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 hover:bg-purple-50'}`}
              >
                Development
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white p-6 rounded-xl shadow-md transition-all duration-300 border border-gray-100 ${hoveredCard === index ? 'shadow-lg border-purple-200' : ''}`}
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-purple-50 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-2">
                    Tools We Use
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-purple-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Our Proven 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-3">{step.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mb-16 p-8 bg-white rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold">John D.</h4>
                  <p className="text-gray-500 text-sm">E-Commerce Business</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Our online sales increased by 240% within 6 months of working with their team. Their PPC and conversion optimization strategies completely transformed our business."
              </p>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">
                  SM
                </div>
                <div>
                  <h4 className="font-semibold">Sarah M.</h4>
                  <p className="text-gray-500 text-sm">B2B SaaS Company</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The content marketing strategy they developed helped us establish thought leadership in our industry and generated over 300 qualified leads in the first quarter."
              </p>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to transform your digital presence?
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Schedule a free consultation with our digital strategists to discuss your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Get a Free Strategy Session
              </motion.button>
            </Link>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default DigitalMarketing;