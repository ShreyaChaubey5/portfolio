import React from 'react';
import { motion } from 'framer-motion';

// --- Pure SVG Components for Layout Indicators (Zero external library dependencies) ---
const BriefcaseIcon = () => (
  <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

const AwardIcon = () => (
  <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
);

export default function Experience({ data }) {
  // Destructure the clean skill pools, career events, and education from data.json
  const { skills, experience, education, achievements } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid md:grid-cols-12 gap-12 pt-6 max-w-7xl mx-auto"
    >
      
      {/* ================= LEFT COLUMN: THE TECHNICAL SKILL MATRIX ================= */}
      <div className="md:col-span-5 space-y-8">
        <div className="space-y-1">
          <span className="text-purple-400 font-mono tracking-widest text-xs font-bold uppercase block">
            CORE ENGINES
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Technical Matrix
          </h2>
          <p className="text-slate-500 text-xs">
            Granular framework competencies and programming modules compiled straight from local hardware configurations.
          </p>
        </div>

        {/* SKILL CATEGORY CARDS */}
        <div className="space-y-4">
          {[
            { title: "Languages", items: skills.languages, color: "from-blue-500/20" },
            { title: "Backend Infrastructure", items: skills.backend, color: "from-purple-500/20" },
            { title: "Frontend Frameworks", items: skills.frontend, color: "from-pink-500/20" },
            { title: "Databases & Core Tools", items: [...skills.databases, ...skills.tools], color: "from-indigo-500/20" }
          ].map((stack, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ scale: 1.01, borderLeftColor: "#a855f7" }}
              className={`p-5 bg-[#0f0822]/70 border-l-2 border-purple-950 rounded-r-2xl border-t border-r border-b border-purple-950/40 relative overflow-hidden group transition-all duration-300`}
            >
              <h4 className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold mb-2">
                {stack.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item, idx) => (
                  <span key={idx} className="text-sm text-slate-300 bg-black/30 px-2 py-0.5 rounded border border-purple-950/20">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT COLUMN: PROFESSIONAL CAREER TIMELINE ================= */}
      <div className="md:col-span-7 space-y-8">
        <div className="space-y-1 flex items-center gap-3">
          <BriefcaseIcon />
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Engineering Timeline
            </h2>
            <p className="text-slate-500 text-xs">
              Chronological layout mapping corporate roles, leadership pipelines, and institutional credentials.
            </p>
          </div>
        </div>

        {/* THE VERTICAL TIMELINE PIPELINE */}
        <div className="relative border-l border-purple-950/80 pl-6 space-y-10 ml-2 pt-2">
          
          {/* Loop over experience array inside your data.json */}
          {experience.map((exp, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative group">
              {/* Pulsing Core Timeline Dot Node */}
              <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-purple-500 group-hover:bg-white shadow-lg shadow-purple-500 group-hover:shadow-white transition-all duration-300" />
              
              <span className="text-xs font-mono text-purple-400 font-semibold tracking-wider">
                {exp.duration}
              </span>
              
              <h3 className="text-xl font-bold text-white mt-0.5 group-hover:text-purple-400 transition-colors">
                {exp.role} <span className="text-slate-500 font-normal text-sm">@ {exp.company}</span>
              </h3>
              
              <p className="text-slate-400 text-xs sm:text-sm mt-2.5 leading-relaxed text-justify font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}

          {/* DYNAMIC ACADEMIC TIERS ATTACHED TO THE TIMELINE ENDPOINT */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-indigo-500 group-hover:bg-white transition-colors" />
            <span className="text-xs font-mono text-indigo-400 font-semibold tracking-wider">
              {education.duration}
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              {education.degree}
            </h3>
            <h4 className="text-slate-400 text-sm font-medium">
              {education.university}
            </h4>
            
            {/* Class 10 & 12 Academic Metric Badges */}
            <div className="mt-3.5 flex gap-4 text-xs font-mono border-t border-purple-950/50 pt-3 text-slate-500">
              <div>Class 10 Score: <span className="text-white font-bold">{education.metrics.class10}</span></div>
              <div>Class 12 Score: <span className="text-white font-bold">{education.metrics.class12}</span></div>
            </div>
          </motion.div>
        </div>

        {/* HONORS & CERTIFICATIONS SECTION */}
        <div className="pt-6 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 border-t border-purple-950/40 pt-6">
            <AwardIcon /> <span>Certifications & Honors</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((ach, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ borderColor: "rgba(168, 85, 247, 0.3)" }}
                className="p-4 bg-[#100a24]/30 border border-purple-950/60 rounded-xl"
              >
                <h5 className="text-xs font-bold text-slate-200">{ach.title}</h5>
                <p className="text-[11px] text-slate-500 mt-1 font-light leading-normal">{ach.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </motion.div>
  );
}