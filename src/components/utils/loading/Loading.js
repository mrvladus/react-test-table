import React from "react";
import { CircularProgress } from "@material-ui/core";

// Loading indicator
const Loading = () => {
  return (
    <div className="mt-5">
      <CircularProgress />
    </div>
  );
};

export default Loading;
