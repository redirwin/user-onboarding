import React from "react";
import "./App.scss";
import { Normalize } from "@smooth-ui/core-sc";

import Form from "./components/Form";

export default function App() {
  return (
    <div className="App">
      <Normalize />
      <Form />
    </div>
  );
}
