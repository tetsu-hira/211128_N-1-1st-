import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll/";

const Mid = () => {
  const [team, setTeam] = useState([]);
  const [game, setGame] = useState([]);
  const [court, setCourt] = useState([]);
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
  const [countE1, setCountE1] = useState();
  const [countE2, setCountE2] = useState();
  const [countE3, setCountE3] = useState();
  const [countE4, setCountE4] = useState();
  const [countE5, setCountE5] = useState();
  const [countE6, setCountE6] = useState();
  const [countE7, setCountE7] = useState();
  const [countE8, setCountE8] = useState();
  const [countE9, setCountE9] = useState();
  const [countE10, setCountE10] = useState();
  const [countE11, setCountE11] = useState();
  const [countE12, setCountE12] = useState();
  const [countF1, setCountF1] = useState();
  const [countF2, setCountF2] = useState();
  const [countF3, setCountF3] = useState();
  const [countF4, setCountF4] = useState();
  const [countF5, setCountF5] = useState();
  const [countF6, setCountF6] = useState();
  const [countF7, setCountF7] = useState();
  const [countF8, setCountF8] = useState();
  const [countF9, setCountF9] = useState();
  const [countF10, setCountF10] = useState();
  const [countF11, setCountF11] = useState();
  const [countF12, setCountF12] = useState();
  const [A1, setA1] = useState([]);
  const [A2, setA2] = useState([]);
  const [A3, setA3] = useState([]);
  const [B1, setB1] = useState([]);
  const [B2, setB2] = useState([]);
  const [B3, setB3] = useState([]);
  const [C1, setC1] = useState([]);
  const [C2, setC2] = useState([]);
  const [C3, setC3] = useState([]);
  const [D1, setD1] = useState([]);
  const [D2, setD2] = useState([]);
  const [D3, setD3] = useState([]);
  const [E1, setE1] = useState([]);
  const [E2, setE2] = useState([]);
  const [E3, setE3] = useState([]);
  const [F1, setF1] = useState([]);
  const [F2, setF2] = useState([]);
  const [F3, setF3] = useState([]);

  const handleChangeCount = () => {
    axios.post('/api/changecount2', {
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
      countE1: countE1,
      countE2: countE2,
      countE3: countE3,
      countE4: countE4,
      countE5: countE5,
      countE6: countE6,
      countE7: countE7,
      countE8: countE8,
      countE9: countE9,
      countE10: countE10,
      countE11: countE11,
      countE12: countE12,
      countF1: countF1,
      countF2: countF2,
      countF3: countF3,
      countF4: countF4,
      countF5: countF5,
      countF6: countF6,
      countF7: countF7,
      countF8: countF8,
      countF9: countF9,
      countF10: countF10,
      countF11: countF11,
      countF12: countF12,
    });
    console.log(countA1);
  };

  useEffect(() => {
    getUsers()
  },[])
  const getUsers = async () => {
    const response = await axios.get('/api/post');
    setTeam(response.data.posts)
    setA1(response.data.posts.filter((item, index) => {
      return item.mid_court === "A" && item.mid_number === 1;
    }));
    setA2(response.data.posts.filter((item, index) => {
      return item.mid_court === "A" && item.mid_number === 2;
    }));
    setA3(response.data.posts.filter((item, index) => {
      return item.mid_court === "A" && item.mid_number === 3;
    }));
    setB1(response.data.posts.filter((item, index) => {
      return item.mid_court === "B" && item.mid_number === 1;
    }));
    setB2(response.data.posts.filter((item, index) => {
      return item.mid_court === "B" && item.mid_number === 2;
    }));
    setB3(response.data.posts.filter((item, index) => {
      return item.mid_court === "B" && item.mid_number === 3;
    }));
    setC1(response.data.posts.filter((item, index) => {
      return item.mid_court === "C" && item.mid_number === 1;
    }));
    setC2(response.data.posts.filter((item, index) => {
      return item.mid_court === "C" && item.mid_number === 2;
    }));
    setC3(response.data.posts.filter((item, index) => {
      return item.mid_court === "C" && item.mid_number === 3;
    }));
    setD1(response.data.posts.filter((item, index) => {
      return item.mid_court === "D" && item.mid_number === 1;
    }));
    setD2(response.data.posts.filter((item, index) => {
      return item.mid_court === "D" && item.mid_number === 2;
    }));
    setD3(response.data.posts.filter((item, index) => {
      return item.mid_court === "D" && item.mid_number === 3;
    }));
    setE1(response.data.posts.filter((item, index) => {
      return item.mid_court === "E" && item.mid_number === 1;
    }));
    setE2(response.data.posts.filter((item, index) => {
      return item.mid_court === "E" && item.mid_number === 2;
    }));
    setE3(response.data.posts.filter((item, index) => {
      return item.mid_court === "E" && item.mid_number === 3;
    }));
    setF1(response.data.posts.filter((item, index) => {
      return item.mid_court === "F" && item.mid_number === 1;
    }));
    setF2(response.data.posts.filter((item, index) => {
      return item.mid_court === "F" && item.mid_number === 2;
    }));
    setF3(response.data.posts.filter((item, index) => {
      return item.mid_court === "F" && item.mid_number === 3;
    }));
  }

  useEffect(() => {
    getGames()
  },[])
  const getGames = async () => {
    const response = await axios.get('/api/second');
    setGame(response.data.seconds)
    setCountA1(response.data.seconds[0].result1);
    setCountA2(response.data.seconds[0].result2);
    setCountA3(response.data.seconds[0].result3);
    setCountA4(response.data.seconds[0].result4);
    setCountA5(response.data.seconds[1].result1);
    setCountA6(response.data.seconds[1].result2);
    setCountA7(response.data.seconds[1].result3);
    setCountA8(response.data.seconds[1].result4);
    setCountA9(response.data.seconds[2].result1);
    setCountA10(response.data.seconds[2].result2);
    setCountA11(response.data.seconds[2].result3);
    setCountA12(response.data.seconds[2].result4);
    setCountB1(response.data.seconds[3].result1);
    setCountB2(response.data.seconds[3].result2);
    setCountB3(response.data.seconds[3].result3);
    setCountB4(response.data.seconds[3].result4);
    setCountB5(response.data.seconds[4].result1);
    setCountB6(response.data.seconds[4].result2);
    setCountB7(response.data.seconds[4].result3);
    setCountB8(response.data.seconds[4].result4);
    setCountB9(response.data.seconds[5].result1);
    setCountB10(response.data.seconds[5].result2);
    setCountB11(response.data.seconds[5].result3);
    setCountB12(response.data.seconds[5].result4);
    setCountC1(response.data.seconds[6].result1);
    setCountC2(response.data.seconds[6].result2);
    setCountC3(response.data.seconds[6].result3);
    setCountC4(response.data.seconds[6].result4);
    setCountC5(response.data.seconds[7].result1);
    setCountC6(response.data.seconds[7].result2);
    setCountC7(response.data.seconds[7].result3);
    setCountC8(response.data.seconds[7].result4);
    setCountC9(response.data.seconds[8].result1);
    setCountC10(response.data.seconds[8].result2);
    setCountC11(response.data.seconds[8].result3);
    setCountC12(response.data.seconds[8].result4);
    setCountD1(response.data.seconds[9].result1);
    setCountD2(response.data.seconds[9].result2);
    setCountD3(response.data.seconds[9].result3);
    setCountD4(response.data.seconds[9].result4);
    setCountD5(response.data.seconds[10].result1);
    setCountD6(response.data.seconds[10].result2);
    setCountD7(response.data.seconds[10].result3);
    setCountD8(response.data.seconds[10].result4);
    setCountD9(response.data.seconds[11].result1);
    setCountD10(response.data.seconds[11].result2);
    setCountD11(response.data.seconds[11].result3);
    setCountD12(response.data.seconds[11].result4);
    setCountE1(response.data.seconds[12].result1);
    setCountE2(response.data.seconds[12].result2);
    setCountE3(response.data.seconds[12].result3);
    setCountE4(response.data.seconds[12].result4);
    setCountE5(response.data.seconds[13].result1);
    setCountE6(response.data.seconds[13].result2);
    setCountE7(response.data.seconds[13].result3);
    setCountE8(response.data.seconds[13].result4);
    setCountE9(response.data.seconds[14].result1);
    setCountE10(response.data.seconds[14].result2);
    setCountE11(response.data.seconds[14].result3);
    setCountE12(response.data.seconds[14].result4);
    setCountF1(response.data.seconds[15].result1);
    setCountF2(response.data.seconds[15].result2);
    setCountF3(response.data.seconds[15].result3);
    setCountF4(response.data.seconds[15].result4);
    setCountF5(response.data.seconds[16].result1);
    setCountF6(response.data.seconds[16].result2);
    setCountF7(response.data.seconds[16].result3);
    setCountF8(response.data.seconds[16].result4);
    setCountF9(response.data.seconds[17].result1);
    setCountF10(response.data.seconds[17].result2);
    setCountF11(response.data.seconds[17].result3);
    setCountF12(response.data.seconds[17].result4);
  }

  useEffect(() => {
    getCourt()
  },[])
  const getCourt = async () => {
    const response = await axios.get('/api/court');
    setCourt(response.data.courts)
  }

  return (
    <>
      <section id="courtA" className="JumpPoint"></section>
      <div className="Pre">
        <div className="PreContainer">
          <div className="PreMain">
            <h2>中間リーグAコート</h2>
            <button className="updateButton" onClick={handleChangeCount}>更新</button>
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
                      <p>{A1[0] && A1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA1(countA1 + 5)}}>+5</button>
                          <div className="CountPoint">{countA1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA2}</div>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA2(countA2 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA3(countA3 + 5)}}>+5</button>
                          <div className="CountPoint">{countA3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA4}</div>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA4(countA4 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{A2[0] && A2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{A3[0] && A3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{A2[0] && A2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA5(countA5 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA5(countA5 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA5(countA5 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA5(countA5 + 5)}}>+5</button>
                          <div className="CountPoint">{countA5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA6}</div>
                          <button className="CountButton" onClick = {() => {setCountA6(countA6 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA6(countA6 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA6(countA6 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA6(countA6 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA7(countA7 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA7(countA7 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA7(countA7 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA7(countA7 + 5)}}>+5</button>
                          <div className="CountPoint">{countA7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA8}</div>
                          <button className="CountButton" onClick = {() => {setCountA8(countA8 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA8(countA8 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA8(countA8 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA8(countA8 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{A3[0] && A3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{A1[0] && A1[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{A1[0] && A1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA9(countA9 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA9(countA9 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA9(countA9 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA9(countA9 + 5)}}>+5</button>
                          <div className="CountPoint">{countA9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA10}</div>
                          <button className="CountButton" onClick = {() => {setCountA10(countA10 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA10(countA10 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA10(countA10 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA10(countA10 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountA11(countA11 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA11(countA11 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA11(countA11 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA11(countA11 + 5)}}>+5</button>
                          <div className="CountPoint">{countA11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countA12}</div>
                          <button className="CountButton" onClick = {() => {setCountA12(countA12 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountA12(countA12 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountA12(countA12 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountA12(countA12 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{A3[0] && A3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{A2[0] && A2[0].name}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <section id="courtB" className="JumpPoint"></section>
            </div>
          </div>
          <div className="PreMain">
            <h2>中間リーグBコート</h2>
            <button className="updateButton" onClick={handleChangeCount}>更新</button>
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
                      <p>{B1[0] && B1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB1(countB1 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB1(countB1 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB1(countB1 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB1(countB1 + 5)}}>+5</button>
                          <div className="CountPoint">{countB1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB2}</div>
                          <button className="CountButton" onClick = {() => {setCountB2(countB2 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB2(countB2 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB2(countB2 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB2(countB2 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB3(countB3 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB3(countB3 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB3(countB3 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB3(countB3 + 5)}}>+5</button>
                          <div className="CountPoint">{countB3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB4}</div>
                          <button className="CountButton" onClick = {() => {setCountB4(countB4 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB4(countB4 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB4(countB4 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB4(countB4 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{B2[0] && B2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{B3[0] && B3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{B2[0] && B2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB5(countB5 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB5(countB5 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB5(countB5 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB5(countB5 + 5)}}>+5</button>
                          <div className="CountPoint">{countB5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB6}</div>
                          <button className="CountButton" onClick = {() => {setCountB6(countB6 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB6(countB6 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB6(countB6 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB6(countB6 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB7(countB7 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB7(countB7 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB7(countB7 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB7(countB7 + 5)}}>+5</button>
                          <div className="CountPoint">{countB7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB8}</div>
                          <button className="CountButton" onClick = {() => {setCountB8(countB8 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB8(countB8 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB8(countB8 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB8(countB8 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{B3[0] && B3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{B1[0] && B1[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{B1[0] && B1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB9(countB9 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB9(countB9 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB9(countB9 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB9(countB9 + 5)}}>+5</button>
                          <div className="CountPoint">{countB9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB10}</div>
                          <button className="CountButton" onClick = {() => {setCountB10(countB10 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB10(countB10 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB10(countB10 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB10(countB10 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB11(countB11 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB11(countB11 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB11(countB11 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB11(countB11 + 5)}}>+5</button>
                          <div className="CountPoint">{countB11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB12}</div>
                          <button className="CountButton" onClick = {() => {setCountB12(countB12 * 0)}}>0</button>
                          <button className="CountButton" onClick = {() => {setCountB12(countB12 - 1)}}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB12(countB12 + 1)}}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB12(countB12 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{B3[0] && B3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{B2[0] && B2[0].name}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <section id="courtC" className="JumpPoint"></section>
            </div>
          </div>
          <div className="PreMain">
            <h2>中間リーグCコート</h2>
            <button className="updateButton" onClick={handleChangeCount}>更新</button>
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
                      <p>{C1[0] && C1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC1(countC1 * 0)}}>0</button>
                          <button className="CountCutton" onClick = {() => {setCountC1(countC1 - 1)}}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC1(countC1 + 1)}}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC1(countC1 + 5)}}>+5</button>
                          <div className="CountPoint">{countC1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC2}</div>
                          <button className="CountCutton" onClick = {() => {setCountC2(countC2 * 0)}}>0</button>
                          <button className="CountCutton" onClick = {() => {setCountC2(countC2 - 1)}}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC2(countC2 + 1)}}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC2(countC2 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC3(countC3 * 0)}}>0</button>
                          <button className="CountCutton" onClick = {() => {setCountC3(countC3 - 1)}}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC3(countC3 + 1)}}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC3(countC3 + 5)}}>+5</button>
                          <div className="CountPoint">{countC3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC4}</div>
                          <button className="CountCutton" onClick = {() => {setCountC4(countC4 * 0)}}>0</button>
                          <button className="CountCutton" onClick = {() => {setCountC4(countC4 - 1)}}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC4(countC4 + 1)}}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC4(countC4 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{C2[0] && C2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{C3[0] && C3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{C2[0] && C2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC5(countC5 * 0)}}>0</button>
                          <button className="CountCutton" onClick = {() => {setCountC5(countC5 - 1)}}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC5(countC5 + 1)}}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC5(countC5 + 5)}}>+5</button>
                          <div className="CountPoint">{countC5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC6}</div>
                          <button className="CountCutton" onClick = {() => {setCountC6(countC6 * 0)}}>0</button>
                          <button className="CountCutton" onClick = {() => {setCountC6(countC6 - 1)}}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC6(countC6 + 1)}}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC6(countC6 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC7(countC7 * 0)}}>0</button>
                          <button className="CountCutton" onClick = {() => {setCountC7(countC7 - 1)}}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC7(countC7 + 1)}}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC7(countC7 + 5)}}>+5</button>
                          <div className="CountPoint">{countC7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC8}</div>
                          <button className="CountCutton" onClick = {() => {setCountC8(countC8 * 0)}}>0</button>
                          <button className="CountCutton" onClick = {() => {setCountC8(countC8 - 1)}}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC8(countC8 + 1)}}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC8(countC8 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{C3[0] && C3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{C1[0] && C1[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{C1[0] && C1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC9(countC9 * 0)}}>0</button>
                          <button className="CountCutton" onClick = {() => {setCountC9(countC9 - 1)}}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC9(countC9 + 1)}}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC9(countC9 + 5)}}>+5</button>
                          <div className="CountPoint">{countC9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC10}</div>
                          <button className="CountCutton" onClick = {() => {setCountC10(countC10 * 0)}}>0</button>
                          <button className="CountCutton" onClick = {() => {setCountC10(countC10 - 1)}}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC10(countC10 + 1)}}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC10(countC10 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC11(countC11 * 0)}}>0</button>
                          <button className="CountCutton" onClick = {() => {setCountC11(countC11 - 1)}}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC11(countC11 + 1)}}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC11(countC11 + 5)}}>+5</button>
                          <div className="CountPoint">{countC11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC12}</div>
                          <button className="CountCutton" onClick = {() => {setCountC12(countC12 * 0)}}>0</button>
                          <button className="CountCutton" onClick = {() => {setCountC12(countC12 - 1)}}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC12(countC12 + 1)}}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC12(countC12 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{C3[0] && C3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{C2[0] && C2[0].name}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <section id="courtD" className="JumpPoint"></section>
            </div>
          </div>
          <div className="PreMain">
            <h2>中間リーグDコート</h2>
            <button className="updateButton" onClick={handleChangeCount}>更新</button>
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
                      <p>{D1[0] && D1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD1(countD1 * 0)}}>0</button>
                          <button className="CountDutton" onClick = {() => {setCountD1(countD1 - 1)}}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD1(countD1 + 1)}}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD1(countD1 + 5)}}>+5</button>
                          <div className="CountPoint">{countD1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD2}</div>
                          <button className="CountDutton" onClick = {() => {setCountD2(countD2 * 0)}}>0</button>
                          <button className="CountDutton" onClick = {() => {setCountD2(countD2 - 1)}}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD2(countD2 + 1)}}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD2(countD2 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD3(countD3 * 0)}}>0</button>
                          <button className="CountDutton" onClick = {() => {setCountD3(countD3 - 1)}}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD3(countD3 + 1)}}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD3(countD3 + 5)}}>+5</button>
                          <div className="CountPoint">{countD3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD4}</div>
                          <button className="CountDutton" onClick = {() => {setCountD4(countD4 * 0)}}>0</button>
                          <button className="CountDutton" onClick = {() => {setCountD4(countD4 - 1)}}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD4(countD4 + 1)}}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD4(countD4 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{D2[0] && D2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{D3[0] && D3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{D2[0] && D2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD5(countD5 * 0)}}>0</button>
                          <button className="CountDutton" onClick = {() => {setCountD5(countD5 - 1)}}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD5(countD5 + 1)}}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD5(countD5 + 5)}}>+5</button>
                          <div className="CountPoint">{countD5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD6}</div>
                          <button className="CountDutton" onClick = {() => {setCountD6(countD6 * 0)}}>0</button>
                          <button className="CountDutton" onClick = {() => {setCountD6(countD6 - 1)}}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD6(countD6 + 1)}}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD6(countD6 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD7(countD7 * 0)}}>0</button>
                          <button className="CountDutton" onClick = {() => {setCountD7(countD7 - 1)}}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD7(countD7 + 1)}}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD7(countD7 + 5)}}>+5</button>
                          <div className="CountPoint">{countD7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD8}</div>
                          <button className="CountDutton" onClick = {() => {setCountD8(countD8 * 0)}}>0</button>
                          <button className="CountDutton" onClick = {() => {setCountD8(countD8 - 1)}}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD8(countD8 + 1)}}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD8(countD8 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{D3[0] && D3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{D1[0] && D1[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{D1[0] && D1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD9(countD9 * 0)}}>0</button>
                          <button className="CountDutton" onClick = {() => {setCountD9(countD9 - 1)}}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD9(countD9 + 1)}}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD9(countD9 + 5)}}>+5</button>
                          <div className="CountPoint">{countD9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD10}</div>
                          <button className="CountDutton" onClick = {() => {setCountD10(countD10 * 0)}}>0</button>
                          <button className="CountDutton" onClick = {() => {setCountD10(countD10 - 1)}}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD10(countD10 + 1)}}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD10(countD10 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD11(countD11 * 0)}}>0</button>
                          <button className="CountDutton" onClick = {() => {setCountD11(countD11 - 1)}}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD11(countD11 + 1)}}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD11(countD11 + 5)}}>+5</button>
                          <div className="CountPoint">{countD11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD12}</div>
                          <button className="CountDutton" onClick = {() => {setCountD12(countD12 * 0)}}>0</button>
                          <button className="CountDutton" onClick = {() => {setCountD12(countD12 - 1)}}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD12(countD12 + 1)}}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD12(countD12 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{D3[0] && D3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{D2[0] && D2[0].name}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <section id="courtE" className="JumpPoint"></section>
            </div>
          </div>
          <div className="PreMain">
            <h2>中間リーグEコート</h2>
            <button className="updateButton" onClick={handleChangeCount}>更新</button>
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
                      <p>{E1[0] && E1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE1(countE1 * 0)}}>0</button>
                          <button className="CountEutton" onClick = {() => {setCountE1(countE1 - 1)}}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE1(countE1 + 1)}}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE1(countE1 + 5)}}>+5</button>
                          <div className="CountPoint">{countE1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE2}</div>
                          <button className="CountEutton" onClick = {() => {setCountE2(countE2 * 0)}}>0</button>
                          <button className="CountEutton" onClick = {() => {setCountE2(countE2 - 1)}}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE2(countE2 + 1)}}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE2(countE2 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE3(countE3 * 0)}}>0</button>
                          <button className="CountEutton" onClick = {() => {setCountE3(countE3 - 1)}}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE3(countE3 + 1)}}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE3(countE3 + 5)}}>+5</button>
                          <div className="CountPoint">{countE3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE4}</div>
                          <button className="CountEutton" onClick = {() => {setCountE4(countE4 * 0)}}>0</button>
                          <button className="CountEutton" onClick = {() => {setCountE4(countE4 - 1)}}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE4(countE4 + 1)}}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE4(countE4 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{E2[0] && E2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{E3[0] && E3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{E2[0] && E2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE5(countE5 * 0)}}>0</button>
                          <button className="CountEutton" onClick = {() => {setCountE5(countE5 - 1)}}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE5(countE5 + 1)}}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE5(countE5 + 5)}}>+5</button>
                          <div className="CountPoint">{countE5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE6}</div>
                          <button className="CountEutton" onClick = {() => {setCountE6(countE6 * 0)}}>0</button>
                          <button className="CountEutton" onClick = {() => {setCountE6(countE6 - 1)}}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE6(countE6 + 1)}}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE6(countE6 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE7(countE7 * 0)}}>0</button>
                          <button className="CountEutton" onClick = {() => {setCountE7(countE7 - 1)}}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE7(countE7 + 1)}}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE7(countE7 + 5)}}>+5</button>
                          <div className="CountPoint">{countE7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE8}</div>
                          <button className="CountEutton" onClick = {() => {setCountE8(countE8 * 0)}}>0</button>
                          <button className="CountEutton" onClick = {() => {setCountE8(countE8 - 1)}}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE8(countE8 + 1)}}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE8(countE8 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{E3[0] && E3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{E1[0] && E1[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{E1[0] && E1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE9(countE9 * 0)}}>0</button>
                          <button className="CountEutton" onClick = {() => {setCountE9(countE9 - 1)}}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE9(countE9 + 1)}}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE9(countE9 + 5)}}>+5</button>
                          <div className="CountPoint">{countE9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE10}</div>
                          <button className="CountEutton" onClick = {() => {setCountE10(countE10 * 0)}}>0</button>
                          <button className="CountEutton" onClick = {() => {setCountE10(countE10 - 1)}}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE10(countE10 + 1)}}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE10(countE10 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE11(countE11 * 0)}}>0</button>
                          <button className="CountEutton" onClick = {() => {setCountE11(countE11 - 1)}}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE11(countE11 + 1)}}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE11(countE11 + 5)}}>+5</button>
                          <div className="CountPoint">{countE11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE12}</div>
                          <button className="CountEutton" onClick = {() => {setCountE12(countE12 * 0)}}>0</button>
                          <button className="CountEutton" onClick = {() => {setCountE12(countE12 - 1)}}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE12(countE12 + 1)}}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE12(countE12 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{E3[0] && E3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{E2[0] && E2[0].name}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <section id="courtF" className="JumpPoint"></section>
            </div>
          </div>
          <div className="PreMain">
            <h2>中間リーグFコート</h2>
            <button className="updateButton" onClick={handleChangeCount}>更新</button>
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
                      <p>{F1[0] && F1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF1(countF1 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF1(countF1 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF1(countF1 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF1(countF1 + 5)}}>+5</button>
                          <div className="CountPoint">{countF1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF2}</div>
                          <button className="CountFutton" onClick = {() => {setCountF2(countF2 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF2(countF2 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF2(countF2 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF2(countF2 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF3(countF3 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF3(countF3 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF3(countF3 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF3(countF3 + 5)}}>+5</button>
                          <div className="CountPoint">{countF3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF4}</div>
                          <button className="CountFutton" onClick = {() => {setCountF4(countF4 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF4(countF4 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF4(countF4 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF4(countF4 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{F2[0] && F2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{F3[0] && F3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{F2[0] && F2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF5(countF5 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF5(countF5 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF5(countF5 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF5(countF5 + 5)}}>+5</button>
                          <div className="CountPoint">{countF5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF6}</div>
                          <button className="CountFutton" onClick = {() => {setCountF6(countF6 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF6(countF6 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF6(countF6 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF6(countF6 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF7(countF7 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF7(countF7 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF7(countF7 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF7(countF7 + 5)}}>+5</button>
                          <div className="CountPoint">{countF7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF8}</div>
                          <button className="CountFutton" onClick = {() => {setCountF8(countF8 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF8(countF8 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF8(countF8 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF8(countF8 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{F3[0] && F3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{F1[0] && F1[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{F1[0] && F1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF9(countF9 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF9(countF9 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF9(countF9 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF9(countF9 + 5)}}>+5</button>
                          <div className="CountPoint">{countF9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF10}</div>
                          <button className="CountFutton" onClick = {() => {setCountF10(countF10 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF10(countF10 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF10(countF10 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF10(countF10 + 5)}}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountFutton" onClick = {() => {setCountF11(countF11 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF11(countF11 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF11(countF11 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF11(countF11 + 5)}}>+5</button>
                          <div className="CountPoint">{countF11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countF12}</div>
                          <button className="CountFutton" onClick = {() => {setCountF12(countF12 * 0)}}>0</button>
                          <button className="CountFutton" onClick = {() => {setCountF12(countF12 - 1)}}>-1</button>
                          <button className="CountFutton" onClick = {() => {setCountF12(countF12 + 1)}}>+1</button>
                          <button className="CountFutton" onClick = {() => {setCountF12(countF12 + 5)}}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{F3[0] && F3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{F2[0] && F2[0].name}</div>
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


export default Mid;