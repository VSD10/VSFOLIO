import React from 'react';
// Fix: Import Variants from framer-motion to explicitly type animation variants.
import { motion, Variants } from 'framer-motion';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialLink: string;
  icon: React.ReactNode;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ title, issuer, date, credentialLink, icon }) => {
  // Fix: Explicitly type cardVariants with the Variants type to ensure compatibility with framer-motion.
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      className="bg-gray-800/20 border border-gray-800 p-6 rounded-lg h-full hover:border-gray-700 transition-colors duration-300 flex flex-col"
    >
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="ml-4 flex-grow">
          <h3 className="font-semibold text-white leading-tight">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{issuer}</p>
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-xs text-gray-500">{date}</p>
        <a
          href={credentialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-300"
        >
          Show Credential
          <ArrowUpRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateCard;