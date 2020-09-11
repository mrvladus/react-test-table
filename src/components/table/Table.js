import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
// Import components
import Loading from "../loading/Loading";

// Table component
const Table = () => {
  //   State
  const [data, setData] = useState([]);
  const [hasErrors, setHasErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  const columns = [
    { title: "ID", field: "id" },
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
  ];

  // Get data from API
  useEffect(() => {
    setLoading(true);
    fetch(
      "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => setHasErrors(true));
  }, []);

  return (
    <div className="mx-auto">
      {loading ? (
        <Loading />
      ) : (
        <MaterialTable
          columns={columns}
          data={data}
          title=""
          options={{
            sorting: true,
            pageSize: 50,
          }}
        />
      )}
    </div>
  );
};

export default Table;
