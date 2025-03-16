import React, { useEffect } from "react";
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const AboutPage = () => {
   useEffect(() => {
      // Scroll to the top when the page loads
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navbar/>
      <About/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default AboutPage