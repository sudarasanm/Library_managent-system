import React, { use } from "react";
import { useState } from "react";
import axios from "axios";

import DataTable from "components/Datatable/DataTable";
import Pagination from "components/Pagination/Pagination";

function Bookpage({ data }) {
  const [query, setquery] = useState("");
  const [currentPage, setcurrentPage] = useState();
  const [postPerPage] = useState(20);
  const LastPostIndex = currentPage * postPerPage;
  const FirstPostIndex = LastPostIndex - postPerPage;
  const CurrentPosts= data.slice(FirstPostIndex,LastPostIndex)
  function search(row) {
    const columns = row[0] && Object.keys(row[0]);
    return row.filter((row) =>
      columns.some(
        (column) => row[column].toString().toLowerCase().indexOf(query) > -1
      )
    );
  }
  return (
    <div>
      <div>
        <input
          type="search"
          onChange={(e) => setquery(e.target.value)}
          value={query}
        />
      </div>
      <div>
        <DataTable data={search(CurrentPosts)} />
        <Pagination totalposts={data.length} postperpage={postPerPage} setcurrentPage={setcurrentPage} />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const apidata = response.data;
  console.log(apidata);
  return { props: { data: apidata } };
}

export default Bookpage;
