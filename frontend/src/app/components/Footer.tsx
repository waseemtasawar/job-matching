import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row justify-between mb-8">
          {/* Company Info Section */}
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-3xl font-semibold text-orange-600">CareerPathNow</h2>
            <p className="text-gray-600 mt-2">
              Joobs is the largest talent platform in Southeast Asia and Taiwan for career development and recruitment.
            </p>
          </div>

          {/* Employer, Find Vacancy, and Address Sections */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16">
            {/* Employer Section */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Employer</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-orange-600">About Us</a></li>
                <li><a href="#" className="hover:text-orange-600">Careers</a></li>
                <li><a href="#" className="hover:text-orange-600">Blog</a></li>
              </ul>
            </div>

            {/* Find Vacancy Based On Section */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Find Vacancy Based On</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-orange-600">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-600">Job Location</a></li>
                <li><a href="#" className="hover:text-orange-600">Company Name</a></li>
              </ul>
            </div>

            {/* Address Section */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Address</h3>
              <ul className="space-y-2 text-gray-600">
                <li>hello@jobbb.com</li>
                <li>Banglore, India</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Text Section */}
        <div className="text-center text-gray-600">
          <p>&copy; 2025 CareerPathNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
