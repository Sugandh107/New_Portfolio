import React from 'react';
import { motion } from 'framer-motion'; 
import ProjectCard from '../components/ProjectCard';

const projectsData = [
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
    },
    {
      title: 'TripBud',
      description: 'Hotel And Flight Booking Platform.',
      color: 'bg-[#A885EE]',
      tech: ['React.js','Tailwind CSS', 'Express.js' , 'Node.js', 'MongoDB', 'Vercel'],
      link: 'https://tripbud.vercel.app/',
      imageSrc: 'tripbud.png'
    },
    {
      title: 'Component 101',
      description: 'Parts Search + Chrome Extension',
      color: 'bg-[#0EA5E9]',
      tech: ['React.js','Tailwind CSS', 'Express.js' , 'Node.js', 'MongoDB', 'Vercel'],
      link: 'https://components101.com/resistors',
      imageSrc: '/components101.jpg'
    },
    {
      title: 'Manashakti',
      description: 'Dr Conusltation Website',
      color: 'bg-[#92278F]',
      tech: ['React.js', 'Tailwind CSS', 'Vercel'],
      link: 'https://manashakti.info/',
      imageSrc: '/manashakti.png'
    }
];

const Projects = () => {
  // Header Animation (Loads immediately or on view)
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  // Card Animation (Same physics as before)
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
    <div className="mt-10 px-6 md:px-12 lg:px-24">
      
      {/* Header */}
      <motion.h1 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible" // Triggers on scroll
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Projects
      </motion.h1>

      <motion.p 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible" // Triggers on scroll
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-lg mb-16"
      >
        A collection of finest projects that I have built. ❤️
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div 
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible" // The magic prop for scroll animation
            viewport={{ 
              once: true,  // Animates only the first time you scroll to it
              amount: 0.2  // Starts when 20% of the card is visible
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;