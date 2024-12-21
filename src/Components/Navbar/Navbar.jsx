import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 w-full px-8 px-12  flex items-center justify-between z-50 transition-all duration-300 ${
    hasScrolled
      ? "bg-[#FCF8F0]/80 backdrop-blur-md shadow-sm py-1"
      : "bg-transparent py-2"
  }`;

  const linkClasses =
    "text-gray-600 hover:text-gray-800 relative group transition-transform duration-200 hover:scale-110";

  return (
    <nav className={navClasses}>
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Juriph Logo" className="h-16 mr-2" />
        </Link>
        {/* Desktop Menu - Next to logo */}
        <div className="hidden md:flex font-semibold space-x-6 -mt-3">
          <Link to="/" className={linkClasses}>
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link to="/how-it-works" className={linkClasses}>
            How it works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link to="/features" className={linkClasses}>
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link to="/blogs" className={linkClasses}>
            Blogs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
      {/* Rest of the navbar code remains the same */}
      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link
          to="/contact"
          className="border border-gold rounded-md px-4 py-2 text-gray-800 hover:border-gray-500"
        >
          Contact Us
        </Link>
        <Link
          to={"/signin"}
          className="bg-primary text-white transition-colors duration-300 rounded-md px-4 py-2 hover:bg-cream"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`absolute top-20 left-0 w-full ${
            hasScrolled ? "bg-[#FCF8F0]/95 backdrop-blur-sm" : "bg-[#FCF8F0]"
          } md:hidden flex flex-col items-start px-8 space-y-4 py-4 shadow-lg`}
        >
          <Link to="/" className={linkClasses}>
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link to="/how-it-works" className={linkClasses}>
            How it works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link to="/features" className={linkClasses}>
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link to="/blogs" className={linkClasses}>
            Blogs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 hover:border-gray-500 w-full text-left"
          >
            Contact Us
          </Link>
          <Link
            to="/signin"
            className="bg-gold text-white rounded-md px-4 py-2 hover:bg-yellow-500 w-full text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
