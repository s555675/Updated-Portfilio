import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Linkedin } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background decorative text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap leading-none"
      >
        {resumeData.basics.name.split(' ')[0]}
      </motion.div>

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <span className="w-12 h-px bg-emerald-500" />
            <span className="text-emerald-400 text-xs font-mono uppercase tracking-[0.3em]">
              Available for new opportunities
            </span>
            <span className="w-12 h-px bg-emerald-500" />
          </motion.div>
          
          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter text-white mb-10 leading-[0.85]">
            {resumeData.basics.name}
          </h1>
          
          <div className="flex flex-col items-center gap-6 mb-12">
            <h2 className="text-2xl md:text-4xl font-light text-zinc-400 tracking-tight">
              {resumeData.basics.title.split('|')[0]}
            </h2>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-zinc-800" />
              <span className="text-2xl text-white font-medium tracking-wide">
                AI Specialist (Claude & MCP)
              </span>
              <span className="h-px w-12 bg-zinc-800" />
            </div>
          </div>
          
          <p className="text-zinc-500 text-lg md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            {resumeData.basics.summary}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a
              href="#experience"
              className="group px-12 py-6 rounded-full bg-white text-black font-bold flex items-center gap-3 hover:bg-emerald-600 hover:text-white active:bg-indigo-600 active:scale-95 transition-all duration-300 shadow-2xl shadow-white/5"
            >
              View Experience
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-8">
              <button
                onClick={() => window.print()}
                className="p-5 rounded-full border border-white/10 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/30 active:text-emerald-400 active:border-emerald-500/30 active:scale-90 transition-all duration-300 group bg-white/5"
                title="Download Resume"
              >
                <Download className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <a
                href={`mailto:${resumeData.basics.email}`}
                className="p-5 rounded-full border border-white/10 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/30 active:text-emerald-400 active:border-emerald-500/30 active:scale-90 transition-all duration-300 group bg-white/5"
                title="Email Me"
              >
                <Mail className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={resumeData.basics.links.find(l => l.name === 'LinkedIn')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-full border border-white/10 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/30 active:text-emerald-400 active:border-emerald-500/30 active:scale-90 transition-all duration-300 group bg-white/5"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-mono rotate-90 origin-left translate-x-1">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-emerald-500/50 to-transparent" />
      </motion.div>
    </section>
  );
};


