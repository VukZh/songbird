import React from "react";
const HeaderTop = ({ result }) => {
  return (
    <div className="header__top">
      <h1 className="header__title">
        Song<span className="header__title2">animal</span>
      </h1>
      <h3 className="header__score">Score: {result}</h3>
    </div>
  );
};
export default HeaderTop;
