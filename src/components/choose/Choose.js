import React from "react";
import { Button } from "@material-ui/core";

const Choose = ({ setShowTable, setUrlAddr }) => {
  return (
    <div className="mt-5 d-flex align-items-center">
      <h1>Choose Dataset: </h1>
      <Button
        variant="contained"
        color="primary"
        className="mx-4 my-4"
        onClick={() => {
          setShowTable(true);
          setUrlAddr(
            "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
          );
        }}
      >
        Big
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setShowTable(true);
          setUrlAddr(
            "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
          );
        }}
        className="mx-4 my-4"
      >
        Small
      </Button>
    </div>
  );
};

export default Choose;
