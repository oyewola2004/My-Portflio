import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiLayers } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-zinc-950 pt-20 overflow-hidden">
      {/* Visual Ambient Light Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy and CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-4 py-1.5 rounded-full text-zinc-400 text-sm"
          >
            <FiLayers className="text-emerald-400" /> Professional Graphics & Visual Systems Designer
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none"
          >
            Hi, I'm Oyewola Abdulhameed <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Crafting High-End Design
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-xl"
          >
            Over 5 years of experience creating robust brand architectures, print design arrays, and high-impact layouts that elevate enterprise products.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button 
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 font-bold px-6 py-3.5 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-emerald-500/10"
            >
              View My Work <FiArrowRight />
            </button>
            <a 
              href="#contact"
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-medium px-6 py-3.5 rounded-xl transition-all"
            >
              Hire Me <FiDownload className="text-zinc-400" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Professional Glassmorphic Profile Photo Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Backlight Ambient Glow Effect behind frame */}
          <div className="absolute w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative group w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-3 transition-all duration-500 hover:border-emerald-500/40">
            <img 
              src="/profile.jpeg" 
              alt="Oyewola Abdulhameed" 
              className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-[1.02]"
              onError={(e) => {
                // Elegant backup rendering context if image file isn't dropped into /public yet
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            
            {/* Fallback Display UI if /public/profile.jpeg doesn't exist yet */}
            <div className="hidden absolute inset-3 bg-zinc-900 border border-zinc-800 rounded-2xl flex-col items-center justify-center text-center p-6">
              <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">Drop Portrait In</span>
              <code className="text-xs text-zinc-400">/public/profile.jpeg</code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}