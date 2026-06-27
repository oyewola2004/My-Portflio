import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowLeft, FiDatabase, FiTerminal, FiLayers, 
  FiGithub, FiExternalLink, FiCpu, FiMail, FiMapPin 
} from 'react-icons/fi';

// Organized Technical Matrix matching your background
const SKILLS_DATA = {
  Backend: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'REST APIs', 'JWT Authentication'],
  Frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  Databases: ['SQL Server', 'PostgreSQL'],
  Tools: ['Git', 'GitHub', 'Docker', 'Elasticsearch', 'Postman', 'Visual Studio', 'VS Code']
};

// Target Project Log
const PROJECTS_DATA = [
  {
    name: 'Furniture E-commerce Platform',
    desc: 'An enterprise-grade e-commerce storefront system combining a modular React frontend storefront shell with a robust, transaction-locked .NET 8 backend infrastructure.',
    tech: ['React', '.NET', 'PostgreSQL', 'Tailwind CSS'],
    github: '#',
    live: '#'
  },
  {
    name: 'Neighborhood Community Platform',
    desc: 'A multi-tenant localized operating system handling real-time neighborhood data orchestration, local commerce parameters, and security coordination arrays.',
    tech: ['React', 'ASP.NET Core', 'SQL Server', 'Tailwind CSS'],
    github: '#',
    live: '#'
  },
  {
    name: 'Hotel Reservation System',
    desc: 'A highly optimized hotel booking management engine utilizing Entity Framework Core tracking with structural thread-safe resource allocation mappings.',
    tech: ['.NET', 'PostgreSQL', 'React'],
    github: '#',
    live: '#'
  },
  {
    name: 'AI Design Platform (Concept)',
    desc: 'An automated design orchestration hub utilizing programmatic layout engines to generate clean UI modules and custom visual asset variables.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    github: '#',
    live: '#'
  }
];

// Experience and Timeline Analytics
const TIMELINE_DATA = [
  {
    year: '2025 - Present',
    role: 'Full-Stack Software Engineer',
    company: 'Enterprise Applications',
    details: 'Architecting modular web interfaces and optimized backend systems using clean code principles and maintainable design patterns.'
  },
  {
    year: '5+ Years Experience',
    role: 'Data & Product Analyst',
    company: 'Business Intelligence Track',
    details: 'Transforming complex datasets into high-fidelity product strategy metrics and building specialized data training structures for LLMs.'
  }
];

const SoftwarePortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Stagger variants for smooth, clean presentation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Premium Sticky Navigation Bar */}
      <nav className="sticky top-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/60 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-zinc-400 hover:text-emerald-400 transition-colors group">
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> BACK TO SELECTION
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-mono text-xs font-bold tracking-widest uppercase text-zinc-500">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* TECHNICAL HERO DISPLAY */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="max-w-4xl text-center space-y-6 z-10 flex flex-col items-center">
          
          {/* ─── GLOWING PROFILE AVATAR FRAME ─── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-2 group"
          >
            {/* Ambient Background Radial Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity animate-pulse" />
            
            {/* Main Image Layer (Absolute path from public folder) */}
            <img 
              src="/profile.jpeg" 
              alt="Oyewola Abdulhameed"
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-zinc-800 bg-zinc-900 group-hover:border-emerald-400 transition-colors duration-300 shadow-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                document.getElementById('avatar-fallback').style.display = 'flex';
              }}
            />

            {/* Icon Fallback Wrapper (Active if image path breaks) */}
            <div 
              id="avatar-fallback" 
              className="hidden relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-zinc-800 bg-zinc-900 items-center justify-center text-zinc-600"
            >
              <FiCpu size={40} />
            </div>
            
            {/* System Status Green Dot Indicator */}
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-900 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-mono tracking-widest text-emerald-400 uppercase"
          >
            DEV_WORKSPACE_ONLINE
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">OYEWOLA ABDULHAMEED</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-base md:text-lg font-mono text-zinc-400 max-w-2xl mx-auto"
          >
            Full-Stack Software Engineer building scalable applications, modern APIs, and exceptional digital experiences with clean architecture and maintainable code.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a href="#projects" className="px-6 py-3 bg-emerald-500 text-zinc-950 font-bold rounded-xl text-sm hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/10">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold rounded-xl text-sm hover:bg-neutral-800 transition-all">
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW / ABOUT ME */}
      <section id="about" className="py-24 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-zinc-900">
        <div className="md:col-span-5 text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">01 / OVERVIEW</span>
          <h2 className="text-3xl font-black tracking-tight mt-2 text-white">About System Paths</h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-zinc-400 text-left text-sm md:text-base leading-relaxed">
          <p>
            I am a Full-Stack Software Engineer passionate about solving real-world challenges through elegant, resilient technology architecture. My development methodology balances functional performance metrics with robust database designs to keep core applications fast, structured, and cleanly written.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs uppercase font-bold text-zinc-200">
            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-3 rounded-xl"><FiCpu className="text-emerald-400" /> Backend Systems</div>
            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-3 rounded-xl"><FiLayers className="text-emerald-400" /> Software Architecture</div>
            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-3 rounded-xl"><FiTerminal className="text-emerald-400" /> Performance Tuning</div>
            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-3 rounded-xl"><FiDatabase className="text-emerald-400" /> API Optimization</div>
          </div>
        </div>
      </section>

      {/* TECH MATRIX / SKILLS */}
      <section id="skills" className="py-24 max-w-5xl mx-auto px-6 border-t border-zinc-900">
        <div className="text-left mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">02 / COMPILER COMPATIBILITY</span>
          <h2 className="text-3xl font-black tracking-tight mt-2 text-white">Skill Matrices</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(SKILLS_DATA).map(([category, list]) => (
            <div key={category} className="bg-zinc-900/60 border border-zinc-800/60 p-6 rounded-2xl text-left space-y-4">
              <h4 className="font-mono text-xs font-black uppercase tracking-wider text-zinc-400 border-b border-zinc-800/80 pb-2">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {list.map((skill) => (
                  <span key={skill} className="text-[11px] font-mono bg-zinc-950 border border-zinc-800/60 text-zinc-300 px-2.5 py-1 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FILTERABLE PROJECTS GRID */}
      <section id="projects" className="py-24 max-w-5xl mx-auto px-6 border-t border-zinc-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">03 / REALIZED APPLICATIONS</span>
            <h2 className="text-3xl font-black tracking-tight text-white">Case Studies Registry</h2>
          </div>
          <div className="flex flex-wrap gap-2 font-mono text-[10px] font-bold uppercase">
            {['All', 'React', '.NET', 'ASP.NET Core'].map((filter) => (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)} 
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${activeFilter === filter ? 'bg-emerald-500 border-emerald-500 text-zinc-950 font-black' : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PROJECTS_DATA.filter(p => activeFilter === 'All' || p.tech.includes(activeFilter)).map((proj, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between text-left group hover:border-zinc-700 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-zinc-100 tracking-tight group-hover:text-emerald-400 transition-colors">{proj.name}</h3>
                  <div className="flex gap-3 text-zinc-500">
                    <a href={proj.github} className="hover:text-white transition-colors"><FiGithub size={16} /></a>
                    <a href={proj.live} className="hover:text-white transition-colors"><FiExternalLink size={16} /></a>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{proj.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-zinc-500 pt-4 border-t border-zinc-800/60 mt-6">
                {proj.tech.map(t => <span key={t} className="bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800/40">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CHRONICLE LOGS TIMELINE */}
      <section id="experience" className="py-24 max-w-5xl mx-auto px-6 border-t border-zinc-900">
        <div className="text-left mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">04 / TIMELINE JOURNEY</span>
          <h2 className="text-3xl font-black tracking-tight mt-2 text-white">Chronicle Logs</h2>
        </div>
        <div className="relative border-l border-zinc-800 max-w-3xl ml-4 space-y-12 text-left">
          {TIMELINE_DATA.map((exp, idx) => (
            <div key={idx} className="relative pl-8 group">
              <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-950 border border-zinc-700 group-hover:border-emerald-400 transition-colors" />
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-400">{exp.year}</span>
                <h3 className="text-lg font-bold text-zinc-200 tracking-tight">
                  {exp.role} <span className="text-zinc-600 font-normal">—</span> <span className="text-zinc-400 font-medium">{exp.company}</span>
                </h3>
                <p className="text-zinc-400 text-sm max-w-xl pt-1 leading-relaxed">{exp.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT ANCHOR FORWARDER */}
      <section id="contact" className="py-24 max-w-5xl mx-auto px-6 border-t border-zinc-900 text-left grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">05 / DATA INTEGRATION</span>
            <h2 className="text-3xl font-black tracking-tight text-white">Let's Sync</h2>
          </div>
          <div className="space-y-3 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2.5"><FiMail className="text-emerald-400" /> oyewolahameed@gmail.com</div>
            <div className="flex items-center gap-2.5"><FiMapPin className="text-emerald-400" /> Lagos, Nigeria</div>
          </div>
        </div>
        <div className="md:col-span-7 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl flex items-center justify-center">
          <div className="text-xs font-mono text-zinc-500 border border-dashed border-zinc-800/80 p-8 w-full text-center rounded-xl bg-zinc-950/40">
            [ Form data mapping active. Direct inquiries mapped over secure communication records. ]
          </div>
        </div>
      </section>

    </div>
  );
};

export default SoftwarePortfolio;