import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Zap, Target } from 'lucide-react';
import { resumeData } from '../data/resume';

const icons = [Trophy, Star, Zap, Target];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 bg-zinc-900/30">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Key <span className="text-emerald-500">Impacts</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Measurable successes and recognitions earned throughout my academic and professional career.
          </p>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {resumeData.achievements.map((achievement, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-indigo-500/10 transition-colors" />
                
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="text-3xl font-bold text-white mb-2 tracking-tight">
                  {achievement.metric}
                </div>
                
                <h3 className="text-lg font-bold text-zinc-200 mb-3">
                  {achievement.title}
                </h3>
                
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {achievement.context}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};
