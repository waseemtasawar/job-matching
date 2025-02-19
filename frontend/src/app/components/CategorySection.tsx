import React from "react";

const CategorySection = () => {
  return (
    <section className="py-12 bg-orange-50 text-center max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Choose Categories
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Browse different job categories and explore exciting opportunities
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Category Card 1 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition duration-300">
          <div className="text-4xl text-orange-600 mb-4">📢</div>
          <h3 className="text-xl font-bold text-gray-700">Marketing & Communication</h3>
          <p className="text-gray-500">58 Jobs Available</p>
        </div>

        {/* Category Card 2 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition duration-300">
          <div className="text-4xl text-orange-600 mb-4">🎨</div>
          <h3 className="text-xl font-bold text-gray-700">UI / UX Design</h3>
          <p className="text-gray-500">120 Jobs Available</p>
        </div>

        {/* Category Card 3 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition duration-300">
          <div className="text-4xl text-orange-600 mb-4">📈</div>
          <h3 className="text-xl font-bold text-gray-700">Finance Management</h3>
          <p className="text-gray-500">230 Jobs Available</p>
        </div>

        {/* Category Card 4 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition duration-300">
          <div className="text-4xl text-orange-600 mb-4">💻</div>
          <h3 className="text-xl font-bold text-gray-700">Web Development</h3>
          <p className="text-gray-500">100 Jobs Available</p>
        </div>

        {/* Category Card 5 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition duration-300">
          <div className="text-4xl text-orange-600 mb-4">🗂️</div>
          <h3 className="text-xl font-bold text-gray-700">Project Management</h3>
          <p className="text-gray-500">87 Jobs Available</p>
        </div>

        {/* Category Card 6 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition duration-300">
          <div className="text-4xl text-orange-600 mb-4">🤝</div>
          <h3 className="text-xl font-bold text-gray-700">Business & Consulting</h3>
          <p className="text-gray-500">23 Jobs Available</p>
        </div>

        {/* Category Card 7 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition duration-300">
          <div className="text-4xl text-orange-600 mb-4">🎨</div>
          <h3 className="text-xl font-bold text-gray-700">Graphic Designer</h3>
          <p className="text-gray-500">65 Jobs Available</p>
        </div>

        {/* Category Card 8 */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition duration-300">
          <div className="text-4xl text-orange-600 mb-4">🎥</div>
          <h3 className="text-xl font-bold text-gray-700">Video Editor</h3>
          <p className="text-gray-500">120 Jobs Available</p>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
