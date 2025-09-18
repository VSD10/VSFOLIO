import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon } from './icons/TrophyIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

const achievementsData = [
  {
    year: '2025',
    title: 'UM Hackathon 2025 Participant',
    organization: 'University of Malaya, Malaysia',
    description: 'Collaborated on innovative tech solutions with international teams, gaining exposure to global innovation practices.',
  },
  {
    year: '2024',
    title: 'Smart India Hackathon 2024 Qualifier',
    organization: 'Ministry of Education, India',
    description: 'Built an LLM-powered ChatBot using Gemini API, showcasing advanced AI integration capabilities.',
  },
  {
    year: '2024',
    title: 'Best Co-Curricular Student Award',
    organization: 'Knowledge Institute of Technology',
    description: 'Recognized for outstanding engagement beyond academics and exceptional contribution to department activities.',
  },
  {
    year: '2024',
    title: 'Instagram Campaign Success for "Prill Bar"',
    organization: 'Social Media Marketing',
    description: 'Spearheaded an Instagram campaign reaching 10K+ views and 50+ comments organically.',
  },
  {
    year: '2024',
    title: 'Volunteer at Adira Women\'s Conclave 2024',
    organization: 'Confederation of Indian Industry (CII), Salem',
    description: 'Assisted in organizing and managing the event, facilitating smooth operations and engagement for attendees.',
  },
  {
    year: '2024',
    title: 'Cyber Security Workshop',
    organization: 'ThinkInfo Solutions',
    description: 'Participated in a week-long training, enhancing knowledge of ethical hacking and security practices.',
  },
  {
    year: '2023',
    title: 'Google DevFest Salem Attendee',
    organization: 'Google Developer Groups',
    description: 'Engaged in sessions on emerging technologies and innovation within the tech industry.',
  },
  {
    year: '2024',
    title: 'Blockchain Workshop Attendee',
    organization: 'Bharat Blockchain Council',
    description: 'Explored blockchain fundamentals and applications, gaining hands-on experience in decentralized technologies.',
  },
];

const Achievements: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: false,
    scrollProgress: 0,
    thumbWidth: 0,
  });

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const isScrollable = scrollWidth > clientWidth;

      setScrollState({
        canScrollLeft: isScrollable && scrollLeft > 5,
        canScrollRight: isScrollable && scrollLeft < scrollWidth - clientWidth - 5,
        scrollProgress: isScrollable ? (scrollLeft / (scrollWidth - clientWidth)) * 100 : 0,
        thumbWidth: isScrollable ? (clientWidth / scrollWidth) * 100 : 100,
      });
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      updateScrollState();
      scrollContainer.addEventListener('scroll', updateScrollState);
      window.addEventListener('resize', updateScrollState);

      return () => {
        scrollContainer.removeEventListener('scroll', updateScrollState);
        window.removeEventListener('resize', updateScrollState);
      };
    }
  }, [updateScrollState]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = direction === 'left' ? -el.clientWidth * 0.75 : el.clientWidth * 0.75;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <motion.section
      id="achievements"
      className="py-12 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-tl from-white to-gray-800 bg-clip-text text-transparent">
          Achievements & Milestones
        </h2>
      </div>

      <motion.div 
        className="border border-gray-800 p-8 rounded-lg mb-12 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <TrophyIcon className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
        <h3 className="text-xl font-semibold text-white">Coding Platform Achievements</h3>
        <p className="text-gray-400 mt-2">
          Solved 500+ algorithmic challenges on GeeksforGeeks and 200+ problems on LeetCode.
        </p>
        <a 
          href="https://codolio.com/profile/VSD10" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 mt-6"
        >
          <span>View More</span>
          <ArrowUpRightIcon className="w-4 h-4" />
        </a>
      </motion.div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-8 pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 bg-gray-800/20 border border-gray-800 p-6 rounded-lg hover:border-gray-700 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-sm font-mono text-green-400 mb-2">{item.year}</p>
              <h4 className="font-semibold text-white mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500 mb-3">{item.organization}</p>
              <p className="text-sm text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        {scrollState.thumbWidth < 100 && (
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center w-full max-w-lg">
              <button
                onClick={() => scroll('left')}
                disabled={!scrollState.canScrollLeft}
                className="p-2 rounded-full text-gray-500 disabled:text-gray-700 disabled:cursor-not-allowed transition-colors hover:bg-gray-800 hover:text-white"
                aria-label="Scroll left"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              
              <div className="w-full h-2 bg-gray-800 rounded-full mx-4 relative">
                <div 
                  className="absolute top-0 h-full bg-gray-500 rounded-full transition-all duration-150 ease-in-out"
                  style={{
                    width: `${scrollState.thumbWidth}%`,
                    left: `${(scrollState.scrollProgress / 100) * (100 - scrollState.thumbWidth)}%`,
                  }}
                />
              </div>

              <button
                onClick={() => scroll('right')}
                disabled={!scrollState.canScrollRight}
                className="p-2 rounded-full text-gray-500 disabled:text-gray-700 disabled:cursor-not-allowed transition-colors hover:bg-gray-800 hover:text-white"
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Achievements;