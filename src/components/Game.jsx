import React from "react";
import Header from "./Header";
import Question from "./Question";
import WrapperChoiceAnswer from "./WrapperChoiceAnswer";
import Next from "./Next";

const Game = ({section, numberQuestion}) => {
    // let randomQuestion = Math.floor(Math.random() * 6);

  return (
    <div className="wrapper">
      <Header section = {section}/>
      <Question numberQuestion ={numberQuestion} section = {section}/>
      <WrapperChoiceAnswer numberQuestion ={numberQuestion} section = {section}/>
      <Next />

    </div>
  );
};
export default Game;
