import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className="Header">
        <ul className="nav">
          <Link to="/">
            <li className="HeaderButton">Top</li>
          </Link>
          <Link to="/pre">
            <li className="HeaderButton">Pre</li>
          </Link>
          <Link to="mid">
            <li className="HeaderButton">Mid</li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default NavBar;