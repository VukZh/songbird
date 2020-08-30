import React from "react";
import "./App.css";
import Main from "./components/MainContainer.jsx";

import {MainContextProvider} from "./context/mainContext"

function App() {
  return (
    <MainContextProvider>
      <Main></Main>
    </MainContextProvider>
  );
}

export default App;
