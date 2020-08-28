import React from "react";
const Next = ({
  section,
  updateSection,
  setFinal,
  guessFlag,
  setGuess,
  setCurrentSel,
  setFlag,
  setChoose,
}) => {
  const nextStep = () => {
    setGuess(999);
    setCurrentSel(999);
    setChoose(false);
    setFlag({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    });
    if (section > 5) {
      setFinal(true);
    } else {
      updateSection(section + 1);
    }
  };

  if (guessFlag !== 999) {
    return (
      <div className="next_ok" onClick={nextStep}>
        Дальше
      </div>
    );
  } else {
    return <div className="next">Дальше</div>;
  }
};
export default Next;
