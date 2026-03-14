// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 transition-colors duration-300 uppercase tracking-wider">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-semibold transition-colors duration-300">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="group bg-white/20 dark:bg-gray-900/40 backdrop-blur-2xl p-8 rounded-[2rem] border-2 border-purple-500/30 
          hover:border-purple-500/60 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-purple-500/10"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center tracking-wide">
            {category.title}
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center space-x-3 bg-white/30 dark:bg-gray-800/40 border-2 border-purple-500/20 px-4 py-2.5 rounded-2xl 
                hover:border-purple-400 group-hover:scale-105 transition-all duration-300 shadow-sm backdrop-blur-md"
              >
                {skill.logo ? (
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400">
                      {skill.name.charAt(0)}
                    </span>
                  </div>
                )}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
