import React, { useState } from "react"; ''
import styles from "./bookform.module.css"
import SubmitButton from "components/button/Button";
import axios from "axios";
import { headers } from "next.config";
export default function BookForm({setbookForm,setShowPopUp}) {
  const [bookNameInput, setbookNameInput] = useState("");
  const [invoiceInput, setinvoiceInput] = useState("");
  const [authorInput, setauthorInput] = useState("");
  const [isBn, setisBn] = useState(null);
  const [costInput, setcostInput] = useState(null);
  const [bookidInput, setbookidInput] = useState("");
  const [stocksInput, setstocksInput] = useState(null);
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
  const costHandler = (e) => {
    setcostInput(e.target.value)
  }
  const departmenthandler = (e) => {
    setdepartmentInput(e.target.value)
  }
  const isbnHandler = (e) => {
    setisBn(e.target.value)
  }
  const bookIdHandler = (e) => {
    setbookidInput(e.target.value)
  }
  const stocksHandler = (e) => {
    setstocksInput(e.target.value)
  }
  const formValues = {
    name: bookNameInput,
    author: authorInput,
    isbn: parseInt(isBn),
    cost: parseInt(costInput),
    department: departmentInput,
    bookid: bookidInput,
    stocks: parseInt(stocksInput)
  }
  const booksubmitHandler = (e) => {
    e.preventDefault()
    // console.log(formValues,"qwertyuio")

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
    fetch("http://localhost:3434/book/new", requestOptions)
      .then(res => {(console.log(res?.data))
        setShowPopUp(true)
        setbookForm(false)
      })
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
          onChange={bookinputhandler}
          value={bookNameInput}
        />
       
        <label htmlFor="author">Enter author name</label>
        <input
          type="text"
          id="author"
          onChange={authorHandler}
          value={authorInput}
          required

        />
        <label htmlFor="cost">Enter the Cost</label>
        <input type="number" id="cost" onChange={costHandler} value={costInput} required/>
        <label htmlFor="isbn">Enter the ISBN</label>
        <input type="text" id="isbn" onChange={isbnHandler} value={isBn} required/>
        <label htmlFor="BookID">Enter the Book ID</label>
        <input type="text" id="BookID" onChange={bookIdHandler} value={bookidInput} required/>
        <label htmlFor="Stocks">Enter the Stocks</label>
        <input type="number" id="Stocks" onChange={stocksHandler} value={stocksInput} required/>
        <label htmlFor="department">Select Department</label>
        <select onChange={departmenthandler} value={departmentInput} required>
          <option value="Information Technology">Informaation Technology</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Science">Science</option>
          <option value="cosmic">cosmic</option>
          <option value="Drama">drama</option>
          <option value="Maths">Maths</option>
        </select>
        <SubmitButton />
      </form>
    </div>
  );
}