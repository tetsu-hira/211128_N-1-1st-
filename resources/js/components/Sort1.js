import React from 'react';

const Sort1 = ({ button, handleSort1, name }) => {
  return (
    <div className="SortButton">
      <button
        onClick={() => handleSort1(button)}
        className={button} value={name}>
        {name}
      </button>
    </div>
  )
}

export default Sort1;