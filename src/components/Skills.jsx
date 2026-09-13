import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { skills } = portfolioData;

  const categories = ['All', 'Frontend', 'Backend', 'Tools', 'Design'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-white/[0.05]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#00E88F]/[0.035] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E88F]/10 border border-[#00E88F]/30 text-[#00E88F] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg"
          >
            A curated stack of proven technologies I use daily to build robust, modern, and high-performance digital products.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-[#00E88F] text-black shadow-[0_0_15px_rgba(0,232,143,0.3)] font-semibold'
                  : 'bg-[#061412]/80 text-gray-300 border border-white/[0.08] hover:border-[#00E88F]/40 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-[#061412]/80 backdrop-blur-sm border border-white/[0.08] hover:border-[#00E88F]/50 rounded-xl p-4 sm:p-5 flex items-center justify-between transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,232,143,0.1)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00E88F] shadow-[0_0_6px_#00E88F]" />
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base group-hover:text-[#00E88F] transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-xs text-gray-400 font-normal">
                    {skill.category}
                  </span>
                </div>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#0a1e1b] text-gray-300 border border-white/[0.06]">
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
