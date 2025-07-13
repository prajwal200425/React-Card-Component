import React from 'react';
import './Card.css';


interface CardProps {
  title: string;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, icon }) => {
  return (
   
    <div className="card">
       <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
    </div>
 
  );
};

export default Card;
