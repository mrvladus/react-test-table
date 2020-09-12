import React from "react";
import { Button } from "@material-ui/core";

// Error message
const HasError = () => {
  return (
    <div className="d-flex mt-5">
      <h1 className="mr-4">Error occured!</h1>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => window.location.reload()}
      >
        Reload
      </Button>
    </div>
  );
};

export default HasError;
