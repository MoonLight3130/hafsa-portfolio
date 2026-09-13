import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolio';

export default function Hero({ setActiveSection }) {
  const { personal, socials } = portfolioData;

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <GithubIcon className="w-5 h-5" />;
      case 'linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'x (twitter)':
      case 'twitter':
        return <TwitterIcon className="w-5 h-5" />;
      case 'email':
        return <Mail className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-16 lg:pt-40 lg:pb-24 flex items-center overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E88F]/[0.035] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#00E88F]/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Small Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-gray-300 text-lg sm:text-xl font-normal mb-2"
            >
              {personal.greeting}
            </motion.p>

            {/* Main Name in Neon Green */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-[68px] leading-[1.1] font-bold text-[#00E88F] tracking-tight mb-3"
            >
              {personal.name}
            </motion.h1>

            {/* Main Role in White */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight mb-6"
            >
              {personal.role}
            </motion.h2>

            {/* Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed mb-9"
            >
              {personal.bio}
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={() => handleScrollTo('contact')}
                className="px-8 py-3.5 bg-[#00E88F] hover:bg-[#00F19A] text-black font-semibold text-[15px] rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(0,232,143,0.3)] hover:shadow-[0_0_28px_rgba(0,232,143,0.5)] active:scale-95"
              >
                Hire Me
              </button>
              <button
                onClick={() => handleScrollTo('contact')}
                className="px-8 py-3.5 bg-[#071714]/80 hover:bg-[#0b241f] border border-white/15 hover:border-[#00E88F]/60 text-white font-medium text-[15px] rounded-lg transition-all duration-200 active:scale-95"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex items-center space-x-5"
            >
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-[#00E88F] hover:bg-[#00E88F]/10 transition-all duration-200"
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Area with Futuristic Tech Lines & Signature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-square flex items-center justify-center">
              
              {/* Background Ambient Glow */}
              <div className="absolute inset-0 bg-[#00E88F]/10 blur-[80px] rounded-full pointer-events-none" />

              {/* Dot Grid Matrices (Matching Screenshot) */}
              <div className="absolute -top-4 left-6 w-16 h-16 dot-grid-pattern opacity-60 pointer-events-none" />
              <div className="absolute bottom-16 -left-6 w-16 h-16 dot-grid-pattern opacity-60 pointer-events-none" />

              {/* Diagonal Neon Tech Line across the frame */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
                viewBox="0 0 500 500"
                fill="none"
              >
                {/* Diagonal line passing behind */}
                <line
                  x1="20"
                  y1="460"
                  x2="480"
                  y2="60"
                  stroke="#00E88F"
                  strokeWidth="1.2"
                  strokeOpacity="0.45"
                />
                {/* Tech node circle on diagonal */}
                <circle
                  cx="480"
                  cy="60"
                  r="4"
                  fill="#00E88F"
                  className="filter drop-shadow-[0_0_6px_#00E88F]"
                />
                {/* Top right neon corner accent */}
                <polygon
                  points="410,40 430,20 430,40"
                  stroke="#00E88F"
                  strokeWidth="1.5"
                  fill="none"
                  strokeOpacity="0.8"
                />
              </svg>

              {/* Rounded Green Frame Border Surrounding Lower and Left side */}
              <div className="absolute top-10 left-6 right-6 bottom-6 rounded-2xl border border-[#00E88F]/80 shadow-[0_0_15px_rgba(0,232,143,0.2)] pointer-events-none z-10" />

              {/* Profile Image Container */}
              <div className="relative w-[92%] h-[92%] rounded-2xl overflow-hidden z-0">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top grayscale contrast-[1.08] brightness-[0.98] transition-transform duration-700 hover:scale-105"
                />
                {/* Very subtle dark gradient overlay at bottom for signature readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020908]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Lower-right Signature (Matching Screenshot) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="absolute -bottom-2 -right-4 sm:-bottom-4 sm:-right-6 z-20 pointer-events-none select-none"
              >
                <span className="font-signature text-5xl sm:text-6xl lg:text-7xl text-[#00E88F] text-glow tracking-wide block transform -rotate-6">
                  {personal.signatureText}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
