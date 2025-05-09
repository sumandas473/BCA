import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <div className="flex-grow ">
        <Outlet /> {/* Your page content goes here */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;