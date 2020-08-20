import React from 'react';
const HeaderSection = ({currSection}) => {

    const arrSection = ['Разминка','Домашние животные','Насекомые','Амфибии','Хищные животные','Морские млекопитающие'];
    const sections = arrSection.map((item, ind) =>{
        const className = (ind === (currSection - 1)) ? 'currentSection header__section__item' : 'header__section__item';
        // console.log('.......... ' + className)
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