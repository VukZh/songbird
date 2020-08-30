import React, { useContext } from "react";
import Picture from "./Picture";
import Player from "./Player";
import AnswerText from "./AnswerText";
import AnswerDescription from "./AnswerDescription";
import { StepContext } from "../context/stepContext";

const Answer = () => {
  const valueStepContext = useContext(StepContext);
  if (valueStepContext.currentSel !== 999) {
    return (
      <div className="answer">
        <Picture></Picture>
        <AnswerText />
        <Player soundNumber={valueStepContext.currentSel} autoPlay={false} />
        <AnswerDescription />
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
