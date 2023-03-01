import React from "react";
import { useState,useRef } from "react";

function FacultyForm() {
  const [Name, setName] = useState('')
  const [employeeId, setemployeeId] = useState('')
  const departmentRef=useRef()
  const [error,seterror]=useState('')

const submithandler = (e)=>{
  e.preventDefault()
}

  const nameinputhandler = (e) =>{
    setName(e.target.id)
    console.log(Name)
  }
  const employeeidhandler = (e) =>{
setemployeeId(e.target.value)
console.log(employeeId)
  }
  const optionhandler = () =>{
    selecteddept = departmentRef.current.value
    console.log(selecteddept)
  }
  
  return (
    <form onSubmit={submithandler}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="enter your Name"
        required
        minLength={3}
        maxLength={15}
        onChange={nameinputhandler}
        value={Name}
      />
      <label htmlFor="employeeid">Employee Id</label>
      <input
        type="text"
        placeholder="enter your employee id"
        id="employeeid"
        required
        minLength={4}
        maxLength={12}
        onChange={employeeidhandler}
        value={employeeId}
      />
      <select onChange={optionhandler}>
        <option value="it">Informaation Technology</option>
        <option value="cs">Computer Science</option>
        <option value="ece">Eclectronics and communication</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FacultyForm;
