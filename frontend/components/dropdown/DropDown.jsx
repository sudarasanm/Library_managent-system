import React, { useState } from 'react'

function DropDown() {
  const [dropDownValue, setdropDownVlaue] = useState()
  const handleChange = (e) => {
    setdropDownVlaue(e.target.value)
    console.log(dropDownValue)
  }
  return (
    <div>
      <select name={fields.name} onChange={handleChange}>
        {options.map(options => <option>{options.name}</option>)}
      </select>
    </div>
  )
}

export default DropDown
