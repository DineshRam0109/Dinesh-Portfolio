import React from "react";
import { Link } from "react-scroll";
import EducationData from "../data/education";
import Wave from "./Wave";

const Education = () => {
  return (
    <section className="body-font bg-gray-50 py-10">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        
        {/* Heading */}
        <div id="education" className="flex flex-col text-center w-full mb-11">
          <h1 className="text-5xl font-extrabold text-black mb-1">Education</h1>
          <p data-aos="zoom-in" data-aos-duration="1000" className="text-lg mx-auto leading-relaxed font-bold text-dark-orange">
            My Academic Journey
          </p>
        </div>

        {/* Card Layout */}
        <div className="bg-black text-white shadow-lg rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center">
          
          {/* Education Details */}
          {EducationData.map((edu, index) => (
            <EducationDetail
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              location={edu.location}
              year={edu.year}
              score={edu.score}
            />
          ))}

        </div>
      </div>
      <Wave />
    </section>
  );
};

// Reusable Component for Each Education Detail
const EducationDetail = ({ degree, institution, location, year, score }) => {
  return (
    <div 
      data-aos="fade-up" 
      data-aos-duration="1000"
      className="w-full flex flex-col md:flex-row gap-4 items-start md:items-center bg-gray-800 p-5 rounded-lg shadow-lg my-4"
    >
      <div className="w-full md:w-1/4 font-extrabold text-orange-400">{degree}</div>
      <div className="w-full md:w-3/4">
        <p className="text-lg font-medium">{institution}</p>
        <p className="text-gray-400">{location}</p>
        <p className="text-gray-300">
          <span className="font-semibold">Year:</span> {year} &nbsp; | &nbsp;
          <span className="font-bold text-dark-orange"></span> {score}
        </p>
      </div>
    </div>
  );
};

export default Education;
