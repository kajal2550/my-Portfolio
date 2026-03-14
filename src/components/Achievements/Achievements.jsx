import React from "react";
import { achievements } from "../../constants";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-purple-500 transition-colors duration-300 uppercase tracking-wider">
          ACHIEVEMENTS
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-semibold transition-colors duration-300">
          Milestones that reflect growth in coding, collaboration, and product development.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="group bg-white/20 dark:bg-gray-900/40 backdrop-blur-2xl p-8 rounded-[2rem] border-2 border-purple-500/30 
            hover:border-purple-500/60 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-purple-500/10 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-purple-600 dark:text-purple-400 font-bold text-sm tracking-widest uppercase">
                {achievement.subtitle}
              </span>
              <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(130,69,236,0.4)]">
                {achievement.icon}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 group-hover:text-purple-500">
              {achievement.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
              {achievement.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
