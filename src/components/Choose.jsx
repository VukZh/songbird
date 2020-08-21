import React, { useState } from "react";

import animalsData from "../data/data";

import soundOK from "../assets/audio/ok.mp3";
import soundNO from "../assets/audio/no.mp3";

// const playSoundOK = new Audio(soundOK);
// const playSoundNO = new Audio(soundNO);

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


  // selectedArr = {selectedArr} setFlag = {setFlag}

  // const [selectedArr, setFlag] = useState({
  //   0: false,
  //   1: false,
  //   2: false,
  //   3: false,
  //   4: false,
  //   5: false,
  // });

  // if (guessFlag === numberQuestion) {
  //   alert('ss')
  //   // setFlag({
  //   //   0: false,
  //   //   1: false,
  //   //   2: false,
  //   //   3: false,
  //   //   4: false,
  //   //   5: false,
  //   // })
  // }

  // const [chosen, setChoose] = useState(false);

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
        // calculateFlag = true;
      }
      setChoose(true);
      setGuess(numberQuestion);

      // updateClick(0);
      // console.log(countClick + " countClick >>>>>>>>>> result " + result);

      //

      // setFlag({
      //   0: false,
      //   1: false,
      //   2: false,
      //   3: false,
      //   4: false,
      //   5: false,
      // })
      // alert('111')
      // setGuess(true);
      // alert('aaaa')
    }
  };

  // const questions = arrQuestion.map((item, ind) =>{
  //     const className = (ind === (numberQuestion)) ? 'currentSection choice__item' : 'choice__item';

  // useEffect (() => {
  //   setFlag({
  //     0: false,
  //     1: false,
  //     2: false,
  //     3: false,
  //     4: false,
  //     5: false,
  //   })
  // }, [guessFlag]);

  const questions = arrQuestion.map((item, ind) => {
    const playSoundOK = new Audio(soundOK);
    const playSoundNO = new Audio(soundNO);

    const className = selectedArr[ind]
      ? ind === numberQuestion
        ? "choice__item choice__item_ok"
        : "choice__item choice__item_no"
      : "choice__item choice__item_question";
    // const className = (ind === (numberQuestion)) ? 'currentSection choice__item' : 'choice__item';

    // console.log('.......... ' + selectedArr)

    const playSound = ind === numberQuestion ? playSoundOK : playSoundNO;

    // const onClick = () => { playSound.play() ; console.log(`Choice ${ind}`); updateSelectedArr(ind); console.log('0 ' + selectedArr[0]  + '  ' + '1 ' + selectedArr[1] + '  ' + '2 ' + selectedArr[2] + '  ' + '3 ' + selectedArr[3] + '  ' + '4 ' + selectedArr[4]+ '  ' + '5 ' + selectedArr[5]) }
    const onClick = () => {
      сhosenFlag(ind);

      if (!chosen) {
        // updateClick(countClick + 1);
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
