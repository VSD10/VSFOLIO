
import React from 'react';

interface IconProps {
  className?: string;
}

export const LightboxIcon: React.FC<IconProps> = ({ className }) => (
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
      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.184m-1.5.184a6.01 6.01 0 01-1.5-.184m3.75 7.482a9.006 9.006 0 01-3.75 0M12 6.75A2.25 2.25 0 0114.25 9v1.082c0 .927.43 1.77 1.132 2.334V18a2.25 2.25 0 01-2.25 2.25H8.625a2.25 2.25 0 01-2.25-2.25v-5.584c.702-.564 1.132-1.407 1.132-2.334V9A2.25 2.25 0 0112 6.75z"
    />
  </svg>
);
