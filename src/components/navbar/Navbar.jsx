import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BCAlogo from '../../assets/BCA-logo.png'; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Courses', to: '/courses' },
    { name: 'Blog', to: '/blog' },
    { name: 'Careers', to: '/careers' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white px-6 py-4 backdrop-blur-2xl shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={BCAlogo}
            alt="Bengal Coding Academy"
            className="h-10"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 bg-[#7979793a] rounded-full px-6 py-2 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="hover:text-white text-gray-300 transition-colors font-sans font-medium">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline bg-gradient-to-r from-[#380069] via-[#8800ff9c] to-[#380069] px-8 py-2 rounded-full text-white font-light text-sm hover:opacity-90 transition uppercase font-sans">
            Get Started
          </button>
          

          {/* Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-white transition-transform duration-300"
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
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? 'scale-100 opacity-100 max-h-[500px]' : 'scale-95 opacity-0 max-h-0 overflow-hidden'
        } origin-top`}
      >
        <ul className="mt-4 space-y-4 bg-[#7979793a] p-4 rounded-md text-sm font-medium text-center">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="block text-gray-300 hover:text-white transition hover:underline"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button className="w-full mt-2 bg-gradient-to-r from-[#380069] via-[#8800ff9c] to-[#380069] px-4 py-2 rounded-full text-white font-medium text-sm hover:opacity-90 transition uppercase font-sans">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
