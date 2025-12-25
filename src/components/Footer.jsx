import React from 'react';
import { Github, Linkedin, Rss } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-neutral-900 bg-[#050505] pt-12 pb-24">
       <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm text-gray-400">
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">About</a>
             
              <a href="#" className="hover:text-white">Projects</a>
            </div>
           
            
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900 gap-4">
             <div className="text-gray-500 text-sm">
                © 2025 Sugandh Revankar — <span className="italic">Karnataka, India</span>
             </div>
             <div className="flex gap-6 text-gray-400">
                <Github size={20} className="hover:text-white cursor-pointer" />
                <Linkedin size={20} className="hover:text-white cursor-pointer" />
                <Rss size={20} className="hover:text-white cursor-pointer" />
             </div>
          </div>
       </div>
    </footer>
  );
};

export default Footer;