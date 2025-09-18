import React from 'react';

interface IconProps {
  className?: string;
}

export const GlobeAltIcon: React.FC<IconProps> = ({ className }) => (
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
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.355 0 2.707-.158 4.008-.462M12 21c-1.355 0-2.707-.158-4.008-.462m16.5-4.5c0-4.969-4.031-9-9-9s-9 4.031-9 9m18 0h-3.375m-11.25 0H3.75m11.25 0c0-1.657-1.343-3-3-3s-3 1.343-3 3m6 0v-1.5m-6 1.5v-1.5m12-3a9.004 9.004 0 00-14.25 0"
    />
  </svg>
);
