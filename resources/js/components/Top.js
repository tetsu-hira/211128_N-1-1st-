import React from "react";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Form from "./Form";
import Sort from "./Sort";


const Top = () => {
  const [team, setTeam] = useState([]);
  const [court, setCourt] = useState([]);
  const [number, setNumber] = useState([]);
  const [id, setId] = useState();
  const [teamList, setTeamList] = useState([]);
  const [changeCourt, setChangeCourt] = useState("");
  const [changeNumber, setChangeNumber] = useState("");
  const [midchangeCourt, setMidChangeCourt] = useState("");
  const [midchangeNumber, setMidChangeNumber] = useState("");
  const [teamId, setTeamId] = useState();
  const [keys, setKeys] = useState([]);
  const [sort, setSort] =useState({});
  
  console.log(team);
  const handleDelete = () => {
    axios.post('/api/del', {
      id: id
    });
  };
  // 予選リーグ用
  const handleChangeCourt = () => {
    axios.post('/api/changecourt', {
      id: teamId,
      court: changeCourt
    });
  };
  const handleChangeNumber = () => {
    axios.post('/api/changenumber', {
      id: teamId,
      number: changeNumber
    });
  };
  // 中間リーグ用
  const handleMidChangeCourt = () => {
    axios.post('/api/changemidcourt', {
      id: teamId,
      midcourt: midchangeCourt
    });
    console.log(teamId);
    console.log(midchangeCourt);
  };
  const handleMidChangeNumber = () => {
    axios.post('/api/changemidnumber', {
      id: teamId,
      midnumber: midchangeNumber
    });
  };
  // ソート機能
  const handleSort = (key) => {
    if (sort.key === key) {
      setSort({ ...sort, order: -sort.order });
    } else {
      setSort({
        key: key,
        order: 1
      })
    }
  };
  let sortedTeams = useMemo(() => {
    let _sortedTeams = team;
    if (sort.key) {
      _sortedTeams = _sortedTeams.sort((a, b) => {
        a = a[sort.key];
        b = b[sort.key];

        if(a === b) {
          return 0;
        }
        if(a > b) {
          return 1 * sort.order;
        }
        if(a < b) {
          return -1 * sort.order;
        }
      });
    }
    return _sortedTeams;
  }, [sort]);

  // useState(() => {
  //   console.log("ソート");

  //   axios.get('/api/post')
  //     .then((res) => {
  //       setKeys(Object.keys(res.data[0]));
  //       console.log(Object.keys(res.data[0]));
  //     });
  // },[]);


  useEffect(() => {
    getUsers()
  },[])
  const getUsers = async () => {
    const response = await axios.get('/api/post');
    setTeam(response.data.posts);
    setKeys(Object.keys(response.data.posts[0]));
  }

  useEffect(() => {
    getCourt()
  },[])
  const getCourt = async () => {
    const response = await axios.get('/api/court');
    setCourt(response.data.courts)
  }

  useEffect(() => {
    getNumber()
  },[])
  const getNumber = async () => {
    const response = await axios.get('/api/number');
    setNumber(response.data.numbers)
  }

  return (
    <>
      <div className="Index">
        <div className="IndexContainer">
          <div className="IndexContent__header">
            <h1>ResultSheet</h1>
          </div>
          <div className="IndexTable">
            <div className="IndexTable__container">
              <div className="IndexTable__head">
                <div className="id">No.</div>
                <div className="name">チーム名</div>
                <div className="point">予選<br />勝ち点</div>
                <div className="score">予選<br />得失点</div>
                <div className="court">予選<br />コート</div>
                <div className="point">中間<br />勝ち点</div>
                <div className="score">中間<br />得失点</div>
                <div className="court">中間<br />コート</div>
                <div className="sum">総合<br />勝ち点</div>
                <div className="sum">総合<br />得失点</div>
                <div className="rank"></div>
              </div>
              <div className="IndexButton>">
                <Sort
                  key={keys[0]}
                  button={keys[0]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[1]}
                  button={keys[1]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[4]}
                  button={keys[4]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[5]}
                  button={keys[5]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[2]}
                  button={keys[2]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[3]}
                  button={keys[3]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[6]}
                  button={keys[6]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[7]}
                  button={keys[7]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[10]}
                  button={keys[10]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[11]}
                  button={keys[11]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[8]}
                  button={keys[8]}
                  handleSort={handleSort}
                  name="▼"
                />
                <Sort
                  key={keys[9]}
                  button={keys[9]}
                  handleSort={handleSort}
                  name="▼"
                />
              </div>
            </div>
            <ul className="IndexTable__body">
              {team.map(team=>(
                  <li key={team.id}>
                    <div className="ItemData">
                      <div className="FlexLeft">
                        <div className="id">{team.id}</div>
                        <div className="name">{team.name}</div>
                      </div>
                      <div className="FlexRight">
                        <div className="point">{team.pre_point}</div>
                        <div className="score">{team.pre_score}</div>
                        <div className="change">
                          <form onClick={handleChangeCourt} method="post" action="/api/changecourt">
                            <select className="court" defaultValue={team.court} name="itemCourt" onChange={(e) => {setTeamId(team.id); setChangeCourt(e.target.value); }}>
                              {court.map(court=>(
                                <option menuitem={court.court} key={court.id} name={court.id} value={court.court}>{court.court}</option>
                              ))}
                                <option hidden={team.court}>{team.court}</option>
                            </select>
                          </form>
                        </div>
                        <div className="change">
                          <form onClick={handleChangeNumber} method="post" action="/api/changenumber">
                            <select className="number" defaultValue={team.number} name="itemNumber" onChange={(e) => {setTeamId(team.id); setChangeNumber(e.target.value); }}>
                              {number.map(number=>(
                                <option menuitem={number.number} key={number.id} name={number.id} value={number.number}>{number.number}</option>
                              ))}
                                <option hidden={team.number}>{team.number}</option>
                            </select>
                          </form>
                        </div>
                        <div className="point">{team.mid_point}</div>
                        <div className="score">{team.mid_score}</div>
                        <div className="change">
                          <form onClick={handleMidChangeCourt} method="post" action="/api/midchangecourt">
                            <select className="court" defaultValue={team.mid_court} name="itemCourt" onChange={(e) => {setTeamId(team.id); setMidChangeCourt(e.target.value); }}>
                              {court.map(court=>(
                                <option menuitem={court.court} key={court.id} name={court.id} value={court.court}>{court.court}</option>
                              ))}
                                <option hidden={team.mid_court}>{team.mid_court}</option>
                            </select>
                          </form>
                        </div>
                        <div className="change">
                          <form onClick={handleMidChangeNumber} method="post" action="/api/midchangenumber">
                            <select className="number" defaultValue={team.mid_number} name="itemNumber" onChange={(e) => {setTeamId(team.id); setMidChangeNumber(e.target.value); }}>
                              {number.map(number=>(
                                <option menuitem={number.number} key={number.id} name={number.id} value={number.number}>{number.number}</option>
                              ))}
                                <option hidden={team.mid_number}>{team.mid_number}</option>
                            </select>
                          </form>
                        </div>
                        <div className="point">{team.sum_point}</div>
                        <div className="score">{team.sum_score}</div>
                        <form action="/api/del" method="POST" onSubmit={handleDelete}>
                          <input type="submit" className="edit" value="削除" name={team.id} onClick={() => setId(team.id)}></input>
                        </form>
                      </div>
                    </div>
                  </li>
              ))}
            </ul>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;