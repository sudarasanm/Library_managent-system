import DataTable from "components/Datatable/DataTable";
import Layout from "components/layout/Layout";
import React, { useEffect, useState } from "react";
import Pagination from "components/pagination/Pagenation";
import styles from "../../styles/addbutton.module.css";
import StudentForm from "components/addstudent/AddStudent"
import Upload from "components/Upload/Upload";
import Popup from "components/popup/Popup";

function StudentPage({ data,counts }) {
  const [student, setstudent] = useState(false)
  function handleclick() {
    setstudent(!student)
  }


  const [query, setquery] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [showPopUp,setShowPopUp]=useState(false)
  const [postPerPage] = useState(8);
  const LastPostIndex = currentPage * postPerPage;
  const FirstPostIndex = LastPostIndex - postPerPage;
  const CurrentPosts = data.slice(FirstPostIndex, LastPostIndex)
  function search(row) {
    const columns = row[0] && Object.keys(row[0]);
    return row.filter((row) =>
      columns.some(
        (column) => row[column].toString().toLowerCase().indexOf(query) > -1
      )
    );
  }
  const getBookData= ()=>
  {
    if(!query)
    {
      return   search(CurrentPosts)
    }
    else
    {
      return  search(data)
    }
  }
  return (
    <Layout>
      <div>
        <div>
          <button className={styles.btn} onClick={handleclick}>Add Student</button>
          {student && < StudentForm setShowPopUp={setShowPopUp} setstudent={setstudent}/>}
          <p>Number of Students: {counts}</p>
        </div>
        <input
          className={styles.input}
          type="search"
          onChange={(e) => setquery(e.target.value)}
          value={query}
          placeholder="Search here..."
        />

        {!student && <div className={styles.datatable}>
          <DataTable data={search(getBookData())} />
          <Pagination totalposts={data.length} postperpage={postPerPage} setcurrentPage={setcurrentPage} />
        
        </div>
        }
      </div>
      <>  
     <button className={styles.btn} style={{position: 'absolute',
    bottom: '35px', 
    right: '21px',
    cursor: 'pointer' }}>
      <Upload url = {'http://localhost:3434/uploadstudentdata/new'} />
      </button> 
      </>
      { showPopUp && <Popup onClick={()=>setShowPopUp(!showPopUp)}>
        Student added successfully
      </Popup>}
    </Layout>
  );
}

export default StudentPage;

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3434/students");
  const data = await response.json()
  const datas = data.students
  const count = data.count
  return {
    props: {
      data: datas,
      counts:count
    },
  };
}

