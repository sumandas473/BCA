import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './page/home/Home';
import About from './page/about/About';
import Contacts from './page/contacts/Contacts';
import Courses from './page/courses/Courses';
import Blog from './page/blog/Blog';
import Careers from './page/careers/Careers';
import Preloader from './components/Preloader/Preloader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    // Set window.onload to hide the loader once the window and assets are loaded
    window.onload = handleLoad;

    // Optional: if you want to handle individual image loading
    const images = document.images;
    let totalImages = images.length;
    let imagesLoaded = 0;

    for (let i = 0; i < totalImages; i++) {
      images[i].onload = () => {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
          setIsLoading(false);
        }
      };
    }

    // Cleanup
    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <>
      {isLoading && <Preloader />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="courses" element={<Courses />} />
          <Route path="blog" element={<Blog />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;