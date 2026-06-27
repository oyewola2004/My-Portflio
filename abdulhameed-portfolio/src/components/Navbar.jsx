import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiArrowLeft } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Skills', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => document.getElementById(link.toLowerCase()));
      const scrollPosition = window.scrollY + 160;

      sections.forEach(section => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Left Actions Side: Gateway Forward Route Connection & Logo */}
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-zinc-500 hover:text-emerald-400 transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="hidden sm:inline">BACK TO SELECTION</span>
          </Link>
          
          <div className="h-4 w-[1px] bg-zinc-800 hidden sm:block" />

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="text-sm font-mono font-black tracking-widest uppercase text-white cursor-pointer"
          >
            OYEWOLA ABDULHAMEED<span className="text-emerald-400">.</span>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleScrollTo(link)}
              className={`text-sm tracking-wide font-medium transition-colors cursor-pointer ${
                activeSection === link.toLowerCase() ? 'text-emerald-400 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden fixed top-[73px] left-0 w-full h-screen bg-zinc-950/95 backdrop-blur-2xl flex flex-col pt-12 px-8 gap-6 border-t border-zinc-900">
          {/* Quick Gateway Backlink inside mobile menu stack */}
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="text-left text-xl font-mono font-bold text-zinc-500 pb-4 border-b border-zinc-900 flex items-center gap-2"
          >
            <FiArrowLeft /> Back to Selection
          </Link>
          
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleScrollTo(link)}
              className={`text-left text-2xl font-semibold cursor-pointer ${
                activeSection === link.toLowerCase() ? 'text-emerald-400' : 'text-zinc-400'
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}