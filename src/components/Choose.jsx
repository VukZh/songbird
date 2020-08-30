import React, { useContext } from "react";
import animalsData from "../data/data";
import soundOK from "../assets/audio/ok.mp3";
import soundNO from "../assets/audio/no.mp3";
import { MainContext } from "../context/mainContext";
import { StepContext } from "../context/stepContext";

const counterSelectedArr = (obj) => {
  let counter = 0;
  for (let key in obj) {
    if (obj[key]) counter++;
  }
  return counter;
};

const Choose = ({ numberQuestion }) => {
  const valueContext = useContext(MainContext);
  const valueStepContext = useContext(StepContext);
  const arrQuestion = animalsData[valueContext.section - 1];
  const updateSelectedArr = (ind) => {
    valueStepContext.setFlag({
      ...valueStepContext.selectedArr,
      [ind]: true,
    });
  };

  const сhosenFlag = (ind) => {
    valueStepContext.setCurrentSel(ind);
    if (ind === numberQuestion) {
      if (!valueStepContext.chosen) {
        valueContext.updateResult(
          5 -
            counterSelectedArr(valueStepContext.selectedArr) +
            valueContext.result
        );
      }
      valueStepContext.setChoose(true);
      valueContext.setGuess(numberQuestion);
    }
  };
  const questions = arrQuestion.map((item, ind) => {
    const playSoundOK = new Audio(soundOK);
    const playSoundNO = new Audio(soundNO);

    const className = valueStepContext.selectedArr[ind]
      ? ind === numberQuestion
        ? "choice__item choice__item_ok"
        : "choice__item choice__item_no"
      : "choice__item choice__item_question";
    const playSound = ind === numberQuestion ? playSoundOK : playSoundNO;
    const onClick = () => {
      сhosenFlag(ind);

      if (!valueStepContext.chosen) {
        playSound.play();
        updateSelectedArr(ind);
      }
    };

    return (
      <div key={ind} className={className} onClick={() => onClick()}>
        {item.name}
      </div>
    );
  });

  return (
    <>
      <div className="choice">{questions}</div>
    </>
  );
};
export default Choose;
