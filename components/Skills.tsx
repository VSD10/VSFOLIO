import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { CodeBracketIcon } from './icons/CodeBracketIcon';
import { GlobeAltIcon } from './icons/GlobeAltIcon';
import { CircleStackIcon } from './icons/CircleStackIcon';
import { SparklesIcon } from './icons/SparklesIcon';

const skillsData = [
  {
    icon: <GlobeAltIcon className="w-6 h-6 text-gray-400" />,
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS/JS'],
  },
  {
    icon: <CodeBracketIcon className="w-6 h-6 text-gray-400" />,
    title: 'Backend Development',
    skills: ['Python', 'FastAPI', 'Java', 'Node.js', 'Express.js'],
  },
  {
    icon: <CircleStackIcon className="w-6 h-6 text-gray-400" />,
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
  },
  {
    icon: <SparklesIcon className="w-6 h-6 text-gray-400" />,
    title: 'AI & Machine Learning',
    skills: ['Gemini API', 'LangChain', 'OpenAI', 'Scikit-learn', 'Pandas'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills: React.FC = () => {
  return (
    <motion.section 
      id="skills" 
      className="py-12 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-tl from-white to-gray-800 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
      </div>
      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillsData.map((skill, index) => (
          <motion.div key={index} variants={itemVariants}>
            <SkillCard
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;