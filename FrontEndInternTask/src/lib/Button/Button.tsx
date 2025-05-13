import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  loading = false,
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <button
      className={`button ${fullWidth ? 'full-width' : ''}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="loader"></span>
      ) : (
        children
      )}
    </button>
  );
};