import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul className="nav">
        <Link to="/">
          <li className="ml-2">Top</li>
        </Link>
        <Link to="/pre">
          <li className="ml-2">Pre</li>
        </Link>
        <Link to="mid">
          <li className="ml-2">Mid</li>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar;