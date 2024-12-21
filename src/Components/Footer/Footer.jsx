import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Images/logo2.png';

const Footer = () => {
  return (
    <footer className="bg-[#002833] text-white px-4">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo and Navigation in column */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Juriph" className="h-16" />
            </div>

            <nav className="flex items-center space-x-2 text-gray-300 text-sm">
              <Link to="/about" className="hover:text-white">
                About
              </Link>
              <span>|</span>
              <Link to="/faqs" className="hover:text-white">
                FAQs
              </Link>
              <span>|</span>
              <Link to="/how-it-works" className="hover:text-white">
                How it works
              </Link>
              <span>|</span>
              <Link to="/features" className="hover:text-white">
                Features
              </Link>
            </nav>
          </div>

          {/* Contact Info and Social Media */}
          <div className="text-right text-gray-300">
            <div className="flex items-center justify-end gap-2">
              <i className="fas fa-map-marker-alt text-primary"></i>
              <span>Office #1, Floor 2, abc city, xyz.</span>
            </div>
            <div className="flex items-center justify-end gap-2 mt-2">
              <i className="fas fa-envelope text-primary"></i>
              <span>support@juriph.com</span>
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <Link
                to="#"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-[#B4941F]"
              >
                <i className="fab fa-facebook-f text-[#002833]"></i>
              </Link>
              <Link
                to="#"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-[#B4941F]"
              >
                <i className="fab fa-instagram text-[#002833]"></i>
              </Link>
              <Link
                to="#"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-[#B4941F]"
              >
                <i className="fab fa-linkedin-in text-[#002833]"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 text-center px-4 py-4">
        <div className="container mx-auto text-sm text-gray-300">
          <span>© 2024 Juriph, All rights reserved.</span>
          <Link to="/privacy" className="ml-2 hover:text-white">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link to="/terms" className="hover:text-white">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;