import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiAward } from 'react-icons/fi';

const About = () => {
  // Animation configuration for sequential card entries
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 25 } 
    },
  };

  // Strategic values to accompany your narrative
  const coreValues = [
    {
      icon: <FiTarget className="text-[#10b981]" size={20} />,
      title: 'Strategic Intent',
      desc: 'Research-driven design focused on driving tangible value and helping brands grow.',
    },
    {
      icon: <FiHeart className="text-[#10b981]" size={20} />,
      title: 'Meaningful Stories',
      desc: 'Transforming abstract concepts into visual frameworks that capture lasting impressions.',
    },
    {
      icon: <FiAward className="text-[#10b981]" size={20} />,
      title: 'Attention to Detail',
      desc: 'Precision layout construction across print design, social media matrices, and digital campaign specs.',
    },
  ];

  const specializationTags = [
    'Branding', 
    'Flyer Design', 
    'Poster Design', 
    'Social Media Graphics', 
    'Print Design', 
    'Creative Strategy'
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0c] text-white relative border-t border-neutral-900/40">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT SIDE: CORE PARAMETERS & OVERVIEW MARKS                               */}
          {/* ========================================================================= */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-32">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#10b981]">
              Identity Matrix
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-1 leading-tight">
              Behind the <br />
              Creative Process
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[#10b981] to-blue-500 rounded-full mt-4" />
            
            {/* Minimal Stat Node Block */}
            <div className="pt-8 grid grid-cols-2 gap-4">
              <div className="bg-[#16161a] border border-neutral-800/60 p-4 rounded-2xl text-left">
                <div className="text-2xl font-black font-mono text-white">5+</div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-1">Years Active</div>
              </div>
              <div className="bg-[#16161a] border border-neutral-800/60 p-4 rounded-2xl text-left">
                <div className="text-2xl font-black font-mono text-[#10b981]">100%</div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-1">Execution Rate</div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: BIO BRIEF & DYNAMIC VALUES                                    */}
          {/* ========================================================================= */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 space-y-8 text-left"
          >
            {/* Structural Narrative Block */}
            <motion.div variants={itemVariants} className="space-y-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              <p className="text-neutral-200 font-medium text-base sm:text-lg">
                I am a Graphic Designer passionate about creating impactful visual experiences that help brands communicate, connect, and grow. With years of experience in branding, print design, social media creatives, and digital marketing materials, I focus on delivering designs that are both visually compelling and strategically effective.
              </p>
              <p>
                My creative process combines research, innovation, and attention to detail to transform ideas into designs that capture attention and leave a lasting impression. Whether working on a brand identity, promotional campaign, or digital content, I strive to create solutions that bring value and tell meaningful stories.
              </p>
            </motion.div>

            {/* Specialization Token Grid */}
            <motion.div variants={itemVariants} className="space-y-3 pt-2">
              <h4 className="text-xs font-bold font-mono text-neutral-500 uppercase tracking-widest">
                Specializing in:
              </h4>
              <div className="flex flex-wrap gap-2">
                {specializationTags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs font-semibold font-mono bg-[#16161a] border border-neutral-800 text-[#10b981] px-3.5 py-1.5 rounded-xl hover:border-[#10b981]/40 transition-all duration-300 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Strategic Value Proposition Matrix Cards */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6"
            >
              {coreValues.map((value, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#121214] border border-neutral-900 rounded-2xl p-5 hover:border-neutral-800 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="p-2.5 bg-[#16161a] border border-neutral-800 rounded-xl w-fit group-hover:border-[#10b981]/20 transition-colors">
                    {value.icon}
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-sm font-bold text-neutral-200 tracking-tight">
                      {value.title}
                    </h5>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;