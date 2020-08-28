import React from "react";
import Choice from "./Choose";
import Answer from "./Answer";
const WrapperChoiceAnswer = ({
  numberQuestion,
  section,
  setGuess,
  guessFlag,
  currentSel,
  setCurrentSel,
  selectedArr,
  setFlag,
  setChoose,
  chosen,
  updateResult,
  result,
}) => {
  return (
    <div className="wrapper__choice-answer">
      <Choice
        numberQuestion={numberQuestion}
        section={section}
        setGuess={setGuess}
        guessFlag={guessFlag}
        setCurrentSel={setCurrentSel}
        selectedArr={selectedArr}
        setFlag={setFlag}
        setChoose={setChoose}
        chosen={chosen}
        updateResult={updateResult}
        result={result}
      />
      <Answer
        numberQuestion={numberQuestion}
        section={section}
        guessFlag={guessFlag}
        currentSel={currentSel}
      />
    </div>
  );
};
export default WrapperChoiceAnswer;
