import React from 'react';

const UserCard = props => (
  <div>
    <h2>{props.name}</h2>
    <h4>{props.company.name}</h4>
    <p>{props.email}</p>
  </div>
);

export default UserCard;
