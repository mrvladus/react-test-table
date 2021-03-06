import React, { useState } from "react";
import MaterialTable from "material-table";
// Import utils
import Loading from "../../utils/loading/Loading";
import useFetch from "../../utils/useFetch/useFetch";
import HasError from "../../utils/hasError/HasError";
// Import components
import Info from "../info/Info";
import AddRecord from "../addRecord/AddRecord";

// Table component
const Table = ({ urlAddr }) => {
  // Data state
  const [data, setData] = useState([]);

  // Define columns of the table
  const columns = [
    { title: "ID", field: "id" },
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
  ];

  // Get data from API
  const [loading, hasError] = useFetch(setData, urlAddr);
  return (
    <div
      className="d-flex flex-column align-items-center"
      data-testid="test-table"
    >
      {loading ? (
        <Loading />
      ) : hasError ? (
        <HasError />
      ) : (
        <div>
          <AddRecord data={data} setData={setData} />
          <MaterialTable
            columns={columns}
            data={data}
            title="Dataset"
            options={{
              sorting: true,
              pageSizeOptions: [5, 20, 50],
            }}
            detailPanel={(infoData) => {
              return <Info data={infoData} />;
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
