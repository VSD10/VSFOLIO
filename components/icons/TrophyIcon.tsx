import React from 'react';

interface IconProps {
  className?: string;
}

export const TrophyIcon: React.FC<IconProps> = ({ className }) => (
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
      d="M16.5 18.75h-9a9.75 9.75 0 011.05-4.326 9.75 9.75 0 0115.9 0A9.75 9.75 0 0121 18.75h-4.5M3.75 18.75h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125H3.75m16.5 0h1.5a1.125 1.125 0 011.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-1.5m-16.5 0a9.75 9.75 0 019.75-9.75 9.75 9.75 0 019.75 9.75m-19.5 0v.243a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-.243m-19.5 0a2.25 2.25 0 00-2.25 2.25v1.5a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-2.25-2.25m-19.5 0v-2.625c0-.621.504-1.125 1.125-1.125h16.5c.621 0 1.125.504 1.125 1.125v2.625"
    />
  </svg>
);