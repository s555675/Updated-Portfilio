import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Send, MapPin } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">
              Let's <span className="text-emerald-500">Connect</span>
            </h2>
            <p className="text-zinc-500 text-lg mb-12 max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-emerald-500 group-hover:border-emerald-500/30 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-1">Email Me</p>
                  <a href={`mailto:${resumeData.basics.email}`} className="text-xl font-medium text-white hover:text-emerald-400 transition-colors">
                    {resumeData.basics.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-emerald-500 group-hover:border-emerald-500/30 transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-1">LinkedIn</p>
                  <a 
                    href={resumeData.basics.links.find(l => l.name === 'LinkedIn')?.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xl font-medium text-white hover:text-emerald-400 transition-colors"
                  >
                    Shaik Ishaaq
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-emerald-500 group-hover:border-emerald-500/30 transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-medium text-white">
                    {resumeData.basics.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 backdrop-blur-xl relative"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Ishaaq Shaik"
                    className="w-full px-6 py-4 rounded-2xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="ishaaq*****@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="I am open to work to make big things."
                  className="w-full px-6 py-4 rounded-2xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
                />
              </div>
              
              <button className="w-full py-5 rounded-2xl bg-emerald-600 text-white font-bold flex items-center justify-center gap-3 hover:bg-emerald-500 active:bg-indigo-600 active:scale-95 transition-all duration-300 group shadow-xl shadow-emerald-500/10">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] -z-10 rounded-full" />
    </section>
  );
};
