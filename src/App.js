import React, { useState } from "react";
// Import components
import Table from "./components/table/Table";
import Choose from "./components/dataset/Choose";

const App = () => {
  // URL adress state
  const [urlAddr, setUrlAddr] = useState("");
  // Dataset state
  const [showTable, setShowTable] = useState(false);
  return (
    <div className="container d-flex flex-column align-items-center">
      {!showTable ? (
        // Show buttons until they where clicked
        <Choose setShowTable={setShowTable} setUrlAddr={setUrlAddr} />
      ) : (
        // Start loading and show table
        <Table urlAddr={urlAddr} />
      )}
    </div>
  );
};

export default App;
