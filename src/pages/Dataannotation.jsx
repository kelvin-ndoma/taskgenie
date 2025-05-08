import React from 'react';
import { FiLayers, FiTarget, FiCode, FiCamera, FiDatabase, FiCheckCircle } from 'react-icons/fi';

const DataAnnotation = () => {
  const services = [
    {
      title: "Bounding Box & Cuboid Annotation",
      description: "Accurate detection of objects in images and videos, including occlusion and overlapping scenarios.",
      detailedDescription: "Our bounding box annotation service provides pixel-perfect rectangular demarcations around objects of interest. For 3D applications, we offer cuboid annotation that captures depth information.",
      icon: <FiLayers className="text-indigo-600" size={24} />,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "image",
      useCases: ["Autonomous vehicles", "Retail analytics", "Medical imaging", "Surveillance"]
    },
    {
      title: "3D Point Cloud & LiDAR Annotation",
      description: "Bounding cuboids and segmentation of LiDAR datasets for autonomous systems and spatial analysis.",
      detailedDescription: "Specializing in 3D point cloud annotation, we provide precise labeling for LiDAR data used in autonomous vehicles, robotics, and geospatial applications.",
      icon: <FiTarget className="text-indigo-600" size={24} />,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "3d",
      useCases: ["Autonomous navigation", "Robotics", "Urban planning", "Aerial mapping"]
    },
    {
      title: "Keypoint / Landmark Annotation",
      description: "Detects movement and shape variations. Ideal for facial recognition, motion tracking, and more.",
      detailedDescription: "Our keypoint annotation service marks specific points of interest with pixel-level precision for facial recognition, pose estimation, and gesture recognition.",
      icon: <FiCode className="text-indigo-600" size={24} />,
      image: "https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "image",
      useCases: ["Facial recognition", "Sports analytics", "Medical diagnostics", "AR/VR"]
    },
    {
      title: "Polygonal Annotation",
      description: "Annotates irregular or complex objects by plotting precise points across any shape.",
      detailedDescription: "For objects that don't fit within simple bounding boxes, our polygonal annotation provides precise segmentation by plotting exact contours of objects.",
      icon: <FiCamera className="text-indigo-600" size={24} />,
      image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "image",
      useCases: ["Medical imaging", "Satellite imagery", "Agricultural monitoring", "Defect detection"]
    },
    {
      title: "Semantic Segmentation",
      description: "Pixel-level classification for detailed scene understanding and object boundaries.",
      detailedDescription: "Our semantic segmentation service classifies every pixel in an image to different classes, providing detailed understanding of scenes and precise object boundaries.",
      icon: <FiDatabase className="text-indigo-600" size={24} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "video",
      useCases: ["Autonomous driving", "Medical imaging", "Satellite analysis", "Industrial inspection"]
    },
    {
      title: "Text & NLP Annotation",
      description: "Entity recognition, sentiment analysis, and text classification for language models.",
      detailedDescription: "We provide comprehensive text annotation services including named entity recognition, sentiment analysis, intent classification, and more for NLP applications.",
      icon: <FiCode className="text-indigo-600" size={24} />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "text",
      useCases: ["Chatbots", "Search engines", "Content moderation", "Legal document analysis"]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            AI Training Data Solutions
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Precision Data Annotation Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your AI development with our human-powered data annotation platform. 
            We combine cutting-edge tools with rigorous quality control to deliver training 
            data that improves model accuracy.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-2xl md:text-3xl font-bold text-indigo-600">10M+</div>
            <div className="text-sm md:text-base text-gray-500">Data Points</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-2xl md:text-3xl font-bold text-indigo-600">99.5%</div>
            <div className="text-sm md:text-base text-gray-500">Accuracy</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-2xl md:text-3xl font-bold text-indigo-600">50+</div>
            <div className="text-sm md:text-base text-gray-500">Projects</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-2xl md:text-3xl font-bold text-indigo-600">24/7</div>
            <div className="text-sm md:text-base text-gray-500">Support</div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-48 sm:h-40 md:h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg md:text-xl font-semibold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start mb-3">
                  <div className="p-2 bg-indigo-50 rounded-lg mr-3">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 text-sm mb-3">{service.detailedDescription}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm md:text-base mb-2">Use Cases:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {service.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-0.5 mr-1.5 flex-shrink-0 text-sm" />
                          <span className="text-gray-600 text-xs md:text-sm">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-indigo-50 rounded-xl p-6 mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Quality Assurance Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-indigo-600 font-bold text-lg mb-1">1</div>
              <h3 className="font-semibold text-base mb-1">Project Setup</h3>
              <p className="text-gray-600 text-sm">Custom guidelines and tool configuration</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-indigo-600 font-bold text-lg mb-1">2</div>
              <h3 className="font-semibold text-base mb-1">Annotation</h3>
              <p className="text-gray-600 text-sm">Trained annotators label your data</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-indigo-600 font-bold text-lg mb-1">3</div>
              <h3 className="font-semibold text-base mb-1">Quality Check</h3>
              <p className="text-gray-600 text-sm">QA specialists review all work</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-indigo-600 font-bold text-lg mb-1">4</div>
              <h3 className="font-semibold text-base mb-1">Delivery</h3>
              <p className="text-gray-600 text-sm">Formatted datasets delivered</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Ready to enhance your AI models?
          </h2>
          <p className="text-gray-600 text-base mb-5 max-w-2xl mx-auto">
            Get a free consultation with our data annotation experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 text-sm md:text-base rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              Request a Quote
            </button>
            <button className="bg-white hover:bg-gray-50 text-indigo-600 font-medium py-2 px-6 text-sm md:text-base rounded-lg transition-colors duration-300 border border-indigo-600 shadow-sm hover:shadow-md">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnnotation;