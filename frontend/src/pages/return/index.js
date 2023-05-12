import FacultyForm from 'components/addfaculty/AddFaculty'
import Layout from 'components/layout/Layout'
import ReturnBook from 'components/ReturnBook/ReturnBook'
import React, { useState } from 'react'
import styles from "../../styles/addbutton.module.css"
import Popup from 'components/popup/Popup'

export default function ReturnPage() {
  const [returnBook, setreturnBook] = useState(false)
  const [response,setresponse]= useState("successfully book returned")
  const [showPopUp,setShowPopUp]=useState(false)
  function handleclick() {
    setreturnBook(!returnBook)
  }
  return (
    <Layout>

      <div>
        <ReturnBook setShowPopUp={setShowPopUp}setreturnBook={setreturnBook}setresponse={setresponse}/>
      </div>
      { showPopUp && <Popup onClick={()=>setShowPopUp(!showPopUp)}>
        {response}
      </Popup>}
    </Layout>
  );
}
async function getstaticprops() {
  const response = await axios("url");
  return {
    props: {
      data: response.data,
    },
  };
}

