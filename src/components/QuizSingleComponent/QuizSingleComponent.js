import React, {useEffect, useState} from 'react';

import './QuizSingleComponentStyle.css';


const QuizSingleComponent = ({questionObj, setNameCategory, setNameDifficulty}) => {
    const {
        category,
        correct_answer,
        difficulty,
        incorrect_answers,
        question
    } = questionObj;



    useEffect(() => {
        setNameCategory(category)
        setNameDifficulty(difficulty)

    }, [category, correct_answer, difficulty, incorrect_answers, setNameCategory, setNameDifficulty]);


    return (
        <div className={'quizSingleComponent width'}>
            <div className={'question-title width'}>
                {question}
            </div>

            <div className={'answers-block width'}>

            </div>
        </div>
    );
};

export {QuizSingleComponent};