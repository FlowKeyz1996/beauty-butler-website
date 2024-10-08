// components/Button.tsx

import React from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  color?: string; // Optional color property for background color
  textColor?: string; // Optional text color property
  size?: 'small' | 'medium' | 'large'; // Optional size property
};

const Button: React.FC<ButtonProps> = ({ text, onClick, color = 'bg-blue-500', textColor = 'text-white', size = 'medium' }) => {
  let sizeClasses = '';

  // Determine size classes based on the size prop
  switch (size) {
    case 'small':
      sizeClasses = 'px-2 py-1 text-sm';
      break;
    case 'medium':
      sizeClasses = 'px-4 py-2 text-md';
      break;
    case 'large':
      sizeClasses = 'px-6 py-3 text-lg';
      break;
    default:
      sizeClasses = 'px-4 py-2';
  }

  return (
    <button
      onClick={onClick}
      className={`${color} ${textColor} ${sizeClasses} rounded hover:opacity-80`}
    >
      {text}
    </button>
  );
};

export default Button;
