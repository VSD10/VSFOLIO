import React from 'react';
// Fix: Import Variants type from framer-motion to resolve TypeScript error.
import { motion, Variants } from 'framer-motion';
import { MailIcon } from './icons/MailIcon';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

// Fix: Explicitly type variants with Variants to prevent type inference issues.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Fix: Explicitly type variants with Variants to prevent type inference issues.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } },
};

const socialLinks = [
  {
    href: 'https://github.com/VSD10',
    label: 'GitHub',
    icon: <GithubIcon className="w-6 h-6" />,
  },
  {
    href: 'https://www.linkedin.com/in/vsd10/',
    label: 'LinkedIn',
    icon: <LinkedInIcon className="w-6 h-6" />,
  },
  {
    href: 'mailto:vsdh2004@gmail.com',
    label: 'Email',
    icon: <MailIcon className="w-6 h-6" />,
  },
];

const Contact: React.FC = () => {
  return (
    <motion.section 
      id="contact" 
      className="text-center py-12 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-3xl md:text-5xl font-medium max-w-2xl mx-auto leading-tight bg-gradient-to-tl from-white to-gray-800 bg-clip-text text-transparent">
        Let's build Together.
      </h2>
      <p className="text-gray-400 mt-4 max-w-xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to connect with me.
      </p>

      <motion.div
        className="mt-10 flex justify-center items-center space-x-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Connect on ${link.label}`}
            className="bg-gray-800 p-4 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-110 transition-all duration-300"
            variants={itemVariants}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Contact;