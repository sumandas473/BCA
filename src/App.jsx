
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './page/home/Home';
import About from './page/about/About';
import Contacts from './page/contacts/Contacts';


function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
    

    </Routes>
  )
}

export default App