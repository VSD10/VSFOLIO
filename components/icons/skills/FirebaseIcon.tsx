import React from 'react';

export const FirebaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 6V18L12 22L21 18V6L12 2Z" fill="#FFCA28"/>
    <path d="M12 2L7.5 4.5V15L12 17.5V2Z" fill="#FFA000"/>
    <path d="M12 2L16.5 4.5V15L12 17.5V2Z" fill="#FFC107"/>
    <path d="M3 6L7.5 4.5V15L3 18V6Z" fill="#F57C00"/>
    <path d="M21 6L16.5 4.5V15L21 18V6Z" fill="#FFB300"/>
  </svg>
);
