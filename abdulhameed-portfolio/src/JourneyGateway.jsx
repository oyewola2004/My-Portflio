import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiCpu, FiFeather, FiArrowRight, FiCode, FiLayers, FiTerminal, FiGrid } from 'react-icons/fi';

const JourneyGateway = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-zinc-950 flex flex-col items-center justify-center overflow-hidden px-4 py-16 selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* ─── LAYERED BACKGROUND EFFECTS ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[15%] left-[20%] w-[550px] h-[550px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute bottom-[15%] right-[20%] w-[550px] h-[550px] rounded-full bg-teal-500/10 blur-[130px]" />
        <div className="absolute top-[40%] left-[45%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_80%,transparent_100%)] opacity-35" />
      </div>

      {/* Floating System Tech Metrics */}
      <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto hidden xl:block pointer-events-none opacity-20 font-mono text-[9px] text-zinc-600">
        <div className="absolute top-20 left-12 border border-zinc-800 px-2.5 py-1 rounded bg-zinc-950/40">HOST // NODE_LOCAL_INIT</div>
        <div className="absolute bottom-24 left-16 flex items-center gap-2"><FiGrid size={10} /> <span>LATENCY: 0.024ms</span></div>
        <div className="absolute top-36 right-16 border border-dashed border-zinc-800 p-3 rounded bg-zinc-950/20 max-w-[140px] text-left">
          <span className="text-zinc-500 block mb-1">// RE-ROUTE STATUS</span>
          <span className="text-emerald-400">READY_TO_BRANCH</span>
        </div>
      </div>

      {/* ─── MAIN LANDING BRAND HEADER ─── */}
      <div className="text-center space-y-6 max-w-2xl z-10 mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-mono tracking-widest text-emerald-400 uppercase shadow-md shadow-black/50"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> ENGINE MATRIX ACTIVE
        </motion.div>

        {/* ─── UPDATED NAME TYPOGRAPHY ─── */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-mono tracking-[0.15em] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
        >
          <span className="font-light text-zinc-400">OYEWOLA</span> 
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">ABDULHAMEED</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-6 font-mono text-xs font-black uppercase tracking-[0.6em] text-emerald-400"
        >
          <span>Code</span><span>•</span><span>Design</span><span>•</span><span>Create</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium px-4"
        >
          I'm passionate about building digital products and visual identities that leave lasting impressions.
        </motion.p>

        {/* ─── HIGH-VISIBILITY TARGET BADGE ─── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-4 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-zinc-900/90 border border-zinc-800 rounded-xl shadow-xl shadow-black/60 backdrop-blur-sm hover:border-zinc-700 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-black uppercase tracking-[0.3em] text-zinc-100">
              Choose your journey
            </span>
          </div>
        </motion.div>
      </div>

      {/* ─── DUAL GRAPHICAL CHOICE DECKS ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl z-10 px-4">
        
        {/* CARD 1: SOFTWARE ENGINEERING TRACK */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={() => navigate('/software')}
          className="relative bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[400px] lg:h-[440px] cursor-pointer group hover:border-emerald-500/40 hover:bg-zinc-900/40 transition-all duration-300 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-6 space-y-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                <FiCpu size={20} />
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 uppercase pt-2">
                <FiTerminal size={12} /> SYSTEM LAYER
              </div>
              <h3 className="text-3xl font-black tracking-tight text-white">
                Software
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                Building scalable digital products with React, .NET and modern technologies.
              </p>
            </div>

            {/* INTEGRATED CODE IDE EMULATOR FRAME */}
            <div className="sm:col-span-6 w-full h-44 sm:h-48 bg-zinc-950/90 border border-zinc-900 rounded-xl p-3 font-mono text-[10px] text-zinc-500 relative shadow-inner overflow-hidden transform group-hover:border-zinc-800/80 group-hover:translate-x-1 transition-all duration-300">
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-zinc-900">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                <span className="text-[9px] text-zinc-600 ml-2">App.axaml.cs</span>
              </div>
              <div className="space-y-1 text-left opacity-80">
                <p className="text-emerald-500/90"><span className="text-purple-400">using</span> System.Net;</p>
                <p className="text-zinc-400"><span className="text-blue-400">public class</span> <span className="text-teal-400">CoreEngine</span> &#123;</p>
                <p className="pl-3 text-zinc-500"><span className="text-amber-400">async Task</span> InitAsync() &#123;</p>
                <p className="pl-6 text-emerald-400/80">await MountStorefront();</p>
                <p className="pl-6 text-zinc-500">_logger.Log(<span className="text-emerald-400">"Online"</span>);</p>
                <p className="pl-3 text-zinc-500">&#125;</p>
                <p className="text-zinc-400">&#125;</p>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded flex items-center gap-1.5 text-[8px] text-emerald-400">
                <FiCode size={8} /> <span>v8.0.2</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-zinc-900 pt-4 mt-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 tracking-widest uppercase">
              <span>Enter Workspace</span>
              <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <span className="font-mono text-[9px] tracking-widest text-zinc-700 uppercase group-hover:text-emerald-400/40 transition-colors">Workspace // 01</span>
          </div>
        </motion.div>

        {/* CARD 2: GRAPHICS DESIGN TRACK */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          onClick={() => navigate('/design')}
          className="relative bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[400px] lg:h-[440px] cursor-pointer group hover:border-emerald-500/40 hover:bg-zinc-900/40 transition-all duration-300 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-6 space-y-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                <FiFeather size={20} />
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 uppercase pt-2">
                <FiGrid size={12} /> CANVAS LAYOUT
              </div>
              <h3 className="text-3xl font-black tracking-tight text-white">
                Design
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                Creating visual identities, branding and creative assets that inspire.
              </p>
            </div>

            {/* INTEGRATED ABSTRACT DESIGN VECTOR CANVAS */}
            <div className="sm:col-span-6 w-full h-44 sm:h-48 bg-zinc-950 border border-zinc-900 rounded-xl relative shadow-inner overflow-hidden group-hover:border-zinc-800/80 group-hover:translate-x-1 transition-all duration-300 p-4 flex flex-col justify-between">
              <div className="absolute top-4 right-4 w-14 h-14 rounded-full border border-dashed border-emerald-500/30 group-hover:rotate-45 transition-transform duration-700 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-full" />
              </div>
              <div className="absolute -bottom-6 -left-4 w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              
              <div className="space-y-1.5 z-10 w-2/3 text-left">
                <div className="h-2 w-16 bg-emerald-500/40 rounded" />
                <div className="h-3 w-24 bg-zinc-800 rounded" />
                <div className="h-1.5 w-full bg-zinc-900 rounded" />
                <div className="h-1.5 w-10 bg-zinc-900 rounded" />
              </div>

              <div className="flex items-center gap-1.5 z-10 text-[8px] font-mono text-zinc-600 bg-zinc-900/80 border border-zinc-800/50 w-max px-2 py-0.5 rounded backdrop-blur">
                <FiLayers size={8} /> <span>Vector_Asset.svg</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-zinc-900 pt-4 mt-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 tracking-widest uppercase">
              <span>Enter Studio</span>
              <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <span className="font-mono text-[9px] tracking-widest text-zinc-700 uppercase group-hover:text-emerald-400/40 transition-colors">Studio // 02</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default JourneyGateway;