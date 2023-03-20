import React from 'react'
import collegelogo from "../../assests/images/collegelogo.svg"
import styles from "./header.module.css"
import Image from 'next/image'

function Header({heading}) {
  // const heading = "Book List"
  return (  
    <div className={styles.header} >
      <div>
        <Image className={styles.image} src={collegelogo} width={100} height={100} />
      </div>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.library}>library</div>
    </div>
  )
}

export default Header
