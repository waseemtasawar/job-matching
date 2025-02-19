import React from "react";

const CoolPlacesToWork = () => {
  return (
    <section className="py-12 bg-white text-center max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Cool Places to Work
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {/* Company 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="/images/arita-birla.png" // Replace with actual logo image path
            alt="Arita Birla"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Company 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="/images/infosys.png" // Replace with actual logo image path
            alt="Infosys"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Company 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="/images/capgemini.png" // Replace with actual logo image path
            alt="Capgemini"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Company 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="/images/teleperformance.png" // Replace with actual logo image path
            alt="Teleperformance"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Company 5 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="/images/sbi-life.png" // Replace with actual logo image path
            alt="SBI Life"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CoolPlacesToWork;
