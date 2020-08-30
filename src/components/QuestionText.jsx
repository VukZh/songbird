import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";
import animalsData from "../data/data";

const QuestionText = ({ numberQuestion }) => {
  const valueContext = useContext(MainContext);
  const name = animalsData[valueContext.section - 1].filter(
    (item) => item.id - 1 === numberQuestion
  )[0].name;
  return <div className="question__text">{name}</div>;
};
export default QuestionText;
