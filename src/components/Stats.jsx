import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

// Custom SVG icons matching the screenshot's distinct neon icons
function ExperienceIcon() {
  return (
    <svg className="w-10 h-10 text-[#00E88F]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* 5-lobed tech flower outline */}
      <path d="M24 8c2.5-4 7.5-4 10 0 2.5 4 0.5 8-3 10 4.5 1 6.5 5.5 4 9-2.5 3.5-7 3-9 0-1 4.5-5.5 6.5-9 4-3.5-2.5-3-7 0-9-4-1-4.5-6.5-1-9.5 3.5-3 7.5-1 8.5 2.5.5-3.5 4-5 9.5-7z" />
      <circle cx="24" cy="24" r="3" strokeWidth="2" />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg className="w-10 h-10 text-[#00E88F]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* 4-leaf geometric rounded frame with code brackets */}
      <rect x="10" y="10" width="28" height="28" rx="8" />
      <path d="M20 20l-4 4 4 4" />
      <path d="M28 20l4 4-4 4" />
    </svg>
  );
}

function TechIcon() {
  return (
    <svg className="w-10 h-10 text-[#00E88F]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Abstract person/laptop tech badge */}
      <path d="M16 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0z" />
      <path d="M10 36c0-5 5-9 12-9s12 4 12 9" />
      <path d="M32 26h8v8h-8z" rx="2" />
    </svg>
  );
}

function ClientsIcon() {
  return (
    <svg className="w-10 h-10 text-[#00E88F]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Node team cluster matching the 4-node screenshot icon */}
      <circle cx="16" cy="18" r="4" />
      <circle cx="32" cy="18" r="4" />
      <circle cx="16" cy="32" r="3" />
      <circle cx="26" cy="34" r="3.5" />
      <circle cx="34" cy="30" r="2.5" />
      <path d="M16 22v7" />
      <path d="M32 22l-4 9" />
    </svg>
  );
}

export default function Stats() {
  const { stats } = portfolioData;

  const getStatIcon = (index) => {
    switch (index) {
      case 0:
        return <ExperienceIcon />;
      case 1:
        return <ProjectsIcon />;
      case 2:
        return <TechIcon />;
      case 3:
        return <ClientsIcon />;
      default:
        return <ExperienceIcon />;
    }
  };

  return (
    <section className="relative z-20 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-[#061412]/80 backdrop-blur-sm border border-white/[0.08] hover:border-[#00E88F]/50 rounded-2xl p-6 sm:p-7 flex items-center gap-5 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,232,143,0.12)] cursor-default"
            >
              {/* Left: Neon Icon Container */}
              <div className="shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {getStatIcon(index)}
              </div>

              {/* Right: Numbers & Label */}
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight group-hover:text-[#00E88F] transition-colors duration-200">
                  {stat.number}
                </span>
                <span className="text-sm text-gray-300 font-normal mt-0.5 leading-snug">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
