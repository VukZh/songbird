import React from "react";
import Choice from "./Choose";
import Answer from "./Answer";

const WrapperChoiceAnswer = ({ numberQuestion }) => {
  return (
    <div className="wrapper__choice-answer">
      <Choice numberQuestion={numberQuestion} />
      <Answer />
    </div>
  );
};
export default WrapperChoiceAnswer;
