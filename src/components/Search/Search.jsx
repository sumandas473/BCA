import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Search() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef([]);

  const subjects = ["Math", "Science", "History", "English", "Art", "Coding"];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.current.every(
          (ref) => ref && !ref.contains(event.target)
        )
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full px-4 py-8 text-white flex flex-col items-center justify-center space-y-6 ">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row w-full max-w-4xl space-y-4 sm:space-y-0 sm:space-x-4 md:bg-amber-50 md:px-1 md:py-1 md:rounded-md ">
        <input
          type="text"
          placeholder="Search your favourite course"
          className="flex-1 px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none bg-gray-100 rounded-md w-full"
        />
        <button className="px-8 py-3 bg-gradient-to-r from-[#380069] via-[#8800ff9c] to-[#380069] text-white font-semibold hover:opacity-90 rounded-md w-full sm:w-auto cursor-pointer">
          Search
        </button>
      </div>

      {/* Subject Filters */}
      {/* Subject Filters */}
<div className="w-full max-w-5xl">
  <div className="flex sm:flex-wrap sm:justify-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 px-1 py-2">
    {subjects.map((subject, index) => (
      <div
        key={index}
        className="relative inline-block"
        ref={(el) => (dropdownRefs.current[index] = el)}
      >
        <button
          onClick={() => toggleDropdown(index)}
          className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 min-w-[100px] w-auto cursor-pointer"
        >
          {subject}
          <motion.div
            animate={{ rotate: openDropdown === index ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <FaChevronDown className="text-xs" />
          </motion.div>
        </button>

        {/* Dropdown with Framer Motion */}
        <AnimatePresence>
          {openDropdown === index && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className=" top-full left-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-md z-40"
            >
              <ul className="">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Option 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Option 2
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Option 3
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
