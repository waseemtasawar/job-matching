"use client";
import React, { useState } from 'react';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/SignUp';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  const handleClosePopups = () => {
    setShowLoginPopup(false);
    setShowSignupPopup(false);
  };

  return (
    <header className="relative flex justify-between items-center p-6 bg-gradient-to-r from-orange-600 to-orange-500 shadow-lg text-white max-w-7xl mx-auto">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <div className="text-3xl font-bold text-white" aria-label="Career Path Now">
          CareerPathNow
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-8 items-center">
        <a href="/" className="hover:text-orange-200 transition-all duration-300" aria-label="Go to Home Page">
          Home
        </a>
        <a href="/employer" className="hover:text-orange-200 transition-all duration-300" aria-label="Go to Employer Page">
          Employer
        </a>
        <a href="/candidate" className="hover:text-orange-200 transition-all duration-300" aria-label="Go to Candidate Page">
          Candidate
        </a>
        <a href="/courses" className="hover:text-orange-200 transition-all duration-300" aria-label="Go to Courses Page">
          Courses
        </a>
        <a href="/guidance" className="hover:text-orange-200 transition-all duration-300" aria-label="Go to Career Guidance Page">
          Career Guidance
        </a>
        <button
          onClick={() => setShowLoginPopup(true)}
          className="hover:text-orange-200 transition-all duration-300"
          aria-label="Open Login Popup"
        >
          Login
        </button>
        <button
          onClick={() => setShowSignupPopup(true)}
          className="bg-white text-orange-600 px-6 py-2 rounded-full hover:bg-orange-100 hover:text-orange-700 transition-all duration-300"
          aria-label="Open Signup Popup"
        >
          Sign Up
        </button>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6 md:hidden flex flex-col space-y-6">
          <a href="/" className="hover:text-orange-200 transition-all duration-300" aria-label="Go to Home Page">
            Home
          </a>
          <a href="/employer" className="hover:text-orange-200 transition-all duration-300" aria-label="Go to Employer Page">
            Employer
          </a>
          <a href="/candidate" className="hover:text-orange-200 transition-all duration-300" aria-label="Go to Candidate Page">
            Candidate
          </a>
          <a href="/courses" className="hover:text-orange-200 transition-all duration-300" aria-label="Go to Courses Page">
            Courses
          </a>
          <a href="/guidance" className="hover:text-orange-200 transition-all duration-300" aria-label="Go to Career Guidance Page">
            Career Guidance
          </a>
          <button
            onClick={() => setShowLoginPopup(true)}
            className="hover:text-orange-200 transition-all duration-300"
            aria-label="Open Login Popup"
          >
            Login
          </button>
          <button
            onClick={() => setShowSignupPopup(true)}
            className="bg-white text-orange-600 px-6 py-2 rounded-full hover:bg-orange-100 hover:text-orange-700 transition-all duration-300"
            aria-label="Open Signup Popup"
          >
            Sign Up
          </button>
        </div>
      )}

      {/* Display the Login or Signup Popup */}
      {showLoginPopup && <Login onClose={handleClosePopups} />}
      {showSignupPopup && <Signup onClose={handleClosePopups} />}
    </header>
  );
};

export default Header;
