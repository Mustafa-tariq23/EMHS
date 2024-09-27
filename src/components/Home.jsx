import React from 'react'
import Header from './Header'
import ServicesGrid from './homepageSections/ServicesGrid'
import AboutSection from './homepageSections/AboutSection'
import FAQs from './FAQs'

const Home = () => {
  return (
    <>
      <Header />
      <ServicesGrid />
      <FAQs />
      <AboutSection/>
    </>
  )
}

export default Home