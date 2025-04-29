import React from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => (
  <section className="bg-blue-600 text-white py-20 px-4 md:px-20">
    <div className="max-w-5xl mx-auto text-center">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6">
        Ready to Scale Your Annotation Projects?
      </h3>
      <p className="mb-8 text-lg">
        Contact us for custom pricing, demos, or partnership opportunities.
      </p>
      <a
        href="#contact"
        className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-2xl hover:bg-gray-100 transition"
      >
        Contact Us <ArrowRight className="ml-2 w-5 h-5" />
      </a>
    </div>
  </section>
);

export default CTA;
