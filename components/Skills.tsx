import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon } from './icons/SparklesIcon';
import { CodeBracketIcon } from './icons/CodeBracketIcon';
import { CircleStackIcon } from './icons/CircleStackIcon';
import { GlobeAltIcon } from './icons/GlobeAltIcon';

// The categories and their skills
const skillCategories = [
  {
    name: 'Frontend & UI',
    radius: 140, // Distance from center
    speed: 25,   // Seconds for one full rotation
    color: '#fb923c', // Orange
    icon: <GlobeAltIcon className="w-6 h-6 text-orange-400" />,
    items: ['React.js', 'JavaScript', 'Tailwind CSS', 'Figma']
  },
  {
    name: 'Backend Core',
    radius: 250,
    speed: 35,
    color: '#38bdf8', // Light Blue
    icon: <CodeBracketIcon className="w-6 h-6 text-blue-400" />,
    items: ['Python', 'Java', 'C', 'FastAPI', 'Node.js', 'REST APIs']
  },
  {
    name: 'Database & Cloud',
    radius: 360,
    speed: 45,
    color: '#34d399', // Emerald
    icon: <CircleStackIcon className="w-6 h-6 text-emerald-400" />,
    items: ['SQL', 'MySQL', 'MongoDB', 'Supabase', 'AWS (S3, Lambda)', 'Docker', 'Linux']
  },
  {
    name: 'AI & Dev Tools',
    radius: 470,
    speed: 60,
    color: '#c084fc', // Purple
    icon: <SparklesIcon className="w-6 h-6 text-purple-400" />,
    items: ['LangChain', 'RAG', 'Git & GitHub', 'Postman', 'VS Code']
  }
];

const OrbitingSkillCard = ({ text, color }: { text: string; color: string }) => (
  <motion.div
    className="absolute top-1/2 left-1/2 flex items-center justify-center whitespace-nowrap"
    style={{ x: '-50%', y: '-50%' }}
    whileHover={{ scale: 1.2, zIndex: 50 }}
  >
    <div 
      className="px-4 py-2 rounded-full backdrop-blur-md text-sm font-medium tracking-wide border cursor-default transition-colors duration-300"
      style={{
        backgroundColor: 'rgba(11, 11, 14, 0.85)',
        borderColor: `${color}40`,
        color: '#e5e7eb',
        boxShadow: `0 0 15px ${color}20`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 0 20px ${color}60`;
        e.currentTarget.style.color = '#fff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${color}40`;
        e.currentTarget.style.boxShadow = `0 0 15px ${color}20`;
        e.currentTarget.style.color = '#e5e7eb';
      }}
    >
      {text}
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const [view, setView] = useState<'orbit' | 'grid'>('orbit');

  return (
    <section 
      id="skills" 
      className="py-24 relative z-10 overflow-hidden min-h-[100vh] flex flex-col justify-center"
      onMouseLeave={() => setView('orbit')} // Snap back to orbit if mouse leaves the whole section
    >
      
      {/* Background radial gradient to give depth to the galaxy */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.08)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 md:mb-10 relative z-30"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-purple-400 font-medium mb-3">
            Technical Universe
          </p>
          <h2 className="text-4xl md:text-5xl font-medium bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-sm text-gray-400">Hover or tap the CORE to explore the full stack.</p>
        </motion.div>

        {/* The Toggleable Container */}
        <div className="relative flex items-center justify-center w-full min-h-[500px] md:min-h-[800px] mt-4">
          <AnimatePresence mode="wait">
            
            {view === 'orbit' ? (
              
              /* ── ORBIT VIEW ── */
              <motion.div
                key="orbit"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                // Scaling down the huge orbits to fit perfectly into any screen at 100% resolution
                className="absolute flex items-center justify-center w-[1000px] h-[1000px] scale-[0.35] sm:scale-[0.5] md:scale-[0.65] lg:scale-[0.8] xl:scale-90"
              >
                
                {/* Core Sun / Center Orb */}
                <motion.div 
                  className="absolute z-50 flex flex-col items-center justify-center w-36 h-36 rounded-full border-2 border-purple-500/50 bg-[#0B0B0E]/90 backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.5)] cursor-pointer"
                  whileHover={{ scale: 1.15, boxShadow: '0 0 100px rgba(168,85,247,0.8)' }}
                  onMouseEnter={() => setView('grid')}
                  onClick={() => setView('grid')}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-transparent animate-pulse" />
                  <SparklesIcon className="w-10 h-10 text-white mb-2 relative z-10" />
                  <span className="text-sm font-bold tracking-widest text-purple-300 relative z-10">CORE</span>
                </motion.div>

                {/* Orbits */}
                {skillCategories.map((category, index) => {
                  const angleStep = 360 / category.items.length;
                  
                  return (
                    <div key={category.name} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      
                      {/* Orbit Ring visual */}
                      <motion.div 
                        className="absolute rounded-full border border-dashed opacity-30"
                        style={{
                          width: category.radius * 2,
                          height: category.radius * 2,
                          borderColor: category.color,
                        }}
                      />
                      
                      {/* Orbiting Container */}
                      <motion.div
                        className="absolute rounded-full pointer-events-auto"
                        style={{
                          width: category.radius * 2,
                          height: category.radius * 2,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: category.speed,
                          ease: "linear",
                          repeat: Infinity,
                        }}
                      >
                        {category.items.map((item, i) => {
                          const angle = angleStep * i;
                          const rad = (angle * Math.PI) / 180;
                          const x = Math.cos(rad) * category.radius;
                          const y = Math.sin(rad) * category.radius;

                          return (
                            <div
                              key={item}
                              className="absolute top-1/2 left-1/2"
                              style={{ transform: `translate(${x}px, ${y}px)` }}
                            >
                              {/* Counter-rotation to keep items upright */}
                              <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                  duration: category.speed,
                                  ease: "linear",
                                  repeat: Infinity,
                                }}
                              >
                                <OrbitingSkillCard text={item} color={category.color} />
                              </motion.div>
                            </div>
                          );
                        })}

                        {/* Category Name Tag orbiting */}
                        <div
                            className="absolute top-1/2 left-1/2"
                            style={{
                              transform: `translate(${Math.cos(((angleStep / 2) * Math.PI) / 180) * category.radius}px, ${Math.sin(((angleStep / 2) * Math.PI) / 180) * category.radius}px)`,
                            }}
                          >
                            <motion.div
                              animate={{ rotate: -360 }}
                              transition={{
                                duration: category.speed,
                                ease: "linear",
                                repeat: Infinity,
                              }}
                              className="flex flex-col items-center gap-1 opacity-80 absolute"
                              style={{ x: '-50%', y: '-50%' }}
                            >
                               <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0B0B0E]/80 backdrop-blur-md border shadow-lg" style={{ borderColor: `${category.color}50`, color: category.color, boxShadow: `0 0 15px ${category.color}20` }}>
                                  {category.icon}
                               </div>
                               <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-black/50" style={{ color: category.color }}>
                                 {category.name}
                               </span>
                            </motion.div>
                        </div>

                      </motion.div>
                    </div>
                  );
                })}

              </motion.div>
            
            ) : (

              /* ── EXPANDED GRID VIEW ── */
              <motion.div
                key="grid"
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                className="relative z-40 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4 py-8"
              >
                {skillCategories.map((cat, idx) => (
                  <motion.div 
                    key={cat.name} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="p-8 rounded-2xl bg-[#0B0B0E]/80 backdrop-blur-2xl border shadow-2xl relative overflow-hidden group" 
                    style={{ borderColor: `${cat.color}30` }}
                  >
                    
                    {/* Hover Glow inside Card */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at center, ${cat.color}, transparent)` }}
                    />

                    <div className="flex items-center gap-4 mb-8 relative z-10">
                       <div 
                         className="flex items-center justify-center w-14 h-14 rounded-2xl bg-black/60 border shadow-lg" 
                         style={{ borderColor: `${cat.color}50`, color: cat.color, boxShadow: `0 0 20px ${cat.color}20` }}
                       >
                         {cat.icon}
                       </div>
                       <h3 className="text-2xl font-semibold text-white tracking-wide">{cat.name}</h3>
                    </div>

                    <div className="flex flex-wrap gap-3 relative z-10">
                      {cat.items.map(item => (
                        <span 
                          key={item} 
                          className="px-4 py-2 text-sm font-medium rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-default"
                          style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)' }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                  </motion.div>
                ))}

                {/* Back to Core button for Mobile Users who can't mouseLeave easily */}
                <div className="md:col-span-2 flex justify-center mt-6">
                  <button 
                    onClick={() => setView('orbit')}
                    className="px-8 py-3 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/50 hover:bg-purple-600/40 hover:text-white transition-all text-sm font-semibold tracking-widest uppercase flex items-center gap-2"
                  >
                    <SparklesIcon className="w-4 h-4" />
                    Return to Orbit
                  </button>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;