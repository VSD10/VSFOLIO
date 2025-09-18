// Fix: Implemented the Education component to correctly render the education section.
import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from './EducationCard';

const educationData = [
  {
    institution: "Knowledge Institute of Technology, India 🇮🇳",
    degree: "B.Tech in Computer Science and Business Systems",
    duration: "Nov 2022 - Present",
    description: "CGPA: 7.84/10.0 | Coursework: Data Structures, Python, Database Management, Operating Systems, Cloud Computing."
  },
  {
    institution: "INTI International University, Malaysia 🇲🇾",
    degree: "Student Exchange Program – B.Sc. (Hons) in Computer Science",
    duration: "Jan 2025 - May 2025",
    description: "Mobility Student | Coursework: Social, Web and Mobile Analytics, Data Warehouse, Web Application Development."
  },
  {
    institution: "Shri Swamy Matric Hr. Sec. School",
    degree: "Higher Secondary",
    duration: "2020 - 2022",
    description: "12th - 83% | 10th - 96%"
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

const Education: React.FC = () => {
  return (
    <motion.section 
      id="education" 
      className="py-12 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text-center mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-tl from-white to-gray-800 bg-clip-text text-transparent">
          Education
        </h2>
      </div>
      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {educationData.map((edu, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className={index === 2 ? 'md:col-span-2' : ''}
          >
            <EducationCard
              institution={edu.institution}
              degree={edu.degree}
              duration={edu.duration}
              description={edu.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;
