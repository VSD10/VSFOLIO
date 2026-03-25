import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

const experienceData = [
  {
    id: 'thinkinfo',
    date: 'July 2024 - Aug 2024',
    title: 'Frontend & UI/UX Intern',
    company: 'ThinkInfo Solutions',
    color: '#10b981', // Emerald
    gradient: 'from-[#10b981]/10 to-transparent',
    iconLocation: 'left-10',
    description: [
      'Redesigned UI workflows for a cross-platform browser extension, improving task efficiency by 35%.',
      'Built responsive React.js components that reduced load time by 25% and increased mobile accessibility.',
    ],
  },
  {
    id: 'corizo',
    date: 'Nov 2023 - Jan 2024',
    title: 'Blockchain Intern',
    company: 'Corizo Pvt. Ltd.',
    color: '#a855f7', // Purple
    gradient: 'from-[#a855f7]/10 to-transparent',
    iconLocation: 'right-10',
    description: [
      'Optimized smart-contract logic, improving transaction reliability and reducing execution failures by 20%.',
      'Assisted in debugging deployment workflows, enhancing overall system stability by 15%.',
    ],
  },
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(experienceData[0].id);

  const activeData = experienceData.find((d) => d.id === activeTab)!;

  return (
    <section id="experience" className="py-24 relative z-10 perspective-[2000px] min-h-[90vh] flex items-center">
      
      {/* Background glow tracking the active tab */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none opacity-20 transition-colors duration-1000"
        style={{ backgroundColor: activeData.color }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-16"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-purple-400 font-medium mb-3">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-medium bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Left Side: Animated Vertical Tabs */}
          <div className="w-full md:w-1/3 flex flex-col gap-4 relative z-20">
            {experienceData.map((job) => {
              const isActive = activeTab === job.id;
              
              return (
                <button
                  key={job.id}
                  onClick={() => setActiveTab(job.id)}
                  className={`relative w-full text-left px-6 py-6 rounded-2xl transition-all duration-300 ${
                    isActive ? "text-white" : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {/* Floating active pill background using layoutId */}
                  {isActive && (
                    <motion.div
                      layoutId="active-experience-tab"
                      className="absolute inset-0 bg-[#0B0B0E]/80 border shadow-2xl rounded-2xl -z-10 backdrop-blur-md"
                      style={{
                        borderColor: `${job.color}50`,
                        boxShadow: `0 0 30px ${job.color}20`,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {/* Active glowing left border */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 rounded-full" style={{ backgroundColor: job.color, boxShadow: `0 0 10px ${job.color}` }} />
                    </motion.div>
                  )}
                  
                  <div className="relative z-10 flex flex-col gap-1">
                    <span className="text-sm font-mono tracking-widest uppercase opacity-70">
                      {job.date}
                    </span>
                    <h4 className="text-xl font-bold tracking-wide">
                      {job.company}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Massive 3D Animated Showcase Panel */}
          <div className="w-full md:w-2/3 h-[500px] relative z-10 perspective-[1000px]">
             
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, rotateY: 90, scale: 0.9, z: -200 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
                exit={{ opacity: 0, rotateY: -90, scale: 0.9, z: -200, filter: "blur(5px)" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden"
              >
                
                {/* Stunning Premium Card Wrapper */}
                <div 
                  className={`w-full h-full relative p-10 md:p-14 border bg-gradient-to-br flex flex-col justify-center`}
                  style={{
                    backgroundColor: 'rgba(15, 15, 20, 0.7)',
                    borderColor: `${activeData.color}30`,
                    backgroundImage: `linear-gradient(to bottom right, ${activeData.color}15, transparent 50%)`,
                    boxShadow: `inset 0 0 40px ${activeData.color}10, 0 20px 50px rgba(0,0,0,0.5)`,
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  
                  {/* Huge background icon representing the role */}
                  <motion.div 
                     initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                     animate={{ scale: 1, opacity: 0.05, rotate: 0 }}
                     transition={{ duration: 1, delay: 0.2 }}
                     className={`absolute top-1/2 -translate-y-1/2 ${activeData.iconLocation} pointer-events-none`}
                  >
                     <BriefcaseIcon className="w-64 h-64 md:w-96 md:h-96" style={{ color: activeData.color }} />
                  </motion.div>

                  {/* Content Elements with Stagger */}
                  <div className="relative z-20 h-full flex flex-col justify-center">
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                        {activeData.title}
                      </h3>
                      <p className="text-2xl font-semibold mb-10" style={{ color: activeData.color }}>
                        {activeData.company}
                      </p>
                    </motion.div>

                    <div className="space-y-6">
                      {activeData.description.map((point, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                          className="flex items-start gap-5 group"
                        >
                          <div className="mt-2 w-3 h-3 flex-shrink-0 rounded-sm rotate-45 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-125" style={{ backgroundColor: activeData.color, boxShadow: `0 0 15px ${activeData.color}` }} />
                          <p className="text-gray-300 text-lg leading-relaxed">{point}</p>
                        </motion.div>
                      ))}
                    </div>

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;