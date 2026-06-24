import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="space-y-8">
          <div>
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase block mb-2">Software Stack</span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight">Tool Competency Matrix</h3>
          </div>
          <div className="space-y-5">
            {skills.designTools.map((tool) => (
              <div key={tool.name} className="space-y-1">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-zinc-300">{tool.name}</span>
                  <span className="text-zinc-500">{tool.level}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: `${tool.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-teal-400 text-xs font-bold tracking-widest uppercase block mb-2">Capabilities</span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight">Core Competencies</h3>
          </div>
          <div className="space-y-5">
            {skills.designSkills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-zinc-300">{skill.name}</span>
                  <span className="text-zinc-500">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}