import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Technical <br />
              <span className="text-emerald-500">Arsenal</span>
            </h2>
            <p className="text-zinc-500 mb-8">
              A comprehensive list of tools, languages, and technologies I've mastered to build scalable, high-performance applications.
            </p>
            
            <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
              <h4 className="text-white font-bold mb-2">Continuous Learning</h4>
              <p className="text-sm text-zinc-400">
                I'm currently exploring the frontiers of AI, LLMs, and advanced cloud orchestration.
              </p>
            </div>
          </div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {resumeData.skills.map((skillGroup, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  show: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, si) => (
                    <span
                      key={si}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-400 text-sm hover:text-white hover:border-white/20 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
