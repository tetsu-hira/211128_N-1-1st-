import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll/";

const Bct = () => {
  const [team, setTeam] = useState([]);
  const [game, setGame] = useState([]);
  const [keys, setKeys] = useState([]);
  const [id, setId] = useState();
  const [countB1, setCountB1] = useState(0);
  const [countB2, setCountB2] = useState(0);
  const [countB3, setCountB3] = useState(0);
  const [countB4, setCountB4] = useState(0);
  const [countB5, setCountB5] = useState(0);
  const [countB6, setCountB6] = useState(0);
  const [countB7, setCountB7] = useState(0);
  const [countB8, setCountB8] = useState(0);
  const [countB9, setCountB9] = useState(0);
  const [countB10, setCountB10] = useState(0);
  const [countB11, setCountB11] = useState(0);
  const [countB12, setCountB12] = useState(0);
  const [countB13, setCountB13] = useState(0);
  const [countB14, setCountB14] = useState(0);
  const [countB15, setCountB15] = useState(0);
  const [countB16, setCountB16] = useState(0);
  const [countB17, setCountB17] = useState(0);
  const [countB18, setCountB18] = useState(0);
  const [countB19, setCountB19] = useState(0);
  const [countB20, setCountB20] = useState(0);
  const [countB21, setCountB21] = useState(0);
  const [countB22, setCountB22] = useState(0);
  const [countB23, setCountB23] = useState(0);
  const [countB24, setCountB24] = useState(0);
  const [countB25, setCountB25] = useState(0);
  const [countB26, setCountB26] = useState(0);
  const [countB27, setCountB27] = useState(0);
  const [countB28, setCountB28] = useState(0);
  const [countB29, setCountB29] = useState(0);
  const [countB30, setCountB30] = useState(0);
  const [countB31, setCountB31] = useState(0);
  const [countB32, setCountB32] = useState(0);
  const [countB33, setCountB33] = useState(0);
  const [countB34, setCountB34] = useState(0);
  const [countB35, setCountB35] = useState(0);
  const [countB36, setCountB36] = useState(0);
  const [countB37, setCountB37] = useState(0);
  const [countB38, setCountB38] = useState(0);
  const [countB39, setCountB39] = useState(0);
  const [countB40, setCountB40] = useState(0);
  const [countB41, setCountB41] = useState(0);
  const [countB42, setCountB42] = useState(0);
  const [countB43, setCountB43] = useState(0);
  const [countB44, setCountB44] = useState(0);
  const [countB45, setCountB45] = useState(0);
  const [countB46, setCountB46] = useState(0);
  const [countB47, setCountB47] = useState(0);
  const [countB48, setCountB48] = useState(0);
  const [t1, setT1] = useState([]);
  const [t2, setT2] = useState([]);
  const [t3, setT3] = useState([]);
  const [t4, setT4] = useState([]);
  const [t5, setT5] = useState([]);
  const [t6, setT6] = useState([]);
  const [t7, setT7] = useState([]);
  const [t8, setT8] = useState([]);
  const [t9, setT9] = useState([]);


  const handleChangeCount2 = () => {
    axios.post('/api/changecount2', {
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
      countB17: countB17,
      countB18: countB18,
      countB19: countB19,
      countB20: countB20,
      countB21: countB21,
      countB22: countB22,
      countB23: countB23,
      countB24: countB24,
      countB25: countB25,
      countB26: countB26,
      countB27: countB27,
      countB28: countB28,
      countB29: countB29,
      countB30: countB30,
      countB31: countB31,
      countB32: countB32,
      countB33: countB33,
      countB34: countB34,
      countB35: countB35,
      countB36: countB36,
      countB37: countB37,
      countB38: countB38,
      countB39: countB39,
      countB40: countB40,
      countB41: countB41,
      countB42: countB42,
      countB43: countB43,
      countB44: countB44,
      countB45: countB45,
      countB46: countB46,
      countB47: countB47,
      countB48: countB48
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
    setCountB1(response.data.firsts[12].result1);
    setCountB2(response.data.firsts[12].result2);
    setCountB3(response.data.firsts[12].result3);
    setCountB4(response.data.firsts[12].result4);
    setCountB5(response.data.firsts[13].result1);
    setCountB6(response.data.firsts[13].result2);
    setCountB7(response.data.firsts[13].result3);
    setCountB8(response.data.firsts[13].result4);
    setCountB9(response.data.firsts[14].result1);
    setCountB10(response.data.firsts[14].result2);
    setCountB11(response.data.firsts[14].result3);
    setCountB12(response.data.firsts[14].result4);
    setCountB13(response.data.firsts[15].result1);
    setCountB14(response.data.firsts[15].result2);
    setCountB15(response.data.firsts[15].result3);
    setCountB16(response.data.firsts[15].result4);
    setCountB17(response.data.firsts[16].result1);
    setCountB18(response.data.firsts[16].result2);
    setCountB19(response.data.firsts[16].result3);
    setCountB20(response.data.firsts[16].result4);
    setCountB21(response.data.firsts[17].result1);
    setCountB22(response.data.firsts[17].result2);
    setCountB23(response.data.firsts[17].result3);
    setCountB24(response.data.firsts[17].result4);
    setCountB25(response.data.firsts[18].result1);
    setCountB26(response.data.firsts[18].result2);
    setCountB27(response.data.firsts[18].result3);
    setCountB28(response.data.firsts[18].result4);
    setCountB29(response.data.firsts[19].result1);
    setCountB30(response.data.firsts[19].result2);
    setCountB31(response.data.firsts[19].result3);
    setCountB32(response.data.firsts[19].result4);
    setCountB33(response.data.firsts[20].result1);
    setCountB34(response.data.firsts[20].result2);
    setCountB35(response.data.firsts[20].result3);
    setCountB36(response.data.firsts[20].result4);
    setCountB37(response.data.firsts[21].result1);
    setCountB38(response.data.firsts[21].result2);
    setCountB39(response.data.firsts[21].result3);
    setCountB40(response.data.firsts[21].result4);
    setCountB41(response.data.firsts[22].result1);
    setCountB42(response.data.firsts[22].result2);
    setCountB43(response.data.firsts[22].result3);
    setCountB44(response.data.firsts[22].result4);
    setCountB45(response.data.firsts[23].result1);
    setCountB46(response.data.firsts[23].result2);
    setCountB47(response.data.firsts[23].result3);
    setCountB48(response.data.firsts[23].result4);
  }

  return (
    <>
      <div className="Pre">
        <div className="PreContainer">
          <div className="PreMain">
            <h2>- Bコート -</h2>
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
                      <p>{t4[0] && t4[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB1(countB1 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB1(countB1 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB1(countB1 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB1(countB1 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB2}</div>
                          <button className="CountButton" onClick = {() => {setCountB2(countB2 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB2(countB2 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB2(countB2 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB2(countB2 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB3(countB3 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB3(countB3 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB3(countB3 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB3(countB3 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB4}</div>
                          <button className="CountButton" onClick = {() => {setCountB4(countB4 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB4(countB4 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB4(countB4 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB4(countB4 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t5[0] && t5[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t6[0] && t6[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{t5[0] && t5[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB5(countB5 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB5(countB5 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB5(countB5 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB5(countB5 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB6}</div>
                          <button className="CountButton" onClick = {() => {setCountB6(countB6 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB6(countB6 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB6(countB6 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB6(countB6 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB7(countB7 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB7(countB7 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB7(countB7 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB7(countB7 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB8}</div>
                          <button className="CountButton" onClick = {() => {setCountB8(countB8 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB8(countB8 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB8(countB8 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB8(countB8 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
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
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{t4[0] && t4[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB9(countB9 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB9(countB9 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB9(countB9 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB9(countB9 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB10}</div>
                          <button className="CountButton" onClick = {() => {setCountB10(countB10 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB10(countB10 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB10(countB10 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB10(countB10 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB11(countB11 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB11(countB11 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB11(countB11 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB11(countB11 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB12}</div>
                          <button className="CountButton" onClick = {() => {setCountB12(countB12 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB12(countB12 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB12(countB12 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB12(countB12 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t6[0] && t6[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t5[0] && t5[0].name}</div>
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
                          <button className="CountButton" onClick = {() => {setCountB13(countB13 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB13(countB13 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB13(countB13 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB13(countB13 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB13}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB14}</div>
                          <button className="CountButton" onClick = {() => {setCountB14(countB14 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB14(countB14 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB14(countB14 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB14(countB14 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB15(countB15 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB15(countB15 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB15(countB15 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB15(countB15 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB15}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB16}</div>
                          <button className="CountButton" onClick = {() => {setCountB16(countB16 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB16(countB16 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB16(countB16 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB16(countB16 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t7[0] && t7[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t6[0] && t6[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">5</th>
                    <td className="TableContent__teamA">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB17(countB17 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB17(countB17 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB17(countB17 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB17(countB17 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB17}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB18}</div>
                          <button className="CountButton" onClick = {() => {setCountB18(countB18 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB18(countB18 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB18(countB18 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB18(countB18 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB19(countB19 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB19(countB19 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB19(countB19 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB19(countB19 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB19}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB20}</div>
                          <button className="CountButton" onClick = {() => {setCountB20(countB20 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB20(countB20 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB20(countB20 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB20(countB20 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
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
                    <th className="TableContent__number">6</th>
                    <td className="TableContent__teamA">
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB21(countB21 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB21(countB21 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB21(countB21 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB21(countB21 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB21}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB22}</div>
                          <button className="CountButton" onClick = {() => {setCountB22(countB22 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB22(countB22 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB22(countB22 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB22(countB22 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB23(countB23 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB23(countB23 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB23(countB23 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB23(countB23 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB23}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB24}</div>
                          <button className="CountButton" onClick = {() => {setCountB24(countB24 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB24(countB24 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB24(countB24 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB24(countB24 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
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
                    <th className="TableContent__number">7</th>
                    <td className="TableContent__teamA">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB25(countB25 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB25(countB25 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB25(countB25 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB25(countB25 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB25}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB26}</div>
                          <button className="CountButton" onClick = {() => {setCountB26(countB26 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB26(countB26 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB26(countB26 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB26(countB26 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB27(countB27 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB27(countB27 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB27(countB27 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB27(countB27 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB27}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB28}</div>
                          <button className="CountButton" onClick = {() => {setCountB28(countB28 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB28(countB28 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB28(countB28 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB28(countB28 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t5[0] && t5[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t6[0] && t6[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">8</th>
                    <td className="TableContent__teamA">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB29(countB29 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB29(countB29 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB29(countB29 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB29(countB29 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB29}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB30}</div>
                          <button className="CountButton" onClick = {() => {setCountB30(countB30 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB30(countB30 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB30(countB30 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB30(countB30 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB31(countB31 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB31(countB31 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB31(countB31 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB31(countB31 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB31}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB32}</div>
                          <button className="CountButton" onClick = {() => {setCountB32(countB32 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB32(countB32 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB32(countB32 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB32(countB32 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
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
                    <th className="TableContent__number">9</th>
                    <td className="TableContent__teamA">
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB33(countB33 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB33(countB33 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB33(countB33 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB33(countB33 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB33}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB34}</div>
                          <button className="CountButton" onClick = {() => {setCountB34(countB34 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB34(countB34 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB34(countB34 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB34(countB34 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB35(countB35 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB35(countB35 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB35(countB35 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB35(countB35 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB35}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB36}</div>
                          <button className="CountButton" onClick = {() => {setCountB36(countB36 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB36(countB36 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB36(countB36 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB36(countB36 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t4[0] && t4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t2[0] && t2[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">10</th>
                    <td className="TableContent__teamA">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB37(countB37 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB37(countB37 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB37(countB37 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB37(countB37 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB37}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB38}</div>
                          <button className="CountButton" onClick = {() => {setCountB38(countB38 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB38(countB38 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB38(countB38 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB38(countB38 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB39(countB39 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB39(countB39 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB39(countB39 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB39(countB39 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB39}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB40}</div>
                          <button className="CountButton" onClick = {() => {setCountB40(countB40 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB40(countB40 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB40(countB40 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB40(countB40 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t9[0] && t9[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t3[0] && t3[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">11</th>
                    <td className="TableContent__teamA">
                      <p>{t6[0] && t6[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB41(countB41 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB41(countB41 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB41(countB41 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB41(countB41 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB41}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB42}</div>
                          <button className="CountButton" onClick = {() => {setCountB42(countB42 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB42(countB42 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB42(countB42 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB42(countB42 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB43(countB43 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB43(countB43 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB43(countB43 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB43(countB43 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB43}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB44}</div>
                          <button className="CountButton" onClick = {() => {setCountB44(countB44 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB44(countB44 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB44(countB44 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB44(countB44 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t9[0] && t9[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">12</th>
                    <td className="TableContent__teamA">
                      <p>{t6[0] && t6[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB45(countB45 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB45(countB45 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB45(countB45 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB45(countB45 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB45}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB46}</div>
                          <button className="CountButton" onClick = {() => {setCountB46(countB46 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB46(countB46 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB46(countB46 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB46(countB46 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountButton" onClick = {() => {setCountB47(countB47 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB47(countB47 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB47(countB47 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB47(countB47 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                          <div className="CountPoint">{countB47}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countB48}</div>
                          <button className="CountButton" onClick = {() => {setCountB48(countB48 * 0)}} onMouseLeave={handleChangeCount2}>C</button>
                          <button className="CountButton" onClick = {() => {setCountB48(countB48 - 1)}} onMouseLeave={handleChangeCount2}>-1</button>
                          <button className="CountButton" onClick = {() => {setCountB48(countB48 + 1)}} onMouseLeave={handleChangeCount2}>+1</button>
                          <button className="CountButton" onClick = {() => {setCountB48(countB48 + 5)}} onMouseLeave={handleChangeCount2}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t8[0] && t8[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t1[0] && t1[0].name}</div>
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


export default Bct;