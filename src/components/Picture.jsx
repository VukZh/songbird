import React from "react";

const Picture = ({ namePic }) => {
    // const path = process.env.PUBLIC_URL + '/assets/images/animals/' + namePic + '.jpg';
    // console.log('path ' + path);
    const className = `picture_${namePic} question__icon`;
    console.log('className-pic ' + className);
    return (
        <div className = {className}></div>
    )  
};
export default Picture;
