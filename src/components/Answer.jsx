import React from 'react';
import Picture from "./Picture";
import Player from "./Player";
import AnswerText from "./AnswerText";
import AnswerDescription from "./AnswerDescription";


const Answer = ({numberQuestion, section}) => (
    <div className = 'answer'>
        {/* <div className="answer__icon">answer__icon</div> */}
        <Picture pictureNumber = {numberQuestion} section = {section}></Picture>
        {/* <div className="answer__text">answer__text</div> */}

        <AnswerText  numberQuestion = {numberQuestion} section = {section}/>

        {/* <div className="answer__player">answer__player</div> */}
        <Player soundNumber = {numberQuestion}  section = {section}/>
        <AnswerDescription numberQuestion = {numberQuestion} section = {section}/>
        {/* <div className="answer__specification">answer__specification</div> */}
    </div>
)
export default Answer;