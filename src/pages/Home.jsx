import React from 'react'
import Navbar from '../components/Navbar'
import Top from '../components/Top'
import Hero from '../components/Hero'
import About from '../components/About'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
    <Top/>
    <Banner/>
   <Hero/>
   <Gallery/>
   <About/>
     
   
    </div>
  )
}

export default Home