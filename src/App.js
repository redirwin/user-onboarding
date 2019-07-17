import React from "react";
import "./App.scss";
import { Normalize } from "@smooth-ui/core-sc";

import OnboardForm from "./components/OnboardForm";

export default function App() {
  return (
    <div className="App">
      <Normalize />
      <OnboardForm />
    </div>
  );
}
