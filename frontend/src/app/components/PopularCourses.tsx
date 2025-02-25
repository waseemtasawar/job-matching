import React from "react";

const PopularCourses = () => {
  return (
    <section className="py-12 bg-orange-50 text-center max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Popular Courses
      </h2>

      {/* Categories */}
      <div className="mb-6">
        <button className="px-6 py-2 bg-orange-600 text-white rounded-full mx-2">All</button>
        <button className="px-6 py-2 bg-white text-gray-800 rounded-full border border-gray-300 mx-2 hover:bg-orange-100">Sales and Marketing</button>
        <button className="px-6 py-2 bg-white text-gray-800 rounded-full border border-gray-300 mx-2 hover:bg-orange-100">Banking Finance</button>
        <button className="px-6 py-2 bg-white text-gray-800 rounded-full border border-gray-300 mx-2 hover:bg-orange-100">Personal Development</button>
        <button className="px-6 py-2 bg-white text-gray-800 rounded-full border border-gray-300 mx-2 hover:bg-orange-100">IT - Information Technology</button>
        <button className="px-6 py-2 bg-white text-gray-800 rounded-full border border-gray-300 mx-2 hover:bg-orange-100">HR - Human Resource</button>
       
      </div>
      

      {/* Courses Scroll */}
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-block p-4 w-80">
          {/* Course 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 m-2 w-80">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-700">Backend Developer</h3>
              <span className="text-orange-600">4.5</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">TestPrepTraining</p>
            <p className="text-gray-500 text-xs mb-4">Duration: 51 Hours | Mode: Online</p>
            <p className="text-xl font-bold mb-4">₹12999</p>
            <div className="flex justify-between">
              <button className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-500 transition duration-300">Explore</button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-500 transition duration-300">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="inline-block p-4 w-80">
          {/* Course 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 ml-14 w-80">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-700">Backend Developer in Node.js</h3>
              <span className="text-orange-600">4.5</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">TestPrepTraining</p>
            <p className="text-gray-500 text-xs mb-4">Duration: 20 Hours | Mode: Online</p>
            <p className="text-xl font-bold mb-4">₹12999</p>
            <div className="flex justify-between">
              <button className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-500 transition duration-300">Explore</button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-500 transition duration-300">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="inline-block p-4 w-80">
          {/* Course 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 ml-28 w-80">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-700">Backend Developer in Node.js</h3>
              <span className="text-orange-600">4.5</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">TestPrepTraining</p>
            <p className="text-gray-500 text-xs mb-4">Duration: 41 Hours | Mode: Online</p>
            <p className="text-xl font-bold mb-4">₹12999</p>
            <div className="flex justify-between">
              <button className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-500 transition duration-300">Explore</button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-500 transition duration-300">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button className="px-6 py-2 ml-10 bg-white text-orange-600 rounded-full border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition duration-300">
          View All
        </button>
      </div>
    </section>
  );
};

export default PopularCourses;
