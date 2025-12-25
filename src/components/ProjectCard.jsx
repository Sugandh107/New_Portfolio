import React from 'react';

const ProjectCard = ({ title, description, color, tech, link, imageSrc }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block h-full">
      <div className="relative flex flex-col h-full rounded-2xl bg-[#111] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
        
        {/* Top: Colorful Background & Laptop Mockup */}
        <div className={`w-full ${color} flex items-end justify-center pt-8 px-6 md:pt-10 md:px-10 relative overflow-hidden`}>
          
          {/* Laptop Shape Wrapper */}
          <div className="relative w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            
            {/* Screen Lid */}
            <div className="bg-[#0f0f0f] rounded-t-lg md:rounded-t-xl border-[2px] md:border-[3px] border-[#2a2a2a] border-b-0 aspect-[16/10] flex items-center justify-center relative shadow-2xl overflow-hidden">
              
              {/* Camera Dot */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-0.5 md:w-1 md:h-1 bg-gray-600 rounded-full z-10"></div>
              
              {/* Screen Content - Replaced with Image */}
              <div className="w-full h-full bg-black/90 relative p-1">
                 <img 
                   src={imageSrc} 
                   alt={`${title} Preview`} 
                   className="w-full h-full object-cover rounded-t-lg md:rounded-t-xl "
                 />
              </div>
            </div>
            
            {/* Laptop Base */}
            <div className="h-2 md:h-3 bg-[#2a2a2a] rounded-b md:rounded-b-md w-[104%] -ml-[2%] shadow-[0_10px_20px_rgba(0,0,0,0.5)]"></div>
          </div>
        </div>

        {/* Bottom: Project Details */}
        <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-2">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {description}
            </p>
          </div>
          
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap items-center gap-2 mt-auto">
            {tech.map((item, i) => (
              <span 
                key={i} 
                className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-300 bg-white/5 rounded border border-white/5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;