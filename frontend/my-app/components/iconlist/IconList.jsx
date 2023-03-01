import React from 'react'
import Link from 'next/link'
import styles from "./iconlists.module.css"

function IconList() {
  return (
    <ul className={styles.iconlist} >
      <li><Link href="/book" >Book</Link></li>
      <li><Link href="/faculty">Faculty</Link></li>
      <li><Link href="/student">student</Link></li>
      <li><Link href="/borrowlist">Borrow List</Link></li>
      <li><Link href="/returnlist">Return List</Link></li>
    </ul>
  )
}

export default IconList