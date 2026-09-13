import React, { useState, useEffect } from 'react';
import { Download, Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const { personal, navLinks } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks, setActiveSection]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('light-theme');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020908]/90 backdrop-blur-md border-b border-white/[0.06] py-4 shadow-lg shadow-black/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Script Logo with Green Period */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-baseline text-3xl sm:text-4xl text-white font-signature select-none tracking-wide"
        >
          <span>{personal.logoText}</span>
          <span className="text-[#00E88F] text-4xl inline-block transition-transform duration-300 group-hover:scale-125">
            .
          </span>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 text-[15px] font-normal transition-colors duration-200 ${
                  isActive ? 'text-[#00E88F]' : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00E88F] rounded-full shadow-[0_0_8px_#00E88F]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Theme Toggle & Download CV Button */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E88F] rounded-full"
          >
            {isLightMode ? (
              <Moon className="w-5 h-5 text-[#00E88F]" />
            ) : (
              <Sun className="w-5 h-5 stroke-[1.75]" />
            )}
          </button>

          <a
            href={personal.resumeUrl}
            download="Chandni_Chauhan_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00E88F] hover:bg-[#00F19A] text-black font-semibold text-sm rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(0,232,143,0.3)] hover:shadow-[0_0_25px_rgba(0,232,143,0.5)] active:scale-95"
          >
            <span>Download CV</span>
            <Download className="w-4 h-4 stroke-[2.2]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 text-gray-300 hover:text-white"
          >
            {isLightMode ? <Moon className="w-5 h-5 text-[#00E88F]" /> : <Sun className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030d0a]/95 border-b border-white/10 backdrop-blur-xl px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-base font-medium py-2 transition-colors ${
                      isActive ? 'text-[#00E88F] font-semibold' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={personal.resumeUrl}
                  download="Chandni_Chauhan_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#00E88F] text-black font-semibold text-sm rounded-lg shadow-md"
                >
                  <span>Download CV</span>
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
