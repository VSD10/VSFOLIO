import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon } from './icons/UserIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { GlobeAltIcon } from './icons/GlobeAltIcon';
import { CodeBracketIcon } from './icons/CodeBracketIcon';
import { BoltIcon } from './icons/BoltIcon';

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

const About: React.FC = () => {
  return (
    <motion.section 
      id="about" 
      className="py-12 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="border border-gray-800 p-8 md:p-12 rounded-lg hover:border-gray-700 transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div>
              <UserIcon className="w-32 h-32 text-gray-500" />
            </div>
          </div>
          <motion.div 
            className="md:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-medium mb-4 text-center md:text-left bg-gradient-to-tl from-white to-gray-800 bg-clip-text text-transparent">
                About Me
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-center md:text-left text-gray-400 font-mono mb-6 text-sm flex items-center justify-center md:justify-start">
                Engineer in the Making <BoltIcon className="w-4 h-4 mx-1.5 text-yellow-400" /> | Turning Ideas into Impact
              </motion.p>
              
              <ul className="space-y-4 text-gray-400 text-center md:text-left">
                <motion.li variants={itemVariants} className="flex items-start">
                  <SparklesIcon className="w-6 h-6 mr-4 mt-1 text-gray-400 shrink-0" />
                  <div><strong className="font-semibold text-gray-200">Self-taught problem solver</strong>, constantly chasing the next challenge and thriving on learning by building.</div>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <GlobeAltIcon className="w-6 h-6 mr-4 mt-1 text-gray-400 shrink-0" />
                  <div>Passionate about <strong className="font-semibold text-gray-200">AI, web development, and open-source</strong>, with a mission to create impact and stay ahead of the curve.</div>
                </motion.li>
                 <motion.li variants={itemVariants} className="flex items-start">
                  <CodeBracketIcon className="w-6 h-6 mr-4 mt-1 text-gray-400 shrink-0" />
                  <div>Always exploring, brainstorming new ideas, and collaborating with tech enthusiasts on innovative projects.</div>
                </motion.li>
              </ul>

              <motion.p 
                variants={itemVariants}
                className="text-gray-500 italic mt-8 text-center md:text-left text-sm flex items-center justify-center md:justify-start">
                Fueled by coffee, powered by curiosity, and obsessed with making tech feel magical
                <SparklesIcon className="w-4 h-4 ml-1.5 text-yellow-400" />.
              </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
