import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import whatsappImage from './assets/images/whatsapp.png'; // Import WhatsApp image
import './App.css'; // Add this for styling
const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          </Routes>
 {/* WhatsApp button as an image */}
        <a
          href="https://wa.me/977976597452"
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
