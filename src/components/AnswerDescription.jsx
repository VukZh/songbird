import React from "react";
import animalsData from "../data/data";

const AnswerDescription = ({ numberQuestion, section }) => {
  const name = animalsData[section - 1].filter(
    (item) => item.id - 1 === numberQuestion
  )[0];
  return <div className="answer__specification">{name.description}</div>;
};
export default AnswerDescription;
