import React from "react";
import Confetti from "react-confetti";
import soundFinal from "../assets/audio/final.mp3";
import soundWin from "../assets/audio/win.mp3";

const Result = ({
  updateSection,
  setFinal,
  setGuess,
  result,
  updateResult,
}) => {
  let playSound;
  if (result === 30) {
    playSound = new Audio(soundWin);
  } else {
    playSound = new Audio(soundFinal);
  }
  playSound.play();

  const resetGame = () => {
    updateSection(1);
    setFinal(false);
    setGuess(999);
    updateResult(0);
  };
  if (result !== 30) {
    return (
      <div className="wrapper">
        <div className="result">
          <div className="result__text">
            <div className="result__text__cap">Поздравляем!</div>
            <div className="result__text__result">
              Вы прошли викторину и набрали {result} из 30 возможных баллов
            </div>
          </div>
          <div className="result__new" onClick={resetGame}>
            Попробовать еще раз!
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <div className="result">
          <div className="result__text">
            <div className="result__text__cap">Поздравляем!</div>
            <div className="result__text__result">
              Вы прошли викторину и набрали максимальное число баллов!!!
            </div>
          </div>
          <div className="result__new" onClick={resetGame}>
            Попробовать еще раз!
          </div>
        </div>
        <Confetti recycle={false} numberOfPieces={450} />
      </div>
    );
  }
};

export default Result;
