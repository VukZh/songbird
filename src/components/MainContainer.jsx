import React, { useContext } from "react";
import Game from "./Game";
import Result from "./Result";

import { MainContext } from "../context/mainContext";
import { StepContextProvider } from "../context/stepContext";

const Main = () => {
  const valueContext = useContext(MainContext);

  let randomQuestion;
  if (valueContext.guessFlag === 999) {
    randomQuestion = Math.floor(Math.random() * 6);
  } else {
    randomQuestion = valueContext.guessFlag;
  }
  if (!valueContext.finishFlag) {
    return (
      <StepContextProvider>
        <Game numberQuestion={randomQuestion} />
      </StepContextProvider>
    );
  }
  return <Result />;
};
export default Main;
