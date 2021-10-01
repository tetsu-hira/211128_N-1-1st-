import React from "react";

const Form = () => {

  return (
    <form className="Form" method="POST" action="/api/add">
      <div className="FormContent">
        <label htmlFor="name"></label>
        <input type="text" className="FormContent__name" name="name" id="name" />
      </div>
      <button type="submit">＋ チーム登録</button>
    </form>
  )
}

export default Form;