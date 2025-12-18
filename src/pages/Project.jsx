import React from 'react';
import { motion } from 'framer-motion'; 
import ProjectCard from '../components/ProjectCard'; // Import the reusable ProjectCard

const projectsData = [
  {
    title: 'snxtw',
    description: 'Starter Template for Initiating Your Next.js Projects. Quickly bootstrap your new application.',
    color: 'bg-gradient-to-br from-red-500 to-pink-600',
    tech: ['TS', 'Next', 'Tailwind', 'Shadcn'],
    link: '#'
  },
  {
    title: ' ',
    description: 'My digital home on the internet. Built with modern web technologies and optimized for performance.',
    color: 'bg-[#A885EE]', // Purple
    tech: ['React', 'Vite', 'Tailwind', 'FramerMotion'],
    link: '#'
  },
  {
    title: 'Yummy Bros',
    description: 'On-Demand healthy food delivery service. Simplifying meal prep for fitness enthusiasts.',
    color: 'bg-[#B91C1C]', // Red
    tech: ['Laravel', 'Vue', 'MySQL', 'Redis', 'Inertia'],
    link: '#'
  },
  {
    title: 'Shooting Sport',
    description: 'Varnion shooting sport event website. Handling registration and event management.',
    color: 'bg-[#0EA5E9]', // Blue
    tech: ['JS', 'Bootstrap', 'JQuery', 'PHP'],
    link: '#'
  },
  {
    title: 'Client Project Alpha',
    description: 'A confidential e-commerce platform developed for a startup client, focusing on scalability.',
    color: 'bg-green-600',
    tech: ['Nest.js', 'MongoDB', 'React', 'Apollo'],
    link: '#'
  },
  {
    title: 'Internal Dashboard',
    description: 'A custom internal dashboard for tracking project progress and resource allocation.',
    color: 'bg-yellow-600',
    tech: ['Node.js', 'Express', 'D3.js', 'PostgreSQL'],
    link: '#'
  },
];

const Projects = () => {
  // Animation variants for the main content
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  // Animation variants for the staggered grid items
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 10 
      }
    }
  };

  return (
    // Apply padding for side space consistency
    <div className="mt-10 px-6 md:px-12 lg:px-24">
      
      {/* Header and Subtitle Animation */}
      <motion.h1 
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Projects
      </motion.h1>

      <motion.p 
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }} // Stagger delay for subtitle
        className="text-gray-400 text-lg mb-16"
      >
        A collection of finest projects that I have built. ❤️
      </motion.p>

      {/* Projects Grid with Staggered Animation */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }} // Stagger container
      >
        {projectsData.map((project, idx) => (
          <motion.div 
            key={idx}
            variants={cardVariants}
            // Use whileInView instead of initial/animate for scroll-triggered animation
            // viewport={{ once: true, amount: 0.3 }} // ensures it animates once when 30% visible
          >
            {/* Reusing the styled ProjectCard component */}
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;