import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolio';

/* ─── Floating Particle ─────────────────────────────────────── */
function Particle({ x, y, size, duration, delay }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#00E88F] pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 0.7, 0],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

/* ─── Typewriter / Role Cycler ──────────────────────────────── */
const ROLES = [
  'Frontend Developer',
  'UI/UX Engineer',
  'React Specialist',
  'Creative Coder',
  'Full-Stack Builder',
];

function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="inline-block relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="inline-block"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ─── Floating Tech Badge ───────────────────────────────────── */
function FloatingBadge({ label, top, left, right, bottom, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: 'backOut' }}
      style={{ top, left, right, bottom }}
      className="absolute z-30 pointer-events-none"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5 + delay, repeat: Infinity, ease: 'easeInOut' }}
        className="px-2.5 py-1 rounded-lg bg-[#061412]/90 border border-[#00E88F]/50 text-[#00E88F] text-[11px] sm:text-xs font-semibold shadow-[0_0_12px_rgba(0,232,143,0.25)] backdrop-blur-sm whitespace-nowrap"
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

/* ─── Pulsing Ring ──────────────────────────────────────────── */
function PulseRing({ delay, scale }) {
  return (
    <motion.div
      className="absolute inset-0 rounded-full border border-[#00E88F]/30 pointer-events-none"
      animate={{ scale: [1, scale], opacity: [0.5, 0] }}
      transition={{ duration: 2.5, delay, repeat: Infinity, ease: 'easeOut' }}
    />
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1.5,
  duration: Math.random() * 3 + 3,
  delay: Math.random() * 4,
}));

export default function Hero({ setActiveSection }) {
  const { personal, socials } = portfolioData;

  /* Mouse parallax */
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const imgRotateX = useTransform(springY, [-300, 300], [8, -8]);
  const imgRotateY = useTransform(springX, [-300, 300], [-8, 8]);
  const glowX = useTransform(springX, [-300, 300], ['-8px', '8px']);
  const glowY = useTransform(springY, [-300, 300], ['-6px', '6px']);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* Scroll handler */
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - navHeight, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  /* Social icon helper */
  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <GithubIcon className="w-5 h-5" />;
      case 'linkedin': return <LinkedinIcon className="w-5 h-5" />;
      case 'x (twitter)':
      case 'twitter': return <TwitterIcon className="w-5 h-5" />;
      case 'email': return <Mail className="w-5 h-5" />;
      default: return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-28 pb-16 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* ── Ambient Background Glows ── */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00E88F]/[0.04] rounded-full blur-[160px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#00E88F]/[0.05] rounded-full blur-[120px] pointer-events-none" />

      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <Particle key={p.id} {...p} />
        ))}
      </div>

      {/* ── Animated Scan Line ── */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E88F]/30 to-transparent pointer-events-none z-0"
        animate={{ top: ['10%', '90%', '10%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ── LEFT: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 w-fit"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-[#00E88F]"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <span className="text-[#00E88F] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                Available for Work
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-gray-300 text-base sm:text-xl font-normal mb-2"
            >
              {personal.greeting}
            </motion.p>

            {/* Name with letter-stagger animation */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-[clamp(2.2rem,8vw,4.25rem)] leading-[1.1] font-bold text-[#00E88F] tracking-tight mb-3 relative"
            >
              {/* Shimmering highlight that sweeps the name */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
                animate={{ x: ['-150%', '250%'] }}
                transition={{ duration: 2.5, delay: 1.2, repeat: Infinity, repeatDelay: 5 }}
              />
              {personal.name}
            </motion.h1>

            {/* Cycling Role */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-[clamp(1.3rem,5vw,2.625rem)] font-bold text-white tracking-tight mb-5 min-h-[1.2em]"
            >
              <RoleCycler />
            </motion.h2>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-gray-300 text-sm sm:text-lg max-w-xl leading-relaxed mb-7"
            >
              {personal.bio}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <motion.button
                onClick={() => handleScrollTo('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 min-w-[130px] max-w-[180px] px-6 py-3 bg-[#00E88F] hover:bg-[#00F19A] text-black font-semibold text-[15px] rounded-lg transition-colors duration-200 shadow-[0_0_20px_rgba(0,232,143,0.3)] hover:shadow-[0_0_32px_rgba(0,232,143,0.55)] text-center relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20 pointer-events-none"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.4 }}
                />
                Hire Me
              </motion.button>

              <motion.button
                onClick={() => handleScrollTo('contact')}
                whileHover={{ scale: 1.05, borderColor: 'rgba(0,232,143,0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 min-w-[130px] max-w-[180px] px-6 py-3 bg-[#071714]/80 border border-white/15 text-white font-medium text-[15px] rounded-lg transition-colors duration-200 text-center"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-[#00E88F] hover:bg-[#00E88F]/10 border border-white/[0.07] hover:border-[#00E88F]/40 transition-colors duration-200"
                >
                  {getSocialIcon(social.name)}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Profile Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end order-first lg:order-last"
          >



            {/* Profile Image */}
            <div className="relative w-[92%] h-[92%] rounded-2xl overflow-hidden z-0">
              <img
                src={personal.avatar}
                alt={personal.name}
                loading="eager"
                decoding="async"
                className="
      w-full
      h-full
      object-cover
      object-top
      grayscale-0
      saturate-100
      contrast-100
      brightness-100
      transform-gpu
      transition-transform
      duration-700
      ease-out
      hover:scale-[1.03]
    "
              />

              <div
                className="
      absolute
      inset-0
      bg-gradient-to-t
      from-[#020908]/80
      via-[#020908]/10
      to-transparent
      pointer-events-none
    "
              />
            </div>



            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="absolute -bottom-1 right-0 sm:-bottom-3 sm:right-0 z-20 pointer-events-none select-none overflow-hidden max-w-[140px] sm:max-w-[180px]"
            >
              <span className="font-signature text-4xl sm:text-5xl lg:text-6xl text-[#00E88F] text-glow tracking-wide block transform -rotate-6 whitespace-nowrap">
                {personal.signatureText}
              </span>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10"
        onClick={() => handleScrollTo('about')}
      >
        <span className="text-gray-400 text-[10px] sm:text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[#00E88F]"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
