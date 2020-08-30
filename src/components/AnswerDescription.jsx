import React, { useContext } from "react";
import animalsData from "../data/data";
import { MainContext } from "../context/mainContext";
import { StepContext } from "../context/stepContext";

const AnswerDescription = () => {
  const valueContext = useContext(MainContext);
  const valueStepContext = useContext(StepContext);
  const name = animalsData[valueContext.section - 1].filter(
    (item) => item.id - 1 === valueStepContext.currentSel
  )[0];
  return <div className="answer__specification">{name.description}</div>;
};
export default AnswerDescription;
