import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CertificateCard from './CertificateCard';

// Import Icons
import { SparklesIcon } from './icons/SparklesIcon';
import { DevIcon } from './icons/DevIcon';
import { GithubIcon } from './icons/GithubIcon';
import { BlockchainIcon } from './icons/BlockchainIcon';
import { PresentationChartLineIcon } from './icons/PresentationChartLineIcon';
import { DatabaseIcon } from './icons/DatabaseIcon';
import { CodeBracketIcon } from './icons/CodeBracketIcon';
import { DocumentTextIcon } from './icons/DocumentTextIcon';

const iconClass = "w-12 h-12 bg-gray-800 rounded-md p-2.5 text-gray-400";

const certificationsData = [
  { category: 'Data', title: 'MySQL for Data Engineering', issuer: 'Duke University', date: 'Aug 2025', credentialLink: '#', icon: <DatabaseIcon className={iconClass} /> },
  { category: 'Career', title: '[Taro Classic] Expertly Navigate Your Performance Review in Tech', issuer: 'Taro (YC S22)', date: 'Aug 2025', credentialLink: '#', icon: <PresentationChartLineIcon className={iconClass} /> },
  { category: 'Core Skills', title: 'GitHub Foundations', issuer: 'GitHub', date: 'Issued Apr 2025', credentialLink: '#', icon: <GithubIcon className={iconClass} /> },
  { category: 'Core Skills', title: 'Master the Coding Interview: Data Structures + Algorithms', issuer: 'Udemy', date: 'Mar 2025', credentialLink: '#', icon: <CodeBracketIcon className={iconClass} /> },
  { category: 'AI', title: 'Academy Accreditation - Generative AI Fundamentals', issuer: 'Databricks', date: 'Mar 2025', credentialLink: '#', icon: <SparklesIcon className={iconClass} /> },
  { category: 'AI', title: 'Certificate of completion - Intro to ChatGPT and Generative AI', issuer: '365 Data Science', date: 'Nov 2024', credentialLink: '#', icon: <SparklesIcon className={iconClass} /> },
  { category: 'AI', title: 'ETHICAL AI', issuer: 'Infosys', date: 'Sep 2024', credentialLink: '#', icon: <SparklesIcon className={iconClass} /> },
  { category: 'AI', title: 'PROMPT ENGINEERING', issuer: 'Udemy', date: 'Sep 2024', credentialLink: '#', icon: <SparklesIcon className={iconClass} /> },
  { category: 'Web', title: 'REACT', issuer: 'Udemy', date: 'Sep 2024', credentialLink: '#', icon: <DevIcon className={iconClass} /> },
  { category: 'Core Skills', title: 'Learn Git, GitHub and Markdown', issuer: 'Udemy', date: 'Apr 2024', credentialLink: '#', icon: <GithubIcon className={iconClass} /> },
  { category: 'Blockchain', title: 'Transition to Web3 - Course 2 | Blockchain Basics', issuer: 'Patika.dev', date: 'Mar 2024', credentialLink: '#', icon: <BlockchainIcon className={iconClass} /> },
  { category: 'Blockchain', title: 'Transition to Web3 - Course 3 | Transactions and Bitcoin', issuer: 'Patika.dev', date: 'Mar 2024', credentialLink: '#', icon: <BlockchainIcon className={iconClass} /> },
  { category: 'Blockchain', title: 'Transition to Web3 - Course 4 | How Smart Contracts Work', issuer: 'Patika.dev', date: 'Mar 2024', credentialLink: '#', icon: <BlockchainIcon className={iconClass} /> },
  { category: 'Core Skills', title: 'Introduction to Programming Using Python', issuer: 'Udemy', date: 'Feb 2024', credentialLink: '#', icon: <CodeBracketIcon className={iconClass} /> },
  { category: 'Blockchain', title: 'BLOCKCHAIN EVENT', issuer: 'BHARAT BLOCKCHAIN NETWORK', date: 'Oct 2023', credentialLink: '#', icon: <BlockchainIcon className={iconClass} /> },
  { category: 'AI', title: 'Introduction to Generative AI', issuer: 'Coursera', date: 'Sep 2023', credentialLink: '#', icon: <SparklesIcon className={iconClass} /> },
  { category: 'Core Skills', title: 'Typewriting English', issuer: 'Government of Tamil Nadu', date: 'Aug 2019', credentialLink: '#', icon: <DocumentTextIcon className={iconClass} /> },
];

const categories = ['All', 'AI', 'Web', 'Data', 'Blockchain', 'Career', 'Core Skills'];

const Certifications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCertifications = activeFilter === 'All'
    ? certificationsData
    : certificationsData.filter(c => c.category === activeFilter);

  return (
    <motion.section
      id="certifications"
      className="py-12 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-tl from-white to-gray-800 bg-clip-text text-transparent">
          Certifications & Credentials
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 text-sm rounded-full transition-colors duration-300 ${
              activeFilter === category
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredCertifications.map((cert) => (
            <CertificateCard
              key={`${cert.title}-${cert.issuer}`}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              credentialLink={cert.credentialLink}
              icon={cert.icon}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Certifications;