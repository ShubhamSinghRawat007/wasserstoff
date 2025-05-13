import React from 'react';
import './LogoHeader.css';

export const LogoHeader: React.FC = () => {
  return (
    <header className="logo-header">
      <div className="logo">Coding Conf</div>
      <div className="app-bar">
        <span>2023</span>
        <span>•</span>
        <span>Virtual Event</span>
      </div>
    </header>
  );
};