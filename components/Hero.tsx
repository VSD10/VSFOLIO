import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';
import { DocumentTextIcon } from './icons/DocumentTextIcon';
import ResumeModal from './ResumeDrawer';
import image from './icons/1.jpg';

/* ── Glassmorphism card wrapper for Profile Card ── */
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div
    className={`rounded-2xl ${className}`}
    style={{
      background: 'rgba(11,11,14,0.85)',
      border: '1px solid rgba(139,92,246,0.2)',
      backdropFilter: 'blur(16px)',
    }}
  >
    {children}
  </div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 24 } },
};

const Hero: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imgHovered, setImgHovered] = useState(false);

    return (
        <>
            <motion.section
                className="min-h-[100vh] flex flex-col justify-center -mt-24 md:-mt-32 py-12"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
            >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    
                    {/* ── LEFT: Hero Text & Buttons ── */}
                    <motion.div variants={fadeUp} className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <p className="text-purple-400 font-mono mb-4 text-sm tracking-wide uppercase">
                            Hi, I'm Dharshan VS 👋
                        </p>
                        
                        <h1 className="text-4xl md:text-6xl font-medium max-w-4xl leading-tight bg-gradient-to-tl from-purple-900 via-black to-white bg-clip-text text-transparent mb-6">
                            <motion.span initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
                                {Array.from("AI-driven Software engineer building practical products that solve real problems.").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.03, delay: index * 0.02, ease: "linear" }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                    className="inline-block w-1.5 h-8 md:h-12 lg:h-14 bg-purple-500 ml-1.5 align-middle"
                                />
                            </motion.span>
                        </h1>
                        
                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-4">
                            <a
                                href="https://github.com/vsd10"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block border border-purple-500 hover:bg-purple-500/10 rounded-xl px-6 py-3.5 text-sm font-medium flex items-center space-x-2 transition-colors duration-300"
                            >
                                <span>My Projects</span>
                                <ArrowUpRightIcon className="w-4 h-4" />
                            </a>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-block bg-white text-black hover:bg-gray-200 rounded-xl px-6 py-3.5 text-sm font-medium flex items-center space-x-2 transition-colors duration-300"
                                aria-label="View Resume"
                            >
                                <span>View Resume</span>
                                <DocumentTextIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>

                    {/* ── RIGHT: Profile Card ── */}
                    <motion.div variants={fadeUp} className="w-full max-w-sm lg:w-[400px] shrink-0">
                        <Card>
                            <div
                                className="relative p-10 flex flex-col items-center text-center rounded-2xl overflow-hidden cursor-pointer"
                                onMouseEnter={() => setImgHovered(true)}
                                onMouseLeave={() => setImgHovered(false)}
                            >
                                {/* Hover glow bg */}
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    animate={{
                                        background: imgHovered
                                            ? 'radial-gradient(circle at 50% 75%, rgba(139,92,246,0.3) 0%, transparent 75%)'
                                            : 'radial-gradient(circle at 50% 100%, rgba(139,92,246,0.12) 0%, transparent 65%)',
                                    }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Photo */}
                                <motion.div
                                    className="relative mb-6 mt-2"
                                    animate={imgHovered ? { scale: 1.05 } : { scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    {/* Glow aura */}
                                    <div
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            background: 'radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%)',
                                            filter: 'blur(20px)',
                                            transform: 'scale(1.25)',
                                            opacity: imgHovered ? 0.95 : 0.5,
                                            transition: 'opacity 0.4s',
                                        }}
                                    />
                                    <img
                                        src={image}
                                        alt="Dharshan VS"
                                        className="relative w-36 h-36 rounded-full object-cover"
                                        style={{
                                            border: '2px solid rgba(139,92,246,0.55)',
                                            boxShadow: imgHovered
                                                ? '0 0 40px rgba(139,92,246,0.8), 0 0 80px rgba(139,92,246,0.3)'
                                                : '0 0 25px rgba(139,92,246,0.4)',
                                            transition: 'box-shadow 0.4s',
                                        }}
                                    />
                                    {/* Orbit ring */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full pointer-events-none"
                                        style={{ border: '2px solid rgba(139,92,246,0.4)' }}
                                        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                                    />
                                </motion.div>

                                <h3 className="text-2xl font-medium text-white mb-1">Dharshan VS</h3>
                                <p className="text-purple-400 text-sm font-medium">AI-driven Software Engineer</p>
                                <p className="text-gray-500 text-xs mt-1.5 font-mono">India → Malaysia 🌏</p>

                                {/* Open badge */}
                                <motion.div
                                    className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full"
                                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}
                                    animate={{ opacity: [0.8, 1, 0.8] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <motion.span
                                        className="w-2 h-2 rounded-full bg-green-400"
                                        animate={{ scale: [1, 1.6, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                    <span className="text-green-400 text-[11px] font-semibold tracking-wide uppercase">
                                        Open to Opportunities
                                    </span>
                                </motion.div>
                            </div>
                        </Card>
                    </motion.div>

                </div>
            </motion.section>
            <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Hero;
