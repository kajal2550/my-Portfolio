import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { FiDownload } from 'react-icons/fi';
import profileImage from '../../assets/profile2.png';

const About = () => {
  const [showCVOptions, setShowCVOptions] = useState(false);

  const cvLinks = {
    general: {
      view: "https://drive.google.com/file/d/1L-x9LHvIesIKAal8bEvK1Zl4nlyZq8kb/view",
      download: "https://drive.google.com/uc?export=download&id=1L-x9LHvIesIKAal8bEvK1Zl4nlyZq8kb"
    },
    specialized: {
      view: "https://drive.google.com/file/d/1-se_25FaQLEx62ig3SgoBAwtP3hTcMeQ/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1-se_25FaQLEx62ig3SgoBAwtP3hTcMeQ"
    }
  };

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Kajal Kumari
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight transition-colors duration-300">
            <span className="text-gray-800 dark:text-white">I am </span>
            <ReactTypingEffect
              text={[
                'a Full Stack Developer',
                'a DevOps Student',
                'a Computer Science Student',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300 mb-10 mt-8 leading-relaxed transition-colors duration-300">
            Aspiring Full Stack Developer and DevOps enthusiast currently pursuing a Bachelor&apos;s degree in Computer Science Engineering at Lovely Professional University. I specialize in crafting scalable, user-centric web applications with a focus on clean architecture and performance. Passionate about streamlining deployment pipelines through CI/CD and cloud automation, I combine technical proficiency with a strong foundation in Data Structures and Algorithms to solve complex challenges. I am dedicated to continuous learning and building impactful, real-world solutions that deliver exceptional user experiences.
          </p>
          {/* Resume Button with Dropdown */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => setShowCVOptions(!showCVOptions)}
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 outline-none focus:outline-none"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              DOWNLOAD CV
            </button>

            {showCVOptions && (
              <>
                {/* Overlay to close dropdown when clicking outside */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowCVOptions(false)}
                ></div>
                
                <div className="absolute left-0 mt-2 w-64 rounded-xl shadow-lg bg-white dark:bg-[#1a1a2e] ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 border border-purple-500/30 animate-in fade-in zoom-in duration-200">
                  <div className="py-1">
                    <div className="flex items-center justify-between px-4 py-3 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0 group">
                      <a
                        href={cvLinks.general.view}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setShowCVOptions(false)}
                        className="text-sm text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium flex-grow"
                      >
                        General CV
                      </a>
                      <a
                        href={cvLinks.general.download}
                        download="Kajal_Kumari_General_CV.pdf"
                        onClick={() => setShowCVOptions(false)}
                        className="p-2 text-gray-500 hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-300 transition-colors cursor-pointer"
                        title="Download General CV"
                      >
                        <FiDownload size={18} />
                      </a>
                    </div>
                    
                    <div className="flex items-center justify-between px-4 py-3 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors group">
                      <a
                        href={cvLinks.specialized.view}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setShowCVOptions(false)}
                        className="text-sm text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium flex-grow"
                      >
                        Specialised CV
                      </a>
                      <a
                        href={cvLinks.specialized.download}
                        download="Kajal_Kumari_Specialized_CV.pdf"
                        onClick={() => setShowCVOptions(false)}
                        className="p-2 text-gray-500 hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-300 transition-colors cursor-pointer"
                        title="Download Specialised CV"
                      >
                        <FiDownload size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Kajal Kumari"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
