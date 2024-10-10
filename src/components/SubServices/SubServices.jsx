import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SubServiceAPI from "../SubServiceAPI";
import AboutHeroSection from "../AboutSections/AboutHeroSection";
import { NotFoundBody } from "../../App";


function SubServices() {
  const { subServices } = useParams(); // Get the subServices from URL parameters
  const [matchedService, setMatchedService] = useState(null); // State to hold matched service

  // Function to find matching services based on subServices
  function matchingServices() {
    // Use find method to loop through the API and find the matching service
    return SubServiceAPI.find(
      (service) => service.servicesName === subServices
    );
  }

  useEffect(() => {
    const service = matchingServices();
    setMatchedService(service); // Set the matched service
  }, [subServices]);

  return (
    <>
      <Navbar />
      <AboutHeroSection img={'contact_Hero_bg'} h2={matchedService?.title1 || "SERVICE NOT FOUND"} />
      <div className="container mx-auto p-4">
        {matchedService ? (
          <div>
            {/* first Para */}
            <div className="flex w-full">
              {/* text */}
              <div className="w-1/2">
                <h1 className="text-2xl font-bold">{matchedService.title1}</h1>
                <p>{matchedService.title1Detail}</p>
              </div>
              {/* img */}
              <img src={matchedService.img1} alt="img here" className="w-1/2" />
            </div>

            {/* Second Para */}
            <div className="flex w-full">
              {/* img */}
              <img src={matchedService.img2} alt="img here" className="w-1/2" />
              {/* text */}
              <div className="w-1/2">
                <h1 className="text-2xl font-bold">{matchedService.title2}</h1>
                <p>{matchedService.title2Detail}</p>
              </div>
            </div>

            {/* Third Para */}
            <div className="flex w-full">
              {/* text */}
              <div className="w-1/2">
                <h1 className="text-2xl font-bold">{matchedService.title3}</h1>
                <p>{matchedService.title3Detail}</p>
              </div>
              <img src={matchedService.img3} alt="img here" className="w-1/2" />
              {/* img */}
            </div>
          </div>
        ) : (
          <div>
            <NotFoundBody/>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SubServices;
