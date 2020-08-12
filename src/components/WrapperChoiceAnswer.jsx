import React from "react";
import Choice from './Choice';
import Answer from './Answer';
const WrapperChoiceAnswer = ({numberQuestion}) => (
  <div className="wrapper__choice-answer">
      <Choice numberQuestion = {numberQuestion} arrQuestion = {['111', '222', '333', '444', '555', '666']}/>
      <Answer />
  </div>
);
export default WrapperChoiceAnswer;
