import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Briefcase, Check, Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About({ setActiveSection }) {
  const { personal, about } = portfolioData;

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection?.('contact');
    }
  };

  const imageSrc = about.image || personal.avatar || '/images/about-me.jpg';
  const educationItem = about.education?.[0] || {
    degree: "B.Tech in Computer Science",
    institution: "MES Institute, Kollam (KTU)",
    year: "2023–2027",
  };
  const experienceItem = about.experience || {
    role: "Frontend Engineer",
    company: "PromptLogix",
    period: "2026 - Present",
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden border-t border-white/[0.05]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#00E88F]/[0.035] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00E88F]/[0.025] rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00E88F]/10 border border-[#00E88F]/30 text-[#00E88F] text-xs font-semibold tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(0,232,143,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{about.badge || "Know Me Better"}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
          >
            About <span className="text-[#00E88F] bg-gradient-to-r from-[#00E88F] to-[#00F19A] bg-clip-text text-transparent">Me</span>
          </motion.h2>
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Profile Card with Glow & Status Bar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              {/* Outer Neon Glow Layer */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#00E88F]/35 via-[#00E88F]/10 to-teal-400/25 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* Card Container */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#00E88F]/40 via-white/10 to-[#00E88F]/20 border border-white/10 shadow-[0_0_35px_rgba(0,232,143,0.2)]">
                <div className="relative rounded-[22px] overflow-hidden bg-[#061412] aspect-square sm:aspect-[4/4.5]">
                  <img
                    src={imageSrc}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/images/profile.png';
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Skills, Experience & Resume CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Title / Role */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              {about.heading || `I'm ${personal.name.split(' ')[0] || 'Hafsa'}, a Passionate`}{' '}
              <span className="text-[#00E88F] bg-gradient-to-r from-[#00E88F] to-[#00F19A] bg-clip-text text-transparent">
                {about.highlightRole || personal.role || "Frontend Engineer"}
              </span>
            </h3>

            {/* Paragraphs */}
            <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                {about.bio1 || "I am a passionate Frontend Developer who loves turning ideas into responsive, interactive, and visually engaging web experiences. I work with React.js, Tailwind CSS, JavaScript, Node.js, and MongoDB, focusing on clean code, modern design, and seamless user experiences."}
              </p>
              <p className="text-gray-400">
                {about.bio2 || "I'm always learning, building, and exploring new technologies to create better digital experiences."}
              </p>
            </div>

            {/* Key Checklist Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {(about.features || [
                "Specialized in React, Modern JavaScript & UI/UX",
                "Responsive cross-platform design specialist",
                "Clean, modular, & maintainable production code",
                "End-to-end MERN stack web application",
              ]).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-[#00E88F]/15 border border-[#00E88F]/40 flex items-center justify-center text-[#00E88F] mt-0.5 shadow-[0_0_8px_rgba(0,232,143,0.2)]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-200 font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Experience & Education Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Experience Card */}
              <div className="p-4 sm:p-4.5 rounded-2xl bg-[#061412]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#00E88F]/40 transition-all duration-300 flex items-center gap-3.5 group hover:shadow-[0_8px_25px_rgba(0,232,143,0.1)]">
                <div className="p-3 rounded-xl bg-[#00E88F]/10 border border-[#00E88F]/25 text-[#00E88F] group-hover:scale-105 transition-transform shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-bold text-sm sm:text-base truncate">
                    {experienceItem.role}
                  </h4>
                  <p className="text-xs text-gray-400 truncate mt-0.5">
                    {experienceItem.company} • {experienceItem.period}
                  </p>
                </div>
              </div>

              {/* Education Card */}
              <div className="p-4 sm:p-4.5 rounded-2xl bg-[#061412]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#00E88F]/40 transition-all duration-300 flex items-center gap-3.5 group hover:shadow-[0_8px_25px_rgba(0,232,143,0.1)]">
                <div className="p-3 rounded-xl bg-[#00E88F]/10 border border-[#00E88F]/25 text-[#00E88F] group-hover:scale-105 transition-transform shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-bold text-sm sm:text-base truncate">
                    {educationItem.degree}
                  </h4>
                  <p className="text-xs text-gray-400 truncate mt-0.5">
                    {educationItem.institution} • {educationItem.year}
                  </p>
                </div>
              </div>
            </div>

            {/* Resume Button & Contact Link */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={personal.resumeUrl}
                download={`${personal.name.replace(/\s+/g, '_')}_Resume.pdf`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00E88F] hover:bg-[#00F19A] text-black font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_25px_rgba(0,232,143,0.35)] hover:shadow-[0_0_35px_rgba(0,232,143,0.55)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>{about.resumeText || "Download My Full Resume"}</span>
                <Download className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 text-sm sm:text-base text-[#00E88F] hover:text-[#00F19A] font-semibold transition-colors group px-2 py-1"
              >
                <span>Let's talk</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
