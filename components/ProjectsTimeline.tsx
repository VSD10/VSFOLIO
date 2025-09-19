import React from 'react';
import { motion } from 'framer-motion';
import { DevIcon } from './icons/DevIcon';
import ProjectCard from './ProjectCard';
import { ChatbotIcon } from './icons/ChatbotIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { PortfolioIcon } from './icons/PortfolioIcon';
import { ExtensionIcon } from './icons/ExtensionIcon';

const projects = [
  {
    icon: <DevIcon className="w-6 h-6 text-gray-400" />,
    title: "Attendance Reporter",
    description: [
      "Developed a web tool for efficiently recording and managing student attendance.",
      "Implemented features for marking status, generating reports, and sharing via WhatsApp."
    ],
    link: "https://vsd10.github.io/CSBS/csbs.html"
  },
  {
    icon: <ChatbotIcon className="w-6 h-6 text-gray-400" />,
    title: "MEX - Merchant Chatbot",
    description: [
      "Developed a chatbot using FastAPI, Python, and MongoDB to reduce manual search by 85%.",
      "Integrated Gemini AI for smart responses, speeding up query resolution by over 80%."
    ],
    link: "https://github.com/VSD10/MEX-ASSISTANT--BITSANDBYTES"
  },
  {
    icon: <SparklesIcon className="w-6 h-6 text-gray-400" />,
    title: "CareerCopilot – AI Career Companion",
    description: [
      "An AI-powered platform to help students prepare smarter and get hired faster.",
      "Offers adaptive mock tests, real interview simulations, and personalized study roadmaps.",
      "Still in progress of developing"
    ],
    link: "https://mocker-agent.vercel.app/#/mock-test"
  },
  {
    icon: <PortfolioIcon className="w-6 h-6 text-gray-400" />,
    title: "Portfolio Website",
    description: [
      "Built a modern, responsive personal portfolio showcasing projects, skills, and experience with smooth animations.",
      "Implemented responsive UI/UX optimized for desktop, tablet, and mobile devices.",
      "Designed interactive sections including About, Skills, Experience, Projects, and Open Source Contributions."
    ],
    link: "#"
  },
  {
    icon: <ExtensionIcon className="w-6 h-6 text-gray-400" />,
    title: "Website Time Tracker Chrome Extension",
    description: [
      "Built a lightweight browser extension to track and visualize website usage for productivity insights.",
      "Implemented real-time tracking, smart pausing, and daily goals with customizable notifications.",
      "Designed an interactive dashboard with charts and statistics, storing data locally for privacy."
    ],
    link: "https://github.com/VSD10/LAZY_TIMER_EXTENSION"
  },
  // We can add more projects here if needed
];

// Duplicate projects for a seamless loop
const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

const ProjectsTimeline: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="py-12 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-tl from-white to-gray-800 bg-clip-text text-transparent">
          Projects Timeline
        </h2>
      </div>

      <div
        className="group relative w-full overflow-hidden"
      >
        <div 
          className="flex flex-row items-stretch justify-start animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]"
          style={{ animationName: 'marquee' }}
        >
          {duplicatedProjects.map((project, index) => (
            <div key={index} className="flex-shrink-0 w-full max-w-sm p-4">
              <div className="h-full hover:scale-105 transition-transform duration-300">
                <ProjectCard
                  icon={project.icon}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-r from-[#111111] via-transparent to-[#111111]"></div>
      </div>
    </motion.section>
  );
};

export default ProjectsTimeline;
