import React from 'react'

const HeroSection = () => {
  return (
    <header className="">
      <div className="bg-[#219ebc] h-[55vh] w-full flex items-center justify-center px-4">
        <h1 className="text-4xl text-white font-bold text-center">
          <span className="text-[#114451]">ESSENTIAL</span> MENTAL HEALTH
          SERVICES
        </h1>
      </div>
      <img src="assets/header.png" alt="" className="w-full" />
    </header>
  );
}

export default HeroSection