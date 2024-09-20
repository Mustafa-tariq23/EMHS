import React from 'react'
import Header from './Header'
import ServicesGrid from './homepageSections/ServicesGrid'
import AboutSection from './homepageSections/AboutSection'

const Home = () => {
  return (
    <>
      <Header />
      <ServicesGrid />
      <AboutSection/>
    </>
  )
}

export default Home