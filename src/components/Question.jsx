import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";
import Picture from "./Picture";
import Player from "./Player";
import QuestionText from "./QuestionText";

const Question = ({ numberQuestion }) => {
  const valueContext = useContext(MainContext);

  if (valueContext.guessFlag !== 999) {
    return (
      <div className="question">
        <Picture pictureNumber={numberQuestion}></Picture>
        <QuestionText numberQuestion={numberQuestion} />
        <Player soundNumber={numberQuestion} autoPlay={true} flagPause />
      </div>
    );
  }
  return (
    <div className="question">
      <div className="picture_question question__icon"></div>
      <div className="question__text">******</div>
      <Player soundNumber={numberQuestion} autoPlay={true} />
    </div>
  );
};
export default Question;
