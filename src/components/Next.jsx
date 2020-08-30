import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";
import { StepContext } from "../context/stepContext";

const Next = () => {
  const valueContext = useContext(MainContext);
  const valueStepContext = useContext(StepContext);

  const nextStep = () => {
    valueContext.setGuess(999);
    valueStepContext.setCurrentSel(999);
    valueStepContext.setChoose(false);
    valueStepContext.setFlag({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    });
    if (valueContext.section > 5) {
      valueContext.setFinal(true);
    } else {
      valueContext.setSection(valueContext.section + 1);
    }
  };

  if (valueContext.guessFlag !== 999) {
    return (
      <div className="next_ok" onClick={nextStep}>
        Дальше
      </div>
    );
  } else {
    return <div className="next">Дальше</div>;
  }
};
export default Next;
