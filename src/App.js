import React, { useState } from "react";
import "./App.scss";
import styled from "styled-components";

import OnboardForm from "./components/OnboardForm";

export default function App() {
  const [hasAccount, updateHasAccount] = useState(false);

  return (
    <AppContainer className="App">
      <OnboardForm
        hasAccount={hasAccount}
        updateHasAccount={updateHasAccount}
      />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
