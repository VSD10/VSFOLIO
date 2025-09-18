import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { PenIcon } from './icons/PenIcon';
import { DesignIcon } from './icons/DesignIcon';
import { DevIcon } from './icons/DevIcon';
import { GithubIcon } from './icons/GithubIcon';

const servicesData = [
  {
    icon: <PenIcon className="w-6 h-6 text-gray-400" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually appealing user interfaces that enhance user experience.',
  },
  {
    icon: <DevIcon className="w-6 h-6 text-gray-400" />,
    title: 'Web Development',
    description: 'Crafting responsive and dynamic websites using modern technologies like HTML, CSS, JavaScript, and React.',
  },
  {
    icon: <DesignIcon className="w-6 h-6 text-gray-400" />,
    title: 'Frontend Frameworks',
    description: 'Proficient in using popular frontend frameworks like Bootstrap and Tailwind CSS to build robust applications.',
  },
  {
    icon: <GithubIcon className="w-6 h-6 text-gray-400" />,
    title: 'Version Control',
    description: 'Experienced in using Git and GitHub for version control and collaborative development.',
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

const Services: React.FC = () => {
  return (
    <motion.section 
      id="services" 
      className="py-12 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-gray-100 font-medium">
          Collaborate with brands and agencies to create impactful results.
        </h2>
      </div>
      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {servicesData.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;