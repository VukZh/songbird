import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";

const HeaderSection = () => {
  const valueContext = useContext(MainContext);

  const arrSection = [
    "Разминка",
    "Домашние животные",
    "Насекомые",
    "Амфибии",
    "Хищные животные",
    "Морские млекопитающие",
  ];
  const sections = arrSection.map((item, ind) => {
    const className =
      ind === valueContext.section - 1
        ? "currentSection header__section__item"
        : "header__section__item";
    return (
      <div key={ind} className={className}>
        {item}
      </div>
    );
  });

  return <div className="header__section">{sections}</div>;
};
export default HeaderSection;
