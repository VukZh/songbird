import React from "react";
import animalsData from "../data/data";
import soundOK from "../assets/audio/ok.mp3";
import soundNO from "../assets/audio/no.mp3";

const counterSelectedArr = (obj) => {
  let counter = 0;
  for (let key in obj) {
    if (obj[key]) counter++;
  }
  return counter;
};

const Choose = ({
  numberQuestion,
  section,
  setGuess,
  setCurrentSel,
  selectedArr,
  setFlag,
  setChoose,
  chosen,
  updateResult,
  result,
}) => {
  const arrQuestion = animalsData[section - 1];

  const updateSelectedArr = (ind) => {
    setFlag({
      ...selectedArr,
      [ind]: true,
    });
  };

  const сhosenFlag = (ind) => {
    setCurrentSel(ind);
    if (ind === numberQuestion) {
      if (!chosen) {
        updateResult(5 - counterSelectedArr(selectedArr) + result);
      }
      setChoose(true);
      setGuess(numberQuestion);
    }
  };
  const questions = arrQuestion.map((item, ind) => {
    const playSoundOK = new Audio(soundOK);
    const playSoundNO = new Audio(soundNO);

    const className = selectedArr[ind]
      ? ind === numberQuestion
        ? "choice__item choice__item_ok"
        : "choice__item choice__item_no"
      : "choice__item choice__item_question";
    const playSound = ind === numberQuestion ? playSoundOK : playSoundNO;
    const onClick = () => {
      сhosenFlag(ind);

      if (!chosen) {
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
