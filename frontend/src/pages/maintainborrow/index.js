import DataTable from "components/Datatable/DataTable";
import Layout from "components/layout/Layout";
import React, { useState } from "react";
import Pagination from "components/pagination/Pagenation";
import styles from "../../styles/reports.module.css";

function BookPage({ data }) {
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
    if (data === []) {
        return <p>No Books To Return</p>
    }
    return (
        <Layout>
            <div>

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
                    <DataTable data={search(CurrentPosts)} />
                    <Pagination totalposts={data.length} postperpage={postPerPage} setcurrentPage={setcurrentPage} />
                </div>
            </div>
        </Layout>
    );
}

export default BookPage;

export async function getServerSideProps(context) {
    const response = await fetch("http://localhost:8000/maintainborrows");
    const data = await response.json()
    const datas = data.maintain
    return {
        props: {
            data: datas,
        },
    };
}


