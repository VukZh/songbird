import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderSection from "./HeaderSection";
const Header = ({ section, result }) => {
  return (
    <div className="header">
      <HeaderTop result={result} />
      <HeaderSection currSection={section} />
    </div>
  );
};

export default Header;
