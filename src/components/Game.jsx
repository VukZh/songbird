import React, {useState} from "react";
import Header from "./Header";
import Question from "./Question";
import WrapperChoiceAnswer from "./WrapperChoiceAnswer";
import Next from "./Next";



const Game = ({section, numberQuestion, updateSection, setFinal, setGuess, guessFlag, result, updateResult}) => {
    // let randomQuestion = Math.floor(Math.random() * 6);

    const [currentSel, setCurrentSel] = useState(999);

    const [selectedArr, setFlag] = useState({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    });

    const [chosen, setChoose] = useState(false);

    const [countClick, updateClick] = useState(0);



  return (
    <div className="wrapper">
      <Header section = {section} result = {result}/>
      <Question numberQuestion ={numberQuestion} section = {section} guess = {false} guessFlag = {guessFlag}/>
      <WrapperChoiceAnswer numberQuestion ={numberQuestion} section = {section} setGuess = {setGuess} guessFlag = {guessFlag} currentSel = {currentSel} setCurrentSel = {setCurrentSel} selectedArr = {selectedArr} setFlag = {setFlag} setChoose = {setChoose} chosen = {chosen} countClick = {countClick} updateClick = {updateClick}/>
      <Next section = {section} updateSection = {updateSection} setFinal = {setFinal} numberQuestion = {numberQuestion} guessFlag = {guessFlag} setGuess = {setGuess}  setCurrentSel = {setCurrentSel} setFlag = {setFlag} setChoose = {setChoose} countClick = {countClick} updateClick = {updateClick} updateResult = {updateResult} result = {result}/>

    </div>
  );
};
export default Game;
