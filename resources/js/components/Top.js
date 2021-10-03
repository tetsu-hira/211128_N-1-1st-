import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";


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

  useEffect(() => {
    getUsers()
  },[])
  const getUsers = async () => {
    const response = await axios.get('/api/post');
    setTeam(response.data.posts)
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