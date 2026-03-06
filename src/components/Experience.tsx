import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MapPin, Calendar, Briefcase } from 'lucide-react';
import { resumeData } from '../data/resume';
import { cn } from '../lib/utils';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-px bg-emerald-500" />
              <span className="text-emerald-400 text-xs font-mono uppercase tracking-[0.3em]">Career Path</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
              Professional <span className="text-emerald-500">Journey</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              A comprehensive timeline of my professional growth, technical leadership, and contributions across the software development lifecycle.
            </p>
          </div>
          
          <div className="flex gap-6">
             <div className="px-6 py-4 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col gap-1 backdrop-blur-xl">
                <span className="text-3xl font-bold text-white">4+</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Years Exp</span>
             </div>
             <div className="px-6 py-4 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col gap-1 backdrop-blur-xl">
                <span className="text-3xl font-bold text-white">10+</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Projects</span>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={cn(
                "group rounded-[2rem] border transition-all duration-700 overflow-hidden",
                expandedIndex === i 
                  ? "bg-white/[0.03] border-white/10 shadow-2xl shadow-emerald-500/5" 
                  : "bg-zinc-900/20 border-white/5 hover:border-white/10 hover:bg-white/[0.01]"
              )}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="w-full p-6 md:p-8 flex items-start justify-between text-left active:bg-indigo-500/10 transition-colors"
              >
                <div className="flex gap-6">
                  <div className="hidden md:flex w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 items-center justify-center text-emerald-500 shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400">
                      <span className="text-white font-medium">{exp.company}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {exp.dates}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                  className="text-zinc-500"
                >
                  <ChevronDown />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0 md:ml-18">
                      <div className="h-px bg-white/10 mb-6" />
                      
                      <ul className="space-y-4 mb-8">
                        {exp.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex gap-3 text-zinc-400 leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {exp.metrics && (
                        <div className="flex flex-wrap gap-3">
                          {exp.metrics.map((metric, mi) => (
                            <div key={mi} className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
                              {metric}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
