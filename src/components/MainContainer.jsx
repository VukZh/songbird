import React from "react";
import Game from "./Game";
import Result from "./Result";

const Main = () => {
  let finishFlag = true;
  if (finishFlag) {
    return <Game />;
  }
  return <Result />;
};

export default Main;
