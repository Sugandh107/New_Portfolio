import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, description, color, tech, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block h-full">
      <div className="relative flex flex-col h-full rounded-2xl bg-[#111] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
        
        {/* Top: Colorful Background & Laptop Mockup */}
        <div className={`h-64 ${color} flex items-end justify-center px-8 pt-12 relative overflow-hidden`}>
          
          {/* Laptop Shape */}
          <div className="relative w-full max-w-[90%] translate-y-4 group-hover:translate-y-2 transition-transform duration-500 ease-out">
            {/* Screen Lid */}
            <div className="bg-[#0f0f0f] rounded-t-xl border-[3px] border-[#2a2a2a] border-b-0 aspect-video flex items-center justify-center relative shadow-2xl">
              {/* Camera Dot */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full"></div>
              
              {/* Screen Content (Placeholder text or Image) */}
              <div className="w-full h-full bg-black/90 flex flex-col items-center justify-center text-center p-4">
                 <span className="font-bold text-gray-500 text-lg">{title}</span>
                 <span className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">Interactive Preview</span>
              </div>
            </div>
            
            {/* Laptop Base */}
            <div className="h-3 bg-[#2a2a2a] rounded-b-md w-[104%] -ml-[2%] shadow-[0_10px_20px_rgba(0,0,0,0.5)]"></div>
          </div>
        </div>

        {/* Bottom: Project Details */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
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