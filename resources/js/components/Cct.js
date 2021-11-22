import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll/";

const Cct = () => {
  const [team, setTeam] = useState([]);
  const [game, setGame] = useState([]);
  const [keys, setKeys] = useState([]);
  const [id, setId] = useState();
  const [countC1, setCountC1] = useState(0);
  const [countC2, setCountC2] = useState(0);
  const [countC3, setCountC3] = useState(0);
  const [countC4, setCountC4] = useState(0);
  const [countC5, setCountC5] = useState(0);
  const [countC6, setCountC6] = useState(0);
  const [countC7, setCountC7] = useState(0);
  const [countC8, setCountC8] = useState(0);
  const [countC9, setCountC9] = useState(0);
  const [countC10, setCountC10] = useState(0);
  const [countC11, setCountC11] = useState(0);
  const [countC12, setCountC12] = useState(0);
  const [countC13, setCountC13] = useState(0);
  const [countC14, setCountC14] = useState(0);
  const [countC15, setCountC15] = useState(0);
  const [countC16, setCountC16] = useState(0);
  const [countC17, setCountC17] = useState(0);
  const [countC18, setCountC18] = useState(0);
  const [countC19, setCountC19] = useState(0);
  const [countC20, setCountC20] = useState(0);
  const [countC21, setCountC21] = useState(0);
  const [countC22, setCountC22] = useState(0);
  const [countC23, setCountC23] = useState(0);
  const [countC24, setCountC24] = useState(0);
  const [countC25, setCountC25] = useState(0);
  const [countC26, setCountC26] = useState(0);
  const [countC27, setCountC27] = useState(0);
  const [countC28, setCountC28] = useState(0);
  const [countC29, setCountC29] = useState(0);
  const [countC30, setCountC30] = useState(0);
  const [countC31, setCountC31] = useState(0);
  const [countC32, setCountC32] = useState(0);
  const [countC33, setCountC33] = useState(0);
  const [countC34, setCountC34] = useState(0);
  const [countC35, setCountC35] = useState(0);
  const [countC36, setCountC36] = useState(0);
  const [countC37, setCountC37] = useState(0);
  const [countC38, setCountC38] = useState(0);
  const [countC39, setCountC39] = useState(0);
  const [countC40, setCountC40] = useState(0);
  const [countC41, setCountC41] = useState(0);
  const [countC42, setCountC42] = useState(0);
  const [countC43, setCountC43] = useState(0);
  const [countC44, setCountC44] = useState(0);
  const [countC45, setCountC45] = useState(0);
  const [countC46, setCountC46] = useState(0);
  const [countC47, setCountC47] = useState(0);
  const [countC48, setCountC48] = useState(0);
  const [t1, setT1] = useState([]);
  const [t2, setT2] = useState([]);
  const [t3, setT3] = useState([]);
  const [t4, setT4] = useState([]);
  const [t5, setT5] = useState([]);
  const [t6, setT6] = useState([]);
  const [t7, setT7] = useState([]);
  const [t8, setT8] = useState([]);
  const [t9, setT9] = useState([]);


  const handleChangeCount3 = () => {
    axios.post('/api/changecount3', {
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
      countC17: countC17,
      countC18: countC18,
      countC19: countC19,
      countC20: countC20,
      countC21: countC21,
      countC22: countC22,
      countC23: countC23,
      countC24: countC24,
      countC25: countC25,
      countC26: countC26,
      countC27: countC27,
      countC28: countC28,
      countC29: countC29,
      countC30: countC30,
      countC31: countC31,
      countC32: countC32,
      countC33: countC33,
      countC34: countC34,
      countC35: countC35,
      countC36: countC36,
      countC37: countC37,
      countC38: countC38,
      countC39: countC39,
      countC40: countC40,
      countC41: countC41,
      countC42: countC42,
      countC43: countC43,
      countC44: countC44,
      countC45: countC45,
      countC46: countC46,
      countC47: countC47,
      countC48: countC48
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
    setCountC1(response.data.firsts[24].result1);
    setCountC2(response.data.firsts[24].result2);
    setCountC3(response.data.firsts[24].result3);
    setCountC4(response.data.firsts[24].result4);
    setCountC5(response.data.firsts[25].result1);
    setCountC6(response.data.firsts[25].result2);
    setCountC7(response.data.firsts[25].result3);
    setCountC8(response.data.firsts[25].result4);
    setCountC9(response.data.firsts[26].result1);
    setCountC10(response.data.firsts[26].result2);
    setCountC11(response.data.firsts[26].result3);
    setCountC12(response.data.firsts[26].result4);
    setCountC13(response.data.firsts[27].result1);
    setCountC14(response.data.firsts[27].result2);
    setCountC15(response.data.firsts[27].result3);
    setCountC16(response.data.firsts[27].result4);
    setCountC17(response.data.firsts[28].result1);
    setCountC18(response.data.firsts[28].result2);
    setCountC19(response.data.firsts[28].result3);
    setCountC20(response.data.firsts[28].result4);
    setCountC21(response.data.firsts[29].result1);
    setCountC22(response.data.firsts[29].result2);
    setCountC23(response.data.firsts[29].result3);
    setCountC24(response.data.firsts[29].result4);
    setCountC25(response.data.firsts[30].result1);
    setCountC26(response.data.firsts[30].result2);
    setCountC27(response.data.firsts[30].result3);
    setCountC28(response.data.firsts[30].result4);
    setCountC29(response.data.firsts[31].result1);
    setCountC30(response.data.firsts[31].result2);
    setCountC31(response.data.firsts[31].result3);
    setCountC32(response.data.firsts[31].result4);
    setCountC33(response.data.firsts[32].result1);
    setCountC34(response.data.firsts[32].result2);
    setCountC35(response.data.firsts[32].result3);
    setCountC36(response.data.firsts[32].result4);
    setCountC37(response.data.firsts[33].result1);
    setCountC38(response.data.firsts[33].result2);
    setCountC39(response.data.firsts[33].result3);
    setCountC40(response.data.firsts[33].result4);
    setCountC41(response.data.firsts[34].result1);
    setCountC42(response.data.firsts[34].result2);
    setCountC43(response.data.firsts[34].result3);
    setCountC44(response.data.firsts[34].result4);
    setCountC45(response.data.firsts[35].result1);
    setCountC46(response.data.firsts[35].result2);
    setCountC47(response.data.firsts[35].result3);
    setCountC48(response.data.firsts[35].result4);
  }

  return (
    <>
      <div className="Pre">
        <div className="PreContainer">
          <div className="PreMain">
            <h2>- Cコート -</h2>
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
                      <p>{t7[0] && t7[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC1(countC1 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC1(countC1 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC1(countC1 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC1(countC1 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC2}</div>
                          <button className="CountCutton" onClick = {() => {setCountC2(countC2 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC2(countC2 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC2(countC2 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC2(countC2 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC3(countC3 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC3(countC3 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC3(countC3 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC3(countC3 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC4}</div>
                          <button className="CountCutton" onClick = {() => {setCountC4(countC4 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC4(countC4 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC4(countC4 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC4(countC4 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t8[0] && t8[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t9[0] && t9[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">2</th>
                    <td className="TableContent__teamA">
                      <p>{t8[0] && t8[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC5(countC5 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC5(countC5 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC5(countC5 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC5(countC5 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC6}</div>
                          <button className="CountCutton" onClick = {() => {setCountC6(countC6 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC6(countC6 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC6(countC6 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC6(countC6 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC7(countC7 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC7(countC7 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC7(countC7 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC7(countC7 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC8}</div>
                          <button className="CountCutton" onClick = {() => {setCountC8(countC8 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC8(countC8 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC8(countC8 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC8(countC8 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t9[0] && t9[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t7[0] && t7[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{t7[0] && t7[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC9(countC9 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC9(countC9 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC9(countC9 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC9(countC9 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC10}</div>
                          <button className="CountCutton" onClick = {() => {setCountC10(countC10 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC10(countC10 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC10(countC10 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC10(countC10 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC11(countC11 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC11(countC11 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC11(countC11 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC11(countC11 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC12}</div>
                          <button className="CountCutton" onClick = {() => {setCountC12(countC12 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC12(countC12 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC12(countC12 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC12(countC12 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t9[0] && t9[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t8[0] && t8[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">4</th>
                    <td className="TableContent__teamA">
                      <p>{t4[0] && t4[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC13(countC13 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC13(countC13 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC13(countC13 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC13(countC13 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC13}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC14}</div>
                          <button className="CountCutton" onClick = {() => {setCountC14(countC14 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC14(countC14 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC14(countC14 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC14(countC14 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC15(countC15 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC15(countC15 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC15(countC15 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC15(countC15 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC15}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC16}</div>
                          <button className="CountCutton" onClick = {() => {setCountC16(countC16 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC16(countC16 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC16(countC16 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC16(countC16 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t8[0] && t8[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t9[0] && t9[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">5</th>
                    <td className="TableContent__teamA">
                      <p>{t6[0] && t6[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC17(countC17 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC17(countC17 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC17(countC17 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC17(countC17 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC17}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC18}</div>
                          <button className="CountCutton" onClick = {() => {setCountC18(countC18 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC18(countC18 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC18(countC18 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC18(countC18 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC19(countC19 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC19(countC19 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC19(countC19 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC19(countC19 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC19}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC20}</div>
                          <button className="CountCutton" onClick = {() => {setCountC20(countC20 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC20(countC20 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC20(countC20 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC20(countC20 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t9[0] && t9[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t4[0] && t4[0].name}</div>
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
                          <button className="CountCutton" onClick = {() => {setCountC21(countC21 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC21(countC21 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC21(countC21 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC21(countC21 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC21}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC22}</div>
                          <button className="CountCutton" onClick = {() => {setCountC22(countC22 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC22(countC22 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC22(countC22 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC22(countC22 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC23(countC23 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC23(countC23 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC23(countC23 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC23(countC23 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC23}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC24}</div>
                          <button className="CountCutton" onClick = {() => {setCountC24(countC24 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC24(countC24 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC24(countC24 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC24(countC24 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t9[0] && t9[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t8[0] && t8[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">7</th>
                    <td className="TableContent__teamA">
                      <p>{t4[0] && t4[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC25(countC25 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC25(countC25 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC25(countC25 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC25(countC25 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC25}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC26}</div>
                          <button className="CountCutton" onClick = {() => {setCountC26(countC26 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC26(countC26 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC26(countC26 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC26(countC26 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC27(countC27 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC27(countC27 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC27(countC27 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC27(countC27 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC27}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC28}</div>
                          <button className="CountCutton" onClick = {() => {setCountC28(countC28 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC28(countC28 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC28(countC28 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC28(countC28 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t7[0] && t7[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t9[0] && t9[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">8</th>
                    <td className="TableContent__teamA">
                      <p>{t3[0] && t3[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC29(countC29 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC29(countC29 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC29(countC29 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC29(countC29 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC29}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC30}</div>
                          <button className="CountCutton" onClick = {() => {setCountC30(countC30 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC30(countC30 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC30(countC30 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC30(countC30 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC31(countC31 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC31(countC31 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC31(countC31 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC31(countC31 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC31}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC32}</div>
                          <button className="CountCutton" onClick = {() => {setCountC32(countC32 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC32(countC32 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC32(countC32 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC32(countC32 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t9[0] && t9[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t7[0] && t7[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">9</th>
                    <td className="TableContent__teamA">
                      <p>{t6[0] && t6[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC33(countC33 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC33(countC33 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC33(countC33 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC33(countC33 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC33}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC34}</div>
                          <button className="CountCutton" onClick = {() => {setCountC34(countC34 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC34(countC34 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC34(countC34 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC34(countC34 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC35(countC35 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC35(countC35 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC35(countC35 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC35(countC35 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC35}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC36}</div>
                          <button className="CountCutton" onClick = {() => {setCountC36(countC36 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC36(countC36 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC36(countC36 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC36(countC36 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t7[0] && t7[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t8[0] && t8[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">10</th>
                    <td className="TableContent__teamA">
                      <p>{t5[0] && t5[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC37(countC37 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC37(countC37 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC37(countC37 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC37(countC37 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC37}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC38}</div>
                          <button className="CountCutton" onClick = {() => {setCountC38(countC38 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC38(countC38 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC38(countC38 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC38(countC38 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC39(countC39 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC39(countC39 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC39(countC39 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC39(countC39 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC39}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC40}</div>
                          <button className="CountCutton" onClick = {() => {setCountC40(countC40 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC40(countC40 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC40(countC40 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC40(countC40 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t7[0] && t7[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t8[0] && t8[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">11</th>
                    <td className="TableContent__teamA">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC41(countC41 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC41(countC41 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC41(countC41 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC41(countC41 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC41}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC42}</div>
                          <button className="CountCutton" onClick = {() => {setCountC42(countC42 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC42(countC42 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC42(countC42 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC42(countC42 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC43(countC43 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC43(countC43 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC43(countC43 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC43(countC43 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC43}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC44}</div>
                          <button className="CountCutton" onClick = {() => {setCountC44(countC44 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC44(countC44 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC44(countC44 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC44(countC44 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t4[0] && t4[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t5[0] && t5[0].name}</div>
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
                          <button className="CountCutton" onClick = {() => {setCountC45(countC45 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC45(countC45 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC45(countC45 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC45(countC45 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC45}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC46}</div>
                          <button className="CountCutton" onClick = {() => {setCountC46(countC46 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC46(countC46 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC46(countC46 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC46(countC46 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountCutton" onClick = {() => {setCountC47(countC47 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC47(countC47 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC47(countC47 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC47(countC47 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                          <div className="CountPoint">{countC47}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countC48}</div>
                          <button className="CountCutton" onClick = {() => {setCountC48(countC48 * 0)}} onMouseLeave={handleChangeCount3}>C</button>
                          <button className="CountCutton" onClick = {() => {setCountC48(countC48 - 1)}} onMouseLeave={handleChangeCount3}>-1</button>
                          <button className="CountCutton" onClick = {() => {setCountC48(countC48 + 1)}} onMouseLeave={handleChangeCount3}>+1</button>
                          <button className="CountCutton" onClick = {() => {setCountC48(countC48 + 5)}} onMouseLeave={handleChangeCount3}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t9[0] && t9[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t2[0] && t2[0].name}</div>
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


export default Cct;