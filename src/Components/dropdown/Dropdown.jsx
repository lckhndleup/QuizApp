import React from 'react';
import "./Dropdown.css"

function Dropdown({data,setDifficultyChange}) {
  const ChangeDropdown = (event) => {
    setDifficultyChange(event.target.value)
  }
  return (
    <div className='dropdown'>
      <select onChange={ChangeDropdown} name="" id="">
        {
          data.map((data,index) => (
            <option key={index} value={data}>{data}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Dropdown