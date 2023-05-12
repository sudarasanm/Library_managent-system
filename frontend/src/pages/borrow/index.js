import FacultyForm from 'components/addfaculty/AddFaculty'
import BorrowBook from 'components/borrowbook/BorrowBookForm'
import DataTable from 'components/Datatable/DataTable'
import Layout from 'components/layout/Layout'
import React, { useState } from 'react'
import styles from "../../styles/addbutton.module.css"
import Popup from 'components/popup/Popup'

export default function BorrowPage() {
  const [borrow, setborrow] = useState(false)
  const [showPopUp,setShowPopUp]=useState(false)
  const [response,setresponse]= useState("successfully book borrowed")
  function handleclick() {
    setborrow(!borrow)
  }
  return (
    <Layout>
      <div>
        <BorrowBook setborrow={setborrow} setShowPopUp={setShowPopUp} setresponse={setresponse}/>
      </div>
      { showPopUp && <Popup onClick={()=>setShowPopUp(!showPopUp)}>
        {response}
      </Popup>}
    </Layout>
  )
}


