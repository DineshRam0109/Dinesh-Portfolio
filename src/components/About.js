import React from "react";
import { Link } from "react-scroll";
import AboutData from "../data/about";
import ProfileData from "../data/profile";
import Wave from "./Wave";

const About = () => {
  return (
    <section className="body-font bg-gray-50 py-10">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        {/* Heading */}
        <div id="about" className="flex flex-col text-center w-full mb-11">
          <h1 className="text-5xl font-extrabold text-black mb-1">About Me</h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-lg mx-auto leading-relaxed font-bold text-orange-600"
          >
            Why hire me?
          </p>
        </div>

        {/* Card Layout */}
        <div className="bg-black text-white shadow-lg rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center lg:items-start justify-center">
          {/* Image Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="lg:max-w-lg sm:w-2/3 lg:w-1/2 w-full mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center rounded-lg shadow-md transition-transform transform hover:scale-105"
              alt="hero"
              src={AboutData.image}
            />
          </div>

          {/* Description & Buttons Section */}
          <div className="lg:w-1/2 text-center lg:text-left lg:pl-10">
            {AboutData.description?.map((item, index) => (
              <p
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="font-medium text-blue-300 text-lg leading-relaxed mb-4"
              >
                {item}
              </p>
            ))}

            {/* Buttons */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <button className="px-7 py-3 bg-white text-black font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                  Hire Me
                </Link>
              </button>

              <a href={ProfileData.resume} target="_blank" rel="noopener noreferrer">
                <button className="px-7 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default About;
