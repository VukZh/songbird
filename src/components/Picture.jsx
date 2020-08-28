import React from "react";

const Picture = ({ pictureNumber, section }) => {
  const picClassName = +("" + section + (pictureNumber + 1));
  const className = `picture_${picClassName} question__icon`;
  return <div className={className}></div>;
};
export default Picture;
