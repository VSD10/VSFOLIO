import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import OpenSource from './components/OpenSource';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import CertificatesShowcase from './components/CertificatesShowcase';
import Contact from './components/Contact';
import ProjectsTimeline from './components/ProjectsTimeline';
import ShootingStars from './components/ShootingStars';
import PageBackground from './components/HeroBackground';

function App() {
  return (
    <div className="bg-[#111111] text-gray-300 font-sans leading-normal tracking-tight relative">
      {/* Fixed full-page 3D animated background */}
      <PageBackground />

      {/* All content sits above the background */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <main className="container mx-auto px-6 pt-24 md:pt-32">
          <Hero />
          <About />
          <Education />
          <Skills />
          <ProjectsTimeline />
          <OpenSource />
          <Experience />
          <Achievements />
          <CertificatesShowcase />
          <Contact />
        </main>
        <footer className="text-center py-8 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dharshan VS. All Rights Reserved.</p>
          <p className="mt-2">
            <a href="tel:+917200700290" className="hover:text-white transition-colors">
              Call: +91 7200700290
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;