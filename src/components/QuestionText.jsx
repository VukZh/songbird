import React from "react";
import animalsData from "../data/data";

const QuestionText = ({ numberQuestion, section }) => {
    const name = animalsData[section - 1].filter(item => (item.id  - 1) === numberQuestion)[0].name
    // console.log('namenamenamename ......' + name[0].name);
  return (
    <div className="question__text">
        {name}
    </div>
  );
};
export default QuestionText;
