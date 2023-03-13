import React, { useState } from "react"; ''
import styles from "../bookform/bookform.module.css"
import axios from "axios";
import SubmitButton from "components/button/Button";

export default function ReturnBook() {
  const [bookNameInput, setbookNameInput] = useState("");
  const [registerInput, setRegisterInput] = useState("");
  const [bookId, setBookId] = useState("");
  const [roleInput, setRoleInput] = useState("");

  const booknamehandler = (e) => {
    setbookNameInput(e.target.value);
  };
  const registerHandler = (e) => {
    setRegisterInput(e.target.value);
  };
  const bookIdHandler = (e) => {
    setBookId(e.target.value)
  }
  const rolehandler = (e) => {
    setRoleInput(e.target.value)
  }
  const formValues = {
    name: bookNameInput,
    register: registerInput,
    role: roleInput,
    bookid: bookId
  }
  const booksubmitHandler = (e) => {
    e.preventDefault()
    console.log(formValues)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      ...formValues
    });

    var requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow',
      headers: myHeaders
    };



    fetch("http://localhost:8000/returns", requestOptions)
      .then(res => (console.log(res?.data)))
      .catch(err => console.log(err))



  }
  return (
    <div className={styles.formcontent}>
      <form onSubmit={booksubmitHandler} className={styles.formcontainer}>
        <label htmlFor="name">Enter book name</label>
        <input
          type="text"
          id="name"
          required
          minLength={3}
          maxLength={15}
          onChange={booknamehandler}
          value={bookNameInput}
        />
        <label htmlFor="register">Enter Your Register No</label>
        <input
          type="text"
          id="register"
          onChange={registerHandler}
          value={registerInput}
        />
        <label htmlFor="bookid">Enter the Book Id</label>
        <input type="number" id="bookid" onChange={bookIdHandler} value={bookId} />
        <label htmlFor="department">Select The Role </label>
        <select onChange={rolehandler} value={roleInput} >
          <option>Select The Role </option>
          <option value="Student">Student</option>
          <option value="Faculty">Faculty</option>
        </select>
        <SubmitButton />
      </form>
    </div>
  );
}
