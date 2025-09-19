import React, { useState, useEffect, useMemo, useRef } from 'react';
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
  { category: 'Data', title: 'MySQL for Data Engineering', issuer: 'Duke University', date: 'Aug 2025', credentialLink: 'https://www.coursera.org/account/accomplishments/records/FQ8H5CFY0DSQ', icon: <DatabaseIcon className={iconClass} /> },
  { category: 'Career', title: '[Taro Classic] Expertly Navigate Your Performance Review in Tech', issuer: 'Taro (YC S22)', date: 'Aug 2025', credentialLink: 'https://www.jointaro.com/certificate/0mYlhqJy6pXgLE7aoVpI/', icon: <PresentationChartLineIcon className={iconClass} /> },
  { category: 'Core Skills', title: 'GitHub Foundations', issuer: 'GitHub', date: 'Issued Apr 2025', credentialLink: 'https://www.credly.com/badges/67658e45-620b-428e-8bc8-947c3c7f114f/linked_in_profile', icon: <GithubIcon className={iconClass} /> },
  { category: 'Core Skills', title: 'Master the Coding Interview: Data Structures + Algorithms', issuer: 'Udemy', date: 'Mar 2025', credentialLink: 'https://www.udemy.com/certificate/UC-50e13fc2-7b86-4eec-bf57-9f4536520c0a/', icon: <CodeBracketIcon className={iconClass} /> },
  { category: 'AI', title: 'Academy Accreditation - Generative AI Fundamentals', issuer: 'Databricks', date: 'Mar 2025', credentialLink: 'https://credentials.databricks.com/a927c372-76f3-4902-84a2-730f0a3ae793', icon: <SparklesIcon className={iconClass} /> },
  { category: 'AI', title: 'Certificate of completion - Intro to ChatGPT and Generative AI', issuer: '365 Data Science', date: 'Nov 2024', credentialLink: 'https://learn.365datascience.com/c/6614d6a610', icon: <SparklesIcon className={iconClass} /> },
  { category: 'AI', title: 'ETHICAL AI', issuer: 'Infosys', date: 'Sep 2024', credentialLink: 'https://drive.google.com/file/d/1RBpIx0tuKpKytn21A3VuymkaTEkn5xF_/view?usp=drive_link', icon: <SparklesIcon className={iconClass} /> },
  { category: 'AI', title: 'PROMPT ENGINEERING', issuer: 'Udemy', date: 'Sep 2024', credentialLink: 'https://www.udemy.com/certificate/UC-77032383-9925-47af-8131-3371381a2ae2/', icon: <SparklesIcon className={iconClass} /> },
  { category: 'Web', title: 'REACT', issuer: 'Udemy', date: 'Sep 2024', credentialLink: 'https://www.udemy.com/certificate/UC-cee802cd-ffc8-41b9-8a16-aa1d724499fc/', icon: <DevIcon className={iconClass} /> },
  { category: 'Core Skills', title: 'Learn Git, GitHub and Markdown', issuer: 'Udemy', date: 'Apr 2024', credentialLink: 'https://www.udemy.com/certificate/UC-293ba7ca-0fae-41ae-adf4-77068110fe9b/', icon: <GithubIcon className={iconClass} /> },
  { category: 'Blockchain', title: 'Transition to Web3 - Course 2 | Blockchain Basics', issuer: 'Patika.dev', date: 'Mar 2024', credentialLink: 'https://www.risein.com/certificates/20f185e8', icon: <BlockchainIcon className={iconClass} /> },
  { category: 'Blockchain', title: 'Transition to Web3 - Course 3 | Transactions and Bitcoin', issuer: 'Patika.dev', date: 'Mar 2024', credentialLink: 'https://www.risein.com/certificates/b217d429', icon: <BlockchainIcon className={iconClass} /> },
  { category: 'Blockchain', title: 'Transition to Web3 - Course 4 | How Smart Contracts Work', issuer: 'Patika.dev', date: 'Mar 2024', credentialLink: 'https://www.risein.com/certificates/71ba121d', icon: <BlockchainIcon className={iconClass} /> },
  { category: 'Core Skills', title: 'Introduction to Programming Using Python', issuer: 'Udemy', date: 'Feb 2024', credentialLink: ' https://www.udemy.com/certificate/UC-8467a87d-378a-4257-90b0-9a7056fba400/ ', icon: <CodeBracketIcon className={iconClass} /> },
  { category: 'Blockchain', title: 'BLOCKCHAIN EVENT', issuer: 'BHARAT BLOCKCHAIN NETWORK', date: 'Oct 2023', credentialLink: 'https://www.bon.bharatblockchain.io/credential/df9a16bf-8d45-4577-a60f-32a1c4fa9fbe', icon: <BlockchainIcon className={iconClass} /> },
  { category: 'AI', title: 'Introduction to Generative AI', issuer: 'Coursera', date: 'Sep 2023', credentialLink: 'https://coursera.org/share/ad9a2da14acee8b4a9acdb947897b05f', icon: <SparklesIcon className={iconClass} /> },
  { category: 'Core Skills', title: 'Typewriting English', issuer: 'Government of Tamil Nadu', date: 'Aug 2019', credentialLink: 'https://drive.google.com/file/d/1el3TBglKRUPk_9bM-CXlQ5G2vMn0fq4u/view?usp=share_link', icon: <DocumentTextIcon className={iconClass} /> },
  // New certifications
  { category: 'Core Skills', title: 'Cisco Certified Network Associate (CCNA)', issuer: 'Thinkinfoexpert Solution', date: 'Issued Jun 2023', credentialLink: 'https://drive.google.com/file/d/1QtLo69u-vdQH8JPGe_67IujL9JFppxpE/view?usp=sharing', icon: <DevIcon className={iconClass} /> },
  { category: 'Core Skills', title: 'CompTIA A+ and N+', issuer: 'Thinkinfoexpert Solution', date: 'Issued Jun 2023', credentialLink: 'https://drive.google.com/file/d/1-475FzxcjB__EFPLmNftDqApqCHJFxDs/view?usp=sharing', icon: <DevIcon className={iconClass} /> },
  { category: 'Core Skills', title: 'Programming in C and C++', issuer: 'Sastha Academy', date: 'Issued Dec 2022', credentialLink: 'https://drive.google.com/file/d/1-5_4IvreAVrJZ6t5U-wLwphxYPhBiXD5/view?usp=sharing', icon: <CodeBracketIcon className={iconClass} /> },
  { category: 'Blockchain', title: 'INTRODUCTION TO BLOCKCHAIN', issuer: 'LinkedIn', date: 'Issued Apr 2023', credentialLink: 'https://drive.google.com/file/d/1NzpBEFUj-t_ZsyeajAjeS9r2P6X4H6mE/view?usp=sharing', icon: <BlockchainIcon className={iconClass} /> },
  { category: 'Core Skills', title: 'Internet of Things', issuer: 'Great Learning', date: 'Issued Jan 2023', credentialLink: 'https://olympus1.mygreatlearning.com/course_certificate/XVELMEZB', icon: <DevIcon className={iconClass} /> },
];

const categories = ['AI', 'Web', 'Data', 'Blockchain', 'Career', 'Core Skills'];
const ITEMS_PER_PAGE = 6;

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const CertificatesShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('AI');
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const filteredCertifications = useMemo(() => {
    return certificationsData.filter(c => c.category === activeFilter);
  }, [activeFilter]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredCertifications.length / ITEMS_PER_PAGE);
  }, [filteredCertifications]);

  const paginatedCertifications = useMemo(() => {
    const start = currentPage * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredCertifications.slice(start, end);
  }, [currentPage, filteredCertifications]);
  
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setCurrentPage(0);
  };

  useEffect(() => {
    if (!isHovered && totalPages > 1) {
      intervalRef.current = window.setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, totalPages]);

  return (
    <motion.section
      id="certifications"
      className="py-12 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
            onClick={() => handleFilterChange(category)}
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
      
      <div className="relative min-h-[550px] md:min-h-[550px] lg:min-h-[380px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${currentPage}`}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {paginatedCertifications.map((cert) => (
              <CertificateCard
                key={`${cert.title}-${cert.issuer}`}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                credentialLink={cert.credentialLink}
                icon={cert.icon}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </motion.section>
  );
};

export default CertificatesShowcase;
