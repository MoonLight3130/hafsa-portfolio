import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Target, Heart, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About({ setActiveSection }) {
  const { personal, about } = portfolioData;

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('contact');
    }
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/[0.05]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00E88F]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E88F]/10 border border-[#00E88F]/30 text-[#00E88F] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Story</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            {about.title}
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography & Background */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg"
          >
            <p className="text-white font-medium text-xl leading-snug">
              {about.description}
            </p>
            <p>
              {personal.extendedBio}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {about.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#061412]/60 border border-white/[0.06] hover:border-[#00E88F]/30 transition-all duration-200"
                >
                  <h4 className="text-white font-semibold text-base mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E88F]" />
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="pt-4">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 text-[#00E88F] hover:text-[#00F19A] font-semibold transition-colors group"
              >
                <span>Let's collaborate on your next project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Education & Interests Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Card */}
            <div className="bg-[#061412]/80 backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3 text-white font-semibold text-lg mb-5">
                <div className="p-2.5 rounded-lg bg-[#00E88F]/10 text-[#00E88F]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span>Education & Credentials</span>
              </div>
              <div className="space-y-4">
                {about.education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-[#00E88F]/40 pl-4 py-1">
                    <h5 className="text-white font-medium text-sm sm:text-base">{edu.degree}</h5>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">{edu.institution} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests & Specialties */}
            <div className="bg-[#061412]/80 backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3 text-white font-semibold text-lg mb-4">
                <div className="p-2.5 rounded-lg bg-[#00E88F]/10 text-[#00E88F]">
                  <Heart className="w-5 h-5" />
                </div>
                <span>Core Interests & Focus</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#0a1e1b] border border-[#00E88F]/20 text-gray-200 text-xs sm:text-sm font-medium hover:border-[#00E88F]/50 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
