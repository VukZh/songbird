import React, {useEffect} from "react";

// section = {section} updateSection = {updateSection} setFinal = {setFinal}

const Next = ({section, updateSection, setFinal, guessFlag, setGuess, setCurrentSel, setFlag, setChoose}) => {
    

    // countClick = {countClick} updateResult = {updateResult}

    // useEffect (() => {
        
    // })

    const nextStep = () => {


        setGuess(999);
        setCurrentSel(999);
        setChoose(false);

        // if (guessFlag !== 999) {
            // updateResult(6 - countClick + result);
            // updateClick(0);
            // console.log(countClick + ' countClick >>>>>>>>>> result ' + result);
        // }
        
        

        setFlag({
            0: false,
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
        })
        if (section > 5) {
            setFinal(true)
        } else {
            updateSection(section + 1);
            // setCurrentSel(999);
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
