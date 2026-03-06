import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SplashLoader } from './components/SplashLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading && <SplashLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <AnimatedBackground />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <div className="space-y-32 pb-32">
              <Experience />
              <Achievements />
              <Skills />
              <Education />
              <Contact />
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
