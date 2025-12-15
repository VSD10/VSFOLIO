import React from 'react';
import { motion } from 'framer-motion';
import { DevIcon } from './icons/DevIcon';
import ProjectCard from './ProjectCard';
import { ChatbotIcon } from './icons/ChatbotIcon';
import { SparklesIcon } from './icons/SparklesIcon';

const projects = [
  {
    icon: <SparklesIcon className="w-6 h-6 text-gray-400" />,
    title: "The Steady — AI Financial Companion",
    description: [
      "Built an AI-driven financial system that unified multi-platform gig earnings (Swiggy, Zomato, Uber), giving workers a 100% real-time income overview.",
      "Implemented AI forecasting, lock-based savings (Shadow Wallet), and adaptive Smart Modes, improving savings stability and decision accuracy by 40%+."
    ],
    link: "#"
  },
  {
    icon: <ChatbotIcon className="w-6 h-6 text-gray-400" />,
    title: "MOCKER_AGENT — AI Mock Interview",
    description: [
      "Developed an AI-powered platform that auto-generates role-specific mock exams by analysing job descriptions and mapping skills, improving test relevance by 70%.",
      "Automated evaluation, scoring, and activity logging, reducing manual review time by 80% while ensuring consistent, high-quality assessments."
    ],
    link: "https://mocker-agent.vercel.app/#/mock-test"
  }
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

const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="py-12 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-tl from-white to-gray-800 bg-clip-text text-transparent">
          Projects
        </h2>
      </div>
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard
              icon={project.icon}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
