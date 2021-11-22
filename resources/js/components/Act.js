import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll/";

const Act = () => {
  const [team, setTeam] = useState([]);
  const [game, setGame] = useState([]);
  const [keys, setKeys] = useState([]);
  const [id, setId] = useState();
  const [countA1, setCountA1] = useState(0);
  const [countA2, setCountA2] = useState(0);
  const [countA3, setCountA3] = useState(0);
  const [countA4, setCountA4] = useState(0);
  const [countA5, setCountA5] = useState(0);
  const [countA6, setCountA6] = useState(0);
  const [countA7, setCountA7] = useState(0);
  const [countA8, setCountA8] = useState(0);
  const [countA9, setCountA9] = useState(0);
  const [countA10, setCountA10] = useState(0);
  const [countA11, setCountA11] = useState(0);
  const [countA12, setCountA12] = useState(0);
  const [countA13, setCountA13] = useState(0);
  const [countA14, setCountA14] = useState(0);
  const [countA15, setCountA15] = useState(0);
  const [countA16, setCountA16] = useState(0);
  const [countA17, setCountA17] = useState(0);
  const [countA18, setCountA18] = useState(0);
  const [countA19, setCountA19] = useState(0);
  const [countA20, setCountA20] = useState(0);
  const [countA21, setCountA21] = useState(0);
  const [countA22, setCountA22] = useState(0);
  const [countA23, setCountA23] = useState(0);
  const [countA24, setCountA24] = useState(0);
  const [countA25, setCountA25] = useState(0);
  const [countA26, setCountA26] = useState(0);
  const [countA27, setCountA27] = useState(0);
  const [countA28, setCountA28] = useState(0);
  const [countA29, setCountA29] = useState(0);
  const [countA30, setCountA30] = useState(0);
  const [countA31, setCountA31] = useState(0);
  const [countA32, setCountA32] = useState(0);
  const [countA33, setCountA33] = useState(0);
  const [countA34, setCountA34] = useState(0);
  const [countA35, setCountA35] = useState(0);
  const [countA36, setCountA36] = useState(0);
  const [countA37, setCountA37] = useState(0);
  const [countA38, setCountA38] = useState(0);
  const [countA39, setCountA39] = useState(0);
  const [countA40, setCountA40] = useState(0);
  const [countA41, setCountA41] = useState(0);
  const [countA42, setCountA42] = useState(0);
  const [countA43, setCountA43] = useState(0);
  const [countA44, setCountA44] = useState(0);
  const [countA45, setCountA45] = useState(0);
  const [countA46, setCountA46] = useState(0);
  const [countA47, setCountA47] = useState(0);
  const [countA48, setCountA48] = useState(0);
  const [t1, setT1] = useState([]);
  const [t2, setT2] = useState([]);
  const [t3, setT3] = useState([]);
  const [t4, setT4] = useState([]);
  const [t5, setT5] = useState([]);
  const [t6, setT6] = useState([]);
  const [t7, setT7] = useState([]);
  const [t8, setT8] = useState([]);
  const [t9, setT9] = useState([]);


  const handleChangeCount = () => {
    axios.post('/api/changecount', {
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
      countA17: countA17,
      countA18: countA18,
      countA19: countA19,
      countA20: countA20,
      countA21: countA21,
      countA22: countA22,
      countA23: countA23,
      countA24: countA24,
      countA25: countA25,
      countA26: countA26,
      countA27: countA27,
      countA28: countA28,
      countA29: countA29,
      countA30: countA30,
      countA31: countA31,
      countA32: countA32,
      countA33: countA33,
      countA34: countA34,
      countA35: countA35,
      countA36: countA36,
      countA37: countA37,
      countA38: countA38,
      countA39: countA39,
      countA40: countA40,
      countA41: countA41,
      countA42: countA42,
      countA43: countA43,
      countA44: countA44,
      countA45: countA45,
      countA46: countA46,
      countA47: countA47,
      countA48: countA48
    });
  };

  useEffect(() => {
    getUsers()
  },[])
  const getUsers = async () => {
    const response = await axios.get('/api/post');
    setTeam(response.data.posts)
    setT1(response.data.posts.filter((item, index) => {
      return item.number === 1;
    }));
    setT2(response.data.posts.filter((item, index) => {
      return item.number === 2;
    }));
    setT3(response.data.posts.filter((item, index) => {
      return item.number === 3;
    }));
    setT4(response.data.posts.filter((item, index) => {
      return item.number === 4;
    }));
    setT5(response.data.posts.filter((item, index) => {
      return item.number === 5;
    }));
    setT6(response.data.posts.filter((item, index) => {
      return item.number === 6;
    }));
    setT7(response.data.posts.filter((item, index) => {
      return item.number === 7;
    }));
    setT8(response.data.posts.filter((item, index) => {
      return item.number === 8;
    }));
    setT9(response.data.posts.filter((item, index) => {
      return item.number === 9;
    }));
  }

  useEffect(() => {
    getGames()
  },[])
  const getGames = async () => {
    const response = await axios.get('/api/first');
    setGame(response.data.firsts);
    setCountA1(response.data.firsts[0].result1);
    setCountA2(response.data.firsts[0].result2);
    setCountA3(response.data.firsts[0].result3);
    setCountA4(response.data.firsts[0].result4);
    setCountA5(response.data.firsts[1].result1);
    setCountA6(response.data.firsts[1].result2);
    setCountA7(response.data.firsts[1].result3);
    setCountA8(response.data.firsts[1].result4);
    setCountA9(response.data.firsts[2].result1);
    setCountA10(response.data.firsts[2].result2);
    setCountA11(response.data.firsts[2].result3);
    setCountA12(response.data.firsts[2].result4);
    setCountA13(response.data.firsts[3].result1);
    setCountA14(response.data.firsts[3].result2);
    setCountA15(response.data.firsts[3].result3);
    setCountA16(response.data.firsts[3].result4);
    setCountA17(response.data.firsts[4].result1);
    setCountA18(response.data.firsts[4].result2);
    setCountA19(response.data.firsts[4].result3);
    setCountA20(response.data.firsts[4].result4);
    setCountA21(response.data.firsts[5].result1);
    setCountA22(response.data.firsts[5].result2);
    setCountA23(response.data.firsts[5].result3);
    setCountA24(response.data.firsts[5].result4);
    setCountA25(response.data.firsts[6].result1);
    setCountA26(response.data.firsts[6].result2);
    setCountA27(response.data.firsts[6].result3);
    setCountA28(response.data.firsts[6].result4);
    setCountA29(response.data.firsts[7].result1);
    setCountA30(response.data.firsts[7].result2);
    setCountA31(response.data.firsts[7].result3);
    setCountA32(response.data.firsts[7].result4);
    setCountA33(response.data.firsts[8].result1);
    setCountA34(response.data.firsts[8].result2);
    setCountA35(response.data.firsts[8].result3);
    setCountA36(response.data.firsts[8].result4);
    setCountA37(response.data.firsts[9].result1);
    setCountA38(response.data.firsts[9].result2);
    setCountA39(response.data.firsts[9].result3);
    setCountA40(response.data.firsts[9].result4);
    setCountA41(response.data.firsts[10].result1);
    setCountA42(response.data.firsts[10].result2);
    setCountA43(response.data.firsts[10].result3);
    setCountA44(response.data.firsts[10].result4);
    setCountA45(response.data.firsts[11].result1);
    setCountA46(response.data.firsts[11].result2);
    setCountA47(response.data.firsts[11].result3);
    setCountA48(response.data.firsts[11].result4);
  }

  return (
    <>
      <section id="courtA" className="JumpPoint"></section>
      <div className="Pre">
        <div className="PreContainer">
          <div className="PreMain">
            <h2>- Aコート -</h2>
            <div className="Table">
              <table border="1">
                <thead>
                  <tr className="TableTitle">
                    <th className="TableTitle__number">試合</th>
                    <th className="TableTitle__team">チームA</th>
                    <th className="TableTitle__point">試合結果</th>
                    <th className="TableTitle__team">チームB</th>
                    <th className="TableTitle__referee">審判/補助</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="TableContent">
                    <th className="TableContent__number">1</th>
                    <td className="TableContent__teamA">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA2}</div>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA4}</div>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t3[0] && t3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA5(countA5 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA5(countA5 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA5(countA5 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA5(countA5 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA6}</div>
                          <button className="CountButton" onClick = {() => {setCountA6(countA6 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA6(countA6 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA6(countA6 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA6(countA6 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA7(countA7 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA7(countA7 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA7(countA7 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA7(countA7 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA8}</div>
                          <button className="CountButton" onClick = {() => {setCountA8(countA8 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA8(countA8 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA8(countA8 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA8(countA8 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t1[0] && t1[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA9(countA9 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA9(countA9 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA9(countA9 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA9(countA9 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA10}</div>
                          <button className="CountButton" onClick = {() => {setCountA10(countA10 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA10(countA10 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA10(countA10 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA10(countA10 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA11(countA11 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA11(countA11 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA11(countA11 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA11(countA11 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA12}</div>
                          <button className="CountButton" onClick = {() => {setCountA12(countA12 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA12(countA12 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA12(countA12 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA12(countA12 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t2[0] && t2[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">4</th>
                    <td className="TableContent__teamA">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA13(countA13 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA13(countA13 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA13(countA13 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA13(countA13 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA13}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA14}</div>
                          <button className="CountButton" onClick = {() => {setCountA14(countA14 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA14(countA14 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA14(countA14 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA14(countA14 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA15(countA15 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA15(countA15 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA15(countA15 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA15(countA15 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA15}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA16}</div>
                          <button className="CountButton" onClick = {() => {setCountA16(countA16 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA16(countA16 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA16(countA16 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA16(countA16 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t5[0] && t5[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t3[0] && t3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">5</th>
                    <td className="TableContent__teamA">
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA17(countA17 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA17(countA17 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA17(countA17 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA17(countA17 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA17}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA18}</div>
                          <button className="CountButton" onClick = {() => {setCountA18(countA18 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA18(countA18 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA18(countA18 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA18(countA18 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA19(countA19 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA19(countA19 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA19(countA19 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA19(countA19 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA19}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA20}</div>
                          <button className="CountButton" onClick = {() => {setCountA20(countA20 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA20(countA20 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA20(countA20 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA20(countA20 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t5[0] && t5[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t1[0] && t1[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">6</th>
                    <td className="TableContent__teamA">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA21(countA21 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA21(countA21 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA21(countA21 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA21(countA21 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA21}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA22}</div>
                          <button className="CountButton" onClick = {() => {setCountA22(countA22 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA22(countA22 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA22(countA22 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA22(countA22 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA23(countA23 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA23(countA23 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA23(countA23 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA23(countA23 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA23}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA24}</div>
                          <button className="CountButton" onClick = {() => {setCountA24(countA24 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA24(countA24 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA24(countA24 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA24(countA24 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t7[0] && t7[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t5[0] && t5[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">7</th>
                    <td className="TableContent__teamA">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA25(countA25 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA25(countA25 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA25(countA25 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA25(countA25 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA25}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA26}</div>
                          <button className="CountButton" onClick = {() => {setCountA26(countA26 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA26(countA26 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA26(countA26 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA26(countA26 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA27(countA27 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA27(countA27 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA27(countA27 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA27(countA27 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA27}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA28}</div>
                          <button className="CountButton" onClick = {() => {setCountA28(countA28 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA28(countA28 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA28(countA28 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA28(countA28 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t8[0] && t8[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t3[0] && t3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">8</th>
                    <td className="TableContent__teamA">
                      <p>{t8[0] && t8[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA29(countA29 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA29(countA29 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA29(countA29 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA29(countA29 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA29}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA30}</div>
                          <button className="CountButton" onClick = {() => {setCountA30(countA30 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA30(countA30 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA30(countA30 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA30(countA30 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA31(countA31 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA31(countA31 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA31(countA31 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA31(countA31 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA31}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA32}</div>
                          <button className="CountButton" onClick = {() => {setCountA32(countA32 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA32(countA32 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA32(countA32 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA32(countA32 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t5[0] && t5[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t1[0] && t1[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">9</th>
                    <td className="TableContent__teamA">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA33(countA33 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA33(countA33 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA33(countA33 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA33(countA33 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA33}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA34}</div>
                          <button className="CountButton" onClick = {() => {setCountA34(countA34 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA34(countA34 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA34(countA34 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA34(countA34 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA35(countA35 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA35(countA35 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA35(countA35 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA35(countA35 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA35}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA36}</div>
                          <button className="CountButton" onClick = {() => {setCountA36(countA36 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA36(countA36 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA36(countA36 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA36(countA36 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t9[0] && t9[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t5[0] && t5[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">10</th>
                    <td className="TableContent__teamA">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA37(countA37 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA37(countA37 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA37(countA37 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA37(countA37 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA37}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA38}</div>
                          <button className="CountButton" onClick = {() => {setCountA38(countA38 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA38(countA38 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA38(countA38 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA38(countA38 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA39(countA39 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA39(countA39 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA39(countA39 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA39(countA39 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA39}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA40}</div>
                          <button className="CountButton" onClick = {() => {setCountA40(countA40 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA40(countA40 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA40(countA40 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA40(countA40 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t4[0] && t4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t6[0] && t6[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">11</th>
                    <td className="TableContent__teamA">
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA41(countA41 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA41(countA41 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA41(countA41 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA41(countA41 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA41}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA42}</div>
                          <button className="CountButton" onClick = {() => {setCountA42(countA42 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA42(countA42 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA42(countA42 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA42(countA42 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA43(countA43 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA43(countA43 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA43(countA43 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA43(countA43 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA43}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA44}</div>
                          <button className="CountButton" onClick = {() => {setCountA44(countA44 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA44(countA44 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA44(countA44 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA44(countA44 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t8[0] && t8[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t7[0] && t7[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">12</th>
                    <td className="TableContent__teamA">
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA45(countA45 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA45(countA45 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA45(countA45 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA45(countA45 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA45}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA46}</div>
                          <button className="CountButton" onClick = {() => {setCountA46(countA46 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA46(countA46 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA46(countA46 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA46(countA46 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA47(countA47 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA47(countA47 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA47(countA47 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA47(countA47 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                          <div className="CountPoint">{countA47}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA48}</div>
                          <button className="CountButton" onClick = {() => {setCountA48(countA48 * 0)}} onMouseLeave={handleChangeCount}>C</button>
                          <button className="CountButton" onClick = {() => {setCountA48(countA48 - 1)}} onMouseLeave={handleChangeCount}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA48(countA48 + 1)}} onMouseLeave={handleChangeCount}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA48(countA48 + 5)}} onMouseLeave={handleChangeCount}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t7[0] && t7[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t4[0] && t4[0].name}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Act;