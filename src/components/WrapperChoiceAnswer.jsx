import React from "react";
import Choice from './Choice';
import Answer from './Answer';
const WrapperChoiceAnswer = ({numberQuestion, section}) => (
  <div className="wrapper__choice-answer">
      <Choice numberQuestion = {numberQuestion} section = {section}/>
      <Answer numberQuestion = {numberQuestion} section = {section}/>
  </div>
);
export default WrapperChoiceAnswer;
