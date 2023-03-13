import DataTable from "components/Datatable/DataTable";
import Layout from "components/layout/Layout";
import React, { useEffect, useState } from "react";
import Pagination from "components/pagination/Pagenation";
import styles from "../../styles/addbutton.module.css";
import FacultyForm from "components/addfaculty/AddFaculty";

function FacultyPage({ data }) {
  const [faculty, setfaculty] = useState(false)
  function handleclick() {
    setfaculty(!faculty)
  }


  const [query, setquery] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
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
  return (
    <Layout>
      <div>
        <div>
          <button className={styles.btn} onClick={handleclick}>Add Faculty</button>
          {faculty && <FacultyForm />}
        </div>
        <input
          className={styles.input}
          type="search"
          onChange={(e) => setquery(e.target.value)}
          value={query}
          placeholder="Search here..."
        />

        {!faculty && <div className={styles.datatable}>
          <DataTable data={search(CurrentPosts)} />
          <Pagination totalposts={data.length} postperpage={postPerPage} setcurrentPage={setcurrentPage} />
        </div>
        }
      </div>
    </Layout>
  );
}

export default FacultyPage;

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:8000/facultys");
  const data = await response.json()
  const datas = data.facultys
  return {
    props: {
      data: datas,
    },
  };
}
