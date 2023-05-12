import BookForm from "components/bookform/BookForm";
import DataTable from "components/Datatable/DataTable";
import Layout from "components/layout/Layout";
import React, { useEffect, useState } from "react";
import Pagination from "components/pagination/Pagenation";
import styles from "../../styles/addbutton.module.css";
import Download from "components/downloade/Download";
import Upload from "components/Upload/Upload";
import Popup from "components/popup/Popup";

function BookPage({ data,counts }) {
  const [bookForm, setbookForm] = useState(false)
  function handleclick() {
    setbookForm(!bookForm)
  }
  const [query, setquery] = useState("");
  const [searchStatus, setSearchStatus] = useState(false);
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
          <button className={styles.btn} onClick={handleclick}>Add Book</button>
          {bookForm && <BookForm setbookForm={setbookForm} setShowPopUp={setShowPopUp}/>}
          <p>Number of Books: {counts}</p>
        </div>
        <input
          className={styles.input}
          type="search"

          onChange={(e) => 
              setquery(e.target.value)
              
          }
          value={query}
          placeholder="Search here..."
        />
        {console.log("query to ",{query})}

        {!bookForm && <div className={styles.datatable}>
          <DataTable data={ search(getBookData())} />
         {query==="" && 
          <Pagination totalposts={data.length} postperpage={postPerPage} setcurrentPage={setcurrentPage} />
          }
          </div>
        }
      </div>
      <>  
     <button className={styles.btn} style={{position: 'absolute',
    bottom: '35px', 
    right: '21px',
    cursor: 'pointer' }}>
      <Upload url = {'http://localhost:3434/uploadbookdata/new'} />
      </button> 
      </>
     { showPopUp && <Popup onClick={()=>setShowPopUp(!showPopUp)}>
        Book added successfully
      </Popup>}
    </Layout>
  );
}

export default BookPage;

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3434/books");
  const data = await response.json()
  const datas = data.books
  const count = data.count
  return {
    props: {
      data: datas,
      counts:count
    },
  };
}
