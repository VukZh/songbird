import React, { useState } from "react";

export const StepContext = React.createContext();

export const StepContextProvider = ({ children }) => {
  const [currentSel, setCurrentSel] = useState(999);
  const [selectedArr, setFlag] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [chosen, setChoose] = useState(false);

  return (
    <StepContext.Provider
      value={{
        currentSel,
        setCurrentSel,
        selectedArr,
        setFlag,
        chosen,
        setChoose,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};
