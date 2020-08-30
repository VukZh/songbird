import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";
import { StepContext } from "../context/stepContext";

const Picture = () => {
  const valueContext = useContext(MainContext);
  const valueStepContext = useContext(StepContext);
  const picClassName = +(
    "" +
    valueContext.section +
    (valueStepContext.currentSel + 1)
  );
  const className = `picture_${picClassName} question__icon`;
  return <div className={className}></div>;
};
export default Picture;
