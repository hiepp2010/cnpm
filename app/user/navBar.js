"use client";
import { useState } from "react";
import { Home, ChevronDown } from "react-feather";

const Navbar = () => {
  const [isHomeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleHomeDropdownToggle = () => {
    setHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const handleServicesDropdownToggle = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button
              onClick={handleHomeDropdownToggle}
              className="text-white focus:outline-none flex items-center"
            >
              Home
              <ChevronDown className="ml-1" size={18} />
            </button>

            {isHomeDropdownOpen && (
              <div className="absolute z-10 bg-gray-700 text-white p-2 space-y-2 w-48 flex flex-col">
                <a href="/home/page1">Page 1</a>
                <a href="/home/page2">Page 2</a>
                {/* Add more home pages as needed */}
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              onClick={handleServicesDropdownToggle}
              className="text-white focus:outline-none flex items-center"
            >
              Services
              <ChevronDown className="ml-1" size={18} />
            </button>

            {isServicesDropdownOpen && (
              <div className="absolute z-10 bg-gray-700 text-white p-2 space-y-2 w-48 flex flex-col">
                <a href="/services/service1">Service 1</a>
                <a href="/services/service2">Service 2</a>
                {/* Add more services as needed */}
              </div>
            )}
          </div>

          <a href="/about" className="text-white">
            About
          </a>

          <a href="/contact" className="text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
