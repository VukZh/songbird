import React from "react";
import Picture from "./Picture";
import Player from "./Player";
import AnswerText from "./AnswerText";
import AnswerDescription from "./AnswerDescription";

const Answer = ({ currentSel, section }) => {
  if (currentSel !== 999) {
    return (
      <div className="answer">
        <Picture pictureNumber={currentSel} section={section}></Picture>
        <AnswerText numberQuestion={currentSel} section={section} />
        <Player soundNumber={currentSel} section={section} autoPlay={false} />
        <AnswerDescription numberQuestion={currentSel} section={section} />
      </div>
    );
  } else {
    return (
      <div className="noAnswer">
        <div>Послушайте плеер.</div>
        <div>Выберите животное из списка</div>
      </div>
    );
  }
};
export default Answer;
