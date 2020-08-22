import React from "react";
import Picture from "./Picture";
import Player from "./Player";
import QuestionText from "./QuestionText";

const Question = ({numberQuestion, section,  guessFlag}) => {

  // let randomQuestion = Math.floor(Math.random() * 6);
  // console.log ('   random   ' + randomQuestion);
  if (guessFlag !== 999) {
    return (
      <div className="question">
      <Picture pictureNumber = {numberQuestion} section = {section}></Picture>
      {/* <div className="question__text" >question__text {numberQuestion}</div> */}
      <QuestionText  numberQuestion = {numberQuestion} section = {section}/>
      {/* <div className="question__player" >question__player {numberQuestion}</div> */}
      <Player soundNumber = {numberQuestion} section = {section} autoPlay = {true} flagPause/>
    </div>
    )
  }
  return (
    <div className="question">
      <div className = "picture_question question__icon"></div>
      {/* <div className="question__text" >question__text {numberQuestion}</div> */}
      <div className="question__text">******</div>
      {/* <div className="question__player" >question__player {numberQuestion}</div> */}
      <Player soundNumber = {numberQuestion} section = {section} autoPlay = {true}/>
    </div>
  );
};
export default Question;
