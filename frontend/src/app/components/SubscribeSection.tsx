import React from 'react';

const SubscribeSection = () => {
  return (
    <section
      className="relative bg-orange-600 py-12 text-white max-w-7xl mx-auto"
      
    >
      {/* Overlay to make text and form stand out */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-40"></div>

      <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center px-6 sm:px-12 max-w-full w-full">
        {/* Text Section */}
        <div className="mb-6 sm:mb-0 sm:text-left text-center w-full sm:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Never Want to Miss Any Job/Course News?
          </h2>
        </div>

        {/* Subscription Form */}
        <div className="flex justify-center items-center space-x-4 w-full sm:w-1/2">
          <input
            type="email"
            placeholder="Enter your email address here..."
            className="px-6 py-3 rounded-l-full text-gray-700 w-full sm:w-2/3 lg:w-96 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <button
            className="px-6 py-3 bg-white text-orange-600 rounded-r-full font-medium hover:bg-orange-100 transition duration-300"
          >
            Subscribe
          </button>
        </div>

        {/* Image Section (Left) */}
       
      </div>
    </section>
  );
};

export default SubscribeSection;
