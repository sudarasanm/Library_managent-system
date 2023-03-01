import React from "react";


function DataTable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <div>
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
    </div>
  );
}

export default DataTable;
