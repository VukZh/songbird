import React from "react";
import Picture from "./Picture";
import Player from "./Player";
const Question = ({numberQuestion}) => {

  // let randomQuestion = Math.floor(Math.random() * 6);
  // console.log ('   random   ' + randomQuestion);
  return (
    <div className="question">
      <Picture namePic = 'question'></Picture>
      <div className="question__text" >question__text {numberQuestion}</div>
      {/* <div className="question__player" >question__player {numberQuestion}</div> */}
      <Player />
    </div>
  );
};
export default Question;
