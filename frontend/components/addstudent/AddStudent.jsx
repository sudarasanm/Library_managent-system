import SubmitButton from 'components/button/Button';
import axios from "axios";
import React, { useState } from 'react'
import styles from "../addfaculty/addfaculty.module.css"


function AddStudent() {

  const [studentName, setstudentName] = useState('')
  const [registerNo, setregisterNo] = useState('')
  const [year, setyear] = useState('')
  const [studentDepartment, setStudentDepartment] = useState('')
  const [gender, setgender] = useState('')
  const [phonenumber, setphonenumber] = useState()

  const formvalues = {
    name: studentName,
    register: registerNo,
    gender: gender,
    department: studentDepartment,
    year: year,
    phoneno: phonenumber
  }

  const studentnameinputhandler = (e) => {
    setstudentName(e.target.value)
    console.log(studentName)
  }
  const registerNoHandler = (e) => {
    setregisterNo(e.target.value)
    console.log(registerNo)
  }
  const yearhandler = (e) => {
    // debugger
    setyear(e.target.value)
    console.log(e.target.value)
  }
  const departmenthandler = (e) => {
    setStudentDepartment(e.target.value)
    console.log(studentDepartment)
  }
  const genderhandler = (e) => {
    setgender(e.target.value);
    console.log(gender);
  }
  const phonenumberhandler = (e) => {
    setphonenumber(e.target.value)
    console.log(phonenumber);
  }

  const studentFormSubmiHandler = (e) => {
    e.preventDefault()
    console.log(formvalues)
   




    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      ...formvalues
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/book/new", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));



  }
  return (
    <div className={styles.formcontent}>
      <form onSubmit={studentFormSubmiHandler} className={styles.formcontainer}  >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required
          minLength={3}
          maxLength={15}
          onChange={studentnameinputhandler}
          value={studentName}
        />
        <label htmlFor="register_no">Employee Id</label>
        <input
          type="text"
          id="register_no"
          required
          minLength={4}
          maxLength={12}
          onChange={registerNoHandler}
          value={registerNo}
        />
        <label htmlFor="">Select year</label>
        <select onChange={yearhandler} value={year}>
          <option value="1 year">1 Year</option>
          <option value="2 year">2 Year</option>
          <option value="3 year">3 Year</option>
          <option value="4 year">4 Year</option>
        </select>
        <label htmlFor="">Select Department</label>
        <select onChange={departmenthandler} value={studentDepartment}>
          <option value="IT">IT</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
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
  )
}

export default AddStudent
