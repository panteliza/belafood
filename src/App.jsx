import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
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
</div>
</BrowserRouter>
);
};
export default App;
