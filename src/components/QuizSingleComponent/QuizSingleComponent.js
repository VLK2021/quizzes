import React, {useEffect, useState} from 'react';

import './QuizSingleComponentStyle.css';
import {AnswersComponent} from "../AnswersComponent/AnswersComponent";


const QuizSingleComponent = ({questionObj, setNameCategory, setNameDifficulty}) => {
    const {
        category,
        correct_answer,
        difficulty,
        incorrect_answers,
        question
    } = questionObj;

    const [answerArray, setAnswerArray] = useState([]);

    useEffect(() => {
        setNameCategory(category)
        setNameDifficulty(difficulty)
        setAnswerArray([...incorrect_answers, correct_answer]);
    }, [category, correct_answer, difficulty, incorrect_answers, setNameCategory, setNameDifficulty]);




    return (
        <div className={'quizSingleComponent width'}>
            <div className={'question-title width'}>
                {question}
            </div>

            <div className={'answers-block width'}>
                {answerArray.length > 0 && <AnswersComponent answerArray={answerArray}
                                                             correct_answer={correct_answer}
                />}
            </div>
        </div>
    );
};

export {QuizSingleComponent};