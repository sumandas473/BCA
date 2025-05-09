import React from "react";
import BCAlogo from '../../assets/BCA-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] px-6 py-16 font-sans text-white md:px-12">
      <div className="mx-auto max-w-7xl space-y-14">
        {/* Top Section */}
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="col-span-2 md:col-span-1">
            <a href="/" title="Bengal Coding Academy">
              <img
                src={BCAlogo}
                alt="Maiprosoft Logo"
                className="width-[210px] white-logo mx-auto mb-4 h-12 md:mx-0"
              />{" "}
              {/* Adjust height as needed */}
            </a>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-400 md:mt-0">
            Current Status{" "}
            <span className="bg-green h-2 w-2 rounded-full"></span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h4 className="mb-4 font-semibold text-white">About Bengal Coding Academy</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Latest News</a>
              </li>
              <li>
                <a href="#">Corporate Vision</a>
              </li>
              <li>
                <a href="/contact-us"> Bengal Coding Academy</a>
              </li>
             
            </ul>
          </div>

          
          {/* Column 3 */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Discover</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Our Products</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Our Partners</a>
              </li>
              <li>
                <a href="#">Our Global Footprint</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
             
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
            Important Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Bengal Coding Academy Club Blue</a>
              </li>
              <li>
                <a href="#">Press Kit</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Secure Usage Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
       


        {/* Column 2 */}
        <div>
            <h4 className="mb-4 font-semibold text-white">Stay connected</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Check out the blog</a>
              </li>
              <li>
                <a href="#">Find us on Reddit</a>
              </li>
              <li>
                <a href="#">Follow on X</a>
              </li>
              <li>
                <a href="#">Subscribe on YouTube</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>



        </div>


        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-6 text-xs text-gray-500 md:flex-row">
          <p className="mb-4 md:mb-0">@Bengal Coding Academy 2025</p>
          <div className="flex gap-5">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Manage Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;