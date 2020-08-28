import React, { useState } from "react";
import Game from "./Game";
import Result from "./Result";
const Main = () => {
  const [section, setSection] = useState(1);
  const [finishFlag, setFinal] = useState(false);
  const [guessFlag, setGuess] = useState(999);
  const [result, updateResult] = useState(0);
  let randomQuestion;
  if (guessFlag === 999) {
    randomQuestion = Math.floor(Math.random() * 6);
  } else {
    randomQuestion = guessFlag;
  }
  if (!finishFlag) {
    return (
      <Game
        section={section}
        numberQuestion={randomQuestion}
        updateSection={setSection}
        setFinal={setFinal}
        setGuess={setGuess}
        guessFlag={guessFlag}
        result={result}
        updateResult={updateResult}
      />
    );
  }
  return (
    <Result
      updateSection={setSection}
      setFinal={setFinal}
      setGuess={setGuess}
      result={result}
      updateResult={updateResult}
    />
  );
};
export default Main;
