import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";

const HeaderTop = () => {
  const valueContext = useContext(MainContext);

  return (
    <div className="header__top">
      <h1 className="header__title">
        Song<span className="header__title2">animal</span>
      </h1>
      <h3 className="header__score">Score: {valueContext.result}</h3>
    </div>
  );
};
export default HeaderTop;
