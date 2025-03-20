import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import BelaVideos from "../components/BelaVideos";

const GalleryPage = () => {
   useEffect(() => {
        // Scroll to the top when the page loads
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <Navbar/>
      <Gallery/>
      <BelaVideos/>
      <Footer/>
    </div>
  )
}

export default GalleryPage