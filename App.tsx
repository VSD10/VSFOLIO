import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import OpenSource from './components/OpenSource';
import SkillsShowcase from './components/SkillsShowcase';
import Achievements from './components/Achievements';
import CertificatesShowcase from './components/CertificatesShowcase';
import Contact from './components/Contact';
import ProjectsTimeline from './components/ProjectsTimeline';

function App() {
  return (
    <div className="bg-[#111111] text-gray-300 font-sans leading-normal tracking-tight bg-[radial-gradient(ellipse_at_top,rgba(76,49,159,0.3)_0%,transparent_60%)]">
      <Header />
      <main className="container mx-auto px-6 pt-24 md:pt-32">
        <Hero />
        <About />
        <Education />
        <SkillsShowcase />
        <ProjectsTimeline />
        <OpenSource />
        <Experience />
        <Achievements />
        <CertificatesShowcase />
        <Contact />
      </main>
      <footer className="text-center py-8 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Dharshan VS. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;