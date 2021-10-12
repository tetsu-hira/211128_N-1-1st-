import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";


const NavBar = () => {

  return (
    <>
      <div className="Header">
        <ul className="nav">
          <Link to="/">
            <li className="HeaderButton">総合結果</li>
          </Link>
          <Link to="/pre">
            <li className="HeaderButton">予選リーグ</li>
          </Link>
          <Link to="mid">
            <li className="HeaderButton">中間リーグ</li>
          </Link>
          <Link to="las">
            <li className="HeaderButton">最終リーグ</li>
          </Link>
        </ul>
        <ul className="JumpList">
          <li className="JumpList__item">
            <AnchorLink href="#courtA">Aコート</AnchorLink>
          </li>
          <li className="JumpList__item">
            <AnchorLink href="#courtB">Bコート</AnchorLink>
          </li>
          <li className="JumpList__item">
            <AnchorLink href="#courtC">Cコート</AnchorLink>
          </li>
          <li className="JumpList__item">
            <AnchorLink href="#courtD">Dコート</AnchorLink>
          </li>
          <li className="JumpList__item">
            <AnchorLink href="#courtE">Eコート</AnchorLink>
          </li>
          <li className="JumpList__item">
            <AnchorLink href="#courtF">Fコート</AnchorLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBar;