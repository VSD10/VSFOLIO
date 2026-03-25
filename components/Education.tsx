import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const educationData = [
  {
    institution: "Knowledge Institute of Technology, India \uD83C\uDDEE\uD83C\uDDF3",
    degree: "B.Tech in Computer Science and Business Systems",
    duration: "Nov 2022 - Present",
    description: "CGPA: 7.84/10.0 | Coursework: Data Structures, Python, Database Management, Operating Systems, Cloud Computing.",
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    color: 'purple'
  },
  {
    institution: "INTI International University, Malaysia \uD83C\uDDF2\uD83C\uDDFE",
    degree: "Student Exchange Program \u2013 B.Sc. (Hons) in Computer Science",
    duration: "Jan 2025 - May 2025",
    description: "Coursework: Web & Mobile Analytics, Data Warehouse, Web Application Development.",
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'blue'
  },
  {
    institution: "Shri Swamy Matric Hr. Sec. School",
    degree: "Higher Secondary",
    duration: "2020 - 2022",
    description: "12th - 83% | 10th - 96%",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'emerald'
  },
];

/* ── Glassmorphism wrapper ── */
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div
    className={`rounded-2xl ${className}`}
    style={{
      background: 'rgba(11,11,14,0.6)',
      border: '1px solid rgba(255,255,255,0.05)',
      backdropFilter: 'blur(16px)',
    }}
  >
    {children}
  </div>
);

const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within the container for the animated line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-purple-400 font-medium mb-3">Academic Journey</p>
          <h2 className="text-4xl md:text-5xl font-medium bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          
          {/* Background Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 -translate-x-1/2" />
          
          {/* Animated Glowing Line */}
          <motion.div
            className="absolute left-[28px] md:left-1/2 top-0 w-[3px] bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500 -translate-x-1/2 origin-top"
            style={{ height: lineHeight, boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)' }}
          />

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Empty space for the other side of timeline on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Timeline Node */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0b0b0e] border border-gray-700 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <motion.div 
                      className="w-full h-full flex items-center justify-center rounded-full"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.8, type: "spring" }}
                    >
                      {edu.icon}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full pl-[70px] md:pl-0 md:w-1/2 ${isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="p-6 md:p-8 hover:border-purple-500/30 transition-colors duration-500 group relative overflow-hidden">
                        
                        {/* Hover glow effect behind content */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} relative z-10`}>
                          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-gray-800/80 text-gray-400 border border-gray-700">
                            {edu.duration}
                          </span>
                          
                          <h3 className="text-xl md:text-2xl font-medium text-gray-100 mb-2 leading-tight">
                            {edu.institution}
                          </h3>
                          
                          <p className={`text-sm font-medium mb-4 ${
                            edu.color === 'purple' ? 'text-purple-400' : 
                            edu.color === 'blue' ? 'text-blue-400' : 'text-emerald-400'
                          }`}>
                            {edu.degree}
                          </p>
                          
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {edu.description}
                          </p>
                        </div>

                      </Card>
                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
