// Logo.jsx - Create this file in your components folder
import React from 'react';

const Logo = ({ className = '', size = 40 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0047AB" />
          <stop offset="100%" stopColor="#4D7CC3" />
        </linearGradient>
      </defs>
      
      {/* Main Circle */}
      <circle cx="60" cy="60" r="50" fill="url(#logoGradient)" />
      
      {/* Inner Design - People Connection */}
      <circle cx="40" cy="45" r="12" fill="white" />
      <circle cx="80" cy="45" r="12" fill="white" />
      <circle cx="60" cy="75" r="12" fill="white" />
      
      {/* Connection Lines */}
      <line x1="40" y1="45" x2="80" y2="45" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="40" y1="45" x2="60" y2="75" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="80" y1="45" x2="60" y2="75" stroke="white" strokeWidth="3" strokeLinecap="round" />
      
      {/* Outer Ring */}
      <circle cx="60" cy="60" r="50" fill="none" stroke="white" strokeWidth="3" strokeDasharray="5,5" />
    </svg>
  );
};

export default Logo;