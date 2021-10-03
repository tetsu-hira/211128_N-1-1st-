import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";


function NavBar() {
  const [countA1, setCountA1] = useState();
  const [countA2, setCountA2] = useState();
  const [countA3, setCountA3] = useState();
  const [countA4, setCountA4] = useState();
  const [countA5, setCountA5] = useState();
  const [countA6, setCountA6] = useState();
  const [countA7, setCountA7] = useState();
  const [countA8, setCountA8] = useState();
  const [countA9, setCountA9] = useState();
  const [countA10, setCountA10] = useState();
  const [countA11, setCountA11] = useState();
  const [countA12, setCountA12] = useState();
  const [countA13, setCountA13] = useState();
  const [countA14, setCountA14] = useState();
  const [countA15, setCountA15] = useState();
  const [countA16, setCountA16] = useState();
  const [countB1, setCountB1] = useState();
  const [countB2, setCountB2] = useState();
  const [countB3, setCountB3] = useState();
  const [countB4, setCountB4] = useState();
  const [countB5, setCountB5] = useState();
  const [countB6, setCountB6] = useState();
  const [countB7, setCountB7] = useState();
  const [countB8, setCountB8] = useState();
  const [countB9, setCountB9] = useState();
  const [countB10, setCountB10] = useState();
  const [countB11, setCountB11] = useState();
  const [countB12, setCountB12] = useState();
  const [countB13, setCountB13] = useState();
  const [countB14, setCountB14] = useState();
  const [countB15, setCountB15] = useState();
  const [countB16, setCountB16] = useState();
  const [countC1, setCountC1] = useState();
  const [countC2, setCountC2] = useState();
  const [countC3, setCountC3] = useState();
  const [countC4, setCountC4] = useState();
  const [countC5, setCountC5] = useState();
  const [countC6, setCountC6] = useState();
  const [countC7, setCountC7] = useState();
  const [countC8, setCountC8] = useState();
  const [countC9, setCountC9] = useState();
  const [countC10, setCountC10] = useState();
  const [countC11, setCountC11] = useState();
  const [countC12, setCountC12] = useState();
  const [countC13, setCountC13] = useState();
  const [countC14, setCountC14] = useState();
  const [countC15, setCountC15] = useState();
  const [countC16, setCountC16] = useState();
  const [countD1, setCountD1] = useState();
  const [countD2, setCountD2] = useState();
  const [countD3, setCountD3] = useState();
  const [countD4, setCountD4] = useState();
  const [countD5, setCountD5] = useState();
  const [countD6, setCountD6] = useState();
  const [countD7, setCountD7] = useState();
  const [countD8, setCountD8] = useState();
  const [countD9, setCountD9] = useState();
  const [countD10, setCountD10] = useState();
  const [countD11, setCountD11] = useState();
  const [countD12, setCountD12] = useState();
  const [countD13, setCountD13] = useState();
  const [countD14, setCountD14] = useState();
  const [countD15, setCountD15] = useState();
  const [countD16, setCountD16] = useState();


  const handleChangeCount = () => {
    axios.post('/api/count', {
      
      countA1: countA1,
      countA2: countA2,
      countA3: countA3,
      countA4: countA4,
      countA5: countA5,
      countA6: countA6,
      countA7: countA7,
      countA8: countA8,
      countA9: countA9,
      countA10: countA10,
      countA11: countA11,
      countA12: countA12,
      countA13: countA13,
      countA14: countA14,
      countA15: countA15,
      countA16: countA16,
      countB1: countB1,
      countB2: countB2,
      countB3: countB3,
      countB4: countB4,
      countB5: countB5,
      countB6: countB6,
      countB7: countB7,
      countB8: countB8,
      countB9: countB9,
      countB10: countB10,
      countB11: countB11,
      countB12: countB12,
      countB13: countB13,
      countB14: countB14,
      countB15: countB15,
      countB16: countB16,
      countC1: countC1,
      countC2: countC2,
      countC3: countC3,
      countC4: countC4,
      countC5: countC5,
      countC6: countC6,
      countC7: countC7,
      countC8: countC8,
      countC9: countC9,
      countC10: countC10,
      countC11: countC11,
      countC12: countC12,
      countC13: countC13,
      countC14: countC14,
      countC15: countC15,
      countC16: countC16,
      countD1: countD1,
      countD2: countD2,
      countD3: countD3,
      countD4: countD4,
      countD5: countD5,
      countD6: countD6,
      countD7: countD7,
      countD8: countD8,
      countD9: countD9,
      countD10: countD10,
      countD11: countD11,
      countD12: countD12,
      countD13: countD13,
      countD14: countD14,
      countD15: countD15,
      countD16: countD16
    });
  };
  return (
    <>
      <div className="Header">
        <ul className="nav">
          <Link to="/" onClick={handleChangeCount}>
            <li className="HeaderButton">総合結果</li>
          </Link>
          <Link to="/pre">
            <li className="HeaderButton">予選リーグ</li>
          </Link>
          <Link to="mid">
            <li className="HeaderButton">中間リーグ</li>
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
        </ul>
      </div>
    </>
  )
}

export default NavBar;