import React from 'react';
import Header from './Header';
import Question from './Question';
import WrapperChoiceAnswer from './WrapperChoiceAnswer';
import Next from './Next';
import Result from './Result';


const Main = () => (
    <div className = 'wrapper'>
        <Header />
        <Question />
        <WrapperChoiceAnswer />
        <Next />
        <Result />
    </div>
)
export default Main;