import React from "react";
import Picture from "./Picture";
import Player from "./Player";
import QuestionText from "./QuestionText";

const Question = ({numberQuestion, section}) => {

  // let randomQuestion = Math.floor(Math.random() * 6);
  // console.log ('   random   ' + randomQuestion);
  return (
    <div className="question">
      <Picture pictureNumber = {numberQuestion} section = {section}></Picture>
      {/* <div className="question__text" >question__text {numberQuestion}</div> */}
      <QuestionText  numberQuestion = {numberQuestion} section = {section}/>
      {/* <div className="question__player" >question__player {numberQuestion}</div> */}
      <Player soundNumber = {numberQuestion} section = {section}/>
    </div>
  );
};
export default Question;
