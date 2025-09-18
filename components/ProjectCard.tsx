import React from 'react';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="border border-gray-800 p-8 rounded-lg h-full hover:border-gray-700 transition-colors duration-300 flex flex-col">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-medium text-gray-100 mb-4">{title}</h3>
      <ul className="text-gray-400 text-sm leading-relaxed list-disc list-inside space-y-2 flex-grow">
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-1 text-sm text-gray-400 hover:text-white transition-colors duration-300 mt-6 self-start"
        >
          <span>View Project</span>
          <ArrowUpRightIcon className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
