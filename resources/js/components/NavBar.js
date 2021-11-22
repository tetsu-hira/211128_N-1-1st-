import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";


const NavBar = () => {
  const [top, setTop] = useState(false);
  const [act, setAct] = useState(false);
  const [bct, setBct] = useState(false);
  const [cct, setCct] = useState(false);

  const handleOnTop = () => {
    setTop(true);
    setAct(false);
    setBct(false);
    setCct(false);
    axios.post('/api/getResult');
  }
  const handleOnPre = () => {
    setTop(false)
    setAct(true)
    setBct(false)
    setCct(false)
  }
  const handleOnMid = () => {
    setTop(false)
    setAct(false)
    setBct(true)
    setCct(false)
  }
  const handleOnLas = () => {
    setTop(false)
    setAct(false)
    setBct(false)
    setCct(true)
  }

  return (
    <>
      <div className="Header">
        <ul className="nav">
          <Link to="/" onClick={handleOnTop}>
            <li className={top ? 'SelectedButton' : 'HeaderButton'}>総合結果</li>
          </Link>
          <Link to="act" onClick={handleOnPre}>
            <li className={act ? 'SelectedButton' : 'HeaderButton'}>Aコート</li>
          </Link>
          <Link to="bct" onClick={handleOnMid}>
            <li className={bct ? 'SelectedButton' : 'HeaderButton'}>Bコート</li>
          </Link>
          <Link to="cct" onClick={handleOnLas}>
            <li className={cct ? 'SelectedButton' : 'HeaderButton'}>Cコート</li>
          </Link>
        </ul>
        {/* <ul className="JumpList"> 
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
        </ul>*/}
      </div>
    </>
  )
}

export default NavBar;