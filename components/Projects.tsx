import React from 'react';
import { motion } from 'framer-motion';
import { DevIcon } from './icons/DevIcon';
import ProjectCard from './ProjectCard';
import { ChatbotIcon } from './icons/ChatbotIcon';
import { SparklesIcon } from './icons/SparklesIcon';

const projects = [
  {
    icon: <DevIcon className="w-6 h-6 text-gray-400" />,
    title: "Attendance Reporter",
    description: [
      "Developed a web tool for efficiently recording and managing student attendance.",
      "Implemented features for marking status, generating reports, and sharing via WhatsApp."
    ],
    link: "#"
  },
  {
    icon: <ChatbotIcon className="w-6 h-6 text-gray-400" />,
    title: "MEX - Merchant Chatbot",
    description: [
      "Developed a chatbot using FastAPI, Python, and MongoDB to reduce manual search by 85%.",
      "Integrated Gemini AI for smart responses, speeding up query resolution by over 80%."
    ],
    link: "#"
  },
  {
    icon: <SparklesIcon className="w-6 h-6 text-gray-400" />,
    title: "CareerCopilot – AI Career Companion",
    description: [
      "An AI-powered platform to help students prepare smarter and get hired faster.",
      "Offers adaptive mock tests, real interview simulations, and personalized study roadmaps.",
    ],
    link: "#"
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