import React, {useEffect, useState} from 'react';
import moment from 'moment';

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
    const [time, setTime] = useState('00:00');

    const startTime = moment();

    useEffect(() => {
        const timerId = setInterval(() => {
            const currentTime = moment();
            const duration = moment.duration(currentTime.diff(startTime));
            const formattedTime = moment.utc(duration.asMilliseconds()).format('mm:ss');
            setTime(formattedTime);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);


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

            <div className={'time width'}>
                {time}
            </div>

            <div className={'answers-block width'}>
                {answerArray.length > 0 && <AnswersComponent answerArray={answerArray}
                                                             correct_answer={correct_answer}
                                                             time={time}
                />}
            </div>
        </div>
    );
};

export {QuizSingleComponent};