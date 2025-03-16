
import React, { useEffect } from "react";
import Navbar from '../components/Navbar'
import Top from '../components/Top'
import Hero from '../components/Hero'
import About from '../components/About'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import Delicious from '../components/DeliciousFood'
import DirectContactUs from '../components/DirectContactUs'
import ServicesSection from '../components/Services'
import FoodSection from '../components/FoodSection'
import StaycationSection from "../components/StaycationSection";

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
    <Top/>
    <StaycationSection/>
    <Banner/>
    <ServicesSection/>
    <FoodSection/>
    <DirectContactUs/>
    <About/>
    <Gallery/>
    <Delicious/>
   
    
   
   <Hero/>
  
 
   <Footer/>
     
   
    </div>
  )
}

export default Home