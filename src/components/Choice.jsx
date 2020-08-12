import React from 'react';
const Choice = ({numberQuestion, arrQuestion}) => {

    const questions = arrQuestion.map((item, ind) =>{
        const className = (ind === (numberQuestion)) ? 'currentSection choice__item' : 'choice__item';
        // console.log('.......... ' + className)
        return (
        <div key = {ind} className={className} onClick = {() => {console.log(`Choice ${ind}`)}}>{item}</div>
        )
    })

    return (
        <div className = 'choice'>
            {questions}
        </div>
    )

}
export default Choice;