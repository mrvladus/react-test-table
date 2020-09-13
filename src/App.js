import React, { useState } from "react";
// Import components
import Table from "./components/mainTable/table/Table";
import Choose from "./components/choose/Choose";

const App = () => {
  // URL adress state
  const [urlAddr, setUrlAddr] = useState("");
  // Dataset state
  const [showTable, setShowTable] = useState(false);
  return (
    <div
      className="container d-flex flex-column align-items-center"
      data-testid="test-app"
    >
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
