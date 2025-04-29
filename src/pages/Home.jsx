import React from 'react'
import HeroSection from '../components/HeroSection'
import SomeService from '../components/SomeService'
import CTA from '../components/Cta'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SomeService />
      <CTA />
      <Footer/>
    </div>
  )
}

export default Home