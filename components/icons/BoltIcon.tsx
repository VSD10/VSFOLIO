
import React from 'react';

interface IconProps {
  className?: string;
}

export const BoltIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    >
    <path 
        fillRule="evenodd" 
        d="M10.5 3.75a.75.75 0 01.75.75v4.5h4.5a.75.75 0 01.622 1.168l-7.5 11.25a.75.75 0 01-1.244-.668v-4.5H3a.75.75 0 01-.622-1.168l7.5-11.25a.75.75 0 011.122-.332z" 
        clipRule="evenodd" />
  </svg>
);
