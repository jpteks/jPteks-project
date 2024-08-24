import React, { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between px-20 py-4 w-full">
      {/* Logo Section */}
      <div className='w-[20%]'>
        <img
          src={logo} // Replace with the correct logo path
          alt="JPTEKS Logo"
          className="w-[30%]"
        />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 w-[40%] items-center">
        <a href="#" className="hover:text-gray-700">Home</a>
        <a href="#" className="hover:text-gray-700">About Us</a>
        <a href="#" className="hover:text-gray-700">Services</a>
        
        {/* More Button with Dropdown */}
        <div className="relative">
          <button 
            className="flex items-center hover:text-gray-700" 
            onClick={toggleDropdown}
          >
            More <span className="ml-1">▼</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Gallery</a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Project</a>
            </div>
          )}
        </div>
      </ul>

      {/* Call to Action and Language Button */}
      <div className="flex space-x-8 w-[30%] items-center">
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
          Contact us for a project
        </button>
        <button className="px-4 py-2 bg-blue-900 text-white rounded-md">
          EN
        </button>
      </div>
    </nav>
  );
}