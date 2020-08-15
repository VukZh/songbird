import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderSection from "./HeaderSection";
const Header = ({section}) => {

  // let section = 3;
 

  return (
    <div className="header">
      <HeaderTop />
      <HeaderSection currSection={section} />
    </div>
  );
};

export default Header;
