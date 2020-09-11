import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const AddRecord = ({ data, setData }) => {
  //Setting state for the form fields
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Set state of the form visibility
  const [visibleForm, setVisibleForm] = useState(false);

  // Add new data to the data array
  const submitHandler = (e) => {
    e.preventDefault();
    setData([
      {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: {
          streetAddress: "9792 Mattis Ct",
          city: "Waukesha",
          state: "WI",
          zip: "22178",
        },
        description: "et lacus magna dolor...",
      },
      ...data,
    ]);
    setId("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setVisibleForm(false);
  };
  return (
    <div>
      {!visibleForm ? (
        <Button
          variant="contained"
          color="primary"
          className="my-4"
          onClick={() => setVisibleForm(true)}
        >
          ADD
        </Button>
      ) : (
        <form className="my-4" onSubmit={submitHandler}>
          <div className="mt-2">
            <TextField
              type="number"
              required
              label="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <TextField
              type="text"
              required
              label="First name"
              value={firstName}
              className="mr-4"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              type="text"
              required
              label="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <TextField
              type="email"
              required
              label="Email"
              value={email}
              className="mr-4"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="number"
              required
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="mt-4"
            disabled={
              !id || !firstName || !lastName || !email || !phone ? true : false
            }
          >
            ADD RECORD
          </Button>
        </form>
      )}
    </div>
  );
};

export default AddRecord;
