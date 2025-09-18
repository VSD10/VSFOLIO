
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="border border-gray-800 p-8 rounded-lg h-full hover:border-gray-700 transition-colors duration-300">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-medium text-gray-100 mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
