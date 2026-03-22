import React from 'react';
import { leetcodeData } from '../../constants';
import Tilt from 'react-parallax-tilt';

const Leetcode = () => {
  return (
    <section id="leetcode" className="py-24 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans transition-colors duration-300">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold text-purple-500 transition-colors duration-300 uppercase tracking-wider">LeetCode Stats</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-semibold transition-colors duration-300">
          My competitive programming journey and problem-solving progress on LeetCode.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">
        {/* Stats Cards Section */}
        <div className="w-full lg:w-2/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Solved Progress Card */}
          <div className="bg-white/20 dark:bg-gray-900/40 backdrop-blur-2xl p-6 rounded-2xl border border-gray-200 dark:border-white/20 shadow-xl flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105">
            <span className="text-3xl font-bold text-[#8245ec] mb-1">{leetcodeData.solved.split(' / ')[0]}</span>
            <span className="text-xs text-gray-400 uppercase tracking-widest">Solved</span>
            <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full mt-3 overflow-hidden">
             <div className="bg-[#8245ec] h-full" style={{ width: '4%' }}></div>
            </div>
          </div>

          {/* Contest Rating Card */}
          <div className="bg-white/20 dark:bg-gray-900/40 backdrop-blur-2xl p-6 rounded-2xl border border-gray-200 dark:border-white/20 shadow-xl flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105">
            <span className="text-3xl font-bold text-[#8245ec] mb-1">{leetcodeData.contestRating}</span>
            <span className="text-xs text-gray-400 uppercase tracking-widest">Contest Rating</span>
          </div>

          {/* Rank Card */}
          <div className="bg-white/20 dark:bg-gray-900/40 backdrop-blur-2xl p-6 rounded-2xl border border-gray-200 dark:border-white/20 shadow-xl flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105">
            <span className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{leetcodeData.rank}</span>
            <span className="text-xs text-gray-400 uppercase tracking-widest">Global Rank</span>
          </div>

          {/* Streak Card */}
          <div className="bg-white/20 dark:bg-gray-900/40 backdrop-blur-2xl p-6 rounded-2xl border border-gray-200 dark:border-white/20 shadow-xl flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105">
            <span className="text-3xl font-bold text-[#facc15] mb-1">{leetcodeData.maxStreak}</span>
            <span className="text-xs text-gray-400 uppercase tracking-widest">Max Streak</span>
          </div>

          {/* Difficulty Breakdown Card */}
          <div className="col-span-1 sm:col-span-2 bg-white/20 dark:bg-gray-900/40 backdrop-blur-2xl p-6 rounded-2xl border border-gray-200 dark:border-white/20 shadow-xl">
             <div className="space-y-4">
                <div className="flex justify-between items-center">
                   <span className="text-green-500 font-semibold">Easy</span>
                   <span className="text-gray-900 dark:text-white font-medium">{leetcodeData.easy}</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                   <div className="bg-green-500 h-full" style={{ width: '4%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                   <span className="text-yellow-500 font-semibold">Medium</span>
                   <span className="text-gray-900 dark:text-white font-medium">{leetcodeData.medium}</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                   <div className="bg-yellow-500 h-full" style={{ width: '3%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                   <span className="text-red-500 font-semibold">Hard</span>
                   <span className="text-gray-900 dark:text-white font-medium">{leetcodeData.hard}</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                   <div className="bg-red-500 h-full" style={{ width: '2%' }}></div>
                </div>
             </div>
          </div>
        </div>

        {/* LeetCode Profile Image/Graph Section */}
        <div className="w-full lg:w-3/5">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={1000}>
            <div className="bg-white/20 dark:bg-gray-900/40 backdrop-blur-2xl p-2 rounded-3xl border border-gray-200 dark:border-white/20 shadow-2xl overflow-hidden group">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={leetcodeData.image} 
                  alt="LeetCode Progress" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                   <a 
                    href={leetcodeData.profileLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#8245ec] text-white px-8 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                   >
                     View LeetCode Profile
                   </a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Leetcode;
