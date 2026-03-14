import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-purple-500 transition-colors duration-300 uppercase tracking-wider">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-semibold transition-colors duration-300">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group border-2 border-purple-500/30 bg-white/20 dark:bg-gray-900/50 backdrop-blur-2xl rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-purple-500/40 hover:-translate-y-2 hover:border-purple-500/60 transition-all duration-500 flex flex-col"
          >
            {/* Project Image */}
            <div className="w-full h-52 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold bg-purple-600/80 px-4 py-2 rounded-full backdrop-blur-sm">View Details</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-7 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="text-xs text-gray-500 font-medium whitespace-nowrap ml-2">
                  {project.date}
                </span>
              </div>
              
              <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-purple-100/50 dark:bg-purple-900/20 text-[10px] font-bold text-purple-600 dark:text-purple-400 rounded-lg px-2 py-1 uppercase tracking-wider transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col md:flex-row h-full">
              {/* Project Image in Modal */}
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-900/30 text-[10px] md:text-xs font-semibold text-purple-400 border border-purple-500/30 rounded-full px-3 py-1 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-2xl text-center font-bold transition-colors border border-gray-700"
                  >
                    Source Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-2xl text-center font-bold transition-all shadow-[0_0_20px_rgba(130,69,236,0.4)]"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
