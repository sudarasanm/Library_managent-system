import axios from "axios";
import SubmitButton from "components/button/Button";
import React from "react";
import { useState } from "react";
import styles from "./addfaculty.module.css"

function FacultyForm() {
  const [Name, setName] = useState('')
  const [employeeId, setemployeeId] = useState('')
  const [department, setDepartment] = useState('')
  const [gender, setgender] = useState('')
  const [phonenumber, setphonenumber] = useState()

  const submithandler = (e) => {
    e.preventDefault()
    console.log(formvalue)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      ...formvalue
    });

    var requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow',
      headers: myHeaders
    };



    fetch("http://localhost:8000/faculty/new", requestOptions)
      .then(res => (console.log(res?.data)))
      .then(res => {
        setName("")
        setemployeeId("")
        setDepartment("")
        setgender("")
        setphonenumber("")
      })
      .catch(err => console.log(err))

  }

  const nameinputhandler = (e) => {
    setName(e.target.value)

  }
  const employeeidhandler = (e) => {
    setemployeeId(e.target.value)
    console.log(employeeId)
  }
  const optionhandler = (e) => {
    setDepartment(e.target.value)

  }
  const genderhandler = (e) => {
    setgender(e.target.value)
  }
  const phonenumberhandler = (e) => {
    setphonenumber(e.target.value)

  }
  const formvalue = {
    name: Name,
    register: employeeId,
    department: department,
    gender: gender,
    phoneno: phonenumber
  }

  return (
    <div className={styles.formcontent}>
      <form onSubmit={submithandler} className={styles.formcontainer} >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required
          minLength={3}
          maxLength={15}
          onChange={nameinputhandler}
          value={Name}
        />
        <label htmlFor="employeeid">Enter Register No</label>
        <input
          type="text"
          id="employeeid"
          required
          minLength={4}
          maxLength={12}
          onChange={employeeidhandler}
          value={employeeId}
        />
        <label htmlFor="">Select Department</label>
        <select onChange={optionhandler} value={department}>
          <option value="Information Technology">Informaation Technology</option>
          <option value="Computer Science">Computer Science</option>
          <option value="ECE">Electronics and communication</option>
        </select>
        <label htmlFor="">Select Gender</label>
        <select onChange={genderhandler} value={gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Others</option>
        </select>
        <label htmlFor="phno">Enter phone number</label>
        <input type="number" onChange={phonenumberhandler} value={phonenumber} />
        <SubmitButton />
      </form>
    </div>
  );
}

export default FacultyForm;

