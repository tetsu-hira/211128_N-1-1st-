import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";


const NavBar = () => {
  const [top, setTop] = useState(false);
  const [pre, setPre] = useState(false);
  const [mid, setMid] = useState(false);
  const [las, setLas] = useState(false);

  const handleOnTop = () => {
    setTop(true)
    setPre(false)
    setMid(false)
    setLas(false)
  }
  const handleOnPre = () => {
    setTop(false)
    setPre(true)
    setMid(false)
    setLas(false)
  }
  const handleOnMid = () => {
    setTop(false)
    setPre(false)
    setMid(true)
    setLas(false)
  }
  const handleOnLas = () => {
    setTop(false)
    setPre(false)
    setMid(false)
    setLas(true)
  }

  return (
    <>
      <div className="Header">
        <ul className="nav">
          <Link to="/" onClick={handleOnTop}>
            <li className={top ? 'SelectedButton' : 'HeaderButton'}>総合結果</li>
          </Link>
          <Link to="pre" onClick={handleOnPre}>
            <li className={pre ? 'SelectedButton' : 'HeaderButton'}>招待部門</li>
          </Link>
          <Link to="mid" onClick={handleOnMid}>
            <li className={mid ? 'SelectedButton' : 'HeaderButton'}>一般部門</li>
          </Link>
          <Link to="las" onClick={handleOnLas}>
            <li className={las ? 'SelectedButton' : 'HeaderButton'}>サンプル</li>
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