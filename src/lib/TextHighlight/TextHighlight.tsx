import React from 'react';
import './TextHighlight.css';

interface TextHighlightProps {
  children: React.ReactNode;
}

export const TextHighlight: React.FC<TextHighlightProps> = ({ children }) => {
  return (
    <span className="text-highlight">
      {children}
    </span>
  );
};