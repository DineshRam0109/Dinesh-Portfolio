import React, { useState } from "react";
import achievementsData from "../data/achievements";
import Wave from "./Wave";

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState("winners");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section className="body-font bg-gray-100 py-12">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        
        {/* Heading */}
        <div id="achievements" className="flex flex-col text-center w-full mb-8">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Achievements</h1>
          <p className="text-lg font-bold text-dark-orange">Showcasing my achievements in competitions</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 mx-2 font-bold rounded-lg shadow-md transition-all ${selectedCategory === "winners" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setSelectedCategory("winners")}
          >
            Winners
          </button>
          <button
            className={`px-6 py-2 mx-2 font-bold rounded-lg shadow-md transition-all ${selectedCategory === "participation" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setSelectedCategory("participation")}
          >
            Participation
          </button>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {achievementsData[selectedCategory].map((cert, index) => (
            <div 
              key={index} 
              className="bg-white shadow-xl rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedCertificate(cert)}
            >
              <img 
                src={cert.logo} 
                alt={cert.title} 
                className="w-full h-44 object-contain rounded-md"
              />
              <h2 className="text-lg font-bold text-center mt-3 text-gray-800">{cert.title}</h2>
              <p className="text-sm text-gray-500 text-center">{cert.organization}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Certificate View */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="bg-white p-6 rounded-lg max-w-3xl relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xl shadow-lg hover:bg-red-700 transition-all"
              onClick={() => setSelectedCertificate(null)}
            >
              ✖
            </button>
            <img 
              src={selectedCertificate.image} 
              alt="Certificate" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
      <Wave />
    </section>
  );
};

export default Achievements;
