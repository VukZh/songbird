import React from "react";

// section = {section} updateSection = {updateSection} setFinal = {setFinal}

const Next = ({section, updateSection, setFinal, guessFlag, setGuess}) => {
    
    const nextStep = () => {
        if (section > 5) {
            setFinal(true)
        } else {
            updateSection(section + 1);
            setGuess(999);
        }
    }

    if (guessFlag !== 999) { //
        return (
            <div className="next_ok" onClick = {nextStep}>Дальше</div>
        )
    } else {
        return (
            <div className="next">Дальше</div>
        )
        }

}


export default Next;
