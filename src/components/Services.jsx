import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Server, Sparkles, Cpu, Cloud, ArrowUpRight, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Services({ setActiveSection }) {
  const { services } = portfolioData;

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#00E88F]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#00E88F]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#00E88F]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#00E88F]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#00E88F]" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-[#00E88F]" />;
      default:
        return <Layout className="w-6 h-6 text-[#00E88F]" />;
    }
  };

  const handleInquire = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('contact');
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E88F]/10 border border-[#00E88F]/30 text-[#00E88F] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Offerings</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Services & Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg"
          >
            Comprehensive engineering services designed to turn ambitious concepts into performant, reliable digital realities.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-[#061412]/80 backdrop-blur-sm border border-white/[0.08] hover:border-[#00E88F]/50 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,232,143,0.12)]"
            >
              <div>
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-[#0a1f1b] border border-[#00E88F]/25 flex items-center justify-center mb-6 group-hover:border-[#00E88F]/60 group-hover:shadow-[0_0_15px_rgba(0,232,143,0.3)] transition-all">
                  {getServiceIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E88F] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Action Link */}
              <button
                onClick={handleInquire}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-300 group-hover:text-[#00E88F] transition-colors self-start"
              >
                <span>Request details</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
