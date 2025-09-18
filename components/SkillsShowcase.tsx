import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Category Icons
import { GlobeAltIcon } from './icons/GlobeAltIcon';
import { CodeBracketIcon } from './icons/CodeBracketIcon';
import { CircleStackIcon } from './icons/CircleStackIcon';
import { SparklesIcon } from './icons/SparklesIcon';

// Import Skill Icons
import { ReactIcon } from './icons/skills/ReactIcon';
import { NextjsIcon } from './icons/skills/NextjsIcon';
import { TailwindIcon } from './icons/skills/TailwindIcon';
import { FramerMotionIcon } from './icons/skills/FramerMotionIcon';
import { HTMLIcon } from './icons/skills/HTMLIcon';
import { PythonIcon } from './icons/skills/PythonIcon';
import { FastAPIIcon } from './icons/skills/FastAPIIcon';
import { JavaIcon } from './icons/skills/JavaIcon';
import { NodejsIcon } from './icons/skills/NodejsIcon';
import { ExpressIcon } from './icons/skills/ExpressIcon';
import { MongoDBIcon } from './icons/skills/MongoDBIcon';
import { MySQLIcon } from './icons/skills/MySQLIcon';
import { PostgreSQLIcon } from './icons/skills/PostgreSQLIcon';
import { FirebaseIcon } from './icons/skills/FirebaseIcon';
import { GeminiIcon } from './icons/skills/GeminiIcon';
import { LangChainIcon } from './icons/skills/LangChainIcon';
import { OpenAIIcon } from './icons/skills/OpenAIIcon';
import { ScikitLearnIcon } from './icons/skills/ScikitLearnIcon';
import { PandasIcon } from './icons/skills/PandasIcon';

const skillsData = [
  {
    title: 'Frontend Development',
    icon: <GlobeAltIcon className="w-8 h-8 text-gray-400" />,
    skills: [
      { name: 'React', icon: <ReactIcon className="w-6 h-6" /> },
      { name: 'Next.js', icon: <NextjsIcon className="w-6 h-6" /> },
      { name: 'Tailwind CSS', icon: <TailwindIcon className="w-6 h-6" /> },
      { name: 'Framer Motion', icon: <FramerMotionIcon className="w-6 h-6" /> },
      { name: 'HTML/CSS/JS', icon: <HTMLIcon className="w-6 h-6" /> },
    ],
  },
  {
    title: 'Backend Development',
    icon: <CodeBracketIcon className="w-8 h-8 text-gray-400" />,
    skills: [
      { name: 'Python', icon: <PythonIcon className="w-6 h-6" /> },
      { name: 'FastAPI', icon: <FastAPIIcon className="w-6 h-6" /> },
      { name: 'Java', icon: <JavaIcon className="w-6 h-6" /> },
      { name: 'Node.js', icon: <NodejsIcon className="w-6 h-6" /> },
      { name: 'Express.js', icon: <ExpressIcon className="w-6 h-6" /> },
    ],
  },
  {
    title: 'Databases',
    icon: <CircleStackIcon className="w-8 h-8 text-gray-400" />,
    skills: [
      { name: 'MongoDB', icon: <MongoDBIcon className="w-6 h-6" /> },
      { name: 'MySQL', icon: <MySQLIcon className="w-6 h-6" /> },
      { name: 'PostgreSQL', icon: <PostgreSQLIcon className="w-6 h-6" /> },
      { name: 'Firebase', icon: <FirebaseIcon className="w-6 h-6" /> },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: <SparklesIcon className="w-8 h-8 text-gray-400" />,
    skills: [
      { name: 'Gemini API', icon: <GeminiIcon className="w-6 h-6" /> },
      { name: 'LangChain', icon: <LangChainIcon className="w-6 h-6" /> },
      { name: 'OpenAI', icon: <OpenAIIcon className="w-6 h-6" /> },
      { name: 'Scikit-learn', icon: <ScikitLearnIcon className="w-6 h-6" /> },
      { name: 'Pandas', icon: <PandasIcon className="w-6 h-6" /> },
    ],
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const SkillsShowcase: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <motion.section
            id="skills"
            className="py-12 md:py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-tl from-white to-gray-800 bg-clip-text text-transparent">
                    Skills & Expertise
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                {skillsData.map((category, index) => (
                    <motion.div
                        key={category.title}
                        layout
                        onClick={() => handleCardClick(index)}
                        className="bg-gray-800/20 border border-gray-800 rounded-lg p-6 cursor-pointer hover:border-gray-700 hover:shadow-lg hover:shadow-purple-900/10 transition-all duration-300"
                        whileHover={{ scale: 1.03 }}
                        transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
                    >
                        <motion.div layout="position" className="flex items-center space-x-4">
                            {category.icon}
                            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                        </motion.div>

                        <AnimatePresence>
                            {expandedIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <motion.ul
                                        variants={listVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="mt-6 space-y-4"
                                    >
                                        {category.skills.map((skill) => (
                                            <motion.li
                                                key={skill.name}
                                                variants={itemVariants}
                                                className="flex items-center space-x-3 text-gray-300"
                                            >
                                                {skill.icon}
                                                <span>{skill.name}</span>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default SkillsShowcase;