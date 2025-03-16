import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Contact from './pages/ContactPage';

import whatsappImage from './assets/images/whatsapp.png'; // Import WhatsApp image
import './App.css'; // Add this for styling
import AboutPage from './pages/About';
import GalleryPage from './pages/GalleryPage';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
 {/* WhatsApp button as an image */}
        <a
          href="https://wa.me/9779851096133"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src={whatsappImage} alt="WhatsApp" />
        </a>
      </div>
    </BrowserRouter>

);
};
export default App;
