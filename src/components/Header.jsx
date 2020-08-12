import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderSection from "./HeaderSection";
const Header = () => {

  let section = 5;
  let sectionTitles = ['Разминка','Домашние животные','Насекомые','Амфибии','Хищные животные','Морские млекопитающие'];

  return (
    <div className="header">
      <HeaderTop />
      <HeaderSection currSection={section} arrSection = {sectionTitles}/>
    </div>
  );
};

export default Header;
