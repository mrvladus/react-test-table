import React from "react";
import { Button } from "@material-ui/core";

const HasError = () => {
  return (
    <div>
      <h1>Error occured!</h1>
      <Button onClick={() => window.location.reload()}>Reload</Button>
    </div>
  );
};
export default HasError;
