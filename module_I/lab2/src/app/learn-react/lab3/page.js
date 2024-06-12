"use client";

import {useEffect, useState} from 'react';

export default function Lab3() {

  let [users, setUsers] = useState([]);
  const URL = 'https://api.github.com/users';

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    users && users.length > 0 && setTimeout(() => alert("users cambio"), 2000);
  }, [users]);

  return (
    <div className="section">
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}, {user.node_id}, {user.url}</li>
        ))}
      </ul>
    </div>
  );

}