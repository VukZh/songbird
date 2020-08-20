import React from "react";
import Picture from "./Picture";
import Player from "./Player";
import AnswerText from "./AnswerText";
import AnswerDescription from "./AnswerDescription";

const Answer = ({ currentSel, section }) => {
    // console.log ('chosen ' + chosen);
  if (currentSel !== 999) {
    return (
      <div className="answer">
        {/* <div className="answer__icon">answer__icon</div> */}
        <Picture pictureNumber={currentSel} section={section}></Picture>
        {/* <div className="answer__text">answer__text</div> */}

        <AnswerText numberQuestion={currentSel} section={section} />

        {/* <div className="answer__player">answer__player</div> */}
        <Player soundNumber={currentSel} section={section} />
        <AnswerDescription numberQuestion={currentSel} section={section} />
        {/* <div className="answer__specification">answer__specification</div> */}
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
