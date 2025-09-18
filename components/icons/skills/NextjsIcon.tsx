import React from 'react';

export const NextjsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="64" fill="black"/>
    <path d="M101.5 31V97" stroke="url(#paint0_linear_1_2)" strokeWidth="11"/>
    <path d="M73 53L101.5 31" stroke="white" strokeWidth="11"/>
    <defs>
      <linearGradient id="paint0_linear_1_2" x1="101.5" y1="31" x2="101.5" y2="97" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);
