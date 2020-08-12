import React from 'react';
const HeaderSection = ({currSection, arrSection}) => {

    const sections = arrSection.map((item, ind) =>{
        const className = (ind === (currSection)) ? 'currentSection header__section__item' : 'header__section__item';
        console.log('.......... ' + className)
        return (
        <div key = {ind} className={className} onClick = {() => {console.log(`section ${ind}`)}}>{item}</div>
        )
    })

    return (
        <div className = 'header__section'>
            {sections}
        </div>
    )
}
export default HeaderSection;