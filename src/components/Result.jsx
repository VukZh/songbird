import React from "react";

// updateSection = {setSection} setFinal = {setFinal}
const Result = ({ updateSection, setFinal, setGuess }) => {
  const resetGame = () => {
    updateSection(1);
    setFinal(false);
    setGuess(999);
  }
  return (
    <div className="wrapper">
      <div className="result">
        <div className="result__text">
          <div className="result__text__cap">Поздравляем!</div>
          <div className="result__text__result">
            Вы прошли викторину и набрали 19 из 30 возможных баллов
          </div>
        </div>
        <div className="result__new" onClick = {resetGame}>Попробовать еще раз!</div>
      </div>
    </div>
  );
};

export default Result;
