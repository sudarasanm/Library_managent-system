import FacultyForm from 'components/addfaculty/AddFaculty'
import BorrowBook from 'components/borrowbook/BorrowBookForm'
import DataTable from 'components/Datatable/DataTable'
import Layout from 'components/layout/Layout'
import React, { useState } from 'react'
import styles from "../../styles/addbutton.module.css"

export default function BorrowPage() {
  const [borrow, setborrow] = useState(false)
  function handleclick() {
    setborrow(!borrow)
  }
  return (
    <Layout>
      <div>
        <BorrowBook />
      </div>
    </Layout>
  )
}


