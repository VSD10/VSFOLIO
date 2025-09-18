import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon } from './icons/XIcon';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          aria-labelledby="resume-modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative flex flex-col w-full max-w-4xl h-[90vh] border border-white/20 bg-gray-900/50 backdrop-blur-lg text-[#a8b0d3] rounded-lg shadow-xl"
          >
            <header className="flex items-center justify-between p-4 border-b border-white/20 shrink-0">
              <h2 id="resume-modal-title" className="text-lg font-semibold text-white">My Resume</h2>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors"
                aria-label="Close resume viewer"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </header>

            <main className="flex-grow p-1 sm:p-2 md:p-4 overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1iXNig9L9sgux1oGoHO2cVxtDUDYPp7eO/preview"
                className="w-full h-full border-0 rounded bg-white"
                title="Dharshan VS Resume"
              />
            </main>

            <footer className="flex items-center justify-end p-4 border-t border-white/20 shrink-0">
               <button 
                onClick={onClose} 
                className="px-5 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 transition-colors text-sm"
              >
                Close
              </button>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;