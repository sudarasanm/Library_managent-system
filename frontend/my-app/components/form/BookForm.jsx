// Book schema = name, invoice, author, isbn,
//  cost, department (should in drop down list [ 'Information Technology',
// 'Computer Science',
// 'Science',
// 'comsics',
// 'Drama',
// 'Maths'])

import React, { useState } from "react";''
import styles from "./bookform.module.css"
// import axios from "axios"
import Home from "../../src/pages/api/hello"
import SubmitButton from "components/button/Button";

function BookForm() {
  const [bookNameInput, setbookNameInput] = useState("");
  const [invoiceInput, setinvoiceInput] = useState("");
  const [authorInput, setauthorInput] = useState("");
  const [isBn, setisBn] = useState();
  const [costInput, setcostInput] = useState("");
  const [departmentInput, setdepartmentInput] = useState("");

  const bookinputhandler = (e) => {
    setbookNameInput(e.target.value);
  };
  const invoiceHandler = (e) => {
    setinvoiceInput(e.target.value);
  };
  const authorHandler = (e) => {
    setauthorInput(e.target.value);
  };
  const costHandler =(e)=>{
    setcostInput(e.target.value)
  }
  const departmenthandler=(e)=>{
    setdepartmentInput(e.target.value)
}
const isbnHandler=(e)=>{
    setisBn(e.target.value)
}
const formValues = {
  BookName:bookNameInput,
  Invoice:invoiceInput,
  Author:authorInput,
  IsBn:isBn,
  cost:costInput,
  Department:departmentInput
}
const booksubmitHandler=(e)=>{
  e.preventDefault();
  fetch("/api/hello",{
   method:"POST",
   body: JSON.stringify({formvalues:formValues}),
   headers:{
    'content-type':'application/json'
   }
  })
  .then(res=> res.json())
  .then((data)=>console.log(data))
  // .catch(err=>console.log(err))
   
}
  return (
    <div className={styles.formcontent}>
    <form onSubmit={booksubmitHandler} className={styles.formcontainer}>
      <input
        type="text"
        id="name"
        placeholder="Enter book name"
        required
        minLength={3}
        maxLength={15}
        onChange={bookinputhandler}
        value={bookNameInput}
      />
      <input
        type="text"
        placeholder="enter invoice"
        id="invoice"
        required
        minLength={4}
        maxLength={12}
        onChange={invoiceHandler}
        value={invoiceInput}
      />
      <input
        type="text"
        placeholder="enter author name"
        id="author"
        onChange={authorHandler}
        value={authorInput}
      />
      <input type="number" id="cost" onChange={costHandler}  value={costInput} />
      <select onChange={isbnHandler} value={isBn}   >
        <option>true</option>
        <option>false</option>
      </select>
      {/* <select onChange={yearhandler}>
        <option value="">1 Year</option>
        <option value="">2 Year</option>
        <option value="">3 Year</option>
        <option value="">4 Year</option>
      </select> */}
      <select onChange={departmenthandler} value={departmentInput} >
        <option value="it">Informaation Technology</option>
        <option value="cs">Computer Science</option>
        <option value="ece">Eclectronics and communication</option>
        <option value="Science">Science</option>
        <option value="cosmic">cosmic</option>
        <option value="drama">drama</option>
        <option value="Maths">Maths</option>
      </select>
      <SubmitButton/>
    </form>
    </div>
  );
}

export default BookForm;
