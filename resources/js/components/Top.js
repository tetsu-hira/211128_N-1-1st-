import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AnchorLink from "react-anchor-link-smooth-scroll/";

function Top() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
  },[])

  const getUsers = async () => {
    const response = await axios.get('/api/post');
    setUsers(response.data.posts)
  }

  return (
    <div>
      <h1>Topページ</h1>
      <ul>
        {users.map((user) => <li key="{user.id}">{user.name}</li>)}
      </ul>
    </div>
  );
}

export default Top;