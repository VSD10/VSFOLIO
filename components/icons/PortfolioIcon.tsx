import React from 'react';

interface IconProps {
  className?: string;
}

export const PortfolioIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 9h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 3.75v16.5M15 3.75v16.5"
    />
  </svg>
);
