import React from 'react';
import Picture from "./Picture";
import Player from "./Player";

const Answer = () => (
    <div className = 'answer'>
        {/* <div className="answer__icon">answer__icon</div> */}
        <Picture namePic = 'question'></Picture>
        <div className="answer__text">answer__text</div>
        {/* <div className="answer__player">answer__player</div> */}
        <Player />
        <div className="answer__specification">answer__specification</div>
    </div>
)
export default Answer;