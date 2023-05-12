  import React,{useEffect, useState} from 'react'
  import collegelogo from "../../assests/images/collegelogo.svg"
  import styles from "./header.module.css"
  import Image from 'next/image'
  import { useRouter } from 'next/router'

  function Header() {
    const router = useRouter()
    const [result,setresult] =useState('')
    // let heading = router.pathname
    // let result =heading.slice(1);
    useEffect(()=>{
      if(router.pathname==="/booklist"){
        setresult("Book List")
      }
      if(router.pathname==="/faculty"){
        setresult("Faculty List")
      }
      if(router.pathname==="/student"){
        setresult("Student List")
      }
      if(router.pathname==="/return"){
        setresult("Return Form")
      }
      if(router.pathname==="/borrow"){
        setresult("Borrow Form")
      }
      if(router.pathname==="/maintainborrow"){
        setresult("Books To Return List")
      }
      if(router.pathname==="/report"){
       setresult("Reports")
      }
    },[router.pathname])
  
    return (  
      <div className={styles.header} >
        <div>
          <Image className={styles.image} src={collegelogo} width={100} height={100} />
        </div>
        <div className={styles.heading}>{result}</div>
        <div className={styles.library}>library</div>
      </div>
    )
  }

  export default Header
