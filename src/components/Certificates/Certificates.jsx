import React from "react";
import { certificates } from "../../constants";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans transition-colors duration-300 overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-20 relative">
        <h2 className="text-4xl font-bold text-purple-500 transition-colors duration-300 uppercase tracking-wider relative z-10">
          Certificates
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 relative z-10"></div>
        
        {/* Horizontal Connector Line (Hidden on mobile) */}
        <div className="hidden lg:block absolute top-[110%] left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 -mx-10 mt-8"></div>
      </div>

      {/* Certificates Tree Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {certificates.map((cert) => (
          <div key={cert.id} className="relative group">
            {/* Vertical Connector Line (Hidden on mobile) */}
            <div className="hidden lg:block absolute -top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-200 dark:bg-gray-700 transition-colors duration-300"></div>
            
            {/* Connector Dot */}
            <div className="hidden lg:block absolute -top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_#8245ec]"></div>

            {/* Certificate Card */}
            <div className="bg-white/20 dark:bg-gray-900/40 backdrop-blur-2xl rounded-2xl border border-gray-200 dark:border-white/20 p-6 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/30 flex flex-col h-full">
              {/* Image Section */}
              <div className="w-full aspect-video rounded-xl overflow-hidden mb-6 shadow-md border border-gray-100 dark:border-gray-800">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Section */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-[#8245ec] mb-1">
                    {cert.organization}
                  </p>
                  <p className="text-xs text-gray-400 mb-4">{cert.date}</p>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                  {cert.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
