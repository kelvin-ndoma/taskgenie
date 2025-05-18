import React from 'react'
import HeroSection from '../components/HeroSection'
import SomeService from '../components/SomeService'
import CTA from '../components/Cta'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SomeService />
      <CTA />
    </div>
  )
}

export default Home