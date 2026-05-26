import React from 'react';
import { motion } from 'framer-motion';

const GithubIcon = () => (
  <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

export default function Projects({ data }) {
  // Pull the raw projects array generated straight from data.json
  const { projects } = data;

  if (!projects || projects.length === 0) return null;

  return (
    <div className="space-y-28 pt-6 max-w-7xl mx-auto">
      
      {/* SECTION INTRO */}
      <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
        <span className="text-purple-400 font-mono tracking-widest text-xs font-bold uppercase block">
          CASE FILES
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          System Implementations
        </h1>
        <p className="text-slate-500 text-sm">
          A dynamic, data-driven showcase parsing architectural modularity and enterprise pipelines from local backend telemetry.
        </p>
      </div>

      {/* MASSIVE CINEMATIC ALTERNATING GRID (LEFT / RIGHT) */}
      <div className="space-y-40">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              // Expanded container: minimum of 75% screen height on regular viewports and up to 85% on large desktop setups
              className={`flex flex-col lg:flex-row gap-16 items-center min-h-[75vh] lg:min-h-[85vh] ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              
              {/* LARGE-SCREEN IMAGE WRAPPER CANVAS */}
              <div className="w-full lg:w-1/2 h-[45vh] sm:h-[55vh] lg:h-[75vh] group relative">
                <div className="w-full h-full rounded-2xl overflow-hidden border border-purple-950/80 bg-[#0c061a] shadow-2xl shadow-black/90 group-hover:border-purple-500/50 transition-all duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700"
                  />
                  {/* Deep space color gradient masking layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07030e] via-[#07030e]/30 to-transparent opacity-95 pointer-events-none" />
                  
                  {/* Build Code Overlay Badge */}
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-md bg-black/80 text-xs font-mono uppercase text-purple-400 tracking-widest border border-purple-900/40 shadow-xl">
                    Build Repository 0{idx + 1}
                  </div>
                </div>
                {/* Visual backglow bloom */}
                <div className="absolute inset-0 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
              </div>

              {/* EXPANDED TEXT & ARCHITECTURE CASE SHEET */}
              <div className="w-full lg:w-1/2 space-y-8 px-2">
                <div className="space-y-1">
                  <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none group-hover:text-purple-400">
                    {project.title}
                  </h2>
                  <p className="text-purple-400 text-xs sm:text-sm font-mono tracking-wider uppercase font-semibold">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed text-justify font-light">
                  {project.summary}
                </p>

                {/* DYNAMIC PIPELINE SUB-LIST MAPPED DIRECTLY FROM BACKEND ARRAYS */}
                {project.architectureDetails && (
                  <div className="space-y-4 bg-[#0e0721]/50 p-6 lg:p-8 rounded-2xl border border-purple-950/70 shadow-lg backdrop-blur-sm">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 border-b border-purple-950/50 pb-2">
                      Pipeline Specifications
                    </h4>
                    <div className="space-y-3.5">
                      {project.architectureDetails.map((detail, dIdx) => (
                        <div key={dIdx} className="flex gap-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                          <span className="text-purple-500 select-none font-bold">•</span>
                          <p className="font-normal text-justify">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TECH STACK LOOPS */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 bg-[#130b26] text-purple-300 font-mono text-xs rounded-md border border-purple-950/80 shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* COMPILATION ACTION BAR */}
                <div className="pt-6 border-t border-purple-950/40">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#120b24] border border-purple-950/80 rounded-xl hover:border-purple-500 hover:bg-[#160d2b] transition-all group text-xs font-bold tracking-wide shadow-lg shadow-black/40"
                  >
                    <GithubIcon />
                    <span>Compile Source Code</span>
                  </a>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}