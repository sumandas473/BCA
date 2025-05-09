import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ClickSpark from '../clickSpark/ClickSpark';


const Layout = () => {
  return (

<ClickSpark
        sparkColor='#fff'
        sparkSize={12}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
    <div className="flex flex-col min-h-screen bg-gradient-to-l from-[#06000c] via-[#230042] to-[#06000c]">
       
      <Navbar />
      <div className="flex-grow text-white">
        <Outlet /> {/* Your page content goes here */}
      </div>
      <Footer />
      
    </div>
    </ClickSpark>
  );
};

export default Layout;