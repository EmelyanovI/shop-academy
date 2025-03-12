import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string; 
  style?: React.CSSProperties; 
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className, style, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};