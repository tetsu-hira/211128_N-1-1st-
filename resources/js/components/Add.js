import React from "react";

const Add = () => {

  return (
    <form className="Form" method="POST" action="/api/addTeam">
      <div className="FormContent">
        <label htmlFor="id"></label>
        <input type="text" className="FormContent__id" name="id" id="id" />
        <label htmlFor="name"></label>
        <input type="text" className="FormContent__name" name="name" id="name" />
      </div>
      <button type="submit">＋ チーム登録</button>
    </form>
  )
}

export default Add;