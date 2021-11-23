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
  const [dct, setDct] = useState(false);
  const [ect, setEct] = useState(false);

  const handleOnTop = () => {
    setTop(true);
    setAct(false);
    setBct(false);
    setCct(false);
    setDct(false);
    setEct(false);
    axios.post('/api/getResult');
  }
  const handleOnAct = () => {
    setTop(false)
    setAct(true)
    setBct(false)
    setCct(false)
    setDct(false)
    setEct(false)
  }
  const handleOnBct = () => {
    setTop(false)
    setAct(false)
    setBct(true)
    setCct(false)
    setDct(false)
    setEct(false)
  }
  const handleOnCct = () => {
    setTop(false)
    setAct(false)
    setBct(false)
    setCct(true)
    setDct(false)
    setEct(false)
  }
  const handleOnDct = () => {
    setTop(false)
    setAct(false)
    setBct(false)
    setCct(false)
    setDct(true)
    setEct(false)
  }
  const handleOnEct = () => {
    setTop(false)
    setAct(false)
    setBct(false)
    setCct(false)
    setDct(false)
    setEct(true)
  }

  return (
    <>
      <div className="Header">
        <ul className="nav">
          <Link to="/" onClick={handleOnTop}>
            <li className={top ? 'SelectedButton' : 'HeaderButton'}>総合結果</li>
          </Link>
          <Link to="act" onClick={handleOnAct}>
            <li className={act ? 'SelectedButton' : 'HeaderButton'}>Aコート</li>
          </Link>
          <Link to="bct" onClick={handleOnBct}>
            <li className={bct ? 'SelectedButton' : 'HeaderButton'}>Bコート</li>
          </Link>
          <Link to="cct" onClick={handleOnCct}>
            <li className={cct ? 'SelectedButton' : 'HeaderButton'}>Cコート</li>
          </Link>
          <Link to="dct" onClick={handleOnDct}>
            <li className={dct ? 'SelectedButton' : 'HeaderButton'}>Dコート</li>
          </Link>
          <Link to="ect" onClick={handleOnEct}>
            <li className={ect ? 'SelectedButton' : 'HeaderButton'}>Eコート</li>
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