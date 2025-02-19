import React from 'react';
import Image from 'next/image';
import ImageAirbnb from '../../../public/Airbnb_Logo.png'
import ImageSlack from '../../../public/slack.png'
import ImageGoogle from '../../../public/google.png'
import ImageMicrosoft from '../../../public/mircosoft.png'
const CompanyLogos = () => {
  return (
    <section className="text-center py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Join Most Well Known <span className="text-orange-600">Companies</span> Around The World
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Slack Logo */}
        <div className="w-28 h-28 flex items-center justify-center">
          <Image
            src={ImageSlack} // Replace with the actual path to your image
            alt="Slack Logo"
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>
        {/* Microsoft Logo */}
        <div className="w-28 h-28 flex items-center justify-center">
          <Image
            src={ImageMicrosoft} // Replace with the actual path to your image
            alt="Microsoft Logo"
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>
        {/* Google Logo */}
        <div className="w-28 h-28 flex items-center justify-center">
          <Image
            src={ImageGoogle} // Replace with the actual path to your image
            alt="Google Logo"
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>
        {/* Airbnb Logo */}
        <div className="w-28 h-28 flex items-center justify-center">
          <Image
            src={ImageAirbnb} // Replace with the actual path to your image
            alt="Airbnb Logo"
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
