import React, { useState } from "react";
// Import components
import Table from "./components/table/Table";
import Choose from "./components/dataset/Choose";

const App = () => {
  // Dataset state
  const [urlAddr, setUrlAddr] = useState("");
  const [showTable, setShowTable] = useState(false);
  return (
    <div className="container d-flex flex-column align-items-center">
      {!showTable ? (
        <Choose setShowTable={setShowTable} setUrlAddr={setUrlAddr} />
      ) : (
        <Table urlAddr={urlAddr} />
      )}
    </div>
  );
};

export default App;
