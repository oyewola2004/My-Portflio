import React from 'react';
import { FiLinkedin, FiTwitter, FiInstagram, FiFacebook, FiChevronUp } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <FiLinkedin size={18} />, url: "www.linkedin.com/in/oyewola-hameed" },
    { icon: <FiTwitter size={18} />, url: "https://x.com/hameed_oyewola" },
    { icon: <FiInstagram size={18} />, url: "https://instagram.com/hameed_oyewola" },
    { icon: <FiFacebook size={18} />, url: "https://facebook.com/oyeyemihameed" },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 relative overflow-hidden">
      {/* Subtle background ambient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Professional Clean Copyright Line */}
        <div className="text-zinc-500 text-sm text-center md:text-left tracking-wide">
          &copy; {currentYear} <span className="text-zinc-300 font-medium">Oyewola Abdulhameed</span>. 
          <span className="hidden sm:inline text-zinc-600"> • </span>
          <br className="sm:hidden" />
          <span className="text-zinc-500 text-xs font-mono">All rights reserved.</span>
        </div>

        {/* Right Side: Quick Navigation & Social Shortcuts */}
        <div className="flex items-center gap-6">
          {/* Quick Icon Links */}
          <div className="flex items-center gap-4">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-emerald-400 transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-zinc-800" />

          {/* Smooth Scroll back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-white transition-colors group"
          >
            Top <FiChevronUp className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}