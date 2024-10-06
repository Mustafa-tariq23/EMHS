import React from 'react'
import '../../scss/HeroSection.scss'
function AboutHeroSection() {
  return (
    <>
      <div className="AboutUsHero">
        <div className="about_hero_bg h-[300px] sm:h-[400px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]">
        </div>
        <div className="about_Hero_Content flex flex-col justify-end items-center h-[300px] sm:h-[400px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] 2xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 ">
          <h2 className='text-white text-2xl md:text-5xl font-bold mb-20'>About Us</h2>
        </div>
      </div>
    </>
  )
}

export default AboutHeroSection