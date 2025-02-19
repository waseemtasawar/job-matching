"use client"
import React from "react";
import Image from "next/image";
import ImageHero from '../../../public/Image-herro.png'

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-8 bg-orange-50 space-y-8 md:space-y-0 max-w-7xl mx-auto">
      {/* Content on the left */}
      <div className="text-center md:text-left space-y-4 md:space-y-6 flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black transition-transform duration-500 hover:scale-105">
          <span>Find the job of your</span>
          <br />
          <span className="text-orange-600">Dreams</span>
        </h1>
        <p className="text-gray-600">Find You New Job Today! New Job Postings Everyday</p>
        <p>just for you, browse the job you want and apply</p>
        <p>wherever you want.</p>
        
        <div className="mt-6">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="p-2 rounded-md border border-gray-300 w-72 focus:ring-2 focus:ring-orange-600"
              aria-label="Enter job title or keyword"
            />
            <input
              type="text"
              placeholder="Location"
              className="p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-600"
              aria-label="Enter job location"
            />
            <button className="bg-orange-600 text-white p-2 rounded-md hover:bg-orange-500 transition duration-300" aria-label="Search for jobs">Search</button>
          </div>
          <p className="text-sm text-gray-500 mt-2">It only takes a few seconds</p>
        </div>
      </div>
      
      {/* Image on the right */}
      <div className="mt-6 md:mt-0 ml-0 md:ml-12 transition-transform duration-500 hover:scale-105 flex-1">
        <Image
          src={ImageHero}
          alt="Person working on a laptop"
          className="w-full md:w-[450px] h-auto object-cover rounded-lg shadow-md"
          width={450} // Adjusted width for larger image size
          height={450} // Adjusted height for maintaining aspect ratio
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
