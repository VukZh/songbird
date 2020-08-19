import React from "react";
import Header from "./Header";
import Question from "./Question";
import WrapperChoiceAnswer from "./WrapperChoiceAnswer";
import Next from "./Next";


const Game = ({section, numberQuestion, updateSection, setFinal, setGuess, guessFlag}) => {
    // let randomQuestion = Math.floor(Math.random() * 6);

  return (
    <div className="wrapper">
      <Header section = {section}/>
      <Question numberQuestion ={numberQuestion} section = {section} guess = {false} guessFlag = {guessFlag}/>
      <WrapperChoiceAnswer numberQuestion ={numberQuestion} section = {section} setGuess = {setGuess}/>
      <Next section = {section} updateSection = {updateSection} setFinal = {setFinal} numberQuestion = {numberQuestion} guessFlag = {guessFlag} setGuess = {setGuess}/>

    </div>
  );
};
export default Game;
