import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div>
          <div className="text-2xl font-bold tracking-tighter text-white mb-2">
            SI<span className="text-emerald-500">.</span>
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} {resumeData.basics.name}. Built with passion & precision.
          </p>
        </div>
        
        <div className="flex gap-8">
          {resumeData.basics.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`mailto:${resumeData.basics.email}`}
            className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          >
            Email
          </a>
        </div>
      </motion.div>
    </footer>
  );
};
