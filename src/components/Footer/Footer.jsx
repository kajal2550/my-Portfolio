import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-gray-900 dark:text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] transition-colors duration-300">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Kajal Kumari</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Activities", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Achievements", id: "achievements" },
            { name: "Certificates", id: "certificates" },
            { name: "LeetCode", id: "leetcode" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-gray-600 dark:text-gray-300 dark:hover:text-purple-500 text-sm sm:text-base my-1 transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/kajal2550" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/kajalkumari9900/" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaFacebook />, link: "#" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-600 dark:text-white hover:text-purple-500 dark:hover:text-purple-500 transition-all transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Kajal Kumari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
