import React from 'react'
import Header from './Header'
import ServicesGrid from './homepageSections/ServicesGrid'
import AboutSection from './homepageSections/AboutSection'
import FAQs from './FAQs'
import TeamExperts from './TeamExperts'
import TraumaFocusedTherapy from './TherapySection'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Header />
      <ServicesGrid />
      <FAQs />
      <TeamExperts />
      <TraumaFocusedTherapy />
      <AboutSection />
      <Footer />
    </>
  )
}

export default Home