import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Full list for the mobile dropdown
const allNavLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Open Source', href: '#opensource' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

// Curated list for the desktop pill to keep it clean
const desktopNavLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-fit">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-black/30 backdrop-blur-lg rounded-full shadow-lg border border-gray-800"
        >
          <div className="flex items-center justify-between py-2 px-3">
            {/* Logo/Name */}
            <a href="#" className="text-lg font-bold text-gray-200 px-4">
              DHARSHAN V S
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              {desktopNavLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  {index >= 0 && <div className="w-px h-5 bg-gray-700"></div>}
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 px-5 text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </React.Fragment>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-4">
              <button onClick={toggleMenu} className="text-gray-200 p-2 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-4 6h4" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Mobile Vertical Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 mx-4 md:hidden"
          >
            <nav className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-800 p-4">
              <ul className="flex flex-col space-y-2">
                {allNavLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:bg-white/10 block p-3 rounded-lg text-center font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;