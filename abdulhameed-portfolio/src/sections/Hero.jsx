import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hero = () => {
  // --- 3D TILT MATRIX CORE ENGINE ---
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [12, -12]);
  const rotateY = useTransform(x, [0, 400], [-12, 12]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX * (400 / width));
    y.set(mouseY * (400 / height));
  }

  function handleMouseLeave() {
    x.set(200);
    y.set(200);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const floatAnimation = (delay) => ({
    y: ["0px", "-10px", "0px"],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: delay
    }
  });

  // --- EXPANDED HIGH-VISIBILITY BACKGROUND SHAPES ARRAY (14 ITEMS) ---
  const backgroundShapes = [
    { top: "8%", left: "5%", size: "w-24 h-24", delay: 0, rotate: [0, 360], duration: 35, type: 'crosshair' },
    { top: "14%", right: "8%", size: "w-16 h-16", delay: 1.5, rotate: [45, 225], duration: 24, type: 'diamond' },
    { bottom: "18%", left: "6%", size: "w-36 h-2", delay: 0.8, rotate: [-8, 8], duration: 16, type: 'rule' },
    { bottom: "12%", right: "10%", size: "w-14 h-14", delay: 2.2, rotate: [0, -360], duration: 20, type: 'spark' },
    { top: "38%", left: "2%", size: "w-16 h-14", delay: 3, rotate: [90, 450], duration: 30, type: 'circle' },
    // Newly Added Dense Spatial Particles
    { top: "5%", left: "45%", size: "w-12 h-12", delay: 0.5, rotate: [0, 360], duration: 40, type: 'spark' },
    { top: "25%", left: "28%", size: "w-16 h-16", delay: 1.9, rotate: [-45, 315], duration: 26, type: 'triangle' },
    { top: "50%", right: "4%", size: "w-20 h-20", delay: 2.7, rotate: [180, -180], duration: 34, type: 'crosshair' },
    { bottom: "35%", right: "28%", size: "w-28 h-2", delay: 1.1, rotate: [5, -5], duration: 15, type: 'rule' },
    { bottom: "8%", left: "30%", size: "w-10 h-10", delay: 3.3, rotate: [0, 360], duration: 18, type: 'diamond' },
    { bottom: "28%", left: "22%", size: "w-12 h-12", delay: 0.2, rotate: [0, -360], duration: 22, type: 'spark' },
    { top: "65%", left: "15%", size: "w-14 h-14", delay: 2.5, rotate: [30, 390], duration: 28, type: 'circle' },
    { top: "75%", right: "20%", size: "w-16 h-16", delay: 1.2, rotate: [45, 405], duration: 25, type: 'triangle' },
    { bottom: "5%", right: "45%", size: "w-8 h-8", delay: 0.7, rotate: [0, 360], duration: 12, type: 'spark' }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-[#0a0a0c] flex items-center justify-center overflow-hidden pt-24 pb-12 text-white"
    >
      {/* ========================================================================= */}
      {/* 14-NODE ABSTRACT PARALLAX BACKGROUND LAYERS                              */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[150px]" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#16161a_1px,transparent_1px),linear-gradient(to_bottom,#16161a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_70%,transparent_100%)] opacity-20" />

        {backgroundShapes.map((shape, idx) => (
          <motion.div
            key={idx}
            style={{ top: shape.top, left: shape.left, right: shape.right, bottom: shape.bottom }}
            animate={{ y: ["0px", "-35px", "0px"], rotate: shape.rotate }}
            transition={{
              y: { duration: 5.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: shape.delay },
              rotate: { duration: shape.duration, repeat: Infinity, ease: "linear" }
            }}
            className={`absolute ${shape.size} flex items-center justify-center opacity-35 hover:opacity-75 transition-opacity duration-500 text-emerald-400/70`}
          >
            {shape.type === 'crosshair' && (
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-current stroke-[2] fill-none">
                <circle cx="50" cy="50" r="25" />
                <line x1="50" y1="5" x2="50" y2="95" />
                <line x1="5" y1="50" x2="95" y2="50" />
              </svg>
            )}
            {shape.type === 'diamond' && <div className="w-full h-full border-2 border-emerald-500/30 rotate-45 border-dashed rounded-xl" />}
            {shape.type === 'rule' && <div className="w-full h-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent border-t-2 border-dashed border-emerald-400/40" />}
            {shape.type === 'spark' && <div className="text-4xl font-mono drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">✦</div>}
            {shape.type === 'circle' && (
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-current stroke-[1.5] fill-none" strokeDasharray="6 4">
                <circle cx="50" cy="50" r="35" />
                <circle cx="50" cy="50" r="8" fill="currentColor" className="opacity-30" />
              </svg>
            )}
            {shape.type === 'triangle' && (
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-current stroke-[2] fill-none" strokeDasharray="4 4">
                <polygon points="50,15 90,85 10,85" />
              </svg>
            )}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-6xl z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: DETAILS */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-7 space-y-6 text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">Available for Creative Contracts</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-emerald-400 to-blue-500">
                OYEWOLA ABDULHAMEED
              </span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl font-extrabold text-neutral-200 tracking-tight max-w-2xl">
              Creative Designer Building Visual Identities That Inspire
            </motion.h2>

            <motion.p variants={itemVariants} className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl">
              With a passion for design and innovation, I craft impactful brand identities, 
              marketing materials, and digital visuals that help businesses connect with their 
              audience and stand out in a competitive world.
            </motion.p>

            {/* Skill Matrix */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
              {['Branding', 'Print Design', 'Social Media Design', 'Creative Strategy'].map((tag) => (
                <span key={tag} className="text-[11px] font-semibold font-mono bg-[#16161a] border border-neutral-800 text-neutral-300 px-3.5 py-1.5 rounded-xl hover:border-[#10b981]/40 transition-all duration-300">
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#portfolio" className="px-6 py-3 rounded-xl bg-[#10b981] text-black font-bold text-sm tracking-wide shadow-xl shadow-[#10b981]/10 hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all text-center cursor-pointer">
                Inspect Creative Outputs
              </a>
              <a href="#contact" className="px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 font-bold text-sm tracking-wide hover:bg-neutral-800 hover:border-neutral-700 text-center transition-all cursor-pointer">
                Initiate Project Consult
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: 3D STAGE */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end select-none" style={{ perspective: "1000px" }}>
            <motion.div
              onMouseMove={handleMouse}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX: rotateX, rotateY: rotateY, transformStyle: "preserve-3d" }}
              className="relative w-[300px] h-[380px] sm:w-[360px] sm:h-[460px] rounded-3xl bg-[#16161a] border border-neutral-800/80 p-3 shadow-2xl shadow-black/50 group cursor-pointer flex items-center justify-center overflow-visible"
            >
              {/* Higher Concentration Focused Glow Fields */}
              <div style={{ transform: "translateZ(-20px)" }} className="absolute inset-[-2px] rounded-[30px] bg-gradient-to-tr from-[#10b981] via-emerald-400 to-blue-500 opacity-75 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 pointer-events-none z-0 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
              <div style={{ transform: "translateZ(-10px)" }} className="absolute inset-[2px] rounded-[26px] bg-gradient-to-br from-blue-500 via-[#10b981] to-emerald-300 opacity-80 blur-lg group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0" />

              {/* Brush Gradients Backdrop */}
              <div style={{ transform: "translateZ(-5px)" }} className="absolute inset-[-5px] z-0 opacity-40 blur-xs group-hover:opacity-60 transition-opacity pointer-events-none duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#10b981]/40 via-transparent to-blue-500/30 mix-blend-screen" />
                <div className="absolute w-36 h-20 bg-[#10b981]/30 rounded-full top-8 left-4 rotate-[-35deg] transform filter blur-lg animate-pulse" />
                <div className="absolute w-28 h-28 bg-blue-500/25 rounded-full bottom-6 right-3 rotate-[45deg] transform filter blur-lg" />
              </div>

              <div className="absolute inset-3 rounded-2xl bg-gradient-to-br from-neutral-900 via-[#121214] to-[#0a0a0c] z-0" />
              <div style={{ transform: "translateZ(20px)" }} className="absolute inset-5 border border-dashed border-neutral-800/30 rounded-xl pointer-events-none z-10 transition-transform duration-300 group-hover:border-[#10b981]/30" />

              {/* Profile Photo */}
              <div style={{ transform: "translateZ(40px)" }} className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl z-20 transition-all duration-300 group-hover:shadow-[#10b981]/20 bg-neutral-900">
                <img src="/profile.jpeg" alt="OYEWOLA ABDULHAMEED Profile" className="w-full h-full object-cover grayscale opacity-95 group-hover:grayscale-0 group-hover:scale-103 group-hover:opacity-100 transition-all duration-500" />
              </div>

              {/* TOOL EMBLEMS */}
              
              {/* ICON 1: COREL DRAW */}
              <motion.div 
                style={{ transform: "translateZ(85px)" }} animate={floatAnimation(0)}
                className="absolute -top-6 -left-6 w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-800/80 shadow-2xl flex items-center justify-center p-1.5 z-30 group-hover:border-[#10b981]/40 transition-colors"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="corelLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00db66" />
                      <stop offset="100%" stopColor="#008f37" />
                    </linearGradient>
                  </defs>
                  <path d="M 10,50 C 10,22 22,10 50,10 L 90,10 L 90,50 C 90,78 78,90 50,90 C 22,90 10,78 10,50 Z" fill="url(#corelLeafGrad)" />
                  <path d="M 28,34 L 62,68 L 54,76 L 20,42 Z" fill="#004a1b" opacity="0.4" transform="translate(4, 4)" />
                  <rect x="20" y="24" width="60" height="16" rx="8" fill="#ffffff" transform="rotate(45 50 32)" />
                  <path d="M 67,61 L 76,70 L 68,74 L 63,65 Z" fill="#e0e0e0" />
                  <polygon points="73,67 79,73 75,75" fill="#222222" />
                </svg>
                <div style={{ transform: "translateZ(10px)" }} className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-neutral-950/90 border border-neutral-800 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold tracking-wider text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-md shadow-black/80">
                  CorelDRAW
                </div>
              </motion.div>

              {/* ICON 2: CANVA */}
              <motion.div style={{ transform: "translateZ(70px)" }} animate={floatAnimation(0.5)} className="absolute top-1/4 -right-8 w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-800/80 shadow-2xl flex items-center justify-center p-2 z-30 group-hover:border-cyan-400/40 transition-colors">
                <svg viewBox="0 0 80 80" className="w-full h-full fill-current text-cyan-400">
                  <path d="M57.3 48.2c-.3 0-.6.3-.9.9-3.4 6.9-9.3 11.8-16.1 11.8-7.9 0-12.8-7.1-12.8-17 0-16.7 9.3-26.3 17.4-26.3 3.8 0 6.2 2.4 6.2 6.2 0 4.5-2.5 6.9-2.5 8.5 0 .7.4 1.1 1.3 1.1 3.5 0 7.7-4.1 7.7-9.8 0-5.6-4.9-9.7-13-9.7-13.5 0-25.5 12.5-25.5 29.8 0 13.4 7.6 22.2 19.4 22.2 12.5 0 19.7-12.4 19.7-16.4 0-.9-.4-1.3-.9-1.3z" />
                </svg>
                <div style={{ transform: "translateZ(10px)" }} className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-neutral-950/90 border border-neutral-800 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold tracking-wider text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-md shadow-black/80">
                  Canva
                </div>
              </motion.div>

              {/* ICON 3: FIGMA */}
              <motion.div style={{ transform: "translateZ(80px)" }} animate={floatAnimation(1.1)} className="absolute bottom-12 -right-6 w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-800/80 shadow-2xl flex items-center justify-center p-2.5 z-30 group-hover:border-purple-500/40 transition-colors">
                <svg viewBox="0 0 24 24" className="w-full h-full text-purple-500 stroke-current stroke-2 fill-none">
                  <path d="M9 5a2.5 2.5 0 0 1 2.5 2.5V10H9a2.5 2.5 0 0 1 0-5zM9 10a2.5 2.5 0 0 1 2.5 2.5V15H9a2.5 2.5 0 0 1 0-5zM12.5 10H15a2.5 2.5 0 0 1 0 5h-2.5V10zM12.5 5H15a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 15 10h-2.5V5zM9 15a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 9 20a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 9 15z" fill="currentColor" fillOpacity="0.2" />
                </svg>
                <div style={{ transform: "translateZ(10px)" }} className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-neutral-950/90 border border-neutral-800 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold tracking-wider text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-md shadow-black/80">
                  Figma
                </div>
              </motion.div>

              {/* ICON 4: PHOTOSHOP */}
              <motion.div style={{ transform: "translateZ(88px)" }} animate={floatAnimation(0.3)} className="absolute -bottom-5 -left-4 w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-800/80 shadow-2xl flex items-center justify-center p-2 z-30 group-hover:border-blue-400/40 transition-colors font-mono font-black text-xs text-blue-400">
                <div className="w-full h-full bg-blue-950/40 border border-blue-500/40 rounded-md flex items-center justify-center font-bold tracking-tighter text-[11px]">Ps</div>
                <div style={{ transform: "translateZ(10px)" }} className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-neutral-950/90 border border-neutral-800 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold tracking-wider text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-md shadow-black/80">
                  Photoshop
                </div>
              </motion.div>

              {/* ICON 5: ILLUSTRATOR */}
              <motion.div style={{ transform: "translateZ(92px)" }} animate={floatAnimation(0.8)} className="absolute -top-5 right-12 w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-800/80 shadow-2xl flex items-center justify-center p-2 z-30 group-hover:border-amber-500/40 transition-colors font-mono font-black text-xs text-amber-500">
                <div className="w-full h-full bg-amber-950/40 border border-amber-500/40 rounded-md flex items-center justify-center font-bold tracking-tighter text-[11px]">Ai</div>
                <div style={{ transform: "translateZ(10px)" }} className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-neutral-950/90 border border-neutral-800 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold tracking-wider text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-md shadow-black/80">
                  Illustrator
                </div>
              </motion.div>

              {/* ICON 6: LIGHTROOM */}
              <motion.div style={{ transform: "translateZ(60px)" }} animate={floatAnimation(1.4)} className="absolute top-1/2 -left-8 w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-800/80 shadow-2xl flex items-center justify-center p-2 z-30 group-hover:border-sky-300/40 transition-colors font-mono font-black text-xs text-sky-300">
                <div className="w-full h-full bg-sky-950/40 border border-sky-300/40 rounded-md flex items-center justify-center font-bold tracking-tighter text-[11px]">Lr</div>
                <div style={{ transform: "translateZ(10px)" }} className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-neutral-950/90 border border-neutral-800 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold tracking-wider text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-md shadow-black/80">
                  Lightroom
                </div>
              </motion.div>

              {/* Accent Particle Spark */}
              <div style={{ transform: "translateZ(75px)" }} className="absolute bottom-[-10px] left-1/3 w-8 h-8 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[#10b981] opacity-0 group-hover:opacity-100 shadow-xl transition-all duration-300 pointer-events-none z-30 scale-75 group-hover:scale-100 font-mono text-[10px]">✦</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;