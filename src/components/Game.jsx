import React from "react";
import Header from "./Header";
import Question from "./Question";
import WrapperChoiceAnswer from "./WrapperChoiceAnswer";
import Next from "./Next";
const Game = () => {
    let randomQuestion = Math.floor(Math.random() * 6);

  return (
    <div className="wrapper">
      <Header />
      <Question numberQuestion ={randomQuestion}/>
      <WrapperChoiceAnswer numberQuestion ={randomQuestion}/>
      <Next />
    </div>
  );
};
export default Game;
