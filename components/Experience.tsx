import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

const experienceData = [
  {
    date: 'July 2024 - Aug 2024',
    title: 'Frontend & UI/UX Intern',
    company: 'ThinkInfo Solutions',
    description: [
      'Redesigned UI workflows for a cross-platform browser extension, improving task efficiency by 35%.',
      'Built responsive React.js components that reduced load time by 25% and increased mobile accessibility.',
    ],
  },
  {
    date: 'Nov 2023 - Jan 2024',
    title: 'Blockchain Intern',
    company: 'Corizo Pvt. Ltd.',
    description: [
      'Optimized smart-contract logic, improving transaction reliability and reducing execution failures by 20%.',
      'Assisted in debugging deployment workflows, enhancing overall system stability by 15%.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <motion.section
      id="experience"
      className="py-12 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-tl from-white to-gray-800 bg-clip-text text-transparent">
          Experience
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto pl-10">
        {/* Vertical Line */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700"></div>

        {experienceData.map((job, index) => (
          <motion.div
            key={index}
            className="relative mb-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Dot on the line */}
            <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900"></div>

            <div className="pl-8">
              <p className="text-sm text-gray-400">{job.date}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">{job.title}</h3>
              <p className="text-gray-400 mb-3">{job.company}</p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-400 text-sm">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;