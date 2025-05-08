import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close all menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setIsServicesOpen(false);
  };

  const toggleServices = (e) => {
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-sm" ref={navRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <Link 
              to="/" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-transform hover:scale-[1.02] active:scale-95"
            >
              <img src={logo} alt="TaskGenie Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-6">
            <Link 
              to="/" 
              className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
            >
              Home
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Enhanced Desktop Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 group focus:outline-none"
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <svg 
                  className={`ml-1 h-5 w-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-blue-600' : 'text-gray-500'}`} 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ease-out"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-1.5 space-y-1">
                    <Link 
                      to="/services/annotation" 
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 group"
                    >
                      <span className="relative flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Data Annotation
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link 
                      to="/services/contact-center" 
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 group"
                    >
                      <span className="relative flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Contact Center Solutions
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link 
                      to="/services/digital-marketing" 
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 group"
                    >
                      <span className="relative flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Digital Marketing Services
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link 
                      to="/services/consultations" 
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 group"
                    >
                      <span className="relative flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Technical Support and Consultation Services
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
            >
              About
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact" 
              className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile menu button - UNCHANGED */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - COMPLETELY UNCHANGED */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 pb-3 pt-2">
            <Link 
              to="/" 
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={toggleServices}
                className="flex w-full items-center justify-between border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <svg 
                  className={`ml-1 h-5 w-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-blue-600' : 'text-gray-500'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="space-y-1 bg-blue-50/50 ml-4">
                  <Link 
                    to="/services/automation" 
                    className="block py-2 pl-6 pr-4 text-base font-medium text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Workflow Automation
                  </Link>
                  <Link 
                    to="/services/integration" 
                    className="block py-2 pl-6 pr-4 text-base font-medium text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    System Integration
                  </Link>
                  <Link 
                    to="/services/analytics" 
                    className="block py-2 pl-6 pr-4 text-base font-medium text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Data Analytics
                  </Link>
                  <Link 
                    to="/services/ai" 
                    className="block py-2 pl-6 pr-4 text-base font-medium text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AI Solutions
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;