import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
};

export { Button }; // Add this line for named export
export default Button;
