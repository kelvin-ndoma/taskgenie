import React from 'react';
import james from '../assets/James.jpg';
import kelvin from '../assets/kelvin.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-indigo-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-0 bottom-0 h-full w-1/3 bg-gradient-to-l from-white to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            The <span className="text-blue-300">Visionaries</span> Behind TaskGenie
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-blue-100 font-light leading-relaxed">
            Combining technical mastery with strategic vision to deliver exceptional results across data, digital, and operations.
          </p>
        </div>
      </section>

      {/* Company Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-20">
          <span className="inline-block mb-3 px-3 py-1 text-xs sm:text-sm font-semibold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wider">
            Our Mission
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Bridging the gap between <span className="text-blue-600">technology</span> and <span className="text-indigo-600">business</span>
          </h2>
          <div className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
            <p className="mb-4 sm:mb-6">
              TaskGenie was founded on the principle that businesses deserve partners who deeply understand both their operational challenges and the technological solutions available.
            </p>
            <p className="font-medium text-gray-700">
              We don't just provide services—we become an extension of your team.
            </p>
          </div>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-24">
          <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 transform hover:-translate-y-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 ml-3 sm:ml-4">Data Annotation</h3>
            </div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Precision matters in AI training. Our team delivers meticulously annotated datasets with rigorous quality control, helping you build more accurate machine learning models.
            </p>
          </div>

          <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500 transform hover:-translate-y-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="bg-indigo-100 p-2 sm:p-3 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8 text-indigo-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 ml-3 sm:ml-4">Digital Solutions</h3>
            </div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              From conversion-optimized websites to targeted ad campaigns, we implement strategies that drive measurable growth and maximize your digital ROI.
            </p>
          </div>

          <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 transform hover:-translate-y-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="bg-purple-100 p-2 sm:p-3 rounded-lg group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 ml-3 sm:ml-4">Operational Support</h3>
            </div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We identify bottlenecks in your workflows and implement solutions that enhance efficiency, reduce costs, and improve your team's productivity.
            </p>
          </div>
        </div>

        {/* Founders Section */}
        <section className="text-center mb-12 md:mb-16">
          <span className="inline-block mb-3 px-3 py-1 text-xs sm:text-sm font-semibold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wider">
            Our Leadership
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Meet the <span className="text-blue-600">Founders</span>
          </h2>
        </section>

        <div className="mx-auto space-y-12 md:space-y-24 mb-16 md:mb-28 px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Founder Row - James */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg md:shadow-xl">
            {/* Image Column */}
            <div className="lg:w-5/12 xl:w-1/2 flex justify-center">
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl md:rounded-2xl transform rotate-3"></div>
                <img
                  src={james}
                  alt="James Thomas"
                  className="relative h-full w-full rounded-xl md:rounded-2xl object-cover border-4 md:border-[6px] border-white shadow-lg md:shadow-xl"
                />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2.5 rounded-lg text-xs sm:text-sm md:text-base font-bold shadow-md md:shadow-lg">
                  AI/ML Specialist
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="lg:w-7/12 xl:w-1/2 lg:pl-6 md:pl-8 mt-6 lg:mt-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">James Thomas</h3>
              <p className="text-blue-600 text-lg sm:text-xl font-medium mt-2 mb-4 sm:mb-6">Co-Founder & Data Solutions Lead</p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                  Machine Learning
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
                  Data Annotation
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                  Computer Vision
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                  AI Training
                </span>
              </div>
              
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                With a Computer Science background and 5+ years specializing in machine learning, James leads our data annotation division with an uncompromising focus on precision. His expertise spans the entire AI training pipeline - from designing comprehensive annotation guidelines to implementing multi-stage quality control processes that ensure datasets are production-ready for enterprise AI applications.
              </p>
              
              <div className="flex items-center space-x-4 sm:space-x-5">
                <a href="https://www.linkedin.com/in/james-mwendwa-b99834347" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="GitHub">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Founder Row - Kelvin */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg md:shadow-xl">
            {/* Image Column */}
            <div className="lg:w-5/12 xl:w-1/2 flex justify-center">
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl md:rounded-2xl transform -rotate-3"></div>
                <img
                  src={kelvin}
                  alt="Kelvin Ndoma"
                  className="relative h-full w-full rounded-xl md:rounded-2xl object-cover border-4 md:border-[6px] border-white shadow-lg md:shadow-xl"
                />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 bg-indigo-600 text-white px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2.5 rounded-lg text-xs sm:text-sm md:text-base font-bold shadow-md md:shadow-lg">
                  Growth Expert
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="lg:w-7/12 xl:w-1/2 lg:pl-6 md:pl-8 mt-6 lg:mt-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Kelvin Ndoma</h3>
              <p className="text-indigo-600 text-lg sm:text-xl font-medium mt-2 mb-4 sm:mb-6">Co-Founder & Growth Architect</p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                  Digital Marketing
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
                  Web Development
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                  SEO Strategy
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                  Conversion Optimization
                </span>
              </div>
              
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Kelvin brings a unique combination of technical development skills and strategic marketing expertise to architect comprehensive growth solutions. With experience across the full digital stack, he implements data-driven campaigns that maximize ROI through precise audience targeting, conversion rate optimization, and performance analytics. His technical background enables seamless integration between marketing systems and core business platforms.
              </p>
              
              <div className="flex items-center space-x-4 sm:space-x-5">
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors" aria-label="Twitter">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors" aria-label="GitHub">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden mb-16 md:mb-24">
          <div className="p-6 sm:p-8 md:p-10">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-block mb-3 px-3 py-1 text-xs sm:text-sm font-semibold text-blue-700 bg-blue-100 rounded-full uppercase tracking-wider">
                Our Values
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">What we stand for</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="p-4 sm:p-6 rounded-lg md:rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900">Precision</h4>
                </div>
                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  We sweat the details because in data and digital, small errors create big problems. Every pixel, line of code, and data point matters.
                </p>
              </div>
              <div className="p-4 sm:p-6 rounded-lg md:rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-indigo-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900">Accountability</h4>
                </div>
                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  We own our work end-to-end and stand behind every deliverable. If we commit to something, you can consider it done.
                </p>
              </div>
              <div className="p-4 sm:p-6 rounded-lg md:rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-purple-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900">Innovation</h4>
                </div>
                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  We challenge assumptions and continuously improve our methods. The status quo is just a starting point for something better.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden">
          <div className="max-w-7xl mx-auto py-12 sm:py-16 px-6 sm:px-8 lg:px-12">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="mb-8 lg:mb-0">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 sm:mb-6">
                  <span className="block">Ready to elevate your business?</span>
                  <span className="block text-blue-200 font-light">Let's discuss how we can help.</span>
                </h2>
                <p className="max-w-3xl text-sm sm:text-base text-blue-100 leading-relaxed">
                  Whether you need annotated datasets, a high-converting website, or operational optimization, we've got you covered.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-center lg:justify-end">
                <div className="inline-flex rounded-md shadow">
                  <a href="#" className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <div className="inline-flex rounded-md shadow">
                  <a href="#" className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;