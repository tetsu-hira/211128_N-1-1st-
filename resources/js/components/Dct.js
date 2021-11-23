import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll/";

const Dct = () => {
  const [team, setTeam] = useState([]);
  const [game, setGame] = useState([]);
  const [keys, setKeys] = useState([]);
  const [id, setId] = useState();
  const [countD1, setCountD1] = useState(0);
  const [countD2, setCountD2] = useState(0);
  const [countD3, setCountD3] = useState(0);
  const [countD4, setCountD4] = useState(0);
  const [countD5, setCountD5] = useState(0);
  const [countD6, setCountD6] = useState(0);
  const [countD7, setCountD7] = useState(0);
  const [countD8, setCountD8] = useState(0);
  const [countD9, setCountD9] = useState(0);
  const [countD10, setCountD10] = useState(0);
  const [countD11, setCountD11] = useState(0);
  const [countD12, setCountD12] = useState(0);
  const [countD13, setCountD13] = useState(0);
  const [countD14, setCountD14] = useState(0);
  const [countD15, setCountD15] = useState(0);
  const [countD16, setCountD16] = useState(0);
  const [countD17, setCountD17] = useState(0);
  const [countD18, setCountD18] = useState(0);
  const [countD19, setCountD19] = useState(0);
  const [countD20, setCountD20] = useState(0);
  const [countD21, setCountD21] = useState(0);
  const [countD22, setCountD22] = useState(0);
  const [countD23, setCountD23] = useState(0);
  const [countD24, setCountD24] = useState(0);
  const [countD25, setCountD25] = useState(0);
  const [countD26, setCountD26] = useState(0);
  const [countD27, setCountD27] = useState(0);
  const [countD28, setCountD28] = useState(0);
  const [countD29, setCountD29] = useState(0);
  const [countD30, setCountD30] = useState(0);
  const [countD31, setCountD31] = useState(0);
  const [countD32, setCountD32] = useState(0);
  const [countD33, setCountD33] = useState(0);
  const [countD34, setCountD34] = useState(0);
  const [countD35, setCountD35] = useState(0);
  const [countD36, setCountD36] = useState(0);
  const [countD37, setCountD37] = useState(0);
  const [countD38, setCountD38] = useState(0);
  const [countD39, setCountD39] = useState(0);
  const [countD40, setCountD40] = useState(0);
  const [countD41, setCountD41] = useState(0);
  const [countD42, setCountD42] = useState(0);
  const [countD43, setCountD43] = useState(0);
  const [countD44, setCountD44] = useState(0);
  const [countD45, setCountD45] = useState(0);
  const [countD46, setCountD46] = useState(0);
  const [countD47, setCountD47] = useState(0);
  const [countD48, setCountD48] = useState(0);
  const [t1, setT1] = useState([]);
  const [t2, setT2] = useState([]);
  const [t3, setT3] = useState([]);
  const [t4, setT4] = useState([]);
  const [t5, setT5] = useState([]);
  const [t6, setT6] = useState([]);
  const [t7, setT7] = useState([]);
  const [t8, setT8] = useState([]);
  const [t9, setT9] = useState([]);


  const handleChangeCount4 = () => {
    axios.post('/api/changecount4', {
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
      countD16: countD16,
      countD17: countD17,
      countD18: countD18,
      countD19: countD19,
      countD20: countD20,
      countD21: countD21,
      countD22: countD22,
      countD23: countD23,
      countD24: countD24,
      countD25: countD25,
      countD26: countD26,
      countD27: countD27,
      countD28: countD28,
      countD29: countD29,
      countD30: countD30,
      countD31: countD31,
      countD32: countD32,
      countD33: countD33,
      countD34: countD34,
      countD35: countD35,
      countD36: countD36,
      countD37: countD37,
      countD38: countD38,
      countD39: countD39,
      countD40: countD40,
      countD41: countD41,
      countD42: countD42,
      countD43: countD43,
      countD44: countD44,
      countD45: countD45,
      countD46: countD46,
      countD47: countD47,
      countD48: countD48
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
    setCountD1(response.data.seconds[0].result1);
    setCountD2(response.data.seconds[0].result2);
    setCountD3(response.data.seconds[0].result3);
    setCountD4(response.data.seconds[0].result4);
    setCountD5(response.data.seconds[1].result1);
    setCountD6(response.data.seconds[1].result2);
    setCountD7(response.data.seconds[1].result3);
    setCountD8(response.data.seconds[1].result4);
    setCountD9(response.data.seconds[2].result1);
    setCountD10(response.data.seconds[2].result2);
    setCountD11(response.data.seconds[2].result3);
    setCountD12(response.data.seconds[2].result4);
    setCountD13(response.data.seconds[3].result1);
    setCountD14(response.data.seconds[3].result2);
    setCountD15(response.data.seconds[3].result3);
    setCountD16(response.data.seconds[3].result4);
    setCountD17(response.data.seconds[4].result1);
    setCountD18(response.data.seconds[4].result2);
    setCountD19(response.data.seconds[4].result3);
    setCountD20(response.data.seconds[4].result4);
    setCountD21(response.data.seconds[5].result1);
    setCountD22(response.data.seconds[5].result2);
    setCountD23(response.data.seconds[5].result3);
    setCountD24(response.data.seconds[5].result4);
    setCountD25(response.data.seconds[6].result1);
    setCountD26(response.data.seconds[6].result2);
    setCountD27(response.data.seconds[6].result3);
    setCountD28(response.data.seconds[6].result4);
    setCountD29(response.data.seconds[7].result1);
    setCountD30(response.data.seconds[7].result2);
    setCountD31(response.data.seconds[7].result3);
    setCountD32(response.data.seconds[7].result4);
    setCountD33(response.data.seconds[8].result1);
    setCountD34(response.data.seconds[8].result2);
    setCountD35(response.data.seconds[8].result3);
    setCountD36(response.data.seconds[8].result4);
    setCountD37(response.data.seconds[9].result1);
    setCountD38(response.data.seconds[9].result2);
    setCountD39(response.data.seconds[9].result3);
    setCountD40(response.data.seconds[9].result4);
    setCountD41(response.data.seconds[10].result1);
    setCountD42(response.data.seconds[10].result2);
    setCountD43(response.data.seconds[10].result3);
    setCountD44(response.data.seconds[10].result4);
    setCountD45(response.data.seconds[11].result1);
    setCountD46(response.data.seconds[11].result2);
    setCountD47(response.data.seconds[11].result3);
    setCountD48(response.data.seconds[11].result4);
  }

  return (
    <>
      <div className="Pre">
        <div className="PreContainer">
          <div className="PreMain">
            <h2>- Dコート -</h2>
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
                          <button className="CountDutton" onClick = {() => {setCountD1(countD1 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD1(countD1 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD1(countD1 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD1(countD1 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD1}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD2}</div>
                          <button className="CountDutton" onClick = {() => {setCountD2(countD2 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD2(countD2 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD2(countD2 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD2(countD2 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD3(countD3 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD3(countD3 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD3(countD3 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD3(countD3 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD3}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD4}</div>
                          <button className="CountDutton" onClick = {() => {setCountD4(countD4 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD4(countD4 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD4(countD4 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD4(countD4 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t5[0] && t5[0].name}</div>
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
                          <button className="CountDutton" onClick = {() => {setCountD5(countD5 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD5(countD5 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD5(countD5 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD5(countD5 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD5}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD6}</div>
                          <button className="CountDutton" onClick = {() => {setCountD6(countD6 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD6(countD6 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD6(countD6 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD6(countD6 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD7(countD7 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD7(countD7 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD7(countD7 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD7(countD7 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD7}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD8}</div>
                          <button className="CountDutton" onClick = {() => {setCountD8(countD8 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD8(countD8 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD8(countD8 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD8(countD8 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
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
                    <th className="TableContent__number">3</th>
                    <td className="TableContent__teamA">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD9(countD9 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD9(countD9 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD9(countD9 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD9(countD9 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD9}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD10}</div>
                          <button className="CountDutton" onClick = {() => {setCountD10(countD10 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD10(countD10 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD10(countD10 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD10(countD10 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD11(countD11 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD11(countD11 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD11(countD11 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD11(countD11 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD11}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD12}</div>
                          <button className="CountDutton" onClick = {() => {setCountD12(countD12 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD12(countD12 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD12(countD12 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD12(countD12 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
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
                    <th className="TableContent__number">4</th>
                    <td className="TableContent__teamA">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD13(countD13 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD13(countD13 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD13(countD13 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD13(countD13 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD13}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD14}</div>
                          <button className="CountDutton" onClick = {() => {setCountD14(countD14 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD14(countD14 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD14(countD14 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD14(countD14 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD15(countD15 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD15(countD15 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD15(countD15 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD15(countD15 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD15}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD16}</div>
                          <button className="CountDutton" onClick = {() => {setCountD16(countD16 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD16(countD16 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD16(countD16 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD16(countD16 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
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
                    <th className="TableContent__number">5</th>
                    <td className="TableContent__teamA">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD17(countD17 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD17(countD17 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD17(countD17 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD17(countD17 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD17}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD18}</div>
                          <button className="CountDutton" onClick = {() => {setCountD18(countD18 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD18(countD18 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD18(countD18 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD18(countD18 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD19(countD19 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD19(countD19 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD19(countD19 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD19(countD19 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD19}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD20}</div>
                          <button className="CountDutton" onClick = {() => {setCountD20(countD20 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD20(countD20 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD20(countD20 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD20(countD20 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
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
                    <th className="TableContent__number">6</th>
                    <td className="TableContent__teamA">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD21(countD21 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD21(countD21 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD21(countD21 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD21(countD21 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD21}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD22}</div>
                          <button className="CountDutton" onClick = {() => {setCountD22(countD22 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD22(countD22 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD22(countD22 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD22(countD22 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD23(countD23 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD23(countD23 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD23(countD23 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD23(countD23 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD23}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD24}</div>
                          <button className="CountDutton" onClick = {() => {setCountD24(countD24 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD24(countD24 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD24(countD24 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD24(countD24 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t6[0] && t6[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t1[0] && t1[0].name}</div>
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
                          <button className="CountDutton" onClick = {() => {setCountD25(countD25 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD25(countD25 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD25(countD25 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD25(countD25 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD25}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD26}</div>
                          <button className="CountDutton" onClick = {() => {setCountD26(countD26 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD26(countD26 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD26(countD26 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD26(countD26 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD27(countD27 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD27(countD27 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD27(countD27 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD27(countD27 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD27}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD28}</div>
                          <button className="CountDutton" onClick = {() => {setCountD28(countD28 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD28(countD28 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD28(countD28 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD28(countD28 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
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
                    <th className="TableContent__number">8</th>
                    <td className="TableContent__teamA">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD29(countD29 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD29(countD29 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD29(countD29 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD29(countD29 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD29}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD30}</div>
                          <button className="CountDutton" onClick = {() => {setCountD30(countD30 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD30(countD30 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD30(countD30 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD30(countD30 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD31(countD31 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD31(countD31 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD31(countD31 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD31(countD31 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD31}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD32}</div>
                          <button className="CountDutton" onClick = {() => {setCountD32(countD32 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD32(countD32 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD32(countD32 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD32(countD32 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
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
                    <th className="TableContent__number">9</th>
                    <td className="TableContent__teamA">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD33(countD33 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD33(countD33 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD33(countD33 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD33(countD33 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD33}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD34}</div>
                          <button className="CountDutton" onClick = {() => {setCountD34(countD34 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD34(countD34 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD34(countD34 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD34(countD34 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD35(countD35 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD35(countD35 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD35(countD35 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD35(countD35 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD35}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD36}</div>
                          <button className="CountDutton" onClick = {() => {setCountD36(countD36 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD36(countD36 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD36(countD36 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD36(countD36 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
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
                    <th className="TableContent__number">10</th>
                    <td className="TableContent__teamA">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD37(countD37 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD37(countD37 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD37(countD37 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD37(countD37 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD37}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD38}</div>
                          <button className="CountDutton" onClick = {() => {setCountD38(countD38 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD38(countD38 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD38(countD38 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD38(countD38 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD39(countD39 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD39(countD39 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD39(countD39 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD39(countD39 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD39}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD40}</div>
                          <button className="CountDutton" onClick = {() => {setCountD40(countD40 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD40(countD40 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD40(countD40 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD40(countD40 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t5[0] && t5[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t2[0] && t2[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">11</th>
                    <td className="TableContent__teamA">
                      <p>{t1[0] && t1[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD41(countD41 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD41(countD41 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD41(countD41 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD41(countD41 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD41}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD42}</div>
                          <button className="CountDutton" onClick = {() => {setCountD42(countD42 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD42(countD42 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD42(countD42 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD42(countD42 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD43(countD43 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD43(countD43 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD43(countD43 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD43(countD43 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD43}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD44}</div>
                          <button className="CountDutton" onClick = {() => {setCountD44(countD44 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD44(countD44 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD44(countD44 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD44(countD44 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__referee">
                      <div>{t5[0] && t5[0].name}</div>
                    </td>
                  </tr>
                  <tr className="TableContent">
                    <th className="TableContent__number">12</th>
                    <td className="TableContent__teamA">
                      <p>{t2[0] && t2[0].name}</p>
                    </td>
                    <td className="TableContent__point">
                      <div className="TableContent__flex">
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD45(countD45 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD45(countD45 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD45(countD45 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD45(countD45 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD45}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD46}</div>
                          <button className="CountDutton" onClick = {() => {setCountD46(countD46 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD46(countD46 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD46(countD46 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD46(countD46 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                        <div className="TableContent__count">
                          <button className="CountDutton" onClick = {() => {setCountD47(countD47 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD47(countD47 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD47(countD47 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD47(countD47 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                          <div className="CountPoint">{countD47}</div>
                          <div className="UnderLine">-</div>
                          <div className="CountPoint">{countD48}</div>
                          <button className="CountDutton" onClick = {() => {setCountD48(countD48 * 0)}} onMouseLeave={handleChangeCount4}>C</button>
                          <button className="CountDutton" onClick = {() => {setCountD48(countD48 - 1)}} onMouseLeave={handleChangeCount4}>-1</button>
                          <button className="CountDutton" onClick = {() => {setCountD48(countD48 + 1)}} onMouseLeave={handleChangeCount4}>+1</button>
                          <button className="CountDutton" onClick = {() => {setCountD48(countD48 + 5)}} onMouseLeave={handleChangeCount4}>+5</button>
                        </div>
                      </div>
                    </td>
                    <td className="TableContent__teamB">
                      <p>{t4[0] && t4[0].name}</p>
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


export default Dct;