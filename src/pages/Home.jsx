import React from 'react'
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

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
    <Top/>
    <Banner/>
    <Delicious/>
    <ServicesSection/>
    <FoodSection/>
    <DirectContactUs/>
   <Hero/>
   <Gallery/>
   <About/>
   <Footer/>
     
   
    </div>
  )
}

export default Home