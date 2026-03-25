import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from './icons/SparklesIcon';
import { GlobeAltIcon } from './icons/GlobeAltIcon';
import { CodeBracketIcon } from './icons/CodeBracketIcon';
import { BoltIcon } from './icons/BoltIcon';

const GITHUB_USER = 'VSD10';

const stats = [
  { value: '7+',  label: 'Projects Shipped' },
  { value: '4+',  label: 'AI Tools Built'   },
  { value: '85%', label: 'Search Reduced'   },
  { value: '2+',  label: 'Years Coding'     },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 24 } },
};

/* ── Glassmorphism card wrapper ─────────────────── */
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

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        {/* ── LEFT — Bio + Stats ─────────────── */}
        <motion.div variants={fadeUp} className="lg:col-span-3 flex flex-col gap-6">

          {/* Bio card */}
          <Card className="p-8 flex flex-col gap-6 flex-grow">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-purple-400 font-medium mb-2">About Me</p>
              <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent leading-tight">
                Engineer in the Making
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <BoltIcon className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400 text-sm font-mono">Turning Ideas into Impact</span>
              </div>
            </div>

            <ul className="space-y-5">
              {[
                {
                  icon: <SparklesIcon className="w-5 h-5" />,
                  color: '#a855f7',
                  title: 'AI-driven Software Engineer',
                  body: 'Passionate about building fast, simple, and scalable products powered by artificial intelligence and modern backend stacks.',
                },
                {
                  icon: <GlobeAltIcon className="w-5 h-5" />,
                  color: '#6366f1',
                  title: 'Full-Stack Thinking',
                  body: 'Skilled in Python, SQL, React, and LLM workflows — with real-world expertise in automation tools and AI platforms.',
                },
                {
                  icon: <CodeBracketIcon className="w-5 h-5" />,
                  color: '#c084fc',
                  title: 'Global Perspective',
                  body: 'International exposure through a student exchange in Malaysia — sharpening product-thinking at a global scale.',
                },
              ].map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-4 group">
                  <motion.div
                    className="mt-0.5 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    whileHover={{ scale: 1.12, boxShadow: `0 0 20px ${item.color}55` }}
                    transition={{ type: 'spring', stiffness: 350 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <p className="text-sm font-semibold text-gray-200 mb-0.5">{item.title}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.body}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={fadeUp}
              className="px-5 py-4 rounded-xl italic text-gray-400 text-xs"
              style={{ background: 'rgba(139,92,246,0.06)', borderLeft: '3px solid rgba(139,92,246,0.5)' }}
            >
              "Fueled by coffee, powered by curiosity, and obsessed with making tech feel magical."
              <SparklesIcon className="inline w-3.5 h-3.5 ml-1 text-yellow-400" />
            </motion.div>
          </Card>

          {/* Stat cards row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -4 }}
                className="rounded-xl p-5 text-center flex flex-col justify-center items-center"
                style={{
                  background: 'rgba(11,11,14,0.85)',
                  border: '1px solid rgba(139,92,246,0.18)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <p className="text-3xl font-medium bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent mb-1">
                  {s.value}
                </p>
                <p className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold">{s.label}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* ── RIGHT — GitHub Streak & Stats ────────────────────── */}
        <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-6">

          {/* GitHub Streak & Stats card */}
          <Card className="p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              {/* GitHub icon */}
              <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="text-sm uppercase tracking-[0.22em] text-purple-400 font-medium">GitHub Activity</span>
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs text-gray-500 hover:text-purple-400 transition-colors font-mono font-semibold"
              >
                @{GITHUB_USER} ↗
              </a>
            </div>

            <div className="flex flex-col gap-5 justify-center flex-grow">
              {/* Streak image */}
              <motion.div
                className="rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={`https://streak-stats.demolab.com/?user=${GITHUB_USER}&theme=tokyonight_duo&hide_border=true&background=0B0B0E&stroke=7C3AED&ring=A855F7&fire=E879F9&currStreakNum=FFFFFF&sideNums=FFFFFF&currStreakLabel=A855F7&sideLabels=6B7280&dates=4B5563&border_radius=12`}
                  alt="GitHub Streak Stats"
                  className="w-full object-contain"
                  style={{ borderRadius: '0.75rem' }}
                  loading="lazy"
                />
              </motion.div>

              {/* GitHub stats image */}
              <motion.div
                className="rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&hide_border=true&theme=transparent&title_color=a855f7&icon_color=a855f7&text_color=9ca3af&bg_color=0b0b0e&border_radius=12&hide_title=false&rank_icon=github`}
                  alt="GitHub Stats"
                  className="w-full object-contain"
                  style={{ borderRadius: '0.75rem' }}
                  loading="lazy"
                />
              </motion.div>
            </div>
          </Card>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default About;
