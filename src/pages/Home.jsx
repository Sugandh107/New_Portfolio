import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import ProjectCard from '../components/ProjectCard';

// --- IMPORTS ---
import { 
  SiC, SiPython, SiHtml5, SiCss3, SiJavascript,
  SiReact, SiNodedotjs, SiNextdotjs,
  SiMongodb, SiFirebase,
  SiGithub, SiPostman, SiCoreldraw,
  SiTailwindcss, SiTypescript
} from "react-icons/si";

import { 
  FaLinux, FaWindows, FaApple, FaAws 
} from "react-icons/fa";

// --- Configuration for Tech Stack ---
const techStackIcons = [
  { name: "C", icon: SiC, color: "text-[#A8B9CC]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: SiCss3, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
  { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
  { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
  { name: "CorelDraw", icon: SiCoreldraw, color: "text-[#009038]" },
  { name: "Linux", icon: FaLinux, color: "text-[#FCC624]" },
  { name: "Windows", icon: FaWindows, color: "text-[#0078D6]" },
  { name: "MacOS", icon: FaApple, color: "text-white" },
];

// --- UPDATED TYPING COMPONENT (Natural Width) ---
const TypewriterWord = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (index >= words.length) {
      setIndex(0); return;
    }

    const subIndexTimeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150); 

    if (!reverse && subIndex === words[index].length) {
      setReverse(true); return; 
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(subIndexTimeout);
  }, [subIndex, index, reverse, words]);

  return (
    // Removed fixed width so it flows naturally
    <span className="inline-flex items-center text-purple-400 font-semibold">
      <span>{words[index].substring(0, subIndex)}</span>
      <span className={`ml-0.5 w-[2px] h-[1.2em] bg-purple-400 transition-opacity duration-100 ${blink ? "opacity-100" : "opacity-0"}`} />
    </span>
  );
};

// --- Main Component ---
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50 } 
    }
  };

  const highlightedProjects = [
    {
      title: 'HalfFried',
      description: 'A Real-Time Restaurant Management System.',
      color: 'bg-[#A885EE]',
      tech: ['React', 'Node.js', 'Tailwind', 'Vercel','MongoDB','Firebase'],
      link: 'https://half-fried.vercel.app/',
      imageSrc: '/halffried.png'
    },
    {
      title: 'AI CastNotes',
      description: 'AI-powered tool to generate podcast summaries and transcriptions.',
      color: 'bg-[#B91C1C]',
      tech: ['Next.js', 'OpenAI API','Gemini API', 'MongoDB', 'Node.js', 'Vercel'],
      link: 'https://castnotesai.vercel.app/',
      imageSrc: '/castnotes.png'
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mt-16 md:mt-24 space-y-32 px-6 md:px-12 lg:px-24"
    >
      
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl">
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-2">
          Hi, I'm <span className="bg-purple-400 text-transparent bg-clip-text">Sugandh Revankar</span>
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-gray-500 tracking-tight leading-[1.1]">
          Full Stack Developer.
        </motion.h2>

        <motion.p variants={itemVariants} className="text-xl text-gray-400 mt-8 mb-10 max-w-2xl leading-relaxed">
          I craft{' '} 
          <TypewriterWord words={["fantastic", "beautiful", "amazing"]} /> 
          {' '}things with code.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link to="/about" className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 bg-gray-900/50 hover:bg-gray-800 transition-all text-white font-medium">
            Discover more
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* --- STATIC TECH STACK SECTION --- */}
        <motion.div variants={itemVariants} className="mt-20">
          <p className="text-sm font-bold text-gray-200 mb-8 uppercase tracking-wider">Tech stack</p>
          
          {/* Replaced scrolling motion.div with a standard flex-wrap container */}
          <div className="flex flex-wrap gap-8 items-center">
             {techStackIcons.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 group cursor-default relative">
                  <item.icon 
                    className={`w-8 h-8 transition-all duration-300 transform hover:-translate-y-1 group-hover:scale-110 ${item.color}`} 
                  />
                  {/* Tooltip on Hover */}
                  <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                    {item.name}
                  </span>
                </div>
              ))}
          </div>
        </motion.div>
      </section>

      {/* 2. HIGHLIGHTED PROJECTS SECTION */}
      <motion.section variants={itemVariants} className="w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h3 className="text-purple-400 font-semibold mb-2">Highlighted projects</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white">What I've been working on</h2>
          </div>
          
          <Link to="/projects" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">
            See all projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlightedProjects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden flex justify-center">
          <Link to="/projects" className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white font-medium w-full justify-center">
            See all projects <ArrowRight size={18} />
          </Link>
        </div>
      </motion.section>

    </motion.div>
  );
};

export default Home;