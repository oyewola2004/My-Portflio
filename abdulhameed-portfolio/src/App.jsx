import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- Updated Pathing Matrix Matching image_62687a.png Exactly ---
import JourneyGateway from './JourneyGateway.jsx';
import SoftwarePortfolio from './sections/SoftwarePortfolio.jsx';

// --- Your Existing Graphics Portfolio Components ---
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Portfolio from './sections/Portfolio.jsx';
import Contact from './sections/Contact.jsx';

const GraphicsDesignPortfolio = () => {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<JourneyGateway />} />
        <Route path="/software" element={<SoftwarePortfolio />} />
        <Route path="/design" element={<GraphicsDesignPortfolio />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}