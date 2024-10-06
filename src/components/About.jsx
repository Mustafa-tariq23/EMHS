import React from 'react'
import Navbar from './Navbar'
import AboutHeroSection from './AboutSections/AboutHeroSection'
import AboutUsCards from './AboutSections/AboutUsCards'
import Footer from './Footer'
import MiddleTicker from './MiddleTicker'
import Team from './TeamExperts'
const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHeroSection />
      
      <MiddleTicker />
      <AboutUsCards />
      <Team/>
      <Footer />
    </div>
  )
}

export default About