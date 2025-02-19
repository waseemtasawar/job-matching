import React from "react";

const TrendingJobs = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-orange-50 shadow-md mt-8 rounded-lg ">
      <h3 className="font-bold text-2xl text-gray-800" id="trending-jobs">
        Trending Job Keywords:
      </h3>
      <div className="flex flex-wrap gap-3 mt-4" role="list">
        <span
          className="px-6 py-3 bg-orange-200 text-orange-600 rounded-full text-sm font-medium hover:bg-orange-300 cursor-pointer transition duration-300"
          role="listitem"
          aria-label="Trending job: Web Designer"
        >
          Web Designer
        </span>
        <span
          className="px-6 py-3 bg-orange-200 text-orange-600 rounded-full text-sm font-medium hover:bg-orange-300 cursor-pointer transition duration-300"
          role="listitem"
          aria-label="Trending job: UI/UX Designer"
        >
          UI/UX Designer
        </span>
        <span
          className="px-6 py-3 bg-orange-200 text-orange-600 rounded-full text-sm font-medium hover:bg-orange-300 cursor-pointer transition duration-300"
          role="listitem"
          aria-label="Trending job: Frontend"
        >
          Frontend
        </span>
        <span
          className="px-6 py-3 bg-orange-200 text-orange-600 rounded-full text-sm font-medium hover:bg-orange-300 cursor-pointer transition duration-300"
          role="listitem"
          aria-label="Trending job: Full Stack"
        >
          Full Stack
        </span>
        <span
          className="px-6 py-3 bg-orange-200 text-orange-600 rounded-full text-sm font-medium hover:bg-orange-300 cursor-pointer transition duration-300"
          role="listitem"
          aria-label="Trending job: Backend"
        >
          Backend
        </span>
      </div>
    </div>
  );
};

export default TrendingJobs;
