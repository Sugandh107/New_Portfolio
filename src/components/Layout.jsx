import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import SpotifyBar from './SpotifyBar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative flex flex-col selection:bg-purple-500/30">
      
      {/* GLOBAL BACKGROUND GRID */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none z-0"></div>

      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* DYNAMIC PAGE CONTENT */}
      <main className="flex-grow relative z-10 w-full max-w-7xl mx-auto px-6 pt-10 pb-20">
        {children}
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />
      
      {/* SPOTIFY WIDGET */}
      {/* <SpotifyBar /> */}
    </div>
  );
};

export default Layout;