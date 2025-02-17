import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";

const Profile = () => {
  return (
    <section
      id="home"
      className="text-gray-600 bg-white body-font pt-16 lg:min-h-75vh relative overflow-hidden"
    >
      <div className="p-5 mx-auto gap-2 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit">
        
        {/* Profile Image */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-lg sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/2 xl:w-1/3"
        >
          <div className="flex items-center justify-center lg:justify-start">
          <div className="flex items-center justify-center lg:justify-start -ml-4 lg:-ml-8">
  <img
    className="object-cover object-center w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
               bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 border-[6px] border-white
               shadow-2xl rounded-xl transform transition-all duration-500 ease-in-out
               hover:scale-110 hover:shadow-blue-500/50"
    src={ProfileData.img}
    alt="Profile"
  />
</div>


          </div>
        </div>

      {/* Text Section */}
<div className="lg:flex-grow lg:pr-8 lg:mr-14 flex flex-col md:mb-0 items-center text-center xl:scale-110">
<SocialHandles color="text-black" />

  <h2
    data-aos="fade-up"
    data-aos-duration="1500"
    className="title-font text-5xl md:text-5xl mb-6 text-center font-extrabold text-black leading-tight"
  >
    Hello, I am{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
      {ProfileData.name}
    </span>
  </h2>

  {/* Typewriter Effect */}
  <div
    data-aos="fade-up"
    data-aos-duration="1500"
    className="text-4xl md:text-4xl text-darkblue mb-6 font-semibold lg:inline-block text-shadow-md"
  >
    &nbsp;
    <Typewriter
      words={ProfileData.professions}
      loop={true}
      typeSpeed={80}
      deleteSpeed={80}
      delaySpeed={1000}
    />
  </div>



          {/* Buttons Section */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="mt-4 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
          >
            <button className="inline-flex font-semibold text-white bg-black py-3 px-7 rounded-full text-md xl:px-10
                               border-2 border-white transition-all duration-300 ease-in-out
                               hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600
                               hover:border-blue-400 hover:text-white hover:shadow-lg">
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={750}>
                Hire Me
              </Link>
            </button>

            <a href={ProfileData.resume} target="_blank" rel="noreferrer">
            <button className="inline-flex font-semibold text-white bg-black py-3 px-7 rounded-full text-md xl:px-10
                               border-2 border-white transition-all duration-300 ease-in-out
                               hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600
                               hover:border-blue-400 hover:text-white hover:shadow-lg">
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Animated Wave */}
      <Wave />
    </section>
  );
};

export default Profile;
