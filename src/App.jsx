
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './page/home/Home';
import About from './page/about/About';
import Contacts from './page/contacts/Contacts';
import Courses from './page/courses/Courses';
import Blog from './page/blog/Blog';
import Careers from './page/careers/Careers';


function App() {
  return (

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
  )
}

export default App