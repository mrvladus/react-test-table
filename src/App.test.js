import React from "react";
import "jest-canvas-mock";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";

test("Buttons Big and Small showing", async () => {
  const { getByText } = render(<App />);
  expect(getByText("Small")).toBeInTheDocument();
  expect(getByText("Big")).toBeInTheDocument();
});

test("Button Small clicked, Table renders, ADD clicked, Input form renders", async () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText("Small"));

  const add = await waitForElement(() => getByText("ADD"));
  expect(add).toBeInTheDocument();

  const table = getByText("Dataset");
  expect(table).toBeInTheDocument();

  fireEvent.click(add);
  expect(getByText("ADD RECORD")).toBeInTheDocument();
});
