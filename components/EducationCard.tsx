// Fix: Implemented the EducationCard component to display individual education details.
import React from 'react';

interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, degree, duration, description }) => {
  return (
    <div className="border border-gray-800 p-8 rounded-lg h-full hover:border-gray-700 transition-colors duration-300 flex flex-col">
      <h3 className="text-xl font-medium text-gray-100 mb-2">{institution}</h3>
      <p className="text-gray-400 text-sm mb-1">{degree}</p>
      <p className="text-gray-500 text-xs mb-4">{duration}</p>
      <p className="text-gray-400 text-sm leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

export default EducationCard;
