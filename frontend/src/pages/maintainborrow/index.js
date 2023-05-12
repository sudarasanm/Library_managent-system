import DataTable from "components/Datatable/DataTable";
import Layout from "components/layout/Layout";
import React, { useState } from "react";
import Pagination from "components/pagination/Pagenation";
import styles from "../../styles/reports.module.css";


function BookPage({ data,counts }) {
    const [query, setquery] = useState("");
    const [currentPage, setcurrentPage] = useState(1);
    const [postPerPage] = useState(8);
    const LastPostIndex = currentPage * postPerPage;
    const FirstPostIndex = LastPostIndex - postPerPage;
    const CurrentPosts = data.slice(FirstPostIndex, LastPostIndex)

    console.log("MB",data);
    {
        data.map((data)=>{
            data.purchaseDate=(data.purchaseDate?.slice(0,10))

            return data
        })
    }

    function search(row) {
        const columns = row[0] && Object.keys(row[0]);
        return row.filter((row) =>
            columns.some(
                (column) => row[column].toString().toLowerCase().indexOf(query) > -1
            )
        );
    }
    // console.log(typeof(data))
    // <iframe width="700" height="447"  src="https://www.youtube.com/embed/Ccaz3yJhaVA?autoplay=1&mute=1&loop=1&rel=0" ></iframe>
    const getBookData= ()=>
    {
      if(!query)
      {
        return  search(CurrentPosts)
      }
      else
      {
        return  search(data)
      }
    }
        return (
            
            <Layout>
                <div>
                    <p>Number of Books to return: {counts}</p>
                    <div className={styles.card}>
                        <input
                            className={styles.input}
                            type="search"
                            onChange={(e) => setquery(e.target.value)}
                            value={query}
                            placeholder="Search here..."
                        />
                    </div>
                    <div className={styles.datatables}>
                        <DataTable data={search(getBookData())} />
                        <Pagination totalposts={data.length} postperpage={postPerPage} setcurrentPage={setcurrentPage} />
                    </div>
                </div>
            </Layout>
        );
}

export default BookPage;

export async function getServerSideProps(context) {
    const response = await fetch("http://localhost:3434/maintainborrows");
    const data = await response.json()
    const datas = data.maintain
    const count = data.count
    return {
        props: {
            data: datas,
            counts:count
        },
    };
}


