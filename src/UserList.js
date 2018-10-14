import React from 'react';

const UserList = props => {
  return (
    <div>
      <h4>{props.users[0].name}</h4>
      <h4>{props.users[1].name}</h4>
      <h4>{props.users[2].name}</h4>
    </div>
  );
};

export default UserList;
