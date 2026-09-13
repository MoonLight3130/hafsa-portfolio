import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { projects } = portfolioData;

  const categories = ['All', 'Full Stack', 'AI', 'Web', 'Client Projects'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-white/[0.05]">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00E88F]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E88F]/10 border border-[#00E88F]/30 text-[#00E88F] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Recent Works & Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg"
          >
            A selection of production web apps, creative experiments, and enterprise platforms engineered with precision.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-[#00E88F] text-black shadow-[0_0_15px_rgba(0,232,143,0.3)] font-semibold'
                  : 'bg-[#061412]/80 text-gray-300 border border-white/[0.08] hover:border-[#00E88F]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-[#061412]/85 backdrop-blur-sm border border-white/[0.08] hover:border-[#00E88F]/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,232,143,0.12)]"
            >
              {/* Project Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061412] via-[#061412]/20 to-transparent opacity-80" />

                {/* Category Pill on Image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-[#020908]/80 backdrop-blur-md border border-[#00E88F]/30 text-[#00E88F] text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2.5 group-hover:text-[#00E88F] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#0b211d] text-gray-300 text-xs font-medium border border-white/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E88F] hover:bg-[#00F19A] text-black font-semibold text-xs sm:text-sm rounded-lg transition-all shadow-[0_0_15px_rgba(0,232,143,0.25)]"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-white/[0.05] border border-white/15 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors"
                    >
                      <span>Source Code</span>
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
