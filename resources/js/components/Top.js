import React from "react";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Form from "./Form";
import Add from "./Add";
import Sort from "./Sort";


const Top = () => {
  const [team, setTeam] = useState([]);
  const [post, setPost] = useState([]);
  const [court, setCourt] = useState([]);
  const [number, setNumber] = useState([]);
  const [id, setId] = useState();
  const [changeCourt, setChangeCourt] = useState("");
  const [changeNumber, setChangeNumber] = useState("");
  // const [midchangeCourt, setMidChangeCourt] = useState("");
  // const [midchangeNumber, setMidChangeNumber] = useState("");
  // const [laschangeCourt, setLasChangeCourt] = useState("");
  // const [laschangeNumber, setLasChangeNumber] = useState("");
  const [teamId, setTeamId] = useState();
  const [keys, setKeys] = useState([]);
  const [sort, setSort] =useState({});

  console.log(team);
  const handleDelete = () => {
    axios.post('/api/delPost', {
      id: id
    });
  };
  const handleDelTeam = () => {
    axios.post('/api/delTeam', {
      id: id
    });
  };
  // 一般部門のくじ引き
  const handleChangeCourt = () => {
    axios.post('/api/changecourt', {
      id: teamId,
      court: changeCourt
    });
  };
  // 招待部門のくじ引き
  const handleChangeNumber = () => {
    axios.post('/api/changenumber', {
      id: teamId,
      number: changeNumber
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
    getPosts()
  },[])
  const getPosts = async () => {
    const response = await axios.get('/api/post');
    setPost(response.data.posts);
    setKeys(Object.keys(response.data.posts[0]));
  }
  useEffect(() => {
    getTeams()
  },[])
  const getTeams = async () => {
    const response = await axios.get('/api/team');
    setTeam(response.data.teams);
    setKeys(Object.keys(response.data.teams[0]));
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
          <div className="IndexContent__flex">
            <div className="IndexTable">
              <div className="IndexContent__header">
                <h1>Invitation Category</h1>
              </div>
              <div className="IndexTable__container">
                <div className="IndexTable__head">
                  <div className="id">No.</div>
                  <div className="name">チーム名</div>
                  <div className="court">くじ<br />番号</div>
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
                    key={keys[5]}
                    button={keys[5]}
                    handleSort={handleSort}
                    name="▼"
                  />
                  <Sort
                    key={keys[14]}
                    button={keys[14]}
                    handleSort={handleSort}
                    name="▼"
                  />
                  <Sort
                    key={keys[15]}
                    button={keys[15]}
                    handleSort={handleSort}
                    name="▼"
                  />
                </div>
              </div>
              <ul className="IndexTable__body">
                {post.map(post=>(
                    <li key={post.id}>
                      <div className="ItemData">
                        <div className="FlexLeft">
                          <div className="id">{post.id}</div>
                          <div className="name">{post.name}</div>
                        </div>
                        <div className="FlexRight">
                          <div className="change">
                            <form onClick={handleChangeNumber} method="post" action="/api/changenumber">
                              <select className="number" defaultValue={post.number} name="itemNumber" onChange={(e) => {setTeamId(post.id); setChangeNumber(e.target.value); }}>
                                {number.map(number=>(
                                  <option menuitem={number.number} key={number.id} name={number.id} value={number.number}>{number.number}</option>
                                ))}
                                  <option hidden={post.number}>{post.number}</option>
                              </select>
                            </form>
                          </div>
                          <div className="point">{post.sum_point}</div>
                          <div className="score">{post.sum_score}</div>
                          <form action="/api/delPost" method="POST" onSubmit={handleDelete}>
                            <input type="submit" className="edit" value="削除" name={post.id} onClick={() => setId(post.id)}></input>
                          </form>
                        </div>
                      </div>
                    </li>
                ))}
              </ul>
              <Form />
            </div>
            <div className="IndexTable">
              <div className="IndexContent__header">
                <h1>General Category</h1>
              </div>
              <div className="IndexTable__container">
                <div className="IndexTable__head">
                  <div className="id">No.</div>
                  <div className="name">チーム名</div>
                  <div className="court">くじ<br />番号</div>
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
                    key={keys[5]}
                    button={keys[5]}
                    handleSort={handleSort}
                    name="▼"
                  />
                  <Sort
                    key={keys[14]}
                    button={keys[14]}
                    handleSort={handleSort}
                    name="▼"
                  />
                  <Sort
                    key={keys[15]}
                    button={keys[15]}
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
                          <div className="change">
                            <form onClick={handleChangeCourt} method="post" action="/api/changecourt">
                              <select className="number" defaultValue={team.number} name="itemNumber" onChange={(e) => {setTeamId(team.id); setChangeCourt(e.target.value); }}>
                                {number.map(number=>(
                                  <option menuitem={number.number} key={number.id} name={number.id} value={number.number}>{number.number}</option>
                                ))}
                                  <option hidden={team.number}>{team.number}</option>
                              </select>
                            </form>
                          </div>
                          <div className="point">{team.sum_point}</div>
                          <div className="score">{team.sum_score}</div>
                          <form action="/api/delTeam" method="POST" onSubmit={handleDelTeam}>
                            <input type="submit" className="edit" value="削除" name={team.id} onClick={() => setId(team.id)}></input>
                          </form>
                        </div>
                      </div>
                    </li>
                ))}
              </ul>
              <Add />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;