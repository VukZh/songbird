import React from "react";

// import question from '../assets/images/animals/question.jpg';
// import picture_11 from '../assets/images/animals/11.jpg';
// import picture_12 from '../assets/images/animals/12.jpg';
// import picture_13 from '../assets/images/animals/13.jpg';
// import picture_14 from '../assets/images/animals/14.jpg';
// import picture_15 from '../assets/images/animals/15.jpg';
// import picture_16 from '../assets/images/animals/16.jpg';
// import picture_21 from '../assets/images/animals/21.jpg';
// import picture_22 from '../assets/images/animals/22.jpg';
// import picture_23 from '../assets/images/animals/23.jpg';
// import picture_24 from '../assets/images/animals/24.jpg';
// import picture_25 from '../assets/images/animals/25.jpg';
// import picture_26 from '../assets/images/animals/26.jpg';
// import picture_31 from '../assets/images/animals/31.jpg';
// import picture_32 from '../assets/images/animals/32.jpg';
// import picture_33 from '../assets/images/animals/33.jpg';
// import picture_34 from '../assets/images/animals/34.jpg';
// import picture_35 from '../assets/images/animals/35.jpg';
// import picture_36 from '../assets/images/animals/36.jpg';
// import picture_41 from '../assets/images/animals/41.jpg';
// import picture_42 from '../assets/images/animals/42.jpg';
// import picture_43 from '../assets/images/animals/43.jpg';
// import picture_44 from '../assets/images/animals/44.jpg';
// import picture_45 from '../assets/images/animals/45.jpg';
// import picture_46 from '../assets/images/animals/46.jpg';
// import picture_51 from '../assets/images/animals/51.jpg';
// import picture_52 from '../assets/images/animals/52.jpg';
// import picture_53 from '../assets/images/animals/53.jpg';
// import picture_54 from '../assets/images/animals/54.jpg';
// import picture_55 from '../assets/images/animals/55.jpg';
// import picture_56 from '../assets/images/animals/56.jpg';
// import picture_61 from '../assets/images/animals/61.jpg';
// import picture_62 from '../assets/images/animals/62.jpg';
// import picture_63 from '../assets/images/animals/63.jpg';
// import picture_64 from '../assets/images/animals/64.jpg';
// import picture_65 from '../assets/images/animals/65.jpg';
// import picture_66 from '../assets/images/animals/66.jpg';

// const picFiles  = {
//   99 : question,
//   11: picture_11,
//   12: picture_12,
//   13: picture_13,
//   14: picture_14,
//   15: picture_15,
//   16: picture_16,
//   21: picture_21,
//   22: picture_22,
//   23: picture_23,
//   24: picture_24,
//   25: picture_25,
//   26: picture_26,
//   31: picture_31,
//   32: picture_32,
//   33: picture_33,
//   34: picture_34,
//   35: picture_35,
//   36: picture_36,
//   41: picture_41,
//   42: picture_42,
//   43: picture_43,
//   44: picture_44,
//   45: picture_45,
//   46: picture_46,
//   51: picture_51,
//   52: picture_52,
//   53: picture_53,
//   54: picture_54,
//   55: picture_55,
//   56: picture_56,
//   61: picture_61,
//   62: picture_62,
//   63: picture_63,
//   64: picture_64,
//   65: picture_65,
//   66: picture_66
// }


const Picture = ({pictureNumber, section}) => {
    // const path = process.env.PUBLIC_URL + '/assets/images/animals/' + namePic + '.jpg';
    // console.log('path ' + path);

    const picClassName = +('' + section + (pictureNumber + 1));

    // const className = `picture_${namePic} question__icon`;
    const className = `picture_${picClassName} question__icon`;
    // console.log('className-pic ' + className + '... indPicFiles' + indPicFiles);
    return (
        <div className = {className}></div>
    )  
};
export default Picture;
