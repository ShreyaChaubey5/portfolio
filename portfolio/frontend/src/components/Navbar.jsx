import React from 'react';

export default function Navbar({ activePage, setActivePage, email }) {
  return (
    <nav className="w-full py-5 px-8 flex justify-between items-center border-b border-purple-950/30 backdrop-blur-md sticky top-0 z-50 bg-[#07030e]/80">
      <div className="text-xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400 cursor-pointer" onClick={() => setActivePage('home')}>
        SHREYA CHAUBEY
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
        <button onClick={() => setActivePage('home')} className={`transition-all ${activePage === 'home' ? 'text-purple-400 border-b-2 border-purple-500 pb-1' : 'text-slate-400 hover:text-white'}`}>
          Home
        </button>
        <button onClick={() => setActivePage('projects')} className={`transition-all ${activePage === 'projects' ? 'text-purple-400 border-b-2 border-purple-500 pb-1' : 'text-slate-400 hover:text-white'}`}>
          Projects
        </button>
        <button onClick={() => setActivePage('experience')} className={`transition-all ${activePage === 'experience' ? 'text-purple-400 border-b-2 border-purple-500 pb-1' : 'text-slate-400 hover:text-white'}`}>
          Experience
        </button>
      </div>

      <a href={`mailto:${email}`} className="px-5 py-2 rounded-full border border-purple-500/50 text-sm font-bold text-white bg-gradient-to-r from-purple-900/40 to-indigo-900/40 hover:from-purple-600 hover:to-indigo-600 transition-all shadow-md shadow-purple-500/10">
        Hire Me
      </a>
    </nav>
  );
}