import React from 'react';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Specific Brand Icons
import { 
  SiGit, SiReact, SiTailwindcss, SiNextdotjs, SiExpress, 
  SiGithub, SiPython, SiTypescript, SiJavascript, SiMongodb, 
  SiMysql, SiSupabase, SiFirebase
} from "react-icons/si";

const About = () => {
  // Animation variants
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
      transition: { duration: 0.5 } 
    }
  };

  // 1. Defined exactly the list you wanted
  const techStack = [
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Express", icon: SiExpress, color: "text-white" },
    { name: "GitHub", icon: SiGithub, color: "text-white" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" }, // For "SQL"
    { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
    { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mt-10 px-6 md:px-12 lg:px-24"
    >
      <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4">
        About Me
      </motion.h1>

      <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-16">
        A little about who I am and what I do.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div className="md:col-span-1">
          <div className="md:sticky md:top-32 h-fit">

            <motion.div
              variants={itemVariants}
              className="bg-neutral-900/50 rounded-2xl p-2 border border-neutral-800 w-48 mx-auto md:w-full lg:w-64"
            >
              <img
                src="/image.jpg"
                alt="Sugandh Revankar"
                className="rounded-xl w-full h-auto  hover:grayscale-0 transition-all duration-500 object-cover aspect-square"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 text-center md:text-left">
              <h3 className="font-bold text-xl text-white">Sugandh Revankar</h3>
              <p className="text-purple-400 text-sm">Full Stack & Backend Developer</p>

              <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-green-400 text-xs font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Open for opportunities
              </div>
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="#"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-white py-2.5 px-4 rounded-lg transition-all hover:bg-neutral-800"
            >
              <FileText size={16} /> Download Resume
            </motion.a>

          </div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-2 space-y-8 text-gray-300 leading-relaxed text-lg">

          <motion.div variants={itemVariants}>
            <p className="mb-6">
              Hi, I’m <span className="text-white font-medium">Sugandh Revankar</span>, a
              <span className="text-white font-medium"> Full Stack Developer</span> with a strong
              focus on backend development and scalable system design.
              I enjoy building reliable, maintainable, and performance-driven applications.
            </p>

            <p>
              I’m currently pursuing my <span className="text-white font-medium">MCA</span> and
              working professionally as a <span className="text-white font-medium">Backend Developer</span>,
              where I deal with real-world APIs, databases, and cloud-hosted systems.
            </p>
          </motion.div>

          <motion.p variants={itemVariants}>
            Over time, I’ve worked across the full stack — from crafting clean and responsive
            UIs using modern frontend frameworks to designing robust backend services,
            authentication systems, and data-driven APIs.
            I prefer <span className="text-white font-medium">SQL-based databases</span> and
            clean backend architecture.
          </motion.p>

          <motion.p variants={itemVariants}>
            Beyond work, I actively explore open-source tools, experiment with new technologies,
            solve coding problems, and build side projects that solve real problems.
            I believe in continuous learning and writing clean, understandable code.
          </motion.p>

          {/* TECH STACK */}
          <motion.div variants={itemVariants} className="pt-8 overflow-hidden">
             <h3 className="text-white font-bold text-xl mb-6">Tech Stack</h3>
             
             {/* Marquee Container */}
             <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                
                <motion.div 
                  className="flex gap-4 w-max"
                  animate={{ x: ["0%", "-50%"] }} // Move halfway to create loop
                  transition={{ 
                    repeat: Infinity, 
                    ease: "linear", 
                    duration: 50 // Adjust speed here
                  }}
                >
                  {/* Duplicate list for seamless loop */}
                  {[...techStack, ...techStack].map((tech, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 px-4 py-2 bg-[#161616] border border-white/5 rounded-full whitespace-nowrap"
                    >
                      <tech.icon className={`w-5 h-5 ${tech.color}`} />
                      <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </motion.div>
             </div>

              <div className="relative w-full overflow-hidden mt-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                
                <motion.div
  className="flex gap-4 w-max"
  animate={{ x: ["-50%", "0%"] }}   // reversed
  transition={{
    repeat: Infinity,
    ease: "linear",
    duration: 50
  }}
>
                  {/* Duplicate list for seamless loop */}
                  {[...techStack, ...techStack].map((tech, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 px-4 py-2 bg-[#161616] border border-white/5 rounded-full whitespace-nowrap"
                    >
                      <tech.icon className={`w-5 h-5 ${tech.color}`} />
                      <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </motion.div>
             </div>
          </motion.div>
          

          {/* CONNECT */}
          <motion.div variants={itemVariants} className="pt-12 border-t border-neutral-800 mt-12">
            <h3 className="text-white font-bold text-xl mb-4">Let’s Connect</h3>

            <p className="mb-6 text-base text-gray-400">
              If you’re looking for a developer to collaborate with, hire, or just chat tech —
              feel free to reach out at{" "}
              <a
                href="mailto:sugandh.revankar@gmail.com"
                className="text-purple-400 hover:text-purple-300 underline underline-offset-4"
              >
                sugandh.revankar@gmail.com
              </a>
            </p>

            <div className="flex gap-6">
              <Github className="w-6 h-6 cursor-pointer hover:text-purple-400 transition-all hover:-translate-y-1" />
              <Linkedin className="w-6 h-6 cursor-pointer hover:text-purple-400 transition-all hover:-translate-y-1" />
              <Mail className="w-6 h-6 cursor-pointer hover:text-purple-400 transition-all hover:-translate-y-1" />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default About;