import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectsData from "../data/projects";
import Wave from "./Wave";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("MERN Stack");

  const filteredProjects = ProjectsData.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section id="projects" className="body-font">
      <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 xl:mx-40">
        <h1 className="text-3xl sm:text-5xl title-font font-extrabold mb-2">
          Projects
        </h1>
        
        {/* Category Buttons */}
        <div className="flex justify-center gap-5 my-5">
          <button
            className={`px-4 py-2 rounded-2xl text-lg font-semibold ${
              activeCategory === "MERN Stack" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveCategory("MERN Stack")}
          >
            MERN Stack
          </button>
          <button
            className={`px-4 py-2 rounded-2xl text-lg font-semibold ${
              activeCategory === "AI" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveCategory("AI")}
          >
            AI Projects
          </button>
          <button
            className={`px-4 py-2 rounded-2xl text-lg font-semibold ${
              activeCategory === "Data Visualization" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveCategory("Data Visualization")}
          >
            Data Visualization
          </button>
          <button
            className={`px-4 py-2 rounded-2xl text-lg font-semibold ${
              activeCategory === "Mini Projects" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveCategory("Mini Projects")}
          >
            Mini Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-3 md:gap-x-5 lg:gap-x-2 lg:gap-y-5 xl:gap-y-10 xl:gap-x-5 mt-4 md:mt-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col w-[95%] mx-auto shadow-xl border-4 border-dark-orange rounded-xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-80 object-cover rounded-4 shadow-xl transition-all duration-300 ease-in-out"
              />
              <h3 className="text-2xl font-bold text-darkblue mt-4 text-center">
                {project.name}
              </h3>
              <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-darkblue ">
                <h3 className="text-2xl font-bold text-aqua mb-2">{project.name}</h3>
                <p className="px-2 text-lg text-white">{project.description}</p>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  {project.icons.map((Icon, index) => (
                    <div className="p-2 rounded-full transition-colors duration-300 hover:bg-dark-orange hover:text-white" key={index}>
                      <Icon className="text-white text-4xl font-bold" />
                    </div>
                  ))}
                </div>
                <div className="flex gap-7 justify-center items-center my-7 text-2xl">
                  <a
                    className="text-darkblue text-xl bg-white rounded-full p-2 transition-colors duration-300 bg-aqua hover:text-white"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="text-darkblue text-xl bg-white rounded-full p-2 transition-colors duration-300 bg-aqua hover:text-white"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="p-[1px]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Projects;