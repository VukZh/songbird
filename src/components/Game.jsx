import React from "react";
import Header from "./Header";
import Question from "./Question";
import WrapperChoiceAnswer from "./WrapperChoiceAnswer";
import Next from "./Next";

const Game = ({ numberQuestion }) => {
  return (
    <div className="wrapper">
      <Header />
      <Question numberQuestion={numberQuestion} />
      <WrapperChoiceAnswer numberQuestion={numberQuestion} />
      <Next />
    </div>
  );
};
export default Game;
