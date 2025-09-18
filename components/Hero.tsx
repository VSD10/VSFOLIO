import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';
import { DocumentTextIcon } from './icons/DocumentTextIcon';
import ResumeModal from './ResumeDrawer';
import image from './icons/1.jpg';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.section 
        className="text-center py-12 md:py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex flex-col items-center">
          <motion.img
            src={image}
            alt="DHARSHAN VS"
            className="w-24 h-24 rounded-full mb-6 object-cover"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          />
          <p className="text-gray-400 mb-2">
            Hi, I'm DHARSHAN VS 👋
          </p>
          <h1 className="text-4xl md:text-6xl font-medium max-w-4xl leading-tight bg-gradient-to-tl from-purple-900 via-black to-white bg-clip-text text-transparent">
            Passionate about coding, open-source, and AI—creating apps and tools that push boundaries.
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
            <a 
              href="https://github.com/vsd10" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block border border-gray-700 hover:border-gray-500 rounded-md px-5 py-3 text-sm flex items-center space-x-2 transition-colors duration-300"
            >
              <span>My Projects</span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-block border border-gray-700 hover:border-gray-500 rounded-md px-5 py-3 text-sm flex items-center space-x-2 transition-colors duration-300"
              aria-label="View Resume"
            >
              <span>View Resume</span>
              <DocumentTextIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.section>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;