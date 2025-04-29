import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-10 px-4 md:px-20">
    <div className="max-w-6xl mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} ImageAnnotate Agency. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
