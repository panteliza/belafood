
import React, { useEffect } from "react";
import Navbar from '../components/Navbar'
import Top from '../components/Top'
import Hero from '../components/Hero'
import About from '../components/About'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

import DirectContactUs from '../components/DirectContactUs'
import ServicesSection from '../components/Services'
import FoodSection from '../components/FoodSection'
import StaycationSection from "../components/StaycationSection";
import Reviews from "../components/Reviews";

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
    <Reviews/>
    <DirectContactUs/>
    <About/>
    <Gallery/>
   
   
    
   
   <Hero/>
  
 
   <Footer/>
     
   
    </div>
  )
}

export default Home