import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolio';

export default function Footer({ setActiveSection }) {
  const { personal, navLinks, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <footer className="relative bg-[#020706] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={scrollToTop}
              className="flex items-baseline text-3xl text-white font-signature select-none"
            >
              <span>{personal.logoText}</span>
              <span className="text-[#00E88F] text-4xl">.</span>
            </a>
            <p className="text-gray-400 text-sm mt-2 max-w-sm">
              Engineering performant, accessible, and stunning digital interfaces for world-class web products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-400 hover:text-[#00E88F] text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-xl bg-[#061412] border border-white/[0.08] hover:border-[#00E88F]/50 flex items-center justify-center text-gray-300 hover:text-[#00E88F] hover:shadow-[0_0_15px_rgba(0,232,143,0.2)] transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tech */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00E88F] animate-pulse" />
              <span>Available for select opportunities</span>
            </span>
            <span>•</span>
            <span>Built with React, Node.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
