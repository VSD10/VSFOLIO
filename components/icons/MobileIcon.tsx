
import React from 'react';

interface IconProps {
  className?: string;
}

export const MobileIcon: React.FC<IconProps> = ({ className }) => (
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
      d="M10.5 1.5H5.25A2.25 2.25 0 003 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0015 20.25V3.75A2.25 2.25 0 0012.75 1.5h-2.25zm0 0v1.5m0 0h-1.5m1.5 0v1.5m0 0h1.5m-1.5 0h.01"
    />
  </svg>
);
