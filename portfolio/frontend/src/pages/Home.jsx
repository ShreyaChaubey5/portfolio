import React from 'react';
import { motion } from 'framer-motion';

// Custom SVG Icons to prevent named import version mismatches
const GithubIcon = () => (
  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);
const LinkedinIcon = () => (
  <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const LeetcodeIcon = () => (
  <svg className="w-5 h-5 text-orange-400 group-hover:text-orange-300 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.432L7.116 6.267a1.37 1.37 0 0 0-.054 1.828l.054.054 3.334 3.335a1.37 1.37 0 0 0 1.94 0 1.37 1.37 0 0 0 0-1.94l-2.364-2.365 5.046-5.046a1.37 1.37 0 0 0-1.94-1.94l-5.046 5.046-1.127-1.128a1.37 1.37 0 0 0-1.94 0L1.442 9.733a1.37 1.37 0 0 0 0 1.94l6.541 6.541a1.37 1.37 0 0 0 1.94 0l6.54-6.54a1.37 1.37 0 0 0 0-1.94l-3.334-3.334 1.323-1.323a1.374 1.374 0 0 0-.97-2.343z"/></svg>
);

export default function Home({ data, setActivePage }) {
  const { personalInfo } = data;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="space-y-24 pt-4 md:pt-12">
      {/* HERO SECTION CONTAINER */}
      <section className="grid md:grid-cols-12 gap-12 items-center">
        
        {/* LEFT SIDE: DETAILS & TEXT COMPONENT */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="md:col-span-7 space-y-6 order-2 md:order-1">
          <span className="text-purple-400 font-mono tracking-widest text-xs font-bold uppercase block">
            Welcome to my ecosystem
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Hii, I am <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400">{personalInfo.name}</span>
          </h1>
          <h3 className="text-xl md:text-2xl font-bold text-slate-300">
            Aspiring Software Developer + Backend Engineer
          </h3>
          <p className="text-slate-400 text-sm md:text-base max-w-xl font-light leading-relaxed text-justify">
            I specialize in building efficient distributed backends, scalable RESTful automation components, and secure architectural pipelines. Driven by complex algorithms and structured data mapping, I transform technical bottlenecks into responsive, production-ready full-stack applications.
          </p>

          {/* SOCIAL & CODING LINKS GRID */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="https://github.com/ShreyaChaubey5" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#120b24] border border-purple-950/60 rounded-xl hover:border-purple-500 transition-all group text-xs font-medium">
              <GithubIcon /> <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/shreya-chaubey345/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#120b24] border border-purple-950/60 rounded-xl hover:border-purple-500 transition-all group text-xs font-medium">
              <LinkedinIcon /> <span>LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/Shreya345" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#120b24] border border-purple-950/60 rounded-xl hover:border-purple-500 transition-all group text-xs font-medium">
              <LeetcodeIcon /> <span>LeetCode</span>
            </a>
          </div>

          {/* SYSTEM TELEMETRY COUNTERS */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-purple-950/40">
            <div>
              <div className="text-3xl font-black text-white">4</div>
              <div className="text-[10px] text-slate-500 font-mono mt-1 uppercase tracking-wider">Core Projects</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">Java</div>
              <div className="text-[10px] text-slate-500 font-mono mt-1 uppercase tracking-wider">Primary Stack</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">2027</div>
              <div className="text-[10px] text-slate-500 font-mono mt-1 uppercase tracking-wider">B.Tech Grad Year</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: PICTURE CONTAINER WITH ROTATING SPACE GRADIENT */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Outer space cosmic background ring */}
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full p-1 bg-gradient-to-tr from-purple-600 via-transparent to-indigo-500 animate-spin-slow absolute inset-0 blur-[1px]" />
            
            {/* Inner Profile Image Frame */}
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-[#07030e] relative z-10">
              <div className="w-full h-full rounded-full overflow-hidden border border-purple-950/80 bg-[#0d071f] flex items-center justify-center">
                
                <img 
                  src="public/shreya.jpg" 
                  alt="Shreya Chaubey Profile" 
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
            {/* Deep backglow blur effect */}
            <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-3xl -z-10 transform scale-90 pointer-events-none" />
          </motion.div>
        </div>

      </section>

      {/* QUICK CORE ARCHITECTURE SUMMARY BLOCK */}
      <section className="space-y-8 pt-8">
        <h2 className="text-xl font-bold border-b border-purple-950/40 pb-3 text-white tracking-wide">Core Architectural Paradigms</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-6 bg-[#0f0822] border border-purple-950 rounded-xl hover:border-purple-900 transition-all">
            <div className="text-purple-400 text-lg font-bold mb-2">01</div>
            <h4 className="text-white font-bold mb-1">Backend Architecture</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Developing deterministic, enterprise-ready API endpoints using Spring Boot pipelines.</p>
          </div>
          <div className="p-6 bg-[#0f0822] border border-purple-950 rounded-xl hover:border-purple-900 transition-all">
            <div className="text-purple-400 text-lg font-bold mb-2">02</div>
            <h4 className="text-white font-bold mb-1">Data Concurrency</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Structuring decoupled data pipelines mapping relational and document-based records.</p>
          </div>
          <div className="p-6 bg-[#0f0822] border border-purple-950 rounded-xl hover:border-purple-900 transition-all">
            <div className="text-purple-400 text-lg font-bold mb-2">03</div>
            <h4 className="text-white font-bold mb-1">Responsive Interfaces</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Implementing dynamic UI state trees with smooth, state-managed React compositions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}