import React from "react";
import { Link } from "react-router-dom";
import cardImage from "../../../public/assets/card.jpg";

const AboutSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center bg-gray-50 lg:py-24 lg:px-12 p-0 lg:gap-8">
      {/* Left section */}
      <section
        className="lg:w-[60vw] w-full bg-white text-gray-700 p-10 flex flex-col gap-6 shadow-lg"
        aria-labelledby="about-heading"
      >
        <h1 id="about-heading" className="text-5xl">
          About <span className="font-bold">Us</span>
        </h1>
        <p className="text-justify text-sm leading-6">
          <span className="font-bold">Essential Mental Health Service</span> is
          a unique
          <span className="font-bold">
            {" "}
            multidisciplinary therapy center
          </span>{" "}
          located in GULBERG, Lahore, catering to individuals from
          <span className="font-bold"> all age-groups</span>, and
          <span className="font-bold"> all mental health difficulties</span>.
          Our therapy center operates on the core values of
          <span className="font-bold">
            {" "}
            respect, empathy, integrity, trust, confidentiality, teamwork,
            quality, professionalism
          </span>
          and <span className="font-bold"> cooperation</span>. We believe that
          all individuals, regardless of their struggles or conditions, are
          entitled to treatment with
          <span className="font-bold"> dignity</span>.
        </p>
        <p className="font-bold text-black text-md italic">
          - Dr. Sheheryar Jovindah
        </p>
        <Link to="/aboutUs">
          <button type="button" className="self-start text-blue-600 underline">
            Find out more
          </button>
        </Link>
      </section>

      {/* Right section */}
      <img
        src={cardImage}
        alt="Therapy center description card"
        className="h-96 w-full lg:w-[40vw] object-cover object-center shadow-lg"
      />
    </section>
  );
};

export default AboutSection;
