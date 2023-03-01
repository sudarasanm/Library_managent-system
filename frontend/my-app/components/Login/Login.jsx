import Image from 'next/image'
import React from 'react'
import styles from "./login.module.css"
import collegelogo from "../../assests/images/collegelogo.svg"

function Login() {
  return (
    <>
    <div className={styles.logincard}>
        <Image className={styles.image} src={collegelogo} alt="collegelogo" width={100} height={100}  />
    <div className={styles.login}>
        <h2>Login</h2>
       <input type="text" placeholder='Enter the user name' />
       <input type="password" placeholder='Enter the Password' />
       <button>Submit</button>
       </div>
    </div>
    <div style={{height:"100vh"}} ></div>
    </>
  )
}

export default Login
