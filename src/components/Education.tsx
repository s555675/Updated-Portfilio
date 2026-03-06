import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-zinc-900/30">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Academic <span className="text-emerald-500">Foundation</span>
          </h2>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {resumeData.education.map((edu, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl bg-zinc-900 border border-white/5 flex gap-6 items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-2 block">
                  {edu.dates}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {edu.institution}
                </h3>
                <p className="text-zinc-400">
                  {edu.degree}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
