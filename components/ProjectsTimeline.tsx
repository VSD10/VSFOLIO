import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { DevIcon } from './icons/DevIcon';
import { ChatbotIcon } from './icons/ChatbotIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { PortfolioIcon } from './icons/PortfolioIcon';
import { ExtensionIcon } from './icons/ExtensionIcon';
import { BoltIcon } from './icons/BoltIcon';
import { CircleStackIcon } from './icons/CircleStackIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

// Aurora animation positions per card (avoids Math.random in render)
const auroraPositions = [
  ['10% 20%', '85% 60%', '45% 85%'],
  ['80% 10%', '15% 70%', '60% 40%'],
  ['50% 5%',  '5%  90%', '90% 50%'],
  ['20% 80%', '75% 20%', '30% 50%'],
  ['90% 85%', '10% 30%', '55% 15%'],
  ['30% 10%', '80% 80%', '10% 60%'],
  ['60% 90%', '20% 15%', '85% 40%'],
];

const floatParams = [
  { duration: 4.5, delay: 0.0  },
  { duration: 3.8, delay: 0.7  },
  { duration: 5.2, delay: 1.3  },
  { duration: 4.0, delay: 0.4  },
  { duration: 3.5, delay: 1.0  },
  { duration: 4.8, delay: 0.2  },
  { duration: 4.2, delay: 1.6  },
];

const projects = [
  {
    id: 0,
    icon: <BoltIcon className="w-7 h-7" />,
    title: 'WHISTLE',
    subtitle: 'Multi-AI Verification Micro-SaaS',
    year: '2026',
    tag: 'Micro-SaaS',
    color: '#f97316',
    description:
      'Cross-checks responses from 4 AI models, replacing single-model dependency with consensus-based validation and confidence scoring.',
    bullets: [
      '4-model consensus validation & confidence scoring',
      '6+ integrated services: AI APIs, auth, payments, deployment',
      'End-to-end parallel AI processing pipeline',
    ],
    link: 'https://whistle.codes',
    status: 'In Development',
  },
  {
    id: 1,
    icon: <CircleStackIcon className="w-7 h-7" />,
    title: 'The Steady',
    subtitle: 'AI Financial Companion for Gig Workers',
    year: '2025',
    tag: 'AI / FinTech',
    color: '#34d399',
    description:
      'AI-driven financial system unifying multi-platform gig earnings (Swiggy, Zomato, Uber) with real-time income overview and smart savings.',
    bullets: [
      'Unified multi-platform income dashboard',
      'AI forecasting & Shadow Wallet lock-savings',
      'Adaptive Smart Modes — 40%+ savings stability',
    ],
    link: 'https://thesteady.netlify.app/',
    status: 'Shipped',
  },
  {
    id: 2,
    icon: <SparklesIcon className="w-7 h-7" />,
    title: 'CareerCopilot',
    subtitle: 'AI Career Companion',
    year: '2024',
    tag: 'AI Platform',
    color: '#a855f7',
    description:
      'AI-powered platform to help students prepare smarter and get hired faster via adaptive mock tests and personalized roadmaps.',
    bullets: [
      'Adaptive AI mock tests from job descriptions',
      'Real interview voice simulations',
      'Personalized skill roadmaps',
    ],
    link: 'https://mocker-agent.vercel.app/#/mock-test',
    status: 'In Progress',
  },
  {
    id: 3,
    icon: <ChatbotIcon className="w-7 h-7" />,
    title: 'MEX Assistant',
    subtitle: 'Merchant Chatbot',
    year: '2024',
    tag: 'AI / FastAPI',
    color: '#8b5cf6',
    description:
      'FastAPI + MongoDB chatbot with Gemini AI. Reduced manual search by 85% and sped up query resolution by 80%.',
    bullets: [
      '85% reduction in manual search time',
      'Gemini AI smart response integration',
      '80%+ faster query resolution',
    ],
    link: 'https://github.com/VSD10/MEX-ASSISTANT--BITSANDBYTES',
    status: 'Shipped',
  },
  {
    id: 4,
    icon: <ExtensionIcon className="w-7 h-7" />,
    title: 'Lazy Timer',
    subtitle: 'Website Time Tracker Extension',
    year: '2025',
    tag: 'Chrome Extension',
    color: '#e879f9',
    description:
      'Lightweight Chrome extension tracking website usage with real-time stats, smart pausing, and a local private dashboard.',
    bullets: [
      'Real-time website usage tracking',
      'Smart pause & daily goal alerts',
      'Local-first — fully private',
    ],
    link: 'https://github.com/VSD10/LAZY_TIMER_EXTENSION',
    status: 'Shipped',
  },
  {
    id: 5,
    icon: <DevIcon className="w-7 h-7" />,
    title: 'Attendance Reporter',
    subtitle: 'Student Web Tool',
    year: '2023',
    tag: 'Web Tool',
    color: '#6366f1',
    description:
      'Web tool for efficiently recording and managing student attendance with WhatsApp report sharing.',
    bullets: [
      'Mark & track attendance records',
      'Auto-generate exportable reports',
      'WhatsApp one-tap sharing',
    ],
    link: 'https://vsd10.github.io/CSBS/csbs.html',
    status: 'Shipped',
  },
  {
    id: 6,
    icon: <PortfolioIcon className="w-7 h-7" />,
    title: 'This Portfolio',
    subtitle: 'Personal Website',
    year: '2025',
    tag: 'React / Vite',
    color: '#c084fc',
    description:
      'Modern personal portfolio with Framer Motion animations, responsive Bento layout, and interactive sections built with React and Vite.',
    bullets: [
      'Framer Motion animations throughout',
      'Responsive for all screen sizes',
      'Interactive OpenSource & Achievements sections',
    ],
    link: '#',
    status: 'Live',
  },
];

const statusColors: Record<string, string> = {
  Shipped: '#22c55e',
  'In Progress': '#f59e0b',
  'In Development': '#f97316',
  Live: '#38bdf8',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 22 },
  },
};

interface TiltCardProps {
  project: (typeof projects)[0];
  idx: number;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ project, idx, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);
  const [hovered, setHovered] = useState(false);
  const fp = floatParams[idx % floatParams.length];
  const ap = auroraPositions[idx % auroraPositions.length];

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    setRotX((ny - 0.5) * -22);
    setRotY((nx - 0.5) * 22);
    setGlowX(nx * 100);
    setGlowY(ny * 100);
  };

  const onLeave = () => {
    setRotX(0);
    setRotY(0);
    setHovered(false);
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`${className}`}
      style={{ perspective: '1200px', position: 'relative' }}
      whileHover={{ scale: 1.06, zIndex: 50 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      {/* Float wrapper */}
      <motion.div
        animate={hovered ? { y: 0 } : { y: [0, -12, 0] }}
        transition={{
          duration: fp.duration,
          delay: fp.delay,
          repeat: hovered ? 0 : Infinity,
          ease: 'easeInOut',
        }}
        style={{ height: '100%' }}
      >
        {/* Tilt wrapper */}
        <div
          ref={cardRef}
          onMouseMove={onMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={onLeave}
          style={{
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            transition: hovered
              ? 'transform 0.08s linear'
              : 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
            transformStyle: 'preserve-3d',
            height: '100%',
          }}
        >
          {/* Drop shadow that shifts with tilt */}
          <div
            className="absolute -inset-px rounded-2xl pointer-events-none"
            style={{
              boxShadow: hovered
                ? `${rotY * 1.5}px ${-rotX * 1.5}px 50px ${project.color}30, 0 0 0 1px ${project.color}30`
                : '0 20px 40px rgba(0,0,0,0.5)',
              transition: 'box-shadow 0.3s',
              borderRadius: '1rem',
            }}
          />

          {/* Card surface */}
          <div
            className="relative overflow-hidden rounded-2xl h-full flex flex-col"
            style={{
              background: 'rgba(11,11,14,0.92)',
              border: `1px solid ${hovered ? project.color + '44' : 'rgba(255,255,255,0.06)'}`,
              backdropFilter: 'blur(20px)',
              transition: 'border 0.3s',
            }}
          >
            {/* Animated aurora blob */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              animate={{
                background: ap.map(
                  (pos) =>
                    `radial-gradient(ellipse 70% 55% at ${pos}, ${project.color}1a 0%, transparent 65%)`
                ),
              }}
              transition={{
                duration: fp.duration + 2,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'mirror',
              }}
            />

            {/* Mouse spotlight */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(circle 160px at ${glowX}% ${glowY}%, ${project.color}1a, transparent)`,
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.3s',
              }}
            />

            {/* Top glowing edge line */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
              animate={
                hovered
                  ? {
                      background: [
                        `linear-gradient(90deg, transparent 0%, ${project.color}cc 50%, transparent 100%)`,
                        `linear-gradient(90deg, transparent 20%, ${project.color}cc 70%, transparent 100%)`,
                        `linear-gradient(90deg, transparent 0%, ${project.color}cc 50%, transparent 100%)`,
                      ],
                    }
                  : {
                      background: `linear-gradient(90deg, transparent, ${project.color}30, transparent)`,
                    }
              }
              transition={{ duration: 1.5, repeat: hovered ? Infinity : 0 }}
            />

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col flex-grow">
              {/* Top row — badges + year */}
              <div className="flex items-center gap-2 flex-wrap mb-5">
                <span
                  className="text-[9px] uppercase tracking-[0.18em] font-bold px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: `${project.color}12`,
                    color: project.color,
                    border: `1px solid ${project.color}28`,
                  }}
                >
                  {project.tag}
                </span>
                <span
                  className="text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5"
                  style={{
                    backgroundColor: `${statusColors[project.status]}10`,
                    color: statusColors[project.status],
                    border: `1px solid ${statusColors[project.status]}28`,
                  }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: statusColors[project.status] }}
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  />
                  {project.status}
                </span>
                <span className="ml-auto text-xs font-mono text-gray-600">{project.year}</span>
              </div>

              {/* Icon + Title */}
              <div className="flex items-start gap-3 mb-4">
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  animate={
                    hovered
                      ? {
                          backgroundColor: `${project.color}25`,
                          boxShadow: `0 0 22px ${project.color}55`,
                          scale: 1.08,
                        }
                      : {
                          backgroundColor: `${project.color}0e`,
                          boxShadow: `0 0 0px ${project.color}00`,
                          scale: 1,
                        }
                  }
                  transition={{ duration: 0.35 }}
                  style={{ color: project.color }}
                >
                  {project.icon}
                </motion.div>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">{project.title}</h3>
                  <p className="text-[11px] text-gray-500 mt-0.5">{project.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-[11px] leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-5">
                {project.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2 text-[11px] leading-relaxed"
                    animate={{ color: hovered ? '#d1d5db' : '#9ca3af' }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <motion.span
                      className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: project.color }}
                      animate={hovered ? { scale: [1, 1.7, 1] } : { scale: 1 }}
                      transition={{ delay: i * 0.12, duration: 0.9, repeat: hovered ? Infinity : 0 }}
                    />
                    {b}
                  </motion.li>
                ))}
              </ul>

              {/* Link */}
              <div className="mt-auto">
                {project.link && project.link !== '#' ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold"
                    style={{ color: project.color }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.span
                      animate={hovered ? { x: 0 } : { x: 0 }}
                      className="hover:underline"
                    >
                      View Project
                    </motion.span>
                    <motion.span
                      animate={hovered ? { x: 3, y: -3 } : { x: 0, y: 0 }}
                      transition={{ type: 'spring', stiffness: 350 }}
                    >
                      <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </motion.span>
                  </a>
                ) : (
                  <span className="text-xs text-gray-600 italic">You're looking at it ✦</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsShowcase: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="py-16 md:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-purple-400 mb-3 font-medium"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          My Work
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl font-medium bg-gradient-to-tl from-white to-gray-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="text-gray-500 text-sm mt-3 max-w-xs mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Hover each card — they're alive.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {/* Row 1 — WHISTLE large + The Steady */}
        <TiltCard project={projects[0]} idx={0} className="md:col-span-2" />
        <TiltCard project={projects[1]} idx={1} />

        {/* Row 2 — CareerCopilot + MEX + Lazy Timer */}
        <TiltCard project={projects[2]} idx={2} />
        <TiltCard project={projects[3]} idx={3} />
        <TiltCard project={projects[4]} idx={4} />

        {/* Row 3 — Attendance + Portfolio wide */}
        <TiltCard project={projects[5]} idx={5} />
        <TiltCard project={projects[6]} idx={6} className="md:col-span-2" />
      </motion.div>
    </motion.section>
  );
};

export default ProjectsShowcase;
