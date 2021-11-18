import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll/";
import Add from "./Add";


const Las = () => {
  const [post, setPost] = useState([]);
  const [team, setTeam] = useState([]);
  const [number, setNumber] = useState([]);
  const [keys, setKeys] = useState([]);
  const [id, setId] = useState();


  useEffect(() => {
    getPost()
  },[])
  const getPost = async () => {
    const response = await axios.get('/api/posts'); 
    setPost(response.data.data[0])
    setKeys(Object.keys(response.data.data[0]));
  }

  useEffect(() => {
    getTeam()
  },[])
  const getTeam = async () => {
    const response = await axios.get('/api/teams');
    setTeam(response.data.data[0])
    setKeys(Object.keys(response.data.data[0]));
  }

  useEffect(() => {
    getNumber()
  },[])
  const getNumber = async () => {
    const response = await axios.get('/api/numbers');
    setNumber(response.data.data[0])
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
                          <form /* onClick={handleChangeNumber} method="post" action="/api/changenumber" */>
                            <select className="number" defaultValue={post.number} name="itemNumber" /* onChange={(e) => {setTeamId(post.id); setChangeNumber(e.target.value); }} */>
                              {number.map(number=>(
                                <option menuitem={number.number} key={number.id} name={number.id} value={number.number}>{number.number}</option>
                              ))}
                              <option hidden={post.number}>{post.number}</option>
                            </select>
                          </form>
                        </div>
                        <div className="point">{post.pre_point}</div>
                        <div className="score">{post.pre_score}</div>
                        <form /* action="/api/delPost" method="POST" onSubmit={handleDelete} */>
                          <input type="submit" className="edit" value="削除" name={post.id} onClick={() => setId(post.id)}></input>
                        </form>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Add />
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
                          <form /* onClick={handleChangeNumber} method="team" action="/api/changenumber" */>
                            <select className="number" defaultValue={team.number} name="itemNumber" /* onChange={(e) => {setTeamId(team.id); setChangeNumber(e.target.value); }} */>
                              {number.map(number=>(
                                <option menuitem={number.number} key={number.id} name={number.id} value={number.number}>{number.number}</option>
                              ))}
                              <option hidden={team.number}>{team.number}</option>
                            </select>
                          </form>
                        </div>
                        <div className="point">{team.pre_point}</div>
                        <div className="score">{team.pre_score}</div>
                        <form /* action="/api/delteam" method="team" onSubmit={handleDelete} */>
                          <input type="submit" className="edit" value="削除" name={team.id} onClick={() => setId(team.id)}></input>
                        </form>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Las;