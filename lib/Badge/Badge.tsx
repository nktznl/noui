import React from 'react';

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, className }) => {
  return <span className={className}>{text}</span>;
};

export default Badge;
