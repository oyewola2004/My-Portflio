import React from 'react';
import { motion } from 'framer-motion';
import { FiFeather, FiLayout, FiPieChart, FiSpeaker } from 'react-icons/fi';
import { services } from '../data/portfolioData';

const iconMap = { FiFeather, FiLayout, FiPieChart, FiSpeaker };

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div>
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase block mb-2">What I Offer</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Operational Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                whileHover={{ scale: 1.01 }}
                key={service.id}
                className="bg-zinc-900 border border-zinc-800/80 rounded-2xl p-6 md:p-8 space-y-4 relative overflow-hidden group hover:border-zinc-700 transition-colors"
              >
                <div className="text-3xl text-emerald-400 p-3 bg-zinc-950 border border-zinc-800 w-fit rounded-xl">
                  {IconComponent && <IconComponent />}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.features.map(f => (
                    <span key={f} className="text-xs bg-zinc-950 text-zinc-400 border border-zinc-800 px-3 py-1 rounded-md">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}