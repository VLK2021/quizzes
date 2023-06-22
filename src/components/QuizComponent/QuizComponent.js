import React, {useCallback, useEffect, useState,} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';

import './QuizComponentStyle.css';
import {getQuestions} from "../../store/slices/question.clice";
import {QuizSingleComponent} from "../QuizSingleComponent/QuizSingleComponent";
import {statisticAction} from "../../store/slices/statistik.slice";


const QuizComponent = () => {
    const {questionArr, id, dif} = useSelector(store => store.question);
    const {result, counter} = useSelector(store => store.statistic);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [questionObj, setQuestionObj] = useState(null);

    const [nameCategory, setNameCategory] =useState(null);
    const [nameDifficulty, setNameDifficulty] =useState(null);



    useEffect(() => {
        dispatch(getQuestions({id, dif}))
    }, [id, dif, dispatch]);

    useEffect(() => {
        if (questionArr.length > 0) {
            setQuestionObj(questionArr[currentIndex]);
        }
    }, [questionArr, currentIndex]);


    const nextQuestion = useCallback(() => {
        if (counter < 10) {
            dispatch(statisticAction.changeCounter(counter + 1));
            dispatch(statisticAction.changePercent((counter * 100)/ 10));
        }
        if (currentIndex < questionArr.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setQuestionObj(questionArr[currentIndex]);
        }

    }, [counter, currentIndex, questionArr]);


    const stop = useCallback(() => {
        dispatch(statisticAction.changeResult(0));
        dispatch(statisticAction.changeCounter(1));
        dispatch(statisticAction.changePercent(0));
        navigate('/');
    }, [navigate]);



    return (
        <div className={'quizComponent width'}>
            <div>
                <div className={'quiz-name flex'}>
                    <h1>Quiz:</h1>
                    <p>{nameCategory}</p>
                </div>
                <div className={'quiz-name flex'}>
                    <h1>Difficult:</h1>
                    <p>{nameDifficulty}</p>
                </div>

                <p>Question {counter} / {questionArr?.length}</p>
            </div>


            <div className="quiz-block">
                {questionObj && <QuizSingleComponent questionObj={questionObj}
                                                     setNameCategory={setNameCategory}
                                                     setNameDifficulty={setNameDifficulty}
                />}
            </div>

            <div className={'flex width btn-block'}>
                <button className={'btn stop'} onClick={stop}>stop</button>
                <div className={'result'}>result: {result} / {questionArr?.length}</div>
                <button className={'btn next'} onClick={nextQuestion}>NEXT</button>
            </div>
        </div>
    );
};

export default React.memo(QuizComponent);