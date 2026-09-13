import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#020908] text-white selection:bg-[#00E88F] selection:text-black relative">
      {/* Fixed Sticky Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Sections */}
      <main>
        <Hero setActiveSection={setActiveSection} />
        <Stats />
        <About setActiveSection={setActiveSection} />
        <Skills />
        <Services setActiveSection={setActiveSection} />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}
