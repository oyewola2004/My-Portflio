import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiLinkedin, 
  FiTwitter, 
  FiInstagram, 
  FiFacebook, 
  FiUser, 
  FiBriefcase, 
  FiAward 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function About() {
  // Pre-filled WhatsApp message template
  const whatsappNumber = "2348132133006"; // Replace with your phone number (include country code, no + or spaces)
  const templateMessage = encodeURIComponent("Hi, my name is ");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${templateMessage}`;

  const socials = [
    { icon: <FiLinkedin size={20} />, url: "www.linkedin.com/in/oyewola-hameed", label: "LinkedIn" },
    { icon: <FiTwitter size={20} />, url: "https://x.com/hameed_oyewola", label: "X (Twitter)" },
    { icon: <FiInstagram size={20} />, url: "https://instagram.com/hameed_oyewola", label: "Instagram" },
    { icon: <FiFacebook size={20} />, url: "https://facebook.com/oyeyemihameed", label: "Facebook" },
  ];

  const stats = [
    { icon: <FiBriefcase className="text-emerald-400" size={24} />, value: "5+ Years", label: "Experience" },
    { icon: <FiAward className="text-emerald-400" size={24} />, value: "100+", label: "Projects Delivered" },
  ];

  return (
    <section id="about" className="relative py-24 bg-zinc-950 overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full text-zinc-400 text-sm mb-4 w-fit">
            <FiUser className="text-emerald-400" /> About Me
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            The Mind Behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              The Visual Architecture
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Socials */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-zinc-400 text-lg leading-relaxed">
              I am a dedicated Graphics & Visual Systems Designer specializing in creating clean, 
              high-impact design architectures that turn raw communication concepts into premium brand experiences.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed">
              Over the past 5 years, my workflow has focused on bridging the gap between raw functionality 
              and striking visual cosmetics, delivering enterprise-ready assets engineered for growth.
            </p>

            {/* Social Media Icon Row */}
            <div className="pt-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">Connect With Me</h4>
              <div className="flex items-center gap-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-zinc-900/50 transition-all duration-300 group"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quick Stats Metrics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-md flex flex-col justify-between h-40"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-black text-white tracking-tight">{stat.value}</div>
                  <div className="text-zinc-500 text-sm mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Persistent Floating WhatsApp Icon Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 text-zinc-950 rounded-full shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors group cursor-pointer"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} className="group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Radar Ping Effect to attract attention */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping -z-10 pointer-events-none" />
      </motion.a>
    </section>
  );
}