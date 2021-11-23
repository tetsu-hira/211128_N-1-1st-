import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll/";

const Ect = () => {
  const [team, setTeam] = useState([]);
  const [game, setGame] = useState([]);
  const [keys, setKeys] = useState([]);
  const [id, setId] = useState();
  const [countE1, setCountE1] = useState(0);
  const [countE2, setCountE2] = useState(0);
  const [countE3, setCountE3] = useState(0);
  const [countE4, setCountE4] = useState(0);
  const [countE5, setCountE5] = useState(0);
  const [countE6, setCountE6] = useState(0);
  const [countE7, setCountE7] = useState(0);
  const [countE8, setCountE8] = useState(0);
  const [countE9, setCountE9] = useState(0);
  const [countE10, setCountE10] = useState(0);
  const [countE11, setCountE11] = useState(0);
  const [countE12, setCountE12] = useState(0);
  const [countE13, setCountE13] = useState(0);
  const [countE14, setCountE14] = useState(0);
  const [countE15, setCountE15] = useState(0);
  const [countE16, setCountE16] = useState(0);
  const [countE17, setCountE17] = useState(0);
  const [countE18, setCountE18] = useState(0);
  const [countE19, setCountE19] = useState(0);
  const [countE20, setCountE20] = useState(0);
  const [countE21, setCountE21] = useState(0);
  const [countE22, setCountE22] = useState(0);
  const [countE23, setCountE23] = useState(0);
  const [countE24, setCountE24] = useState(0);
  const [countE25, setCountE25] = useState(0);
  const [countE26, setCountE26] = useState(0);
  const [countE27, setCountE27] = useState(0);
  const [countE28, setCountE28] = useState(0);
  const [countE29, setCountE29] = useState(0);
  const [countE30, setCountE30] = useState(0);
  const [countE31, setCountE31] = useState(0);
  const [countE32, setCountE32] = useState(0);
  const [countE33, setCountE33] = useState(0);
  const [countE34, setCountE34] = useState(0);
  const [countE35, setCountE35] = useState(0);
  const [countE36, setCountE36] = useState(0);
  const [countE37, setCountE37] = useState(0);
  const [countE38, setCountE38] = useState(0);
  const [countE39, setCountE39] = useState(0);
  const [countE40, setCountE40] = useState(0);
  const [countE41, setCountE41] = useState(0);
  const [countE42, setCountE42] = useState(0);
  const [countE43, setCountE43] = useState(0);
  const [countE44, setCountE44] = useState(0);
  const [countE45, setCountE45] = useState(0);
  const [countE46, setCountE46] = useState(0);
  const [countE47, setCountE47] = useState(0);
  const [countE48, setCountE48] = useState(0);
  const [t1, setT1] = useState([]);
  const [t2, setT2] = useState([]);
  const [t3, setT3] = useState([]);
  const [t4, setT4] = useState([]);
  const [t5, setT5] = useState([]);
  const [t6, setT6] = useState([]);
  const [t7, setT7] = useState([]);
  const [t8, setT8] = useState([]);
  const [t9, setT9] = useState([]);


  const handleChangeCount5 = () => {
    axios.post('/api/changecount5', {
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
      countE13: countE13,
      countE14: countE14,
      countE15: countE15,
      countE16: countE16,
      countE17: countE17,
      countE18: countE18,
      countE19: countE19,
      countE20: countE20,
      countE21: countE21,
      countE22: countE22,
      countE23: countE23,
      countE24: countE24,
      countE25: countE25,
      countE26: countE26,
      countE27: countE27,
      countE28: countE28,
      countE29: countE29,
      countE30: countE30,
      countE31: countE31,
      countE32: countE32,
      countE33: countE33,
      countE34: countE34,
      countE35: countE35,
      countE36: countE36,
      countE37: countE37,
      countE38: countE38,
      countE39: countE39,
      countE40: countE40,
      countE41: countE41,
      countE42: countE42,
      countE43: countE43,
      countE44: countE44,
      countE45: countE45,
      countE46: countE46,
      countE47: countE47,
      countE48: countE48
    });
  };

  useEffect(() => {
    getUsers()
  },[])
  const getUsers = async () => {
    const response = await axios.get('/api/team');
    setTeam(response.data.teams)
    setT1(response.data.teams.filter((item, index) => {
      return item.number === 1;
    }));
    setT2(response.data.teams.filter((item, index) => {
      return item.number === 2;
    }));
    setT3(response.data.teams.filter((item, index) => {
      return item.number === 3;
    }));
    setT4(response.data.teams.filter((item, index) => {
      return item.number === 4;
    }));
    setT5(response.data.teams.filter((item, index) => {
      return item.number === 5;
    }));
    setT6(response.data.teams.filter((item, index) => {
      return item.number === 6;
    }));
  }

  useEffect(() => {
    getGames()
  },[])
  const getGames = async () => {
    const response = await axios.get('/api/second');
    setGame(response.data.seconds);
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
    setCountE13(response.data.seconds[15].result1);
    setCountE14(response.data.seconds[15].result2);
    setCountE15(response.data.seconds[15].result3);
    setCountE16(response.data.seconds[15].result4);
    setCountE17(response.data.seconds[16].result1);
    setCountE18(response.data.seconds[16].result2);
    setCountE19(response.data.seconds[16].result3);
    setCountE20(response.data.seconds[16].result4);
    setCountE21(response.data.seconds[17].result1);
    setCountE22(response.data.seconds[17].result2);
    setCountE23(response.data.seconds[17].result3);
    setCountE24(response.data.seconds[17].result4);
    setCountE25(response.data.seconds[18].result1);
    setCountE26(response.data.seconds[18].result2);
    setCountE27(response.data.seconds[18].result3);
    setCountE28(response.data.seconds[18].result4);
    setCountE29(response.data.seconds[19].result1);
    setCountE30(response.data.seconds[19].result2);
    setCountE31(response.data.seconds[19].result3);
    setCountE32(response.data.seconds[19].result4);
    setCountE33(response.data.seconds[20].result1);
    setCountE34(response.data.seconds[20].result2);
    setCountE35(response.data.seconds[20].result3);
    setCountE36(response.data.seconds[20].result4);
    setCountE37(response.data.seconds[21].result1);
    setCountE38(response.data.seconds[21].result2);
    setCountE39(response.data.seconds[21].result3);
    setCountE40(response.data.seconds[21].result4);
    setCountE41(response.data.seconds[22].result1);
    setCountE42(response.data.seconds[22].result2);
    setCountE43(response.data.seconds[22].result3);
    setCountE44(response.data.seconds[22].result4);
    setCountE45(response.data.seconds[23].result1);
    setCountE46(response.data.seconds[23].result2);
    setCountE47(response.data.seconds[23].result3);
    setCountE48(response.data.seconds[23].result4);
  }

  return (
    <>
      <div className="Pre">
        <div className="PreContainer">
          <div className="PreMain">
            <h2>- Eコート -</h2>
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
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE1(countE1 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE1(countE1 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE1(countE1 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE1(countE1 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE2}</div>
                          <button className="CountEutton" onClick = {() => {setCountE2(countE2 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE2(countE2 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE2(countE2 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE2(countE2 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE3(countE3 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE3(countE3 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE3(countE3 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE3(countE3 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE4}</div>
                          <button className="CountEutton" onClick = {() => {setCountE4(countE4 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE4(countE4 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE4(countE4 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE4(countE4 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
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
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE5(countE5 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE5(countE5 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE5(countE5 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE5(countE5 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE6}</div>
                          <button className="CountEutton" onClick = {() => {setCountE6(countE6 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE6(countE6 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE6(countE6 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE6(countE6 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE7(countE7 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE7(countE7 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE7(countE7 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE7(countE7 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE8}</div>
                          <button className="CountEutton" onClick = {() => {setCountE8(countE8 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE8(countE8 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE8(countE8 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE8(countE8 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t4[0] && t4[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{t4[0] && t4[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE9(countE9 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE9(countE9 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE9(countE9 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE9(countE9 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE10}</div>
                          <button className="CountEutton" onClick = {() => {setCountE10(countE10 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE10(countE10 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE10(countE10 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE10(countE10 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE11(countE11 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE11(countE11 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE11(countE11 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE11(countE11 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE12}</div>
                          <button className="CountEutton" onClick = {() => {setCountE12(countE12 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE12(countE12 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE12(countE12 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE12(countE12 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t6[0] && t6[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t3[0] && t3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">4</th>
                    <td className="TableContent__teamA">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE13(countE13 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE13(countE13 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE13(countE13 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE13(countE13 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE13}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE14}</div>
                          <button className="CountEutton" onClick = {() => {setCountE14(countE14 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE14(countE14 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE14(countE14 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE14(countE14 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE15(countE15 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE15(countE15 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE15(countE15 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE15(countE15 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE15}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE16}</div>
                          <button className="CountEutton" onClick = {() => {setCountE16(countE16 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE16(countE16 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE16(countE16 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE16(countE16 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t6[0] && t6[0].name}</div>
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
                          <button className="CountEutton" onClick = {() => {setCountE17(countE17 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE17(countE17 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE17(countE17 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE17(countE17 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE17}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE18}</div>
                          <button className="CountEutton" onClick = {() => {setCountE18(countE18 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE18(countE18 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE18(countE18 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE18(countE18 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE19(countE19 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE19(countE19 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE19(countE19 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE19(countE19 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE19}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE20}</div>
                          <button className="CountEutton" onClick = {() => {setCountE20(countE20 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE20(countE20 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE20(countE20 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE20(countE20 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t6[0] && t6[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t2[0] && t2[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">6</th>
                    <td className="TableContent__teamA">
                      <p>{t4[0] && t4[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE21(countE21 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE21(countE21 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE21(countE21 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE21(countE21 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE21}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE22}</div>
                          <button className="CountEutton" onClick = {() => {setCountE22(countE22 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE22(countE22 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE22(countE22 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE22(countE22 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE23(countE23 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE23(countE23 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE23(countE23 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE23(countE23 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE23}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE24}</div>
                          <button className="CountEutton" onClick = {() => {setCountE24(countE24 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE24(countE24 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE24(countE24 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE24(countE24 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
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
                    <th className="TableContent__number">7</th>
                    <td className="TableContent__teamA">
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE25(countE25 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE25(countE25 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE25(countE25 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE25(countE25 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE25}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE26}</div>
                          <button className="CountEutton" onClick = {() => {setCountE26(countE26 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE26(countE26 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE26(countE26 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE26(countE26 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE27(countE27 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE27(countE27 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE27(countE27 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE27(countE27 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE27}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE28}</div>
                          <button className="CountEutton" onClick = {() => {setCountE28(countE28 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE28(countE28 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE28(countE28 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE28(countE28 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t5[0] && t5[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t4[0] && t4[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">8</th>
                    <td className="TableContent__teamA">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE29(countE29 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE29(countE29 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE29(countE29 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE29(countE29 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE29}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE30}</div>
                          <button className="CountEutton" onClick = {() => {setCountE30(countE30 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE30(countE30 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE30(countE30 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE30(countE30 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE31(countE31 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE31(countE31 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE31(countE31 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE31(countE31 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE31}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE32}</div>
                          <button className="CountEutton" onClick = {() => {setCountE32(countE32 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE32(countE32 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE32(countE32 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE32(countE32 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t5[0] && t5[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">9</th>
                    <td className="TableContent__teamA">
                      <p>{t4[0] && t4[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE33(countE33 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE33(countE33 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE33(countE33 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE33(countE33 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE33}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE34}</div>
                          <button className="CountEutton" onClick = {() => {setCountE34(countE34 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE34(countE34 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE34(countE34 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE34(countE34 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE35(countE35 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE35(countE35 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE35(countE35 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE35(countE35 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE35}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE36}</div>
                          <button className="CountEutton" onClick = {() => {setCountE36(countE36 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE36(countE36 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE36(countE36 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE36(countE36 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t6[0] && t6[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t3[0] && t3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">10</th>
                    <td className="TableContent__teamA">
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE37(countE37 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE37(countE37 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE37(countE37 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE37(countE37 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE37}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE38}</div>
                          <button className="CountEutton" onClick = {() => {setCountE38(countE38 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE38(countE38 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE38(countE38 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE38(countE38 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE39(countE39 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE39(countE39 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE39(countE39 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE39(countE39 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE39}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE40}</div>
                          <button className="CountEutton" onClick = {() => {setCountE40(countE40 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE40(countE40 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE40(countE40 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE40(countE40 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t6[0] && t6[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t4[0] && t4[0].name}</div>
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
                          <button className="CountEutton" onClick = {() => {setCountE41(countE41 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE41(countE41 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE41(countE41 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE41(countE41 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE41}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE42}</div>
                          <button className="CountEutton" onClick = {() => {setCountE42(countE42 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE42(countE42 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE42(countE42 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE42(countE42 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE43(countE43 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE43(countE43 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE43(countE43 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE43(countE43 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE43}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE44}</div>
                          <button className="CountEutton" onClick = {() => {setCountE44(countE44 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE44(countE44 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE44(countE44 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE44(countE44 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
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
                    <th className="TableContent__number">12</th>
                    <td className="TableContent__teamA">
                      <p>{t5[0] && t5[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE45(countE45 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE45(countE45 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE45(countE45 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE45(countE45 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE45}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE46}</div>
                          <button className="CountEutton" onClick = {() => {setCountE46(countE46 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE46(countE46 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE46(countE46 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE46(countE46 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountEutton" onClick = {() => {setCountE47(countE47 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE47(countE47 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE47(countE47 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE47(countE47 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                          <div className="CountPoint">{countE47}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countE48}</div>
                          <button className="CountEutton" onClick = {() => {setCountE48(countE48 * 0)}} onMouseLeave={handleChangeCount5}>C</button>
                          <button className="CountEutton" onClick = {() => {setCountE48(countE48 - 1)}} onMouseLeave={handleChangeCount5}>-1</button>
                          <button className="CountEutton" onClick = {() => {setCountE48(countE48 + 1)}} onMouseLeave={handleChangeCount5}>+1</button>
                          <button className="CountEutton" onClick = {() => {setCountE48(countE48 + 5)}} onMouseLeave={handleChangeCount5}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t6[0] && t6[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t3[0] && t3[0].name}</div>
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


export default Ect;