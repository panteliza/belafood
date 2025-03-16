import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DirectContactUs from "../components/DirectContactUs";
import Banner from "../components/Banner";

const Contact = () => {
   useEffect(() => {
        // Scroll to the top when the page loads
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <Navbar/>
      <DirectContactUs/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Contact