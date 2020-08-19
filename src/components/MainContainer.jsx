import React, {useState} from "react";
import Game from "./Game";
import Result from "./Result";

// import s11 from '../assets/audio/11.mp3';
// import s12 from '../assets/audio/12.mp3';
// import s13 from '../assets/audio/13.mp3';
// import s14 from '../assets/audio/14.mp3';
// import s15 from '../assets/audio/15.mp3';
// import s16 from '../assets/audio/16.mp3';
// import s21 from '../assets/audio/21.mp3';
// import s22 from '../assets/audio/22.mp3';
// import s23 from '../assets/audio/23.mp3';
// import s24 from '../assets/audio/24.mp3';
// import s25 from '../assets/audio/25.mp3';
// import s26 from '../assets/audio/26.mp3';
// import s31 from '../assets/audio/31.mp3';
// import s32 from '../assets/audio/32.mp3';
// import s33 from '../assets/audio/33.mp3';
// import s34 from '../assets/audio/34.mp3';
// import s35 from '../assets/audio/35.mp3';
// import s36 from '../assets/audio/36.mp3';
// import s41 from '../assets/audio/41.mp3';
// import s42 from '../assets/audio/42.mp3';
// import s43 from '../assets/audio/43.mp3';
// import s44 from '../assets/audio/44.mp3';
// import s45 from '../assets/audio/45.mp3';
// import s46 from '../assets/audio/46.mp3';
// import s51 from '../assets/audio/51.mp3';
// import s52 from '../assets/audio/52.mp3';
// import s53 from '../assets/audio/53.mp3';
// import s54 from '../assets/audio/54.mp3';
// import s55 from '../assets/audio/55.mp3';
// import s56 from '../assets/audio/56.mp3';
// import s61 from '../assets/audio/61.mp3';
// import s62 from '../assets/audio/62.mp3';
// import s63 from '../assets/audio/63.mp3';
// import s64 from '../assets/audio/64.mp3';
// import s65 from '../assets/audio/65.mp3';
// import s66 from '../assets/audio/66.mp3';


// const audioFiles  = {
//   11: s11,
//   12: s12,
//   13: s13,
//   14: s14,
//   15: s15,
//   16: s16,
//   21: s21,
//   22: s22,
//   23: s23,
//   24: s24,
//   25: s25,
//   26: s26,
//   31: s31,
//   32: s32,
//   33: s33,
//   34: s34,
//   35: s35,
//   36: s36,
//   41: s41,
//   42: s42,
//   43: s43,
//   44: s44,
//   45: s45,
//   46: s46,
//   51: s51,
//   52: s52,
//   53: s53,
//   54: s54,
//   55: s55,
//   56: s56,
//   61: s61,
//   62: s62,
//   63: s63,
//   64: s64,
//   65: s65,
//   66: s66
// }


const Main = () => {



  const [section, setSection] = useState(1);

  const [finishFlag, setFinal] = useState(false);

  const [guessFlag, setGuess] = useState(999);

  const [selectedArr, setFlag] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  let randomQuestion;

  if (guessFlag === 999) {randomQuestion = Math.floor(Math.random() * 6)} else {randomQuestion = guessFlag};


  
  if (!finishFlag) {
    return <Game section = {section} numberQuestion ={randomQuestion} updateSection = {setSection} setFinal = {setFinal} setGuess = {setGuess} guessFlag = {guessFlag} selectedArr = {selectedArr} setFlag = {setFlag}/>;
  }
  return <Result updateSection = {setSection} setFinal = {setFinal} setGuess = {setGuess}/>;
};

export default Main;
// export {audioFiles};