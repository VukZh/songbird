import React, { useState } from "react";

export const MainContext = React.createContext();

export const MainContextProvider = ({ children }) => {
  const [section, setSection] = useState(1);
  const [finishFlag, setFinal] = useState(false);
  const [guessFlag, setGuess] = useState(999);
  const [result, updateResult] = useState(0);

  return (
    <MainContext.Provider
      value={{
        section,
        setSection,
        finishFlag,
        setFinal,
        guessFlag,
        setGuess,
        result,
        updateResult,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
