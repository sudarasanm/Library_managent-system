import Image from 'next/image'
import React from 'react'
import styles from "./login.module.css"
import { useRouter } from 'next/router'
import collegelogo from "../../assests/images/collegelogo.svg"
// 
function Login() {
  const router = useRouter()
  function handleclick() {
    router.replace("./homepage")
  }
  return (
    <>
      <div className={styles.logincard}>
        <Image src={collegelogo} width={100} height={100} />
        <div className={styles.login}>
          <h2>Login</h2>
          <input type="text" placeholder='Enter the user name' />
          <input type="password" placeholder='Enter the Password' />
          <button onClick={handleclick} >Submit</button>
        </div>
      </div>
    </>
  )
}

export default Login
