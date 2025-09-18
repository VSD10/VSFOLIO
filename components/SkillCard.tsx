import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  return (
    <div className="border border-gray-800 p-8 rounded-lg h-full hover:border-gray-700 transition-colors duration-300">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-medium text-gray-100 mb-4">{title}</h3>
      <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
        {skills.map((skill, i) => (
          <li key={i} className="flex items-center">
            <svg className="w-3 h-3 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
