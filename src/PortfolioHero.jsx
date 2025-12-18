import React from 'react';
import { Moon, Command } from 'lucide-react';

const PortfolioHero = () => {
  const techStack = [
    { name: 'TypeScript', icon: 'TS' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'PHP', icon: 'PHP' },
    { name: 'Kotlin', icon: 'K' },
    { name: 'Next.js', icon: 'N' },
    { name: 'React', icon: '⚛' },
    { name: 'Nuxt', icon: '▲' },
    { name: 'Vue', icon: 'V' },
    { name: 'Laravel', icon: 'L' },
    { name: 'Nest', icon: 'N' },
    { name: 'Tailwind', icon: '~' },
    { name: 'MySQL', icon: 'My' },
    { name: 'PostgreSQL', icon: 'P' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="bg-white text-black px-2 py-1 rounded font-bold text-xl">
            m
          </div>
          <span className="font-semibold text-xl">bonabrian</span>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#blog" className="text-gray-400 hover:text-white transition">Blog</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a>
          <a href="#dashboard" className="text-gray-400 hover:text-white transition">Dashboard</a>
          <a href="#guestbook" className="text-gray-400 hover:text-white transition">Guestbook</a>
          <a href="#endorsements" className="text-gray-400 hover:text-white transition">Endorsements</a>
          <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-800 rounded-lg transition">
            <Moon size={20} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition">
            <Command size={20} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-start justify-center px-8 py-32 max-w-6xl">
        <h1 className="text-7xl font-bold mb-8 leading-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Bona Brian Siagian
          </span>
          <br />
          <span className="text-gray-300">Software Engineer</span>
        </h1>

        <p className="text-2xl text-gray-400 mb-12 max-w-3xl">
          I craft interactive things with code. I also talk and write about those things.
        </p>

        <button className="px-8 py-4 border-2 border-gray-600 rounded-lg text-lg hover:bg-gray-900 transition flex items-center gap-2 group">
          Discover more
          <span className="transform group-hover:translate-x-1 transition">→</span>
        </button>

        {/* Tech Stack */}
        <div className="mt-24">
          <h3 className="text-lg font-semibold mb-6">Tech stack</h3>
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 px-4 py-3 rounded-lg hover:border-gray-700 transition cursor-pointer"
                title={tech.name}
              >
                <span className="text-gray-400 font-mono text-sm">{tech.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Button */}
      <button className="fixed bottom-8 right-8 bg-white text-black p-4 rounded-full hover:bg-gray-200 transition shadow-lg">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </button>
    </div>
  );
};

export default PortfolioHero;