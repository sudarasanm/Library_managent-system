import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./login.module.css"
import { useRouter } from 'next/router'
import collegelogo from "../../assests/images/collegelogo.svg"
import axios from 'axios'

function Login() {
  const router = useRouter()
  const [email,setemail]=useState('')
  const [password,setpassword]= useState('')
  function passwordchange(e){
    setpassword(e.target.value)
  }
  function emailchange(e){
    setemail(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    axios.post("http://localhost:3434/login",{
      username:email,
      password:password
    })
    .then(res=>{console.log(res,"response");if(res?.data?.success){
      router.replace("./booklist")
    }})
    .catch(err=>console.log(err,"err"))
   
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.logincard}>
        <Image src={collegelogo} width={100} height={100} />
        <div className={styles.login}>
          <h2>Login</h2>
          <input type="text" placeholder='Enter the user name' name="username" value={email} onChange={emailchange} required />
          <input type="password" placeholder='Enter the Password' name="password" value={password} onChange={passwordchange} required />
          <button type='submit'>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default Login
