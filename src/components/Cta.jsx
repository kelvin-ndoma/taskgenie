import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const CTA = () => (
  <section className="w-full bg-white text-gray-900 py-24 px-4 border-t border-b border-gray-200">
    <div className="w-full max-w-none mx-auto text-center">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Ready to Scale Your Annotation Projects?
        </h3>
        <p className="mb-10 text-xl text-gray-600 max-w-3xl mx-auto">
          Contact us for custom pricing, demos, or partnership opportunities.
        </p>
        <Link
          to="contact"
          className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span className="group-hover:underline">Contact Us</span>
          <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        
        {/* Optional decorative elements - now in blue to match button */}
        <div className="mt-12 flex justify-center space-x-4">
          {[1, 2, 3].map((item) => (
            <div 
              key={item}
              className="w-2 h-2 bg-blue-600 rounded-full opacity-20 animate-pulse"
              style={{ animationDelay: `${item * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CTA;