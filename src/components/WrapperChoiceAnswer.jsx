import React from "react";
import Choice from './Choose';
import Answer from './Answer';
const WrapperChoiceAnswer = ({numberQuestion, section, setGuess, guessFlag}) => (
  <div className="wrapper__choice-answer">
      <Choice numberQuestion = {numberQuestion} section = {section} setGuess = {setGuess} guessFlag = {guessFlag}/>
      <Answer numberQuestion = {numberQuestion} section = {section} chosen = {true}/>
  </div>
);
export default WrapperChoiceAnswer;
