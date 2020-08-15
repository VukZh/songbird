import React, {useState} from 'react';

import animalsData from "../data/data";

const Choice = ({numberQuestion, section}) => {

    const arrQuestion = animalsData[section - 1]

    const [selectedArr, setFlag] = useState( {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    });

    // const updateSelectedArr = (ind) => setFlag ({...selectedArr, [ind]: true} );

    const updateSelectedArr = ind => {
        setFlag({
          ...selectedArr,
          [ind]: true
        });
      };

    // const questions = arrQuestion.map((item, ind) =>{
    //     const className = (ind === (numberQuestion)) ? 'currentSection choice__item' : 'choice__item';

    const questions = arrQuestion.map((item, ind) =>{
        const className = (selectedArr[ind]) ? 'currentSection choice__item' : 'choice__item';
        // const className = (ind === (numberQuestion)) ? 'currentSection choice__item' : 'choice__item';

        // console.log('.......... ' + selectedArr)
        return (
        <div key = {ind} className={className} onClick = {() => {console.log(`Choice ${ind}`); updateSelectedArr(ind); console.log('0 ' + selectedArr[0]  + '  ' + '1 ' + selectedArr[1] + '  ' + '2 ' + selectedArr[2] + '  ' + '3 ' + selectedArr[3] + '  ' + '4 ' + selectedArr[4]+ '  ' + '5 ' + selectedArr[5]) }}>{item.name}</div>
        )
    })

    return (
        <div className = 'choice'>
            {questions}
        </div>
    )

}
export default Choice;