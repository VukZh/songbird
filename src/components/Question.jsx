import React from "react";
const Question = ({numberQuestion}) => {

  let randomQuestion = Math.floor(Math.random() * 6);
  // console.log ('   random   ' + randomQuestion);
  return (
    <div className="question">
      <div className="question__icon" >question__icon {numberQuestion}</div>
      <div className="question__text" >question__text {numberQuestion}</div>
      <div className="question__player" >question__player {numberQuestion}</div>
    </div>
  );
};
export default Question;
