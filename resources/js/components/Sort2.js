import React from 'react';

const Sort2 = ({ button, handleSort2, name }) => {
  return (
    <div className="SortButton">
      <button
        onClick={() => handleSort2(button)}
        className={button} value={name}>
        {name}
      </button>
    </div>
  )
}

export default Sort2;