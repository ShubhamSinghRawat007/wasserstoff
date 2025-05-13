import React from 'react';
import './Ticket.css';

interface TicketProps {
  title: string;
  date: string;
  location: string;
  name: string;
  username: string;
  avatarUrl: string;
}

export const Ticket: React.FC<TicketProps> = ({
  title,
  date,
  location,
  name,
  username,
  avatarUrl,
}) => {
  return (
    <div className="ticket-modern">
      <div className="ticket-main">
        <div className="ticket-header">
          <div className="ticket-icon">✈️</div>
          <h2>{title}</h2>
        </div>
        <p className="ticket-details">{date} | {location}</p>
        <div className="ticket-footer">
          <img className="avatar" src={avatarUrl} alt="Avatar" />
          <div>
            <p className="name">{name}</p>
            <p className="username">@{username}</p>
          </div>
        </div>
      </div>
      <div className="ticket-notch">
        <span className="ticket-code">001680</span>
      </div>
    </div>
  );
};
