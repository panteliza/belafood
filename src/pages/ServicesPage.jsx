import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/Services";
import FoodSection from "../components/FoodSection";
import Footer from "../components/Footer";
import DirectContactUs from "../components/DirectContactUs";

const ServicesPage = () => {
   useEffect(() => {
        // Scroll to the top when the page loads
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <Navbar/>
      <ServicesSection/>
      <FoodSection/>
      <DirectContactUs/>
      <Footer/>
    </div>
  )
}

export default ServicesPage