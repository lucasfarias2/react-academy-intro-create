import React from 'react';
import './UserCard.css';

const UserCard = props => (
  <div className="card">
    <h2 className="title">{props.name}</h2>
    <h4 className="company">{props.company.name}</h4>
    <p>{props.email}</p>
  </div>
);

export default UserCard;
