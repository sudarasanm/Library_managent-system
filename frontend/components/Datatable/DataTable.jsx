import React from "react";
import axios from "axios";
import styles from "./datatable.module.css"


function DataTable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default DataTable;

