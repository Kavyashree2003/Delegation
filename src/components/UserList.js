// UserList.js

import React from 'react';

const UserList = ({ users }) => (
  <div>
    {users.map((user) => (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <p>Role: {user.role}</p>
      </div>
    ))}
  </div>
);

export default UserList;
