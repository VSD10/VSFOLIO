import React from 'react';
import { motion } from 'framer-motion';
import { BoltIcon } from './icons/BoltIcon';
import { LightboxIcon } from './icons/LightboxIcon';

const NationalBankLogo: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
        <path d="M4 12L12 4L20 12L12 20L4 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const clients = [
    { name: 'NATIONAL BANK', logo: <NationalBankLogo />, customClass: 'flex items-center space-x-2' },
    { name: 'mattered*', customClass: 'text-2xl font-bold tracking-tighter text-gray-400' },
    { name: 'Coca-Cola', customClass: 'text-2xl font-serif font-bold text-gray-400' },
    { name: 'Lightbox', logo: <LightboxIcon className="w-6 h-6 text-gray-400" />, customClass: 'flex items-center space-x-2' },
    { name: 'SUBWAY', customClass: 'text-2xl font-bold text-gray-400 italic' },
    { name: 'Boltshift', logo: <BoltIcon className="w-5 h-5 text-gray-400" />, customClass: 'flex items-center space-x-2' },
];

const Clients: React.FC = () => {
  return (
    <motion.section 
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div 
        className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:justify-between"
        variants={containerVariants}
      >
        {clients.map((client, index) => (
            <motion.div 
                key={index} 
                className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
                variants={itemVariants}
            >
                <div className={client.customClass}>
                    {client.logo}
                    <span className={!client.logo ? client.customClass : 'font-semibold text-gray-400'}>{client.name}</span>
                </div>
            </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Clients;