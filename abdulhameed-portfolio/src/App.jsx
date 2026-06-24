import React from 'react';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Portfolio from './sections/Portfolio.jsx';
import Contact from './sections/Contact.jsx';
import Services from './sections/Services.jsx';

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Global Navigation Bar */}
      <Navbar />

      <main>
        {/* Interactive Glassmorphic Hero Section */}
        <Hero />

        {/* Brand Architecture & Socials Section */}
        <About />

        {/* Dynamic Skill Matrices */}
        <Skills />

        {/* Premium Portfolio Case Studies Grid */}
        <Portfolio />

        {/* High-Impact Contact Portal */}
        <Contact />
      </main>

      {/* 2. ADD THIS RENDERING TAG HERE (REPLACING THE OLD CODE YOU DELETED): */}
      <Footer />
    </div>
  );
}