import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './QuizComponentStyle.css';
import {getQuestions} from "../../store/slices/question.clice";


const QuizComponent = () => {
    const {questionArr,id, dif} = useSelector(store => store.question);
    console.log(questionArr);
    const dispatch = useDispatch();


    useEffect(() => {
    dispatch(getQuestions({id, dif}))
    }, [dif, dispatch, id]);

    return (
        <div className={'quizComponent width flex'}>
            <div className={'quiz-block'}>

            </div>
        </div>
    );
};

export default QuizComponent;