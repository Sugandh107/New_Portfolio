import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants for the mobile menu
  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } }
  };

  return (
    <nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-8">
      {/* Added 'relative' to container so we can absolutely center the menu */}
      <div className="relative flex items-center justify-between">
        
        {/* --- LOGO (Left Aligned) --- */}
        <Link to="/" className="flex items-center gap-3 font-bold text-xl tracking-tight z-50">
          <div className="bg-white text-black p-1.5 rounded-sm">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm4 4h2v6H9V9zm4 0h2v6h-2V9z"/>
             </svg>
          </div>
          <span>Sugandh Revankar</span>
        </Link>

        {/* --- DESKTOP LINKS (Centered) --- */}
        {/* We use absolute positioning to center this exactly in the middle of the navbar */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`${location.pathname === link.path ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* --- MOBILE HAMBURGER BUTTON (Right Aligned on Mobile) --- */}
        <div className="md:hidden z-50 flex items-center text-gray-400">
          <button onClick={toggleMenu} className="hover:text-white focus:outline-none p-1">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute left-0 right-0 top-full bg-[#050505] border-b border-white/10 px-6 pb-6 pt-2 shadow-2xl overflow-hidden z-40"
          >
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={`text-lg font-medium py-2 ${location.pathname === link.path ? 'text-white' : 'text-gray-400'} hover:text-purple-400 transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;