import React from "react";
import animalsData from "../data/data";

const AnswerText = ({ numberQuestion, section }) => {
  const name = animalsData[section - 1].filter(
    (item) => item.id - 1 === numberQuestion
  )[0];
  return (
    <div className="answer__text">
      <div className="answer__text_1">{name.name}</div>
      <div className="answer__text_2">{name.species}</div>
    </div>
  );
};
export default AnswerText;
