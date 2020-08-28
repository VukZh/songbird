import React from "react";
import Picture from "./Picture";
import Player from "./Player";
import QuestionText from "./QuestionText";

const Question = ({ numberQuestion, section, guessFlag }) => {
  if (guessFlag !== 999) {
    return (
      <div className="question">
        <Picture pictureNumber={numberQuestion} section={section}></Picture>
        <QuestionText numberQuestion={numberQuestion} section={section} />
        <Player
          soundNumber={numberQuestion}
          section={section}
          autoPlay={true}
          flagPause
        />
      </div>
    );
  }
  return (
    <div className="question">
      <div className="picture_question question__icon"></div>
      <div className="question__text">******</div>
      <Player soundNumber={numberQuestion} section={section} autoPlay={true} />
    </div>
  );
};
export default Question;
