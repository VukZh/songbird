import React from "react";
import Choice from './Choose';
import Answer from './Answer';
const WrapperChoiceAnswer = ({numberQuestion, section, setGuess, guessFlag, currentSel, setCurrentSel, selectedArr, setFlag, setChoose, chosen, countClick, updateClick}) => {

  // setChoose = {setChoose} chosen = {chosen}

  return (
    <div className="wrapper__choice-answer">
    <Choice numberQuestion = {numberQuestion} section = {section} setGuess = {setGuess} guessFlag = {guessFlag} setCurrentSel = {setCurrentSel} selectedArr = {selectedArr} setFlag = {setFlag} setChoose = {setChoose} chosen = {chosen} countClick = {countClick} updateClick = {updateClick}/>
    <Answer numberQuestion = {numberQuestion} section = {section} guessFlag = {guessFlag} currentSel = {currentSel}/>
</div>
  )

};
export default WrapperChoiceAnswer;
